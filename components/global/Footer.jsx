import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 py-16 overflow-hidden rounded-tl-3xl rounded-tr-3xl">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* LEFT COLUMN */}
        <div>
          <h4 className="text-2xl font-bold mb-4">ADDRESS</h4>
          <p className="text-base leading-relaxed mb-6">
            BANGALORE INSTITUTE OF TECHNOLOGY,<br/>
            KRISHNA RAJENDRA RD, PARVATHIPURAM,<br/>
            VISHWESHWARAPURA, BASAVANAGUDI,<br/>
            BENGALURU, KARNATAKA 560004
          </p>

          {/* Decorative line with diamonds */}
          <div className="flex items-center mb-8">
            <span className="w-4 h-4 bg-purple-400 transform rotate-45" />
            <span className="flex-grow h-1 bg-purple-300 mx-3" />
            <span className="w-4 h-4 bg-purple-400 transform rotate-45" />
          </div>

          {/* Centered quote */}
          <p className="text-xl italic font-medium text-center">
            “ IT’S NOT JUST ABOUT WRITING CODE,<br/>
              IT’S ABOUT THE EXPERIENCE ”
          </p>
        </div>

        {/* RIGHT COLUMN (embedded map) */}
        <div className="rounded-lg overflow-hidden shadow-md h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.265361662902!2d77.57164927503963!3d12.95486421524508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1592715c4e7f%3A0x7dfaf94e52204678!2sBangalore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1745376986155!5m2!1sen!2sin"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="BIT Location"
          />
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-12 text-center">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()}, All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
