import AppRoutes from './routes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <div>
      {/* Sử dụng routes được import từ file riêng */}
      <ToastContainer />
      <AppRoutes />
    </div>
    </>
  )
}

export default App
