import React, { ChangeEvent, DragEvent } from 'react';

interface DrapDropImageProps {
  arquivoArrastado: boolean;
  urlObjetoImagemCarregada?: string;
  handleDragEnter: (event: DragEvent<HTMLDivElement>) => void;
  handleDragLeave: (event: DragEvent<HTMLDivElement>) => void;
  handleDragOver: (event: DragEvent<HTMLDivElement>) => void;
  handleDrop: (event: DragEvent<HTMLDivElement>) => void;
  handleFileInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function DragDropImage({
  arquivoArrastado,
  urlObjetoImagemCarregada,
  handleDragEnter,
  handleDragLeave,
  handleDragOver,
  handleDrop,
  handleFileInputChange,
}: DrapDropImageProps) {
  return (
    <div
      className={`flex overflow-hidden justify-center items-center border-2 w-80 h-80 rounded-2xl text-center cursor-pointer
        ${arquivoArrastado ? 'border-indigo-800 bg-gray-200' : 'border-gray-300'
      }`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input type="file" className="hidden" onChange={handleFileInputChange} id="fileInput" />
      
      <label htmlFor="fileInput" className="cursor-pointer flex items-center justify-center h-full w-full">
        {urlObjetoImagemCarregada ? (
          <img src={urlObjetoImagemCarregada} className="object-cover h-full w-full" alt="Uploaded" />
        ) : arquivoArrastado ? (
          <p>Arraste e solte o arquivo aqui...</p>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <p className="transition-all duration-1000 bg-gradient-to-br from-indigo-800 hover:from-indigo-600 to-indigo-600 hover:to-indigo-400 p-2 rounded-2xl text-white">
              Carregar arquivo
            </p>
            <p className="text-neutral-900 dark:text-indigo-100">Ou solte aqui</p>
          </div>
        )}
      </label>
    </div>
  );
}
