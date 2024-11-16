import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { FaPlus, FaMinus } from 'react-icons/fa';

function WorkingProcess() {
  
  const [expanded, setExpanded] = useState([false, false]);
  const handleExpandClick = (index) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-8 py-16">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-4xl font-bold text-black px-4 py-2 bg-[#B9FF66] rounded-md">Our Working Process</h2>
        <p className="text-lg text-gray-700">Step-by-Step Guide to Achieving Your Business Goals</p>
      </div>

      <Card
        sx={{
          borderRadius: '30px',
          backgroundColor: '#B9FF66',
          border:'1px solid',
          borderBottom:'4px solid',
          height: expanded[0] ? '279px' : '159px', 
          transition: 'height 0.3s ease',           
        }}
        className="p-6 mb-8 relative"
      >
        <div className="flex justify-between items-center">
          <Typography variant="h5" component="div" className="flex items-center text-black text-2xl font-bold">
            01 <span className="ml-2">Consultation</span>
          </Typography>
          <IconButton onClick={() => handleExpandClick(0)} aria-label="expand">
            {expanded[0] ? <FaMinus /> : <FaPlus />}
          </IconButton>
        </div>
        <Collapse in={expanded[0]} timeout="auto" unmountOnExit>
          <CardContent>
            <hr className="border-t border-gray-400 my-4" /> 
            <Typography variant="body2" color="textSecondary" className="text-black mt-4">
              During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

      <Card
        sx={{
          borderRadius: '30px',
          backgroundColor: '#f3f4f6',
          border:'1px solid',
          borderBottom:'4px solid',
          height: expanded[1] ? '279px' : '159px', 
          transition: 'height 0.3s ease',           
        }}
        className="p-6 relative"
      >
        <div className="flex justify-between items-center">
          <Typography variant="h5" component="div" className="flex items-center text-black text-2xl font-bold">
            02 <span className="ml-2">Research and Strategy Development</span>
          </Typography>
          <IconButton onClick={() => handleExpandClick(1)} aria-label="expand">
            {expanded[1] ? <FaMinus /> : <FaPlus />}
          </IconButton>
        </div>
        <Collapse in={expanded[1]} timeout="auto" unmountOnExit>
          <CardContent>
            <hr className="border-t border-gray-400 my-4" /> 
            <Typography variant="body2" color="textSecondary" className="text-black mt-4">
              In this phase, we conduct in-depth research and create a customized strategy tailored to your business. Our goal is to develop a plan that aligns with your objectives and maximizes your marketing efforts.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </section>
  );
}

export default WorkingProcess;
