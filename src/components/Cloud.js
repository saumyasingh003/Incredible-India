import React from "react";

const Cloud = () => {
  return (
    <div className="min-h-screen">
      <div class="relative shadow-2xl shadow-gray-700  p-10 bg-gray-100  space-y-2 lg:col-span-5">
        <h3
          class="text-5xl font-extrabold  text-blue-900 
        sm:text-4xl font-serif   text-center "
        >
          What is Cloud ?
        </h3>
        <div className=" relative top-4">
          <p class=" text-xl text-center ">
            Cloud computing leverages a shared, virtualized infrastructure,
            where users can rent or subscribe to computing resources on a
            pay-as-you-go basis. This model not only eliminates the need for
            upfront capital investments in hardware but also allows for dynamic
            resource allocation, ensuring that users can scale their computing
            power and storage as their needs evolve. Additionally, cloud
            providers often offer a wide range of services, from simple data
            storage to advanced machine learning algorithms, making it a
            versatile and comprehensive solution for a variety of IT
            requirements. This accessibility and flexibility have revolutionized
            the way businesses and individuals approach technology, enabling
            innovation, agility, and cost-efficiency in an increasingly digital
            world.
          </p>
        </div>
      </div>
      <div className=" top-16 relative shadow-2xl shadow-gray-700 ">
        <img
          src={require("../assets/Benefits_of_Cloud_Computing.jpg")}
          className="w-full h-[95vh] mb-20 "
        />
      </div>
      <div className="relative top-4 ">
        <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
            <div>
              <h2 className="text-3xl font-bold tracki text-center sm:text-5xl dark:text-gray-50">
                Cloud Computing Modals
              </h2>
              <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">
                Cloud computing can be classified based on several criteria,
                including service models, deployment models, and functional
                characteristics.
              </p>
            </div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h3 className="text-2xl font-bold tracki sm:text-3xl dark:text-gray-50">
                  Deployment Models
                </h3>
                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-500 dark:text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-extrabold leadi dark:text-gray-50">
                        Public Cloud
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        Public cloud services are owned and operated by
                        third-party providers, making resources available to the
                        general public over the internet. Examples include
                        Amazon Web Services (AWS), Microsoft Azure, and Google
                        Cloud Platform (GCP)
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-500 dark:text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-extrabold leadi dark:text-gray-50">
                        Private Cloud
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        Private clouds are dedicated to a single organization
                        and may be hosted on-premises or by a third-party
                        provider. They offer greater control and customization
                        but may be more expensive to implement and manage.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-500 dark:text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-extrabold leadi dark:text-gray-50">
                        Hybrid Cloud
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        Hybrid clouds combine elements of both public and
                        private clouds, allowing data and applications to be
                        shared between them. This provides flexibility, allowing
                        organizations to choose the best environment for
                        specific workloads.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-500 dark:text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-extrabold leadi dark:text-gray-50">
                        Multi-Cloud:
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        Hybrid clouds combine elements of both public and
                        private clouds, allowing data and applications to be
                        shared between them. This provides flexibility, allowing
                        organizations to choose the best environment for
                        specific workloads.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative  top-20  left-20">
                <div aria-hidden="true" className="mt-10 h-[90vh] w-[30vw] lg:mt-0">
                  <img
                    src={require("../assets/cloud-computing.jpg")}
                    alt=""
                    className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div className="lg:col-start-2">
                  <h3 className="text-2xl font-bold tracki sm:text-3xl dark:text-gray-50">
                    Service Models
                  </h3>
                  <div className="mt-12 space-y-12">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-500 dark:text-gray-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-extrabold leadi dark:text-gray-50">
                          Infrastructure as a Service (IaaS)
                        </h4>
                        <p className="mt-2 dark:text-gray-400">
                          IaaS provides virtualized computing resources over the
                          internet, including virtual machines, storage, and
                          networking. Users have control over the operating
                          system and applications
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-500 dark:text-gray-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-extrabold leadi dark:text-gray-50">
                          Platform as a Service (PaaS)
                        </h4>
                        <p className="mt-2 dark:text-gray-400">
                          PaaS delivers a platform and environment for
                          developers to build, deploy, and manage applications
                          without worrying about the underlying infrastructure.
                          It includes tools and services for application
                          development and deployment.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-500 dark:text-gray-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-extrabold leadi dark:text-gray-50">
                          Software as a Service (SaaS):
                        </h4>
                        <p className="mt-2 dark:text-gray-400">
                          SaaS offers fully functional software applications
                          delivered over the internet on a subscription basis.
                          Users access the software through a web browser
                          without needing to install or maintain it locally.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10  lg:row-start-1">
                  <img
                    src={require("../assets/cloud-computing1.jpg")}
                    alt=""
                    className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cloud;
