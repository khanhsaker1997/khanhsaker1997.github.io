---
layout: single
title:  "Chương I- CÁC KHÁI NIỆM CƠ BẢN VỀ HỆ CƠ SỞ DỮ LIỆU"
date:   2017-07-26
categories: [CSDL,database,]
tags: [CSDL,DBMS]
---
## I- Cơ sở dữ liệu:
1. **_Cơ sở dữ liệu_** là một tập hợp các dữ liệu có liên quan với nhau, được lưu trữ trên máy tính, có nhiều người sử dụng và được tổ chức theo một mô hình. **_Dữ liệu_** là những sự kiện có thể ghi lại được và có ý nghĩa.
2. **_Tính chât_**
* **Một cơ sở dữ Liệu:**
 * Biểu thị một khía cạnh nào đó của thế giới thực như hoạt động của một công ty, một nhà trường, một ngân hàng... Những thay đổi của thế giới thực phải được phản ánh một cách trung thực vào trong cơ sở dữ liệu. Những thông tin được đưa vào trong cơ sở dữ liệu tạo tahnhf một không gian cơ sở dữ liệu hoặc là một "thế giới nhỏ".
 * Là một tập hợp liên kết với nhau một cách logic và mang một ý nghĩa cổ hữu nào đó. Một cơ sở dữ liệu không phải là một tập hộp tùy tiện.
 * có thể có cỡ tùy ý và có độ phức tạp thay đổi.
## II- Hệ quản trị cơ sở dữ liệu:
1. **_Hệ quản trị cơ sở dữ liệu_** là một tập hợp chương tình giúp cho người sử dụng tạo ra, duy trì và khai thác một cơ sở dữ liệu. Nó là một hệ thống phần mềm phổ dụng, làm dễ quá trình định nghĩa, xây dựng và thao tác cơ sở dữ liệu cho các ứng dụng khác nhau.

* _Xây dựng_ một cơ sở dữ liệu là quá trình lưu trữ các dữ liệu trên các phương tiện lưu trữ được hệ quản trị cơ sở dữ liệu kiểm soát.
* _Thao tác_ một cơ sở dữ liệu bao gồm các chức năng truy vấn cơ sở dữ liệu để lấy ra các dữ liệu cụ thể, cập nhật cơ sở dữ liệu để phản ánh các thay đổi trong thế giới nhỏ và tạo ra các báo cáo từ các dữ liệu
2. **_Chức năng_** của một hệ quản trị cơ sở dữ liệu:
 * Lưu trữ các định nghĩa, các mối liên kết dữ liệu và một từ điển dữ liệu.
 * Tạo ra các cấu trúc phức tạp theo yêu cầu để lưu trữ dữ liệu. Nó giúp người sử dụng làm nhiệm vụ khó khăn là định nghĩa và lập trình cho các đặc trưng vật lý của dữ liệu.
 * Biến đổi các dữ liệu được nhập vào để phù hợp với các cấu trúc dữ liệu ở điểm nêu bên trên.
 * Tạo ra một hệ thống bảo mật và áp đặt tính bảo mật và riêng tư trong CSDL.
 * Tạo ra các cấu trúc phức tạp cho phép nhiều người sử dụng truy cấp đến dữ liệu.
 * Cũng cấp các thủ tục sao lưu và phục hồi dữ liệu để đảm bảo sự an toàn và toàn vẹn dữ liệu.
 * Xúc tiến và áp đặt các quy tắc an toàn để loại bỏ vấn đề toàn vẹn dữ liệu.
 * Cung cấp việc truy vấn dữ liệu thông qua một ngôn ngữ truy vấn.
## III- Mô hình cơ sở dữ liệu:
**Mô hình cơ sở dữ liệu** là một tập hộp các khái niệm dùng để biểu diễn các cấu trúc của cơ sở dữ liệu. Cấu trúc cẩu một CSDL là các kiểu dữ liệu và các mối liên kết và các ràng buộc phải tuân theo trên các dữ liệu.
1. Các loại mô hình cơ sở dữ liệu:
* Mô hình phân cấp
* Mô hình mạng
* Mô hình quan hệ
* Mô hình thực thể - liên kết*
* Mô hình hướng đối tượng
2. Con người trong hệ cơ sở dữ liệu:
* **Người quản trị CSDL (Database Administrator - DBA)**: là người chịu trách nhiệm quản lý tài nguyên đó. Người này chịu trách nhiệm về việc cho phép truy cập cơ sở dữ liệu, tổ chức và hướng dẫn việc sử dụng, cấp các phần mềm và phần cứng theo yêu cầu.
* **Người thiết kế CSDL**: người này chịu tách nhiệm xác định các dữ liệu sẽ được lưu giữ trong cơ sở, chọn các cấu trúc thích hợp để biểu diễn và lưu giữ các dữ liệu đó.
* **Người sử dụng**: người mà có công việc của họ đòi hỏi truy cập đến cơ sở dữ liệu.
* **Người phân tích hệ thống và lập trình ứng dụng**: người này xác định các yêu cầu của người sử dụng để đặc tả chương trình phù hợp với yêu cầu của họ.
* **Người thiết kế và cài đặt hệ quản trị dữ liệu**: là người thiết kế, cài đặt các mô đun, giao diện cảu hệ quản trị CSDL thành các phần  mềm đóng gói.
* **Người phát triển công cụ**: là những người thiết kế và cài đặt các công cụ, đó là phần mềm đóng gói dễ làm việc và thiết kế sử dụng.
* **Các thao tác viên và những người bảo trì: là những người chịu trách nhiệm về việc chạy và bảo trì phần cứng và phần mềm của hệ thống.

##Tổng kết: các kiến thức cần nắm được qua chương này:
 1. Định nghĩa các thuật ngữ: cơ sở dữ liệu, hệ quản trị CSDL, hệ CSDL, từ điển CSDL, mô hình CSDL.
 2. Các tính chất của một CSDL.
 3. Các chức năng của một hệ quản trị CSDL.
 4. Định nghĩa mô hình cơ sở dữ liệu và phân loại.
 5. Liệu kê các người có liên quan đến hệ cơ sở dữ liệu.
>Nguồn: Giáo trình CSDL ~ Nguyễn Tuệ