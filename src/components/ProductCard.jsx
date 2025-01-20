// import { useState } from 'react';
// import { Heart, Search, ShoppingCart } from 'lucide-react';

// // Removed TypeScript-specific syntax
// export default function ProductCard({ product }) {
//   const [isFavorite, setIsFavorite] = useState(false);

//   return (
//     <div className="product-grid bg-white shadow-md rounded-lg overflow-hidden">
//       <div className="relative">
//         <button
//           className={`absolute top-2 right-2 p-1 rounded-full ${
//             isFavorite ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-600'
//           }`}
//           onClick={() => setIsFavorite(!isFavorite)}
//         >
//           <Heart size={20} />
//         </button>
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full h-48 object-cover"
//         />
//         <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
//           <span className="text-sm font-bold">{product.discount}% OFF</span>
//         </div>
//       </div>
//       <div className="p-4">
//         <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
//         <div className="flex justify-between items-center mb-2">
//           <span className="text-xl font-bold">₹{product.price.toFixed(2)}</span>
//           <div className="flex">
//             {[...Array(5)].map((_, i) => (
//               <svg
//                 key={i}
//                 className={`w-4 h-4 ${
//                   i < product.rating ? 'text-yellow-400' : 'text-gray-300'
//                 }`}
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//               </svg>
//             ))}
//           </div>
//         </div>
//         <div className="flex justify-between items-center">
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors flex items-center">
//             <ShoppingCart size={16} className="mr-2" />
//             Add to Cart
//           </button>
//           <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors">
//             <Search size={20} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
