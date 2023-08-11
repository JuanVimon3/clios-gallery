import { useState } from 'react';

import Input from '../../components/Input';

import styles from './styles.module.css';

const Home = () => {
  const [titleText, setTitleText] = useState('');
  const [artistText, setArtistText] = useState('');

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
      </div>
    </div>
  );
};

export default Home;
