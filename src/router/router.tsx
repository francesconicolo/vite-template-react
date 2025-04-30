import { BrowserRouter, Routes, Route, Outlet } from 'react-router';

import Layout from '@/pages/Layout';
import Home from '@/pages/home/Home';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route path="/" element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
