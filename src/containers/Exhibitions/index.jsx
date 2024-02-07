import { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';

import ExhibitionCard from '../../components/ExhibitionCard';
import axiosInstance from '../../axiosInstance';

import styles from './styles.module.css';

const Exhibitions = () => {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getExhibitions = async () => {
      const response = await axiosInstance.get('/exhibitions', { params: { limit: 9, page: currentPage } });
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
      setTotalPages(response.data.pagination.total_pages);
    };
    getExhibitions();
  }, [currentPage]);

  const handleChangePage = (event, page) => {
    setCurrentPage(page);
  };

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
      <Box display="flex" justifyContent="center" paddingY={3}>
        <Pagination count={totalPages} color="primary" onChange={handleChangePage} />
      </Box>
    </div>
  );
};

export default Exhibitions;
