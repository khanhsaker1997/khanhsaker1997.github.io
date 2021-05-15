---
layout: single
title:  "Sửa lỗi không thể kết nối tới server trong SQL server 2008"
date:   2017-08-23
categories: [lap-trinh]
tags: [lập trình, thủ thuật]
lang: vi
header:
  overlay_image:
  image: 
excerpt: "Rất nhiều bạn khi mở **SQL Server Managenent Studio** thì không kết nỗi được vào server (Cannot connect to _YourServer_ ). Lỗi đó rất nhiều người bị và nó xảy ra liên tục"
---
### Rất nhiều bạn khi mở **SQL Server Managenent Studio** thì không kết nỗi được vào server (Cannot connect to _YourServer_ ). Lỗi đó rất nhiều người bị và nó xảy ra liên tục.
![Hình 1](https://i.imgur.com/hZE8uMf.png)

Các bạn đừng lo vì lỗi này rất dễ giải quyết. Đây là do thời điểm đó máy chủ SQL Server của bạn bỗng dưng lại chưa được bật. Để kiểm tra các bạn vào **Computer Management**.

1. Bước 1: Các bạn _click_ chuột phải vào **This PC** và chọn **Manage > Services and Applications > Services Server Configuration Manager > SQL Server Services**
![Hình 2](https://i.imgur.com/pW1A1vV.png)
2. Bước 2: Các bạn kick chuột phải vào **SQL Server(MSSQLSERVER)** rồi chọn **Start** (trạng thái đang ở _stop_ nên không connect được server)
![Hình 3](https://i.imgur.com/SunSG5Z.png)

Đợi một lúc cho server nó chạy lên là ok rồi đó các bạn.

>By Nguyễn Duy Khánh