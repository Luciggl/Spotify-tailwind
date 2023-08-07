import Image from 'next/image';

interface AlbumCard {
  imageUrl: string;
  title: string;
  description: string;
}

const AlbumCard: React.FC<AlbumCard> = ({ imageUrl, title, description }) => (
  <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
    <Image src={imageUrl} className="w-full" width={104} height={104} alt="Capa Album" />
    <strong className="font-semibold">{title}</strong>
    <span className="text-sm text-zinc-500">{description}</span>
  </a>
);

export default AlbumCard;
