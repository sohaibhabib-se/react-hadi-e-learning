import React from 'react'
import { Activity, ArrowDown, User } from 'react-feather'
import { myStyle } from '../../assets/style/style'
import { Link, useNavigate } from 'react-router-dom'

// const activer = `2px solid ${myStyle.primaryColor}`;

const sidebarNavs = [
  {
    name: 'Cover',
    pathname: '/',
    icon: <Activity size={15} />,
    isDivider: true,
  },
  {
    name: 'Accordian',
    pathname: '/explore/accordions',
    icon: <ArrowDown size={15} />,
    isDivider: false,
  },
]

const Sidebar = () => {
  const router = useNavigate()

  const redirectTo = (x) => {
    router(x)
  }

  return (
    <div>
      <div className='p-3 h3'>
        <b>Systems Limited</b>
      </div>

      <div className='p-3'>
        {sidebarNavs.map((x) => (
          <React.Fragment key={x.name}>
            <div
              onClick={() => redirectTo(x.pathname)}
              role='button'
              className={`d-flex justify-content-start align-items-center gap-2 mb-3 ${
                x.name === 'Profile' ? 'sidenavs-active' : 'sidenavs'
              }`}
            >
              {x.icon}
              <span>{x.name} </span>
            </div>
            {x.isDivider === true && <hr />}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
