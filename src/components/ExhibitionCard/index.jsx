import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

const ExhibitionCard = ({
  id,
  title,
  isFeatured,
  shortDescription,
  imageId,
  status,
  galleryTitle,
  artWorksTitle,
  sourceUpdatedAt,
}) => (
  <div className={styles.container}>
    <Link to="/exhibitions/:exhibitionsId" key={id}>
      <h5 className={styles.title}>Title: {title}</h5>
      <h5>Fetured: {isFeatured}</h5>
      <h5>Description: {shortDescription}</h5>
      <img className={styles.imageId} src={`https://api.artic.edu/api/v1/exhibitions/${imageId}`} alt={title} />
      <h5>Status: {status}</h5>
      <h5>Gallery: {galleryTitle}</h5>
      <h5>Art Work: {artWorksTitle}</h5>
      <h5>Last update: {sourceUpdatedAt}</h5>
    </Link>
  </div>
);

ExhibitionCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  isFeatured: PropTypes.bool,
  shortDescription: PropTypes.string,
  imageId: PropTypes.string,
  status: PropTypes.string,
  galleryTitle: PropTypes.number,
  artWorksTitle: PropTypes.string,
  sourceUpdatedAt: PropTypes.string.isRequired,
};

ExhibitionCard.defaultProps = {
  title: null,
  isFeatured: null,
  shortDescription: null,
  imageId: null,
  status: null,
  galleryTitle: null,
  artWorksTitle: null,
};

export default ExhibitionCard;
