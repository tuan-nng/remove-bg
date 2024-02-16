'use client';

import { ChangeEvent, DragEvent, useEffect, useState } from 'react';
import imglyRemoveBackground, { Config } from '@imgly/background-removal';
import EraseButton from './components/EraseButton/erase-button';
import { ErasedImage } from './components/ErasedImage/erased-image';
import { DragDropImage } from './components/DragDropImage/drag-drop-image';
import { Footer } from './components/Footer/footer';
import { Header } from './components/Header/header';
import Historic from './components/Historic/historic';

export default function Home() {
  const [fileUploaded, setFileUploaded] = useState<File>();

  const [urlObjectImageLoading, setUrlObjectImageLoading] = useState<string>();

  const [urlImageRemoved, setUrlImageRemoved] = useState<string>();

  const [status, setStatus] = useState<undefined | 'success' | 'loading' | 'fail'>();

  const [fileDragged, setFileDragged] = useState<boolean>(false);

  const [error, setError] = useState<string | undefined>();

  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {

    if (urlImageRemoved) {
      setHistory(prevHistory => [...prevHistory, urlImageRemoved]);
    }
  }, [urlImageRemoved])

  const resetarStateImagemCarregada = () => {
    setStatus(undefined)
    setFileUploaded(undefined)
    setUrlObjectImageLoading(undefined)
    setUrlImageRemoved(undefined)
    setError(undefined)
  }

  function removerFundo() {
    setUrlImageRemoved(undefined);

    const config: Config = {
      publicPath: `${window.location.href}static/`,
      progress: (key, current, total) => {
        console.log(`Downloading ${key}: ${current} of ${total}`);
      },
      debug: false,
      fetchArgs: {
        mode: 'no-cors'
      },
      model: 'medium',
      proxyToWorker: true,
    };

    console.log(config.publicPath);

    if (fileUploaded) {
      setStatus('loading');
      imglyRemoveBackground(fileUploaded, config)
        .then((blob) => {
          setUrlImageRemoved(URL.createObjectURL(blob));
          setStatus('success');
        })
        .catch((error) => {
          console.error(config.publicPath);
          console.error(error);
          setStatus('fail');
        });
    }
  }

  const handleDragEnter = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setFileDragged(true);
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setFileDragged(false);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setFileDragged(true);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setFileDragged(false);

    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      handleFileUpload(event.dataTransfer.files[0]);
    }
  };

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      handleFileUpload(event.target.files && event.target.files[0]);
    }
  };

  const extensoesPermitidas = ['.jpg', '.jpeg', '.png'];

  const handleFileUpload = (file: File) => {
    const extensoesArquivo = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();

    if (extensoesPermitidas.includes(extensoesArquivo)) {
      setError(undefined)
      setFileUploaded(file)
      setUrlObjectImageLoading(URL.createObjectURL(file))
    } else {
      setError('Invalid file format. Please choose an image in JPG, JPEG or PNG format.')
    }
  };

  return (
    <>
    <Header logoSrc='logo-with-text.svg' />
  
    <main className="flex flex-col items-center p-10 gap-8">
        <div className="title-container">
          <h1 className="text-3xl font-bold text-indigo-800 dark:text-indigo-100">Remove Background From Image</h1>
          <p className="text-2xl dark:text-indigo-300">100% automatic and free</p>
        </div>
  
      <div className="flex flex-col md:flex-row items-center gap-8">
  
        
  
        <div className="flex items-center gap-8 w-80">
          {urlImageRemoved ? (
            <ErasedImage
              urlImageRemoved={urlImageRemoved}
              loadedFile={fileUploaded?.name}
            />
          ) : (
            <DragDropImage
              fileDragged={fileDragged}
              urlObjectImageLoading={urlObjectImageLoading}
              handleDragEnter={handleDragEnter}
              handleDragLeave={handleDragLeave}
              handleDragOver={handleDragOver}
              handleDrop={handleDrop}
              handleFileInputChange={handleFileInputChange}
            />
          )}
        </div>  
      </div>

      {error && (<div className="text-red-500">{error}</div>)}
  
      <EraseButton
        onClick={removerFundo}
        status={status}
        arquivoCarregado={!!fileUploaded}
      />

      <Historic
        listagem={history}
        onClick={resetarStateImagemCarregada}
      />

      <Footer/>
    </main>

  </>
  
  );
}
