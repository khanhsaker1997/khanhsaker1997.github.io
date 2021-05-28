---
layout: single
title: Hãy bật xác thực 2 yếu tố trên các tài khoản của bạn
date: 2021-05-28
categories: [an-ninh-mang]
tags: [an ninh mạng]
toc: true
header:
  # overlay_image: "https://i.imgur.com/gMRN85c.jpg"
  image: "https://i.imgur.com/qKtnNU5.png"
excerpt: Xác thực hai yếu tố là gì? 2FA là một loại xác thực đa yếu tố. 2FA bao gồm ít nhất hai trong ba yếu tố gồm kiến ​​thức (thứ bạn biết), tài sản (thứ bạn có), và thuộc tính (thứ định nghĩa con người bạn)
#ngay13
---
# Xác thực 2 yếu tố là gì?
Xác thực hai yếu tố là gì? 2FA là một loại xác thực đa yếu tố. 2FA bao gồm ít nhất hai trong ba yếu tố: kiến ​​thức (thứ bạn biết), tài sản (thứ bạn có), và thuộc tính (thứ định nghĩa con người bạn). Thực ra bạn đã áp dụng các yếu tố xác thực này khi bạn đi rút tiền tại máy ATM. Thứ bạn sở hữu có là thẻ ghi nợ và thứ bạn biết là mã PIN - đó là 2FA. 

Trên không gian mạng, 2FA thường bao gồm thứ bạn biết - tên người dùng và mật khẩu - kết hợp thêm với thứ bạn có - một thiết bị tạo ra một mã số để bạn có thể nhập vào.
# Quy trình xác thực 2 yếu tố
Thông thường khi một trang web được thiết lập để sử dụng 2FA, quy trình sẽ diễn ra như sau: bạn đăng nhập vào tài khoản của mình, nhập tên người dùng và mật khẩu sau đó ấn nút đăng nhập. Trang web nhận ra tài khoản đã bật xác thực 2 yếu tố, vì vậy nó sẽ yêu cầu bạn nhập mã 6 chữ số (mã nãy có thể dài hoặc ngắn hơn, tùy vào mỗi trang web), sau đó bạn ấn OK và đăng nhập. Trong hầu hết các trường hợp, mã 2FA được thay đổi theo chu kỳ vài giây, mục đích để mã này không bao giờ cố định.

Bằng cách đó, nếu ai đó có nhìn trộm mã 2FA của bạn thì sau đó hắn cũng không thể sử dụng lại mã đó, vì mã này luôn thay đổi. Trong trường hợp xác thực dựa vào thuộc tính của bạn (thứ là bạn), đó có thể là dấu vân tay, nhận diện giọng nói, quét mống mắt... Một ví dụ về công ty sử dụng xác thực đa yếu tố với dữ liệu sinh trắc học đó là Clear - một công ty đang dần hiện diện tại các sân bay ở Mỹ: họ yêu cầu ID và vé máy bay của bạn, sau đó họ quét vân tay của bạn bằng một đầu đọc mới cho phép bạn thông qua hàng rào bảo mật. Về cơ bản đây là một dây chuyền TSA công nghệ cao.

Làm cách nào để bạn có thể nhận mã 2FA? Bạn có thể mua khóa USB 2FA, giống như khóa do **Yubico** bán tại *yubico. com*. Bạn cũng có thể sử dụng SMS hoặc tải xuống ứng dụng dành cho thiết bị di động và nhận mã. Các cách thức này đều tồn tại một hoặc hai nhược điểm:
# Điểm hạn chế của xác thực 2 yếu tố
Những điểm hạn chế của 2FA: Nếu bạn sử dụng thiết bị (như khóa xác thực hai yếu tố USB) thì bạn phải mang thêm một vật trong túi. Hầu hết mọi người đều không muốn làm điều đó nhưng bởi vì khóa bảo mật không phải là một thiết bị có kết nối mạng, nó không thể bị tấn công và ít có khả năng bị đánh cắp. Tất nhiên, bạn có thể làm mất hoặc làm hỏng, lúc đó bạn có thể gặp rắc rối lớn. Nếu bạn sử dụng phương thức xác thực thứ hai là điện thoại di động, điện thoại của bạn có thể bị đánh cắp hoặc bị hỏng, khi đó bạn sẽ không thể truy cập vào khóa 2FA bất kể chúng có được tạo ra trong ứng dụng 2FA hay tin nhắn SMS.

Nếu bạn sử dụng một ứng dụng hay đổi điện thoại khác, bạn cần có một vài mã dự phòng để truy cập tài khoản trực tuyến cho đến khi tài khoản mới của bạn được thiết lập lại (những mã này thường được gửi cho bạn khi thiết lập xác thực 2 yếu tố lần đầu tiên trên một trang web). Hoặc bạn có thể sử dụng ứng dụng sao lưu mã 2FA. Tuy nhiên, điều này có thể không an toàn vì người khác có thể tải xuống ứng dụng và tìm ra thông tin đăng nhập của bạn. SMS là lựa chọn tồi tệ nhất vì những kẻ tấn công có thể sẽ đánh lừa nhà cung cấp dịch vụ điện thoại di động chuyển số điện thoại trên thẻ SIM sang điện thoại mới. Vì vậy, ngay cả khi điện thoại của bạn không bị đánh cắp, kẻ tấn công vẫn có thể bắt đầu nhận tất cả các cuộc gọi và tin nhắn trên một chiếc điện thoại mới. Điều đó có nghĩa là mã SMS 2FA có thể được gửi cho kẻ tấn công thay vì cho bạn.
# Tại sao chúng ta vẫn phải sử dụng xác thực 2 yếu tố.
Vậy tại sao chúng ta lại sử dụng 2FA nếu tồn tại những nhược điểm như vậy? Lý do là vì nếu tên người dùng và mật khẩu tài khoản trực tuyến của bạn có bị đánh cắp, kẻ tấn công sẽ không thể xâm nhập vào tài khoản của bạn mà không có mã 2FA. Thường thì hacker sẽ không nhắm vào một mình bạn để tấn công, thay vào đó chúng nhắm vào các công ty để đánh cắp thông tin tài khoản khách hàng. Việc có mã 2FA vẫn sẽ ngăn cản hacker không thể truy cập vào tài khoản của bạn ngay cả khi chúng có thông tin đăng nhập, vì vậy bạn có thể yên tâm rằng các tài khoản trực tuyến của mình vẫn an toàn (tất nhiên, nếu bạn phát hiện thấy một tài khoản đã bị xâm phạm, tốt nhất bạn nên thay đổi mật khẩu đó NGAY LẬP TỨC).
Một số tùy chọn cho 2FA: Mình đã đề cập đến Yubikeys của Yubico để xác thực 2 lớp dựa trên thiết bị USB, tuy nhiên ngoài kia cũng có các ứng dụng dành cho điện thoại thông minh của bạn. Google Authenticator, Authy và Duo là một vài tùy chọn để bạn cân nhắc sử dụng.

Tải xuống bất kỳ ứng dụng nào bạn thích trên điện thoại và xác minh danh tính. Mình sử dụng Authy, ứng dụng này sẽ gửi mã đến số điện thoại của mình để xác minh rằng mình thực sự sở hữu số điện thoại đó. Sau đó, ứng dụng này cho phép đặt mật khẩu chính và đăng nhập. Sau khi đăng nhập, mình có thể thêm tất cả các tài khoản trực tuyến mình muốn. Mình đặc biệt thích sử dụng Authy vì ứng dụng này cung cấp giải pháp sao lưu có mã hóa và thực hiện sao lưu các token 2FA lên các máy chủ Authy.

Đây KHÔNG phải là tùy chọn an toàn nhất, tuy nhiên bởi ứng dụng này tiện lợi cho nhu cầu của mình, bởi vì mình phải liên tục kiểm tra lại và đổi sang các điện thoại khác nhau. Hầu hết các ứng dụng không có tùy chọn sao lưu, thành thật mà nói điều này an toàn hơn bởi vì bạn không nên đặt niềm tin tuyệt đối vào một công ty để bảo vệ dữ liệu của mình - thay vào đó, tất cả đều được lưu trữ cục bộ trên điện thoại của bạn. NHƯNG một lần nữa, nếu bạn làm mất chiếc điện thoại đó, đời bạn coi như tàn.

Làm thế nào để đời bạn không héo tàn? Một số trang web trực tuyến cung cấp bảo mật 2FA đồng thời cũng cung cấp mã dự phòng khi bạn thiết lập 2FA lần đầu tiên. Ví dụ: Google cho phép bạn thiết lập 2FA kèm theo đó là khoảng 10 mã dự phòng khác nhau - Google yêu cầu bạn sao chép hoặc viết lại các mã này vì đây là cách DUY NHẤT bạn có thể đăng nhập tài khoản trong trường hợp bạn không thể truy cập ứng dụng 2FA. Đối với bất kỳ tài khoản nào có các mã dự phòng này - hãy ghi chép lại và lưu trữ chúng ở nơi an toàn (két sắt chẳng hạn). Mình lưu trữ các mã này cùng với các tài liệu quan trọng khác mà hầu như không bao giờ chạm vào và hiếm khi cần dùng đến.
# Làm sao để biết những trang web nào sử dụng 2FA?
Bây giờ, làm thế nào để bạn biết những trang web nào sử dụng 2FA? Điều này khá dễ dàng, có 2 trang web có thể cho bạn biết dịch vụ trực tuyến nào có tính năng bảo mật 2FA và cách để kích hoạt. 2fa.directory là trang web hoàn hảo để tìm ra những dịch vụ trực tuyến phổ biến nào đã có sẵn 2FA.

Vì vậy, hãy lục lọi trong chương trình quản lý mật khẩu của bạn và tìm ra trang web nào chấp nhận xác thực 2 yếu tố và bật tính năng này lên, quét mã QR bằng ứng dụng 2FA mới của bạn và bắt đầu sử dụng các mã 2FA hoàn toàn mới đó. Điều này sẽ phức tạp hơn một chút khi phải mang theo điện thoại bất cứ khi nào bạn cần đăng nhập vào một trang web mới, nhưng đối với những kẻ tấn công thì đây cũng là một vấn đề đau đầu, chúng hầu như sẽ từ bỏ việc đánh cắp tài khoản.

Những phần mềm cho việc bảo mật xác thực 2 yếu tố:

*Authy*

*Google Authenticator*

*Duo Security*
>Nguồn: Học an ninh mạng cùng Hiếu PC