import React from "react";
import { ImLocation } from "react-icons/im";
import { FaHistory } from "react-icons/fa";
import { MdDiversity2 } from "react-icons/md";
import { MdOutlineScience } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import { GrAchievement } from "react-icons/gr";
import { PiMoneyDuotone } from "react-icons/pi";

const About = () => {
  return (
    <div
      style={{
        background: "rgb(238,174,202)",
        background:
          "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
      }}
    >
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold  text-center sm:text-5xl dark:text-gray-50">
              About Us
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">
              Who We Are and What We Stand For
            </p>
            <div className=" relative top-1 align-right mb-10">
        <h3 className="text-2xl font-bold tracki sm:text-3xl  dark:text-gray-50"></h3>
        <p
          className="flex w-full text-center  mt-3 text-lg dark:text-gray-400"
          style={{ fontFamily: " 'Bricolage Grotesque', sans-serif" }}
        >
         India, officially known as the Republic of India, is a diverse and culturally 
         rich nation located in South Asia. With a history spanning thousands of years, 
         India has made significant contributions to the world in various fields, including
          art, science, philosophy, and technology. From its ancient civilizations to its modern 
          achievements, India's story is a tapestry of complexity, diversity, and innovation.
          
        </p>
      </div>
          </div>
          
          <div className="">
            <div className="mt-12 space-y-12  ">
              <div className="grid grid-cols-2 space-x-16 pl-32">
                <div className="flex shadow-2xl p-6 rounded-2xl  ">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 
                    rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <ImLocation size={32} />
                    </div>
                  </div>
                  <div className="ml-4 ">
                    <h4 className="text-lg font-medium leadi dark:text-gray-50">
                      Geography and Landscape:
                    </h4>
                    <p className="mt-2 text-black">
                      India is the seventh-largest country in the world by land
                      area and the second-most populous country, home to over
                      1.3 billion people. Its geography is incredibly diverse,
                      encompassing everything from the Himalayan mountain range
                      in the north to expansive coastal regions in the south.
                      The country is bordered by Pakistan to the northwest,
                      China and Nepal to the north, Bhutan to the northeast, and
                      Bangladesh and Myanmar to the east. The Indian Ocean lies
                      to the south, providing the country with a vast coastline.
                    </p>
                  </div>
                </div>
                <div className="">
                  <img
                    src={require("../assets/india.jpg")}
                    alt=""
                    className=" rounded-lg shadow-lg dark:bg-gray-500 h-[48vh] w-[28vw]"
                  />
                </div>
              </div>


              
              <div className=" grid grid-cols-2 space-x-16 pr-32">
			  <div className="pl-36">
				<img src={require("../assets/jatayu.jpg")} alt="" className=" rounded-lg shadow-lg dark:bg-gray-500 h-[48vh] w-[30vw]" />
			</div>	
                <div className="flex shadow-2xl p-6 rounded-2xl">
                  <div className="flex-shrink-0 ">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <FaHistory size={32} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi dark:text-gray-50">
                      Historical Significance:
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      India's history is rich and complex, with evidence of
                      ancient civilizations dating back to around 2500 BCE. The
                      Indus Valley Civilization, one of the world's oldest urban
                      cultures, flourished in the northwestern region of India.
                      Over the millennia, India saw the rise and fall of
                      numerous kingdoms, including the Maurya, Gupta, and Mughal
                      empires, each contributing to its cultural and
                      architectural heritage.
                    </p>
                  </div>
                </div>
              </div>


              <div className="grid grid-cols-2 space-x-16 pl-32">
                <div className="flex shadow-2xl p-6 rounded-2xl  ">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                    <MdDiversity2 size={32} />
                    </div>
                  </div>
                  <div className="ml-4 ">
                    <h4 className="text-lg font-medium leadi dark:text-gray-50">
                    Cultural Diversity:
                    </h4>
                    <p className="mt-2 text-black">
                    India's cultural diversity is unparalleled. It is home to a
                    multitude of languages, religions, and traditions. Hinduism,
                    Buddhism, Islam, Christianity, Sikhism, and Jainism all
                    originated in India, making it a spiritual and religious
                    hub. The country celebrates a variety of festivals, such as
                    Diwali (Festival of Lights), Eid, Christmas, Holi (Festival
                    of Colors), and more, reflecting the cultural tapestry that
                    is India.
                    </p>
                  </div>
                </div>
                <div className="">
                  <img
                    src={require("../assets/culture1.jpg")}
                    alt=""
                    className=" rounded-lg shadow-lg dark:bg-gray-500 h-[48vh] w-[28vw]"
                  />
                </div>
              </div>


              <div className=" grid grid-cols-2 space-x-16 pr-32">
			  <div className="pl-36">
				<img src={require("../assets/Science.jpg")} alt="" className=" rounded-lg shadow-lg dark:bg-gray-500 h-[48vh] w-[30vw]" />
			</div>	
                <div className="flex shadow-2xl p-6 rounded-2xl">
                  <div className="flex-shrink-0 ">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                    <MdOutlineScience size={32} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi dark:text-gray-50">
                    Science and Mathematics:
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                    India has a rich history in the fields of science and
                    mathematics. Ancient Indian mathematicians devised the
                    concept of zero, as well as the decimal and place value
                    systems. Aryabhata, a brilliant mathematician and
                    astronomer, calculated the value of pi, among other
                    accomplishments. The contributions of Indian scientists and
                    mathematicians have had a lasting impact on the world.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 space-x-16 pl-32">
                <div className="flex shadow-2xl p-6 rounded-2xl  ">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                    <FaPaintBrush size={32} />
                    </div>
                  </div>
                  <div className="ml-4 ">
                    <h4 className="text-lg font-medium leadi dark:text-gray-50">
                    Art and Architecture:
                    </h4>
                    <p className="mt-2 text-black">
                    Indian art and architecture have left an indelible mark on
                    the world. The country is famous for its intricately carved
                    temples, majestic palaces, and stunning monuments. Notable
                    examples include the Taj Mahal, a UNESCO World Heritage Site
                    and a symbol of eternal love, and the intricate temples of
                    Khajuraho, known for their exquisite sculptures..
                    </p>
                  </div>
                </div>
                <div className="">
                  <img
                    src={require("../assets/art1.jpg")}
                    alt=""
                    className=" rounded-lg shadow-lg dark:bg-gray-500 h-[48vh] w-[28vw]"
                  />
                </div>
              </div>

               
              <div className=" grid grid-cols-2 space-x-16 pr-32">
			  <div className="pl-36">
				<img src={require("../assets/modern.jpg")} alt="" className=" rounded-lg shadow-lg dark:bg-gray-500 h-[48vh] w-[30vw]" />
			</div>	
                <div className="flex shadow-2xl p-6 rounded-2xl">
                  <div className="flex-shrink-0 ">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                    <GrAchievement size={32} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi dark:text-gray-50">
                    Modern Achievements:
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                    In the modern era, India has achieved significant milestones
                    in various domains. The country is renowned for its
                    information technology (IT) industry, with cities like
                    Bengaluru (Bangalore) being global IT hubs. India's space
                    agency, ISRO, has made remarkable strides in space
                    exploration, with achievements such as the Mars Orbiter
                    Mission (Mangalyaan) and the Chandrayaan missions to the
                    moon
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 space-x-16 pl-32">
                <div className="flex shadow-2xl p-6 rounded-2xl  ">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                    <PiMoneyDuotone size={32} />
                    </div>
                  </div>
                  <div className="ml-4 ">
                    <h4 className="text-lg font-medium leadi dark:text-gray-50">
                    Economy and Innovation:
                    </h4>
                    <p className="mt-2 text-black">
                    India's economy is one of the largest in the world. The
                    country has seen rapid growth in sectors such as services,
                    manufacturing, and agriculture. It is also a hub for
                    innovation, with a burgeoning startup ecosystem that covers
                    areas from technology to social entrepreneurship.
                    </p>
                  </div>
                </div>
                <div className="">
                  <img
                    src={require("../assets/economy.jpg")}
                    alt=""
                    className=" rounded-lg shadow-lg dark:bg-gray-500 h-[48vh] w-[28vw]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
