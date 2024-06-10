import { useState, useCallback } from 'react';

export const QUERY_FILTER_PERSIST = {
  default: 'session',
  none: false,
  session: 'session',
  local: 'local',
};
/**
 *
 * @param {string} key
 * @param {*} initialState
 * @param {(false|true|"session"|"local")} persist
 * @returns {unknown[]}
 */
export function useQueryFilter(key: any, initialState: any, persist = QUERY_FILTER_PERSIST.default) {
  let value = initialState;
  const storedValue = persist !== QUERY_FILTER_PERSIST.none
    ? getStorage(persist).getItem(key)
    : null;

  if (storedValue !== null) {
    try {
      value = JSON.parse(storedValue);
    } catch {
      // no-op
    }
  }

  const [queryFilterState, setQueryFilterState] = useState(value);

  const handleSetQueryFilterState = useCallback(
    (event: any) => {
      const newValue = event?.target ? event.target.value : event;
      setQueryFilterState(newValue);

      if (persist !== QUERY_FILTER_PERSIST.none) {
        getStorage(persist).setItem(key, JSON.stringify(newValue));
      }
    },
    [key, persist, setQueryFilterState],
  );

  return [queryFilterState, handleSetQueryFilterState];
}

function getStorage(type: any) {
  if (type === QUERY_FILTER_PERSIST.local) {
    return window.localStorage;
  }

  return window.sessionStorage;
}
