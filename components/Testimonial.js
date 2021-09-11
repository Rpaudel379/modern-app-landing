import { AiFillStar } from "react-icons/ai";

// import Swiper core and required modules
import { Navigation } from "swiper/core";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Testimonial = () => {
  return (
    <section id="testimonial">
      <div className="container-sm ">
        <p className="fw-bold text-blue text-center">TESTIMONIAL</p>
        <p className="h3 fw-bold text-center">Meet Client Satisfaction</p>

        {/* testimonials */}

        <Swiper
          // install Swiper modules
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          freeMode={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="mySwipper ps-4 py-5 my-5"
          loop={true}
          breakpoints={{
            767: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          {data.map(
            ({ id, title, description, avatar, name, designation, review }) => (
              <SwiperSlide className="swipper-slide" key={id}>
                <div className="card py-3 px-3 testimonial  border-0">
                  <div className="card-body">
                    <div className="fs-5  ">
                      <Rating rating={review} />
                    </div>
                    <h6 className="card-title mt-3 fw-bold">{title}</h6>
                    <p className="card-text mt-4 lh-lg">{description}</p>
                  </div>
                  <div className="card-footer  bg-transparent border-0 d-flex mt-3">
                    <div>
                      <img
                        src={avatar}
                        alt={name}
                        className="me-3 img-fluid "
                      />
                    </div>
                    <div className="info">
                      <p className="fw-bold mb-1">{name}</p>
                      <p className="text-primary fw-custom">{designation}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>

        {/* end of testimonials */}
      </div>
    </section>
  );
};

export default Testimonial;

const Rating = ({ rating }) => {
  const totalRating = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      totalRating.push(<AiFillStar className="text-gold" key={i} />);
    } else {
      totalRating.push(<AiFillStar className="text-not-gold" key={i} />);
    }
  }

  return <>{totalRating}</>;
};

const data = [
  {
    id: 1,
    title: "Modern look & trending design",
    description:
      "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
    avatar: "./testimonial/avatar1.png",
    name: "Denny Hilguston",
    designation: "@denny.hil",
    review: 4,
  },
  {
    id: 2,
    title: "Design Quality & performance",
    description:
      "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
    avatar: "./testimonial/avatar2.png",
    name: "Denny Hilguston",
    designation: "@denny.hil",
    review: 5,
  },
  {
    id: 3,
    title: "Layout and organized layers",
    description:
      "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
    avatar: "./testimonial/avatar3.png",
    name: "Denny Hilguston",
    designation: "@denny.hil",
    review: 5,
  },
  {
    id: 4,
    title: "Modern look & trending design",
    description:
      "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
    avatar: "./testimonial/avatar4.png",
    name: "Denny Hilguston",
    designation: "@denny.hil",
    review: 4,
  },
];

/* // import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/core";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Testimonial = () => {
  return (
    <section id="testimonial">
      <Swiper
        // install Swiper modules
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        freeMode={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="mySwipper"
        loop={true}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonial;
 */
