---
layout: single
title: Cách ẩn icons trên màn hình Desktop
date: 2020-05-25
categories: [lap-trinh]
tags: [lập trình,windows 10]
toc: true
header:
  # overlay_image: "https://i.imgur.com/UvejAcH.png"
  image: "https://i.imgur.com/UvejAcH.png"
excerpt: Bài viết này sẽ hướng dẫn các bạn 2 cách để ẩn icons trên màn hình Desktop.
---

Đôi khi chúng ta muốn ẩn icons trên màn hình Desktop vì một mục đích nào đó như khi đang ở chỗ đông người, khi chụp ảnh màn hình mà bạn muốn màn hình Desktop của mình riêng tư không muốn mọi người biết mình đang dùng những ứng dụng gì.

## Cách 1: Sử dụng tính năng trong menu chuột phải.

Các bạn Click vào menu chuột phải rồi chọn **view** rồi chọn **Show desktop icons**

![Hình 1](https://i.imgur.com/qjWcCID.png)

## Cách 2: Sử dụng **Registry Editor**

Bước 1: Nhấn tổ hợp phím **Windows key + R**. Nhập **Regedit** rồi nhấn enter sẽ hiển thị ra trình chỉnh sửa **Registry Editor**

![Hình 2](https://i.imgur.com/rE9CWF5.png)

Bước 2: Trong cửa sổ **Registry Editor** điều hướng đến đường dẫn sau đây. 

**HKEY_CURRENT_USER \ Software \ Microsoft \ Windows \ CurrentVersion \ Chính sách \ Explorer**

Tiếp theo, nhấp chuột phải trên vùng trống khung bên phải, chọn **New > DWORD (32-bit) Value**

![Hình 3](https://i.imgur.com/RVjssYg.png)

Bước 3: Đặt tên **DWORD Value** là **NoDesktop** rồi nhấn enter.

![Hình 4](https://i.imgur.com/CTSsZdT.png)

Bước 4: Kích đúp chuột vào **DWORD** và nhập **Value Data** là **1** rồi nhấn **OK** để thay đổi giá trị rồi sau đó khởi động lại máy tính là xong.

![Hình 5](https://i.imgur.com/r35Njlb.png)

## Lưu ý: Nếu **Explorer** không có **Policies** thì bạn có thể tự tạo.

Bước 1: Kích đúp vào **Policies** rồi chọn **New** rồi Kích vào **Key**.

![Hình 6](https://i.imgur.com/v1F1eZj.png)

Bước 2: Đặt tên key là **Explorer**.

Các bạn có cách nào khác hay ho thì chia sẻ cho anh em biết trong phần bình luận bên dưới nhé.

Và để lại nhận xét về bài viết này để mình cải thiện hơn trong các bài viết tiếp theo nha. Cám ơn các bạn!

>By Nguyễn Duy Khánh