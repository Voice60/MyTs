import { UserOutlined } from '@ant-design/icons';
import { Menu, Typography } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import Text from 'antd/lib/typography/Text';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getIsAuth, getUser } from '../../redux/selectors/loginSelectors';
import styles from './Nav.module.scss';

let Nav = () => {
  const isAuth = useSelector(getIsAuth)
  const user = useSelector(getUser)

  return (
    <nav>
      <div className={styles.wrap}>
        <div className={styles.wrap2}>
          <Menu className={styles.navigation} theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">
              <NavLink to='/'>Главная</NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink to='/news'>Новости</NavLink>
            </Menu.Item>
          </Menu>
          {isAuth ?
            <NavLink to='/profile'>
              <Avatar style={{ backgroundColor: 'transparent' }} icon={<UserOutlined />} />
              <Text style={{color: 'white'}}>{user}</Text>
            </NavLink>
            : <NavLink to='/login'>login</NavLink>}
        </div>
      </div>
    </nav>
  )
}
export default Nav
