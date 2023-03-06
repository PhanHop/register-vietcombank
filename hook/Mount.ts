import {useState, useEffect} from 'react';

export default function useIsMounted(mountedCallback?: () => void) {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
    mountedCallback?.();
  }, []);
  return mounted;
}
