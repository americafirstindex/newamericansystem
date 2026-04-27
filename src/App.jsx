import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Mission from './pages/Mission/Mission';
import EndorsedMap from './pages/EndorsedMap/EndorsedMap';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/endorsed-map" element={<EndorsedMap />} />
      </Routes>
    </BrowserRouter>
  );
}
