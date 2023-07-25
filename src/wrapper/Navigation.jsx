import React, { useState } from 'react'
import logo from '../assets/Logo.png'
import profile from '../assets/profile.jpg'
import { Link, NavLink } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'
import '../styles/sidenav.css'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import menu from '../assets/menu.png'

const songQuery = gql`
query Query {
  getPlaylists {
    id
    title
  }
}
`
const Navigation = () => {
  const {loading, error, data} = useQuery(songQuery)
  const [shownav, setShowNav] = useState(false)
  if(loading){
    return(
      <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={40} height={25} />
      <Skeleton variant="rectangular" width={210} height={15} />
      <Skeleton variant="rectangular" width={210} height={15} />
      <Skeleton variant="rectangular" width={210} height={15} />
      <Skeleton variant="rectangular" width={210} height={15} />
    
    </Stack>
    )
  }
  if(error){
    <h1>error</h1>
  }

  return (
  <div className='side-nav-out'>

      <div className= {shownav?'mobile side-nav':"side-nav"}>
        <div className='navigate'>
            <img src={logo} alt='logo'/>
            <ul>
                {data.getPlaylists.map(links=>{
                  return<li key={links.id}><NavLink to={links.title==="For You"?`/`:`${links.title}`} >{links.title}</NavLink></li>
                })}
            </ul>
        </div>
        <div className='profile-pic-out'>
            <div className='profile-pic'>
                <img src={profile} alt='profile-pic'/>
            </div>
        </div>
    </div>
    <img src={menu} className='menu-icon' onClick={()=>{setShowNav(!shownav)}}/>
  </div>
        
    
  )
}

export default Navigation