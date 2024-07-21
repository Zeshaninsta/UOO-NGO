import React from 'react'
import Keyruu from '../assets/Images/Keyruu.jpg'

const About = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center relative overflow-hidden'>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-600 opacity-70 transform rotate-45 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-pink-500 to-yellow-600 opacity-70 transform rotate-45 -translate-x-1/2 translate-y-1/2"></div>


    
        <div className='w-[80%] m-auto flex flex-col justify-center items-center relative overflow-hidden'>
                <h1 className='text-5xl text-blue-500 font-rubik font-bold capitalize mb-5'>About us</h1>
        <div className='flex justify-around items-center gap-5 w-full h-full '>
            <div className='w-[40%] h-full p-5  bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500'>
                <img src={Keyruu} alt='keyruu' />
                <h3 className='text-white font-rubik font-bold text-xl mt-2'>Keyraddin Mohammed</h3>
                <p className='text-gray-200 font-rubik italic text-sm'>Founder & Director of Urji Orphanage Organization</p>
            </div>
            <div className='w-full h-full'>
                <h1 className='text-3xl text-black font-rubik font-bold'>Urji Orphanage Organization</h1>
                <p className='font-rubik text-lg lg:text-xl '>
                   Dhaabbanni Qarqaarsa Yatimmanii Urjii bara hundefama isaa bara 2012 EC irraa Kaasee Akkatuma Bocama Kaayyoo fi Karoora isaatiin Hojiwwan garagaraa kan hojataa turedha,
                </p>
                <p className='font-rubik text-lg lg:text-xl '>
                    Dhabbanni Qarqarsa Yatiimmanii Urjii akka fakkenyatti Daa'imman Bayyinni isaanii 25 tahan, Dhiira 12 fi Shamara 13 Haala ulfaata keessa turn Yeroo ammaa jireenya fooyye qabu akka jiratanif kan sababa taheedha 
                </p>
                <p className='font-rubik text-lg lg:text-xl '>
                    kanuman walqabatee deeggarsi akka midhaan nyaataa, Uffataa fi Meeshalee Barnoota akkasumas Ji'a Ji'an Qarshii 1000 Kan Kennufi kan bira dhabbatudha 
                </p>
                <p className='font-rubik text-lg lg:text-xl '>
                    Muldhanni Dhabbata Qarqaarsa Yatimmanii Urjii Inni Gudaan Bara 2025 Daa'imman maatii yatamaa harka qalleyyii jiratota magalaa Bale Robe Galii mataa isaanii maddisisudhaan of dandahanii qabenyaafi Amala gaarii Horatanii Hirkattummaa irraa bahuun Hawasa dinagdee keessatti Hirmatanii Arguudha.
                </p>
                <p className='font-rubik text-lg lg:text-xl '>
                    Yeroo Dheeraa booda kayyoon guddaan dhabbaticha kanaa Rakkoolee Daa'imman yataamaa fi daa'imman daandii irra jirataniif Mana Barumsaa Akka biyyattis sadarkaa isaa kan eeggate Dhaabudhaan Daa'imman kanaaf Barnoota gahaa Akka argatan gochudhan
                </p>
                <p className='font-rubik text-lg lg:text-xl '>
                    Kana Gochuuf immoo Hawaasni Keenna Jiraatan biyya keessafi biyya Alaas Karaa Kamiinuu Yaadaan tahee Mallaqaan cinaa dhabbachun Baay'ee barbachisadha, nuus kara fulduratti kan tarkanfachuu dandennu Hawasa keenna jiddutti Iftoominni, Haqummaan, Wal-qixxummaa fi Wal-Amanamumman Yoo jiratedha. 
                </p>
                <p className='font-rubik text-lg lg:text-xl '>
                   Walumaa Galatti Dhaabbani kun kan yeroo gababaa ykn kan magalaa Roobe qofa osoo hin taane kan Biyya hundaati waan taheef, waan Biyya immoo Biyyumatu Jabeefata. karaa dandettan kaminuu Jabefadhaa.
                </p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default About