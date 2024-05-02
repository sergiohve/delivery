import { useEffect, useState } from 'react';
import Header from './components/Header/header';
import Navigation from './components/SideNavigation/navigation';
import RoutesPath from './routes';

function App() {
  const [url, setUrl] = useState()
  useEffect(() => {
    setUrl(window.location.pathname)
  }, [url])
  return (
    <div className="w-[100%]">
      <Header url={url} setUrl={setUrl} />
      <Navigation url={url} setUrl={setUrl} />
      <div className="lg:ml-[140px] sm:ml-[0px] lg:pt-[30px]">
        <RoutesPath />
      </div>
    </div>
  );
}

export default App;
