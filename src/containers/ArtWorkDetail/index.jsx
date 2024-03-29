import { redirect, useLoaderData } from 'react-router-dom';

import ArtWorkCard from '../../components/ArtWorkCard';
import data from '../../data.json';

import styles from './styles.module.css';

export const loader = ({ params }) => {
  const artWork = data.find(({ id }) => id === parseInt(params.artWorkId, 10));
  if (!artWork) {
    return redirect('*');
  }
  return { artWork };
};

const ArtWorkDetail = () => {
  const { artWork } = useLoaderData();
  const similarArtWorks = data
    .filter(({ artworkTypeTitle, id }) => artWork.artworkTypeTitle === artworkTypeTitle && artWork.id !== id)
    .slice(0, 3);
  return (
    <>
      <div>
        <div className={styles.title}>
          <h1>{artWork.title}</h1>
        </div>
        <img
          className={styles.image}
          src={`https://www.artic.edu/iiif/2/${artWork.imageId}/full/1686,/0/default.jpg`}
          alt={artWork.title}
        />
        <div className={styles.text}>
          <h3>
            <div>Artist: {artWork.artistTitle}</div>
            <div>Type: {artWork.artworkTypeTitle}</div>
            <div>{artWork.publicationHistory || artWork.exhibitionHistory || artWork.provenanceText}</div>
            <div>Credit Line: {artWork.creditLine}</div>
            <div>Source Updated At: {new Date(artWork.sourceUpdatedAt).toLocaleDateString()}</div>
          </h3>
        </div>
      </div>
      <div className={styles.subtitles}>
        <h4>Other ArtWorks of {artWork.artworkTypeTitle}</h4>
      </div>
      <div className={styles.similarContainer}>
        {similarArtWorks.map(
          ({
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
            <ArtWorkCard
              key={id}
              id={id}
              title={title}
              imageId={imageId}
              artistTitle={artistTitle}
              artworkTypeTitle={artworkTypeTitle}
              artistDisplay={artistDisplay}
              publicationHistory={publicationHistory}
              exhibitionHistory={exhibitionHistory}
              provenanceText={provenanceText}
              creditLine={creditLine}
              sourceUpdatedAt={sourceUpdatedAt}
            />
          ),
        )}
      </div>
    </>
  );
};

export default ArtWorkDetail;
