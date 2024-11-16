import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardHeading1 from '../assets/CardHeading.svg';
import CardHeading2 from '../assets/CardHeading1.svg';
import Seoicon from '../assets/seoIcon.svg';
import Cardicon from '../assets/cardimage.svg';

function Services() {
  return (
    <section className="w-full max-w-7xl mx-auto px-8 py-16">
      <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-black px-4 py-2 bg-[#B9FF66] rounded-md">Services</h2>
        <p className="text-lg text-gray-700 max-w-xl">
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
        </p>
      </div>

      
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        <Card
          sx={{
            borderRadius: '60px',
            backgroundColor: '#f3f4f6',
            width: '100%',
            height: '330px',
            border: '1px solid',
            borderBottom: '4px solid',
          }}
          className="p-6 shadow-lg relative flex flex-col justify-between"
        >
          <CardContent className="flex-1 flex flex-col items-center justify-center">
            <img
              src={CardHeading1}
              alt="Search Engine Optimization"
              className="absolute top-14 left-14 h-20"
            />
            <img src={Seoicon} alt="SEO Icon" className="h-40 w-96 mt-10 ml-48" />
          </CardContent>
          <CardActions className="flex items-center mt-6">
            <FaArrowRight className="text-black mr-2" />
            <span className="text-black font-semibold">Learn more</span>
          </CardActions>
        </Card>

        <Card
          sx={{
            borderRadius: '60px',
            backgroundColor: '#B9FF66',
            width: '100%',
            height: '330px',
            border: '1px solid',
            borderBottom: '4px solid',
          }}
          className="p-6 shadow-lg relative flex flex-col justify-between"
        >
          <CardContent className="flex-1 flex flex-col items-center justify-center">
            <img
              src={CardHeading2}
              alt="Pay-Per-Click Advertising"
              className="absolute top-14 left-14 h-20"
            />
            <img src={Cardicon} alt="PPC Icon" className="h-40 w-96 mt-10 ml-48" />
          </CardContent>
          <CardActions className="flex items-center mt-6">
            <FaArrowRight className="text-black mr-2" />
            <span className="text-black font-semibold">Learn more</span>
          </CardActions>
        </Card>
      </div>
    </section>
  );
}

export default Services;
