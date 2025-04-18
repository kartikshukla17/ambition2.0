//harshita
//update the tailwind of it  

const SponsorCard = ({ logo, name }) => (
    <div className="rounded-full border border-gray-300 p-4 bg-white shadow-sm w-full flex justify-center items-center">
      <img src={logo} alt={name} className="h-10 object-contain" />
    </div>
  );
  
  export default SponsorCard;
