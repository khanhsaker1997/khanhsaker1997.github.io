---
layout: single
title:  "Hướng dẫn cài song song 2 hệ điều hành Windows 10 và Kali Linux"
date:   2017-08-03
categories: [Operating-Systems]
tags: [systems, song song, hệ điều hành]
lang: vi
header:
  overlay_image: "/assets/img/OperatingSystem/linux-vs-windows.jpg"
og_image: "/assets/img/OperatingSystem/linux-vs-windows.jpg"
---
##### _Windows_ và _Linux_ và 2 hệ điều hành được dùng phổ biến nhất hiện nay. Trong khi đó có nhiều bạn muốn được trải nghiệm cả 2 hệ điều hành này. Các bạn có thể dùng máy ảo, nhưng để trải nghiệm thật nhất, sau đây tôi sẽ hướng dẫn các bạn cài song song 2 hệ điều hành này.

#### Với hướng dẫn này, tôi đang dùng Windows 10 và giờ  tôi sẽ cài thêm Kali Linux 2017 vào để dùng song song.

**Các bạn cần chuẩn bị:**
1. Phân vùng ổ cứng tầm 15gb trên Windows (đưa phân vùng đó về chế độ Unallocated).
2. Một USB Boot Kali Linux theo chuẩn giống hệ điều hành Windows mà bạn đang sử dụng. Bạn có thể dùng phần mềm _Rufus_ và [xem hướng dẫn ở đây](https://khanhsaker97.github.io/operating-systems/tao-usb-boot-chuan/)
3. Kết nối Wifi hoặc mạng Ethernet.
4. Máy tính và những ngón tay của b (Tất nhiên rồi hehe).

### Ô cê rồi, sau khi chuẩn bị xong các bạn hãy làm theo các bước sau đây.

* Bước 1: Cắm usb vào máy và khởi động boot vào usb. Máy tính sẽ hiện ảnh như thế này:

![Hình 1](/assets/img/OperatingSystem/kali.png)

Các bạn chọn **Graphical install**.
* Bước 2: Chọn ngôn ngữ.

![Hình 2](/assets/img/OperatingSystem/kali2.png)

Chọn quốc gia.

![Hình 3](/assets/img/OperatingSystem/kali3.png)

Chọn bàn phím.

![Hình 4](/assets/img/OperatingSystem/kali4.png)

* Bước 3: Cài đặt cấu hình:
Điền Tên Host cho Kali Linux.

![Hình 5](/assets/img/OperatingSystem/kali5.jpg)

Phần domain bỏ trống cũng được. Sau đó bạn điền pass cho tài khoản root.

![Hình 6](/assets/img/OperatingSystem/kali6.jpg)

Chọn tiếp múi giờ.

![Hình 7](/assets/img/OperatingSystem/kali7.jpg)

* Bước 4: Lựa chọn phân vùng cài đặt.

![Hình 8](/assets/img/OperatingSystem/kali8.jpg)

Bạn chọn _Automatically partiton the free space_ rồi chọn _All file in one partition_, tiếp đến chọn _Finish partitioning and write changes to disk_.
* Bước 5: Đợi quá trình cài đặt.

![Hình 9](/assets/img/OperatingSystem/kali9.png)

* Bước 6: Cấu hình mạng. Bạn có thể chọn **Yes** hoặc **No** và sau đó phần cấu hình _HTTP Proxy_ bạn có thể bỏ trống.

![Hình 10](/assets/img/OperatingSystem/kali10.jpg)

* Bước 7: Cấu hình GRUB Boot loader: bạn chọn **Yes** nha.

![Hình 11](/assets/img/OperatingSystem/kali11.png)

Sau đó chọn ổ cứng bạn muốn cài đặt vào:

![Hình 12](/assets/img/OperatingSystem/kali12.jpg)

## Ô cê, vậy là xong rồi đó, khi này màn hình bạn sẽ hiện như thế này:

![Hình 13](/assets/img/OperatingSystem/kali13.png)

Sau khi khởi động vào Grub của kali sẽ cho bạn chọn hệ điều hành như thế này :D

![Hình 14](/assets/img/OperatingSystem/kali14.png)

> By Nguyễn Duy Khánh


