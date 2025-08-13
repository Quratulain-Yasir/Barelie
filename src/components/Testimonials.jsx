import React from 'react';
import Slider from 'react-slick';

// Import slick styles
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import after1 from "../assets/after1.jpg"
import after2 from "../assets/after2.jpg"
import after3 from "../assets/after3.jpg"
import before1 from "../assets/before1.jpg"
import before2 from "../assets/before2.jpg"
import before3 from "../assets/before3.jpg"



// sample images
const beforeAfterImg = [
  { before: before1, after: after1 },
  { before: before2, after: after2 },
  { before: before3, after: after3 },
];

const testimonial = {
  stars: 5,
  text: `My skin has never felt this smooth! Finally, products that actually do what they promise.`,
  author: "Sara P.",
  role: "Grateful Patient",
  photo: "https://randomuser.me/api/portraits/women/44.jpg"
};

function BeforeAfterSlider() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="relative mx-auto max-w-[600px] px-8 rounded-md bg-yellow-200">
      
    <Slider {...settings}>
      {beforeAfterImg.map(({ before, after }, idx) => (
        <div key={idx} className="flex justify-center items-center">
<div className='flex flex-nowrap justify-center gap-5 p-5 w-fit mx-auto'>
            <div className="text-center">
            <img src={before} alt="Before" className="w-[250px] rounded-md" />
            <p className='mt-2 font-semibold'>Before</p>
          </div>
          <div className="text-center">
            <img src={after} alt="After" className="w-[250px] rounded-md" />
            <p className='mt-2 font-semibold'>After</p>
          </div>
</div>
        </div>
      ))}
    </Slider>
    </div>
  );
}

function TestimonialLogic() {
  const stars = Array(testimonial.stars).fill("★").join(" ");

  return (
    <div className="max-w-[400px] mx-auto my-20 p-5 rounded-xl bg-white text-center font-serif shadow-md">
      <div className="text-[#f5a623] text-2xl mb-4">{stars}</div>
      <p className="italic text-lg mb-5">“ {testimonial.text} ”</p>
      <img
        src={testimonial.photo}
        alt={testimonial.author}
        className="w-[60px] h-[60px] rounded-full object-cover mb-2.5"
      />
      <h4 className="m-0">{testimonial.author}</h4>
      <small className="text-gray-500">{testimonial.role}</small>
    </div>
  );
}

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="pt-5 px-5 min-h-screen ">
        <div className="inline-flex sm:flex flex-col  items-center">
        <span className='py-5 text-sm tracking-wide text-gray-700'>REAL RESULTS, REAL PEOPLE</span>
        <h1 className="text-center mb-10 text-3xl sm:text-5xl font-medium">
          Skincare that works, stories <br /> that inspire
        </h1>
        </div>


        <BeforeAfterSlider />

        <TestimonialLogic />
      </div>
    </section>
  );
};

export default Testimonials;
