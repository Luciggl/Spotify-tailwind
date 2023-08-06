import { Play, Heart, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume2, Maximize2 } from 'lucide-react'
import Image from 'next/image'
export function Footer(){
    return(

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
    )
}