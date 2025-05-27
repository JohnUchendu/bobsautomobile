"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const slides = [
  // {
  //   video: "/videos/.mp4",
  //   title: "Business Consultancy",
  //   description: "10x Your Growth",
  //   buttonText: "Unlock your business",
  //   link: "/services/business-consulting",
  // },
  {
    video: "/videos/eljards-hero-cars.mp4",
    title: "Trusted Automobile Hub",
    description: "Seamless inspection, buy, sell, and swap cars",
    buttonText: " Start Hassle Free",
    link: "/services/automobile-hub",
  },
  {
    video: "/videos/eljards-hero-solar.mp4",
    title: "Renewable Energy",
    description: "Let Solar pay your electricity bills",
    buttonText: "Get Started",
    link: "/services/renewable-energy",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          <video
            src={slide.video}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-black/50 flex items-center px-10 text-white">
            <div className="max-w-lg">
              <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
              <p className="text-lg mb-6">{slide.description}</p>
              <Link href={slide.link} passHref>
                <Button className="bg-blue-700 rounded-xl text-white hover:bg-blue-200">
                  {slide.buttonText}
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}




// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
// import { Button } from "@/components/ui/button";

// const slides = [
//   {
//     image: "/automobile/showroom.jpg",
//     title: "Explore the Latest Models",
//     description: "Drive innovation with our wide range of brand-new vehicles at unbeatable prices.",
//     buttonText: "Browse More",
//     link: "/about",
//   },
//   {
//     image: "/automobile/carmaintenance.jpg",
//     title: "Trusted Auto Repair Services",
//     description: "Certified technicians ready to keep your vehicle running like new.",
//     buttonText: "Book a Service",
//     link: "/services",
//   },
//   {
//     image: "/automobile/testdrive.jpg",
//     title: "Schedule a Test Drive",
//     description: "Experience comfort, power, and performance before you make the choice.",
//     buttonText: "Test Drive Now",
//     link: "/book-test-drive",
//   },
// ];

// export default function Hero() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 15000); // 15 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <Carousel className="w-full h-[500px] relative">
//       <CarouselContent>
//         <AnimatePresence mode="wait">
//           {slides.map((slide, index) =>
//             index === currentIndex ? (
//               <CarouselItem key={index} className="relative w-full h-[500px]">
//                 <motion.div
//                   className="absolute inset-0 bg-cover bg-center"
//                   style={{ backgroundImage: `url(${slide.image})` }}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.8 }}
//                 />
//                 <motion.div
//                   className="absolute inset-0 bg-black/50 flex items-center px-10 text-white"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.8 }}
//                 >
//                   <div className="max-w-lg">
//                     <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
//                     <p className="text-lg mb-6">{slide.description}</p>
//                     <Link href={slide.link} passHref>
//                       <Button className="bg-blue-700 border-2 text-black hover:bg-blue-200">
//                         {slide.buttonText}
//                       </Button>
//                     </Link>
//                   </div>
//                 </motion.div>
//               </CarouselItem>
//             ) : null
//           )}
//         </AnimatePresence>
//       </CarouselContent>
//     </Carousel>
//   );
// }


// // components/HeroSection.tsx
// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { Play, Pause } from 'react-feather';

// const VIDEO_SOURCES = [
//   { src: '/videos/eljards-hero-solar.mp4', service: 'energy' },
//   { src: '/videos/eljards-hero-cars.mp4', service: 'automobile' },
//   { src: '/videos/eljards-hero-solar.mp4', service: 'energy' }
// ];

// export default function HeroSection() {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false); // Start false for mobile safety
//   const [activeService, setActiveService] = useState('all');
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   // Detect mobile on mount
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768 || 
//                 /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
//     };
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   const services = [
//     { id: 'auto', title: 'Auto', color: 'from-blue-600' }, // Shorter text for mobile
//     { id: 'business', title: 'Business', color: 'from-purple-600' },
//     { id: 'energy', title: 'Energy', color: 'from-emerald-600' }
//   ];

//   const togglePlay = () => {
//     if (!videoRef.current) return;
    
//     if (videoRef.current.paused) {
//       videoRef.current.play()
//         .then(() => setIsPlaying(true))
//         .catch(e => console.error('Video play failed:', e));
//     } else {
//       videoRef.current.pause();
//       setIsPlaying(false);
//     }
//   };

//   const playNextVideo = () => {
//     setIsTransitioning(true);
//     setTimeout(() => {
//       setCurrentVideoIndex((prev) => (prev + 1) % VIDEO_SOURCES.length);
//       setActiveService(VIDEO_SOURCES[(currentVideoIndex + 1) % VIDEO_SOURCES.length].service);
//       setIsTransitioning(false);
//     }, 500);
//   };

//   // Initialize video with mobile-specific handling
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const handleEnded = playNextVideo;
//     const handlePlay = () => setIsPlaying(true);

//     video.addEventListener('ended', handleEnded);
//     video.addEventListener('play', handlePlay);

//     // Mobile-specific autoplay handling
//     if (!isMobile) {
//       video.play().catch(e => console.error('Autoplay failed:', e));
//     } else {
//       // Add touch handler for mobile playback
//       const handleFirstTouch = () => {
//         video.play().then(() => {
//           setIsPlaying(true);
//           document.removeEventListener('touchstart', handleFirstTouch);
//         });
//       };
//       document.addEventListener('touchstart', handleFirstTouch, { once: true });
//     }

//     return () => {
//       video.removeEventListener('ended', handleEnded);
//       video.removeEventListener('play', handlePlay);
//     };
//   }, [currentVideoIndex, isMobile]);

//   return (
//     <section className="relative h-[90dvh] md:h-screen w-full overflow-hidden">
//       {/* Video Background */}
//       <div className="absolute inset-0 z-0">
//         <video
//           ref={videoRef}
//           key={VIDEO_SOURCES[currentVideoIndex].src}
//           autoPlay={!isMobile} // Disable autoplay on mobile initially
//           muted
//           playsInline
//           className={`w-full h-full object-cover transition-opacity duration-500 ${
//             isTransitioning ? 'opacity-0' : 'opacity-100'
//           }`}
//           preload={isMobile ? "metadata" : "auto"}
//           poster={isMobile ? "/images/hero-fallback-mobile.jpg" : "/images/hero-fallback.jpg"}
//           disablePictureInPicture
//           controlsList="nodownload noplaybackrate"
//         >
//           <source src={VIDEO_SOURCES[currentVideoIndex].src} type="video/mp4" />
//           Your browser does not support HTML5 video.
//         </video>
        
//         <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
//       </div>

//       {/* Content Overlay - Mobile Optimized */}
//       <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 text-center">
//         {/* Logo */}
//         <div className="mb-4 md:mb-8 animate-fadeIn">
//           <img 
//             src="/logos/eljardslogo.png" 
//             alt="Eljards Ltd" 
//             className="h-12 md:h-16 w-auto mx-auto mb-4 md:mb-6"
//             loading="eager"
//             width={160}
//             height={64}
//           />
//           <p className="text-lg md:text-2xl font-bold text-gray-300 mb-2">
//             Integrated Solutions for Modern Nigeria
//           </p>
//         </div>

//         {/* Headline - Stacked on mobile */}
//         <h1 className="text-3xl xs:text-4xl md:text-6xl font-bold mb-6 md:mb-8 max-w-4xl leading-tight">
//           <span className="block">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
//               Smarter
//             </span>
//           </span>
//           <span className="block mt-2 text-gray-400">Business Consulting, Automobile, </span>
//           <span className="block text-gray-400">& Energy Solutions</span>
//         </h1>

//         {/* Scrollable Service Buttons on Mobile */}
//         <div className="w-full px-4 overflow-x-auto touch-pan-x no-scrollbar mb-8 md:mb-12">
//           <div className="flex flex-nowrap sm:flex-wrap justify-center gap-3 min-w-max sm:min-w-0">
//             {services.map((service) => (
//               <button
//                 key={service.id}
//                 onClick={() => setActiveService(service.id)}
//                 className={`whitespace-nowrap px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base ${
//                   activeService === service.id
//                     ? `bg-gradient-to-r ${service.color} to-black/80 shadow-lg`
//                     : 'bg-white/10 backdrop-blur-sm'
//                 }`}
//               >
//                 {service.title}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Stacked CTA Buttons on Mobile */}
//         {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full px-4 sm:px-0 max-w-xs sm:max-w-none animate-fadeInUp">
//           <button className="cta-primary py-3 sm:py-4 bg-emerald-600 hover:bg-emerald-700 rounded-lg font-bold text-base sm:text-lg transition-colors">
//             Explore Services
//           </button>
//           <button 
//             onClick={togglePlay}
//             className="cta-secondary py-3 sm:py-4 bg-transparent border-2 border-white hover:bg-white/10 rounded-lg font-bold text-base sm:text-lg transition-colors flex items-center justify-center gap-2"
//           >
//             <span>{isPlaying ? 'Pause' : 'Play'}</span>
//             {isPlaying ? <Pause size={16} /> : <Play size={16} />}
//           </button>
//         </div> */}

//         {/* Video Progress Indicators */}
//         <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2 z-10">
//           {VIDEO_SOURCES.map((_, index) => (
//             <div
//               key={index}
//               className={`h-1.5 w-6 sm:w-8 rounded-full transition-all duration-300 ${
//                 index === currentVideoIndex ? 'bg-white' : 'bg-white/30'
//               }`}
//             />
//           ))}
//         </div>

//         {/* Scroll Indicator - Hidden on mobile if video isn't playing */}
//         {isPlaying && (
//           <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            
//           </div>
//         )}
//       </div>

//       {/* Mobile Play Button Overlay */}
//       {isMobile && !isPlaying && (
//         <button 
//           onClick={togglePlay}
//           className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-black/50 rounded-full"
//           aria-label="Play video"
//         >
//           <Play size={32} className="text-white" />
//         </button>
//       )}  
//     </section>
//   );
// }