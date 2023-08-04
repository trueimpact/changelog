import styles from './page.module.css';
import Changelog from '@/components/Changelog/Changelog';
import { changelogs } from './data';

export default function Home() {
  return (
    <div className={styles.main}>
      <h1>Changelogs</h1>
      <div>
        {changelogs.map((l) => (
          <Changelog
            {...l}
            key={l.date}
          />
        ))}
      </div>
    </div>
  );
}
