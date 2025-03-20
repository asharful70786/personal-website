import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const navigate = useNavigate();

  const handleScroll = (section) => {
    navigate('/');  // Ensure it navigates back to the main page
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <footer className="bg-base-300 p-8 text-center border-t border-gray-700">
      
      {/* Footer Title */}
      <h2 className="text-4xl font-bold text-primary mb-4 cursor-pointer" onClick={() => handleScroll('home')}>
      ₐₛₕᵣₐfᵤₗ ₘₒₘᵢₙ
      </h2>

      {/* Footer Links */}
      <div className="flex justify-center space-x-8 mb-4">
        <button onClick={() => navigate('/terms')} className="text-lg text-gray-600 hover:text-primary transition-colors">
          Terms & Conditions
        </button>
        <button onClick={() => navigate('/privacy')} className="text-lg text-gray-600 hover:text-primary transition-colors">
          Privacy Policy
        </button>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 mb-4">
       
          
        <a href="https://www.linkedin.com/in/ashraful-momin/" target="_blank" rel="noopener noreferrer" 
           className="text-blue-500 hover:text-blue-700 transition-transform transform hover:scale-110">
          <FaLinkedin size={28} />
        </a>
        
        <a href="https://github.com/asharful70786" target="_blank" rel="noopener noreferrer" 
           className="text-gray-800 hover:text-gray-600 transition-transform transform hover:scale-110">
          <FaGithub size={28} />
        </a>
        
        <a href="https://www.instagram.com/codercamp2024?igsh=MWY1eDd0cnB2bXpseA==" target="_blank" rel="noopener noreferrer" 
           className="text-pink-500 hover:text-pink-700 transition-transform transform hover:scale-110">
          <FaInstagram size={28} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-gray-500 text-sm mt-4">
        &copy; {new Date().getFullYear()} Ashraful momin. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
