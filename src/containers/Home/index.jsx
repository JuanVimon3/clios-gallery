import { useState } from 'react';

import Input from '../../components/Input';
import Dropdown from '../../components/Dropdown';
import ArtWorkCard from '../../components/ArtWorkCard';
import data from '../../data.json';

import styles from './styles.module.css';

const Home = () => {
  const [titleText, setTitleText] = useState('');
  const [artistText, setArtistText] = useState('');
  const [artworkTypeText, setArtworkTypeText] = useState('');
  const [sourceFromDate, setSourceFromDate] = useState('');
  const [sourceToDate, setSourceToDate] = useState('');

  return (
    <div>
      <div className={styles.filtersContainer}>
        <div>
          <Input
            value={titleText}
            onChangeValue={(e) => setTitleText(e.target.value)}
            labelText="Title:"
            placeholder="Mona Lisa"
          />
        </div>
        <div>
          <Input
            value={artistText}
            onChangeValue={(e) => setArtistText(e.target.value)}
            labelText="Artist:"
            placeholder="Leonardo da Vinci"
          />
        </div>
        <div>
          <Dropdown
            value={artworkTypeText}
            onChangeValue={(e) => setArtworkTypeText(e.target.value)}
            labelText="Artwork Type:"
            placeholder="Painting"
            options={[
              { name: 'Oil', value: 'Oil' },
              { name: 'Sculpture', value: 'Sculpture' },
            ]}
          />
        </div>
        <div>
          <Input
            value={sourceFromDate}
            onChangeValue={(e) => setSourceFromDate(e.target.value)}
            labelText="Source updated from:"
            placeholder="07/17/2023"
            type="text"
            onFocus={(e) => {
              e.target.type = 'date';
            }}
            onBlur={(e) => {
              if (!sourceFromDate) {
                e.target.type = 'text';
              }
            }}
          />
        </div>
        <div>
          <Input
            value={sourceToDate}
            onChangeValue={(e) => setSourceToDate(e.target.value)}
            labelText="Source updated to:"
            placeholder="07/17/2023"
            type="text"
            onFocus={(e) => {
              e.target.type = 'date';
            }}
            onBlur={(e) => {
              if (!sourceToDate) {
                e.target.type = 'text';
              }
            }}
          />
        </div>
        <div />
      </div>
      <div className={styles.cardsContainer}>
        {data.map(
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
              id={id}
              key={id}
              title={title}
              imageId={imageId}
              artistTitle={artistTitle}
              artistDisplay={artistDisplay}
              artworkTypeTitle={artworkTypeTitle}
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
};

export default Home;
