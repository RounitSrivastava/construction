// ./src/pages/Gallery.jsx
import React from 'react';
import styles from './Gallery.module.css'; // Import the CSS module

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/2092517/pexels-photo-2092517.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Urban Construction'
  },
  {
    src: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Site Planning'
  },
  {
    src: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Bridge Framework'
  },
  {
    src: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Modern Housing'
  },
  {
    src: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Team Collaboration'
  },
  {
    src: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Crane Setup'
  }
];

export default function Gallery() {
  return (
    <div className={styles.galleryPage}> {/* Use global class names directly */}
      <div className={styles.galleryContainer}>
        <div className={styles.headerSection}>
          <h1 className={styles.galleryTitle}>Gallery</h1>
          <p className={styles.galleryDescription}>
            A visual tour of our recent construction milestones and architectural excellence.
          </p>
        </div>

        <div className={styles.imageGrid}>
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={styles.galleryItem}
            >
              {/* This 'imageWrapper' implements the 1:1 aspect ratio using padding-bottom */}
              <div className={styles.imageWrapper}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className={styles.galleryImage}
                />
              </div>
              <div className={styles.imageDescription}>
                <p>{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
