import { DownloadCloud } from 'lucide-react';

interface Props {
  urlImageRemoved: string;
  loadedFile: undefined | string;
}

export function ErasedImage({ urlImageRemoved, loadedFile }: Props) {
  return (
    <div className="chessboard relative overflow-hidden rounded-2xl">
      <img
        src={urlImageRemoved}
        className="w-full h-full object-cover"
        alt="Erased"
      />
      <a
        className="absolute cursor-pointer transition-all duration-300 inset-0 opacity-50 hover:opacity-100 bg-transparent hover:bg-black/30 inline-flex items-center justify-center text-white text-xl"
        href={urlImageRemoved}
        download={`removed_bg_${loadedFile}`}
      >
        <DownloadCloud size="50" />
      </a>
    </div>
  );
}
