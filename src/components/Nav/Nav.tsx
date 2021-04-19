import { UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';


let Nav = (props: any) => {
  debugger
  return (
    <nav >
      <div className={styles.wrap}>
        <div className={styles.wrap2}>
          <Menu className={styles.navigation} theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">
              <NavLink to='/'>Главная</NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink to='/news'>Новости</NavLink>
            </Menu.Item>
            <Menu.Item key="3">
              <NavLink to='/profile'>Профиль</NavLink>
            </Menu.Item>
          </Menu>
          {props.isAuth ?
            <Avatar style={{ backgroundColor: 'transparent' }} icon={<UserOutlined />} />
            : <NavLink to='/login'>login</NavLink>}
        </div>
      </div>
    </nav>
  )
}
export default Nav
