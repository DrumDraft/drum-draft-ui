import { useCallback, useState } from 'react';

export function useAsync<T extends any[], R>(
  asyncFn: (...args: T) => Promise<R>
) {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(
    async (...args: T) => {
      setLoading(true);
      setError(null);
      try {
        return await asyncFn(...args);
      } catch (e) {
        setError(e as Error);
        throw e;
      } finally {
        setLoading(false);
      }
    },
    [asyncFn]
  );

  return { execute, isLoading, error };
}
