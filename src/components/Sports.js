import React from "react";

const Sports = () => {
  return (
    <div className="">
      <div
        style={{
          background: "rgb(91,92,205)",
          background:
            " linear-gradient(100deg, rgba(91,92,205,0.8941701680672269) 0%, rgba(200,79,63,0.9557948179271709) 76%)",
        }}
        className="relative overflow-x-hidden h-full shadow-gray-800 "
      >
        <h1
          style={{ fontFamily: " 'Bricolage Grotesque', sans-serif" }}
          className="text-center 
   text-5xl relative top-8 mb-10 font-extrabold text-[#f8f6f3] font-sans"
        >
          Traditional Games and Sports of India
        </h1>
        <section className="py-6  dark:bg-gray-800 dark:text-gray-50">
          <div className="container grid grid-cols-2 gap-3  mx-auto md:grid-cols-4">
            <img
              src={require("../assets/niraj.jpg")}
              alt=""
              className="w-full object-cover mb-2 h-fit col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
            />
            <img
              alt=""
              className="w-fit h-60  rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src={require("../assets/cricket.jpg")}
            />
            <img
              alt=""
              className="w-fit h-60 rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src={require("../assets/badminton.jpg")}
            />
            <img
              alt=""
              className="w-fit h-60 rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src={require("../assets/hockey.jpg")}
            />
            <img
              alt=""
              className="w-fit h-60 rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src={require("../assets/chess.jpg")}
            />
          </div>
        </section>

        <div className="dark:bg-gray-800 dark:text-gray-100 mb-10">
          <div className="container max-w-4xl px-10 py-6 bg-white mx-auto rounded-lg shadow-sm dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <span className="text-sm dark:text-gray-400">Jun 1, 2023</span>
            </div>
            <div className="mt-3  ">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-2xl font-bold hover:underline"
              >
                Cricket
              </a>
              <p className="mt-2">
                Cricket in India is a national obsession, with a fervent fan
                base. The Indian Premier League (IPL) has become a cricketing
                extravaganza, showcasing both local and international talent.
                India has produced cricketing legends like Sachin Tendulkar, and
                the sport is deeply embedded in the country's cultural fabric,
                with matches often regarded as festivals. The Board of Control
                for Cricket in India (BCCI) plays a pivotal role in the sport's
                administration and promotion.
              </p>
            </div>
            <div className="flex items-center justify-between   mt-4">
              <a
                rel="noopener noreferrer"
                href="https://feedly.com/i/subscription/feed%2Fhttp%3A%2F%2Fwww.cricinfo.com%2Frss%2Fcontent%2Fstory%2Ffeeds%2F0.xml"
                className="hover:underline dark:text-violet-400 bg-yellow-400 text-white p-2 rounded-md"
              >
                Read more
              </a>
              <div>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center"
                >
                  <img
                    src="https://source.unsplash.com/50x50/?portrait"
                    alt="avatar"
                    className="object-cover w-10 h-10 mx-4  rounded-full dark:bg-gray-500"
                  />
                  <span className="hover:underline dark:text-gray-400">
                    Ram Birla
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="dark:bg-gray-800 dark:text-gray-100 mb-10">
          <div className="container max-w-4xl px-10 py-6 bg-white mx-auto rounded-lg shadow-sm dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <span className="text-sm dark:text-gray-400">Jul 16, 2023</span>
            </div>
            <div className="mt-3  ">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-2xl font-bold hover:underline"
              >
                Hockey
              </a>
              <p className="mt-2">
                Hockey in India holds a historic legacy as the national sport,
                with a rich tradition of Olympic gold medals. Despite cricket's
                dominance, hockey still enjoys a passionate following, and
                India's national hockey team continues to compete on the
                international stage. The sport has seen a resurgence in recent
                years, with renewed interest and investment in developing the
                next generation of hockey players.
              </p>
            </div>
            <div className="flex items-center justify-between   mt-4">
              <a
                rel="noopener noreferrer"
                href="https://thehockeywriters.com/"
                className="hover:underline dark:text-violet-400 bg-yellow-400 text-white p-2 rounded-md"
              >
                Read more
              </a>
              <div>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center"
                >
                  <img
                    src="https://source.unsplash.com/50x50/?portrait?1"
                    alt="avatar"
                    className="object-cover w-10 h-10 mx-4  rounded-full dark:bg-gray-500"
                  />
                  <span className="hover:underline dark:text-gray-400">
                    Amit Kumar
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="dark:bg-gray-800 dark:text-gray-100 mb-10">
          <div className="container max-w-4xl px-10 py-6 bg-white mx-auto rounded-lg shadow-sm dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <span className="text-sm dark:text-gray-400">Jun 1, 2023</span>
            </div>
            <div className="mt-3  ">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-2xl font-bold hover:underline"
              >
                Athletics
              </a>
              <p className="mt-2">
                Athletics in India has produced remarkable athletes like Milkha
                Singh, P.T. Usha, and more recently, Hima Das and Neeraj Chopra,
                who have garnered international acclaim. Although cricket
                dominates the sports landscape, athletics has a dedicated and
                growing fan base. The sport faces challenges in terms of
                infrastructure and funding, but these athletes' achievements
                continue to inspire the nation and emphasize the potential for
                success on the global stage..
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <a
                rel="noopener noreferrer"
                href="https://www.athleticsnation.com/"
                className="hover:underline dark:text-violet-400 bg-yellow-400 text-white p-2 rounded-md"
              >
                Read more
              </a>
              <div>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center"
                >
                  <img
                    src="https://source.unsplash.com/50x50/?portrait?2"
                    alt="avatar"
                    className="object-cover w-10 h-10 mx-4  rounded-full dark:bg-gray-500"
                  />
                  <span className="hover:underline dark:text-gray-400">
                    Deepa Gupta
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="dark:bg-gray-800 dark:text-gray-100 mb-10">
          <div className="container max-w-4xl px-10 py-6 bg-white mx-auto rounded-lg shadow-sm dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <span className="text-sm dark:text-gray-400">May 20, 2023</span>
            </div>
            <div className="mt-3  ">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-2xl font-bold hover:underline"
              >
                Wrestling
              </a>
              <p className="mt-2">
                Wrestling in India has a strong tradition and a passionate
                following. Indian wrestlers have consistently performed well in
                international competitions, including the Olympics and World
                Wrestling Championships. The sport has produced stars like
                Sushil Kumar and Bajrang Punia, who have brought medals and
                recognition to the country. Wrestling's grassroots development
                and the popularity of events like Pro Wrestling League
                contribute to its prominence in Indian sports.
              </p>
            </div>
            <div className="flex items-center justify-between   mt-4">
              <a
                rel="noopener noreferrer"
                href="http://kushtiwrestling.blogspot.com/"
                className="hover:underline dark:text-violet-400
                 bg-yellow-400 text-white p-2 rounded-md"
              >
                Read more
              </a>
              <div>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center"
                >
                  <img
                    src="https://source.unsplash.com/50x50/?portrait?3"
                    alt="avatar"
                    className="object-cover w-10 h-10 mx-4  rounded-full dark:bg-gray-500"
                  />
                  <span className="hover:underline dark:text-gray-400">
                    Priya Patel
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;
