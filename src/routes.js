import React from 'react'
import Home from './pages/Home';
import LocalDining from './pages/LocalDining';
import Charts from './pages/Charts';
import { Route, Routes } from 'react-router-dom';
import GridView from './pages/GridView';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
import PageNotFound from './pages/PageNotFound';

function RoutesPath() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dining' element={<LocalDining />} />
      <Route path='/charts' element={<Charts />} />
      <Route path='/grid-view' element={<GridView />} />
      <Route path='/notifications' element={<Notifications />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default RoutesPath
