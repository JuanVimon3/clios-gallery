import PropTypes from 'prop-types';

import styles from './styles.module.css';

const ExhibitionCard = ({ title, shortDescription, imageId, imageUrl, status, galleryTitle, startAt, endAt }) => {
  let imageSrc = `${process.env.PUBLIC_URL}/noImage.jpg`;
  if (imageUrl) {
    imageSrc = imageUrl;
  } else if (imageId) {
    imageSrc = `https://www.artic.edu/iiif/2/${imageId}/full/300,/0/default.jpg`;
  }

  return (
    <div className={styles.container}>
      <h5 className={styles.title}>Title: {title}</h5>
      <h5 className={styles.description}>Description: {shortDescription}</h5>
      <img className={styles.imageId} src={imageSrc} alt={title} />
      <h5>Status: {status}</h5>
      <h5>Gallery: {galleryTitle}</h5>
      <h5>Start at: {new Date(startAt).toLocaleDateString()}</h5>
      <h5>End at: {new Date(endAt).toLocaleDateString()}</h5>
    </div>
  );
};

ExhibitionCard.propTypes = {
  title: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  imageId: PropTypes.string,
  imageUrl: PropTypes.string,
  status: PropTypes.string,
  galleryTitle: PropTypes.string,
  startAt: PropTypes.string,
  endAt: PropTypes.string,
};

ExhibitionCard.defaultProps = {
  imageId: null,
  imageUrl: null,
  status: null,
  galleryTitle: null,
  startAt: null,
  endAt: null,
};

export default ExhibitionCard;
