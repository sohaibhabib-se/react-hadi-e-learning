import React from 'react'
import { Activity, User } from 'react-feather'
import { myStyle } from '../../assets/style/style'
import { Link } from 'react-router-dom'

// const activer = `2px solid ${myStyle.primaryColor}`;

const sidebarNavs = [
    {name: 'Cover', pathname: "", icon: <Activity size={15} />},
    {name: 'Profile', pathname: "", icon: <User size={15} />}
]

const Sidebar = () => {
  return (
    <div>
      <div className='p-3 h3'>
        <b>Systems Limited</b>
      </div>

      <div className='p-3' style={{fontSize: "17px"}}>
        {sidebarNavs.map((x) => (
            <React.Fragment key={x.name}>
            <Link to={x.pathname} key={x.name} role='button' className={`d-flex justify-content-start align-items-center gap-2 mb-3 ${x.name === 'Cover' ? sidenavs-active : sidenavs }`}>
            {x.icon}
            <span>{x.name} </span>
          </Link>
          </React.Fragment>
        ))}
        
      </div>
    </div>
  )
}

export default Sidebar
