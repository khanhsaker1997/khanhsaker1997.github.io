---
layout: single
title: Tìm hiểu phương thức tấn công DDoS.
date: 2019-03-22
categories: [an-toan-thong-tin]
tags: [an toàn,tấn công mạng]
image: /assets/img/post/ddos.png
excerpt: DDoS có tên đầy đủ là Distributed Denial Of Service – là một biến thể của loại tấn công DOS. Đây là một hình thức tấn công từ chối dịch vụ phân tán, nó làm cho người bị tấn công không thể sử dụng một dịch vụ nào đó, nó có thể khiến bạn không thể kết nối với một dịch vụ internet, hoặc nó có thể làm ngưng hoạt động của một chiếc máy tính, một mạng lan nội bộ hoặc thậm chí là cả một hệ thống mạng.
---

# Ý nghĩa của mạng BOT
* Khi sử dụng một Tool tấn công DoS tới một máy chủ đôi khi không gây ảnh hưởng gì cho máy chủ - Giả sử bạn sử dụng Tool Ping of Death tới một máy chủ, trong đó máy chủ kết nối với mạng tốc độ 100Mbps, bạn kết nối tới máy chủ tốc độ 3Mbps - Vậy tấn công của bạn không có ý nghĩa gì.
* Nhưng bạn hãy tưởng tượng có 1000 người ngư bạn cùng một lúc tấn công vào máy chủ kia khi đó toàn bộ băng thông của 1000 người cộng lại tối đa đạt 3Gbps và tốc độ kết nối của máy của là 100Mbps vậy kết quả sẽ ra sao các bạn có khả năng tưởng tượng.
* Nhưng tôi đang thử hỏi làm cách nào để có 1000 máy tính kết nối mạng - tôi đi mua 1000 chiếc và thuê 1000 thuê bao kết nối - chắc chắn tôi không làm như vậy rồi và cũng không kẻ tấn công nào sử dụng phương pháp này cả.
* Kẻ tấn công xây dựng một mạng gồn hàng nghìn máy tính kết nối Internet (có mạng BOT lên tới 400.000 máy). Vậy làm thế nào chúng có khả năng lợi dụng người kết nối Internet để xây dựng mạng BOT??? Chúng ta cùng tìm hiểu bên dưới.
* Khi có trong tay mạng BOT kể tấn công sử dụng những tool tấn công đơn giản để tấn công vào một hệ thống máy tính. Dựa vào những truy cập hoàn toàn hợp lệ của hệ thống, cùng một lúc chúng sử dụng một dịch vụ của máy chủ, bạn thử tưởng tượng khi kẻ tấn công có trong tay 400.000 máy chủ và cùng một lúc ra lệnh cho chúng download 1 file trên trang webcủa bạn. Và đó chính là DDoS - Distributed Denial of Service.
* Không có 1 phương thức chống tấn công DDoS một cách hoàn toàn.

# Mạng BOTNET là gì?
Botnet là các mạng máy tính được tạo lập từ các máy tính mà hacker có thể điều khiển từ xa. Các máy tính trong mạng botnet là máy đã bị nhiễm malware và bị hacker điều khiển. Một mạng botnet có thể có tới hàng trăm ngàn, thậm chí là hàng triệu máy tính.

# Mục đích sử dụng mạng BOTNET
* Tấn công Distributed Denial-of-Service - DDoS
* Spamming
* Sniffing traffic
* Keylogging
* Cài đặt và lấy nhiễm chương trình độc hại
* Cài đặt những quảng cáo Popup
* Tấn conog IRC Chat Networks
* Phishing

# Xây dựng và phát triển mạng BOTNET
Để hiểu hơn về xây dựng hệ thống mạng BOTNET chúng ta nghiên cứu từ cách lây nhiễm vào một máy tính cách tạo ra một mạng BOT và dùng mạng BOT này tấn công vào một đích nào đó của mạng BOTNET được tạo ra từ AgoBOT’s.
1. Cách lây nhiễm vào máy tính
    * Đầu tiên kẻ tấn công lừa cho người dùng chạy file "chess.exe", một AgoBOT thường copy chúng vào hệ thống và sẽ thêm các thông số trong Registry để đảm bảo sẽ chạy cùng với hệ thống khi khởi động. Trong Registry có các vị trí cho các ứng dụng chạy lúc khởi động lại: "HKLM\Software\Microsoft\Windows\CurrentVersion\Run" và "HKLM\Software\Microsoft\Windows\CurrentVersion\RunServices"
2. Cách lây lan và xây dựng tạo mạng BOTNET.
    * Sau khi trong hệ thống mạng có một máy tính bị nhiễm AgoBOT, nó sẽ tự động tìm kiếm các máy tính khác trong hệ thống và lây nhiễm sử dụng các lỗ hổng trong tài nguyên được chia sẻ trong hệ thống mạng.
    * Chúng thường cố gắng kết nối tới các dữ liệu share mặc định dành cho các ứng dụng quản trị  (administrator or administrative) ví dụ như: C$, D$, E$ và print$ bằng cách đoán usernames và password để có thể truy cập được vào một hệ thống khác lây nhiễm.
    * AgoBOT có thể lây lan rất nhanh bởi chúng có khả năng tận dụng các điểm yếu trong hệ điều hành Windows, hay các ứng dụng, các duchj vụ chạy trên hệ thống.
3. Kết nối vào IRC.
    * Bước tiếp theo của AgoBOT sẽ tạo ra một IRC-Controlled Backdoor để mở các yếu tố cần thiết, và kết nối tới mạng BOTNET thông qua IRCControll, sau khi kết nối nó sẽ mở những dịch vụ cần thiết để khi có yêu cầu chúng sẽ được điều khiển bởi kẻ tấn công thông qua kênh giao tiếp IRC.
4. Điều khiển tấn công từ mạng BOTNET.
    * Kẻ tấn công điều khiển các máy trong mạng AgoBOT download những file .exe về chạy trên máy.
    * Lấy toàn bộ thông tin liên quan và cần thiết trên hệ thống mà kẻ tấn công muốn.
    * Chạy những file khác trên hệ thống đáp ứng yêu cầu của kẻ tấn công.
    * Chạy những chương trình DDoS tấn công hệ thống khác

# Phân loại tấn công DDoS
1. Bandwith Depletion Attack: được thiết kế nhằm làm tràn ngập mạng mục tiêu với những traffic không cần thiết, với mục đích làm giảm tối thiểu khả năng của các traffic hợp lệ đến được hệ thống cung cấp dịch vụ của mục tiêu
2. Resource Depletion Attack : Là kiểu tấn công trong đó Attacker gửi những packet dùng các protôcl sai chức năng thiết kế, hay gửi những packet với dụng ý làm tắt nghẽn tài nguyên mạng làm cho các tài nguyên này không phục vụ user thông thường khác được.

> Nguồn: KSEC Club.