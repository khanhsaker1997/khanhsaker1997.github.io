---
layout: single
title:  "CÁC CÂU LỆNH SQL CĂN BẢN HAY SỬ DỤNG"
date:   2017-09-05
categories: [SQL]
tags: [CSDL,DBMS,SQL,SQL server]
---
1. Tạo và quản lý CSDL

 * Tạo CSDL mới:
 ```sql
 CREATE DATABASE DatabaseName
 ```

 * Mở CSDL để làm việc:
 ```sql
 USE DatabaseName
 ```

 * Xóa CSDL:
 ```sql
 DROP DATABASE DatabaseName
 ```

 * Đổi tên CSDL:
 ```sql
 ALTER DATABASE DatabaseName
    MODIFY NAME = NewDatabaseName
 ```

 * Tạo bảng:
 ```sql
 CREATE TABLE TableName
 (
 ColumnName1 KieuDuLieu1 [NOT NULL]
 ColumnName2 KieuDuLieu2 [NOT NULL]
 )
 ```

 * Thay đổi cấu trúc bảng:
   * Thêm 1 cột mới vào bảng:
  ```sql
  ALTER TABLE TenBang ADD TenCot KieuDuLieu
  ```

   * Xóa 1 cột trong bảng:
  ```sql
  ALTER TABLE TenBang DROP COLUMN TenCot
  ```

   * Sử đổi kiểu dữ liệu của cột:
  ```sql
  ALTER TABLE TenBang ALTER COLUMN TenCot NewKieuDuLieu
  ```

   * Đổi tên cột:
  ```sql
  EXEC sp_rename 'TableName.ColumnName', 'NewColumnName'
  ```

* Tạo các ràng buộc:
  * Ràng buộc khóa chính (**Primary Key Constraint**):
 ```sql
 ALTER TABLE TenBang ADD CONSTRAINT TenRangBuoc PRIMARY KEY ThuocTinhKhoa
 -- ThuocTinhKhoa phải khác NULL
 ```
 Bạn có thể tạo ràng buộc khóa chính ngay từ khi tạo bảng: Ví dụ tạo khóa chính là cột **MaPhong** trong bảng **PhongBan**
 ```sql
 CREATE TABLE PhongBan(
 MaPhong Char(5),
 TenPhg VARCHAR(20))
 CONSTRAINT pk_PhongBan PRIMARY KEY (MaPhong)
 )
  ```

  * Ràng buộc duy nhất: Cách tạo ra _Unique Constraint_ cũng tương tự như _Primary Key Constraint_ chỉ việc thay chữ **Primary Key** thành **Unique**
 > Chỉ có Một PRIMARY KEY CONSTRAINT trong một table trong khi ta có thể có Nhiều UNIQUE CONSTRAINT trên một table
  * Ràng buộc khóa ngoại (Foreign Key Constraint): Khóa ngoại của một table được xem như con trỏ trỏ tới khóa chính của table khác.
 ```sql
 ALTER TABLE TenBang ADD CONSTRAINT TenRangBuoc FOREIGN KEY CacCotKhoaNgoai REFERENCES TenBang CacCotKhoaChinh
 ```
 Ví dụ:
 ```sql
 ALTER TABLE NHANVIEN ADD CONSRAINT
 fk_nhanvien_maphong FOREIGN KEY(MAPHONG)
 REFERENCES PHONGBAN(MaPhong)
 ```
 Hoặc có thể ràng buộc khóa ngoại ngay từ khi tạo bảng:
 ```sql
 CREATE TABLE DIEMSV
 (
 STT INT NOT NULL AUTO_INCREMENT,
 MaSV varchar(8) NOT NULL,
 MonHoc varchar(6) NOT NULL,
 HKI, HKII, ĐTB_Nam INT,
 PRIMARY KEY (STT),
 FOREIGN KEY (MaSV) REFERENCES HSSV(MaSV)
 )
 ```

* Xóa các ràng buộc: Ví dụ xóa ràng buộc khóa chính tên PK_NHANVIEN trong bảng NHANVIEN
```sql
ALTER TABLE NHANVIEN DROP constraint PK_NHANVIEN
```
>Chú ý: Trước khi xóa khóa chính phải xóa khóa phụ liên kết tới nó trước.

2. Các câu lệnh truy vấn dữ liệu:
* Truy vấn cơ bản: Gồm 3 mệnh đề quyền lực
```sql
SELECT Column1, Column2
FROM Table1, Table2
WHERE DieuKien
-- muốn chọn tất cả các cột trong bảng ta dùng SELECT *
-- phần điều kiện sử dụng các phép ">,<..., LIKE, BETWEEN, AND, OR, NOT..."
```

Cấu trúc truy vấn **SELECT** dạng đầy đủ:
```sql
SELECT [ALL | DISTINCT][TOP n] danh_sách_chọn
[INTO tên_bảng_mới]
FROM danh_sách_bảng/khung_nhìn
[WHERE điều_kiện]
[GROUP BY danh_sách_cột]
[HAVING điều_kiện]
[ORDER BY cột_sắp_xếp]
[COMPUTE danh_sách_hàm_gộp [BY danh_sách_cột]]
```

* Truy vấn lồng: Truy vấn dựa vào kết quả của một truy vấn con (đảm bảo truy vấn con chỉ trả về là một giá trị đơn)
```sql
SELECT * FROM DONDH
WHERE NGAYDH = (SELECT MAX(NGAYDH) FROM DONDH)
-- Câu lệnh trên trả về danh sách các đơn hàng gần đây nhất.
```

* Hàm kết hợp: COUNT,MIN, MAX, SUM, AVG được đặt ở mệnh đề SELECT
```sql
SELECT SUM(LUONG), MAX(LUONG),AVG(LUONG) FROM NHANVIEN
```

* Gom nhóm: Cú pháp cơ bản
```sql
SELECT <danh sách các cột>
FROM <danh sách các bảng>
WHERE <điều kiện>
GROUP BY <danh sách các cột gom nhóm>
--Sau khi gom nhóm thì mỗi nhóm các bộ sẽ có cùng giá trị tại thuộc tính gom nhóm.
```

* Điều kiện trên nhóm:
```sql
SELECT <danh sách các cột>
FROM <danh sách các bảng>
WHERE <điều kiện>
GROUP BY <danh sách các cột gom nhóm>
HAVING <điều kiện trên nhóm>
```
Ví dụ: Cho biết những nhân viên có từ 2 người yêu trở lên:
```sql
SELECT MA_NVIEN, COUNT(*) as SLNY
FROM NGUOIYEU
GROUP BY MA_NVIEN
HAVING COUNT(*) >= 2
```

### Tóm lại các bạn hãy nhớ công thức này:
```sql
SELECT <danh sách các cột>
FROM <danh sách các bảng>
[WHERE <điều kiện>]
[GROUP BY <các thuộc tính gom nhóm>]
[HAVING <điều kiện trên nhóm>]
[ORDER BY <các thuộc tính sắp thứ tự>]
```

* Cập nhật dữ liệu:
  * Thêm dữ liệu:
  ```sql
  INSERT INTO <tên bảng>(<danh sách các thuộc tính>)
  VALUES (<danh sách các giá trị>)
  ```
  Ví dụ:
  ```sql
  INSERT INTO NHANVIEN(HONV, TENLOT, TENNV, MANV)
  VALUES ('Le', 'Van', 'Tuyen', '635635635')
  ```
  > Chú ý: Thứ tự các giá trị phải trùng với thứ tự các cột, có thể thêm giá trị NULL ở những thuộc tính k là khóa chính và NOT NULL

  * Xóa (delete):
  ```sql
  DELETE FROM TenBang
  WHERE DieuKien
  ```

  * Sửa (update):
  ```sql
  UPDATE <tên bảng>
  SET <tên thuộc tính>=<giá trị mới>,<tên thuộc tính>=<giá trị mới>,…
  [WHERE <điều kiện>]
  ```
  Ví dụ:
  ```sql
  UPDATE NHANVIEN
  SET NGSINH='08/12/1965'
  WHERE MANV='333445555'
  ```