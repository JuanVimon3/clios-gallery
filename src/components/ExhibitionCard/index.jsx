import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

const ExhibitionCard = ({ id, title, shortDescription, imageId, imageUrl, status, galleryTitle, startAt, endAt }) => {
  let imageSrc = `${process.env.PUBLIC_URL}/noImage.jpg`;
  if (imageUrl) {
    imageSrc = imageUrl;
  } else if (imageId) {
    imageSrc = `https://www.artic.edu/iiif/2/${imageId}/full/300,/0/default.jpg`;
  }

  return (
    <div className={styles.container}>
      <Link to={`/exhibitions/${id}`}>
        <h5 className={styles.title}>Title: {title}</h5>
        <h5 className={styles.description}>{shortDescription}</h5>
        <img className={styles.imageId} src={imageSrc} alt={title} />
        <h5 className={styles.status}>Status: {status}</h5>
        <h5 className={styles.gallery}>Gallery: {galleryTitle}</h5>
        <h5 className={styles.start}>Start at: {new Date(startAt).toLocaleDateString()}</h5>
        <h5 className={styles.end}>End at: {new Date(endAt).toLocaleDateString()}</h5>
      </Link>
    </div>
  );
};

ExhibitionCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  shortDescription: PropTypes.string,
  imageId: PropTypes.string,
  imageUrl: PropTypes.string,
  status: PropTypes.string,
  galleryTitle: PropTypes.string,
  startAt: PropTypes.string,
  endAt: PropTypes.string,
};

ExhibitionCard.defaultProps = {
  shortDescription: null,
  imageId: null,
  imageUrl: null,
  status: null,
  galleryTitle: null,
  startAt: null,
  endAt: null,
};

export default ExhibitionCard;
