import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900 text-gray-900 dark:text-gray-100 py-8 sm:py-12 lg:py-16 overflow-hidden rounded-tl-2xl rounded-tr-2xl sm:rounded-tl-3xl sm:rounded-tr-3xl transition-colors duration-300 border-t-2 sm:border-t-4 border-black relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-4 sm:top-10 left-4 sm:left-10 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-8 sm:top-20 right-8 sm:right-20 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-gradient-to-br from-green-300 to-blue-400 rounded-full opacity-30"></div>
        <div className="absolute bottom-8 sm:bottom-20 left-1/4 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute bottom-4 sm:bottom-10 right-1/3 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20"></div>
        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-1/2 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 bg-gradient-to-r from-pink-400 to-purple-400 transform rotate-45 opacity-30"></div>
        <div className="absolute bottom-1/3 right-4 sm:right-10 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-gradient-to-r from-green-400 to-blue-400 transform rotate-45 opacity-25"></div>
      </div>
      
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start relative z-10">
        {/* LEFT COLUMN */}
        <div className="bg-white/70 dark:bg-gray-800/70 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl border-2 sm:border-3 border-black backdrop-blur-sm">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            <h4 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">ADDRESS</h4>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
          </div>
          <div className="bg-gradient-to-r from-gray-50 to-purple-50 dark:from-gray-700 dark:to-purple-800 p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl border-2 border-purple-200 dark:border-purple-600 mb-4 sm:mb-6">
            <p className="text-sm sm:text-base leading-relaxed font-semibold text-gray-800 dark:text-gray-200">
              BANGALORE INSTITUTE OF TECHNOLOGY,<br/>
              KRISHNA RAJENDRA RD, PARVATHIPURAM,<br/>
              VISHWESHWARAPURA, BASAVANAGUDI,<br/>
              BENGALURU, KARNATAKA 560004
            </p>
          </div>

          {/* Enhanced decorative line with diamonds */}
          <div className="flex items-center mb-4 sm:mb-6 lg:mb-8">
            <span className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-gradient-to-br from-yellow-400 to-orange-500 transform rotate-45 shadow-lg border-1 sm:border-2 border-black" />
            <span className="flex-grow h-1 sm:h-1.5 lg:h-2 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 mx-2 sm:mx-3 lg:mx-4 rounded-full shadow-md" />
            <span className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-gradient-to-br from-green-400 to-blue-500 transform rotate-45 shadow-lg border-1 sm:border-2 border-black" />
          </div>

          {/* Enhanced centered quote */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-800 dark:to-pink-800 p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl border-2 sm:border-3 border-black shadow-lg sm:shadow-xl">
            <p className="text-sm sm:text-base lg:text-xl italic font-black text-center bg-gradient-to-r from-purple-700 to-pink-700 dark:from-purple-300 dark:to-pink-300 bg-clip-text text-transparent leading-relaxed">
              " IT'S NOT JUST ABOUT WRITING CODE,<br/>
                IT'S ABOUT THE EXPERIENCE "
            </p>
            <div className="flex justify-center mt-3 sm:mt-4">
              <div className="w-8 sm:w-10 lg:w-12 h-0.5 sm:h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (embedded map) */}
        <div className="bg-white/70 dark:bg-gray-800/70 p-3 sm:p-4 lg:p-4 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl border-2 sm:border-3 border-black backdrop-blur-sm">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
            <h4 className="text-lg sm:text-xl lg:text-2xl font-black uppercase bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">FIND US</h4>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
          <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-3 border-black h-48 sm:h-64 lg:h-80 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.265361662902!2d77.57164927503963!3d12.95486421524508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1592715c4e7f%3A0x7dfaf94e52204678!2sBangalore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1745376986155!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BIT Location"
            />
            {/* Map overlay decoration */}
            <div className="absolute top-1 sm:top-2 right-1 sm:right-2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Enhanced COPYRIGHT */}
      <div className="mt-8 sm:mt-12 lg:mt-16 text-center relative z-10 px-4">
        <div className="flex items-center justify-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4">
          <div className="w-4 sm:w-6 lg:w-8 h-0.5 bg-gradient-to-r from-transparent to-purple-400"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          <div className="w-8 sm:w-12 lg:w-16 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full"></div>
          <div className="w-4 sm:w-6 lg:w-8 h-0.5 bg-gradient-to-r from-pink-400 to-transparent"></div>
        </div>
        <div className="bg-white/50 dark:bg-gray-800/50 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full border-2 border-purple-300 dark:border-purple-600 backdrop-blur-sm inline-block">
          <p className="text-xs sm:text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            © {new Date().getFullYear()}, All rights reserved • Made with ❤️ for amBITion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
