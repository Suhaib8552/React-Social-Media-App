import React from 'react';
import './topbar.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Topbar({setSearchInput}) {
  return (
    <div className="topbarContainer">
      
      <div className="topbarLeft">
        <span className="logo"><em>M</em>Gram</span>
      </div>

    
      <div className="topbarCenter">
        <div className="searchBar">
          <SearchIcon className="searchIcon" />
          <input
            type="text"
            className="searchInput"
            placeholder="Search for friends, posts..."
            onChange={(e)=> setSearchInput(e.target.value)}
          />
        </div>
      </div>

      {/* Right Side with Links and Icons */}
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Timeline</span>
        </div>

        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">3</span>
          </div>
        </div>

        <img src="/assets/persons/1.jpg" alt="Profile" className="topbarImg" />
      </div>
    </div>
  );
}

export default Topbar;
