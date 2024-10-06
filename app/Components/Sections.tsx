import React from "react";
import { animate, motion } from "framer-motion";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

const fade = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemTo = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  }
};
const list = [
  {
    title: "About us",
  },
  {
    title: "Connect everywhere",
  },

  {
    title: "About us",
  },

  {
    title: "About us",
  },
];

function Sections() {
  return (
    <>
      <motion.ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}>
    {list.map((item, index) =>(
      <motion.li key={index} variants={itemTo}>
            <Card className="max-w-[500px] mx-auto">
       <CardHeader className="flex gap-3">
         <Image
           alt="nextui logo"
           height={40}
           radius="sm"
           src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
           width={40}
         />
         <div className="flex flex-col">
           <p className="text-md">{item.title}</p>
           <p className="text-small text-default-500">nextui.org</p>
         </div>
       </CardHeader>
       <Divider/>
       <CardBody>
         <p>Make beautiful websites regardless of your design experience.</p>
       </CardBody>
       <Divider/>
       <CardFooter>
         <Link
           isExternal
           showAnchorIcon
           href="https://github.com/nextui-org/nextui"
         >
           Visit source code on GitHub.
         </Link>
       </CardFooter>
     </Card>  
      </motion.li>
      ))}
      </motion.ul>
     
      {/* <motion.ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 rounded-2xl">
        {list.map((item, index) => (
          <motion.li
            className="bg-[#f1f1f1] dark:bg-[#080707] h-10 border-1 border-white"
            key={index}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {item.title}
          </motion.li>
        ))}
      </motion.ul> */}
    </>
  );
}

export default Sections;
