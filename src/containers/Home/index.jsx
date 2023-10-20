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

  const filteredData = data.filter(({ title, artistTitle, artistDisplay, artworkTypeTitle, sourceUpdatedAt }) => {
    if (titleText && !title.toLowerCase().includes(titleText.toLowerCase())) {
      return false;
    }
    const artistTitleShown = artistTitle || artistDisplay;
    if (artistText && !artistTitleShown.toLowerCase().includes(artistText.toLowerCase())) {
      return false;
    }
    if (artworkTypeText && artworkTypeText !== artworkTypeTitle) {
      return false;
    }
    if (sourceFromDate && sourceFromDate > sourceUpdatedAt) {
      return false;
    }
    if (sourceToDate && sourceToDate < sourceUpdatedAt) {
      return false;
    }

    return true;
  });

  const artWorkTypeOptions = data.reduce(
    (acc, { artworkTypeTitle }) => {
      const doesElementExist = acc.find(({ value }) => value === artworkTypeTitle);
      if (doesElementExist) {
        return acc;
      }
      return [...acc, { value: artworkTypeTitle, name: artworkTypeTitle }];
    },
    [{ value: '', name: 'All' }],
  );

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
            options={artWorkTypeOptions}
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
        {filteredData.map(
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
