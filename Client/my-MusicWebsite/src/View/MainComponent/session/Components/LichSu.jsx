import { Box, Button, Grid2, Paper, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'

const rows = [
    {
      id: 1,
      songTitle: "Một Đêm Say",
      artist: "Thịnh Suy",
      timestamp: "21:57 - 05/11/2024",
    },
    {
      id: 2,
      songTitle: "CHẠY NGAY ĐI",
      artist: "Sơn Tùng M-TP",
      timestamp: "20:41 - 02/11/2024",
    },
  ];
  
  // Định nghĩa cột
  const columns = [
    {
      field: "songTitle",
      headerName: "Bài Hát",
      flex: 1,
      renderCell: (params) => (
        <Box>
          <Typography variant="body1" fontWeight="bold">
            {params.row.songTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {params.row.artist}
          </Typography>
        </Box>
      ),
    },
    {
      field: "timestamp",
      headerName: "Thời Gian",
      flex: 0.5,
      renderCell: (params) => (
        <Typography variant="body2" color="text.secondary">
          {params.row.timestamp}
        </Typography>
      ),
    },
    {
      field: "actions",
      headerName: "Hành động",
      flex: 0.5,
      renderCell: (params) => (
        <Box display="flex" gap={1}>
          <Button
            variant="text"
            color="error"
            onClick={() => alert(`Xóa bài hát: ${params.row.songTitle}`)}
          >
            Xóa
          </Button>
          <Button
            variant="text"
            color="primary"
            onClick={() => alert(`Chia sẻ bài hát: ${params.row.songTitle}`)}
          >
            Chia sẻ
          </Button>
        </Box>
      ),
    },
  ];
const LichSu = () => {
 

  return (
    <Box sx={{ height: 400, width: "100%" }}>
     <Typography variant="h5" color="text.secondary" padding={1}>
          Lich sử nghe nhạc
     </Typography>
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection={true}
      sx={{
        "& .MuiDataGrid-cell": {
          display: "flex",
          alignItems: "center",
        },
      }}
    />
  </Box>
  )
}

export default LichSu