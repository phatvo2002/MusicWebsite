namespace MUS.Entities
{
    public class User
    {
        public Guid Id { get; set; }

        public string? TenNguoiDung { get; set; }

        public string? SoDienThoai { get; set; }

        public string? Email { get; set; }

        public string? Password { get; set; }

        public Guid? RoleId { get; set; }

       public virtual Role? Role { get; set; }
    }
}
