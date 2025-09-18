'use client';

import { useReducer } from 'react';
import Card from './Card';

type RatingMap = Map<string, number>;

type RatingAction = 
  | { type: 'UPDATE_RATING'; venueName: string; rating: number }
  | { type: 'REMOVE_RATING'; venueName: string };

function ratingsReducer(state: RatingMap, action: RatingAction): RatingMap {
  switch (action.type) {
    case 'UPDATE_RATING': {
      const newState = new Map(state);
      newState.set(action.venueName, action.rating);
      return newState;
    }
    case 'REMOVE_RATING': {
      const newState = new Map(state);
      newState.delete(action.venueName);
      return newState;
    }
    default:
      return state;
  }
}

const initialRatings: RatingMap = new Map([
  ['The Bloom Pavilion', 0],
  ['Spark Space', 0],
  ['The Grand Table', 0],
]);

export default function CardPanel() {
  const [ratings, dispatch] = useReducer(ratingsReducer, initialRatings);

  const handleRatingChange = (venueName: string, rating: number | null) => {
    dispatch({
      type: 'UPDATE_RATING',
      venueName,
      rating: rating || 0,
    });
  };

  const handleRemoveRating = (venueName: string) => {
    dispatch({
      type: 'REMOVE_RATING',
      venueName,
    });
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-8">
        <div className="w-[360px] sm:w-[380px] max-w-full">
          <Card 
            venueName="The Bloom Pavilion" 
            imgSrc="/img/bloom.jpg"
            rating={ratings.get('The Bloom Pavilion') || 0}
            onRatingChange={(rating) => handleRatingChange('The Bloom Pavilion', rating)}
          />
        </div>
        <div className="w-[360px] sm:w-[380px] max-w-full">
          <Card 
            venueName="Spark Space" 
            imgSrc="/img/sparkspace.jpg"
            rating={ratings.get('Spark Space') || 0}
            onRatingChange={(rating) => handleRatingChange('Spark Space', rating)}
          />
        </div>
        <div className="w-[360px] sm:w-[380px] max-w-full">
          <Card 
            venueName="The Grand Table" 
            imgSrc="/img/grandtable.jpg"
            rating={ratings.get('The Grand Table') || 0}
            onRatingChange={(rating) => handleRatingChange('The Grand Table', rating)}
          />
        </div>
      </div>

      <div className="mt-12 max-w-4xl mx-auto">
        <div className="text-left">
          <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Venue List with Ratings : {ratings.size}
          </p>
          {Array.from(ratings.entries()).map(([venueName, rating]) => (
            <div
              key={venueName}
              data-testid={venueName}
              onClick={() => handleRemoveRating(venueName)}
              className="text-gray-700 dark:text-gray-300 cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {venueName} : {rating}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}