﻿namespace MUS.Entities.DTO
{
    public class DanhSachPhatDTO
    {
        public Guid Id { get; set; }

        public string? TenDanhSachPhat { get; set; }

        public Guid? UserId { get; set; }

        public DateTime NgayPhatHanh { get; set; }
    }
}