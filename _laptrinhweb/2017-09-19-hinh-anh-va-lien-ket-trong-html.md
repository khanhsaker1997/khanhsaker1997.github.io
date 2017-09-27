---
layout: single
title: "Chèn hình ảnh và liên kết trong HTML"
date: 2017-09-19
categories: [laptrinhweb]
tag: [img,hình ảnh,liên kết]
---

## Chèn hình ảnh:
###Cú pháp cơ bản:
 ```html
 <img src="địa chỉ tương đối or tuyệt đối hình ảnh" alt="ảnh con mèo" title="ảnh đẹp">
 ```

###Các thuộc tính:
 - **src**: thuộc tính này nói cho trình duyệt biết nơi có thể tìm thấy bức ảnh và hiển thị ra ngoài
 - **alt**: cung cấp thông tin mô tả về bức ảnh, dòng thông tin này sẽ được hiển thị thay thế bức ảnh trong trường hợp trình duyệt không thể load ảnh thành công.
 - **title**: Bạn cũng có thể sử dụng thuộc tính này để cucng cấp thêm thông tin về bức ảnh/ Nhiều trình duyệt sẽ hiển thị nội dung của thuộc tính này dưới dạng tooltip khi chúng ra di chuyển chuột qua ảnh.
 - **height**: thuộc tính quy định chiều cao của bức ảnh.
 - **width**: thuộc tính quy định độ rộng của bức ảnh.

 > Lưu ý: ảnh có kích thước càng lớn thì trình duyệt tải về càng lâu, do đó không nên sử dụng hình ảnh quá to để chèn vào tài liệu.

 Nơi đặt bức ảnh:
  - Trước một đoạn văn: Đoạn băn bản sẽ bắt đầu một dòng mới dưới bức ảnh.

![ảnh 1](/laptrinhweb/anh1.jpg)
Đây là hình ảnh ở trên đoạn văn này. Đây là hình ảnh ở trên đoạn văn này. Đây là hình ảnh ở trên đoạn văn này. Đây là hình ảnh ở trên đoạn văn này.
  - Dòng đầu tiên bên trong đoạn: Ảnh sẽ được coi là "1 phần" của dòng văn bản.
![ảnh 2](/laptrinhweb/anh2.jpg) Đây là hình ảnh ở dòng đầu tiên trong đoạn này. Đây là hình ảnh ở dòng đầu tiên trong đoạn này. Đây là hình ảnh ở dòng đầu tiên trong đoạn này. Đây là hình ảnh ở dòng đầu tiên trong đoạn này.
  - Dòng bên trong đoạn văn bản: Ảnh sẽ được coi là một từ trong văn bản.
Đây là ảnh như là 1 từ trong băn bản. Đây là ảnh như là 1 từ trong băn bản. ![ảnh 3](/laptrinhweb/anh3.jpg) Đây là ảnh như là 1 từ trong băn bản. Đây là ảnh như là 1 từ trong băn bản. Đây là ảnh như là 1 từ trong băn bản.
 
## Chèn liên kết:
Cú pháp cơ bản:
```html
<a href="https://facebook.com/khanhsakercsdn">Khánh Saker</a>
<a href="https://facebook.com">Facebook</a>
```

###Các thuộc tính:
- **href**: giống thuộc tính **src** của thẻ IMG bên trên.
- **title**: thêm thông tin về liên kết
Ví dụ trên sẽ hiển thị như thế này:
<form>
    <ul>
        <li><a href="https://facebook.com/khanhsakercsdn">Khánh Saker</a></li>
        <li><a href="https://facebook.com">Facebook</a></li>
    </ul>
</form>

>By Nguyễn Duy Khánh