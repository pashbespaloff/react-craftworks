import {useEffect} from 'react';
import {showNotification} from './notifications';
import useEffectEvent from '../../helpers/useEffectEventHook';
import getRandomMessage from './getRandomMessage';

export default function useNotifications(theme) {
  const onCall = useEffectEvent((msg) => {
    showNotification(msg, theme);
  });

  useEffect(() => {
    const intervalId = setInterval(() => onCall(getRandomMessage()), 3000);
    return () => clearInterval(intervalId);
  }, [onCall]);
};