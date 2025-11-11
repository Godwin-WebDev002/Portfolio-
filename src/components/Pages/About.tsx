import { AnimatePresence, motion } from "framer-motion";
import {
  BiCake,
  BiCodeBlock,
  BiDesktop,
  BiEnvelope,
  BiLaptop,
  BiMapPin,
  BiPhone,
  BiServer,
} from "react-icons/bi";
import { DiCss3, DiHtml5, DiReact } from "react-icons/di";
import { PiGithubLogoBold, PiLinkedinLogoBold, PiXLogo } from "react-icons/pi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiTypescript } from "react-icons/si";
import {
  TbBrandFramerMotion,
  TbBrandReactNative,
  TbServer,
} from "react-icons/tb";

import OSESPIC from "../assets/image/OG.png";

export const About = () => {
  return (
    <div className="p-5 sm:px-10">
      <div className=" sm:mt-[-3rem] flex flex-col ">
        <h1 className="text-3xl font-bold">About</h1>
        <div className="bg-[#87ceeb] h-2 w-12 mb-1 rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center w-[100%] pt-10 "
      >
        <div className="flex items-center justify-evenly w-[100%] mb-8 flex-col md:flex-row ">
          <h1 className="font-bold text-6xl lg:flex hidden  text-shadow-xl ">
            FrontEnd
          </h1>

          <img
            className="w-50 h-auto rounded-full mb-2"
            src={OSESPIC}
            alt="Profile"
          />

          <div className=" sm:flex flex-col items-center hidden">
            <h1 className="font-bold text-6xl lg:hidden">FrontEnd</h1>
            <h1 className="font-bold text-6xl">Engineer</h1>
          </div>
        </div>

        <p className=" font-semibold text-xl ">
          Hi 👋, I am <b>ONOBHAYEDO OSEHON GODWIN,</b> a Frontend Developer
          passionate about turning clean code into beautiful, responsive
          experience. I specialize in HTML, CSS, JavaScript, and modern
          frameworks like React and Tailwind, crafting interface that are both
          functional and delightful to use. I love solving UI challanges,
          optimizing performance, and staying on top of design trends. From
          micro-interactions to accessible design patterns. Feel free to browse
          my work, drop a message or connect on Linkedin. Let's create something
          awsome together!
        </p>
      </motion.div>

      <div className="my-5 border-2 p-5 rounded-lg ">
        <div className="flex flex-wrap justify-between">
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex w-52 mt-3"
          >
            <div className=" w-10 h-10 bg-[#87ceeb] text-white rounded flex items-center justify-center">
              <BiEnvelope size={35} />
            </div>

            <div className="ml-1">
              <h1 className="mb-[-5px] font-semibold">EMAIL</h1>
              <p className="text-sm font-semibold">osehononos@gmail.com</p>
            </div>
          </motion.div>

          {/* --------------------------------- */}

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex w-52 mt-3"
          >
            <div className=" w-10 h-10 bg-[#87ceeb] text-white rounded flex items-center justify-center">
              <BiPhone size={35} />
            </div>

            <div className="ml-1">
              <h1 className="mb-[-5px] font-semibold">PHONE</h1>
              <p className="text-sm font-semibold">+2349021719472</p>
            </div>
          </motion.div>

          {/* --------------------------------- */}

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex w-52 mt-3"
          >
            <div className=" w-10 h-10 bg-[#87ceeb] text-white rounded flex items-center justify-center">
              <BiCake size={35} />
            </div>

            <div className="ml-1">
              <h1 className="mb-[-5px] font-semibold">BIRTHDAY</h1>
              <p className="text-sm font-semibold">17 May</p>
            </div>
          </motion.div>

          {/* --------------------------------- */}

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex w-52 mt-3"
          >
            <div className=" w-10 h-10 bg-[#87ceeb] text-white rounded flex items-center justify-center">
              <BiMapPin size={35} />
            </div>

            <div className="ml-1">
              <h1 className="mb-[-5px] font-semibold">LOCATION</h1>
              <p className="text-sm font-semibold">Abuja, Nigeria</p>
            </div>
          </motion.div>

          {/* --------------------------------- */}
        </div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className=" flex justify-evenly mt-8"
        >
          <a
            target="_blank"
            href="https://www.linkedin.com/in/onobhayedo-osehon-1795aa366?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          >
            <PiLinkedinLogoBold size={40} />
          </a>
          <a target="_blank" href="https://github.com/Godwin-WebDev002">
            <PiGithubLogoBold size={40} />
          </a>
          <a
            target="_blank"
            href="https://x.com/Osehon_Godwin?t=Ae2KGTIGAt6AMdOCWx_6OQ&s=08"
          >
            <PiXLogo size={40} />
          </a>
        </motion.div>
      </div>

      <div className="mt-5">
        <h1 className=" w-fit text-3xl font-bold border-b-2 border-[#87ceeb]">
          Specialties
        </h1>

        <div className="flex flex-wrap justify-between">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="bg-[#87ceeb] text-white w-[100%] md:w-[49%] flex items-center mt-3 py-4 px-4 rounded-lg hover:translate-y-[-1px]"
          >
            <BiCodeBlock size={50} className="mr-2" />
            <div>
              <h1 className="font-bold text-lg">UI Development</h1>
              <p className="leading-[1.1]">
                Crafting engaging interfaces with modern languages
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="bg-[#87ceeb] text-white w-[100%] md:w-[49%] flex items-center mt-3 py-4 px-4 rounded-lg hover:translate-y-[-1px]"
          >
            <BiDesktop size={50} className="mr-2" />
            <div>
              <h1 className="font-bold text-lg">Responsive Design</h1>
              <p className="leading-[1.1]">
                Ensuring seamless user experiences across devices
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="bg-[#87ceeb] text-white w-[100%] md:w-[49%] flex items-center mt-3 py-4 px-4 rounded-lg hover:translate-y-[-1px]"
          >
            <BiServer size={50} className="mr-2" />
            <div>
              <h1 className="font-bold text-lg">State Management</h1>
              <p className="leading-[1.1]">
                Handling dynamic data and state changes in web applications
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="bg-[#87ceeb] text-white w-[100%] md:w-[49%] flex items-center mt-3 py-4 px-4 rounded-lg hover:translate-y-[-1px]"
          >
            <BiLaptop size={50} className="mr-2" />
            <div>
              <h1 className="font-bold text-lg">Cross-Browser Compatability</h1>
              <p className="leading-[1.1]">
                Optimizing for consistency across browzers and versions
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-5">
        <h1 className=" w-fit text-3xl font-bold border-b-2 border-[#87ceeb]">
          Coding Skills
        </h1>

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-5 justify-center mt-10  text-white"
          >
            {/* HTML */}

            <div className=" bg-black h-32 w-28 rounded-lg flex flex-col items-center justify-center hover:translate-y-[-1px] ">
              <div className=" bg-gradient-to-r from-orange-400 to-orange-800 p-2 rounded-full ">
                <DiHtml5 size={35} />
              </div>
              <h1 className="font-bold mt-1">HTML5</h1>
              <div className="w-[80%] h-1 rounded-full bg-gradient-to-r from-purple-500 to-purple-800 mt-1" />
            </div>

            {/* HTML */}

            {/* CSS */}

            <div className=" bg-black h-32 w-28 rounded-lg flex flex-col items-center justify-center  hover:translate-y-[-1px] ">
              <div className=" bg-gradient-to-r from-blue-400 to-blue-800 p-2 rounded-full ">
                <DiCss3 size={35} />
              </div>
              <h1 className="font-bold mt-1 text-sm ">CSS</h1>
              <div className="bg-gray-500 h-1 w-[80%] rounded-full mt-1">
                <div className="w-[98%] h-[100%] rounded-full bg-gradient-to-r from-purple-500 to-purple-800"></div>
              </div>
            </div>

            {/* CSS */}

            {/* CSS */}

            <div className=" bg-black h-32 w-28 rounded-lg flex flex-col items-center justify-center  hover:translate-y-[-1px] ">
              <div className=" bg-gradient-to-r from-teal-400 to-teal-800 p-2 rounded-full ">
                <RiTailwindCssFill size={35} />
              </div>
              <h1 className="font-bold mt-1 text-sm ">Tailwind CSS</h1>
              <div className="bg-gray-500 h-1 w-[80%] rounded-full mt-1">
                <div className="w-[98%] h-[100%] rounded-full bg-gradient-to-r from-purple-500 to-purple-800"></div>
              </div>
            </div>

            {/* CSS */}

            {/* JS */}

            <div className=" bg-black h-32 w-28 rounded-lg flex flex-col items-center justify-center  hover:translate-y-[-1px] ">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-800 p-3 rounded-full ">
                <SiJavascript size={28} />
              </div>
              <h1 className="font-bold mt-1 text-sm ">JavaScript</h1>
              <div className="bg-gray-500 h-1 w-[80%] rounded-full mt-1">
                <div className="w-[95%] h-[100%] rounded-full bg-gradient-to-r from-purple-500 to-purple-800"></div>
              </div>
            </div>

            {/* JS */}

            {/* TS */}

            <div className=" bg-black h-32 w-28 rounded-lg flex flex-col items-center justify-center  hover:translate-y-[-1px] ">
              <div className=" bg-gradient-to-r from-blue-400 to-blue-800  p-3 rounded-full ">
                <SiTypescript size={28} />
              </div>
              <h1 className="font-bold mt-1 text-sm ">TypeScript</h1>
              <div className="bg-gray-500 h-1 w-[80%] rounded-full mt-1">
                <div className="w-[90%] h-[100%] rounded-full bg-gradient-to-r from-purple-500 to-purple-800"></div>
              </div>
            </div>

            {/* TS */}

            {/* React */}

            <div className=" bg-black h-32 w-28 rounded-lg flex flex-col items-center justify-center  hover:translate-y-[-1px] ">
              <div className="bg-gradient-to-r from-[#00ffff] to-[#006161] p-2 rounded-full ">
                <DiReact size={35} />
              </div>
              <h1 className="font-bold mt-1 text-sm ">React</h1>
              <div className="bg-gray-500 h-1 w-[80%] rounded-full mt-1">
                <div className="w-[88%] h-[100%] rounded-full bg-gradient-to-r from-purple-500 to-purple-800"></div>
              </div>
            </div>

            {/* React */}

            {/* React Native */}

            <div className=" bg-black h-32 w-28 rounded-lg flex flex-col items-center justify-center  hover:translate-y-[-1px] ">
              <div className="bg-[#00ffff] p-2 rounded-full ">
                <TbBrandReactNative size={35} />
              </div>
              <h1 className="font-bold mt-1 text-sm ">React Native</h1>
              <div className="bg-gray-500 h-1 w-[80%] rounded-full mt-1">
                <div className="w-[80%] h-[100%] rounded-full bg-gradient-to-r from-purple-500 to-purple-800"></div>
              </div>
            </div>

            {/* React Native */}

            {/* Rest API */}

            <div className=" bg-black h-32 w-28 rounded-lg flex flex-col items-center justify-center  hover:translate-y-[-1px] ">
              <div className="bg-gradient-to-r from-purple-500 to-purple-800 p-2 rounded-full ">
                <TbBrandFramerMotion size={35} />
              </div>
              <h1 className="font-bold mt-1 text-sm ">Framer Motion</h1>
              <div className="bg-gray-500 h-1 w-[80%] rounded-full mt-1">
                <div className="w-[90%] h-[100%] rounded-full bg-gradient-to-r from-purple-500 to-purple-800"></div>
              </div>
            </div>

            {/* Rest API */}

            {/* Rest API */}

            <div className=" bg-black h-32 w-28 rounded-lg flex flex-col items-center justify-center  hover:translate-y-[-1px] ">
              <div className="bg-gradient-to-r from-green-500 to-green-800 p-2 rounded-full ">
                <TbServer size={35} />
              </div>
              <h1 className="font-bold mt-1 text-sm ">Rest API</h1>
              <div className="bg-gray-500 h-1 w-[80%] rounded-full mt-1">
                <div className="w-[90%] h-[100%] rounded-full bg-gradient-to-r from-purple-500 to-purple-800"></div>
              </div>
            </div>

            {/* Rest API */}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
