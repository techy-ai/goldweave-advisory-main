"use client";

import { useEffect } from "react";
import { PageShell } from "@/components/layout/PageShell";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageShell>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-32 gap-4">
        <h1 className="text-3xl font-semibold">Something went wrong</h1>
        <p className="text-muted-foreground max-w-xl">
          An unexpected error occurred while loading this page. Please reload or try again.
        </p>
        <button
          onClick={reset}
          className="mt-4 inline-flex items-center justify-center px-6 py-3 rounded-full bg-[var(--gold)] text-[var(--navy-deep)] font-semibold"
        >
          Reload page
        </button>
      </div>
    </PageShell>
  );
}
