import { PageShell } from "@/components/layout/PageShell";

export default function NotFound() {
  return (
    <PageShell>
      <div className="min-h-[60vh] flex items-center justify-center text-center px-6 pt-32">
        <div>
          <h1 className="text-3xl font-semibold mb-3">Page not found</h1>
          <p className="text-muted-foreground mb-6">
            The page you're looking for doesn't exist or has moved.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
