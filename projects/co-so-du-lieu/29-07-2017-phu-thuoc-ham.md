---
layout: single
title:  "Chương III- PHỤ THUỘC HÀM VÀ CHUẨN HÓA CƠ SỞ DỮ LIỆU QUAN HỆ, CÁC THUẬT TOÁN THIẾT KẾ CƠ SỞ DỮ LIỆU QUAN HỆ"
date:   2017-07-29
categories: [CSDL,database,]
tags: [CSDL,Phụ thuộc hàm,thiết kế, chuẩn hóa]
---
## I- Các nguyên tắc thiết kế lược đồ quan hệ

1. _Ngữ nghĩa của các thuộc tính quan hệ_
* **Nguyên tắc 1:** Thiết kế một lược đồ quan hệ sao cho dễ giải thích ý nghĩa của nó. Đừng tổ hợp các thuộc tính từ nhiều kiểu thực thể và kiểu liên kết vào một quan hệ đơn. Một cách trực quan, nếu một lược đồ quan hệ tương ứng với một kiểu thực thể hoặc một kiểu liên kết thì ý nghĩa trở nên rõ ràng. Ngược lại, một quan hệ tương ứng với một hỗn hợp các thực thể và liên kết thì ý nghĩa trở nên không rõ ràng.
2. _Thông tin dư thừa trong các bộ và sự dị thường cập nhật_
* **Nguyên tắc 2:** Thiết kế các lược đồ quan hệ cơ sở sao cho không sinh ra những dị thường cập nhật trong các quan hệ. Nếu có xuất hiện những dị thường cập nhật thì phải ghi chép lại một cách rõ ràng và phải đảm bảo rằng các chương trình cập nhật dữ liệu sẽ thực hiện một cách đúng đắn.
3. _Các giá trị không xác định trong các bộ_
* **Nguyên tắc 3:** Tránh càng xa càng tốt việc đặt vào trong các quan hệ cơ sở những thuộc tính mà các giá trị của chúng thường xuyên là null. Nếu không thể tránh được các giá trị null thì phải đảm bảo rằng chúng chỉ áp dụng trong các trường hợp đặc biệt và không áp dụng cho một số lớn các bộ trong quan hệ.
4. _Sinh ra các bộ giả_
* **Nguyên tắc 4:** Thiết kế các lược đồ quan hệ sao cho chúng có thể được nối với điều kiện bằng trên các thuộc tính là khoá chính hoặc khoá ngoài theo cách đảm bảo không sinh ra các bộ “giả”. Đừng có các quan hệ chứa các thuộc tính nối khác với các tổ hợp khoá chính-khoá ngoài. Nếu không tránh được những quan hệ như vậy thì đừng nối chúng trên các thuộc tính đó, bởi vì các phép nối có thể sinh ra các bộ “giả”.

## II- Các phụ thuộc hàm

1. _Định nghĩa_
* Một phụ thuộc hàm là một ràng buộc giữa hai nhóm thuộc tính của một cơ sở dữ liệu. Giả sử rằng lược đồ cơ sở dữ liệu của ta có n thuộc tính A1,A2,…,An và ta91 hãy nghĩ rằng toàn bộ cơ sở dữ liệu được mô tả bằng một lược đồ quan hệ chung R={A1, A2,…., An}. Đừng nên nghĩ rằng cơ sở dữ liệu của chúng ta sẽ được lưu trữ trong một bảng chung, chúng ta chỉ sử dụng khái niệm này để phát triển lý thuyết hình thức về sự phụ thuộc dữ liệu. Giả sử X và Y là hai tập con của R.
* Một phụ thuộc hàm, ký hiệu là X→ Y, giữa hai tập thuộc tính X và Y chỉ ra một ràng buộc trên các bộ có thể có tạo nên một trạng thái quan hệ r của R. Ràng buộc đó là: với hai bộ bất kỳ t1 và t2 trong r , nếu có t1[X] = t2[X] thì cũng phải có t1[Y] = t2[Y]. Điều đó có nghĩa là các giá trị của thành phần Y của một bộ trong R phụ thuộc vào, hoặc được xác định bởi, các giá trị của thành phần X. Nói cách khác, các giá trị của thành phần X của một bộ xác định một cách duy nhất các giá trị của thành phần Y.
2. _Các quy tắc suy diễn đối với các phụ thuộc hàm_
* Có 6 quy tắc suy diễn đối với các phụ thuộc hàm:
![Hình 1](\assets\img\csdl\sauQuyTac.png)
* Amstrong đã chứng minh rằng các quy tắc suy diễn từ QT1 đến QT3 là đúng và đầy đủ. Đúng có nghĩa là cho trước một tập các phụ thuộc hàm F trên một lược đồ quan hệ R , bất kỳ một phụ thuộc hàm nào suy diễn được bằng cách áp dụng các quy tắc từ QT1 đến QT3 cũng đúng trong mỗi trạng thái quan hệ r của R thoả mãn các phụ thuộc hàm trong F. Đầy đủ có nghĩa là việc sử dụng các quy tắc từ QT1 đến QT3 lặp lại nhiều lần để suy diễn các phụ thuộc hàm cho đến khi không còn suy diễn được nữa sẽ cho kết quả là một tập hợp đầy đủ các phụ thuộc hàm có thể được suy diễn từ F. Nói cách khác, tập hợp các phụ thuộc hàm F+ (bao đóng của F) có thể xác định được từ F bằng cách áp dụng các quy tắc suy diễn từ QT1 đến QT3. Các quy tắc từ QT1 đến QT3 được gọi là các _quy tắc suy diễn_ Amstrong.
