import { useState } from 'react';

import Input from '../../components/Input';

export default function Home() {
  const [titleText, setTitleText] = useState('');
  const [artistText, setArtistText] = useState('');

  return (
    <div>
      <div>Home Container</div>
      <Input value={titleText} onChangeValue={(e) => setTitleText(e.target.value)} />
      <Input value={artistText} onChangeValue={(e) => setArtistText(e.target.value)} />
    </div>
  );
}
