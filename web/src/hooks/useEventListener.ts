import { useEffect, useRef } from 'react';

export type EventListenerOptions = {
  enabled?: boolean;
  target?: GlobalEventHandlers;
};

export type EventListenerHook = (
  eventType: keyof GlobalEventHandlersEventMap,
  handler: (event: Event | MouseEvent) => void,
  option: EventListenerOptions,
) => void;

export const useEventListener: EventListenerHook = (
  eventType,
  handler,
  options,
) => {
  const { enabled = true, target = document } = options || {};
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  });

  useEffect(() => {
    if (!enabled) {
      return;
    }

    function internalHandler(e: Event): void {
      return handlerRef.current(e);
    }

    target.addEventListener(eventType, internalHandler);

    return () => {
      target.removeEventListener(eventType, internalHandler);
    };
  }, [eventType, enabled, target]);
};
