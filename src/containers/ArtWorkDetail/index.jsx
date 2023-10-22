import { useLoaderData } from 'react-router-dom';

import data from '../../data.json';

export const loader = ({ params }) => {
  const artWork = data.find(({ id }) => id === parseInt(params.artWorkId, 10));
  return { artWork };
};

const ArtWorkDetail = () => {
  const { artWork } = useLoaderData();
  return (
    <div>
      <div>Art Work Detail</div>
      <div>Title: {artWork.title}</div>
      <div>Artist: {artWork.artistTitle}</div>
    </div>
  );
};

export default ArtWorkDetail;
