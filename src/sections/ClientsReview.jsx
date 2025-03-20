import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const reviews = [
    {
      id: 1,
      name: "Sabir Ahmed",
      image: "/sabir.jpg",
      review: "I know Ashraful personally. I don't understand much about tech, but he fixed issues in our web app within minutes. I was shocked. He's really good at what he does.",
    },
    {
      id: 2,
      name: "Md Abdullah",
      image: "/buzz.jpg",
      review: "Being a developer, I can say he's highly professional and creative. He can explain complex concepts in a simple way. Looking forward to future collaborations.",
    },
    {
      id: 3,
      name: "Your Name",
      image: "/empty.png",
      review: "I want to work together. I accept your profile pic and your review here.",
    },
  ];

  return (
    <motion.section
      id="clients"
      className="min-h-screen bg-gray-900 text-gray-100 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto p-8 text-center">
        <h2 className="text-4xl font-bold mb-6 text-primary">Clients</h2>
        <p className="text-lg mb-10 text-gray-400">Worked with multiple clients delivering quality projects.</p>

        <Slider {...settings}>
          {reviews.map((client) => (
            <div key={client.id} className="px-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-800 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl p-8"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-28 h-28 rounded-full border-4 border-primary mb-4"
                  />
                  <h3 className="text-2xl font-semibold text-white">{client.name}</h3>
                  <p className="text-gray-300 mt-3">{client.review}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </motion.section>
  );
};

export default Clients;
