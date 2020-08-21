import React from 'react';
import './App.css';
import Links from './Links'
import linkData from './linkData.js'

function Home() {
    const linkComponents = linkData.map(link => <Links key={link.id} site={link.site} url={link.url} />)
  return (

    <div>
      <h1>Useful Links</h1>
      {linkComponents}
      <Links />
    </div>
  );
}

export default Home;