import React from 'react'
import Navv from './Navv.js'
import { Image } from 'react-bootstrap'
import Home1 from '../assets/Home1.png'
import Home2 from '../assets/Home2.jpg'
import Home3 from '../assets/Home3.jpg'
import Vid from '../assets/OKX - video.mp4'

function Home() {
  return (
    <div style={{ backgroundColor: "black"}}>
      <Navv />
      <div style={{ backgroundColor: "black", margin: 0, padding: 0, maxHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12 text-white" style={{ padding: "10px" }}>
              <h1 className="b_h1"><b>Faster, better, <br />stronger than your <br />average crypto <br />exchange</b></h1>
              <div>
                <input className="b_input" type="text" placeholder="  Email address" />
                <button className="b_try" onClick={()=>window.location.href='/read'}>Try OKX</button>
                <button className="b_try" onClick={()=>window.location.href='/read2'}>SIGN UP DATA's</button>

              </div>
              <div className="image-wrapper mt-3">
                <Image src={Home1} width='105' height='50' alt='OKX Logo' fluid />
                <Image src={Home2} width='105' height='50' alt='OKX Logo' fluid />
                <Image src={Home3} width='65' height='65' alt='OKX Logo' fluid />
              </div>
            </div>
            <div className="col-lg-6 col-md-12" style={{ backgroundColor: "black"}}>
              <iframe
                src={Vid}
                title="Embedded Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                controls="0"
                style={{
                  width: "100%",
                  height: "87vh",
                  border: "none",
                  zIndex: 1
                }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "black"}}>
       <br></br>
      </div>
    </div>
  );
}

export default Home;