import React, { useState } from 'react'
import SourceIcon from '@mui/icons-material/Source';
import { NavLink } from 'react-router-dom';

function MenuItems(props) {
 const {name,submenu,icon,inactive,to}=props
 const [expand,setExpand]=useState(false)

  return (
    <div>
        <li>
                           <div className='wrap_hover'>
                           <NavLink to={to} className='menu-item' onClick={()=>{
                                return setExpand((val)=>{
                                    return !val
                                })
                            }}>
                                <div className='menu-icon'>
                                    {icon}
                                </div>
                                
                                <div>
                                    <span>{name}</span>
                                    </div>
    
                                </NavLink>
                               </div> 
                           
                                </li>
                                {
                                    !inactive&&submenu&&submenu.length>0?(
                                        <ul className={expand?'sub-menu activate':'sub-menu'}>
                                            {
                                                submenu.map((val,index)=>{
                                                     return (<li key={index}>
                                                        <NavLink to={val.to}>{val.name}</NavLink>
                                                    </li>)
                                                })
                                            }
                                        
                                    </ul>
                                    ):null
                                }
                            
                            
                            
    </div>
  )
}

export default MenuItems
