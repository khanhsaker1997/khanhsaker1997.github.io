---
layout: single
title: Tìm hiểu phương thức tấn công DoS.
date: 2019-03-22
categories: [an-ninh-mang]
tags: [an ninh mạng]
header:
  overlay_image: https://i.imgur.com/HAGkknu.jpg
  image: https://i.imgur.com/HAGkknu.jpg
excerpt: Là một kiểu tấn công mà một người làm cho một hệ thống không thể sử dụng, hoặc làm cho hệ thống đó chậm đi một cách đáng kể với người dùng bình thường, bằng cách làm quá tải tài nguyên của hệ thống.
---

# Tấn công Dos là gì?
* Là kiểu tấn công từ một cá thể, hay tập hợp các cá thể.
* là một kiểu tấn công mà một người làm cho một hệ thống không thể sử dụng, hoặc làm cho hệ thống đá chậm đi một cách đáng kể với người dùng bình thường, bằng cách làm quá tải tài nguyên của hệ thống.
* DoS **Không có khả năng truy cập** vào dữ liệu thực của hệ thống nhưng nó có thể làm gián đoạn các dịch vụ mà hệ thống đó cung cấp

# Cách nhận diện cuộc tấn công DoS.
*  Mạng thực thi chậm khác thường khi mở tập tin hay truy cập Website.
* Không thể dùng một website cụ thể.
* Không thể truy cập bất kỳ website nào.
* Tăng lượng thư rác nhận được.

# Các dạng tấn công DoS
1. Smurf và Fraggle.
    * Là thủ phạm sinh ra cực nhiều giao tiếp ICMP (ping) tới địa chỉ Braodcast của nhiều mạng với địa chỉ nguồn là mục tiêu cần tấn công.
    * Chúng ta cần lưu ý là: Khi ping tới một địa chỉ là quá trình hai chiều - Khi máy A ping tới máy B máy B reply lại hoàn tất quá trình. Khi tôi ping tới địa chỉ Broadcast của mạng nào đó thì toàn bộ các máy tính trong mạng đó sẽ Reply lại tôi. Nhưng giờ tôi thay đổi địa chỉ nguồn, thay địa chỉ nguồn máy C và tôi ping tới địa chỉ Broadcast của một mạng nào đó, thì toàn bộ các máy tính trong mạng đó sẽ Reply lại vào máy C chứ không phải tôi và đó là tấn công Smuff.
    * Kết quả đích tấn công sẽ phải chịu nhận một đợt Reply gói ICMP cực lớn và làm cho mạng bị dớt hoặc chậm lại không có khả năng đáp ứng các dịch vụ khác.
    * Quá trình này được khuyêchs đại khi có luồng ping Reply từ một mạng được kết nối với nhau (mạng BOT).
    * Tấn công Fraggle, chúng sử dụng UDP echo và tương tự tấn công Smurf.

        ![Tấn công Smurf](https://i.imgur.com/PagPIVh.jpg)
        
2. Tấn công Buffer overflow.
    * Buffer Overflow xảy ra tại bất kỳ thời điểm nào có chương trình ghi lượng thông tin lớn hơn dung lượng của bộ nhớ đệm trong bộ nhớ
    * Kẻ tấn công có thể ghi đè dữ liệu và điều khiển chạy các chương trình và đánh cắp quyền điều khiển của một số chương trình nhằm thực thi các đoạn mã nguy hiểm
    * Quý trình gửi bức thư điện tử mà file đính kèm dài quá 256 ký tự có thể sẽ xảy ra quá trình tràn bộ nhớ đệm.
3. Tấn công Ping of Death.
    * Kẻ tấn công gửi những gói tin IP lớn hơn số lượng bytes cho phép của tin IP là 65536 bytes.
    * Quá trình chia nhỏ gói tin IP thành những phần nhỏ được thực hiện ở layer II.
    * Quá trình chia nhỏ có thể thực hiện với gói tin 65536 bytes. Nhưng hệ điều hành không thể nhận biết được độ lớn của gói tin này và sẽ bị khởi động lại, hay đơn giản là sẽ bị gián đoạn giao tiếp.
    * Để nhận biết kẻ tấn công gửi gói tin cho phép thì tương đối dễ dàng.
4. Tấn công Teardrop.
    * Gói tin IP rất lớn khi đến Router sẽ bị chia nhỏ làm nhiều phần nhỏ và đính các giá trị offset để có thể ráp lại đến khi đến máy đích.
    * Kẻ tấn công sử dụng gói tin IP với các thông số rất khó hiểu (chồng chéo lên nhau) để chia ra các phần nhỏ (fragment).
    * Nếu hệ điều hành nhận được các gói tin đã được chia nhỏ và không hiểu được, hệ thống cố gắng build lại gói tin và điều đó chiềm một phần tài nguyên hệ thống, nếu quá trình đó liên tục xảy ra hệ thống không còn tài nguyên cho các ứng dụng khác, phục vụ các user khác.
5. Tấn công SYN.
    * Kẻ tấn công gửi các yêu cầu (request ảo) TCP SYN tới máy chủ bị tấn công. Để xử lý lượng gói tin SYN này hệ thống cần tốn lượng bộ nhớ cho kết nối.
    * Khi có rất nhiều gói SYN ảo tới máy chủ và chiếm hết các yêu cầu xử lý của máy chủ. Một người dùng bình thường kết nối tới máy chủ ban đầu thực hiện Request TCP SYN và lúc này máy chủ không còn khả năng đáp lại - Kết nối không được thực hiện.
    * Đây là kiểu tấn công mà kẻ tấn công lợi dụng quá trình giao tiếp của TCP theo -Three-way.
    * Các đoạn mã nguy hiểm có khả năng sinh ra một số lượng lớn các gói tin TCp SYN tới máy chủ bị tấn công, địa chỉ IP nguồn của gói tin đã bị thay đổi và đó chính là tấn công DoS.
    * Quá trình TCP Three-way handshake được thực hiện: Khi máy A muốn giao tiếp với máy B. máy A bắn ra một gói tin TCP SYN tới máy B - máy B khi nhận được gói SYN từ A sẽ gửi lại máy A ACK đồng ý kết nối - Máy A gửi lại máy B gói ACK và bắt đầu các giao tiếp dữ liệu.
    * Máy A và máy B sẽ dữ kết nối ít nhất 75s, sau đó lại thực hiện một quá trình TCp Three-way handshake lần nữa để thực hiện phiên kết nối tiếp theo để trao đối dữ liệu.
    * Thật không máy kẻ tấn công đã lợi dụng kẽ hở này để thực hiện hành vi tấn công nhằm sử dụng hết tài nguyên của hệ thống bằng cách làm giảm thời gian yêu cầu Three-way handshake xuống rất nhỏ và không gửi lại gói ACK, cứ bắn gói SYN ra liên tục trong một thời gian nhất định và không bao giờ trả lời lại gói SYN&ACK từ máy bị tấn công.
    * Hình dưới thể hiện các giao tiếp bình thường với máy chủ bên dưới thể hiện khi máy chủ bị tấn công gói SYN đến sẽ rất nhiều tỏng khi đó khả năng trả lời của máy chủ lại có hạn và khi đó máy chủ sẽ từ chối các truy cập hợp pháp.

        ![Tấn công SYN](https://i.imgur.com/DBkaz9y.jpg)

6. Slowloris HTTP DoS.
    * Tấn công vào tầng ứng dụng của bộ giao thức TCP cụ thể là header của giao thức HTTP khi gửi request.
    * Do kết nối chưa hoàn thành lên không có thông tin lưu lại trong log.
    * Có thể phòng chống với nginx, apache mod_antiloris.
7. Slow rad HTTP DoS.
    * Tấn công vào tầng ứng dụng của bộ giao thức TCP, cụ thể là body (windows size) của giao thức HTTP trong việc nhận response
    * Tốc độ tấn công chậm , yêu cầu tài nguyên không cao nhưng cực kì khó chống đỡ.


> Nguồn: KSEC Club.