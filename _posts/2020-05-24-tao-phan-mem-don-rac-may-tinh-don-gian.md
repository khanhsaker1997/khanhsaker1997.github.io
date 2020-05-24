---
layout: single
title: Tạo phần mềm dọn rác máy tính đơn giản
date: 2020-05-24
categories: [lap-trinh]
tags: [lập trình,windows 10]
toc: true
header:
  # overlay_image: "https://i.imgur.com/0jJPmXc.jpg"
  image: "https://i.imgur.com/0jJPmXc.jpg"
excerpt: Bài viết này tôi sẽ hướng dẫn các bạn tạo phần mềm để rọn rác máy tính đơn giản sử dụng lệnh command promt với đuôi mở rộng bat. Cụ thể mình sẽ tạo ứng dụng xóa các file tạm thời trên máy tính để giúp cho máy máy chạy mượt  hơn.
---

Tệp tin tạm thời trong máy tính của bạn có thể làm bị xóa bởi tệp tin **bat**. Tệp tin **bat** dưới đây sẽ xóa mọi các **cookie**, **bộ đệm** và bất kỳ dữ liệu tạm thời nào khác. Các bước để tạo tệp tin như sau:

## Bước 1: Nhấp chuột phải vào màn hình, chuyển đến *new* và nhấp vào *text document*.

![hình 1](https://i.imgur.com/O9P79Pz.png)

## Bước 2: Sao chép và dán đoạn mã sau đây vào chương trình notepad vừa tạo ra.

```bat
@echo off
 del /s /f /q c:\windows\temp\*.*
 rd /s /q c:\windows\temp
 md c:\windows\temp
 del /s /f /q C:\WINDOWS\Prefetch
 del /s /f /q %temp%\*.*
 rd /s /q %temp%
 md %temp%
 deltree /y c:\windows\tempor~1
 deltree /y c:\windows\temp
 deltree /y c:\windows\tmp
 deltree /y c:\windows\ff*.tmp
 deltree /y c:\windows\prefetch
 deltree /y c:\windows\history
 deltree /y c:\windows\cookies
 deltree /y c:\windows\recent
 deltree /y c:\windows\spool\printers
 cls
 ```

## Bước 3: Lưu lại với tên gì cũng được miễn là đuôi mở rộng là *.bat*.

![hình 3](https://i.imgur.com/TZKigNK.png)

Như vậy là bạn đã có phần mềm rọn rác riêng của bạn rồi đó. Mỗi khi bạn cần dọn rác máy tính thì bạn chỉ cần kích đúp chuột vào tệp tin **.bat** kia.

Các bạn có cách nào khác hay ho thì chia sẻ cho anh em biết trong phần bình luận bên dưới nhé.

Và để lại nhận xét về bài viết này để mình cải thiện hơn trong các bài viết tiếp theo nha. Cám ơn các bạn!

>By Nguyễn Duy Khánh