import Marquee from "react-fast-marquee";

function InfiniteCarousel() {
  return (
    <Marquee speed={50} gradient={false} pauseOnHover={false} className="bg-gradient-to-r from-[#fff0e1] to-[#ffac54] py-4">
      <span className="mr-8">Visible Results ✴</span>
      <span className="mr-8">Sustainable Ingredients ✴</span>
      <span className="mr-8">Science-Driven Formulas ✴</span>
      <span className="mr-8">Visible Results ✴</span>
      <span className="mr-8">Sustainable Ingredients ✴</span>
      <span className="mr-8">Science-Driven Formulas ✴</span>
      <span className="mr-8">Visible Results ✴</span>
      <span className="mr-8">Sustainable Ingredients ✴</span>
      <span className="mr-8">Science-Driven Formulas ✴</span>
    </Marquee>
  );
}

export default InfiniteCarousel;
