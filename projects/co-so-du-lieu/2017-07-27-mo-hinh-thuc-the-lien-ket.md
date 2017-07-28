---
layout: single
title:  "Chương II- MÔ HÌNH THỰC THỂ - LIÊN KẾT (ER)"
date:   2017-07-27
categories: [CSDL,database,]
tags: [CSDL,Liên kết]
---

##### Đây là mô hình dữ liệu mức quan niệm phổ biến, tập trung vào các cấu trúc dữ liệu và các ràng buộc. Mô hình này thường được sử dụng để thiết kế các ứng dụng cơ sở dữ liệu và nhiều công cụ thiết kế cơ sở dữ liệu sử dụng các khái niệm của nó.


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
 * Các kiểu thực thể và các tập thực thể: Một cơ sở dữ liệu thường chứa những nhóm thực thể như nhau. Ví dụ, một công ty thuê hàng trăm nhân viên và lưu giữ những thông tin tương tự liên quan đến mỗi nhân viên. Các thực thể nhân viên này chia sẻ các thuộc tính giống nhau nhưng mỗi thực thể có các giá trị riêng cho các thuộc tính đó. Một kiểu thực thể là một tập hợp các thực thể có các thuộc tính như nhau. Một kiểu thực thể trong cơ sở dữ liệu được mô tả bằng tên và các thuộc tính. Vídụ: NHÂNVIÊN (Họtên, Tuổi, Lương), CÔNGTY (Tên, Địađiểm, Giámđốc). Một tập hợp các thực thể của một kiểu thực thể cụ thể trong cơ sở dữ liệu tại một thời điểm được gọi là một tập thực thể, nó thường được tham chiếu đến bằng cách sử dụng tên của kiểu thực thể. Ví dụ, NHÂNVIÊN vừa dùng để chỉ một kiểu thực thể, vừa để chỉ tập hợp hiện tại của tất cả các thực thể nhân viên trong cơ sở dữ liệu. Hình dưới đây minh họa các kiểu thực thể NHÂNVIÊN, CÔNGTY và các tập thực thể tương ứng.
![Hình 2](\assets\img\csdl\kieuThucThe.PNG)
 * Một kiểu thực thể được biểu diễn trong lược đồ ER như là một hình hôp chữ nhật có chứa tên kiểu thực thể. Các thuộc tính được đặt trong các hình ô van và được nối với các kiểu thực thể bằng các đường thẳng. Các thuộc tính phức hợp cũng được nối với các thuộc tính thành phần của nó bằng đường thẳng. Các thuộc tính đa trị được hiển thị trong các hình ô van đúp.
 * _Thuộc tính khóa của một kiểu thực thể_: Một ràng buộc quan trọng trên các thực thể của một kiểu thực thể là _khóa_. Một kiểu thực thể thường có một thuộc tính mà các giá trị của nó là khác nhau đối với mỗi thực thể tiêng biệt trong một tập thực thể. Thuộc tính như vậy gọi là _thuộc tính khóa_ và các giá trị của nó có thể dung để xác định từng thực thể một cách duy nhất. Ví dụ, thuộc tính Tên của kiểu thực thể CÔNGTY là khóa của kiểu thực thể đó vì mỗi thực thể công ty có một tên duy nhất. Đôi khi, nhiều thuộc tính kết hợp với nhau tạo thành một khóa, nghĩa là tổ hợp các giá trị của các thuộc tính này phải khác nhau đối với mỗi thực thể. Trong trường hợp như vậy ta có một thuộc tính _khóa phức hợp_. Chú ý rằng khóa phức hợp phải tối thiểu, nghĩa là tất cả các thuộc tính thành phần phải có mặt trong thuộc tính phức hợp để thỏa mãn tính chất duy nhất. 
 * _Miền giá trị của các thuộc tính_: Mỗi thuộc tính đơn của một kiểu thực thể được kết hợp với một miền giá trị. Đó là một tập các giá trị có thể gán cho thuộc tính này đối với mỗi thực thể riêng biệt. Các miền giá trị không hiển thị trong các sơ đồ ER.
 * Một cách toán học, một thuộc tính A của kiểu thực thể E có tập giá trị V có thể được định nghĩa như là một hàm từ E vào tập hợp lực lượng P(V) của V: A: E → P(V)
<p>Ta ký hiệu giá trị của thuộc tính A đối với thực thể e là A(e). Định nghĩa ở trên đúng cho các thuộc tính đơn trị, đa trị và thuộc tính không xác định. Một giá trị không xác định được biểu diễn bằng một tập rỗng. Với các thuộc tính đơn trị, A(e) là một giá trị đơn cho thực thể e. Các thuộc tính đa trị không có các hạn chế trên A(e). Với một thuộc tính phức hợp A, tập giá trị V là tích Đề các của P(V1)x P(V2)x….xP(Vn), trong đó V1, V2, …, Vn là tập các giá trị cho các thành phần đơn của A.</p>
3. **Kiểu liên kết, tập liên kết và các thể hiện**
 * Một kiểu liên kết R giữa n kiểu thực thể E1, E2, …,En xác định một tập liên kết giữa các thực thể của các kiểu đó. Cũng như các kiểu thực thể và tập thực thể, một kiểu liên kết và tập liên kết tương ứng với nó cũng có tên chung là R. Một cách toán học, tập liên kết R là một tập hợp các thể hiện liên kết ri , i= 1,2,… trong đó mỗi ri liên kết n thực thể riêng biệt e1,e2,…,en và mỗi một thực thể ej trong ri là một thành phần của kiểu thực thể Ej , 1≤ j ≤ n. Như vậy, một kiểu liên kết R là một quan hệ toán học trên E1, E2, …, En hoặc có thể định nghĩa như là một tập con của tích Đề các E1 x E2 x …x En. Mỗi kiểu thực thể E1,E2, …, En được gọi là tham gia vào kiểu liên kết R, và tương tự, mỗi thực thể riêng biệt e1, e2, …, en được gọi là tham gia vào thể hiện liên kết ri = ( e1,e2,…,en).
 * Một cách không hình thức, mỗi thể hiện liên kết ri trong R là một sự kết hợp của các thực thể, mỗi thực thể thuộc về một kiểu thực thể tham gia vào liên kết. Mỗi liên kết ri như vậy diễn đạt một sự kiện rằng các thực thể tham gia trong ri có mối quan hệ với nhau theo một cách nào đó ở trong thế giới thực. Ví dụ, trong thực tế, các nhân viên làm việc cho các đơn vị, như vậy, có một kiểu liên kết liên kết _làm việc cho_, liên kết giữa kiểu thực thể NHÂNVIÊN và kiểu thực thể ĐƠNVỊ.
![Hình 3](\assets\img\csdl\kieuLienKet.PNG)
       **Thể hiện liên kết**
![Hình 4](\assets\img\csdl\theHienLienKet.PNG)
4. **Cấp liên kết, tên vai trò và kiểu liên kết đệ quy**
 * _Cấp của một kiểu liên kết_ là số các kiểu thực thể tham gia vào kiểu liên kết đó. Một kiểu liên kết có thể có cấp 1, cấp 2, cấp 3,…. Ví dụ, kiểu liên kết <làm việc cho> giữa kiểu thực thể NHÂNVIÊN và kiểu thực thể ĐƠNVỊ là một kiểu liên kết cấp 2. Kiểu liên kết <biết trước> giữa kiểu thực thể MÔNHỌC với chính nó là một kiểu liên kết cấp 1…
 * _Các tên vai trò và các kiểu liên kết đệ quy_: Mỗi một kiểu thực thể tham gia vào một kiểu liên kết có một vai trò cụ thể trong liên kết. _Tên vai trò_ dùng để chỉ rõ vai trò của các thực thể của kiểu thực thể tham gia liên kết, nó giúp đỡ việc giải thích ý nghĩa của liên kết. Ví dụ, trong kiểu liên kết NHÂNVIÊN <làm việc cho > ĐƠNVỊ, vai trò của các thực thể của kiểu thực thể NHÂNVIÊN là nhân viên hoặc công nhân còn vai trò của các thực thể của kiểu thực thể ĐƠNVỊ là đơn vị hoặc nơi thuê công nhân. Nếu các kiểu thực thể tham gia vào kiểu liên kết là khác nhau thì tên vai trò là hoàn toàn không cần thiết bởi vì có thể sử dụng tên các kiểu thực thể làm tên vai trò. Tuy nhiên, trong một số trường hợp, một kiểu thực thể có thể tham gia vào một kiểu liên kết với các vai trò khác nhau. Trong những trường hợp như vậy, tên vai trò trở nên cần thiết để phân biệt ý nghĩa của mỗi sự tham gia. Các kiểu liên kết như vậy gọi là kiểu liên kết đệ quy. Ví dụ, trong số các nhân viên làm việc cho một đơn vị, có các nhân viên được phân công giám sát các nhân viên khác. Như vậy sẽ có một kiểu liên kết giữa các thực thể của kiểu thực thể NHÂNVIÊN: NHÂNVIÊN <giám sát> NHÂNVIÊN. Kiểu thực thể NHÂNVIÊN tham gia hai lần vào kiểu liên kết <giám sát>, một lần với vai trò người giám sát, một lần với vai trò người bị giám sát.
5. **Các ràng buộc trên các kiểu liên kết**
 * Các kiểu liên kết thường có một số ràng buộc để hạn chế số các tổ hợp có thể của các thực thể có thể tham gia trong tập hợp liên kết tương ứng. Các ràng buộc này được xác định từ tình trạng của thế giới thực mà kiểu liên kết biểu diễn. Ví dụ, nếu công ty có quy chế là một nhân viên chỉ làm việc cho một đơn vị thì chúng ta phải mô tả ràng buộc này trong lược đồ. Có hai loại ràng buộc chính: tỷ số lực lượng và sự tham gia.
6. **Thuộc tính của các kiểu liên kết**
 * Các kiểu liên kết cũng có thể có các thuộc tính, giống như các thuộc tính của các kiểu thực thể. Ví dụ, kiểu liên kết _làm việc trên_ giữa các kiểu thực thể NHÂNVIÊN và DỰÁN có thể có thuộc tính Sốgiờ để ghi lại số giờ làm việc của một nhân viên trên một dự án. Các thuộc tính của kiểu liên kết cũng được biểu diễn bằng một hình ô van và được nối với kiểu liên kết. Ví dụ:

![Hình 5](\assets\img\csdl\thuocTinhOfKieuLienKet.PNG)

> Nguồn: Giáo trình CSDL ~ Nguyễn Tuệ