---
layout: single
title:  "Hướng dẫn cài song song 2 hệ điều hành Windows 10 và Kali Linux"
date:   2017-08-03
categories: [may-tinh]
tags: [hệ điều hành,linux,windows 10]
lang: vi
header:
    overlay_image: # https://i.imgur.com/LBislm8.jpg
    image: "https://i.imgur.com/LBislm8.jpg"
excerpt: "_Windows_ và _Linux_ và 2 hệ điều hành được dùng phổ biến nhất hiện nay. Trong khi đó có nhiều bạn muốn được trải nghiệm cả 2 hệ điều hành này. Các bạn có thể dùng máy ảo, nhưng để trải nghiệm thật nhất, sau đây tôi sẽ hướng dẫn các bạn cài song song 2 hệ điều hành này"
---
##### _Windows_ và _Linux_ và 2 hệ điều hành được dùng phổ biến nhất hiện nay. Trong khi đó có nhiều bạn muốn được trải nghiệm cả 2 hệ điều hành này. Các bạn có thể dùng máy ảo, nhưng để trải nghiệm thật nhất, sau đây tôi sẽ hướng dẫn các bạn cài song song 2 hệ điều hành này.

#### Với hướng dẫn này, tôi đang dùng Windows 10 và giờ  tôi sẽ cài thêm Kali Linux 2017 vào để dùng song song.

**Các bạn cần chuẩn bị:**
1. Phân vùng ổ cứng tầm 15gb trên Windows (đưa phân vùng đó về chế độ Unallocated).
2. Một USB Boot Kali Linux theo chuẩn giống hệ điều hành Windows mà bạn đang sử dụng. Bạn có thể dùng phần mềm _Rufus_ và [xem hướng dẫn ở đây](https://khanhsaker97.github.io/he-dieu-hanh/tao-usb-boot-chuan/)
3. Kết nối Wifi hoặc mạng Ethernet.
4. Máy tính và những ngón tay của b (Tất nhiên rồi hehe).

### Ô cê rồi, sau khi chuẩn bị xong các bạn hãy làm theo các bước sau đây.

* Bước 1: Cắm usb vào máy và khởi động boot vào usb. Máy tính sẽ hiện ảnh như thế này:

![Hình 1](https://i.imgur.com/zpvAaat.jpg)

Các bạn chọn **Graphical install**.
* Bước 2: Chọn ngôn ngữ.

![Hình 2](https://i.imgur.com/5JHJnel.png)

Chọn quốc gia.

![Hình 3](https://i.imgur.com/l3bRAil.png)

Chọn bàn phím.

![Hình 4](https://i.imgur.com/1VH32Fj.png)

* Bước 3: Cài đặt cấu hình:
Điền Tên Host cho Kali Linux.

![Hình 5](https://i.imgur.com/BxedIUL.jpg)

Phần domain bỏ trống cũng được. Sau đó bạn điền pass cho tài khoản root.

![Hình 6](https://i.imgur.com/2Jem3de.jpg)

Chọn tiếp múi giờ.

![Hình 7](https://i.imgur.com/Ewvqs6r.jpg)

* Bước 4: Lựa chọn phân vùng cài đặt.

![Hình 8](https://i.imgur.com/5R58lu0.jpg)

Bạn chọn _Automatically partiton the free space_ rồi chọn _All file in one partition_, tiếp đến chọn _Finish partitioning and write changes to disk_.
* Bước 5: Đợi quá trình cài đặt.

![Hình 9](https://i.imgur.com/Pzd36KD.png)

* Bước 6: Cấu hình mạng. Bạn có thể chọn **Yes** hoặc **No** và sau đó phần cấu hình _HTTP Proxy_ bạn có thể bỏ trống.

![Hình 10](https://i.imgur.com/bzAmpp5.jpg)

* Bước 7: Cấu hình GRUB Boot loader: bạn chọn **Yes** nha.

![Hình 11](https://i.imgur.com/NUIT8X5.png)

Sau đó chọn ổ cứng bạn muốn cài đặt vào: Các bạn chọn **/dev/sda** nha.

![Hình 12](https://i.imgur.com/55FVyvQ.jpg)

## Ô cê, vậy là xong rồi đó, khi này màn hình bạn sẽ hiện như thế này:

![Hình 13](https://i.imgur.com/nYpNy5N.png)

Sau khi khởi động vào Grub của kali sẽ cho bạn chọn hệ điều hành như thế này :D

> Các bạn nhớ là khi khởi động phải boot Linux lên đầu, sau đó _Grub_ của Linux sẽ nhận phân vùng boot của Windows và bạn có thể lựa chọn. Và USB lúc boot theo chuẩn nào thì phải khởi động theo chuẩn đó (Galecy or UEFI).

![Hình 14](https://i.imgur.com/CwzegRd.png)

> By Nguyễn Duy Khánh