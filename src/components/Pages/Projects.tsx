import { motion } from "framer-motion";
import { CgArrowTopRight } from "react-icons/cg";
import SugPro from "../assets/image/surgpro.png";
import FoodPro from "../assets/image/foodpro.png";
import Ovulan from "../assets/image/Ovulan.png";
import Aurea from "../assets/image/Aurea.png";

export const Projects = () => {
  return (
    <div className="p-5 sm:px-10">
      <div className=" sm:mt-[-3rem] flex flex-col ">
        <h1 className="text-3xl font-bold">Projects</h1>
        <div className="bg-[#87ceeb] h-2 w-12 mb-1 rounded-full" />
      </div>

      <div className=" mt-8 font-semibold flex flex-wrap gap-8 justify-evenly ">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          viewport={{ once: true }}
          className=" w-[100%] md:w-[45%]"
        >
          <img
            src={Ovulan}
            alt="Ovulan"
            className="w-[100%] mb-1 rounded-xl transition-all duration-200 ease-in-out hover:scale-102 shadow shadow-[#868e96] "
          />

          <h1 className="text-xl font-semibold">Ovulan</h1>

          <p className="text-xs">
            A sleek portal for luxury wrist watches, featuring product
            carousels, detailed specs of different kind.
          </p>

          <div className="flex justify-between gap-2">
            <p className=" text-[#868e96] text-sm ">
              #ReactJs #TypeScript #Tailwind #FramerMotion
            </p>
            <a
              href={"https://ovulan.netlify.app/"}
              target="blank"
              className=" flex justify-center items-center w-8 h-8 rounded-xl border-2 border-[#868e96] hover:bg-white/20 "
            >
              <CgArrowTopRight size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          viewport={{ once: true }}
          className=" w-[100%] md:w-[45%] "
        >
          <img
            src={Aurea}
            alt="Aurea"
            className="w-[100%] mb-1 rounded-xl transition-all duration-200 ease-in-out hover:scale-102 shadow shadow-[#868e96] "
          />

          <h1 className="text-xl font-semibold">Aurea</h1>

          <p className="text-xs">
            Minimalist e-commerce for a natural skin-oil, with product details
            and a seamless checkout flow.
          </p>

          <div className="flex justify-between gap-2">
            <p className=" text-[#868e96] text-sm ">
              #ReactJs #TypeScript #Tailwind #FramerMotion
            </p>
            <a
              href={"https://aureas.netlify.app/"}
              target="blank"
              className=" flex justify-center items-center w-8 h-8 rounded-xl border-2 border-[#868e96] hover:bg-white/20 "
            >
              <CgArrowTopRight size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          viewport={{ once: true }}
          className=" w-[100%] md:w-[45%] "
        >
          <img
            src={FoodPro}
            alt="FoodPro"
            className="w-[100%] mb-1 rounded-xl transition-all duration-200 ease-in-out hover:scale-102 shadow shadow-[#868e96] "
          />

          <h1 className="text-xl font-semibold">Gourmet Haven</h1>

          <p className="text-xs">
            A vibrant food website featuring menu highlights, chef stories, and
            online reservations.
          </p>

          <div className="flex justify-between">
            <p className=" text-[#868e96] ">#HTML #CSS #JS</p>
            <a
              href={"https://gourmet-oses.netlify.app/"}
              target="blank"
              className=" flex justify-center items-center w-8 h-8 rounded-xl border-2 border-[#868e96] hover:bg-white/20 "
            >
              <CgArrowTopRight size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          viewport={{ once: true }}
          className=" w-[100%] md:w-[45%] "
        >
          <img
            src={SugPro}
            alt="SugPro"
            className="w-[100%] mb-1 rounded-xl transition-all duration-200 ease-in-out hover:scale-102 shadow shadow-[#868e96] "
          />

          <h1 className="text-xl font-semibold">Aevum Aesthetics</h1>

          <p className="text-xs">
            A clean, presponsive clinic site showcasing plastic-surgery
            services, before-and-after gullaeries, and easy appointment booking.
          </p>

          <div className="flex justify-between">
            <p className=" text-[#868e96] ">#HTML #CSS #JS</p>
            <a
              href={"https://aevom-oses.netlify.app/"}
              target="blank"
              className=" flex justify-center items-center w-8 h-8 rounded-xl border-2 border-[#868e96] hover:bg-white/20 "
            >
              <CgArrowTopRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
