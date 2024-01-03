import { Check, Eraser, Loader2, X } from 'lucide-react'

interface Props {
    arquivoCarregado: boolean
    status: undefined | 'loading' | 'success' | 'fail'
    onClick: () => void
}

export default function EraseButton({ arquivoCarregado, status, onClick }: Props ) {
  return (
    <button
      disabled={!arquivoCarregado || status === 'loading' || status === 'success'}
      onClick={onClick}
      className={`flex items-center gap-2 rounded-2xl px-8 py-3 text-xl font-bold text-white transition-all duration-1000 sm:p-3 ${
        arquivoCarregado ? status !== 'fail' ? 'bg-gradient-to-br from-indigo-800 to-indigo-600 dark:from-indigo-700 dark:to-indigo-500'
          : 'bg-gradient-to-br from-red-800 to-red-600 dark:from-red-700 dark:to-red-500'
          : 'bg-neutral-200 cursor-not-allowed'
      } ${
        status !== 'loading' &&
        status !== 'fail' &&
        'hover:from-indigo-600 hover:to-indigo-400 active:from-indigo-600 active:to-indigo-400'
      } ${status === 'loading' && 'cursor-wait'}`}
    >
      {!status && (
        <>
          <Eraser />
          <span>Remover fundo</span>
        </>
      )}
      {arquivoCarregado && status === 'loading' && (
        <>
          <Loader2 className="animate-spin" />
          <span>Removendo</span>
        </>
      )}
      {arquivoCarregado && status === 'success' && (
        <>
          <Check />
          <span>Prontinho</span>
        </>
      )}
      {arquivoCarregado && status === 'fail' && (
        <>
          <X />
          <span>Erro</span>
        </>
      )}
    </button>
  );
}
