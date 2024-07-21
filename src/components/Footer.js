import React from 'react';

const Footer = () => {
  return (
    <div className='border-t border-neutral-800 pt-4 flex items-center justify-center py-6'>
        <p className='text-neutral-400'>© {new Date().getFullYear()} All rights reserved.</p>
    </div>
  );
}

export default Footer;
