---
layout: single
title: Hãy bảo vệ hệ thống mạng trong nhà của bạn
date: 2021-05-04
categories: [an-ninh-mang]
tags: [an ninh mạng]
toc: true
header:
  # overlay_image: "https://i.imgur.com/gMRN85c.jpg"
  image: "https://i.imgur.com/O7ghxKB.png"
excerpt: Bài viết này sẽ giúp các bạn biết cách bảo vệ hệ thống mạng trong nhà khỏi các cuộc tấn công. Bao gồm bảo vệ router và modem cũng như các thiết bị khác bạn dùng để kết nối với Internet.
#ngay1
---
# Bạn có biết router và modem của bạn nằm đâu không?
Các bạn cần phải biết phân biệt cái nào là **router**, cái nào là **modem**, không biết thì tự google nhé. Sau đó, ghi lại thương hiệu và số model trên mỗi thiết bị và tìm Google tên của chúng kèm ngày phát hành. Các thiết bị đó được sản xuất bao lâu rồi? Nếu chúng được sản xuất vài năm trước, bạn nên cân nhắc việc nâng cấp lên một router hay modem đời mới.

Đôi khi, router và modem đời cũ không còn nhận được các bản cập nhật firmware và đó có thể là một yếu điểm trước các cuộc tấn công. Bạn cũng có được tốc độ mạng nhanh hơn khi bạn nâng cấp lên những model đời mới.

Nếu modem/router được sở hữu bởi ISP của bạn (như Viettel, VNPT, FPT, hay bất cứ hãng nào), gọi cho họ và xem có bản nâng cấp mới hoặc tốt hơn hay chưa, hỏi xem thiết bị tiêu dùng nào phù hợp cho nhu cầu của bạn. Chắc chắn rằng khi bạn tự sở hữu một thiết bị, bạn sẽ có toàn quyền trên thiết bị và các bản nâng cấp chứ không phải ISP.
Khi bạn đã có một modem và router, bạn sẽ bắt đầu đi sâu hơn vào các cài đặt bảo mật.
Modem không cần nhiều thay đổi, chỉ cần đảm bảo chúng phù hợp và tuân theo chỉ dẫn từ ISP để cài đặt hệ thống mạng của bạn.

# Cách truy cập vào trang quản trị Router của bạn
Router có rất nhiều thiết lập bảo mật để đảm bảo an toàn. Đầu tiên và quan trọng nhất, trong trình duyệt của bạn, truy cập đến phần giao diện quản trị của router. Bạn có thể truy cập bằng cách gõ địa chỉ IP vào thanh địa chỉ trên trình duyệt, ấn Enter, và bạn sẽ thấy trang đăng nhập hoặc trang cài đặt. Địa chỉ IP có thể tìm thấy phía dưới router, hay trong cuốn hướng dẫn sử dụng lúc bạn mua về, hoặc qua trang web của nhà sản xuất ghi ở trong tài liệu. Địa chỉ IP có dạng kiểu 192.168.1.1.

Thay vào đó, nếu bạn có một router mới, một số thiết bị đi kèm với ứng dụng điện thoại, và bạn có thể đăng nhập giao diện quản trị qua điện thoại Iphone hoặc Android. Sau khi đăng nhập, hãy thay đổi tài khoản và mật khẩu. Rất có thể bạn vừa đăng nhập với tài khoản là admin và mật khẩu là admin. Hãy thay đổi tên tài khoản mới và sử dụng mật khẩu khó đoán hơn. Đây sẽ là thông tin đăng nhập quản trị mới của bạn, vì vậy điều quan trọng nhất là không được để quên. Lý do chúng ta phải thay đổi thông tin đăng nhập mặc định là vì bất kỳ ai có quyền truy cập vào mạng không dây của chúng ta đều có thể đăng nhập vào và nghịch ngợm với các thiết lập nếu chúng ta để thông tin đăng nhập mặc định. Điều đó thật đáng sợ, chúng ta không hề muốn điều đó xảy ra.
Tiếp theo, tắt tính năng quản trị từ bên ngoài, truy cập từ xa, và chặn các cổng mở. Đây là tất cả các cài đặt cho phép người dùng đăng nhập giao diện quản trị hay phá hoại từ bên ngoài hệ thống mạng. Nhiều khả năng bạn không cần bật các tùy chọn đó, do vậy chỉ cần nhấn OFF hay DISABLE và lưu cài đặt của bạn. Nếu bạn vẫn lo lắng còn cổng mở ra ngoài Internet, kiểm tra router của bạn qua trang <https://www.grc.com/shieldsup> để đảm bảo mọi cổng đều được đóng kín.

Tiếp theo, tắt giao thức **WPS** hoặc **Wifi Protected Scan**. Các tính năng này đều có sẵn trong nhiều router nhưng được cho là chứa nhiều lỗi bảo mật, vậy nên tốt nhất là tắt hoàn toàn giao thức này.

Bây giờ cần kích hoạt một số cài đặt! Đầu tiên, xem qua các thiết lập Tường lửa. Điều này sẽ thêm một lớp bảo mật bổ sung cho mạng của bạn. Nếu tùy chọn này có sẵn trong router thì hãy bật lên. Nếu bạn thấy thiết lập cho phép truy cập HTTPS thông qua giao diện router, bạn cũng nên kích hoạt thiết lập này.

# Hãy dùng giao thức WP2, không bao giờ được dùng giao thức WEP
Đến tiết mục hoành tráng, KHÔNG NÊN BỎ QUA BƯỚC NÀY. **Đảm bảo cài đặt mạng không dây cho router là WPA2**. Nếu WPA là lựa chọn duy nhất thì bạn đành phải dùng, nhưng dù thế giới có sụp đổ - **CŨNG KHÔNG BAO GIỜ ĐƯỢC DÙNG WEP**. Hiện tại bạn đã cài đặt xong WPA2, thay đổi SSID và passcode. Đây là tên router của bạn khi được thấy công khai. Nó khác thông tin đăng nhập quản trị bạn vừa tạo gần đây, và không nên giống hoàn toàn thông tin đăng nhập trước đó. Bạn nên cá nhân hóa tên SSID nếu bạn có khiếu hài hước, không quan trọng bạn đặt tên như thế nào. Nhưng phải đảm bảo passcode khó đoán.

Các router thế hệ mới có tùy chọn 2.4 và 5ghz. Bạn có thể chọn cả 2 nếu muốn – chỉ cần đảm bảo mỗi băng tần đều có SSID và passcode khác nhau – sự khác biệt giữa hai băng tần đó là tần số và độ mạnh. Mình sẽ không đi sâu vào phần kỹ thuật, nhưng nếu bạn muốn tìm hiểu kỹ hơn, hãy tìm trên Google!

Nếu bạn có thêm lựa chọn, hãy thiết lập mạng thứ hai dành cho khách. Đây sẽ là một mạng tách biệt trên router của bạn mà chỉ được dùng chủ yếu bởi những vị khách ghé thăm, và các thiết bị Internet vạn vật. Các thiết bị Internet vạn vật (IoT) bao gồm các bóng đèn, bộ điều nhiệt, amazon echo, và bất cứ vật gì có thể kết nối internet - tất cả nên nằm trong mạng khách.

Hiện giờ bạn đã thay đổi SSID và passcode thành công, bạn chắc chắn sẽ cần đăng nhập lại vào mạng wifi trên tất cả các thiết bị, do vậy hãy bắt đầu thực hiện điều đó. Ghi nhớ rằng – nếu đó là thiết bị IoT, hãy cho thiết bị đó vào mạng khách. Nếu đó là điện thoại thông minh, laptop hay máy tính bàn, hãy cứ để trong mạng nội bộ và cứ tiếp tục thực hiện như thế.

# Cập nhật Firmware thường xuyên
Điều cuối cùng bạn cần thực hiện trên router đó là cập nhật firmware. Một số thiết bị của bạn tự động cập nhật firmware, trong khi một số khác yêu cầu bạn đăng nhập vào giao diện quản trị để kiểm tra các bản cập nhật. Dù bằng cách nào đi chăng nữa, tìm kiếm tùy chọn đó trong các mục cài đặt và đảm bảo router của bạn hoàn toàn được cập nhật từ nhà sản xuất. Nếu bạn không thấy bất kỳ bản cập nhật nào thông qua giao diện, hãy kiểm tra trên trang web của hãng bởi vì bản cập nhật firmware có thể có sẵn thông qua trang web chứ không phải giao diện quản trị.

Các bạn muốn đi sâu hơn? Cân nhắc việc hạn chế địa chỉ IP có thể truy cập vào giao diện quản trị; thay đổi địa chỉ IP của  router, cân nhắc việc sử dụng VLAN thay vì mạng khách nếu bạn muốn; hay thậm chí cài đặt bản firmware tùy chỉnh thay vì bản firmware từ nhà sản xuất. Tất cả những điều này đều là những kỹ thuật nâng cao hơn chút, nhưng hãy cân nhắc khi đi sâu vào các kỹ thuật này vì chúng phức tạp hơn rất nhiều.

Nhớ đăng xuất khỏi giao diện quản trị sau khi bạn đã cập nhật những thứ bạn muốn. Ghi nhớ: mạng WIFI của bạn KHÔNG PHẢI là mạng Internet. Mạng WIFI của bạn là cách bạn KẾT NỐI với mạng Internet. Do vậy, bạn nên bảo vệ mạng WIFI của mình bằng mọi giá.
Bây giờ hãy hít thở sâu! Mình biết đây là một bài học khó để có thể thực hiện hết, nhưng mình đã cố gắng khiến quá trình này dễ hiểu nhất có thể để các bạn làm theo bởi các giao diện quản trị ở mỗi router đều khác nhau.

> Nguồn: Học an ninh mạng cùng Hiếu PC