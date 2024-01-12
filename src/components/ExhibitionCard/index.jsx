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
      <h5 className={styles.title}>{title}</h5>
      <h5>{isFeatured}</h5>
      <h5>{shortDescription}</h5>
      <img
        className={styles.imageId}
        src={`https://www.artic.edu/iiif/2/${imageId}}/full/300,/0/default.jpg`}
        alt={title}
      />
      <h5>{status}</h5>
      <h5>{galleryTitle}</h5>
      <h5>{artWorksTitle}</h5>
      <h5>{sourceUpdatedAt}</h5>
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
