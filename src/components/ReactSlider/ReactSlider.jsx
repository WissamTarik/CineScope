import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MovieCard from '../MovieCard/MovieCard';
const ReactSlider = ({movies,title}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows:false,
     autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
       
        }
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 2,
       
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
       
        }
      },
      {
        breakpoint:500,
        settings: {
          slidesToShow: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint:350,
        settings: {
          slidesToShow: 1,
          initialSlide: 2
        }
      },
     
    ]
  };
  return (
<section className="w-full bg-white dark:bg-gray-900 py-2 rounded-lg px-2">
  <h2 className="text-2xl md:text-3xl font-bold my-3 px-3 text-gray-800 dark:text-white">
    {title}:
  </h2>
  <div className="mx-auto overflow-hidden">
    <Slider {...settings}>
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Slider>
  </div>
</section>





  )
}

export default ReactSlider