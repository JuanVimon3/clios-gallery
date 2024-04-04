import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Skeleton } from '@mui/material';

import axiosInstance from '../../axiosInstance';

import styles from './styles.module.css';

const ExhibitionDetail = () => {
  const [exhibition, setExhibition] = useState({});
  const { exhibitionId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getExhibition = async () => {
      setLoading(true);
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
      setLoading(false);
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
      {loading ? (
        <Skeleton animation="wave" variant="rectangle">
          <ExhibitionDetail />
        </Skeleton>
      ) : (
        <>
          <h1 className={styles.title}>{exhibition.title}</h1>
          <img className={styles.image} src={imageSrc} alt={exhibition.title} />
          <div className={styles.text}>
            <h2>
              <div>Status: {exhibition.status}</div>
              <div>Description: {exhibition.shortDescription}</div>
              <div>Gallery: {exhibition.galleryTitle}</div>
              <div>Art Works: {exhibition.artWorks}</div>
            </h2>
            <h3>
              <div>Start At: {exhibition.startAt}</div>
              <div>End At: {exhibition.endAt}</div>
            </h3>
          </div>
        </>
      )}
    </div>
  );
};

export default ExhibitionDetail;
