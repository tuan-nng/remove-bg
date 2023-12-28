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
    </div>
  );
}
