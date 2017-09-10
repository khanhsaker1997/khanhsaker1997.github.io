---
layout: single
title: "Cấu trúc cơ bản của một chương trình C"
date: 2017-09-10
categories: [laptrinhc]
tags: [syntax,cơ bản,c++]
lang: vi
header:
  overlay_image: "/assets/img/laptrinhc/header.jpg"
og_image: "/assets/img/laptrinhc/header.jpg"
---
## C + + là một ngôn ngữ lập trình cấp trung phát triển bởi Bjarne Stroustrup bắt đầu từ năm 1979 tại Bell Labs. C + + chạy trên nhiều nền tảng, chẳng hạn như Windows, Mac OS, và các phiên bản khác nhau của UNIX. Bài viết này mình sẽ giúp các bạn hiểu được cấu trúc cơ bản của một chương trình C++

Dưới đây là một ví dụ về đoạn chương trình *C++* đơn giản để in ra màn hình dòng chữ huyền thoại "Hello World":
```c++
#include <iostream>
using namespace std;

// main() is where program execution begins.
int main() {
   cout << "Hello World"; // prints Hello World
   return 0;
}
```

Chương tình trên bao gồm các thành phần sau:

* Phần khai báo thư viện:
```c++
#include <iostream>
using namespace std; // Là một gói các thực thể thường dùng được định nghĩa sẵn trong thư viện iostream
```

* Khai báo hàm main, tại đây việc thực thi chương trình bắt đầu:
```c++
int main()
```

* Phần thân chương trình: chứa các câu lệnh thực thi và được đặt trong dấu `{}`
```c++
{
cout << "Hello World"; // prints Hello World
return 0; // để kết thúc hàm main()
}
```

## Các từ khóa của C++:
Là các từ khóa C++ đã xây dựng từ trước và có ý nghĩa nhất định. Bạn không được đặt tên biến trùng với tên từ khóa dưới đây:

```c++
asm else new this
auto enum operator throw
bool explicit private true
break export protected try
case extern  public  typedef
catch false register typeid
char float reinterpret_cast typename
class for return  union
const friend  short unsigned
const_cast  goto signed  using
continue if  sizeof  virtual
default inline  static  void
delete  int static_cast volatile
do  long struct  wchar_t
double  mutable switch  while
dynamic_cast namespace template
```