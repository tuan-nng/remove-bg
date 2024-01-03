import DarkModeToggle from '../DarkModeToggle/dark-mode-toggle';

interface Props {
  logoSrc: string
}

export function Header({ logoSrc }: Props) {
    return (
    <header className="flex items-center justify-between p-6 dark:bg-dark-600 shadow-sm">
      <img src={logoSrc} alt="Logo" className="h-12" />
      <DarkModeToggle/>
    </header>
  );
  }