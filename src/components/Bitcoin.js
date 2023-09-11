import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Bitcoin = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-x-hidden min-h-screen mb-10">
      <h1 data-aos="zoom-out-left"  className="text-center  text-5xl relative top-6 font-extrabold
       text-[#59466f] font-sans">
        Bitcoin: Decrypting the Digital Gold Rush
      </h1>

      <div class="  p-6 space-y-2 lg:col-span-5">
        <div className=" relative top-4">
          <h1 data-aos="zoom-out-right"  class="text-3xl text-center  text-gray-900 font-serif">
            {" "}
            What is Bitcoin?
          </h1>
          <p class=" text-xl text-center relative top-3 ">
            Bitcoin is a decentralized digital currency created in 2009,
            operating on a global network of computers without a central
            authority. Transactions are recorded on a transparent and secure
            ledger called the blockchain, and new bitcoins are created through a
            process called mining. With a maximum supply of 21 million coins and
            the ability to be stored in digital wallets, Bitcoin has gained
            attention as a novel form of currency and a store of value, with its
            value subject to market fluctuations and adoption across various
            industries.
          </p>
        </div>
      </div>
      <div className="relative top-11 ">
        <img data-aos="fade-down-right"
          src={require("../assets/bitcoin1.jpg")}
          className="w-full sm:h-[65vh] mb-20 "
        />
      </div>
      <div></div>

      
      <div className="shadow-xl shadow-gray-500 left-6">
        <div class="shadow-2xl shadow-gray-700  bg-slate-200  space-y-2 lg:col-span-5">
          <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
            <div className="container mx-auto">
              <span
                className="block mb-2 text-xs font-medium tracki text-center uppercase
             dark:text-violet-400"
              >
                How it works
              </span>
              <h2 data-aos="zoom-out-left"
                style={{ fontFamily: " 'Bricolage Grotesque', sans-serif" }}
                className="text-5xl font-bold text-center dark:text-gray-50
        sm:text-4xl  -solid border-b-2 pb-4 border-blue-800"
              >
                Elaboration of each step to get started with Bitcoin
              </h2>
              <div className="grid gap-6 my-16 lg:grid-cols-3">
                <div  data-aos="zoom-in" className="flex flex-col p-8 space-y-4 rounded-md bg-gray-300">
                  <div
                    className="flex items-center justify-center flex-shrink-0 w-12 h-12 
              text-xl font-bold rounded-full bg-violet-500"
                  >
                    1
                  </div>
                  <p className=" font-semibold">
                    <b>Educate Yourself-</b>
                    <p>
                      Learn about Bitcoin's fundamentals, technology, and its
                      potential advantages and risks. Knowledge is crucial in
                      making informed decisions.
                    </p>
                  </p>
                </div>
                <div  data-aos="zoom-in" className="flex flex-col p-8 space-y-4 rounded-md bg-gray-300">
                  <div
                    className="flex items-center justify-center flex-shrink-0 w-12 h-12 
              text-xl font-bold rounded-full bg-violet-500"
                  >
                    2
                  </div>
                  <p className=" font-semibold">
                    <b>Get a Digital Wallet-</b>
                    <p>
                      Choose a wallet that suits your needs (software, hardware,
                      mobile, or paper). This is where you'll store your
                      bitcoins securely.
                    </p>
                  </p>
                </div>

                <div  data-aos="zoom-in" className="flex flex-col p-8 space-y-4 rounded-md bg-gray-300">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-500">
                    3
                  </div>
                  <p className="font-semibold">
                    <b>Get a Digital Wallet -</b>
                    <p>
                      Choose a wallet that suits your needs (software, hardware,
                      mobile, or paper). This is where you'll store your
                      bitcoins securely.
                    </p>
                  </p>
                </div>

                <div  data-aos="zoom-in" className="flex flex-col p-8 space-y-4 rounded-md bg-gray-300">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-500">
                    4
                  </div>
                  <p className="font-semibold">
                    <b>Secure Your Bitcoin -</b>
                    <p>
                      Safeguard your private keys and wallet access. Use
                      two-factor authentication (2FA) for added security. Beware
                      of scams and phishing attempts.
                    </p>
                  </p>
                </div>

                <div  data-aos="zoom-in" className="flex flex-col p-8 space-y-4 rounded-md bg-gray-300">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-500">
                    5
                  </div>
                  <p className="font-semibold">
                    <b>Use and Manage Your Bitcoin -</b>
                    <p>
                      You can now use your bitcoins for various purposes, like
                      online shopping or sending money. Be careful with
                      transaction details and fees.
                    </p>
                  </p>
                </div>

                <div data-aos="zoom-in"  className="flex flex-col p-8 space-y-4 rounded-md bg-gray-300">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-500">
                    6
                  </div>
                  <p className="font-semibold">
                    <b>Stay Informed and Keep Learning -</b>
                    <p>
                      Stay updated on cryptocurrency news, security best
                      practices, and regulatory changes. Continuous learning is
                      essential in the dynamic world of Bitcoin.
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        </div>
        <div>
          
        </div>
        
        <div class="relative shadow-2xl shadow-gray-700  p-10 bg-yellow-50  space-y-2 lg:col-span-5">
          <h3
            class="text-3xl font-bold  
        sm:text-4xl font-serif  text-center -solid border-b-2 pb-2 border-blue-800"
          >
            Conclusion
          </h3>
          <div className=" relative top-4">
            <p class=" text-xl text-center ">
              The future of Bitcoin remains uncertain but holds several
              potential trajectories. Increased institutional adoption, driven
              by recognition of Bitcoin as a store of value and portfolio
              diversification, could boost its legitimacy and liquidity in
              financial markets. Regulatory decisions by various countries will
              play a pivotal role in either facilitating or constraining
              Bitcoin's growth and use. Technological advancements may lead to
              improved scalability and efficiency, while its integration into
              traditional finance via ETFs and futures contracts could broaden
              its investor base. Bitcoin's potential to serve as a hedge against
              inflation and currency devaluation may become more prominent in
              the face of global economic conditions. Additionally, its
              environmental impact will likely continue to be a topic of
              discussion, potentially prompting more sustainable mining
              practices. Ultimately, Bitcoin's future will be shaped by a
              complex interplay of these factors and its evolving role in the
              global financial ecosystem.
            </p>
          </div>
        </div>
      </div>
    
  );
};

export default Bitcoin;
