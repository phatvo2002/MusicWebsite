import { Routes, Route } from 'react-router-dom';
import Dashboard from './View/RootLayout/Dashboard';
import Administrator from './View/MainComponent/Administrator/Administrator';
import TheLoaiNhac from './View/MainComponent/Administrator/TheLoai/TheLoaiNhac';
const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Dashboard />}>
        <Route path="/Administrator" element={<Administrator />} />
        <Route path="/Administrator/TheLoaiNhac" element={<TheLoaiNhac />} />
        {/* Thêm các route con khác */}
       </Route>
      </Routes>
    );
  };
  
  export default AppRoutes;