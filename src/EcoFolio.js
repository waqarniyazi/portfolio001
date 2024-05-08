import React from "react";
import "./styles.css"; // Import your CSS file for styling
import image1 from './images/10.png'
import image2 from './images/20.png'
import image3 from './images/30.png'
import image4 from './images/40.png'
import image5 from './images/50.png'
import image6 from './images/60.png'
import image7 from './images/70.png' 
// import image8 from './images/80.png'

const EcoFolio = () => {
  // Array of image URLs (replace with your image URLs)
  const imageUrls = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    // image8
  ];

  return (
    // <div className="image-collage">
    //     <h1>EcoFolio | MERN Stack | ReactJS | EcoFolio</h1>
    //   {imageUrls.map((imageUrl, index) => (
    //     <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
    //   ))}
    // </div>
    <div className="image-collage">
    <h1>  MERN Stack | ReactJS <a style={{textDecoration: 'underline'}}href="https://ecofolio.vercel.app/" target="_blank" rel="noopener noreferrer" >Visit EcoFolio</a></h1>
  {imageUrls.map((imageUrl, index) => (
    <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
  ))}
</div>
  );
};

export default EcoFolio;
