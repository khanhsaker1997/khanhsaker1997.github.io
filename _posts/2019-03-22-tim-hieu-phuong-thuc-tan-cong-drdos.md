---
layout: single
title: Tìm hiểu phương thức tấn công DrDoS.
date: 2019-03-22
categories: [an-ninh-mang]
tags: [an ninh mạng]
image: https://i.imgur.com/QCQauGE.png
header:
  overlay_image:
excerpt: Mục tiêu chính của DRDoS là chiếm đoạt toàn bộ băng thông của máy chủ, tức là làm tắc nghẽn hoàn toàn đường kết nối từ máy chủ vào xương sống của Internet và tiêu hao tài nguyên máy chủ.
---
# Giới thiệu về DrDoS
Vào lúc 2 giờ sáng ngày 11 - 1 - 2002, Trang web GRC.COM đã bị đánh tung khỏi Internet bằng một kiểu tấn công từ chối dịch vụ mới. Điều kinh ngạc chính là nguồn tấn công được bắt đầu bằng những đường chính của Internet, bao gồm Yahoo.com và cả những IP "gary7.nsa.gov". Chúng tôi đã bị tấn công bởi hàng trăm server mạnh nhất của internet ...

Vào thời điểm chúng tôi tìm ra cách để ngăn chặn cuộc tấn công này và quay lại internet, 1072519399 packet bị chặn đứng trước khi cuộc tấn công bị dừng ... Đây chính là những thông tin được Steve Gibson mô tả trong bài báo về DRDoS mà ông đã gặp ngày 11-1-2002... và bây giờ chúng ta sẽ tìm hiểu xem DRDoS là gì và cách tấn công như thế nào.

# Lợi dụng TCP: Phương pháp SYN flood truyền thống
* Nhiều năm trước đây, sự yếu kém của đường truyền TCP được các HĐH sử dụng đã bị các Internet's Hacker kháp phá ra và lợi dụng.
* Theo sơ đồ dưới đây, Client gửi SYN packet cho server để thông báo server chuẩn bị 1 đường truyền. Server sẽ giành 1 phần tài nguyên hệ thống như bộ nhớ đệm để nhận và truyền dữ liệu. Ngoài ra các thông tin khác của Client cũng được ghi nhận như địa chỉ IP của Client và Cổng ( Port ). Sau đó server sẽ send ngược lại SYN/ACK packet để thông báo Client là mọi thứ đã chuẩn bị và nếu như không nhận đuợc ACK packt của Client ( có thể do packet đã bị thất lạc trên đường truyền ), server sẽ tiếp tục gửi lại SYN/ACK packet cho Client.

    ![Phương pháp SYN flood truyền thống](https://i.imgur.com/xRAzSo6.png)

* Nhưng chúng ta sẽ tiếp tục suy nghĩ tiếp. Như vậy với bất cứ 1 SYN packet đơn giản nào, Server cũng phải để 1 phần tài nguyên cho đường truyền đó, và tài nguyên của Server là có hạn và Hacker sẽ tìm mọi cách để Server đạt được cái giới hạn đó. ( Đây còn được gọi là halfopen connection).
* Bằng cách dùng Raw Sockets ( không phải TCP hay DUP packet ), IP gốc của packet có thể bị ghi đè lên và làm giả mạo. Khi một SYN packet với IP giả mạo được gửi đến Server, nó cũng như bao packet khác, vẫn hợp lệ đối với Server và Server sẽ cấp vùng tài nguyên cho đường truyền này, ghi nhận toàn bộ thông tin và gủi SYN/ACK packet ngược lại cho Client. Vì địa chỉ IP của Client là giả mạo nên sẽ không có Client nào nhận được SYN/ACK packet này, sau 1 thời gian không nhận được ACK packet từ Client, Server nghĩ rằng packet bị thất lạc nên lại tiếp tục gửi tiếp SYN/ACK packet, cứ như thế, connection tiếp tục mở.
* Nếu như Hacker tiếp tục gửi nhiều SYN packet đến Server và cuối cùng Server đã không thể tiếp nhận thêm 1 connection nào nữa : Server đã bị flood.
* Đây không phải là kiểu tấn công bằng đường truyền cao, bởi vì chỉ cần 1 máy tính nối internet dial up đơn giản cũng có thể tấn công kiểu này ( tất nhiên sẽ lâu hơn 1 chút ).

# Sự phát triển của cách tấn công bằng Bandwidth.
* Điều gì xảy ra trong quá trình Bandwidth attack.
* Không giống như cách tấn công SYN Flood Bandwidth attack tạo 1 brute force attack từ các Server mạnh đến máy của Victim, những packet giả ồ ạt chiếm hết đường truyền của Victim làm máy Victim không thể nhận thêm 1 packet nào khác.

# DRDoS – Thế hệ tiếp theo của DDoS
* Bây giờ, chúng ta hãy nhớ lại phương pháp SYN attack truyền thống của DoS, phương pháp này dựa trên bước thứ nhất để mở connection của TCP để tạo các "open half" connection làm Server bị ăn mòn hết tài nguyên. Các SYN packet được gửi trực tiếp đến Server sau khi đã giả mạo IP nguồn. IP giả mạo sẽ là 1 IP không có thật trên Internet để cho Server không thể nào hoàn thành được connection.
* Ta có Server A và Victim, giả sử ta gửi 1 SYN packet đến Server A trong đó IP nguồn đã bị giả mạo thành IP của Victim, bạn nghĩ chuyện gì sẽ xảy ra ??? Đúng, Server A sẽ mở 1 connection và gủi SYN/ACK packet cho Victim vì nghĩ rằng Victim muốn mở connection với mình. Và đây chính là khái niệm của Reflection ( Phản xạ ).
* Hacker sẽ điều khiển Spoof SYN generator, gửi SYN packet đến tất cả các TCP Server lớn, lúc này các TCP Server này vô tình thành Zombie cho Hacker để cùng tấn công Victim và làm nghẽn đường truyền của Victim.

> Nguồn: KSEC Club.