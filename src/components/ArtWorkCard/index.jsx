import PropTypes from 'prop-types';

import styles from './styles.module.css';

const ArtWorkCard = ({
  id,
  title,
  imageId,
  artistTitle,
  artistDisplay,
  artworkTypeTitle,
  publicationHistory,
  exhibitionHistory,
  provenanceText,
  creditLine,
  sourceUpdatedAt,
}) => (
  <div className={styles.container} key={id}>
    <div className={styles.headingInfo}>
      <h5 className={styles.title}>{title}</h5>
      <h5 className={styles.artist}>Artist: {artistTitle || artistDisplay}</h5>
      <h5 className={styles.artworkTypeTitle}>Type: {artworkTypeTitle}</h5>
    </div>
    <img className={styles.image} src={`https://www.artic.edu/iiif/2/${imageId}/full/400,/0/default.jpg`} alt={title} />
    <p className={styles.publicationHistory}>
      {publicationHistory || exhibitionHistory || provenanceText || creditLine}
    </p>
    <p className={styles.source}>
      <i>Source updated at: {new Date(sourceUpdatedAt).toLocaleDateString()}</i>
    </p>
  </div>
);

ArtWorkCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  imageId: PropTypes.string.isRequired,
  artistTitle: PropTypes.string,
  artistDisplay: PropTypes.string.isRequired,
  artworkTypeTitle: PropTypes.string,
  publicationHistory: PropTypes.string,
  exhibitionHistory: PropTypes.string,
  provenanceText: PropTypes.string,
  creditLine: PropTypes.string.isRequired,
  sourceUpdatedAt: PropTypes.string.isRequired,
};

ArtWorkCard.defaultProps = {
  title: null,
  artistTitle: null,
  artworkTypeTitle: null,
  publicationHistory: null,
  exhibitionHistory: null,
  provenanceText: null,
};

export default ArtWorkCard;
