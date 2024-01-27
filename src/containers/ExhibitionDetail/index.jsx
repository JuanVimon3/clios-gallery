import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import styles from './styles.module.css';

const axiosInstance = axios.create({ baseURL: 'https://api.artic.edu/api/v1' });

const ExhibitionDetail = () => {
  const [exhibition, setExhibition] = useState({});
  const { exhibitionId } = useParams();
  useEffect(() => {
    const getExhibition = async () => {
      const response = await axiosInstance.get(`/exhibitions/${exhibitionId}`);
      setExhibition({
        id: response.data.data.id,
        title: response.data.data.title,
        shortDescription: response.data.data.short_description,
        imageId: response.data.data.image_id,
        imageUrl: response.data.data.image_url,
        artWorks: response.data.data.artwork_titles,
        status: response.data.data.status,
        galleryTitle: response.data.data.gallery_title,
        startAt: response.data.data.aic_start_at,
        endAt: response.data.data.aic_end_at,
      });
    };
    getExhibition();
  }, []);

  let imageSrc = `${process.env.PUBLIC_URL}/noImage.jpg`;
  if (exhibition.imageUrl) {
    imageSrc = exhibition.imageUrl;
  } else if (exhibition.imageId) {
    imageSrc = `https://www.artic.edu/iiif/2/${exhibition.imageId}/full/300,/0/default.jpg`;
  }

  return (
    <div>
      <h1 className={styles.title}>{exhibition.title}</h1>
      <img className={styles.image} src={imageSrc} alt={exhibition.title} />
      <div className={styles.text}>
        <h2>Status: {exhibition.status}</h2>
        <h2>Description: {exhibition.shortDescription}</h2>
        <h2>Gallery: {exhibition.galleryTitle}</h2>
        <h2>Art Works: {exhibition.artWorks}</h2>
        <h3>Start At: {exhibition.startAt}</h3>
        <h3>End At: {exhibition.endAt}</h3>
      </div>
    </div>
  );
};

export default ExhibitionDetail;
