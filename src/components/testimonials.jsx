import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

const testimonials = [
  {
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
  {
    text: "Positivus helped us achieve a substantial increase in engagement on our website. The team’s dedication and knowledge are evident in every step of their work. I highly recommend them for anyone seeking top-notch digital marketing services.",
    name: "Jane Doe",
    position: "CEO at ABC Ltd",
  },
  {
    text: "Our experience with Positivus has been exceptional. Their strategies have helped us gain more visibility and effectively reach our target audience. A fantastic team to work with!",
    name: "Mike Johnson",
    position: "COO at DEF Inc",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  
  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval); 
  }, []);

  return (
    <section className="bg-[#191A23] text-white py-8 sm:py-12 md:py-16 px-4 sm:px-8 lg:px-40" style={{ borderRadius: '50px' }}>
      <div className="max-w-6xl mx-auto">
       
        <div className="flex flex-col items-center mb-6 sm:mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black px-4 py-2 bg-[#B9FF66] rounded-md">Testimonials</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-2 sm:mt-4">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
          </p>
        </div>

        
        <div className="relative flex items-center justify-center w-full">
          <IconButton onClick={handlePrev} aria-label="previous" className="absolute left-2 sm:left-4 text-white">
            <FaChevronLeft size={20} sm={24} />
          </IconButton>
          <Card
            sx={{
              borderRadius: '20px',
              backgroundColor: '#191A23',
              color: 'white',
              width: '100%',
              maxWidth: '500px',
              padding: '16px',
              margin: '0 16px',
              position: 'relative',
              border: '2px solid #B9FF66',
            }}
            className="relative mx-auto"
          >
            <div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full"
              style={{
                width: 0,
                height: 0,
                borderLeft: '15px solid transparent',
                borderRight: '15px solid transparent',
                borderTop: '15px solid #B9FF66',
              }}
            ></div>

            <CardContent>
              <Typography
                variant="body1"
                className="text-sm sm:text-base md:text-lg italic text-center"
                sx={{ color: 'white', fontWeight: '300', lineHeight: '1.6' }}
              >
                ”{testimonials[currentIndex].text}”
              </Typography>
              <div className="flex flex-col items-center mt-4 sm:mt-6">
                <Typography variant="h6" className="text-sm sm:text-base md:text-lg" sx={{ color: '#B9FF66', fontWeight: 'bold' }}>
                  {testimonials[currentIndex].name}
                </Typography>
                <Typography variant="subtitle2" className="text-xs sm:text-sm md:text-base" sx={{ color: '#B9FF66' }}>
                  {testimonials[currentIndex].position}
                </Typography>
              </div>
            </CardContent>
          </Card>

          <IconButton onClick={handleNext} aria-label="next" className="absolute right-2 sm:right-4 text-white">
            <FaChevronRight size={20} sm={24} />
          </IconButton>
        </div>

        <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${index === currentIndex ? 'bg-[#B9FF66]' : 'bg-gray-400'}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
