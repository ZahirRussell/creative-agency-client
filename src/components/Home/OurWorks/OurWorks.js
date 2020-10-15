import React from 'react';

 import carousel1 from '../../../images/carousel-1.png';
 import carousel2 from '../../../images/carousel-2.png';
 import carousel3 from '../../../images/carousel-3.png';

import './OurWorks.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

const OurWorks = () => {
    return (

        <section className="ourWorks">
            <h1 className="text-white my-5">Here are some of <span style={{ color: '#7AB259' }}>our works</span></h1>
            {/* <Carousel>

                <div className="carousel-inner">
                    <img src={carousel1} alt="" />
                    <p className="legend">Mobile App</p>
                </div>
                <div className="carousel-inner">
                    <img src={carousel2}  alt=""/>
                    <p className="legend">Web App</p>
                </div>
                <div className="carousel-inner">
                    <img src={carousel3} alt="" />
                    <p className="legend">UX Design</p>
                </div>

            </Carousel> */}
      <div className="col-md-12">
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                partialVisible
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 3,
                    partialVisibilityGutter: 40
                    },
                    mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                    },
                    tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                    }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
                >
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <img src={carousel1} alt=""/>
                    <p className="legend">UX Design</p>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <img src={carousel2} alt="" className="rounded w-300 h-150"/>
                    <p className="legend">UX Design</p>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <img src={carousel3} alt="" className="rounded w-300 h-150"/>
                    <p className="legend">UX Design</p>
                </div>

            </Carousel>
            </div>
        </section>


    );
};

export default OurWorks;