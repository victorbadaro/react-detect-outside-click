import { useRef } from 'react';
import { Child } from '../Child';
import styles from './styles.module.css';

export function Parent() {
  const childRef = useRef<HTMLDivElement | null>(null);

  function handleClick(target: EventTarget) {
    if(!childRef.current?.contains(target as Node))
      console.log('outside');
    else
      console.log('inside');
  }

  return (
    <div className={styles.parent} onClick={(event) => handleClick(event.target)}>
      <Child ref={childRef} />
    </div>
  );
}