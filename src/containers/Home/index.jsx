import { useState } from 'react';

import Input from '../../components/Input';
import styles from './styles.module.css';
import Dropdown from '../../components/Dropdown';

const Home = () => {
  const [titleText, setTitleText] = useState('');
  const [artistText, setArtistText] = useState('');
  const [artworkTypeText, setArtworkTypeText] = useState('');
  const [sourceFromDate, setSourceFromDate] = useState('');
  const [sourceToDate, setSourceToDate] = useState('');

  return (
    <div>
      <div className={styles.filtersContainer}>
        <div className={styles.inputContainer}>
          <Input
            value={titleText}
            onChangeValue={(e) => setTitleText(e.target.value)}
            labelText="Title:"
            placeholder="Mona Lisa"
          />
        </div>
        <div className={styles.inputContainer}>
          <Input
            value={artistText}
            onChangeValue={(e) => setArtistText(e.target.value)}
            labelText="Artist:"
            placeholder="Leonardo da Vinci"
          />
        </div>
        <div className={styles.dropdownContainer}>
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
        <div className={styles.sourceFromDateContainer}>
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
        <div className={styles.sourceToDateContainer}>
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
      </div>
    </div>
  );
};

export default Home;
