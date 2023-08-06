import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Heart, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume2, Maximize2 } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">

        <aside className="w-72bg-zinc-950 p-6">

          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          <nav className="space-y-5 mt-8">
            <a href="#" className="flex item-center gap-3 text-sm font-semibold text-zinc-200">
              <HomeIcon />
              Home
            </a>
            <a href="#" className="flex item-center gap-3 text-sm font-semibold text-zinc-200">
              <Search />
              Search
            </a>
            <a href="#" className="flex item-center gap-3 text-sm font-semibold text-zinc-200">
              <Library />
              Your Library
            </a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-700 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Hot Hits Brasil</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Top Brasil</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">My PlayList #1</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">AniverFunk</a>
          </nav>

        </aside>

        <main className="flex-1 p-6 ">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/50 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/50 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">
            Good Afternoon
          </h1>

          <div className="grid grid-cols-3 gap-6 mt-4">
            <a href='#' className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/0 transition-colors">
              <Image src="/album1.jpg" width={104} height={104} alt="Capa Album" />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill='bg-black' />
              </button>
            </a>
            <a href='#' className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/0 transition-colors">
              <Image src="/album1.jpg" width={104} height={104} alt="Capa Album" />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill='bg-black' />
              </button>
            </a>
            <a href='#' className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/0 transition-colors">
              <Image src="/album1.jpg" width={104} height={104} alt="Capa Album" />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill='bg-black' />
              </button>
            </a>
            <a href='#' className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/0 transition-colors">
              <Image src="/album1.jpg" width={104} height={104} alt="Capa Album" />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill='bg-black' />
              </button>
            </a>
            <a href='#' className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/0 transition-colors">
              <Image src="/album1.jpg" width={104} height={104} alt="Capa Album" />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill='bg-black' />
              </button>
            </a>
            <a href='#' className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/0 transition-colors">
              <Image src="/album1.jpg" width={104} height={104} alt="Capa Album" />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill='bg-black' />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">
            Made for Lucielio Nascimento
          </h2>
          <div className="grid grid-cols-6 gap-4 mt-4">
            <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image src="/album1.jpg" className="w-full" width={104} height={104} alt="Capa Album" />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-500">Wallows, COIN, girl in the red and more</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image src="/album1.jpg" className="w-full" width={104} height={104} alt="Capa Album" />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-500">Wallows, COIN, girl in the red and more</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image src="/album1.jpg" className="w-full" width={104} height={104} alt="Capa Album" />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-500">Wallows, COIN, girl in the red and more</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image src="/album1.jpg" className="w-full" width={104} height={104} alt="Capa Album" />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-500">Wallows, COIN, girl in the red and more</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image src="/album1.jpg" className="w-full" width={104} height={104} alt="Capa Album" />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-500">Wallows, COIN, girl in the red and more</span>
            </a>

          </div>

        </main>

      </div>

      <footer className="bg-zinc-1200 border-t border-zinc-700 p-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/album1.jpg" width={56} height={56} alt="Capa Album" />
          <div className="flex flex-col">
            <strong className="font-normal">Rope</strong>
            <span className="text-xs text-zinc-400">Foo Fightersw</span>
          </div>
          <Heart size={25} />
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle size={20} />
            <SkipBack size={20} />
            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white">
              <Play fill='bg-black' />
            </button>
            <SkipForward size={20} />
            <Repeat size={20} />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">2:31</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />
          <div className="flex items-center gap-2">
            <Volume2 size={20} />
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
            </div>
          </div>
          <Maximize2 size={20} />
        </div>
      </footer>

    </div>
  )
}
