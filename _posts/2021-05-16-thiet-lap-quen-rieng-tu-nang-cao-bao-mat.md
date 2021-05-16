---
layout: single
title: Thiết lập quyền riêng tư nâng cao bảo mật cho trình duyệt
date: 2021-05-16
categories: [an-ninh-mang]
tags: [an ninh mạng]
toc: true
header:
  # overlay_image: "https://i.imgur.com/gMRN85c.jpg"
  image: "https://i.imgur.com/MbmoYhc.png"
excerpt: Firefox và Chrome có các ứng dụng đặc biệt mà bạn có thể tải về và tùy chỉnh để khiến trải nghiệm duyệt web tốt hơn.
#ngay8
---
Ngày hôm nay chúng ta sẽ cùng bàn về các tiện ích mở rộng hỗ trợ riêng tư và bảo mật trong trình duyệt. Firefox và Chrome có các ứng dụng đặc biệt mà bạn có thể tải về và tùy chỉnh để khiến trải nghiệm duyệt web tốt hơn. Những ứng dụng này có sẵn trên các chợ ứng dụng và tiện ích của Firefox và Chrome, tương tự như các ứng dụng mà bạn có thể tải về trên điện thoại, đây đơn giản chỉ là những ứng dụng hoạt động trên trình duyệt của bạn.

Mình sẽ lướt qua một vài tiện ích mở rộng yêu thích và lý do tại sao mình lại chọn chúng, và sau đó chia sẻ với bạn một số mẹo hay vào cuối buổi.
# Bảo vệ bạn khi truy cập trang web không bật HTTPS
Bắt đầu là HTTPS Everywhere. Tiện ích mở rộng này thêm vào một lớp bảo mật cho mỗi trang bạn ghé thăm. Thông thường bạn sẽ thấy HTTP trên thanh tìm kiếm ở đầu mỗi địa chỉ trang web.  Chữ S ở cuối viết tắt của Security và chắc chắn nó tốt hơn giao thức HTTP. Có thể hiểu HTTP giống như việc bạn hét lớn cho mọi người nghe thấy việc mà bạn chính xác đang làm trên từng trang. Giao thức này thật sự không hề bảo mật, vì vậy nếu có kẻ nào đó đang ở trong cùng mạng máy tính và theo dõi hoạt động của các thiết bị nằm trong mạng máy tính đó, chúng có thể thấy bạn đang làm gì. HTTPS khiến kẻ muốn thực hiện điều đó gặp khó khăn hơn. Đương nhiên, họ vẫn sẽ thấy dữ liệu trong mạng, tuy nhiên tất cả dữ liệu đó đều được mã hóa. Trường hợp này giống như việc bạn hét lớn cho mọi người nghe nhưng ở một ngôn ngữ mà không ai hiểu được.

May mắn thay nhiều trang đã triển khai HTTPS ở phần đăng nhập và trên các tên miền con, nhưng HTTP vẫn được sử dụng đối với một số trang web nhỏ. Việc sử dụng tiện ích mở rộng HTTPS Everywhere tự động áp dụng S để bạn không cần phải làm vậy.
# Làm sao để ngăn ngừa việc trình duyệt theo dõi bạn
Privacy Badger được tạo ra bởi Electronic Frontier Foundation và tiếp tục trở thành lựa chọn tuyệt vời đối với tính riêng tư. Tiện ích này chặn các bên thứ ba và các nhà quảng cáo khỏi theo dõi hoạt động của bạn trên các trang web.

Privacy Badger có một giao diện đơn giản và hiển thị màu của tracker vì vậy việc phân biệt trang web nào có gắn đoạn mã của bên thứ ba đang theo dõi bạn rất dễ dàng. Tiện ích này sẽ không ngay lập tức chặn quảng cáo trừ khi những quảng cáo đó có dấu hiệu theo dõi bạn. Có một số tiện ích cũng tương tự như Privacy Badger bao gồm Ghostery và Disconnect, cả hai đều hoạt động khá tốt.
# Những tiện ích chặn quảng cáo tốt nhất
AdBlock là tùy chọn tiện ích cần để chặn quảng cáo trên các trang web. Khi bật lên, tiện ích này sẽ tìm kiếm các quảng cáo của bên thứ 3 trên các trang web và tự động chặn chúng trong quá trình nạp trang. Tuy nhiên, một số trang sẽ cảnh báo bạn về AdBlock bởi vì các trang ấy sống nhờ tiền quảng cáo! Bạn có thể đưa các trang đó vào danh sách trắng để quảng cáo không bị chặn nếu bạn không thể truy cập các trang đó khi bật AdBlock.

Tại sao bạn lại muốn chặn các quảng cáo? Đồng ý là bạn muốn hỗ trợ những trang tin tức và những video trên Youtube. Đây là một câu hỏi hóc búa đối với mình. Mình nhận được ủng hộ thông qua các quảng cáo trên Youtube nhưng việc chèn quảng cáo trên các trang web đôi khi các quảng cáo có thể độc hại và tải mã độc mà bạn không hay biết. Cho nên mình cố gắng chặn quảng cáo bất cứ khi nào có thể và sau đó mình có thể ủng hộ những nhà sáng tạo thông qua các phương thức khác, như qua Patreon hay mua một loại hàng hóa của họ.

Có một số tiện ích tương tự như AdBlock bao gồm AdBlock Plus và uBlock Origin, cả hai đều hỗ trợ các tính năng chặn quảng cáo tương tự. Một số người thích dùng một tiện ích nhất định trong số đó, nhưng vì chúng hoạt động khá giống nhau nên mình sẽ để quyền lựa chọn lại cho các bạn.
# Tiện ích Chống lừa đảo được mọi người tin dùng nhiều
Chống Lừa Đảo (CLĐ - chongluadao[.]vn/) là một tiện ích cộng đồng do Ngô Minh Hiếu cùng với nhiều cộng sự có kinh nghiệm trong lĩnh vực bảo mật tạo ra để giúp người dùng nhận được các đánh giá từ cộng đồng về tính an toàn của một trang web khi truy cập, đây là một tiện ích nên có, dự án còn đang trong giai đoạn phát triển và có nhiều hứa hẹn, do vậy cần sự đóng góp của cộng đồng để tiện ích ngày một hoàn thiện hơn. 

Nhược điểm? Đôi khi chạy các ứng dụng này sẽ làm loạn trình duyệt. Mình phải tắt AdBlock hết lần này đến lần khác để có thể tải trang một cách hoàn chỉnh, bởi vì có trang web sẽ hiện thông báo nếu mình chạy tiện ích chặn quảng cáo. Tuy nhiên lúc nào mình cũng bật tiện ích HTTPS Everywhere. Mình cũng khuyên bạn không nên chạy tất cả các tiện ích mở rộng cùng lúc. Chọn HTTPS Everywhere, kết hợp với tiện ích chặn theo dõi từ bên thứ 3, kết hợp với một tiện ích chặn quảng cáo. Đó là tất cả những gì bạn cần, bởi nếu chạy tất cả những tiện ích mình vừa đề cập bên trên có thể khiến các trang web hiển thị sai, bởi chúng sẽ thực hiện cùng một tác vụ và gây xung đột lẫn nhau.
# Bạn nên chọn trình duyệt nào phù hợp
*Mẹo hay*: Bạn có thể nâng cấp lên một trình duyệt tích hợp sẵn tính riêng tư và bảo mật để chống lại các lỗ hổng HTTP hoặc tự động chặn các quảng cáo. Trình duyệt Brave hay CocCoc thực hiện điều này một cách tuyệt vời. Brave hay CocCoc chặn quảng cáo từ các trang trước khi những trang đó được nạp trên điện thoại hay máy tính, và bởi vì như vậy, các trang web đó sẽ không cảnh báo về việc bạn đang sử dụng tiện ích mở rộng, cho nên sẽ không chặn truy cập của bạn. Trình duyệt Brave cũng cung cấp một cách thức để hỗ trợ các nhà sáng tạo thông qua trình duyệt.

Tại sao mình không giới thiệu trình duyệt đó ngay từ đầu? Bởi vì tính tiện lợi. Mình biết mình sẵn sàng hy sinh một vài tiện lợi để đổi lấy bảo mật tốt hơn cho nên đó là lý do mình sử dụng Brave trên điện thoại. Tuy nhiên nếu bạn không muốn cài trình duyệt khác, nội dung hai ngày thử thách trước sẽ giúp bạn an toàn hơn trên các trình duyệt phổ biến, đồng thời cũng cung cấp cho bạn những sự lựa chọn thay thế.

Có rất nhiều trình duyệt khác được xây dựng lấy bảo mật làm nền tảng và trình duyệt Brave chắc chắn không phải là sự lựa chọn duy nhất của bạn. Mình đã chia sẻ kèm một đường dẫn phía dưới tới một trang liệt kê nhiều tiện ích tuyệt vời, cũng như các trình duyệt sạch mà bạn có thể sẽ muốn cân nhắc đến việc sử dụng. 
 
**Những đường dẫn quan trọng**:

chongluadao[.]vn/

coccoc[.]com

privacytools[.]io/

eff[.]org/https-everywhere

eff[.]org/privacybadger

getadblock[.]com/

adblockplus[.]org/

ghostery[.]com/

disconnect[.]me/

github[.]com/gorhill/uBlock