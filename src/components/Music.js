import React from 'react'
import MusicCards from './MusicCards'

const Music = () => {
  return (
    <div className='pb-10'> 
           <div 
    style={{
      background:"rgb(255,132,248)",
       background: "linear-gradient(90deg, rgba(255,132,248,1) 0%, rgba(239,144,10,1) 80%)",
    }}
    className=" h-full shadow-gray-800">
    <h1 className="text-center  text-5xl relative top-6 mb-10 font-extrabold text-[#382353] font-sans">
    The Melodic Tapestry of Indian Music
      </h1>
      <h3
       className="text-2xl font-bold tracki sm:text-3xl dark:text-gray-50"></h3>
            <p
              className="flex w-full text-justify mt-3 text-lg dark:text-gray-400"
              style={{ fontFamily: " 'Bricolage Grotesque', sans-serif" }}
            >
             Indian music is a captivating tapestry woven with ancient traditions and cultural
              diversity. Rooted deeply in spirituality and emotion, it encompasses a wide array of
               styles and instruments that reflect the country's rich heritage. From the classical 
               ragas that evoke profound feelings to the pulsating beats of Bollywood tunes that 
               resonate with modern sensibilities, Indian music seamlessly blends history and innovation. Its intricate rhythms, mesmerizing melodies, and unique scales offer a window into the soul of a nation where music transcends mere entertainment, serving as a vehicle for storytelling, devotion, and self-expression..{" "}
            </p>
            <div className="mb-10">
              <MusicCards/>
            </div>
    </div>
    
    </div>
  
  )
}

export default Music