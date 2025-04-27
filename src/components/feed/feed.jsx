import React from 'react'
import './feed.css'

import Post from '../Post/Post'
import { Posts, Users } from '../../data'

function feed({searchInput}) {

  const filteredPosts = Posts.filter((p) => {
    const user = Users.find((u) => u.id === p.userId);
    const username = user?.username.toLowerCase() || '';
    const desc = p.desc?.toLowerCase() || '';
    return (
      username.includes(searchInput.toLowerCase()) ||
      desc.includes(searchInput.toLowerCase())
    );
  });

  return (
    <div className='feed'>
      <div className="feedWrapper">
        
        {filteredPosts.map(p=>(
          <Post post={p} key={p.id} />
        ))}
        
        
      </div>
    </div>
  )
}

export default feed