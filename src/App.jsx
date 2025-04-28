import { useState } from 'react'
import Logo from './assets/icon.png'

import './App.css'

function App() {
  

    const handleDownload = () => {
     
      const downloadUrl = "https://firebasestorage.googleapis.com/v0/b/seventri-fd94d.firebasestorage.app/o/application-ee7da1f8-1c68-4752-a26b-9ddfae72294f.apk?alt=media&token=7989d9df-c001-49e0-b420-8e1efebc441d";
  
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'your-file.jpg'; // You can set the file name here
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  

  return (
    <>
      <div>
        {/* <a href="https://vite.dev" target="_blank"> */}
          <img src={Logo} className="logo" alt="Vite logo" />
        {/* </a> */}
        
      </div>
      <h1>BKK 6D</h1>
      <div className="card">
        <button onClick={handleDownload}>
           Download 
        </button>
        <p>
          {/* Edit <code>src/App.jsx</code> and save to test HMR */}
        </p>
      </div>
      <p className="read-the-docs">
        Click Download button to download android apk
      </p>
    </>
  )
}

export default App
