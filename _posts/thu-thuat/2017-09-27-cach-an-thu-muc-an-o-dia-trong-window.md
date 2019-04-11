---
layout: single
title: "Cách ẩn thư mục và ẩn ổ đĩa trong windows không cần dùng phần mềm"
date: 2017-09-27
categories: [thu-thuat]
tags: [ẩn thư mục,ẩn ổ đĩa]
lang: vi
image: "/assets/img/post/thu-thuat-o-dia.jpg"
header:
  overlay_image: /assets/img/post/thu-thuat-o-dia.jpg
excerpt: "Đôi khi vì lí do nào đó bạn muốn ẩn đi những thư mục, thậm chí ẩn đi cả ổ đĩa cứng trong máy tính của bạn. Bài viết này mình sẽ hướng dẫn các bạn"
---
Đôi khi vì lí do nào đó bạn muốn ẩn đi những thư mục, thậm chí ẩn đi cả ổ đĩa cứng trong máy tính của bạn. Bài viết này mình sẽ hướng dẫn các bạn.

## Cách ẩn 1 file hoặc 1 thư mục:
### Cách 1:
Một cách đơn giản thông thường khiến bạn có thể ẩn đi thư mục hoặc file là bạn hãy `Click` chuột phải vào thư mục đó rồi chọn `Properties`. Trong mục `Gerenal` bạn chọn `Hidden`. Sau đó nhấn `Apply`
![anh1](/assets/img/trickit/an-thu-muc1.png)

Tuy nhiên cách này rất dễ bị lộ vì người khác chị cần bật chế độ view Hidden iteam thì thư mục đó vẫn hiển thị lên.

### Cách 2:
Các bạn tạo ra 1 file có nội dung bên trong là coppy đoạn code dưới đây và lưu lại với đuôi mở rộng `.bat`.

Code:
```python
cls
@ECHO OFF
title Folder Private
if EXIST "khanhsaker97 Locker" goto UNLOCK
if NOT EXIST Private goto MDLOCKER
:CONFIRM
echo Are you sure you want to lock the folder(Y/N)
set/p "cho=>"
if %cho%==Y goto LOCK
if %cho%==y goto LOCK
if %cho%==n goto END
if %cho%==N goto END
echo Invalid choice.
goto CONFIRM

:LOCK
ren Private "khanhsaker97 Locker"
attrib +h +s "khanhsaker97 Locker"
echo Folder locked
goto End

:UNLOCK
echo Enter password to unlock folder
set/p "pass=>"
if NOT %pass%== PASSWORD goto FAIL
attrib -h -s "khanhsaker97 Locker"
ren "khanhsaker97 Locker" Private
echo Folder Unlocked successfully
goto End

:FAIL

echo Invalid password
goto end

:MDLOCKER
md Private
echo Private created successfully
goto End

:End
```
Bạn `Click` vào file `.bat` này sẽ sinh ra 1 folder tên là `private` ở cùng thư mục với file đó. Bạn muốn ẩn những thư mục hay file gì thì hãy cho hết vào thư mục `private` đó sau đó lại `Click`tiếp vào file .bat đó. Xong rồi bây giờ thư mục `private` đã bị ẩn đi.

Nếu bạn muốn mở nhìn thấy và mở file đó ra thì phải `Click` tiếp vào file `.bat` đó và nhập mật khẩu là `PASSWORD` thì sẽ hiện ra. Mật khẩu bạn có thể thay đổi bằng cách xóa từ `PASSWORD` ở trong đoạn code và thay bằng mật khẩu do bạn đặt ra.
## Cách ẩn 1 ổ đĩa:
Đầu tiên bạn mở cmd lên và gõ `DISKPART` thì sẽ hiện ra 1 cửa sổ như thế này:
![anh2](/assets/img/trickit/an-thu-muc2.png)

Trong cửa sổ này bạn gõ:
```
LIST VOLUME
(Lệnh này để liệt kể các ổ đĩa)
```
![anh3](/assets/img/trickit/an-thu-muc3.png)

Các ổ đĩa được đánh số thứ tự 0,1,2,3 với tên là D,C,E,F ... và nhiều thông tin.

Gõ:
```
SELECT VOLUME 3
(LỰA CHỌN Ổ ĐĨA 3 là ổ đĩa muốn ẩn)
 
REMOVE LETTER F
(F LÀ TÊN Ổ ĐĨA ĐÓ). lệnh này sẽ ẩn ổ đĩa F đi.

ASSIGN LETTER F
Lệnh này sẽ làm hiện lại ổ đĩa vừa ẩn (LƯU LẠI VỚI TÊN Ổ ĐĨA BAN ĐẦU ĐỂ TRÁNH NHẦM ĐƯỜNG DẪN VỚI NHỮNG GÌ ĐÃ CÀI ĐẶT)
```
Thật đơn giản phải không. Có thể dùng cách này để troll đứa bạn cùng phòng mình :D

## Sửa lỗi USB không hiện dữ liệu bên trong
Mở cmd và di chuyển vùng làm việc của cmd tới ổ USB đó gõ:

`ATTRIB -S -H /S /D` rồi  đợi chút là dữ liệu sẽ hiển thị ra ngay nha.

Các bạn có thể xem chi tiết tại đây:

<iframe width="560" height="315" src="https://www.youtube.com/embed/QU3fDN0hrJ8" frameborder="0" allowfullscreen></iframe>

>By Nguyễn Duy Khánh