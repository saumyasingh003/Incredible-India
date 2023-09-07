import React from "react";

const Heritage = () => {
  return (
    <div
      style={{
        background: "rgb(238,174,202)",
        background:
          "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
      }}
    >
      <h1 className="text-center text-5xl mt-2 mb-2 font-extrabold text-[#18305b] font-sans">
        Best Heritage Sites to visit in India
      </h1>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <a
            rel="noopener noreferrer"
            href="https://en.wikipedia.org/wiki/Mysore_Palace"
            target="_blank"
            className="block max-w-sm gap-3 mx-auto
		 sm:max-w-full group hover:no-underline shadow-2xl rounded-md focus:no-underline 
		 lg:grid lg:grid-cols-12 dark:bg-gray-900"
          >
            <img
              src={require("../assets/Mysore_Palace.jpg")}
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3
                className="text-2xl text-center font-semibold sm:text-4xl 
				group-hover:underline group-focus:underline"
              >
                Mysore Palace, Karnataka
              </h3>
              <p className="text-xs text-center dark:text-gray-400">
                September 24, 2023
              </p>
              <p>
                Mysore Palace, also known as Amba Vilas Palace, is a historical
                palace and a royal residence (house). It is located in Mysore,
                Karnataka, India. It used to be the official residence of the
                Wadiyar dynasty and the seat of the Kingdom of Mysore. The
                palace is in the centre of Mysore, and faces the Chamundi Hills
                eastward. Mysore is commonly described as the 'City of the
                Palaces', and there are seven palaces including this one.
              </p>
            </div>
          </a>

          <a
            rel="noopener noreferrer"
            href="https://en.wikipedia.org/wiki/Mahabodhi_Temple"
            target="_blank"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline shadow-2xl rounded-md focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
          >
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3
                className="text-2xl text-center font-semibold sm:text-4xl
				 group-hover:underline group-focus:underline"
              >
                Mahabodhi Temple, Bihar
              </h3>
              <p className="text-xs text-center dark:text-gray-400">
                September 24, 2023
              </p>
              <p>
                The Mahabodhi Temple in Bodh Gaya, India, is a revered UNESCO
                World Heritage Site where the Buddha attained enlightenment. The
                temple's intricate architecture showcases scenes from Buddha's
                life, while the sacred Bodhi tree stands as a descendant of the
                original under which he meditated. A global pilgrimage site, the
                temple's peaceful ambiance and spiritual significance continue
                to inspire visitors, embodying Buddhism's profound impact on
                world heritage and inner awakening.
              </p>
            </div>
            <img
              src={require("../assets/mahabodhi.jpg")}
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
          </a>

          <a
            rel="noopener noreferrer"
            href="https://en.wikipedia.org/wiki/Hawa_Mahal"
            target="_blank"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline shadow-2xl rounded-md focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
          >
            <img
              src={require("../assets/hawamahal.jpg")}
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3
                className="text-2xl text-center font-semibold sm:text-4xl
				 group-hover:underline group-focus:underline"
              >
                Hawa Mahal, Jaipur
              </h3>
              <p className="text-xs text-center dark:text-gray-400">
                September 24, 2023
              </p>
              <p>
                {" "}
                Hawa Mahal, located in Jaipur, India, is a stunning five-story
                palace known for its intricate honeycomb-like façade with
                numerous small windows and balconies. Built in 1799 by Maharaja
                Sawai Pratap Singh, the palace was designed to allow royal women
                to observe street festivities while maintaining their privacy.
                Its unique architectural style, resembling the crown of Lord
                Krishna, showcases a blend of Rajput and Islamic influences. A
                remarkable landmark, Hawa Mahal stands as a testament to
                Jaipur's rich history and architectural marvels.
              </p>
            </div>
          </a>

          <a
            rel="noopener noreferrer"
            href="https://www.britannica.com/place/Ajanta-Caves"
            target="_blank"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline shadow-2xl rounded-md focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
          >
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3
                className="text-2xl text-center font-semibold sm:text-4xl 
				group-hover:underline group-focus:underline"
              >
                Ajanta Caves, Maharashtra
              </h3>
              <p className="text-xs text-center dark:text-gray-400">
                September 24, 2023
              </p>
              <p>
                Ajanta Caves, Buddhist rock-cut cave temples and monasteries,
                located near Ajanta village, north-central Maharashtra state,
                western India, that are celebrated for their wall paintings. The
                temples are hollowed out of granite cliffs on the inner side of
                a 70-foot (20-metre) ravine in the Wagurna River valley 65 miles
                (105 km) northeast of Aurangabad, at a site of great scenic
                beauty.
              </p>
            </div>
            <img
              src={require("../assets/ajanta.jpg")}
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
          </a>

          <a
            rel="noopener noreferrer"
            href="https://en.wikipedia.org/wiki/Jim_Corbett_National_Park"
            target="_blank"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline shadow-2xl rounded-md focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
          >
            <img
              src={require("../assets/tiger.jpg")}
              alt=""
              className="object-cover w-full h-68 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3
                className="text-2xl text-center font-semibold sm:text-4xl 
				group-hover:underline group-focus:underline"
              >
                Jim Corbett National Park, Uttarakhand
              </h3>
              <p className="text-xs text-center dark:text-gray-400">
                September 24, 2023
              </p>
              <p>
                Jim Corbett National Park is a national park in India located in
                the Nainital district of Uttarakhand state. The first national
                park in India, it was established in 1936 during the British Raj
                and named Hailey National Park after William Malcolm Hailey, a
                governor of the United Provinces in which it was then located.
                In 1956, nearly a decade after India's independence, it was
                renamed Corbett National Park after the hunter and naturalist
                Jim Corbett. 
              </p>
            </div>
          </a>

          <a
            rel="noopener noreferrer"
            href="https://en.wikipedia.org/wiki/Athirappilly_Falls"
            target="_blank"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline shadow-2xl rounded-md focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
          >
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3
                className="text-2xl text-center font-semibold sm:text-4xl
				 group-hover:underline group-focus:underline"
              >
                Athirapally Falls, Kerala
              </h3>
              <p className="text-xs text-center dark:text-gray-400">
                September 24, 2023
              </p>
              <p>
                Athirapilly Falls is situated in Athirapilly Panchayat in
                Chalakudy Taluk of Thrissur District in Kerala, India on the
                Chalakudy River, which originates from the upper reaches of the
                Western Ghats at the entrance to the Sholayar ranges. It is the
                largest waterfall in Kerala, which stands tall at 81.5 feet.
                Just a short drive from Athirapilly to the Vazhachal Falls,
                which is close to dense green forests that are home to many
                endangered and endemic species of flora and fauna.
              </p>
            </div>
            <img
              src={require("../assets/Athirapalli_falls,_Kerala.jpg")}
              target="_blank"
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Heritage;
