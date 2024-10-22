import { Routes, Route } from 'react-router-dom';
import Dashboard from './View/RootLayout/Dashboard';
import Administrator from './View/MainComponent/Administrator/Administrator';
import TheLoaiNhac from './View/MainComponent/Administrator/TheLoai/TheLoaiNhac';
import BaiNhac from './View/MainComponent/Administrator/BaiNhac/BaiNhac';
import TamTrang from './View/MainComponent/Administrator/TamTrang/TamTrang';
import NhacSi from './View/MainComponent/Administrator/NhacSI/NhacSi';
import Album from './View/MainComponent/Administrator/Album/Album';
import ChuDe from './View/MainComponent/Administrator/ChuDe/ChuDe';
const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Dashboard />}>
        <Route path="/Administrator" element={<Administrator />} />
        <Route path="/Administrator/TheLoaiNhac" element={<TheLoaiNhac />} />
        <Route path="/Administrator/BaiNhac" element={<BaiNhac />} />
        <Route path="/Administrator/TamTrang" element={<TamTrang />} />
        <Route path="/Administrator/NhacSi" element={<NhacSi />} />
        <Route path="/Administrator/Album" element={<Album />} />
        <Route path="/Administrator/Chude" element={<ChuDe />} />
        {/* Thêm các route con khác */}
       </Route>
      </Routes>
    );
  };
  
  export default AppRoutes;