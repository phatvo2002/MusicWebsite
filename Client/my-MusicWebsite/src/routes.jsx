import { Routes, Route } from 'react-router-dom';
import Dashboard from './View/RootLayout/Dashboard';
const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    );
  };
  
  export default AppRoutes;