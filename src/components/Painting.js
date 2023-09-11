import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Painting = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className="overflow-x-hidden"
        style={{
          background: "rgb(255,132,248)",
          background:
            "linear-gradient(90deg, rgba(255,132,248,1) 0%, rgba(239,144,10,1) 80%)",
        }}
        className="relative overflow-x-hidden h-full shadow-gray-800"
      >
        <h1 data-aos="zoom-out-left"
          style={{ fontFamily: " 'Bricolage Grotesque', sans-serif" }}
          className="text-center 
      text-5xl relative top-6 mb-10 font-extrabold text-[#356179] font-sans"
        >
          Most Popular Painting in India
        </h1>
        <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            <a
              rel="noopener noreferrer"
              href="https://en.wikipedia.org/wiki/Madhubani_art"
              target="_blank"
              className="block max-w-sm gap-3 mx-auto
		 sm:max-w-full group hover:no-underline shadow-2xl rounded-md focus:no-underline 
		 lg:grid lg:grid-cols-12 dark:bg-gray-900"
            >
              <img data-aos="fade-down-right"
                src={require("../assets/Madhubani.jpg")}
                alt=""
                className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
              />
              <div  data-aos="fade-down-right" className="p-6 space-y-2 lg:col-span-5">
                <h3
                  className="text-2xl text-center font-semibold sm:text-4xl 
				group-hover:underline group-focus:underline"
                >
                  Madhubani Paintings
                </h3>
                <p className="text-xs text-center dark:text-gray-400">
                  September 24, 2023
                </p>
                <p>
                  Madhubani art (also Mithila art) is a style of painting
                  practiced in the Mithila region of India and Nepal. It is
                  named after the Madhubani district of Bihar, India, which is
                  where it originated. Artists create these paintings using a
                  variety of mediums, including their own fingers, or twigs,
                  brushes, nib-pens, and matchsticks. The paint is created using
                  natural dyes and pigments. The paintings are characterised by
                  their eye-catching geometrical patterns. There is ritual
                  content for particular occasions, such as birth or marriage,
                  and festivals, such as Holi, Surya Shasti, Kali Puja,
                  Upanayana, and Durga Puja.
                </p>
              </div>
            </a>

            <a
              rel="noopener noreferrer"
              href="https://en.wikipedia.org/wiki/Bhil"
              target="_blank"
              className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline shadow-2xl rounded-md focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
            >
              <div  data-aos="fade-up-left"  className="p-6 space-y-2 lg:col-span-5">
                <h3
                  className="text-2xl text-center font-semibold sm:text-4xl
				 group-hover:underline group-focus:underline"
                >
                  Bhil Paintings
                </h3>
                <p className="text-xs text-center dark:text-gray-400">
                  September 24, 2023
                </p>
                <p>
                  Bhil or Bheel is an ethnic group in western India. They speak
                  the Bhil languages, a subgroup of the Western Zone of the
                  Indo-Aryan languages.Bhils are listed as tribal people of the
                  states of Gujarat, Madhya Pradesh, Chhattisgarh, Maharashtra
                  and Rajasthan—all in the western Deccan regions and central
                  India—as well as in Tripura in far-eastern India, on the
                  border with Bangladesh.Tripura in far-eastern India, on the
                  border with Bangladesh. Bhils are divided into a number of
                  endogamous territorial divisions, which in turn have a number
                  of clans and lineages.
                </p>
              </div>
              <img data-aos="fade-up-left"  
                src={require("../assets/bhill.jpg")}
                alt=""
                className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
              />
            </a>

            <a
              rel="noopener noreferrer"
              href="https://en.wikipedia.org/wiki/Kalighat_painting"
              target="_blank"
              className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline shadow-2xl rounded-md focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
            >
              <img data-aos="fade-down-right"
                src={require("../assets/kalighat.jpg")}
                alt=""
                className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
              />
              <div  data-aos="fade-down-right" className="p-6 space-y-2 lg:col-span-5">
                <h3
                  className="text-2xl text-center font-semibold sm:text-4xl
				 group-hover:underline group-focus:underline"
                >
                  Kalighat Paintings
                </h3>
                <p className="text-xs text-center dark:text-gray-400">
                  September 24, 2023
                </p>
                <p>
                  {" "}
                  Kalighat painting, Kalighat Patachitra, or Kalighat Pat
                  (Bengali: কালীঘাট পটচিত্র) originated as a distinct style or
                  genre of Indian paintings in the 19th century, practiced and
                  produced by a group of specialised scroll painters known as
                  the patuas in the vicinity of the Kalighat Kali Temple in
                  Kolkata (formerly Calcutta), in the present Indian state of
                  West Bengal.Composed of bold outlines, vibrant colour tones,
                  featuring minimal background details, these paintings and
                  drawings, done on hand-made, or more usually, machine
                  manufactured, paper, depicted mythological stories, figures of
                  Hindu
                </p>
              </div>
            </a>

            <a
              rel="noopener noreferrer"
              href="https://en.wikipedia.org/wiki/Miniature_painting"
              target="_blank"
              className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline shadow-2xl rounded-md focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
            >
              <div data-aos="fade-up-left"   className="p-6 space-y-2 lg:col-span-5">
                <h3
                  className="text-2xl text-center font-semibold sm:text-4xl 
				group-hover:underline group-focus:underline"
                >
                  Miniature Paintings
                </h3>
                <p className="text-xs text-center dark:text-gray-400">
                  September 24, 2023
                </p>
                <p>
                  A miniature (from the Latin verb miniare, "to colour with
                  minium", a red lead) is a small illustration used to decorate
                  an ancient or medieval illuminated manuscript; the simple
                  illustrations of the early codices having been miniated or
                  delineated with that pigment. The generally small scale of
                  such medieval pictures has led to etymological confusion with
                  minuteness and to its application to small paintings,
                  especially portrait miniatures, which did however grow from
                  the same tradition and at least initially used similar
                  techniques.
                </p>
              </div>
              <img data-aos="fade-up-left"  
                src={require("../assets/Miniature.jpg")}
                alt=""
                className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
              />
            </a>

            <a
              rel="noopener noreferrer"
              href="https://en.wikipedia.org/wiki/Phad_painting"
              target="_blank"
              className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline shadow-2xl rounded-md focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
            >
              <img data-aos="fade-down-right"
                src={require("../assets/phad.jpg")}
                alt=""
                className="object-cover w-full h-68 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
              />
              <div data-aos="fade-down-right" className="p-6 space-y-2 lg:col-span-5">
                <h3
                  className="text-2xl text-center font-semibold sm:text-4xl 
				group-hover:underline group-focus:underline"
                >
                  Phad Painting
                </h3>
                <p className="text-xs text-center dark:text-gray-400">
                  September 24, 2023
                </p>
                <p>
                  Phad painting or phad (/pʌd/; IAST: Phad, Hindi: फड़) is a
                  style religious scroll painting and folk painting, practiced
                  in Rajasthan state of India. This style of painting is
                  traditionally done on a long piece of cloth or canvas, known
                  as phad. The narratives of the folk deities of Rajasthan,
                  mostly of Pabuji and Devnarayan are depicted on the phadss.
                  The Bhopas, the priest-singers traditionally carry the painted
                  phads along with them and use these as the mobile temples of
                  the folk deities, who are worshipped by the Rebari community
                  of the region.
                </p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Painting;
