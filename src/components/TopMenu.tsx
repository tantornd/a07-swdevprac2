import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/60 backdrop-blur-md border-b border-black/5 dark:border-white/10 shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-end gap-3 w-full">
          <TopMenuItem title="Booking" pageRef="/booking" />
          <div className="flex items-center rounded-md bg-amber-50/80 dark:bg-white/5 px-3 py-1.5">
            <Image
              src="/img/logo.png"
              alt="Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
