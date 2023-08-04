import React from 'react';
import styles from './Changelog.module.css';

interface Log {
  ticket?: string;
  text: React.ReactNode;
  label: 'New' | 'Improved' | 'Fixed';
}

const getLabelClassName = (label: Log['label']): string => {
  switch (label) {
    case 'New':
      return styles.new;
    case 'Improved':
      return styles.improved;

    default:
      return styles.fixed;
  }
};

export interface ChangelogProps {
  date: string;
  logs: Log[];
}

const Changelog: React.FC<ChangelogProps> = ({ date, logs }) => {
  return (
    <div className={styles.wrapper}>
      <h2>{date}</h2>
      {logs.map((l, i) => (
        <div
          key={date + '-' + i}
          className={styles.log}
        >
          <div className={`${styles.label} ${getLabelClassName(l.label)}`}>
            {l.label}
          </div>
          <div>
            {l.text}{' '}
            {l.ticket && <span className={styles.ticket}>{l.ticket}</span>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Changelog;
