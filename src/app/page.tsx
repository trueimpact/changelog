'use client';
import styles from './page.module.css';
import Changelog from '@/components/Changelog/Changelog';
import { changelogs } from './data';
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const router = useSearchParams();
  const admin = router.get('admin');
  return (
    <div className={styles.main}>
      <h1>Changelogs</h1>
      <div>
        {changelogs.map((l) => (
          <Changelog
            {...l}
            key={l.date}
            showTickets={Boolean(admin)}
          />
        ))}
      </div>
    </div>
  );
}
