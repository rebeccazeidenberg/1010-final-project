import React from "react";

function Portfolio() {
    return (
        <div className="Portfolio">
            <div className="PortfolioText">
                <h2>Portfolio</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Ac tortor vitae purus faucibus ornare. Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Aliquam etiam erat velit scelerisque. Proin nibh nisl condimentum id. Enim nunc faucibus a pellentesque sit amet porttitor. </p>
                <p> Sagittis purus sit amet volutpat consequat mauris nunc congue. Pharetra diam sit amet nisl suscipit. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Pellentesque habitant morbi tristique senectus. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Mauris nunc congue nisi vitae. Morbi blandit cursus risus at ultrices mi tempus. Sed risus ultricies tristique nulla aliquet. Imperdiet massa tincidunt nunc pulvinar sapien. Volutpat ac tincidunt vitae semper.</p>
            </div>

            <div className="PortfolioPicture">
                <div className="PortImageOne" style={{backgroundImage: "url(/pictures/portimage1.jpg)"}}/>
                <div className="PortImageTwo" style={{backgroundImage: "url(/pictures/portimage2.png)"}}/>
                <div className="PortImageThree" style={{backgroundImage: "url(/pictures/portimage3.png)"}}/>
                <div className="PortImageFour" style={{backgroundImage: "url(/pictures/portimage4.jpg)"}}/>
                <div className="PortImageFive" style={{backgroundImage: "url(/pictures/portimage5.jpg)"}}/>

            </div>

        </div>

    )
}

export default Portfolio;