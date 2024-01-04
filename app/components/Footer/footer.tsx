import { Bug, Github } from 'lucide-react';

export function Footer() {
  return (
    <div className="grid grid-cols-2 justify-items-center gap-2 text-neutral-300 sm:flex sm:justify-between">
      <a
        className="footer-link"
        href="https://yasminlopes.netlify.app"
        target="_blank"
        rel="author"
      >
        Developed By <span className="font-bold">Yasmin Lopes</span>
      </a>
      <a
        href="https://github.com/yasminlopes/remove-bg"
        target="_blank"
        rel="external"
        className="footer-link flex items-center gap-1"
      >
        <Github strokeWidth={1.3} size={20} /> Source Code
      </a>
      <a
        href="https://github.com/yasminlopes/remove-bg/issues/new"
        target="_blank"
        rel="external"
        className="footer-link flex items-center gap-1"
      >
        <Bug strokeWidth={1.3} size={20} />
        Report an issue
      </a>
      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
  <div>
    <a
      title="Buy me a coffee"
      href="https://www.buymeacoffee.com/yasminlopes"
      target="_blank"
      className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
    >
      <img
        className="object-cover object-center w-full h-full rounded-full"
        src="https://th.bing.com/th/id/OIP.lodywf3xicY490sCNFaIAgHaHa?rs=1&pid=ImgDetMain"
      />
    </a>
  </div>
  </div>
    </div>
  );
}
