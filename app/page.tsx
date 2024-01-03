'use client';

import { ChangeEvent, DragEvent, useState } from 'react';
import imglyRemoveBackground, { Config } from '@imgly/background-removal';
import EraseButton from './components/EraseButton/erase-button';
import { ErasedImage } from './components/ErasedImage/erased-image';
import { DragDropImage } from './components/DragDropImage/drag-drop-image';
import { Footer } from './components/Footer/footer';
import { Header } from './components/Header/header';

export default function Home() {
  const [arquivoCarregado, setArquivoCarregado] = useState<File>();

  const [urlObjetoImagemCarregada, setUrlObjetoImagemCarregada] = useState<string>();

  const [urImagemRemovida, setUrlImagemRemovida] = useState<string>();

  const [status, setStatus] = useState<undefined | 'success' | 'loading' | 'fail'>();

  const [arquivoArrastado, setArquivoArrastado] = useState<boolean>(false);

  function removerFundo() {
    setUrlImagemRemovida(undefined);

    const config: Config = {
      progress: (key, current, total) => {
        console.log(`Downloading ${key}: ${current} of ${total}`);
      },
      debug: false,
      fetchArgs: {},
      model: 'medium',
      proxyToWorker: true,
    };

    if (arquivoCarregado) {
      setStatus('loading');
      imglyRemoveBackground(arquivoCarregado, config)
        .then((blob) => {
          setUrlImagemRemovida(URL.createObjectURL(blob));
          setStatus('success');
        })
        .catch((error) => {
          console.error(error);
          setStatus('fail');
        });
    }
  }

  const handleDragEnter = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setArquivoArrastado(true);
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setArquivoArrastado(false);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setArquivoArrastado(true);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setArquivoArrastado(false);

    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      handleFileUpload(event.dataTransfer.files[0]);
    }
  };

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      handleFileUpload(event.target.files && event.target.files[0]);
    }
  };

  const handleFileUpload = (file: File) => {
    if (file) {
      setUrlImagemRemovida(undefined);
      setArquivoCarregado(file);
      setUrlObjetoImagemCarregada(URL.createObjectURL(file));
    }
  };

  return (
    <>
    <Header logoSrc='logo-with-text.svg' />
  
    <main className="flex flex-col items-center p-10 gap-8">
  
      <div className="flex flex-col md:flex-row items-center gap-8">
  
        <div className="title-container">
          <h1 className="text-3xl font-bold bg-indigo-800 text-transparent bg-clip-text">Remova Fundos de Imagens</h1>
          <p>100% automático e de graça</p>
        </div>
  
        <div className="flex items-center gap-3">
          {urImagemRemovida ? (
            <ErasedImage
              urImagemRemovida={urImagemRemovida}
              arquivoCarregado={arquivoCarregado?.name}
            />
          ) : (
            <DragDropImage
              arquivoArrastado={arquivoArrastado}
              urlObjetoImagemCarregada={urlObjetoImagemCarregada}
              handleDragEnter={handleDragEnter}
              handleDragLeave={handleDragLeave}
              handleDragOver={handleDragOver}
              handleDrop={handleDrop}
              handleFileInputChange={handleFileInputChange}
            />
          )}
        </div>
  
      </div>
  
      <EraseButton
        onClick={removerFundo}
        status={status}
        arquivoCarregado={!!arquivoCarregado}
      />
  
      <Footer/>
    </main>
  </>
  
  );
}
