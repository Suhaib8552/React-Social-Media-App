import React, { useState } from 'react'
import './leftbar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import CloseFriend from '../closeFriend/CloseFriend';
import { Users } from '../../data';

function Leftbar() {
  const [showMore,setshowMore]=useState(true);
  
  const[showLess,setShowLess]=useState(false);

  function handleshowMore(){
    setshowMore(!showMore);
    setShowLess(!showLess)
  }

  return (
    <div className='leftbar'>
      <div className="leftbarWrapper">
        <ul className='leftbarList'>
          <li className='leftbarListItem'>
            <RssFeedIcon className='leftbarIcon'/>
            <span className='sidebarListItemText'>Feed</span>
          </li>
          <li className='leftbarListItem'>
            <ChatIcon className='leftbarIcon'/>
            <span className='sidebarListItemText'>Chats</span>
          </li>
          <li className='leftbarListItem'>
            <PlayCircleIcon className='leftbarIcon'/>
            <span className='sidebarListItemText'>Videos</span>
          </li>
          <li className='leftbarListItem'>
            <GroupsIcon className='leftbarIcon'/>
            <span className='sidebarListItemText'>Groups</span>
          </li>
          <li className='leftbarListItem'>
            <BookmarksIcon className='leftbarIcon'/>
            <span className='sidebarListItemText'>Bookmarks</span>
          </li>
          <li className='leftbarListItem'>
            <HelpOutlineIcon className='leftbarIcon'/>
            <span className='sidebarListItemText'>Questions</span>
          </li>
          <li className='leftbarListItem'>
            <WorkOutlineIcon className='leftbarIcon'/>
            <span className='sidebarListItemText'>Jobs</span>
          </li>
          <li className='leftbarListItem'>
            <EventIcon className='leftbarIcon'/>
            <span className='sidebarListItemText'>Events</span>
          </li>
          <li className='leftbarListItem'>
            <SchoolIcon className='leftbarIcon'/>
            <span className='sidebarListItemText'>Courses</span>
          </li>
          
        </ul>

        <button className='leftbarButton' style={{display:showMore?"block":"none"}} onClick={handleshowMore}>Show More</button>
        <hr className='leftbarHr'/>
        <ul className="leftbarFriendList" style={{display:showLess?"block":"none"}}>
          {Users.map(u=>(
            <CloseFriend key={u.id} user={u}/>
          ))}
                    

        </ul>
        <button className='leftbarButton' style={{display:showLess?"block":"none"}} onClick={handleshowMore}>Show Less</button>

      </div>

    </div>
  )
}

export default Leftbar