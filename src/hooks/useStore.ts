import { useMemo } from 'react';
import { store, Store } from '../assets/store';

/**
 * useStore
 *
 * faking data injection with local data
 */
export const useStore = <T>(getData: (store: Store) => T): T => {
  return useMemo(() => getData(store), [getData]);
};
