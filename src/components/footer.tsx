export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href="https://github.com/Francisca105"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Francisca Almeida
          </a>
          . The source code is available on{" "}
          <a
            href="https://github.com/Francisca105/portfolio"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
        <div className="flex items-center gap-4">
          <a
            href="/lab"
            className="text-xs text-muted-foreground opacity-50 hover:opacity-100 transition-opacity"
          >
            Lab
          </a>
        </div>
      </div>
    </footer>
  );
}
