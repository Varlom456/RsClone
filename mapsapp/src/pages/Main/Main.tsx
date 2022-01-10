import * as React from 'react';
import DrawerMenu from './components/DrawerMenu';
import MapboxMap from './components/Map';


const Main: React.FC = () => {
  return (

    <div className='main-page'>
      <aside className='aside-menu'>
        <DrawerMenu />
        <div>Hi there!</div>
      </aside>
      <MapboxMap />
    </div>
  );
};

export default Main;
