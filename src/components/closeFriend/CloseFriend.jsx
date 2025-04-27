import React from 'react'
import "./CloseFriend.css"

function CloseFriend({user}) {
  return (
    <li className="leftbarFriend">
            <img src={user.profilePicture} alt="" className="leftbarFriendImg" />
            <span className="leftbarFriendname">{user.username}</span>
          </li>
  )
}

export default CloseFriend
