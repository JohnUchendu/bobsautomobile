"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="bg-gray-50 fixed top-15 md:top-5 left-0 right-0 z-10 m-2">
        <div className="justify-between px-4 mx-auto  lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block ">
            {/* LOGO */}
            <Link href="/" className="flex ">
              <Image
                src="/logos/logo.PNG"
                alt="Benfield Attorneys & Solicitors Logo"
                width={50} // Adjust the width
                height={50} // Set the height equal to the text height
                className="h-12 w-auto"
              />
              
              <h2 className="text-2xl lg:text-4xl text-blue-900 font-bold cursor-pointer ">
                
              </h2>
            </Link>

            {/* HARMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden">
              <button
                className="p-2 text-lg text-black rounded-md outline-none focus: border-gray-400"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <X size={30} className="text-black/60" />
                ) : (
                  <Menu size={30} className="text-black/60" />
                )}
              </button>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex">
                <li className="pb-6 text-lg text-black py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-300 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/" passHref>
                    <p onClick={() => setNavbar(!navbar)}> Home</p>
                  </Link>
                </li>
                <li className="pb-6 text-lg text-black py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-300 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/about" passHref>
                    <p onClick={() => setNavbar(!navbar)}> About Our Firm</p>
                  </Link>
                </li>
                <li className="pb-6 text-lg text-black py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-300 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/our-attorneys" passHref>
                    <p onClick={() => setNavbar(!navbar)}>Our Attorneys</p>
                  </Link>
                </li>
                <li className="pb-6 text-lg text-black py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-300 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/law-firm-services" >
                     <p onClick={() => setNavbar(!navbar)}>Service Areas</p>
                  </Link>
                </li>
                <li className="pb-6 text-lg text-black py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-300 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/contact">
                    <p onClick={() => setNavbar(!navbar)}>Contact </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// import Link from "next/link";
// import { useState } from "react";

// const Navbar = () => {
//   const [navbar, setNavbar] = useState(false);

//   return (
//     <div>
//       <nav className="bg-white border border-none rounded shadow-slate-200 shadow-md fixed top-0 left-0 right-0 z-10 m-2">
//         <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
//           <div className="flex items-center justify-between py-3 md:py-5 md:block">
//             {/* LOGO */}
//             <Link href="/" className="">
//               <h2 className="text-2xl lg:text-5xl text-black font-bold cursor-pointer">
//                 primeweb
//               </h2>
//             </Link>
//             {/* HAMBURGER BUTTON FOR MOBILE */}
//             <div className="md:hidden">
//               <button
//                 className="p-2 text-lg text-black rounded-md outline-none focus:border-gray-400"
//                 onClick={() => setNavbar(!navbar)}
//               >
//                 {navbar ? (
//                   <h3 className="font-thin text-black/60">close</h3>
//                 ) : (
//                   <h3 className="font-thin text-black/60">menu</h3>
//                 )}
//               </button>
//             </div>
//           </div>
//           <div>
//             <div
//               className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
//                 navbar ? "p-12 md:p-0 block" : "hidden"
//               }`}
//             >
//               <ul className="h-screen md:h-auto items-center justify-center md:flex">
//                 <li className="relative pb-6 text-lg text-black py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-300 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
//                   <Link href="/about" passHref>
//                     <a onClick={() => setNavbar(!navbar)}>about</a>
//                   </Link>
//                 </li>
//                 <li className="relative pb-6 text-lg text-black py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-300 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
//                   <Link href="/contact" passHref>
//                     <a onClick={() => setNavbar(!navbar)}>contact</a>
//                   </Link>
//                 </li>
//                 <li className="relative pb-6 text-lg text-black py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-300 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
//                   <Link href="/package">
//                     <a onClick={() => setNavbar(!navbar)}>package</a>
//                   </Link>
//                 </li>
//                 <li className="relative pb-6 text-lg text-black py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-300 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
//                   <Link href="/case-studies">
//                     <a onClick={() => setNavbar(!navbar)}>case studies</a>
//                   </Link>
//                 </li>
//                 {/* DROPDOWN MENU */}
//                 <li className="relative pb-6 text-lg text-black py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-300 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
//                   <div className="group">
//                     <button
//                       className="flex items-center focus:outline-none"
//                       onClick={() => setNavbar(!navbar)}
//                     >
//                       <span className="mr-1">More</span>
//                       <svg
//                         className="w-4 h-4 transition-transform transform group-hover:rotate-180"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M10 12a2 2 0 100-4 2 2 0 000 4z"
//                         />
//                       </svg>
//                     </button>
//                     {/* DROPDOWN CONTENT */}
//                     <ul
//                       className={`${
//                         navbar ? "block" : "hidden"
//                       } absolute left-0 mt-2 w-40 py-2 bg-white rounded-md shadow-lg`}
//                     >
//                       <li className="px-4 py-2 hover:bg-purple-300">
//                         <Link href="/services">
//                           <a onClick={() => setNavbar(!navbar)}>Services</a>
//                         </Link>
//                       </li>
//                       <li className="px-4 py-2 hover:bg-purple-300">
//                         <Link href="/blog">
//                           <a onClick={() => setNavbar(!navbar)}>Blog</a>
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
