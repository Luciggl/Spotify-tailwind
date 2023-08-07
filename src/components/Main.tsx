import { ChevronLeft, ChevronRight, Key, Play } from 'lucide-react'
import Image from 'next/image'
import AlbumCard from './AlbumCard'


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
        {Array.from({ length: 6 }, (_, index) => (
          <a
            key={index}
            href="#"
            className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/0 transition-colors"
          >
            <Image src="/album1.jpg" width={104} height={104} alt="Capa Album" />
            <strong>PlayList 1</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play fill="bg-black" />
            </button>
          </a>
        ))}
      </div>

      <h2 className="font-semibold text-2xl mt-10">
        Feito pra você
      </h2>
      <div className="grid grid-cols-6 gap-4 mt-4">
        <AlbumCard
          imageUrl="/album1.jpg"
          title="Daily mix 1"
          description="Evorney Fernande, Zé Vaqueiro, Gusttavo..."
        />
        <AlbumCard
          imageUrl="/album1.jpg"
          title="Daily mix 2"
          description="Tribo da Periferia, Hungria, Pacificadores..."
        />
        <AlbumCard
          imageUrl="/album1.jpg"
          title="Daily mix 3"
          description="Iguinho e Lulinhas, Nattan, Racionais..."
        />
        <AlbumCard
          imageUrl="/album1.jpg"
          title="Daily mix 4"
          description="Mari Fernandes, Marilia Mendoça, Leo Santana..."
        />
        <AlbumCard
          imageUrl="/album1.jpg"
          title="Daily mix 5"
          description="Wallows,COIN, girl in the red..."
        />
      </div>
    </main>
  )
}