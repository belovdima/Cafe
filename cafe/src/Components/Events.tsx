import React from "react";
import "./../Styles/SCSS/_Events.scss"

function Events() {



    return (
        <div className="events">
            <div className="carousel">
                <div className="carousel__inner">
                    <div className="carousel__inner--item">
                        <img src="~/../../pics/fish.jpg" alt="fish" />
                    </div>
                    <div className="carousel__inner--item">
                        <img src="~/../../pics/tyler.jpg" alt="tyler" />
                    </div>
                    <div className="carousel__inner--item">
                        <img src="~/../../pics/minecraft.jpg" alt="minecraft" />
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
}

export default Events