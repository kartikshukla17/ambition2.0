//sinchana
//make the style like in figma design bgcolor and shadow 
//make the card flexible enough to add component for sponsor type section also


const Card = ({ children, className = "" }) => {
    return (
      <div className={`bg-white rounded-2xl shadow-md p-6 ${className}`}>
        {children}
      </div>
    );
  };
  
  export default Card;
  
  