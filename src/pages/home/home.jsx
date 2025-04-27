import React, { useState } from 'react';
import Topbar from '../../components/topbar/topbar';
import Leftbar from '../../components/leftbar/leftbar';
import Feed from '../../components/feed/feed';
import Rightbar from '../../components/rightbar/rightbar';
import './home.css';

function Home() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <>
      <Topbar setSearchInput={setSearchInput} />
      <div className="homeContainer">
        <Leftbar />
        <Feed searchInput={searchInput} />
        <Rightbar />
        
      </div>
    </>
  );
}

export default Home;
