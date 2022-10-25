import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { useAppSelector } from './app/hooks';
import Guest from './components/Guest';
import Profile from './components/Profile';
import { homePage, profilePage } from './utils/constants';

function App() {
  const token = useAppSelector<string | null>(state => state.token)
  return (
    <Routes>
      <Route path={homePage} element={token ? <Navigate to={profilePage} /> : <Guest />} />
      <Route path={profilePage} element={token ? <Profile /> : <Navigate to={homePage} />} />
    </Routes>

  
  );
}

export default App;
