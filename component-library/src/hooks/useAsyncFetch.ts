import { useEffect, useState } from 'react';

export enum ComponentStatus {
    fetching,
    loaded,
    error,
    reFetching,
  }

export type AsyncDataHookResult<ResponseType, ErrorType> = [
  null | ErrorType,
  ComponentStatus,
  null | ResponseType,
  () => void
];

/**
 * Used for making get calls to the api
 * @param {() => Promise<ResponseType> | null} requestFunction - Async function
 * @param {boolean} skip - Optional skip initial fetch
 *
 * @returns error, status, data, retry
 */

const useAsyncFetch = <ResponseType, ErrorType>(
  requestFunction: () => Promise<ResponseType> | null,
  skip?: boolean
): AsyncDataHookResult<ResponseType, ErrorType> => {
  const [error, setError] = useState<ErrorType | null>(null);
  const [data, setData] = useState<ResponseType | null>(null);
  const [status, setStatus] = useState<ComponentStatus>(ComponentStatus.fetching);

  async function fetch(): Promise<void> {
    try {
      const response = await requestFunction();
      setData(response);
      setStatus(ComponentStatus.loaded);
    } catch (error) {
      setError(error as ErrorType);
      setStatus(ComponentStatus.error);
    }
  }

  useEffect(() => {
    if (skip) {
      setStatus(ComponentStatus.loaded);
    } else {
      fetch();
    }
  }, []);

  function retry(): void {
    setStatus(ComponentStatus.reFetching);
    fetch();
  }

  return [error, status, data, retry];
};

export default useAsyncFetch;
