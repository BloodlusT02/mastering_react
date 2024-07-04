import React from "react";

const Footer = () => {
  return (
    <>
          <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">FoodApp</h1>

        {/* Social Media Icons */}
        <ul className="flex space-x-4">
          <li><a href="#"><i class="ri-instagram-line"></i></a></li>
          <li><a href="#"><i class="ri-facebook-circle-line"></i></a></li>
          <li><a href="#"><i class="ri-twitter-line"></i></a></li>
        </ul>
      </div>

      {/* Copyright */}
      <div className="text-center my-3">
        <p className="text-sm opacity-75">&copy; Foody Zone. where every meal is a journey</p>
      </div>
    </footer>
    </>
  );
};

export default Footer;
