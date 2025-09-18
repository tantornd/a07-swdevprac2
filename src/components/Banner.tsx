import Image from 'next/image';

export default function Banner() {
  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      <div className="absolute inset-0 z-10">
        <Image
          src="/img/banner-venue.jpg"
          alt="Elegant venue space"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 z-20"></div>
      </div>
      <div className="relative z-30 h-full flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          where every event finds its venue
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl drop-shadow-md">
          Discover the perfect space for your special moments. From intimate gatherings 
          to grand celebrations, we offer exceptional venues tailored to make your event 
          unforgettable.
        </p>
      </div>
    </div>
  );
}