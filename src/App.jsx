//App.jsx
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router';
import authService from './services/appwrite/auth';
import { login, logout } from './features/auth/authSlice';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ? (
    <div className="min-h-screen">
      <Outlet />
    </div>
  ) : (
    <div className="text-center mt-10 text-xl">Loading...</div>
  );
}

export default App;
