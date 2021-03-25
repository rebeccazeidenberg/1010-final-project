import React from "react";

function Home() {
    return (
      <div className="UltimateDiv">
        <div className="Home">
          <div className="HomeText">
            <h2>Rebecca Zeidenberg</h2>
            <h3>Full Stack Web Developer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra ut felis eget luctus. Nulla lobortis nec erat sit amet ultricies. Vestibulum vulputate quis magna sit amet placerat. Proin aliquet pellentesque commodo. </p>
          </div>
          <div className="Pictures">
            <div className="Picture" style={{backgroundImage: "url(/pictures/painting1.jpg)"}} />
            <div className="Picture" style={{backgroundImage: "url(/pictures/painting2.jpg)"}} />
            <div className="Picture" style={{backgroundImage: "url(/pictures/painting4.jpg)"}} />
            <div className="Picture" style={{backgroundImage: "url(/pictures/painting3.jpg)"}} />
            <div className="Picture" style={{backgroundImage: "url(/pictures/painting5.jpg)"}} />
          </div>
        </div>
      </div>
    )
  
}

export default Home;
  