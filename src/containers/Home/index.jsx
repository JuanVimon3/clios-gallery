import { useState } from 'react';

import Input from '../../components/Input';

const Home = () => {
  const [titleText, setTitleText] = useState('');
  const [artistText, setArtistText] = useState('');

  return (
    <div>
      <div className="container">Home Container</div>
      <Input
        value={titleText}
        onChangeValue={(e) => setTitleText(e.target.value)}
        labelText="Title:"
        backText="Mona Lisa"
      />
      <Input
        value={artistText}
        onChangeValue={(e) => setArtistText(e.target.value)}
        labelText="Artist:"
        backText="Leonardo da Vinci"
      />
    </div>
  );
};

export default Home;
