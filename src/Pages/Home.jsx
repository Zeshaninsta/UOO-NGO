import React from 'react';
import heroImage from '../assets/Images/1.jpg'; // Adjust the path as needed

const Home = () => {
  return (
    <div className="bg-gray-100">
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center relative"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
         <div className='hidden lg:flex w-full h-full bg-[#000000] absolute top-0 left-0 opacity-85 group-hover:opacity-0 duration-500'></div>
        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center z-20 h-screen w-full flex flex-col justify-center items-center">
          <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-blue-600 text-7xl text-white font-rubik font-bold'>URJI ORPHANAGE ORGANIZATION</h1>
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">Helping Orphans, Changing Lives</h1>
          <p className="text-lg md:text-xl text-gray-400 mb-6 w-[60%]">
            Our mission is to support orphaned children and families by providing essential needs such as clothing, food, education, and mental support. With the help of sponsors and partner organizations, we strive to make a lasting impact on their lives.
          </p>
          <p className="text-md md:text-lg text-white mb-6">
            Join us in our mission to bring hope and a brighter future to those in need. Your support can make a significant difference.
          </p>
          <div className="space-x-4">
            <a href="/donate" className="bg-blue-500 text-white p-4 rounded-lg shadow hover:bg-blue-700 transition duration-300">Donate Now</a>
            <a href="/learn-more" className="bg-gray-200 text-black p-4 rounded-lg shadow hover:bg-gray-400 transition duration-300">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
