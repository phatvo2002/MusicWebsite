﻿namespace MUS.Entities.DTO
{
    public class BaiNhacDTO
    {
        public Guid Id { get; set; }
        public string? TenBaiNhac { get; set; }
        public DateTime? NgayPhatHanh { get; set; }
        public string? ThoiLuong { get; set; }
        public int? LuotNghe { get; set; }
        public string? DuongDanHinhAnh { get; set; }
        public string? DuongDanBanner { get; set; }
        public string? DuongDanFileAmNhac { get; set; }
        public decimal? KichThuoc { get; set; }
        public string? TenFile { get; set; }
        public string? LoiBaiHat { get; set; }
    }
}