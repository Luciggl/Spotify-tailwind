import { Play } from 'lucide-react';
import Image from 'next/image';

interface AlbumCardProps {
    imageUrl: string;
    name: string;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ imageUrl, name }) => (
    <a
        href="#"
        className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/0 transition-colors"
    >
        <Image src={imageUrl} width={104} height={104} alt="Capa Album" />
        <strong>{name}</strong>
        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play fill="bg-black" />
        </button>
    </a>
);

export default AlbumCard;
