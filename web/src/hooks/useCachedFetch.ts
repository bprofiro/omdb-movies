/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

import useSWR from 'swr';
import { api } from '@services/api';
import { moviesApi } from '@services/movies';

export const useCachedFetch = <Data = any, Error = any>(
  url: string,
  isUsingMovieApi?: boolean,
) => {
  const [loading, setLoading] = useState(false);

  const apiType = isUsingMovieApi ? moviesApi : api;

  const { data } = useSWR<Data, Error>(url, async apiUrl => {
    setLoading(true);

    const response = await apiType.get(apiUrl);

    setLoading(false);

    return response.data;
  });

  return { data, loading };
};
