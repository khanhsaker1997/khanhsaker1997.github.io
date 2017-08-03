---
layout: single
title:  "Hướng dẫn cài đặt USB Boot theo chuẩn UEFI hoặc GALECY"
date:   2017-08-03
categories: [Operating-Systems]
tags: [usb, boot]
lang: vi
header:
  overlay_image: "/assets/img/OperatingSystem/backgroundusb.jpg"
og_image: "/assets/img/OperatingSystem/backgroundusb.jpg"
---
### Đôi khi các bạn muốn tạo một USB Boot để cài win và muốn Boot theo chuẩn theo ý của mình. Chẳng hạn bạn đang dùng Windows mà muốn cài song song với hệ điều hành khác thì hệ điều hành đó của bạn phải Boot theo chuẩn giống chuẩn của Windows bạn đang dùng. Với Kali Linux cũng vậy, muốn **Grub** của Kali Linux nhận phân vùng của Windows thì bạn cũng phải Boot theo chuẩn giống với Windows đang sử dụng. Sau đây mình sẽ hướng dẫn các bạn cài Kali Linux theo chuẩn UEFI hoặc LAGECY.

#### Các bạn cần chuẩn bị cho mình phần mềm **Rufus**. Phần mềm này rất nhẹ nha. Các bạn có thể [tải về tại đây](http://rufus.akeo.ie/)

![Hình 1](/assets/img/OperatingSystem/rufus.jpg)

* B1: Bạn chọn đường dẫn đến file _ISO_ của Kali Linux.
* B2: Chọn USB mà bạn muốn tạo.
* B3: Bạn Chọn _GPT partition scheme for UEFI computer_ nếu muốn Boot theo chuẩn UEFI và chọn _MBR partion scheme for BIOS or UEFI computers_ nếu muốn Boot theo chuẩn GALECY.
* B4: Chọn định dạng _FAT32_ nếu Boot theo UEFI. còn GALECY thì nên chọn NTFS
* B5: Bạn có thể đặt tên mới cho USB tại đây.
* B6: Nhấn _Start_ và chờ đợi.

Vậy là Ô cê rồi.

> By Nguyễn Duy Khánh.
