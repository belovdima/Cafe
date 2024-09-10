import React from "react";
import "./../Styles/SCSS/_Events.scss"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Events() {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1// optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (
        <div className="events">
            <Carousel   responsive={responsive}
                        slidesToSlide={1}
                        draggable={false}
                        swipeable={true}
                        infinite={true}
                        keyBoardControl={false}
                        autoPlay={true}
                        autoPlaySpeed={4000}
                        transitionDuration={500}
                        shouldResetAutoplay={true}
                        >
                <div className="img img--1"><img src="~/../../pics/fish.jpg" alt="fish" width={800} height={450} /></div>
                <div className="img img--2"><img src="~/../../pics/tyler.jpg" alt="tyler" width={800} height={450}/></div>
                <div className="img img--3"><img src="~/../../pics/minecraft.jpg" alt="minecraft" width={800} height={450}/></div>
                <div className="img img--4"><img src="~/../../pics/background-red.jpg" alt="background" width={800} height={450}/></div>
            </Carousel>
        </div>
    );
}

export default Events