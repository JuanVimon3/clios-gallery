import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom';

import Home from './containers/Home';
import About from './containers/About';
import ArtWorkDetail, { loader as artWorkLoader } from './containers/ArtWorkDetail';
import NotFound from './containers/NotFound';
import Layout from './components/Layout';
import Exhibitions from './containers/Exhibitions';
import ExhibitionDetail from './containers/ExhibitionDetail';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: '/art-works/:artWorkId',
      element: (
        <Layout>
          <ScrollRestoration />
          <ArtWorkDetail />
        </Layout>
      ),
      loader: artWorkLoader,
    },
    {
      path: '/about/',
      element: (
        <Layout>
          <About />
        </Layout>
      ),
    },
    {
      path: '/exhibitions',
      element: (
        <Layout>
          <Exhibitions />
        </Layout>
      ),
    },
    {
      path: '/exhibitions/:exhibitionId',
      element: (
        <Layout>
          <ExhibitionDetail />
          <ScrollRestoration />
        </Layout>
      ),
    },
    {
      path: '*',
      element: (
        <Layout>
          <NotFound />
        </Layout>
      ),
    },
  ],
  {
    basename: '/clios-gallery',
  },
);

const App = () => <RouterProvider router={router} />;

export default App;
