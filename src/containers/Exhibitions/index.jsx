import { useState, useEffect } from 'react';
import axios from 'axios';

import ExhibitionCard from '../../components/ExhibitionCard';

import styles from './styles.module.css';

const axiosInstance = axios.create({ baseURL: 'https://api.artic.edu/api/v1' });

const Exhibitions = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getExhibitions = async () => {
      const response = await axiosInstance.get('/exhibitions', { params: { limit: 30 } });
      setData(
        response.data.data.map(
          ({
            id,
            title,
            short_description: shortDescription,
            image_id: imageId,
            image_url: imageUrl,
            status,
            gallery_title: galleryTitle,
            aic_start_at: startAt,
            aic_end_at: endAt,
          }) => ({
            id,
            title,
            shortDescription,
            imageId,
            imageUrl,
            status,
            galleryTitle,
            startAt,
            endAt,
          }),
        ),
      );
    };
    getExhibitions();
  }, []);

  return (
    <div>
      <div className={styles.cardsContainer}>
        {data.map(({ id, title, shortDescription, imageId, imageUrl, status, galleryTitle, startAt, endAt }) => (
          <ExhibitionCard
            key={id}
            id={id}
            title={title}
            shortDescription={shortDescription}
            imageId={imageId}
            imageUrl={imageUrl}
            status={status}
            galleryTitle={galleryTitle}
            startAt={startAt}
            endAt={endAt}
          />
        ))}
      </div>
    </div>
  );
};

export default Exhibitions;
