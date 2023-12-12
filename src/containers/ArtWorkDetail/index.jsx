import { useLoaderData, Link } from 'react-router-dom';

import data from '../../data.json';

import styles from './styles.module.css';
import SimilarArtwork from './Similar/SimilarArtWork';

export const loader = ({ params }) => {
  const artWork = data.find(({ id }) => id === parseInt(params.artWorkId, 10));
  return { artWork };
};

const ArtWorkDetail = () => {
  const { artWork } = useLoaderData();
  const similarArtWorks = data
    .filter(({ artworkTypeTitle, id }) => artWork.artworkTypeTitle === artworkTypeTitle && artWork.id !== id)
    .slice(0, 3);
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.title}>{artWork.title}</div>
        <img
          className={styles.image}
          src={`https://www.artic.edu/iiif/2/${artWork.imageId}/full/843,/0/default.jpg`}
          alt={artWork.title}
        />
        <div className={styles.text}>
          <div>Artist: {artWork.artistTitle}</div>
          <div>Type: {artWork.artworkTypeTitle}</div>
          <div>
            Pubication History: {artWork.publicationHistory || artWork.exhibitionHistory || artWork.provenanceText}
          </div>
          <div>Credit Line: {artWork.creditLine}</div>
          <div>Source Updated At: {artWork.sourceUpdatedAt}</div>
        </div>
      </div>
      <div className={styles.similarContainer}>
        {console.log(similarArtWorks)}
        {similarArtWorks.map(({ id, title, imageId, artworkTypeTitle, artistTitle }) => (
          <Link to={`/art-works/${id}`} key={id}>
            <SimilarArtwork
              title={title}
              imageId={imageId}
              artistTitle={artistTitle}
              artworkTypeTitle={artworkTypeTitle}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default ArtWorkDetail;
