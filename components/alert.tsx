import { ReactNode } from 'react';
import styles from './alert.module.css';
import clsx from 'clsx';

type AlertProps = {
  children: ReactNode;
  type: string;
};

export default function Alert({ children, type }: AlertProps) {
  return (
    <div
      className={clsx({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      {children}
    </div>
  );
}
