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
      <nav className='items-center pt-4 flex flex-row sm:space-x-20 md:space-x-20 lg:space-x-40'>
        <Logo />
        <ul className={styles.navigation}>
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
