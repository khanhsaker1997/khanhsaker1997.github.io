---
layout: single
title: "Làm việc với Form trong html"
date: 2017-09-19
categories: [laptrinhweb]
tag: [form]
---

## Tác dụng của Form:
**FORM** dùng để tạo biểu mẫu trong HTML để thu thập thông tin người dùng
Cấu trúc cơ bản:
```html
<form action="1.php">
    Nội dung
</form>
```

- **action** : Mỗi phần tử form đều yêu cầu thuộc tính action. Giá trị của nó là một URL của trang web trên server sẽ nhận và xử lý các thông tin khi người dùng nhấn nút Submit
- **method** : Biểu mẫu gửi  thông tin lên server được sử dụng 1 trong 2 phương thức: get hoặc post.

## Một số điều khiển biểu mẫu trong HTML

* Nhập văn bản:
```html
<input type="text" name="tên" size="10" maxlength="15">
```

* Nhập mật khẩu:
```html
<input type="password" name="tên" size="10">
```

* Nhập văn bản trên nhiều dòng:
```html
<input type="textarea" name="tên" cols="20" row="20">
```

* Nút Radio
```html
<input type="Radio" name="tên" value="giá trị" checked>
```

* Hộp kiểm:
```html
<input type="checkbox" name="hộp kiểm" value="giá trị" checked>
```

* Danh sách sổ xuống:
```html
```