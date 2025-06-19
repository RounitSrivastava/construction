import React from 'react';
import styles from './Gallery.module.css';

// Importing local images
import urban from '../assets/IMG_20240531_170734449_HDR_AE.jpg';
import site from '../assets/IMG_20240618_154134035_HDR_AE.jpg';
import bridge from '../assets/IMG_20240521_144639146_HDR_AE.jpg';
import housing from '../assets/IMG_20240706_170042943_HDR_AE.jpg';
import team from '../assets/WhatsApp Image 2025-06-19 at 11.59.48_9e1f7dec.jpg';
import crane from '../assets/WhatsApp Image 2025-06-19 at 11.59.49_70bd67c6.jpg';
import cran from '../assets/WhatsApp Image 2025-06-19 at 11.59.49_a4747011.jpg';
import cra from '../assets/WhatsApp Image 2025-06-19 at 11.59.50_94c7e0e6.jpg';
import cr from '../assets/IMG_20240506_101206342_HDR_AE.jpg';
import c from '../assets/IMG_20240716_205148693.jpg';

const galleryImages = [
  { src: urban, alt: 'Urban Construction' },
  { src: site, alt: 'Site Planning' },
  { src: bridge, alt: 'Bridge Framework' },
  { src: housing, alt: 'Modern Housing' },
  { src: team, alt: 'Team Collaboration' },
  { src: crane, alt: 'Crane Setup 1' },
  { src: cran, alt: 'Crane Setup 2' },
  { src: cra, alt: 'Crane Setup 3' },
  { src: cr, alt: 'Crane Setup 4' },
  { src: c, alt: 'Crane Setup 5' }
];

export default function Gallery() {
  return (
    <div className={styles.galleryPage}>
      <div className={styles.galleryContainer}>
        <div className={styles.headerSection}>
          <h1 className={styles.galleryTitle}>Gallery</h1>
          <p className={styles.galleryDescription}>
            A visual tour of our recent construction milestones and architectural excellence.
          </p>
        </div>

        <div className={styles.imageGrid}>
          {galleryImages.map((image, index) => (
            <div key={index} className={styles.galleryItem}>
              <div className={styles.imageWrapper}>
                <img src={image.src} alt={image.alt} className={styles.galleryImage} />
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
