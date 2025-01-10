// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// const Sidebar = () => {
//   const location = useLocation(); // to highlight active link

//   return (
//     <div className="bg-gray-800 text-white w-64 min-h-screen p-6 shadow-lg">
//       <ul className="space-y-6">
//         <li>
//           <Link
//             to="/employeedash"
//             className={`block px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 ${
//               location.pathname === "/employeedash" ? "bg-blue-600" : ""
//             }`}
//           >
//             Dashboard
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/employee/assets"
//             className={`block px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 ${
//               location.pathname === "/employee/assets" ? "bg-blue-600" : ""
//             }`}
//           >
//             My Assets
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/employee/requests"
//             className={`block px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 ${
//               location.pathname === "/employee/requests" ? "bg-blue-600" : ""
//             }`}
//           >
//             Asset Requests
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/employee/maintenance"
//             className={`block px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 ${
//               location.pathname === "/employee/maintenance" ? "bg-blue-600" : ""
//             }`}
//           >
//             Maintenance Requests
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai"; // Dashboard Icon
import { FaLaptop } from "react-icons/fa"; // My Assets Icon
import { RiFileList2Line } from "react-icons/ri"; // Asset Requests Icon
import { MdBuild } from "react-icons/md"; // Maintenance Requests Icon

const Sidebar = () => {
  const location = useLocation(); // to highlight active link

  const menuItems = [
    {
      path: "/employeedash",
      label: "Dashboard",
      icon: <AiOutlineDashboard />,
    },
    {
      path: "/employee/assets",
      label: "My Assets",
      icon: <FaLaptop />,
    },
    {
      path: "/employee/requests",
      label: "Asset Requests",
      icon: <RiFileList2Line />,
    },
    {
      path: "/employee/maintenance",
      label: "Maintenance Requests",
      icon: <MdBuild />,
    },
  ];

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-6 shadow-lg">
      <ul className="space-y-6">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className={`flex items-center gap-4 px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 ${
                location.pathname === item.path ? "bg-blue-600" : ""
              }`}
            >
              <span className="text-2xl">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
