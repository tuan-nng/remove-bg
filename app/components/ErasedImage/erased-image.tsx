import { DownloadCloud } from 'lucide-react';

interface Props {
  urImagemRemovida: string;
  arquivoCarregado: undefined | string;
}

export function ErasedImage({ urImagemRemovida, arquivoCarregado }: Props) {
  return (
    <div className="chessboard relative overflow-hidden w-80 h-80 rounded-2xl">
      <img
        src={urImagemRemovida}
        className="w-full h-full object-cover"
        alt="Erased"
      />
      <a
        className="absolute cursor-pointer transition-all duration-300 inset-0 opacity-50 hover:opacity-100 bg-transparent hover:bg-black/30 inline-flex items-center justify-center text-white text-xl"
        href={urImagemRemovida}
        download={`removed_bg_${arquivoCarregado}`}
      >
        <DownloadCloud size="50" />
      </a>
    </div>
  );
}
