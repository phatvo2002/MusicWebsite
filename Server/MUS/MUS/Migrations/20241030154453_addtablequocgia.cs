using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MUS.Migrations
{
    /// <inheritdoc />
    public partial class addtablequocgia : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "QuocGiaId",
                table: "BaiNhac",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "QuocGia",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenQuocGia = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_QuocGia", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BaiNhac_QuocGiaId",
                table: "BaiNhac",
                column: "QuocGiaId");

            migrationBuilder.AddForeignKey(
                name: "FK_QuocGia_BaiNhac",
                table: "BaiNhac",
                column: "QuocGiaId",
                principalTable: "QuocGia",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_QuocGia_BaiNhac",
                table: "BaiNhac");

            migrationBuilder.DropTable(
                name: "QuocGia");

            migrationBuilder.DropIndex(
                name: "IX_BaiNhac_QuocGiaId",
                table: "BaiNhac");

            migrationBuilder.DropColumn(
                name: "QuocGiaId",
                table: "BaiNhac");
        }
    }
}
