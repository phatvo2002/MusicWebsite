import { Box, Grid2, IconButton } from '@mui/material'
import { useEffect, useState } from 'react'
import ThemMoiBaiNhac from './Modal/ThemMoiBaiNhac'
import EditIcon from '@mui/icons-material/Edit'; 
import DeleteIcon from '@mui/icons-material/Delete'; 
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
const BaiNhac = () => {
    const [openModalThemMoiBaiNhac, setOpenModalThemMoiBaiNhac]= useState(false)
    const [selectedId , setSelectedId] = useState([])
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(true)
    const handleOpenModalAddbaiNhac = () => {
      setOpenModalThemMoiBaiNhac(true)
    }
    const handleCloseModalThemMoiBaiNhac = () =>{
      setOpenModalThemMoiBaiNhac(false)
    }
    const columns = [
      {
        field: 'tenBaiNhac',
        headerName: 'Tên bài nhạc',
        flex: 1
      },
      {
        field: 'ngayPhatHanh',
        headerName: 'Ngày phát hành',
        width: 150,
        flex: 1,
        valueGetter: (params) => {
          const date = new Date(params); 
          return `${('0' + date.getDate()).slice(-2)}/${('0' + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`;
        },
      },
      {
        field: 'thoiLuong',
        headerName: 'Thời lượng',
        flex: 1
      },
      {
        field: 'duongDanHinhAnh',
        headerName: 'Hình ảnh',
        sortable: false,
        flex:1,
        renderCell: (params) => (
          <div>
            <img style={{width:"50px", height:"50px" }} src={`https://localhost:7280/api/File/image?path=${params.row.duongDanHinhAnh}`}></img>
          </div>
        ),
      },
      {
        field: 'text',
        headerName: 'Thao tác',
        flex: 1,
        renderCell: (params) => (
          <div>
             <IconButton
                 onClick={async () => {
                  try {
                    const response = await axios({
                      url: `https://localhost:7280/api/File/file`,
                      method: "GET",
                      params: {
                        path: params.row.duongDanFileAmNhac,
                        filename: params.row.tenFile,
                      },
                      responseType: "blob",
                    });
              
                    const blob = new Blob([response.data], { type: "audio/mpeg" });
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement("a");
                    link.href = url;
                    link.setAttribute("download", `${params.row.tenFile}.mp3`);
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
              
                    window.URL.revokeObjectURL(url);
                  } catch (error) {
                    console.error("Error downloading the file", error);
                  }
                }}
           
              variant="contained"
              color="primary"
              size="small"
              style={{ marginRight: 8 }}
            >
              <CloudDownloadIcon />
            </IconButton>
            <IconButton
             // onClick={() => handleEdit(params.row)}
            
              variant="contained"
              color="primary"
              size="small"
              style={{ marginRight: 8 }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
             // onClick={() => handleDelete(params.row.id)}
        
              sx={{backgroundColor: "#f010ae"}}
              size="small"
            >
              <DeleteIcon />
            </IconButton>
          </div>
        ),
      },
    ];

    const getdata = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://localhost:7280/api/BaiNhac/getallbainhac");
        if (response.status == 200) {
          setData(response.data);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
  
  
  
    useEffect(() => {
      if(loading)
      getdata(); // Gọi hàm getdata khi trang load
    }, [loading])

  return (
    <Grid2>
     <IconButton style={{width:"150px" , fontSize:"0.8rem"}} onClick={handleOpenModalAddbaiNhac }>
          Thêm mới bài nhạc
      </IconButton>
      <Box sx={{ height: 400, width: '100%' , marginTop:3}}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5
            },
          },
        }}
        pageSizeOptions={[5, 10, 25]}
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setSelectedId(newRowSelectionModel);
        }}
        rowSelectionModel={selectedId}
        checkboxSelection
      />
    </Box>
      <ThemMoiBaiNhac openModal={openModalThemMoiBaiNhac} handleClose={handleCloseModalThemMoiBaiNhac}/>
    </Grid2>
  )
}

export default BaiNhac