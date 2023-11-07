import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Header from './components/Header';
import Home from './containers/Home';
import About from './containers/About';
import ArtWorkDetail, { loader as artWorkLoader } from './containers/ArtWorkDetail';
import Footer from './components/Footer';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/art-works/:artWorkId',
      element: <ArtWorkDetail />,
      loader: artWorkLoader,
    },
    {
      path: '/about/',
      element: <About />,
    },
  ],
  {
    basename: '/clios-gallery',
  },
);

const App = () => (
  <div>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </div>
);

export default App;
