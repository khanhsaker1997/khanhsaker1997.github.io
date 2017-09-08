---
layout: single
title: "Hướng dẫn cấu hình Sublime Text 3 trên windows để lập trình C"
date: 2017-08-27
categories: [tricks]
tags: [sublime text,c++,config]
lang: vi
header:
  overlay_image: "/assets/img/ST3/header.jpg"
og_image: "/assets/img/ST3/header.jpg"
---
## Ở bài trước mình đã hướng dẫn các bạn khắc phục lỗi không cài được Plugin trên Sublime Text 3. Bài này mình sẽ hướng dẫn các bạn cấu hình nó để lập trình ngôn ngữ C, C++.

Trước khi vào bài hướng dẫn các bạn phải cài đặt Sublime Text 3 (tất nhiền rồi) và cài đặt *trình biên dịch C*
 như là **Cywin** hoặc **Mingw** (Mingw dùng phổ biến hơn). Xem bài hướng dẫn [Cài Mingw để biên dịch ngôn ngữ C](http://o7planning.org/vi/10467/huong-dan-cai-dat-trinh-bien-dich-c-cpp-mingw) và Cài biến môi trường để lập trình C bằng cách
 ```
 Vào *Control Panel> System> Advanced system settings> Environment Variables*
chọn edit lại *path* vào add thêm các dòng sau:
(ở đây MinGW được ví dụ là cài đặt tại thư mục C:\MinGW)
- C:\MinGW\bin
 ```
* Đầu tiên bạn mở Sublime Text 3 lên và chọn *Tools* > *Build System* > *New Build System..*

![Hình 1](/assets/img/ST3/st4.png)

* Sau đó sẽ hiện ra file để bạn cấu hình giúp lập trình C trên đó.

![Hình 2](/assets/img/ST3/st5.png)
Các bạn xóa hết cú pháp trong file đó và copy đoạn mã sau dán vào file đó rồi lưu lại với tên tùy ý, nên đặt tên là RunC++ như mình (Nếu các bạn lập trình C thì thay `g++` thành `gcc` nhé:
```sublime-build
{
"cmd": ["g++", "$file_name", "-o", "${file_base_name}.exe", "&&", "start", "cmd", "/k" , "$file_base_name"],
"selector": "source.c",
"working_dir": "${file_path}",
"shell": true,
"variants":
    [
        {
            "name": "Run",
            "cmd": ["start", "$file_base_name"]
        }
    ]
}
```

![Hình 3](/assets/img/ST3/st6.png)

Ô cê vậy là xong rồi đó. Giờ bạn muốn biên dịch và chạy chương trình `C` bạn chỉ việc chọn *Tools* > *Build System* > *RunC++* :
![Hình 4](/assets/img/ST3/st7.png)
Sau đó là chương trình được Build và chạy lên như thế này :
![Hình 5](/assets/img/ST3/st8.png)
**Chúc các bạn thành công nha**

>By Nguyễn Duy Khánh