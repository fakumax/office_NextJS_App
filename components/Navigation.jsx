import React from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';
import { Logo } from './Logo';

const link = [
  {
    label: 'Inicio',
    route: '/',
  },
  {
    label: 'Nosotros',
    route: '/nosotros',
  },
  {
    label: 'Contacto',
    route: '/contacto',
  },
];

const Navigation = () => {
  return (
    <header>
      <nav className={styles.Navigation}>
        <Logo />
        <ul className={styles.links}>
          {link.map(({ label, route }) => (
            <li key={label}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export { Navigation };
