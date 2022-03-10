import React, { useState } from 'react'
import './Enter.css'
import { Route,Routes } from 'react-router-dom'
import SideMenu from './SideBar/SideMenu'

import Content from './ValComp/Content'
import Design from './ValComp/Design'
import Courses from './ValComp/Courses'
import Video from './ValComp/Video'
import Dashboard from './ValComp/Dashboard'
function Enter() {
    const [inactive,setInactive]=useState(false);
  return (
    <div>
        <SideMenu onCollapse={(inactive)=>{
            setInactive(inactive)
        }}></SideMenu>
        <div className={inactive?'container inactivate':'container'}>
        <Routes>
            <Route  path='/' element={<Dashboard></Dashboard>}></Route>
            <Route  path='content' element={<Content></Content>}>
                </Route>
                <Route  path='content/courses' element={<Courses></Courses>}></Route>
                <Route  path='content/video' element={<Video></Video>}></Route>
            <Route  path='design' element={<Design></Design>}></Route>
            

        </Routes>

        </div>
        
        

    </div>
  )
}

export default Enter