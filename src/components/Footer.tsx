export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gruvbox-border/50 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-mono text-xs text-gruvbox-text-muted">
          © {year} shubhashish
        </span>

        <span className="font-mono text-xs text-gruvbox-text-muted">
          ❤️
        </span>
      </div>
    </footer>
  );
}
