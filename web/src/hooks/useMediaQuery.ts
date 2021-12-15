import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string) => {
  const [isMatchingMediaQuery, setIsMatchingMediaQuery] = useState(false);

  useEffect(() => {
    const matchMediaQuery = window.matchMedia(query);

    const listener = (media: MediaQueryListEvent) =>
      setIsMatchingMediaQuery(media.matches);

    matchMediaQuery.addEventListener('change', listener);
    setIsMatchingMediaQuery(matchMediaQuery.matches);

    return () => {
      matchMediaQuery.removeEventListener('change', listener);
    };
  }, [query]);

  return isMatchingMediaQuery;
};
