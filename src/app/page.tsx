import Banner from '@/components/Banner';
import CardPanel from '@/components/CardPanel';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Banner />

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-[#1a1a1a] dark:to-[#0a0a0a]">
        <section>
          <br></br>
          <h2 className="relative mb-12 text-center font-bold text-[#2c3e50] dark:text-gray-100 text-4xl md:text-[2.5rem]">
            Featured Venues
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#667eea] rounded"></span>
          </h2>
          <br></br>
          <CardPanel />
        </section>
        <br></br>
      </main>
    </div>
  );
}