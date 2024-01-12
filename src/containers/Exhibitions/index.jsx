import ExhibitionCard from '../../components/ExhibitionCard';

import styles from './styles.module.css';

const exhibitionsData = () => {}; // Acá se consume la API entonces?

const Exhibitions = () => (
  <div>
    <div className={styles.cardsContainer}>
      {exhibitionsData.map(
        ({
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
          <ExhibitionCard
            key={id}
            id={id}
            title={title}
            isFeatured={isFeatured}
            shortDescription={shortDescription}
            imageId={imageId}
            status={status}
            galleryTitle={galleryTitle}
            artWorksTitle={artWorksTitle}
            sourceUpdatedAt={sourceUpdatedAt}
          />
        ),
      )}
    </div>
  </div>
);

export default Exhibitions;
