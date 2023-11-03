import { useLoaderData } from 'react-router-dom';

import data from '../../data.json';

import styles from './styles.module.css';

export const loader = ({ params }) => {
  const artWork = data.find(({ id }) => id === parseInt(params.artWorkId, 10));
  return { artWork };
};

const ArtWorkDetail = () => {
  const { artWork } = useLoaderData();
  return (
    <div>
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
  );
};

export default ArtWorkDetail;
