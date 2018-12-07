---
layout: single
title:  "Sửa lỗi không thể kết nối tới server trong SQL server 2008"
date:   2017-08-23
categories: [thu-thuat]
tags: [trick,it,connect,sql,sql server]
lang: vi
header:
  overlay_image: "/assets/img/csdl/head.jpg"
og_image: "/assets/img/csdl/head.jpg"
---
### Rất nhiều bạn khi mở **SQL Server Managenent Studio** thì không kết nỗi được vào server (Cannot connect to _YourServer_ ). Lỗi đó rất nhiều người bị và nó xảy ra liên tục.
![Hình 1](/assets/img/csdl/errorConnect.png)

Các bạn đừng lo vì lỗi này rất dễ giải quyết. Đây là do thời điểm đó máy chủ SQL Server của bạn bỗng dưng lại chưa được bật. Để kiểm tra các bạn vào **Computer Management**.

1. Bước 1: Các bạn _click_ chuột phải vào **This PC** và chọn **Manage > Services and Applications > Services Server Configuration Manager > SQL Server Services**
![Hình 2](/assets/img/csdl/errorConnect2.png)
2. Bước 2: Các bạn kick chuột phải vào **SQL Server(MSSQLSERVER)** rồi chọn **Start** (trạng thái đang ở _stop_ nên không connect được server)
![Hình 3](/assets/img/csdl/errorConnect3.png)

Đợi một lúc cho server nó chạy lên là ok rồi đó các bạn.
Các bạn có thể xem hướng dẫn chi tiết tại video này:
<iframe style="width: 560; height: 315; max-width: 100%; margin: 0 auto;"  src="https://www.youtube.com/embed/ZJ9-TvrACGU" frameborder="0" allowfullscreen></iframe>

>By Nguyễn Duy Khánh