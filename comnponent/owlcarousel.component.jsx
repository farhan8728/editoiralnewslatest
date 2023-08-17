import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Style from "../styles/carousel.module.css"


import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export  default function Fs(){
  const settings = {
    dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      prevArrow: <FaArrowLeft className={Style.prev_arrow} />,
      nextArrow: <FaArrowRight className="next-arrow" />,
     
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return(
    <>

      <div>
        <h2 className={Style.qus}> আজকের প্রশ্ন </h2>
        <Slider {...settings}>
          <div>
            <h3 className={Style.title}>ব্যক্তিগত তথ্য ফাঁসের জন্য দায়ী ব্যক্তিদের বিরুদ্ধে যথাযথ ব্যবস্থা নেওয়া হবে বলে মনে করেন কি?</h3>


            <div className={Style.vote_ans}>
            <input type="radio" id="yes" name="fav_language" value="হ্যাঁ" />
            <label for="html" >হ্যাঁ</label><br />
            </div>

            <div className={Style.vote_ans}>

                <input type="radio" id="না" name="fav_language" value="না" />
                <label for="html">না</label><br />
            </div>


            <div className={Style.vote_ans}>

            <input type="radio" id="মতামত" name="fav_language" value="মতামত" />
            <label for="html">মতামত নেই</label><br />
          </div>

            
            
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
         
        </Slider>
      </div>
    
    </>
  )

  
}