import { useEffect } from 'react';
import Router from 'next/router';

const MESSAGE = 'Ungespeicherte Änderungen verwerfen?';

export default function useWindowBeforeUnload(hasChanges) {
  useEffect(() => {
    if (!hasChanges) return () => {};

    const handleRouteChange = (url) => {
      if (useWindowBeforeUnload.skipWarning) {
        useWindowBeforeUnload.skipWarning = false;
        return;
      }

      // eslint-disable-next-line no-restricted-globals,no-alert
      if (Router.asPath !== url && !confirm(MESSAGE)) {
        Router.events.emit('routeChangeError');
        throw new Error('Abort');
      }
    };
    const handleUnload = (event) => {
      event.preventDefault();
      // eslint-disable-next-line no-param-reassign
      event.returnValue = MESSAGE;
      return MESSAGE;
    };
    window.addEventListener('beforeunload', handleUnload);
    Router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      window.removeEventListener('beforeunload', handleUnload);
      Router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [hasChanges]);
}

useWindowBeforeUnload.skipWarning = false;
