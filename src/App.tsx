import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewGame from './pages/NewGame';
import GamePlay from './pages/GamePlay';
import GameDetail from './pages/GameDetail';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewGame />} />
      <Route path="/play" element={<GamePlay />} />
      <Route path="/history/:id" element={<GameDetail />} />
    </Routes>
  );
}
