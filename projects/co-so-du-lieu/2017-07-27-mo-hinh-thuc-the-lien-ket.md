---
layout: single
title:  "Chương II- MÔ HÌNH THỰC THỂ - LIÊN KẾT (ER)"
date:   2017-07-27
categories: [CSDL,database,]
tags: [CSDL,Liên kết]
---

<p> Đây là mô hình dữ liệu mức quan niệm phổ biến, tập trung vào các cấu trúc dữ liệu và các ràng buộc. Mô hình này thường được sử dụng để thiết kế các ứng dụng cơ sở dữ liệu và nhiều công cụ thiết kế cơ sở dữ liệu sử dụng các khái niệm của nó. </p>


## I- Sử dụng mô hình quan niệm bậc cao cho việc thiết kế CSDL.

**Quá trình thiết kế một CSDL sử dụng mô hình quan niệm bậc cao được mô tả bằng hình dưới đây:**
![Hình 1](\assets\img\csdl\DLBacCao.PNG)
* Bước đầu tiên là _tập hợp các yêu cầu và phân tích_. Người thiết kế CSDL phỏng vấn người sử dụng CSDL để hiểu và làm tài liệu về các yêu cầu về dữ liệu của họ. Kết quả của bước này là một tập hợp ghi chép súc tích về các yêu cầu của những người sử dụng.
* Mỗi khi tất cả các yêu cầu đã được thu thập và phân tích, người tạo ra lược đồ quan niệm cho CSDL bằng cách sử dụng mô hình dữ liệu quan niệm mức cao. Bước này gọi là _thiết kế quan niệm_.
* Tiếp theo là việc cài đặt một CSDL bằng cách sử dụng một hệ quản trị CSDL có sẵn. Bước này gọi là _thiết kế logic_ hoặc là _ánh xạ mô hình dữ liệu_. Kết quả của bước này là một lược đồ cơ sở dữ liệu dưới dạng một mô hình dữ liệu cài đặt của hệ quản trị CSDL.
* Cuối cùng là bước _thiết kết vật lý_. Trong bước này ta phải chỉ ra các cấu trúc bên trong, các đường dẫn truy cập, tổ chức cho các tệp CSDL.

## II- Các thành phần cơ bản của mô hình ER

1. **Thực thể và thuộc tính**

 * _Thực thể_ là một "vật" trong thế giới thực, có sự tồn tại độc lập, nó có thể là cụ thể hoặc trừu tượng.
 * Mỗi thực thể có các _thuộc tính_, đó là các đặc trưng cụ thể mô tả thực thể đó.
 * **Thuộc tính đơn** là thuộc tính không thể phân chia ra được thành các thành phần nhỏ hơn. _VD: Thuộc tính tuổi của một nhân viên là một thuộc tính đơn_. **Thuộc tính phức hợp** là thuộc tính có thể phân chia được thành các thành phần nhỏ hơn, biểu diễn các thuộc tính cơ bản hơn với các ý nghĩa độc lập. _VD: thuộc tính Hoten của thực thể nhân viên có thể phân chia thành các thuộc tính Hodem va Ten_.
 * **Thuộc tính đơn trị** là những thuộc tính có giá tị duy nhất cho một thực thể cụ thể. Còn một thuộc tính có một tập giá trị cho cùng một thực thể là **thuộc tính đa trị**.
 * **Thuộc tính lưu trữ** là các thuộc tính mà giá trị cảu nó được nhập vào khi cài đặt CSDL. Thuộc tính mà giá trị của nó có thể tính được thông qua giá trị của các thuộc tính khác gọi là **thuộc tính suy diễn được**.
 * _Các thuộc tính phức tạp_: là sự kết hộ của các thuộc tính phức hợp và đa trị.

2. **Kiểu thực thể, tập thực thể, khóa và tập giá trị**
 
