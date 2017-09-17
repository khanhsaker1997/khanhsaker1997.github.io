---
layout: single
title: "Các kiểu dữ liệu cơ bản và các cấu trúc điều khiển"
date: 2017-09-15
categories: [laptrinhc]
tags: [syntax,cơ bản,c++]
lang: vi
header:
  overlay_image: "/assets/img/laptrinhc/header.jpg"
og_image: "/assets/img/laptrinhc/header.jpg"
---
## Các kiểu dữ liệu cơ bản:

|Kiểu dữ liệu|giá trị|
|--------------------|
|char|Ký tự hoặc số nguyên 8 bit|
|short|số nguyên 16 bit|
|long|số nguyên 32 bit|
|int|số nguyên độ dài bằng 1 word(16bit hoặc 32 bit)|
|float|số chấm động 4byte|
|double|số chấm động 8 byte|
|long double|số chấm động 10 byte|
|bool|giá trị Boolean,true hoặc false|
|wchar_t| ký tự 2 byte, lưu bảng chữ cái quốc tê|

## Các phép toán cơ bản:
* Phép gán (=):
```c++
x= 5;
```
* Các phép toán số học: (+,-,*,/,%)
* Các phép gán kép: (+=,-=,*=,/=,%=,>>=,<<=,&=,^=,|=)
```c++
a += b; // tương đương a = a + b;
c -= b; // tương đương a = a - b;
các phép toàn tiếp theo cũng tương tự .
```
* Phép tăng và phép giảm (++,--)
```c++
c++ tương đương với c = c + 1;
c-- tương đương với c = c - 1;
```
* Các phép toán quan hệ: (==,!=,>,<,>=,<=)
* Các phép toán logic: (!,&&,`||`)
* Phép điều kiện: (?) Ví dụ: (7==5 ? 4 : 3) cho kết quả 3 do 7 khác 5.
* Các toán tử bit: (&,`|`,^,~,<<,>>).

## Cấu trúc điều khiển:
* Cấu trúc lựa chọn **if**:
```c++
if(điều kiện)
{
    khối lệnh
}
// Nếu điều kiện là True thì khối lệnh được thực hiện. Điều kiện là False thì khối lệnh không được thực hiện
```

* Cấu trúc lựa chọn **if/else**:
```c++
if(điều kiện)
{
    khối lệnh 1
}
else
{
    khối lệnh 2
}
// Nếu điều kiện là True thì khối lệnh 1 được thực hiện. Điều kiện là False thì khối 2 lệnh không được thực hiện
```

* Cấu trúc lặp **While**
```c++
while(điều kiện)
{
    khối lệnh;
}
// Khi điều kiện đúng thì khối lệnh được thực hiện liên tục cho đến khi điều kiện sai thì dừng lại.
```

* Cấu trúc lặp **Do-While**
```c++
do {khối lệnh 1}
while (điều kiện)
// Ban đầu khối lệnh 1 được thực hiện. Sau đó kiểm tra điều kiện. Nếu đúng thì thực hiện tiếp khối lệnh 1. sai thì dừng lại
```

* Cấu trúc lặp **For**:

```c++
for (initialization; condition; increase) statement;

Cách thức hoạt động của nó như sau:

1. Initialization được thực hiện. Nói chung nó đặt một giá khi ban đầu cho biến điều khiển. Lệnh này được thực hiện chỉ một lần.
2. Condition được kiểm tra, nếu nó là đúng vòng lặp tiếp tục còn nếu không vòng lặp kết thúc và statement được bỏ qua.
3. Statement được thực hiện. Nó có thể là một lệnh đơn hoặc là một khối lệnh được bao trong một cặp ngoặc nhọn.
4. Cuối cùng, increase được thực hiện để tăng biến điều khiển và vòng lặp quay trở lại bước 2.
```
>By Nguyễn Duy Khánh.

