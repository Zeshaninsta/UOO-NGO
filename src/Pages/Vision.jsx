import React from 'react';
import { HiOutlineArrowSmRight,HiOutlineStar, HiOutlineEye, HiOutlineShieldCheck } from "react-icons/hi";

const Vision = () => {
  return (
    <div className="bg-slate-900 h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {/* <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-600 opacity-70 transform rotate-45 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-pink-500 to-yellow-600 opacity-70 transform rotate-45 -translate-x-1/2 translate-y-1/2"></div> */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
         <div className="absolute  w-72 h-72 bottom-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transform rotate-45 -translate-x-1/2 translate-y-1/2 mix-blend-multiply"></div>
        <div className="absolute -right-20 w-72 h-72 bg-gradient-to-r from-yellow-400 via-green-500 to-teal-500 transform rotate-45 translate-x-1/2 -translate-y-1/2 mix-blend-multiply"></div> 
      
         <div className="absolute top-0 opacity-10 mix-blend-screen left-1/6 w-1/2 h-full bg-gradient-to-r from-blue-500 to-slate-500 transform rotate-45 -translate-x-1/4 -translate-y-1/4 "></div> 
      </div>




        <div className='flex flex-col justify-center items-center z-20 relative'>
      <h1 className="text-3xl md:text-5xl font-bold text-center text-blue-600 mb-10 font-rubik ">Our Vision</h1>
      <div className="w-[80%] m-auto flex flex-col lg:flex-row justify-center gap-6">
        <div className='border border-pink-500 p-4 w-full gap-4 relative overflow-hidden'>
        <div className="absolute  w-72 h-72 bottom-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transform rotate-45 -translate-x-1/2 translate-y-1/2 -z-10"></div>
        <div className="absolute -right-20 w-72 h-72 bg-gradient-to-r from-yellow-400 via-green-500 to-teal-500 transform rotate-45 translate-x-1/2 -translate-y-1/2 -z-10"></div>
            <h1 className='flex gap-2 justify- items-center text-4xl text-white font-rubik font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-2 '>
                <HiOutlineStar />
                Mission</h1>
            <div className='flex flex-col justify-center items-start gap-2 w-full mt-2 z-20'>
                <p className='flex gap-2 text-black text-md justify-center items-center bg-gray-200 p-2 w-full  font-rubik'>

                    Daa'imman Amanamummaa Hawasa Isaanif Akka Qabatan Mirkanessu
                </p>
                <p className='flex gap-2 text-black text-md justify-center items-center bg-gray-200 p-2 w-full  font-rubik'>
                    Aadaa Walgargaarsa Hawasaa Nannoo Giddutti akka amaleffamu Gochuu
                </p>
                <p className='flex gap-2 text-black text-md justify-center items-center bg-gray-200 p-2 w-full  font-rubik'>
                    Hamilee Da'imman Yatiimaafi Maatii Harka Qalleyyif Kennufi Jireenya Hawasummaa Isaanii Cimsuuf
                </p>
                <p className='flex gap-2 text-black text-md justify-center items-center bg-gray-200 p-2 w-full  font-rubik'>
                    Yatiimotaa fi Da'imman Daandii irratti Hafan Fedhii Bu'uralee ilma Namaa ta'an Guutun Hirmanna Barnoota akka argatan Gochuu
                </p>
            </div>
        </div>
        <div className='border border-indigo-500 p-4 w-full z-20 relative overflow-hidden'>
        <div className="absolute  w-72 h-72 bottom-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transform rotate-45 -translate-x-1/2 translate-y-1/2 -z-10"></div>
        <div className="absolute -right-20 w-72 h-72 bg-gradient-to-r from-yellow-400 via-green-500 to-teal-500 transform rotate-45 translate-x-1/2 -translate-y-1/2 -z-10"></div>
        <h1 className='flex gap-2 justify-start items-center text-4xl text-white font-rubik font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 p-2 '>
            <HiOutlineEye />
            Vision</h1>
            <div className='flex flex-col justify-center items-start gap-2 w-full mt-2 z-20'>
            <p className='flex gap-2 text-black text-md justify-center items-center bg-gray-200 p-2 w-full  font-rubik'>
                    Xiinsammuu Daa'imman Yataamaa fi Daa'imman Daandii irrratti Hafanii akka Eeggamu Kallatii Hundaan Hojachuu
                </p>
                <p className='flex gap-2 text-black text-md justify-center items-center bg-gray-200 p-2 w-full  font-rubik'>
                    Maatii Yataamaa Harka Qalleeyyii ta'an Tajaajila Nyaataa, Uffataa, Barnootafi Fayyaa akka Argatan Taasisuu
                </p>
                <p className='flex gap-2 text-black text-md justify-center items-center bg-gray-200 p-2 w-full  font-rubik'>
                    Maatii Yataamaa fi Harka Qalleeyyii ta'an Hanga Madda Hojii Galii Isaanii Uummamufitti Ji'a Ji'aan Mindessu
                </p>
                <p className='flex gap-2 text-black text-md justify-center items-center bg-gray-200 p-2 w-full  font-rubik'>
                    Akka Guutuu Addunyatti (Global Sustainable Development Goals 2030) Qabame Galmaan Gahuuf Dhabbatichi Sadarkaa Biyyaa fi Dhuunfatti Gadi Bu'uun Xiyyeffannon Kan Hojjatudha
                </p>
            </div>
        </div>
        <div className='border border-yellow-400 p-4 w-full relative overflow-hidden'>
        <div className="absolute  w-72 h-72 bottom-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transform rotate-45 -translate-x-1/2 translate-y-1/2 -z-10"></div>
        <div className="absolute -right-20 w-72 h-72 bg-gradient-to-r from-yellow-400 via-green-500 to-teal-500 transform rotate-45 translate-x-1/2 -translate-y-1/2 -z-10"></div>
        <h1 className='flex gap-2 justify-start items-center text-4xl text-white font-rubik font-bold bg-gradient-to-r from-yellow-400 via-green-500 to-teal-500 p-2 '>
            <HiOutlineShieldCheck />
            Responsibility</h1>
        <div className='flex flex-col justify-center items-start gap-2 w-full mt-2 z-20'>
        <p className='flex gap-2 text-black text-md justify-center items-center bg-gray-200 p-2 w-full  font-rubik'>
                    Walitti Dhufeenya Hawasummaa Ilaalchisee Itti Gafatamummaa Hawasumma Qabu Keessaa Tokko Harka Qalleyyif Tola Ooltummaa Kennufi Haqa Ooltummaan Eegudha 
                </p>
            </div>
            </div>
            </div>       
      </div>
    </div>
  );
}

export default Vision;
