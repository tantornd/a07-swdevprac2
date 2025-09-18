import Image from 'next/image';

// Inline venue data for testing compatibility
const venueDataMap = new Map([
  ['001', {
    vid: '001',
    venueName: 'The Bloom Pavilion',
    imgSrc: '/img/bloom.jpg',
    description: 'An elegant pavilion surrounded by beautiful gardens, perfect for sophisticated gatherings and memorable celebrations.',
    capacity: 'Up to 300 guests',
    features: 'Garden views, Natural lighting, Full catering kitchen'
  }],
  ['002', {
    vid: '002',
    venueName: 'Spark Space',
    imgSrc: '/img/sparkspace.jpg',
    description: 'A modern, versatile venue designed to inspire creativity and innovation for your special events.',
    capacity: 'Up to 150 guests',
    features: 'State-of-the-art AV system, Flexible layout, High-speed WiFi'
  }],
  ['003', {
    vid: '003',
    venueName: 'The Grand Table',
    imgSrc: '/img/grandtable.jpg',
    description: 'A luxurious dining venue offering an exquisite atmosphere for intimate gatherings and grand celebrations.',
    capacity: 'Up to 200 guests',
    features: 'Premium dining setup, Wine cellar, Private chef service'
  }]
]);

interface PageProps {
  params: Promise<{
    vid: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { vid } = await params;
  const venue = venueDataMap.get(vid);

  if (!venue) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-600">Venue not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-[#1a1a1a] dark:to-[#0a0a0a]">
      <div className="max-w-4xl w-full mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl overflow-hidden">
          <div className="relative h-[400px] md:h-[500px] w-full">
            <Image
              src={venue.imgSrc}
              alt={venue.venueName}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              {venue.venueName}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              {venue.description}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2 text-gray-700 dark:text-gray-300">Capacity</h3>
                <p className="text-gray-600 dark:text-gray-400">{venue.capacity}</p>
              </div>
              <div className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2 text-gray-700 dark:text-gray-300">Features</h3>
                <p className="text-gray-600 dark:text-gray-400">{venue.features}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}