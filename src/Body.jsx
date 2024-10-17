import React from 'react'
import './Body.css'
import about from '../src/assets/images/about.png'

const Body = () => {

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        document.querySelector("#about-img").style.transform = `scale(${scrollY / 3000})`;
    });

  return (
    <>
        <div id="img2" className="parallax"></div> 
        <div className="games">
            <div className="games-d1"> 
                <div id='card' className="games-card">
                    <img className="games-card-img" width="300px" src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/store/games/listings/BO6_PLPCard_Hero.webp" alt=""/>
                    <div className="games-span">
                        <span>CALL OF DUTY</span><br/>
                        <span className="fs-5">BLACK OPS 6</span><br/>
                        <div className="mt-2 games-sp-2">
                            <span ><i className="fa-brands fa-xbox ms-1"></i></span>
                            <span><i className="fa-brands fa-playstation ms-1"></i></span>
                            <span><i className="fa-brands fa-steam ms-1"></i></span>
                            <span><i className="fa-brands fa-windows ms-1"></i></span>
                            <span><i className="fa-brands fa-battle-net ms-1"></i></span>
                        </div>
                    </div>
                </div>
                <div className="games-card">
                    <img className="games-card-img" width="300px" src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/store/games/listings/GamesPLP_MWIII.webp" alt=""/>
                    <div className="games-span">
                        <span>CALL OF DUTY</span><br/>
                        <span className="fs-5">MODERN WARFARE III</span><br/>
                        <div className="mt-2 games-sp-2">
                            <span><i className="fa-brands fa-xbox ms-1"></i></span>
                            <span><i className="fa-brands fa-playstation ms-1"></i></span>
                            <span><i className="fa-brands fa-steam ms-1"></i></span>
                            <span><i className="fa-brands fa-windows ms-1"></i></span>
                            <span><i className="fa-brands fa-battle-net ms-1"></i></span>
                        </div>
                    </div>
                </div>
                <div className="games-card">
                    <img className="games-card-img" width="300px" src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/store/games/listings/GamesPLP_WZ.webp" alt=""/>
                    <div className="games-span">
                        <span>CALL OF DUTY</span><br/>
                        <span className="fs-5">WARZONE</span><br/>
                        <div className="mt-2 games-sp-2">
                            <span><i className="fa-brands fa-xbox ms-1"></i></span>
                            <span><i className="fa-brands fa-playstation ms-1"></i></span>
                            <span><i className="fa-brands fa-steam ms-1"></i></span>
                            <span><i className="fa-brands fa-battle-net ms-1"></i></span>
                        </div>
                    </div>
                </div>
                <div className="games-card">
                    <img className="games-card-img" width="300px" src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/store/games/listings/WZM_Hero_Crop_Square.webp" alt=""/>
                    <div className="games-span">
                        <span>CALL OF DUTY</span><br/>
                        <span className="fs-5">WARZONE</span><br/>
                        <div className="mt-2 games-sp-2">
                            <span><i className="fa-brands fa-apple ms-1"></i></span>
                            <span><i className="fa-brands fa-google-play ms-1"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="d-flex justify-content-center pb-5 bg-black">
            <button className="button-game btn border border-black">SEE MORE IN STORE</button>
        </div>
        <div id="img1" className="parallax "></div>   
        <div className="about-main">
            <div className="about">
                <img id='about-img' width="500px" height="500px" src={about} alt=""/>
                <div className="about-d1">
                    <h1>ABOUT</h1>
                    <p className="about-p1">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis a saepe corporis vel in rerum delectus sapiente optio voluptas fugit eius quibusdam incidunt, atque non, voluptatum quod possimus! Delectus, corrupti?
                    </p>
                    <p className="about-p1">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis a saepe corporis vel in rerum delectus sapiente optio voluptas fugit eius quibusdam incidunt, atque non, voluptatum quod possimus! Delectus, corrupti?
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Body