import { createContext, useCallback, useContext, useMemo, useState } from "react";

const PageLoaderContext = createContext(null);

/**
 * Keeps a counter of in-flight page-scoped requests.
 * `withLoader` enforces a minimum visible time so very fast calls still show the overlay.
 */
export function PageLoaderProvider({ children, defaultMinMs = 200 }) {
  const [count, setCount] = useState(0);

  const start = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const stop = useCallback(() => {
    setCount((c) => Math.max(0, c - 1));
  }, []);

  /**
   * withLoader(fnOrPromise, { minMs })
   * - Ensures loader is visible for at least minMs (default 200ms)
   */
  const withLoader = useCallback(
    async (fnOrPromise, opts) => {
      const minMs = opts?.minMs ?? defaultMinMs;
      const t0 = performance.now();
      start();
      try {
        const result =
          typeof fnOrPromise === "function" ? await fnOrPromise() : await fnOrPromise;
        return result;
      } finally {
        const elapsed = performance.now() - t0;
        if (elapsed < minMs) {
          await new Promise((r) => setTimeout(r, minMs - elapsed));
        }
        stop();
      }
    },
    [start, stop, defaultMinMs]
  );

  const value = useMemo(
    () => ({
      start,
      stop,
      withLoader,
      busy: count > 0,
      activeCount: count,
    }),
    [count, start, stop, withLoader]
  );

  return (
    <PageLoaderContext.Provider value={value}>{children}</PageLoaderContext.Provider>
  );
}

export function usePageLoader() {
  const ctx = useContext(PageLoaderContext);
  if (!ctx) throw new Error("usePageLoader must be used within a PageLoaderProvider");
  return ctx;
}
