import ExhibitionCard from '../../components/ExhibitionCard';

import styles from './styles.module.css';

const exhibitionsData = [
  {
    id: 1,
    title: 'Monalisa',
    isFeatured: true,
    shortDescription: 'briefly description',
    imageId: '4r567i',
    status: 'recent ...',
    galleryTitle: 'Boston Gallery',
    artWorksTitle: 'spanish painting',
    sourceUpdatedAt: '2023-06-09',
  },
]; // Acá se consume la API entonces?

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
