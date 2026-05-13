import { content } from "@/content";
import { PerspectiveGrid } from "./ui/PerspectiveGrid";

export function Footer() {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-content px-6">
        <PerspectiveGrid variant="divider" />
      </div>
      <div className="mx-auto max-w-content px-6 py-12">
        <div>
          <div className="font-display text-sm font-bold uppercase tracking-widest text-ink">
            {content.footer.wordmark}
          </div>
          <p className="mt-2 max-w-md text-sm text-muted">{content.footer.tagline}</p>
        </div>
        <p className="mt-10 text-xs text-muted">{content.footer.legal}</p>
      </div>
    </footer>
  );
}
