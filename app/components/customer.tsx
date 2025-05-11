// import React from "react";
// import { ScrollArea } from "./ui/scroll-area";

// const Customer = () => {
//   return (
//     <div className="p-[5rem]">
//       <h1 className="text-center">Our valuable clients</h1>
//       <ScrollArea>
//         <div className="flex items-center justify-center w-full mt-5 gap-10">
//           <div className="flex gap-3 items-center justify-center">
//             <img src="#" alt="client-logo" />
//             <h1>Leather Gelory</h1>
//           </div>
//           <div className="flex gap-3 items-center justify-center">
//             <img src="#" alt="client-logo" />
//             <h1>Leather Gelory</h1>
//           </div>
//           <div className="flex gap-3 items-center justify-center">
//             <img src="#" alt="client-logo" />
//             <h1>Leather Gelory</h1>
//           </div>
//         </div>
//       </ScrollArea>
//     </div>
//   );
// };

// export default Customer;

import React from "react";
import { motion, useMotionValue, useTransform } from "motion/react";

const clients = [
  { name: "Leather Glory", logo: "cookie-logo.png" },
  { name: "Fashion Hub", logo: "#" },
  { name: "StyleNest", logo: "#" },
  { name: "UrbanTrend", logo: "#" },
  { name: "EliteWears", logo: "#" },
];

const Customer = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className="overflow-hidden w-full py-10 dark:bg-gray-800">
      <h1 className="text-center text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Our Valuable Clients
      </h1>

      <div className="relative flex items-center justify-start">
        <motion.div
          className="flex gap-10"
          whileHover={{ x: 0 }}
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {clients.concat(clients).map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 min-w-[200px]"
            >
              <img src={client.logo} alt="client-logo" className="w-20 h-20" />
              <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                {client.name}
              </h1>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Customer;
