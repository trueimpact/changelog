'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Changelog from '@/components/Changelog/Changelog';
import { changelogs } from './data';
import { useSearchParams } from 'next/navigation';

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
            <Image
              width={25}
              height={25}
              src="/circle-check-solid.svg"
              alt="Checkmark"
              title="Checkmark"
              className={styles.icon}
            />
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
