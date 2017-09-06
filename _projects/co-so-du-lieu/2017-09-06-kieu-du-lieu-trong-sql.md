---
layout: single
title:  "KIỂU DỮ LIỆU HAY SỬ DỤNG TRONG SQL"
date:   2017-09-06
categories: [SQL]
tags: [CSDL,DBMS,SQL,SQL server]
---
## Mỗi cột (column), biến cục bộ (local variable), biểu thức (expression) và tham số (parameter) đều có một kiểu dữ liệu nhất định. Sau đây là danh sách các kiểu dữ liệu của SQL.

> Đối với tên bảng (table name)và tên cột (column name) chúng ta có thể đặt tên dài tối đa 128 ký tự.

### Kiểu dữ liệu:

* Số nguyên:

|Kiểu dữ liệu|Kích thước|Miền giá trị dữ liệu lưu trữ|
|------------|----------|----------------------------|
|`Int`|4 bytes|`Từ -2,147,483,648 đến  +2,147,483,648`|
|`Smallint`|2 bytes|`Từ -32,768 đến 32,767`|
|`Tinyint`|1 byte| ` Từ 0 đến 255`|
|`Bit`| 1 byte| `0 or 1 or Null`|

* Dạng số thập phân:

|Kiểu dữ liệu|Kích thước|Miền giá trị dữ liệu lưu trữ|
|------------|----------|----------------------------|
|`Decimal, Numeric`|17 bytes|`Từ -10^38 đến +10^38`|
|`Float`|8 bytes| ` Từ -1.79E + 308 đến 1.79E + 308`|
|`Real`|4 bytes|` Từ -1.79E + 308 đến 1.79E + 308`|

* Dạng chuỗi:

|Kiểu dữ liệu|Kích thước|Miền giá trị dữ liệu lưu trữ|
|------------|----------|----------------------------|
|`Char`|N bytes|`Từ 1 đến 8,000 ký tự, độ dài cố định`|
|`Varchar`|N bytes| `Từ 1 đến 8,000 ký tự, độ dài cố định`|
|`Text`| N bytes| `Từ 1 đến 2,147,483,647 ký tự`|
|`Nchar`| 2* n bytes| `Unicode, từ 1 đến 4,000 ký tự, mỗi ký tự 2 bytes`|
|`Nvarchar`| 2* n bytes|`Từ -10^38 đến 10^38`|
|`Ntext`|2*n bytes|`Từ 1 đến 1,073,741,823 ký tự, mỗi ký tự 1 byte`|
|`Image`| N byte| `Từ 1 đến 2,147,483,647`|
|`Binary`| N byte| ` Từ 1 đến 8000`|

* Dạng ngày giờ:

|Kiểu dữ liệu|Kích thước|Miền giá trị dữ liệu lưu trữ|
|------------|----------|----------------------------|
|`datetime`|8 bytes| `Từ 01/01/1753 đến 31/12/9999`|
|`smalldatetime`|4 bytes| `Từ 01/01/1900 đến 06/06/2079`|
|`Date`|3 bytes| `Từ 01/01/0001 đến 12/31/9999`|
|`Time`|3-5 bytes| `00:00:00:0000000 tới 23:59:59:9999999`|

> Hàm **SYSDATETIME()** trả về thời gian hiện tại của hệ thống mà không có múi giờ với độ chính xác mili giây
> Hàm **SYSDATETIMEOFFSET()** giống với  hàm **SYSDATETIME()**, nhưng bao gồm cả múi giờ.

