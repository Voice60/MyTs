import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss'

let Nav = () => {
  return (
    <nav className={styles.navigation}>
      <div className="wrap">
        <ul className={styles.navUl}>
          <li className={styles.item}>
            <NavLink to='/'>Главная</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to='/news'>Новости</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to='/profile'>Профиль</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Nav
