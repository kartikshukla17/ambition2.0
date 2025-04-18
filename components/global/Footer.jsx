//abhinav
//ek side address daal diyo ek side map jo embed kiya! 

import MapEmbed from "../elements/MapEmbed";


const Footer = () => {
    return (
      <footer className="bg-black text-white py-10 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-2">ambition 🚀</h3>
          <p className="text-sm text-gray-400 mb-4">All queries answered. See you at the event!</p>
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} ambition. All rights reserved.</p>
          <MapEmbed />
        </div>
      </footer>
    );
  };
  
  export default Footer;
  

  