import React from 'react'
import './rightbar.css'
import { Users } from '../../data'
import Online from '../Online/Online.jsx'

function rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="/assets/gift.jpg" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>John Doe</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="/assets/ad.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u} /> 
          ))}
          

        </ul>
      </div>
    </div>
  )
}

export default rightbar