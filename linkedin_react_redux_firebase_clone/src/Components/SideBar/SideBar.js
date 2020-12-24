import { Avatar } from '@material-ui/core';
import React from 'react';
import './SideBar.css';
const SideBar = ({name,email,stat__Number,stat__Post}) => {
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
                <Avatar className="sidebar__avatar" src="https://media-exp1.licdn.com/dms/image/C5103AQHpIMsFGrIKzA/
profile-displayphoto-shrink_100_100/0/1554828891718?e=1614211200&v=beta&t=k03vB15hyEvxSa3nUX483r6HiM1QXP_opUU0RWvH4sE"/>
                <h2>{name}</h2>
                <h4>{email}</h4>
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
