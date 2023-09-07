import React from "react";

const Sculpture = () => {
  return (
    <div 
    style={{
      background:"rgb(255,132,248)",
       background: "linear-gradient(90deg, rgba(255,132,248,1) 0%, rgba(239,144,10,1) 80%)",
    }}
    className="relative overflow-x-hidden h-full shadow-gray-800">
      <h1 className="text-center text-5xl relative top-6 font-extrabold text-[#CB337A] font-sans">
        Sculpting India's Timeless Stories in Stone
      </h1>
    <div>
    <div className="container flex flex-col justify-center p-4 mb-32 mx-auto relative top-20">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
          <a href="https://en.wikipedia.org/wiki/Buddha_Preaching_his_First_Sermon_(Sarnath)" target="_blank">
            <img
              style={{ boxShadow: "2px 2px 15px black" }}
              className=" object-cover w-full cursor-pointer hover:animate-pulse h-[40vh] rounded-xl"
              src={require("../assets/sarnath.jpg")}
              alt=""
            />
            <h1 className=" font-bold relative bottom-7 rounded-b-xl bg-[#1d1c1c94]
             hover:bg-[#131314da]
             text-white text-xl text-center datatitle">
              The Great Buddha Statue at Sarnath
            </h1>
          </a>

          <a href="https://en.wikipedia.org/wiki/Nataraja_Temple,_Chidambaram" target="_blank">
            <img
              style={{ boxShadow: "2px 2px 15px black" }}
              className="object-cover w-full cursor-pointer hover:animate-pulse h-[40vh] rounded-xl"
              src={require("../assets/natraja.jpg")}
              alt=""
            />
            <h1 className=" font-bold relative bottom-7 rounded-b-xl bg-[#1d1c1c94] hover:bg-[#131314da] text-white text-xl text-center datatitle">
             Nataraja at Chidambaram Temple
            </h1>
          </a>

          <a href="https://en.wikipedia.org/wiki/Ellora_Caves" target="_blank">
            <img
              style={{ boxShadow: "2px 2px 15px black" }}
              className="object-cover w-full cursor-pointer hover:animate-pulse h-[40vh] rounded-xl"
              src={require("../assets/adiviswanath.jpg")}
              alt=""
            />
            <h1 className=" font-bold relative bottom-7 rounded-b-xl bg-[#1d1c1c94] hover:bg-[#131314da] text-white text-xl text-center datatitle">
            Ardhanarishvara at Ellora Caves
            </h1>
          </a>
    </div> </div> </div>
      <div className=" relative top-1 align-right mb-10 px-10">
        <h3 className="text-2xl font-bold tracki sm:text-3xl  dark:text-gray-50"></h3>
        <p
          className="flex w-full text-justify  mt-3 text-lg dark:text-gray-400"
          style={{ fontFamily: " 'Bricolage Grotesque', sans-serif" }}
        >
          Indian sculpture encapsulates a millennia-spanning journey of artistic
          excellence, cultural heritage, and spiritual devotion. From the
          intricate carvings on ancient temple facades to the monumental statues
          that grace cityscapes, each sculpture narrates a tale of creativity,
          faith, and historical significance. Encompassing diverse religious
          traditions such as Hinduism, Buddhism, and Jainism, these sculptures
          serve as visual manifestations of divine beings, reflecting the
          intricate interplay between artistic expression and spiritual beliefs.
          They carry forward ancient narratives, depicting epic tales, celestial
          deities, and serene meditative postures that have captured the
          imagination of generations. Sculptors, both past and present, have
          left an indelible mark on India's artistic identity. Through their
          craftsmanship, they've embodied not only the physical form but also
          the emotional depth of human experiences. As modern sculptors continue
          to reinterpret tradition with contemporary perspectives, India's
          sculptural heritage remains a testament to the enduring power of
          artistic creation across the ages. Indian sculpture stands as a
          testament to the nation's rich historical tapestry, reflecting its
          diverse cultural influences and artistic ingenuity. From the intricate
          stone carvings of ancient temples to the bronze masterpieces of royal
          dynasties, these sculptures capture the essence of different eras,
          each telling a unique story. The sculptures, often integrated into
          architectural marvels, showcase a harmonious blend of aesthetics and
          symbolism. Whether depicting deities in divine ecstasy or capturing
          everyday life in intricate detail, these artworks serve as windows
          into India's past, bridging the gap between antiquity and the present.
          As guardians of tradition and carriers of cultural legacy, Indian
          sculptures continue to inspire awe,reverence, and contemplation,
          resonating with the echoes of history and the pulse of modernity.
        </p>
      </div>
    </div>
  );
};

export default Sculpture;
