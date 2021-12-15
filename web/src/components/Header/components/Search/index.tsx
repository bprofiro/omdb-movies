import { useState, useRef, useCallback, useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { HTMLMotionProps, motion } from 'framer-motion';
import { usePopoverState } from 'reakit/Popover';
import {
  useEventListener,
  useMediaQuery,
  useMovies,
  useDebouncedValue,
  useCachedFetch,
} from '@hooks';

import { Container, InputContainer, Hamburguer } from './styles';

type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

type Movies = {
  Search: Movie[];
};

export const Search = ({ variants }: HTMLMotionProps<'div'>) => {
  const isMobile = useMediaQuery('(max-width: 450px)');
  const popover = usePopoverState();

  const { setMovies, setIsLoadingMovies } = useMovies();

  const { pathname } = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [search, setSearch] = useState('');
  const [isVisibleInMobile, setIsVisibleInMobile] = useState(false);

  const debouncedSearch = useDebouncedValue(search);

  const { data: movies, loading: isFetchingMovies } = useCachedFetch<Movies>(
    `${debouncedSearch}`,
    true,
  );

  const handleOpenSearchInput = () => {
    popover.setVisible(true);
    setIsVisibleInMobile(prevState => !prevState);
  };

  const handleCloseDropdown = useCallback(
    ({ target }: Event): void => {
      if (containerRef.current?.contains(target as Node)) {
        return;
      }

      setIsVisibleInMobile(false);
    },
    [setIsVisibleInMobile],
  );

  useEventListener('click', handleCloseDropdown, {
    enabled: isVisibleInMobile,
  });

  useEffect(() => {
    setIsVisibleInMobile(false);
  }, [pathname]);

  useEffect(() => {
    setIsLoadingMovies(isFetchingMovies);

    if (movies?.Search) {
      setMovies(movies.Search);
    }
  }, [isFetchingMovies, setIsLoadingMovies, setMovies, movies]);

  return (
    <Container variants={variants} ref={containerRef}>
      {isMobile && !isVisibleInMobile && (
        <Hamburguer onClick={handleOpenSearchInput}>
          <FiSearch size={18} color="#737380" />
        </Hamburguer>
      )}

      <InputContainer isVisible={isVisibleInMobile} as={motion.div}>
        <FiSearch size={18} color="#737380" />
        <input
          placeholder="Busque por um filme"
          value={search}
          onChange={e => setSearch(e.target.value)}
          ref={inputRef}
        />
      </InputContainer>
    </Container>
  );
};
