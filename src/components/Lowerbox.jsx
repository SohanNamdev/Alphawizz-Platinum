import React from 'react';

const Lowerbox = () => {
  return (
    <div className="h-72 w-full  flex justify-center border-t-2 border-gray-200 items-center">
      <div className="h-40 w-4/5 bg-white shadow-gray-500 shadow-lg flex justify-between items-center">
        <div className='left h-full w-2/4 '>
        <img className='h-20 m-8' src="https://alphasilver.productsalphawizz.com/uploads/booking.png" alt="" />
        <h1 className='relative left-32 text-4xl font-bold bottom-28'>Download App Now ! <br /></h1>
        <h3 className='relative left-32 bottom-24'>Use code WELCOMEMMT and get FLAT 12% OFF* on your first flight booking</h3>
        </div>
        <div className='right h-full w-2/4'>
        <img className='h-9 relative left-12 m-8' src="https://jetsetterindia.com/uploads/appstore/appstore-image.png" alt="" />
        <img className='h-9 relative left-12  m-8' src="https://jetsetterindia.com/uploads/appstore/playstore-image.png" alt="" />
        <img className='h-28 relative left-72 bottom-36  m-8' src="https://jetsetterindia.com/uploads/appstore/QRCodeDT_QR-code.jpg" alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default Lowerbox;

