import { useState } from 'react';

import Input from '../../components/Input';
// import Header from '../../components/Header';
import Dropdown from '../../components/Dropdown';
import Menu from '../../components/Menu/menu';

import styles from './styles.module.css';

const Home = () => {
  const [titleText, setTitleText] = useState('');
  const [artistText, setArtistText] = useState('');
  const [artworkTypeText, setArtworkTypeText] = useState('');
  const [sourceFromDate, setSourceFromDate] = useState('');
  const [sourceToDate, setSourceToDate] = useState('');
  const [buttonText, setButtonText] = useState('');

  return (
    <div>
      <div className={styles.filtersContainer}>
        <header className={styles.headerContainer}>Art Institute of Chicago</header>
        <div className={styles.menuContainer}>
          <Menu value={buttonText} onChangeValue={(e) => setButtonText(e.target.value)} button1="Home" />
          <Menu value={buttonText} onChangeValue={(e) => setButtonText(e.target.value)} button2="About" />
        </div>
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
    </div>
  );
};

export default Home;
