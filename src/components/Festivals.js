import React from 'react'

const Festivals = () => {
  return (
    <div>
       <div style={{background: "rgb(34,193,195)",background: "linear-gradient(100deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 90%)",}}
    className="relative overflow-x-hidden h-full shadow-gray-800">


      <h1 style={{fontFamily: " 'Bricolage Grotesque', sans-serif"}} className="text-center 
      text-5xl relative top-8 mb-10 font-extrabold text-[#356179] font-sans">
      UnityFest: India's Celebration of Togetherness
      </h1>
      <div className='relative top-5  px-16 mb-10'>
      <h3 className="text-2xl font-bold sm:text-3xl dark:text-gray-50"></h3>
        <p
          className="flex w-full  text-justify  mt-3 text-lg dark:text-gray-400"
          style={{ fontFamily: " 'Bricolage Grotesque', sans-serif" }}
        >
        Indian festivals are a kaleidoscope of vibrant traditions, where the nation's 
        rich cultural tapestry shines through. From the dazzling lights of Diwali 
        illuminating the triumph of light over darkness to the joyous splashes of
         color during Holi, these celebrations blend spirituality and merriment.
          Navratri's devotion and dance, Eid's communal feasts, and Christmas's 
          universal goodwill are just a few threads in this colorful fabric. 
          Ganesh Chaturthi's processions, Durga Puja's fervent chants,
           Raksha Bandhan's sibling bonds, and Makar Sankranti's kite-filled skies all 
            India's unity in diversity, turning each festival into a unique and cherished chapter 
            in the country's cultural narrative.
          
        </p></div>

        <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            <a
              rel="noopener noreferrer"
              href="https://en.wikipedia.org/wiki/Diwali"
              target="_blank"
              className="block max-w-sm gap-3 mx-auto
		 sm:max-w-full group hover:no-underline shadow-2xl rounded-md focus:no-underline 
		 lg:grid lg:grid-cols-12 dark:bg-gray-900"
            >
              <img
                src={require("../assets/diwali.jpg")}
                alt=""
                className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
              />
              <div className="p-6 space-y-2 lg:col-span-5">
                <h3
                  className="text-2xl text-center font-semibold sm:text-4xl 
				group-hover:underline group-focus:underline"
                >
                 Diwali
                </h3>
                <p className="text-xs text-center dark:text-gray-400">
                  September 24, 2023
                </p>
                <p>
                Diwali, also known as the Festival of Lights, is one of the most 
                significant and widely celebrated festivals in India. It symbolizes the victory of
                 light over darkness and good over evil. The atmosphere during Diwali is filled with
                  joy and excitement as people light oil lamps and candles, adorning their homes with 
                  colorful decorations. Families come together to share delicious sweets and exchange 
                  heartfelt gifts, reinforcing bonds of love and unity. The night sky comes alive with 
                  a spectacular display of fireworks, painting a vivid picture of the triumph of light 
                  and goodness. 
                </p>
              </div>
            </a>

            <a
              rel="noopener noreferrer"
              href="https://en.wikipedia.org/wiki/Holi"
              target="_blank"
              className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline shadow-2xl rounded-md focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
            >
              <div className="p-6 space-y-2 lg:col-span-5">
                <h3
                  className="text-2xl text-center font-semibold sm:text-4xl
				 group-hover:underline group-focus:underline"
                >
                  Holi
                </h3>
                <p className="text-xs text-center dark:text-gray-400">
                  September 24, 2023
                </p>
                <p>
                Holi, known as the Festival of Colors, is a vibrant and joyous celebration 
                in India. This festival brings people from all walks of life together, 
                transcending boundaries of caste, creed, and age. Holi is a riot of colors as 
                people playfully drench each other with colored powders and water balloons, 
                creating an atmosphere of sheer merriment. The day is filled with music, dance,
                 and traditional sweets like gujiya and thandai. Holi symbolizes the triumph of 
                 good over evil and the arrival of spring, making it a time of renewal and fresh 
                 beginnings. 
                </p>
              </div>
              <img
                src={require("../assets/holi.jpg")}
                alt=""
                className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
              />
            </a>

            <a
              rel="noopener noreferrer"
              href="https://en.wikipedia.org/wiki/Eid_al-Fitr"
              target="_blank"
              className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline shadow-2xl rounded-md focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
            >
              <img
                src={require("../assets/eid.jpg")}
                alt=""
                className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
              />
              <div className="p-6 space-y-2 lg:col-span-5">
                <h3
                  className="text-2xl text-center font-semibold sm:text-4xl
				 group-hover:underline group-focus:underline"
                >
                  Eid al-Fitr
                </h3>
                <p className="text-xs text-center dark:text-gray-400">
                  September 24, 2023
                </p>
                <p>
                Eid al-Fitr, a significant Islamic festival, marks the culmination of Ramadan, 
                a month of fasting and spiritual reflection. It is a joyous occasion for Muslims
                 worldwide, where they gather for communal prayers at mosques, express gratitude 
                 to Allah, and seek forgiveness. Families come together to share special meals
                  and exchange gifts, fostering a sense of unity and compassion. Acts of charity,
                   or Zakat al-Fitr, are a fundamental part of the celebration, ensuring that everyone
                    can partake in the festivities. Eid al-Fitr is a time of gratitude, festivity, 
                    and , and goodwill towards all.
                </p>
              </div>
            </a>

            <a
              rel="noopener noreferrer"
              href="https://en.wikipedia.org/wiki/Ganesh_Chaturthi"
              target="_blank"
              className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline shadow-2xl rounded-md focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
            >
              <div className="p-6 space-y-2 lg:col-span-5">
                <h3
                  className="text-2xl text-center font-semibold sm:text-4xl 
				group-hover:underline group-focus:underline"
                >
                  Ganesh Chaturthi
                </h3>
                <p className="text-xs text-center dark:text-gray-400">
                  September 24, 2023
                </p>
                <p>
                Ganesh Chaturthi, a Hindu festival, celebrates the birth of Lord Ganesha, 
                the revered elephant-headed god of wisdom and prosperity. Devotees install 
                elaborately crafted Ganesha idols in their homes and public places, offering
                 prayers and performing rituals. The festival is marked by vibrant processions,
                  traditional music, and dance, while it culminates with the immersion of the idols 
                  in water bodies. Ganesh Chaturthi is a time of devotion and celebration, symbolizing 
                  the removal of obstacles and the ushering in of new beginnings.
                </p>
              </div>
              <img
                src={require("../assets/Ganesh Chaturthi.jpg")}
                alt=""
                className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
              />
            </a>

            <a
              rel="noopener noreferrer"
              href="https://en.wikipedia.org/wiki/Onam"
              target="_blank"
              className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline shadow-2xl rounded-md focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
            >
              <img
                src={require("../assets/onam.jpg")}
                alt=""
                className="object-cover w-full h-68 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
              />
              <div className="p-6 space-y-2 lg:col-span-5">
                <h3
                  className="text-2xl text-center font-semibold sm:text-4xl 
				group-hover:underline group-focus:underline"
                >
                 Onam
                </h3>
                <p className="text-xs text-center dark:text-gray-400">
                  September 24, 2023
                </p>
                <p>
                Onam is a prominent harvest festival celebrated in the Indian 
                state of Kerala. It holds deep cultural and historical significance 
                for the people of Kerala and is marked by a grand and colorful ten-day-long 
                celebration. The festival honors the mythical king Mahabali and commemorates
                 the state's agrarian heritage. It is characterized by the creation of intricate 
                 floral designs called 'pookalam' on the floors of homes, traditional dance forms 
                 like 'Kathakali,' and elaborate feasts known as the 'Onam Sadya,' featuring 
                 a variety of vegetarian dishes served on banana leaves. 
                </p>
              </div>
            </a>
          </div>
        </section>
      </div>
      </div>
  )
}

export default Festivals