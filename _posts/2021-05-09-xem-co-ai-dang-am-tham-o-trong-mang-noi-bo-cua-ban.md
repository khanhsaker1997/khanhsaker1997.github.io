---
layout: single
title: Xem ai đang âm thầm ở trọng mạng wifi nhà bạn
date: 2021-05-09
categories: [an-ninh-mang]
tags: [an ninh mạng]
toc: true
header:
  overlay_image: "https://i.imgur.com/b6kEhB1.png"
  image: "https://i.imgur.com/b6kEhB1.png"
excerpt: Ai đang ở trong hệ thống mạng của chúng ta? Làm sao để loại bỏ những thiết bị không mời mà đến, và các thiết bị nào nên ở trong mạng khách hay mạng nội bộ.
#ngay4
---
# Ai đang ở trong hệ thống mạng của chúng ta?
Làm sao để loại bỏ những thiết bị không mời mà đến, và các thiết bị nào nên ở trong mạng khách hay mạng nội bộ.

Đăng nhập vào giao diện quản trị router qua trình duyệt web. Để làm được điều đó, nhập địa chỉ IP có dạng giống như 192.168.1.1 hoặc gần giống vậy. [Bài viết trước](/an-ninh-mang/hay-bao-ve-he-thong-mang-trong-nha-ban/) chúng ta đã bàn về cách làm thế nào thay đổi tất cả các cài đặt trên router để bảo mật tốt hơn. Nhiều khả năng mọi thiết bị đang ở trong hệ thống mạng của bạn hiện giờ là những thiết bị hợp lệ nếu như bạn đã thay đổi SSID và passcode và thông tin đăng nhập quản trị trong bài viết trước.

# Làm gì khi phát hiện có thiết bị lạ trong mạng nội bộ
Tuy nhiên, trường hợp hy hữu nếu có thiết bị nào đó lẻn vào mà đáng lẽ không nên xuất hiện ở đó, hãy kiểm tra danh sách các client. Các client (thiết bị khách) là tất cả các thiết bị kết nối với hệ thống mạng của bạn – như điện thoại thông minh, thiết bị IoT, máy tính bàn, thiết bị chơi game, hay bất cứ thiết bị nào khác. Bạn nên có khả năng nhận biết mọi thiết bị trong danh sách đó, nhưng nếu vẫn có thiết bị lạ, bạn sẽ cần phải quay lại bài viết trước và thay đổi lại các cài đặt một lần nữa dựa theo lời khuyên của mình.

Bao gồm việc bật WPA2, tắt WPS, và hạn chế truy cập vào mạng nội bộ trừ các thiết bị của bạn, chứ không phải các thiết bị Internet vạn vật hay những vị khách ghé thăm. Hy vọng bạn không bỏ lỡ bài viết trước nói về bảo vệ hệ thống mạng trong nhà bạn, bởi nếu như bạn có làm vậy 😣 !! , những gì mình nói ngày hôm nay sẽ chẳng còn chút giá trị nào.

# Bằng mọi giá phải kiểm soát được những thiết bị kết nối trong mạng nhà bạn
Bây giờ hãy kiểm tra lại danh sách client một lần nữa. Bạn có thấy thiết bị nào kỳ lạ không? Một vài sản phẩm có thể chỉ hiển thị số model thay vì một cái tên dễ hiểu. Nếu bạn nghi ngờ thiết bị có tên kỳ cục ấy thuộc sở hữu của bạn, hãy tắt thiết bị đó, làm mới danh sách client, và xem nó có biến mất không. Nếu có, thì bạn đã tìm ra thủ phạm rồi đấy!

Bây giờ hãy phân loại thiết bị theo loại mạng (khách hoặc nội bộ). Hy vọng bạn nghe theo lời khuyên của mình và cách ly các thiết bị IoT khỏi điện thoại thông minh và laptop bằng cách tạo mạng khách. Nhưng hãy cùng đi sâu hơn nữa. IoT là viết tắt của Internet of Things, bao gồm những thiết bị có kết nối mạng. Các thiết bị thuộc danh mục IOT phổ biến như Nest Thermostat, camera bảo vệ có kết nối internet, Roomba Robots, các hệ thống chăm sóc thú cưng, Amazon’s Echo, Google Home, xe của bạn (nếu có kết nối với Internet), FitBit, kể cả sách điện tử Kindle cũng được cho là IoT. Vấn đề với các thiết bị IoT đó là đôi khi chúng được xây dựng thiên về tính tiện lợi thay vì tính bảo mật.

# Các thiết bị IOT có đảm bảo tính bảo mật?
Trong thế giới ngày nay, bạn có thể điều này như hành động để cánh cửa trước của bạn mở tung. Việc để cửa luôn mở thì cực kỳ tiện lợi rồi, tuy nhiên bạn phải dành thời gian để đóng và khóa lại bởi vì bạn muốn bảo mật. Chúng ta chấp nhận bỏ thêm công sức vào việc này bởi vì bảo mật đánh bại sự tiện dụng. Các thiết bị IoT có xu hướng khiến cho cuộc sống của chúng ta dễ dàng, tiện lợi hơn theo cách này hay cách khác. Nhưng đôi khi chúng lại gạt vấn đề bảo mật sang một bên chỉ để khiến việc sử dụng trở nên dễ dàng.

# Ngay cả khi thiết bị IOT trong mạng bị xâm nhập, nó vẫn hoạt động bình thường
Điều này chắc chắn sẽ gây hại tới chúng ta, một khi có kẻ nào đó tìm thấy backdoor hay một lỗi bảo mật nằm trong thiết bị, và phá hoại hệ thống mạng của chúng ta. Vì các thiết bị IoT này hiện không được bất kỳ cơ quan có thẩm quyền nào quản lý về bảo mật, các nhà sản xuất có thể làm bất cứ điều gì họ muốn. May mắn thay, vẫn còn một vài người quan tâm đến vấn đề bảo mật hơn những người khác, và rồi kết cục chúng ta phải trả thêm một khoản phí để có thêm các lớp bảo mật – có rất nhiều người không có khả năng chi trả cho các thiết bị được bảo vệ. Điều đáng sợ dưới góc nhìn người tiêu dùng đó là trong hầu hết mọi thời điểm bạn không thể nhận thức được khi nào một thiết bị IoT bị xâm nhập, bởi vì thiết bị đó có thể vẫn hoạt động như bình thường.

Hãy nhìn vào danh sách client trên router của bạn, và tìm hiểu xem thiết bị nào là IoT và thiết bị nào không phải. Nếu bạn thắc mắc một thiết bị nào đó có phải là IoT hay không, hãy cứ liệt nó vào danh sách các thiết bị IoT phòng trường hợp độ bảo mật của thiết bị ấy cực kì tệ.

# Nên khôi phục và thiết lập lại tất cả thiết bị trong mạng của bạn
Khi bạn không còn có thể loại bỏ bất cứ thiết bị nào ra khỏi router qua danh sách client, bạn có thể reset từng thiết bị và đưa chúng vào hệ thống mạng khách mới của bạn để các thiết bị đó không thể gây hại tới bất cứ thiết bị nào bên trong mạng nội bộ của bạn nếu lỡ chúng bị xâm nhập. Quá trình này sẽ tốn chút thời gian để thực hiện trừ khi bạn mở ứng dụng trên điện thoại thông minh và thực hiện qua giao diện ứng dụng, tận dụng thời gian và siêng năng lên.

Tin mình khi mình nói điều này hoàn toàn xứng đáng và đây là một cách quan trọng để bảo vệ máy tính và điện thoại thông minh khỏi các cuộc tấn công trên các thiết bị Internet vạn vật..

Để làm tốt hơn nữa – chỉ cần ngắt kết nối thiết bị. Cái máy hút bụi Roomba kia có THẬT SỰ cần kết nối mạng Internet? Bạn có THẬT SỰ cần kết nối tủ lạnh với mạng WifI? Nếu không thì tắt chức năng kết nối đó đi. Mình nghiêm túc đó – chẳng ai có thể tấn công thiết bị qua hệ thống mạng nếu như thiết bị đó không nằm trong mạng ngay từ đầu.
Hãy đảm bảo rằng bạn đã cập nhật firmware trên tất cả các thiết bị có kết nối mạng, và nếu bạn có tùy chọn để tắt dịch vụ gọi là Universal Plug and Play, viết tắt là UPnP để giúp các thiết bị tự động kết nối, nhưng dịch vụ này cũng là điểm yếu bảo mật trên một số thiết bị. Nếu tùy chọn tắt UPnP có ở trên thiết bị của bạn thì hãy tắt đi. Nếu thiết bị có tùy chọn sao lưu dữ liệu lên trên đám mây, hãy đảm bảo chính sách bảo mật của các thiết bị đó có sử dụng mã hóa.

Thậm chí ngay cả khi đó, bạn không thể chắc chắn được hoàn toàn, ngoài việc chỉ ghi nhận thông tin đó thông qua lời nói. Nếu bạn có thể tồn tại mà không cần các bản lưu trữ đám mây từ thiết bị thì hãy tắt tính năng sao lưu dữ liệu lên đám mây đi.

# Không nên kết nối thiết bị cá nhân vào mạng nội bộ của Công ty
Cuối cùng, nếu bạn mang theo bất cứ thiết bị nào đến nơi làm việc, đừng kết nối chúng với hệ thống mạng nội bộ của doanh nghiệp. Hãy hỏi thăm xem chỗ làm việc của bạn có hệ thống mạng khách để bạn có thể kết nối vào hay không, nhưng hãy đảm bảo rằng mạng đó có thể liên tục truy cập và thực hiện kiểm tra các thiết bị trong hệ thống mạng để đảm bảo an toàn.

Hãy thực hiện như vậy đối với hệ thống mạng nhà bạn – liên tục kiểm tra các thiết lập của router và danh sách client để đảm bảo chúng vẫn bảo mật, được cập nhật và có tính riêng tư. Bảo mật là lĩnh vực liên tục thay đổi, vì vậy điều quan trọng đó là bạn phải luôn cập nhật các bản firmware mới hoặc các thiết bị trên hệ thống mạng của bạn.
>Nguồn: Học an ninh mạng cùng Hiếu PC