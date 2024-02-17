import {
  Route,
  Navigate,
  createRoutesFromElements,
  createBrowserRouter,
} from 'react-router-dom';

import { MainPage } from 'src/page';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/:slug' element={<MainPage />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </>
  )
);

export default router;
