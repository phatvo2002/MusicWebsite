import { Routes, Route } from 'react-router-dom';
import Dashboard from './View/RootLayout/Dashboard';
import Administrator from './View/MainComponent/Administrator/Administrator';
import TheLoaiNhac from './View/MainComponent/Administrator/TheLoai/TheLoaiNhac';
import BaiNhac from './View/MainComponent/Administrator/BaiNhac/BaiNhac';
import TamTrang from './View/MainComponent/Administrator/TamTrang/TamTrang';
import NhacSi from './View/MainComponent/Administrator/NhacSI/NhacSi';
import Album from './View/MainComponent/Administrator/Album/Album';
import ChuDe from './View/MainComponent/Administrator/ChuDe/ChuDe';
import Login from './View/MainComponent/session/Login';
import Register from './View/MainComponent/session/Register';
import Profile from './View/MainComponent/session/Profile';
import Trangchu from './View/MainComponent/TrangChu/Trangchu';
import Detail from './View/MainComponent/Detail/Detail';
import KhamPha from './View/MainComponent/KhamPha/KhamPha';
const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Dashboard />}>
         <Route path="/Login" element={<Login/>} />
         <Route path="/Register" element={<Register/>} />
         <Route path="/Profile" element={<Profile/>} />
        <Route path="/Administrator" element={<Administrator />} />
        <Route path="/Administrator/TheLoaiNhac" element={<TheLoaiNhac />} />
        <Route path="/Administrator/BaiNhac" element={<BaiNhac />} />
        <Route path="/Administrator/TamTrang" element={<TamTrang />} />
        <Route path="/Administrator/NhacSi" element={<NhacSi />} />
        <Route path="/Administrator/Album" element={<Album />} />
        <Route path="/Administrator/Chude" element={<ChuDe />} />
        <Route path="/Trangchu" element={<Trangchu/>} />
        <Route path="/bainhac/:tenbainhac/:id"  element={<Detail/>} />
        <Route path="/KhamPha" element={<KhamPha/>} />
        {/* Thêm các route con khác */}
       </Route>
      </Routes>
    );
  };
  
  export default AppRoutes;