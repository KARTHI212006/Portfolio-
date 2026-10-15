import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink py-8">
      <div className="container-x flex flex-col items-start justify-between gap-4 text-sm text-muted sm:flex-row sm:items-center">
        <p>© 2026 Karthikeyan S. Salem, Tamil Nadu, India.</p>
        <a href="#home" className="inline-flex min-h-[44px] items-center gap-2 hover:text-fg">
          Back to top
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
