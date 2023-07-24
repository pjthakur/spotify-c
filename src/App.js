import './App.css';
import Navigation from './wrapper/Navigation';
import Playlist from './wrapper/Playlist';
import { Routes, Route, useLocation } from 'react-router-dom'
import CurrentSong from './components/CurrentSong';
import { useContext } from 'react';
import { AppContext } from './components/Context';
import { AnimatePresence } from 'framer-motion';

function App() {
  const {color} = useContext(AppContext);
  const location = useLocation()
  return (
    <div className="App" style={{background: `linear-gradient(135deg, ${color} 0%, #00000099 100%), #000000`}}>
    <Navigation />
    <AnimatePresence mode='wait'>
    <Routes>
        <Route exact path='/' element={<Playlist value={1} title="For You"/>}>
          <Route path='song/:id' element={<CurrentSong/>}/>
        </Route>
        <Route exact path='/Top Tracks' element={<Playlist value={2} title="Top Tracks"/>}>
          <Route path='song/:id' element={<CurrentSong/>}/>
        </Route>
        <Route exact path='/Favourites' element={<Playlist value={3} title="Favourites"/>}>
          <Route path='song/:id' element={<CurrentSong/>}/>
        </Route>
        <Route exact path='/Recently played' element={<Playlist value={4} title="Recently Played"/>}>
          <Route path='song/:id' element={<CurrentSong/>}/>
        </Route>
    </Routes>
    </AnimatePresence>
    {/* <Current /> */}
    </div>
  );
}

export default App;
