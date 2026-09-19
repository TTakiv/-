import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewGame from './pages/NewGame';
import GamePlay from './pages/GamePlay';
import GameDetail from './pages/GameDetail';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewGame />} />
      <Route path="/play" element={<GamePlay />} />
      <Route path="/history/:id" element={<GameDetail />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
