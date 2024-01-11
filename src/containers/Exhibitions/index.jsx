import ArtWorkCard from '../../components/ArtWorkCard';

import styles from './styles.module.css';

const exhibitionsData = [
  {
    id: 83526,
    title: 'Three Studies for Statue of John Locke',
    imageId: 'cdf9edc2-bea3-16e3-d65c-cd4dbb5e2026',
    artistTitle: 'John Michael Rysbrack',
    artistDisplay: 'John Michael Rysbrack\nFlemish, 1693-1770',
    artworkTypeTitle: 'Drawing and Watercolor',
    publicationHistory: null,
    exhibitionHistory: null,
    provenanceText: null,
    creditLine: 'The Leonora Hall Gurley Memorial Collection',
    sourceUpdatedAt: '2023-09-07T09:35:56-05:00',
  },
  {
    id: 95716,
    title: 'Design for a Funerary Monument: Four Draped Mourning Female Figures',
    imageId: '22a7947a-e318-929d-5866-ca21433ed806',
    artistTitle: 'John Michael Rysbrack',
    artistDisplay: 'John Michael Rysbrack\nFlemish, 1693-1770',
    artworkTypeTitle: 'Drawing and Watercolor',
    publicationHistory: null,
    exhibitionHistory: null,
    provenanceText: null,
    creditLine: 'The Leonora Hall Gurley Memorial Collection',
    sourceUpdatedAt: '2023-09-07T09:36:24-05:00',
  },
];

const Exhibitions = () => (
  <div>
    <div className={styles.cardsContainer}>
      {exhibitionsData.map(
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
  </div>
);

export default Exhibitions;
