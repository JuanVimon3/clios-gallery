import { useState } from 'react';

import Input from '../../components/Input';

import styles from './styles.module.css';
import Dropdown from '../../components/Dropdown';

const Home = () => {
  const [titleText, setTitleText] = useState('');
  const [artistText, setArtistText] = useState('');
  const [artworkTypeText, setArtworkTypeText] = useState('');

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
      </div>
    </div>
  );
};

export default Home;
