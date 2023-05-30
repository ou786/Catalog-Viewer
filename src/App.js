import React, { useState, useEffect } from 'react';
import './App.css';

const data = [
  {
    id: 1,
    imageUrl: 'https://e0.pxfuel.com/wallpapers/224/587/desktop-wallpaper-most-beautiful-scenery-amazing-beautiful-scenery.jpg',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    imageUrl: 'https://cioviews.com/wp-content/uploads/2020/12/1-3.jpg',
    details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    imageUrl: 'https://expertphotography.b-cdn.net/wp-content/uploads/2019/05/beautiful-photography-man-sitting-in-front-of-lake.jpg',
    details: 'Quisquam facilis animi assumenda doloremque, veritatis voluptates impedit deleniti culpa officiis earum maxime, non exercitationem illo ipsa.',
  },
  {
    id: 4,
    imageUrl: 'https://images6.fanpop.com/image/photos/38500000/beautiful-wallpaper-1-beautiful-pictures-38538866-2560-1600.jpg',
    details: 'Nemo suscipit molestiae magnam illum dignissimos, repudiandae temporibus necessitatibus veniam velit doloremque excepturi asperiores, rem autem numquam.',
  },
  
  // Add more images as needed
];

const App = () => {
  const [currentImage, setCurrentImage] = useState(data[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isPlaying) {
      intervalId = setInterval(() => {
        const currentIndex = data.findIndex((image) => image.id === currentImage.id);
        const nextIndex = (currentIndex + 1) % data.length;
        setCurrentImage(data[nextIndex]);
      }, 3000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isPlaying, currentImage]);

  const handlePrevious = () => {
    const currentIndex = data.findIndex((image) => image.id === currentImage.id);
    const previousIndex = (currentIndex - 1 + data.length) % data.length;
    setCurrentImage(data[previousIndex]);
  };

  const handleNext = () => {
    const currentIndex = data.findIndex((image) => image.id === currentImage.id);
    const nextIndex = (currentIndex + 1) % data.length;
    setCurrentImage(data[nextIndex]);
  };

  const handleThumbnailClick = (image) => {
    setCurrentImage(image);
  };

  const handleSlideshowToggle = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="app">
      <div className="carousel">
        <img className="carousel-image" src={currentImage.imageUrl} alt="Product" />
        <div className="carousel-details">
          <p>{currentImage.details}</p>
        </div>
        <div className="carousel-controls">
          <button onClick={handlePrevious}>&lt; Previous</button>
          <button onClick={handleNext}>Next &gt;</button>
          <button onClick={handleSlideshowToggle}>
            {isPlaying ? 'Pause' : 'Play'} Slideshow
          </button>
        </div>
      </div>
      <div className="thumbnails">
        {data.map((image) => (
          <img
            key={image.id}
            className={`thumbnail ${currentImage.id === image.id ? 'highlighted' : ''}`}
            src={image.imageUrl}
            alt="Thumbnail"
            onClick={() => handleThumbnailClick(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
