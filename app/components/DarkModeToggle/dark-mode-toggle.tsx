import { Eraser, Moon, Sun } from 'lucide-react';
import { createContext, useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [temaEscuro, setTemaEscuro] = useState(false);

  useEffect(() => {
    const html = document.documentElement;

    temaEscuro ? html.classList.add('dark') : html.classList.remove('dark');
  }, [temaEscuro]);

  const toggle = () => {
    setTemaEscuro((temaAnterior) => !temaAnterior);
  };

  return (
    <button
      onClick={toggle}
      className="bg-indigo-800 text-white rounded-2xl p-2 focus:outline-none"
    >
      {temaEscuro ? (
        <>
          <Sun/>
        </>
      ) : (
        <>
          <Moon/>
        </>
      )}
    </button>
  );
}
