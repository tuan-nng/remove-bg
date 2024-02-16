import React, { ChangeEvent, DragEvent } from 'react';

interface DrapDropImageProps {
  fileDragged: boolean;
  urlObjectImageLoading?: string;
  handleDragEnter: (event: DragEvent<HTMLDivElement>) => void;
  handleDragLeave: (event: DragEvent<HTMLDivElement>) => void;
  handleDragOver: (event: DragEvent<HTMLDivElement>) => void;
  handleDrop: (event: DragEvent<HTMLDivElement>) => void;
  handleFileInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function DragDropImage({
  fileDragged,
  urlObjectImageLoading,
  handleDragEnter,
  handleDragLeave,
  handleDragOver,
  handleDrop,
  handleFileInputChange,
}: DrapDropImageProps) {
  return (
    <div
      className={`flex overflow-hidden justify-center items-center min-w-80 min-h-80 border-2 rounded-2xl text-center cursor-pointer
        ${fileDragged ? 'border-indigo-800 bg-gray-200' : 'border-gray-300'
      }`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input type="file" className="hidden" onChange={handleFileInputChange} id="fileInput" />
      
      <label htmlFor="fileInput" className="cursor-pointer flex items-center justify-center h-full w-full">
        {urlObjectImageLoading ? (
          <img src={urlObjectImageLoading} className="object-cover h-full w-full" alt="Uploaded" />
        ) : fileDragged ? (
          <p>Drag and drop the file here...</p>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <p className="transition-all duration-1000 bg-gradient-to-br from-indigo-800 hover:from-indigo-600 to-indigo-600 hover:to-indigo-400 p-2 rounded-2xl text-white">
              Upload file
            </p>
            <p className="text-neutral-900 dark:text-indigo-100">Or drop it here</p>
          </div>
        )}
      </label>
    </div>
  );
}
