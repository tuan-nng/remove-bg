interface Props {
  logoSrc: string
}

export function Header({ logoSrc }: Props) {
    return (
    <header className="flex items-center justify-center p-6 bg-white shadow-sm">
      <img src={logoSrc} alt="Logo" className="h-12" />
    </header>
  );
  }