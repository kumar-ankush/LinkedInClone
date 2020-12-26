import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice/userSlice';
import './SideBar.css';
const SideBar = ({name,email,stat__Number,stat__Post}) => {
    //To get User From Dispatch
    const user=useSelector(selectUser);
    const recentItem=(topic)=>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1557683304-673a23048d34?
                ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&a
                uto=format&fit=crop&w=1443&q=80" alt=""/>
                <Avatar className="sidebar__avatar" src={user.photoURL}>{user.email[0]}</Avatar> 
                {/* If it doesnt have one pic so use user.email[0] */}
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                        <p className="sidebar__statNumber">{stat__Number}</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on Post</p>
                        <p className="sidebar__statNumber">{stat__Post}</p>
                </div>
            </div>
            <div className="sidebar__bottom">
               <p>Recent</p> 
               {recentItem('ReactJS')}
               {recentItem('Programming')}
               {recentItem('Software')}
               {recentItem('Hardware Description language')}
               {recentItem('NodeJS')}
               {recentItem('API')}
            </div>
        </div>
    );
}

export default SideBar;
