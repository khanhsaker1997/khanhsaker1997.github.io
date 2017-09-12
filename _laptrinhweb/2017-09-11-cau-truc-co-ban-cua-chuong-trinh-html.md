---
layout: single
title: "Tổng quan và cấu trúc cơ bản của ngôn ngữ HTML"
date: 2017-09-11
categories: [laptrinhweb]
tags: [thẻ,tag,html]
lang: vi
header:
  overlay_image: "/assets/img/laptrinhweb/header.jpg"
og_image: "/assets/img/laptrinhweb/header.jpg"
---
## Cấu trúc cơ bản của một trang web:

Một trang web HTML có cấu trúc cơ bản gồm các phần như sau:

```html
<!DOCTYPE html> <!--Thẻ duy nhất nằm ngoài thẻ <html> để cung cấp phiên bản HTML được sử dụng trong website -->
<html>  <!--Đây là thẻ khai báo trang web định dạng theo kiểu HTML -->
<head> <!--Thẻ này chứa các thông tin về trang web. Những thông tin này không được hiển thị trên cửa sổ trình duyệt -->
    <title>Đây là thẻ tiêu đề</title> <!-- Nội dung của thẻ này được hiển thị ở thanh tiêu đề của cửa sổ của trình duyệt -->
</head>
<body>
Mọi thành phần muốn hiển thị trên cửa sổ thì đều phải được viết trong cặp thẻ body này
</body>
</html>
```

## Cấu tạo của một thẻ tag:
```html
Bao gồm: <tenThe> Nội dung bên trong </tenThe>
Ví dụ thẻ tag <p></p>:
```

* Mỗi thẻ sẽ có thêm các thuộc tính nói cho chúng ta biết thêm về thông tin của các thành phần:

```html
<tenThe TenThuocTinh = "values" > Nội dung bên trong </tenThe>
Ví dụ thẻ tag <p bgcolor = "red">Dòng chữ này sẽ có nền màu đỏ</p> 
```

## Cách tạo một trang Web trên máy tính:
Bạn chọn bất kì một công cụ soạn thảo nào ví dụ như **notepad** có sẵn trên Windows rồi viết đoạn code cơ bản như bên trên. Sau đó lưu vào với đuổi **.html**. Ô cê bạn đã có một trang web, và bạn hãy mở nó lên với trình duyệt FireFox hoặc GoogleChrome nha :smile:

### Tóm lại cần nhớ:
* Trang HTML là một tài liệu dạng văn bản
*  HTML sử dụng các thẻ tags (các ký tự được đặt trong cặp
ngoặc nhọn) để cung cấp thông tin.
*  Các thẻ tags thƣờng đƣợc gọi nhƣ là các phần tử
*  Thẻ tags thƣờng đi theo cặp. Thẻ mở biểu thị bắt đầu một
đoạn nội dung. Thẻ đóng kết thúc một đoạn nội dung.
*  Thẻ mở có thể mang thêm thuộc tính để cung cấp thêm
thông tin về nội dung bên trong
*  Thuộc tính bắt buộc phải bao gồm 2 giá trị là name và
value
*  Để học tốt HTML, thì chúng ta cần phải hiểu hết những thẻ
tags có sẵn để chúng ta có thể sử dụng đƣợc
