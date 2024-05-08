import React from "react";
import "./styles.css"; // Import your CSS file for styling
import image1 from './images/1.jpeg'
import image2 from './images/2.jpeg'
import image3 from './images/3.jpeg'
import image4 from './images/4.jpeg'
import image5 from './images/5.jpeg'
import image6 from './images/6.jpeg'
import image7 from './images/7.jpeg' 
import image8 from './images/8.jpeg'

const ImageCollage = () => {
  // Array of image URLs (replace with your image URLs)
  const imageUrls = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8
  ];

  return (
    <div className="image-collage">
        <h1>TruthWuth | Wordpress | Mobile-Focused</h1>
      {imageUrls.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default ImageCollage;
