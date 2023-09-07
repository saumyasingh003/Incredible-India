import React from "react";

const Aiml = () => {
  return (
    <div className="relative mb-10">
      <img src={require("../assets/ai1.jpg")} className="w-full h-[65vh] " />
      <div className="content">
        <span
          style={{ fontFamily: " 'Bricolage Grotesque', sans-serif" }}
          className="self-center text-5xl relative top-8 font-extrabold whitespace-nowrap
           dark:text-white"
        >
          Artificial Intelligence
        </span>
      </div>
      <div class="  p-6 space-y-2 lg:col-span-5">
        <div className=" relative top-4">
          <h1 class="text-3xl text-center  text-red-800 font-serif">
            {" "}
            How is AI inportance?
          </h1>
          <p class=" text-xl text-center relative top-3 ">
            AI is critically important as it revolutionizes industries by
            automating tasks, processing vast data, and providing predictive
            insights. It enhances personalization in user experiences, drives
            advancements in healthcare, powers autonomous systems, and enables
            machines to understand and interact with human language. With its
            potential to increase efficiency, productivity, and decision-making
            accuracy, AI is a transformative force shaping the present and
            future of technology and society.
          </p>
        </div>
        <div class="shadow-2xl shadow-gray-700 relative  bg-slate-200 top-10 p-6 space-y-2 lg:col-span-5">
          <h3
            class="text-2xl font-bold  
        sm:text-4xl font-serif  text-center -solid border-b-2 pb-4 border-blue-800"
          >
            Significant impact of AI in Various sectors in India
          </h3>
          <div className="relative top-4">
            <h1 className="text-3xl text-center font-serif mb-2">
              Automation:
            </h1>
            <p className="text-xl mb-4 text-center">
              AI technologies can automate repetitive and labor-intensive tasks,
              improving efficiency and productivity in various industries. This
              allows humans to focus on more creative, strategic, and complex
              tasks.
            </p>

            <h1 className="text-3xl text-center mb-2 font-serif">
              Data Processing:
            </h1>
            <p className="text-xl mb-4 text-center">
              AI can process and analyze vast amounts of data at incredible
              speeds, enabling businesses and organizations to make data-driven
              decisions and gain valuable insights.
            </p>

            <h1 className="text-3xl text-center mb-2 font-serif">
              Personalization:
            </h1>
            <p className="text-xl  mb-4 text-center">
              AI-driven algorithms are used to personalize user experiences in
              applications such as e-commerce, content recommendations, and
              healthcare. This enhances customer satisfaction and engagement.
            </p>

            <h1 className="text-3xl text-center mb-2 font-serif">
              Predictive Analytics:
            </h1>
            <p className="text-xl  mb-4 text-center">
              AI and machine learning models can predict future trends,
              outcomes, and behaviors based on historical data, aiding in
              forecasting, risk assessment, and planning.
            </p>

            <h1 className="text-3xl text-center mb-2 font-serif">
              Healthcare Advancements:
            </h1>
            <p className="text-xl  mb-4 text-center">
              AI plays a crucial role in disease diagnosis, drug discovery,
              patient management, and the development of precision medicine,
              ultimately improving healthcare outcomes.
            </p>

            <h1 className="text-3xl text-center mb-2 font-serif">
              Autonomous Systems:
            </h1>
            <p className="text-xl mb-4  text-center">
              AI is essential for autonomous vehicles, drones, and robots, which
              have the potential to revolutionize transportation, logistics, and
              manufacturing.
            </p>
          </div>
        </div>
        <h1
          className="text-center text-5xl relative top-16 font-extrabold text-[#CB337A] font-sans"
          style={{ fontFamily: "'Russo One', sans-sarif" }}
        >
          Companies that uses AI on large Scale
        </h1>
        <div className="relative top-10">
          <section className="py-6  dark:bg-gray-800">
            <div className="container flex flex-col justify-center p-4 mx-auto">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                <img
                  className="object-cover w-full dark:bg-gray-500 aspect-square"
                  src={require("../assets/amazon.jpg")}
                />
                <img
                  className="object-cover w-full dark:bg-gray-500 aspect-square"
                  src={require("../assets/microsoft.jpg")}
                />
                <img
                  className="object-cover w-full dark:bg-gray-500 aspect-square"
                  src={require("../assets/google.jpg")}
                />
                <img
                  className="w-[20] dark:bg-gray-500 aspect-square"
                  src={require("../assets/meta.jpg")}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Aiml;
