---
layout: single
title: Cách phát hiện mình có bị theo dõi trên máy tính
date: 2020-06-14
categories: [lap-trinh]
tags: [lập trình,windows 10]
toc: true
header:
  # overlay_image: "https://i.imgur.com/Zfh9hgr*.jpg"
  image: "https://i.imgur.com/DUd3nqS.jpg"
excerpt: Bài viết này sẽ hướng dẫn các bạn vài cách phát hiện mình có đang "bị theo dõi" trên máy tính.
---
## Bị theo dõi, tại sao?

Lí do bạn bị theo dõi có rất nhiều. Với bản thân mình, mình từng gặp một số trường hợp sau:
* Dính phải keylogger từ một số đối tượng xấu muốn chiếm đoạn tài khoản / tài sản.
* Trường học giám sát hoạt động của học sinh.
* Công ty giám sát hoạt động nhân viên.
* Rình mò crush.
* Cho vui :v .

Ắt hẳn nếu bạn quan tâm tới Privacy (Quyền riêng tư), thì bạn sẽ lo lắng về việc bị theo dõi rất nhiều. Việc bị theo dõi không chỉ đơn giản là những thứ cá nhân và riêng tư mà bạn làm sẽ bị theo dõi bởi người khác. Đôi khi, việc bị theo dõi sẽ khiến bạn gặp phải những rắc rối rất to lớn.

Điển hình cho bạn, ngày xưa bộ đội dẫn tín hiệu analog ngoài chiến trường. Nếu để kể địch nghe lén được, mọi kế hoạch sẽ đổ vỡ.

**Note: **Hầu đa máy tính đều bị tracking thông qua "Keylogger", nên mình sẽ nói nhiều về Keylogger thay vì các loại phần mềm theo dõi khác nhé! (đa phần đều như nhau).

## Dấu hiệu ban đầu

Qua quá trình phát triển một số công cụ tương tự "Keylogger", mình có thể đưa ra một số dấu hiệu của phần mềm "giám sát" / "theo dõi"...

**1. Tốn tài nguyên**

Các phần mềm giám sát đều hầu đa hoạt động dưới dạng "thời gian thực". Có nghĩa là các tác vụ tracking sẽ liên tục được lặp đi lặp lại theo một chu kì kín. Hầu hết các tác vụ này sẽ có mục đích:
* Tracking thông qua hệ thống (gắn 1 cái như thiết bị nghe lén vào hệ thống để xem bạn đang làm gì).
* Ghi lại liên tục vào 1 file log hoặc upload lên server
* ...

Mình sẽ không nêu hết ở đây, tuy nhiên bạn có thể hiểu rằng các tác vụ trên đều "rất nặng", có nghĩa là sẽ mất thời gian hơn cho máy tính để xử lí.

Vì vậy, nếu một ngày nọ cái máy tính của bạn chậm đi rõ rệt một cách đột ngột, rất có thể bạn đang bị theo dõi.

Một dấu hiệu nữa để nhận diện là máy tính "giật / lag" theo chu kỳ. Cái này thì bạn có thể cảm nhận rõ hơn. Theo mình thấy, hầu hết các công cụ Logging bây giờ đều sẽ "gửi dữ liệu" về máy chủ một cách định kỳ. Vậy thì chỉ những khi đó máy tính mới "giở chứng". Đồng nghĩa rằng không phải lúc nào máy cũng lag mà chỉ lag theo 1 khoảng định kỳ nào đó. Chú ý được vấn đề này, bạn sẽ biết tình trạng của máy ngay.

**2. Hiện tượng lạ**

Khi dính phải một. số phần mềm giám sát, sẽ không cần bạn ở trên Phao sần Pa lây để máy tính của bạn gặp phải một số hiện tượng lạ.

Nếu màn hình của bạn nhấp nháy, con chuột của bạn chuyển liên tục giữa trạng thái bàn tay và con trỏ, trình duyệt web của bạn nhảy tưng tưng giữa các trang, ... thì xin chúc mừng, có vẻ bạn đã gặp một số vấn đề liên quan tới keylogger.

Một số keylogger sẽ chụp màn hình khi bạn làm việc, vậy nên ở một số máy tính không đáp ứng nổi yêu cầu về phần cứng, màn hình sẽ bị nháy 1 cái (tuột frame). Ngày nay máy tính đã dần cải thiện về phần cứng nên có thể sẽ khó hơn cho bạn để nhận diện được vấn đề này.

Một vấn đề nữa bạn nên chú ý đó là khi typing. Một số keylogger sẽ gắn trình ghi phím vào hệ thống. Tương tự như unikey vậy, nó sẽ nhận diện "từng phím bạn gõ". Vậy nên khi dính keylogger, lâu lâu keylogger sẽ xung đột với unikey và gây ra nhiễu phím (lâu lâu gõ thì mất phím).

**3. Tiến trình lạ (Processes)**

Tất nhiên phần này sẽ nặng về Technical hơn cho những người không có nhiều kiến thức về máy tính.

Đôi khi bạn mở Task Manager và sẽ thấy một số tiến trình với tên lạ hoắc. Hoặc các tiến trình hẹ thống (như svchost hay explorer) nhưng được chạy dưới quyền tài khoản sử dụng Windows thay vì System. Well, bạn đã dính virus hay keylogger gì gì đấy rồi!!!

Cách nhận diện các processes này rất khó, tuy nhiên bạn vẫn có thể thử bằng cách:

Step 1: Mở Task Manager

Step 2: Qua tab Startup

Step 3: Tìm trong danh sách xem có tiến trình nào "lạ lạ" không. Nếu có thì tắt nó đi. (Cách gỡ mình sẽ nói sau).

Vâng, đó là một số dấu hiệu cơ bản để bạn nhận diện ra keylog. Tất nhiên, đa phần keylog sẽ làm máy bạn chậm đi rõ rệt. Nên, dựa trên performance, bạn có thể dự đoán được điều gì đang diễn ra!

## Phải làm gì đây?

Tuy hầu như nếu bạn dính keylog, tức là bạn hơi thiếu kinh nghiệm về Tech. Đôi khi, bạn sẽ không cần phải đọc bài viết này nếu như bạn đã biết máy tính mình có dính keylog hay không :V (Vì đa phần nếu bạn đã biết thì bạn cũng biết cách gỡ luôn rồi). Tất nhiên, mình vẫn sẽ đề cập một số cách hữu hiệu cho bạn!

**1. Truy sát**

Có thể bạn không biết, mấy con keylog chia làm hai loại: Hardware và Software. Nếu bạn dính phải Hardware, rất đơn giản, gỡ nó ra khỏi máy tính là xong!
Hardware thực ra rất hiếm ở VN. Những ông. nào mà đã dùng Hardware thì đều thuộc "tầm cỡ hết". Mình sẽ điểm qua cho bạn một số con hardware mà mình đã gặp:
* USB trung chuyển giữa keyboard và máy tính (ghi lại lịch sử bấm phím, tín hiệu bàn phím rồi gửi về server).
* USB track tín hiệu màn hình.
* Network logger (cái này rất hiếm, rất đắt).

Đỉnh hơn còn có cả loại gắn vào mainboard, ghi lại mọi thứ luôn cơ :v

Hardware thì dễ loại bỏ, nhưng lại khó nhận ra vì cần yêu cầu bạn hiểu về phần cứng máy tính. Tất nhiên, nếu thấy 1 cái USB nào lạ hoắc hoặc tự dưng cái cáp màn hình / cáp bàn phím "lạ lạ", bạn có thể bắt đầu nghi ngờ rồi đấy.

Với loại software, sẽ khó loại bỏ hơn một chút, tuy nhiên, ở mục 3 của phần trên, mình đã nói sơ 1 cách hữu hiệu để bạn nhận diện...

Nhận diện xong, sẽ đến phần "xử chém".

**2. Diệt keylogger**

Trước hết, mình xin lưu ý rằng nếu bạn không có chuyên môn, cách nhanh nhất là cài Antivirus như Malware Bytes chẳng hạn. Mình không provide solution các phần mềm antivirus vì cá nhân mình không sử dụng chúng.

Sau khi truy ra thủ phạm ở phần trên. Với hardware thì rất dễ, bạn rút ra là xong. Tuy nhiên, nếu với software, mình sẽ chỉ bạn một cách khác: Sử dụng Safe Mode.

***Safe Mode là gì?***
> Safe Mode là chế độ giúp Windows khởi động với thiết bị và dịch vụ tối thiếu từ đó có thể chuẩn đoán xem Windows bị lỗi do đâu và tiến hành khắc phục lỗi. Khi vào chế độ này các phần mềm cài thêm sẽ không hoạt động và virus cũng sẽ không gây ảnh hưởng.

Cách mở Safe Mode như thế nào, có thể bạn sẽ tìm ra được rất nhiều cách ở trên Google, mình không đề cập. ở đây vì nếu dẫn link bài viết thì bài đăng sẽ mang tính quảng cáo :v

Một kết luận chung khi bạn dính keylogger, hãy sử dụng phần mềm diệt nếu bạn không có nhiều kiến thức về tin học...

> Nguồn: nstudio.vn