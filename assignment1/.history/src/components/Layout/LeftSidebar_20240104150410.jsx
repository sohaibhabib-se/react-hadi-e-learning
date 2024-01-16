import React, { useState } from 'react'
import {
  AppstoreOutlined,
  DashboardFilled,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { Menu, Switch } from 'antd'
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}
const items = [
  getItem('Dashboard', 'sub1', <DashboardFilled />, [
    // getItem('Option 1', '1'),
    // getItem('Option 2', '2'),
    // getItem('Option 3', '3'),
    // getItem('Option 4', '4'),
  ]),
  getItem('', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [
      getItem('Option 7', '7'),
      getItem('Option 8', '8'),
    ]),
  ]),
//   getItem('Navigation Three', 'sub4', <SettingOutlined />, [
//     getItem('Option 9', '9'),
//     getItem('Option 10', '10'),
//     getItem('Option 11', '11'),
//     getItem('Option 12', '12'),
//   ]),
]
const LeftSidebar = () => {
  const [theme, setTheme] = useState('light')
  const [current, setCurrent] = useState('1')
  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light')
  }
  const onClick = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }
  return (
    <>
      <div className={'text-start px-4 mt-3'}>
        <h4>HS Management</h4>
      </div>
      <div className='px-3 py-1 '>
        <Menu
          theme={theme}
          onClick={onClick}
          style={{
            width: 256,
          }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[current]}
          mode='inline'
          items={items}
        />
      </div>
    </>
  )
}
export default LeftSidebar
