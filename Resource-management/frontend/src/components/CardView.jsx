// import React from 'react';
// import assets from '../assets/Card.png';  

// const CardView = ({ image, title, description, buttonText }) => {
//   return (
//     <div className="max-w-sm w-full rounded-lg shadow-lg bg-white overflow-hidden font-mono">
//       {/* Card Image */}
//       <div className="w-full h-48 bg-contain">
//         <img
//           src={image || assets || "https://via.placeholder.com/400x250"}
//           alt="card"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Card Content */}
//       <div className="p-6">
//         <h2 className="font-bold text-2xl text-gray-800 mb-3">
//           {title || "Asset Management"}
//         </h2>
//         <p className="text-gray-600 text-base leading-relaxed">
//           {description || "Description of the card goes here. Add a brief overview to engage users."}
//         </p>
//       </div>

//       {/* Card Footer */}
//       <div className="p-4 bg-gray-100 flex justify-end">
//         <button className="px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-all">
//           {buttonText || "Open"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CardView;
import React from 'react';
import assets from '../assets/Card.png';  

const CardView = ({ image, title, description, buttonText }) => {
  return (
    <div className="max-w-sm w-full rounded-lg shadow-lg bg-white overflow-hidden font-mono">
      {/* Card Image */}
      <div className="w-full h-48 bg-gray-200">
        <img
          src={image || assets || "https://via.placeholder.com/400x250"}
          alt="card"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h2 className="font-bold text-2xl text-gray-800 mb-3">
          {title || "Asset Management"}
        </h2>
        <p className="text-gray-600 text-base leading-relaxed">
          {description || "Description of the card goes here. Add a brief overview to engage users."}
        </p>
      </div>

      {/* Card Footer */}
      <div className="p-4 bg-gray-100 flex justify-end">
        <button className="px-4 py-2 bg-purple-600 text-white font-medium rounded-full hover:bg-purple-700 transition-all">
          {buttonText || "Open"}
        </button>
      </div>
    </div>
  );
};

export default CardView;
