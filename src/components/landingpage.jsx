import React from 'react';

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center p-4">
      <div className="w-full h-full flex justify-center items-center">
        <img
          src="/images/landingpage.svg"
          alt="Landing"
          className="w-full max-w-[90vw] md:max-w-[60vw] lg:max-w-[50vw] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default LandingPage;
