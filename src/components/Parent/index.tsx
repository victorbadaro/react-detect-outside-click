import { useEffect, useRef } from 'react';
import { Child } from '../Child';
import styles from './styles.module.css';

export function Parent() {
  const childRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleChildClick(event: MouseEvent) {
      if(!childRef.current?.contains(event.target as Node))
        console.log('outside');
      else
        console.log('inside');
    }

    document.addEventListener('click', handleChildClick);

    return () => {
      document.removeEventListener('click', handleChildClick);
    };
  }, []);

  return (
    <div className={styles.parent}>
      {/* <div ref={childRef} style={{ width: '100px', height: '100px', backgroundColor: 'blue' }} /> */}
      <Child ref={childRef} />
    </div>
  );
}