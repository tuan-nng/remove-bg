import { Plus } from 'lucide-react';

interface Props {
  listagem: string[];
  onClick: () => void;
}

export default function Historic({ listagem, onClick }: Props) {
  return (
    <>
      <div className="mt-8">
        <div className="flex gap-4">
        {listagem.length > 0 && (
        <button
        onClick={onClick}
        className="bg-indigo-600 text-white w-16 h-16 rounded-md flex items-center justify-center transition duration-300 ease-in-out hover:bg-indigo-500"
        title="Remove background from another image"
      >
        <Plus/>
      </button>)}
          {listagem.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Image removed ${index + 1}`}
              className="w-16 h-16 object-cover rounded-md border-2 border-indigo-300"
            />
          ))}
        </div>
      </div>
     
    </>
  );
}
