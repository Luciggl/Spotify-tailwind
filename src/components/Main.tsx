import { Home as ChevronLeft, ChevronRight, Play} from 'lucide-react'
import Image from 'next/image'
export function Main() {
  return (
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
        Tocados Recentemente
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
        Feito pra vocẽ
      </h2>
      <div className="grid grid-cols-6 gap-4 mt-4">
        <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
          <Image src="/album1.jpg" className="w-full" width={104} height={104} alt="Capa Album" />
          <strong className="font-semibold">Daily mix 1</strong>
          <span className="text-sm text-zinc-500">Evorney Fernande, Zé Vaqueiro, Gusttavo...</span>
        </a>
        <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
          <Image src="/album1.jpg" className="w-full" width={104} height={104} alt="Capa Album" />
          <strong className="font-semibold">Daily mix 2</strong>
          <span className="text-sm text-zinc-500">Tribo da Periferia, Hungria, Pacificadores...</span>
        </a>
        <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
          <Image src="/album1.jpg" className="w-full" width={104} height={104} alt="Capa Album" />
          <strong className="font-semibold">Daily mix 3</strong>
          <span className="text-sm text-zinc-500">Iguinho e Lulinha, Nattan, <br /> Racionais...</span>
        </a>
        <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
          <Image src="/album1.jpg" className="w-full" width={104} height={104} alt="Capa Album" />
          <strong className="font-semibold">Daily mix 4</strong>
          <span className="text-sm text-zinc-500">Mari Fernandes, Marilia Mendonça, Leo Santana...</span>
        </a>
        <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
          <Image src="/album1.jpg" className="w-full" width={104} height={104} alt="Capa Album" />
          <strong className="font-semibold">Daily mix 5</strong>
          <span className="text-sm text-zinc-500">Wallows, COIN, girl in the <br /> red...</span>
        </a>

      </div>

    </main>
  )
}
