---
layout: single
title: "Cách vượt qua mật khẩu không cho chỉnh sửa trong Microsoft Office"
date: 2017-09-27
categories: [thu-thuat]
tag: [crack,password]
lang: vi
image:
excerpt: "Khi các bạn tải một tài liệu trên mạng về có thể có tài liệu các bạn chỉ xem được nhưng không sửa được. Đó là do người chủ file đó đã đặt mật khẩu không cho sửa file và chỉ có mật khẩu đó mới sửa được"
---
Khi các bạn tải một tài liệu trên mạng về có thể có tài liệu các bạn chỉ xem được nhưng không sửa được. Đó là do người chủ file đó đã đặt mật khẩu không cho sửa file và chỉ có mật khẩu đó mới sửa được.
Bài viết này mình sẽ hướng dẫn các bạn phá mật khẩu của file Word hoặc Powpoint hoặc Excel.

## Cách đặt mặt khẩu cho file word:
* Mật khẩu để mở file WORD EXCEL POWPOINT :

Các bạn chọn: `FILE` > `INFO` > `PROTECTED DOCUMENT` > `ENCRYPT WITH PASSWORD` rồi nhập password. Mật khẩu này được mã hóa dạng AES => không có cách nào phá khóa. Các bạn lên mạng search thấy các phần mềm vượt qua mật khẩu file word thì đều là giả nha.
* Mật khẩu cấm sửa file word:

Các bạn chọn: `FILE` > `INFO` > `PROTECTED DOCUMENT` > `RESTRICT EDITTING`. Bạn tích vào ô `Allow only this type of editing in the document:` và nhập password.

## Phá mật khẩu không cho chỉnh sửa của các file Word,Point,Excel:
* Đối với mật khẩu file word:
Các bước làm như sau:
  - Đổi tên dưới dạng file `.rar` rồi mở lên.
  - Trong file `.rar` đó có nhiều file. Các bạn vào file `WORD` > `setting.xml` > tìm đến đoạn: `<w:documentProtection...` (dùng phím `CTRL + F` để tìm cho nhanh) rồi xóa hết từ chỗ `w:edit="readOnly"` đến hết ngoặc `>` chứa cái đó đi.
  - Ra đổi lại tên `.docx` và mở lại (khi mở lại cứ bấm ok ok hết). Sau đó bạn có thể chỉnh sửa file đó.
* Đối với mật khẩu cấm sửa file excel: cũng như word nhưng sau khi mở file .rar bạn sẽ thấy các file `sheet`. Bạn mở file đó lên và tìm đến phần `password="abcxyz gì đó"`. Các bạn xóa phần `"abcxyz gì đó"` đi rồi mở lại là sẽ chỉnh sửa được nha. 

Xem chi tiết tại đây nha:

<iframe width="560" height="315" src="https://www.youtube.com/embed/d94we7la4pU" frameborder="0" allowfullscreen></iframe>

>By Nguyễn Duy Khánh