---
layout: single
title:  "Hướng dẫn cài đặt USB Boot theo chuẩn UEFI hoặc LEGACY"
date:   2017-08-03
categories: [huond-dan]
tags: [hướng dẫn]
lang: vi
header:
  overlay_image: https://i.imgur.com/aBgWNlx.jpg
  image: "https://i.imgur.com/aBgWNlx.jpg"
excerpt: "Đôi khi các bạn muốn tạo một USB Boot để cài win và muốn Boot theo chuẩn theo ý của mình. Chẳng hạn bạn đang dùng Windows mà muốn cài song song với hệ điều hành khác thì hệ điều hành đó của bạn phải Boot theo chuẩn giống chuẩn của Windows bạn đang dùng. Với Kali Linux cũng vậy, muốn **Grub** của Kali Linux nhận phân vùng của Windows thì bạn cũng phải Boot theo chuẩn giống với Windows đang sử dụng (GPT hoặc MBR). Sau đây mình sẽ hướng dẫn các bạn cài Kali Linux theo chuẩn UEFI hoặc LEGACY"
---
### Đôi khi các bạn muốn tạo một USB Boot để cài win và muốn Boot theo chuẩn theo ý của mình. Chẳng hạn bạn đang dùng Windows mà muốn cài song song với hệ điều hành khác thì hệ điều hành đó của bạn phải Boot theo chuẩn giống chuẩn của Windows bạn đang dùng. Với Kali Linux cũng vậy, muốn **Grub** của Kali Linux nhận phân vùng của Windows thì bạn cũng phải Boot theo chuẩn giống với Windows đang sử dụng. Sau đây mình sẽ hướng dẫn các bạn cài Kali Linux theo chuẩn định dạng ổ cứng GPT.

#### Các bạn cần chuẩn bị cho mình phần mềm **Rufus**. Phần mềm này rất nhẹ nha. Các bạn có thể [tải về tại đây](http://rufus.akeo.ie/)

![Hình 1](https://i.imgur.com/RanF4mx.jpg)

* B1: Bạn chọn đường dẫn đến file _ISO_ của Kali Linux.
* B2: Chọn USB mà bạn muốn tạo.
* B3: **MBR partition scheme for BIOS or UEFI computers**: tạo USB boot theo chuẩn BIOS và định dạng phân vùng USB theo chuẩn MBR, nếu bạn muốn tạo USB theo chuẩn BIOS (Legacy BIOS/CMS BIOS) thì bạn chọn dòng này.

	**MBR partition scheme for UEFI computers**: tạo USB boot theo chuẩn UEFI và định dạng phân vùng USB theo chuẩn MBR, nếu bạn muốn tạo USB theo chuẩn UEFI thì bạn chọn dòng này.

	**GPT partition scheme for UEFI computers**: tạo USB boot theo chuẩn UEFI và định dạng phân vùng USB theo chuẩn GPT, để boot và cài đặt được các dòng laptop mới ngày nay bạn phải chọn dòng này như mình đã hướng dẫn ở trên.
>Nếu ổ cứng phân vùng Windows của các bạn là định dạng GPT thì bạn phải chọn mục GPT để Grub boot của Kali Linux khi chạy sẽ nhận phân vùng windows thì mới giúp các bạn có thể chạy song song hai hệ điều hành được nhé.
* B4: Chọn định dạng _FAT32_ hoặc  _NTFS_ đều được.
* B5: Bạn có thể đặt tên mới cho USB tại đây.
* B6: Nhấn _Start_ và chờ đợi.

Vậy là Ô cê rồi.

> By Nguyễn Duy Khánh.
