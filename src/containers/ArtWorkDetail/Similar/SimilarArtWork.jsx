import PropTypes from 'prop-types';
import styles from './styles.module.css';

const SimilarArtwork = ({ id, title, imageId, artworkTypeTitle, artistTitle }) => (
  <div className={styles.similarContainer} key={id}>
    <img
      className={styles.similarImage}
      src={`https://www.artic.edu/iiif/2/${imageId}/full/300,/0/default.jpg`}
      alt={title}
    />
    <h6 className={styles.similarTitle}>{title}</h6>
    <h6>
      {artworkTypeTitle} || {artistTitle}
    </h6>
  </div>
);

SimilarArtwork.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  imageId: PropTypes.string.isRequired,
  artworkTypeTitle: PropTypes.string.isRequired,
  artistTitle: PropTypes.string.isRequired,
};

SimilarArtwork.defaultProps = {
  title: null,
};

export default SimilarArtwork;
