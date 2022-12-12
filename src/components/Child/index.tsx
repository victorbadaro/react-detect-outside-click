import { forwardRef } from 'react';
import styles from './styles.module.css';

export const Child = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className={styles.child} />
  );
});