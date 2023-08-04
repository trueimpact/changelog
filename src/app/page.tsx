'use client';
import styles from './page.module.css';
import Changelog from '@/components/Changelog/Changelog';
import { changelogs } from './data';
import { useSearchParams } from 'next/navigation';
import { Checkmark } from '@/components/icons';

export default function Home() {
  const router = useSearchParams();
  const admin = router.get('admin');
  const hideStatus = router.get('hideStatus');
  return (
    <div className={styles.main}>
      {!Boolean(hideStatus) && (
        <>
          <h1>Status</h1>
          <div className={styles.status}>
            <div>
              <Checkmark className={styles.icon} />
            </div>
            No incidents were reported at this time. All systems are
            operational.
          </div>
        </>
      )}
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
