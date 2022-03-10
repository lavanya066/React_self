import React, { useEffect, useState } from 'react'
import './SideMenu.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DehazeIcon from '@mui/icons-material/Dehaze';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SourceIcon from '@mui/icons-material/Source';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { MenuItem } from '@mui/material';
import MenuItems from './MenuItems';
import { ManOutlined } from '@mui/icons-material';
export default function SideMenu(props) {
    const [inactive,setInactive]=useState(false);
    const menuItems=[
        {name:"Dashboard",to:"/",submenu:[],icon:<DashboardIcon/> },
        {name:"Content" ,to:"/content",
    submenu:[
        {name:'Courses',to:"/content/courses"},
        {name:'Videos',to:"/content/video"}
    ],icon:<SourceIcon/>
},
    {name:"Design",to:"/design",submenu:[],icon:<DesignServicesIcon/>}
    ]
    useEffect(()=>{
        props.onCollapse(inactive)
    },[inactive])
  return (
    <div className={inactive?'side-menu inactive':'side-menu'}>
        <div className='top-section'>
            <div className='logo'>
                < PersonOutlineIcon className='cls'/>
            </div>
            <div className='toggle_btn'  onClick={()=>{
                return setInactive((val)=>{
                    return !val
                })
            }}>
                <DehazeIcon className='dehaze'/>
            </div>
           
        </div>
        <div className='search_controller'>
            <button className='search'>
            <SearchIcon />
            </button>
           
                <input type="text" placeholder="search"/>
            </div>
            <div className='divider'>
                <div className='main-menu'>
                    <ul>
                        {
                            menuItems.map((menu,index)=>{
                                return <MenuItems key={index} 
                                name={menu.name} to={menu.to}
                                submenu={menu.submenu}
                                icon={menu.icon}
                                inactive={inactive}
                                >
                                </MenuItems>
                            })
                        }
                        
                    </ul>

                </div>

            </div>
            <div className='side-menu-footer'>

            </div>   

    </div>
  )
}
