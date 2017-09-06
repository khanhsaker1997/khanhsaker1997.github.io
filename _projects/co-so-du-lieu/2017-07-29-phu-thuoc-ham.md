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
* Chúng ta ký hiệu F là tập các phụ thuộc hàm được xác định trên một lược đồ quan hệ R. Một phụ thuộc hàm X → Y được gọi là suy diễn được từ một tập các phụ thuộc hàm F được xác định trên R nếu X → Y đúng trong mỗi trạng thái quan hệ r là mở rộng hợp pháp của R, nghĩa là mỗi khi r làm thoả mãn mọi phụ thuộc hàm trong F, X→ Y cũng đúng trong r. Tập hợp tất cả các phụ thuộc hàm suy diễn được từ F được gọi là bao đóng của F và được ký hiệu là F+. Để xác định một cách suy diễn các phụ thuộc hàm có hệ thống, chúng ta phải phát hiện một tập hợp các quy tắc suy diễn. Tập quy tắc này sẽ được sử dụng để suy diễn các phụ thuộc hàm mới từ một tập các phụ thuộc hàm cho trước. Ta sử dụng ký hiệu F |= X→ Y để ký hiệu phụ thuộc hàm X→ Y được suy diễn từ tập các phụ thuộc hàm F. Để cho tiện, ta viết tắt phụ thuộc hàm có dạng {X,Y}→ Z thành XY → Z ( nghĩa là ta nối các biến và bỏ dấu ngoặc nhọn đi).
* Có 6 quy tắc suy diễn đối với các phụ thuộc hàm:
![Hình 1](\assets\img\csdl\sauQuyTac.PNG)
* Amstrong đã chứng minh rằng các quy tắc suy diễn từ QT1 đến QT3 là đúng và đầy đủ. Đúng có nghĩa là cho trước một tập các phụ thuộc hàm F trên một lược đồ quan hệ R , bất kỳ một phụ thuộc hàm nào suy diễn được bằng cách áp dụng các quy tắc từ QT1 đến QT3 cũng đúng trong mỗi trạng thái quan hệ r của R thoả mãn các phụ thuộc hàm trong F. Đầy đủ có nghĩa là việc sử dụng các quy tắc từ QT1 đến QT3 lặp lại nhiều lần để suy diễn các phụ thuộc hàm cho đến khi không còn suy diễn được nữa sẽ cho kết quả là một tập hợp đầy đủ các phụ thuộc hàm có thể được suy diễn từ F. Nói cách khác, tập hợp các phụ thuộc hàm F+ (bao đóng của F) có thể xác định được từ F bằng cách áp dụng các quy tắc suy diễn từ QT1 đến QT3. Các quy tắc từ QT1 đến QT3 được gọi là các _quy tắc suy diễn_ Amstrong.
3. _Các tập phụ thuộc hàm tối thiểu_
* Một tập phụ thuộc hàm là tối thiểu nếu nó thoả mãn các điều kiện sau đây:
  * Vế phải của các phụ thuộc hàm trong F chỉ có một thuộc tính.
  * Chúng ta không thể thay thế bất kỳ một phụ thuộc hàm X →A trong F bằng phụ thuộc hàm Y→A, trong đó Y là tập con đúng của X mà vẫn còn là một tập phụ thuộc hàm tương đương với F.
  * Chúng ta không thể bỏ đi bất kỳ phụ thuộc hàm nào ra khỏi F mà vẫn có một tập phụ thuộc hàm tương đương với F.
* Một phủ tối thiểu của một tập phụ thuộc hàm F là một tập tối thiểu các phụ thuộc hàm Fmin tương đương với F. Thường có rất nhiều các phủ tối thiểu cho một tập các phụ thuộc hàm. 

## III- Các dạng chuẩn dựa trên khóa chính
1. _Dạng chuẩn 1_
* Một quan hệ được gọi là ở dạng chuẩn 1 (1NF) nếu miền giá trị của một thuộc tính chỉ chứa các giá trị nguyên tử (đơn, không phân chia được) và giá trị của mỗi thuộc tính trong một bộ phải là một giá trị đơn lấy từ miền giá trị của thuộc tính đó. Như vậy, 1NF không cho phép quan hệ có các thuộc tính đa trị hoặc có các nhóm thuộc tính lặp (quan hệ trong quan hệ). Nó chỉ cho phép các giá trị của các thuộc tính là nguyên tử.
2. _Dạng chuẩn 2_
* Dạng chuẩn 2 (2NF) dựa trên khái niệm phụ thuộc hàm đầy đủ. Một phụ thuộc hàm X → Y là một phụ thuộc hàm đầy đủ nếu loại bỏ bất kỳ thuộc tính A nào ra khỏi X thì phụ thuộc hàm không còn đúng nữa. Điều đó có nghĩa là, với thuộc tính A bất kỳ, A ∈ X, (X – {A}) không xác định Y. Một phụ thuộc hàm X → Y là phụ thuộc bộ phận nếu có thể bỏ một thuộc tính A∈ X, ra khỏi X phụ thuộc hàm vẫn đúng, điều đó có nghĩa là với A∈ X, (X – {A}) → Y.
3. _Dạng chuẩn 3_
* Dạng chuẩn 3 (3NF) dựa trên khái niệm phụ thuộc bắc cầu. Một phụ thuộc hàm X → Y trong một lược đồ quan hệ R là một phụ thuộc hàm bắc cầu nếu có một tập hợp thuộc tính Z không phải là một khoá dự tuyển cũng không phải là một tập con của một khoá nào và cả hai X → Z và Z →Y đều đúng. Theo định nghĩa nguyên thuỷ của Codd, một lược đồ quan hệ R là ở 3NF nếu nó thoả mãn 2NF và không có thuộc tính không khoá nào của R là phụ thuộc bắc cầu vào khoá chính.
4. _Dạng chuẩn Boyce-Codd_
* Một lược đồ quan hệ R được gọi là ở dạng chuẩn Boyce-Codd (BCNF) nếu nó là ở dạng chuẩn 3NF và không có các thuộc tính khóa phụ thuộc hàm và thuộc tính không khóa.

> Nguồn: Giáo trình CSDL ~ Nguyễn Tuệ