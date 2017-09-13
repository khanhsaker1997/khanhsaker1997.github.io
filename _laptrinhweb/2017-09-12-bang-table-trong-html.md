---
layout: single
title: "Bảng - TABLE trong html"
date: 2017-09-12
categories: [laptrinhweb]
tag: [bảng,table]
---
## Tạo bảng trong HTML
### Cấu trúc bảng cơ bản:
Các bảng HTML cho phép tác giả web để sắp xếp dữ liệu như văn bản, hình ảnh, liên kết, bảng khác, vv thành hàng và cột của các tế bào.
```html
Các bảng HTML được tạo ra bằng cách sử dụng <table> tag 
trong đó <tr> thẻ được sử dụng để tạo ra các hàng bảng và 
<td> thẻ được sử dụng để tạo ra các tế bào dữ liệu. Các yếu 
tố dưới <td> là thường xuyên và còn liên kết theo mặc định.
Thí Dụ:
<!DOCTYPE html>
<html>

   <head>
      <title>HTML Tables</title>
   </head>
    
   <body>
      <table border = "1">
         <tr>
            <td>Row 1, Column 1</td>
            <td>Row 1, Column 2</td>
         </tr>
         
         <tr>
            <td>Row 2, Column 1</td>
            <td>Row 2, Column 2</td>
         </tr>
      </table>
      
   </body>
</html>
```
Kết Quả:
<html>

   <head>
      <title>HTML Tables</title>
   </head>
    
   <body>
      <table border = "1">
         <tr>
            <td>Row 1, Column 1</td>
            <td>Row 1, Column 2</td>
         </tr>
         
         <tr>
            <td>Row 2, Column 1</td>
            <td>Row 2, Column 2</td>
         </tr>
      </table>
      
   </body>
</html>

### Bảng Tựa đề: Table Heading
```html
Tiêu đề bảng có thể được định nghĩa bằng <th> thẻ. Thẻ này 
sẽ được đưa vào thay thế <td> thẻ, được sử dụng để đại diện 
cho tế bào dữ liệu thực tế. Thông thường bạn sẽ đặt hàng 
hàng đầu của bạn như bảng hướng như hình dưới đây, nếu 
không bạn có thể sử dụng <th> phần tử trong bất kỳ liên 
tiếp. Tiêu đề, được định nghĩa trong <th> thẻ được tập 
trung và đậm theo mặc định.
Thí dụ:
<!DOCTYPE html>
<html>

   <head>
      <title>HTML Table Header</title>
   </head>
    
   <body>
      <table border = "1">
         <tr>
            <th>Name</th>
            <th>Salary</th>
         </tr>
         <tr>
            <td>Ramesh Raman</td>
            <td>5000</td>
         </tr>
         
         <tr>
            <td>Shabbir Hussein</td>
            <td>7000</td>
         </tr>
      </table>
   </body>
   
</html>
```

Kết Quả:
<html>

   <head>
      <title>HTML Table Header</title>
   </head>
    
   <body>
      <table border = "1">
         <tr>
            <th>Name</th>
            <th>Salary</th>
         </tr>
         <tr>
            <td>Ramesh Raman</td>
            <td>5000</td>
         </tr>
         
         <tr>
            <td>Shabbir Hussein</td>
            <td>7000</td>
         </tr>
      </table>
   </body>
   
</html>

### Cellpadding và cellspacing Thuộc tính
```html
Có hai thuộc tính gọi là cellpadding và cellspacing mà bạn 
sẽ sử dụng để điều chỉnh khoảng trắng trong các tế bào 
bảng của bạn. Thuộc tính cellspacing định nghĩa khoảng 
trống giữa các tế bào bảng, trong khi cellpadding đại diện 
cho khoảng cách giữa đường viền ô và nội dung bên trong 
một tế bào.

Thí dụ:
<!DOCTYPE html>
<html>

   <head>
      <title>HTML Table Cellpadding</title>
   </head>
    
   <body>
      <table border = "5" cellpadding = "20" cellspacing = "20">
         <tr>
            <th>Name</th>
            <th>Salary</th>
         </tr>
         <tr>
            <td>Ramesh Raman</td>
            <td>5000</td>
         </tr>
         <tr>
            <td>Shabbir Hussein</td>
            <td>7000</td>
         </tr>
      </table>
   </body>
    
</html>
```
Kết quả:
<html>

   <head>
      <title>HTML Table Cellpadding</title>
   </head>
    
   <body>
      <table border = "5" cellpadding = "20" cellspacing = "20">
         <tr>
            <th>Name</th>
            <th>Salary</th>
         </tr>
         <tr>
            <td>Ramesh Raman</td>
            <td>5000</td>
         </tr>
         <tr>
            <td>Shabbir Hussein</td>
            <td>7000</td>
         </tr>
      </table>
   </body>
    
</html>

### Colspan và rowspan Thuộc tính
```html
Bạn sẽ sử dụng colspan thuộc tính nếu bạn muốn kết hợp hai 
hoặc nhiều cột thành một cột duy nhất. Cách tương tự bạn 
sẽ sử dụng rowspan nếu bạn muốn kết hợp hai hoặc nhiều 
hàng.

Thí dụ
<!DOCTYPE html>
<html>

   <head>
      <title>HTML Table Colspan/Rowspan</title>
   </head>
    
   <body>
      <table border = "1">
         <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
         </tr>
         <tr>
            <td rowspan = "2">Row 1 Cell 1</td>
            <td>Row 1 Cell 2</td>
            <td>Row 1 Cell 3</td>
         </tr>
         <tr>
            <td>Row 2 Cell 2</td>
            <td>Row 2 Cell 3</td>
         </tr>
         <tr>
            <td colspan = "3">Row 3 Cell 1</td>
         </tr>
      </table>
   </body>
    
</html>
```

Kết Quả:
<html>

   <head>
      <title>HTML Table Colspan/Rowspan</title>
   </head>
    
   <body>
      <table border = "1">
         <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
         </tr>
         <tr>
            <td rowspan = "2">Row 1 Cell 1</td>
            <td>Row 1 Cell 2</td>
            <td>Row 1 Cell 3</td>
         </tr>
         <tr>
            <td>Row 2 Cell 2</td>
            <td>Row 2 Cell 3</td>
         </tr>
         <tr>
            <td colspan = "3">Row 3 Cell 1</td>
         </tr>
      </table>
   </body>
    
</html>

### Table Backgounds
```html
Bạn có thể đặt bảng nền sử dụng một trong hai cách sau:
 * bgcolor: Bạn có thể đặt màu nền cho toàn bảng hoặc chỉ cho một tế bào.
 * background: Bạn có thể thiết lập hình nền cho toàn bảng hoặc chỉ cho một tế bào.
Bạn cũng có thể thiết lập màu biên giới cũng sử dụng bordercolor thuộc tính.
Lưu ý - Các bgcolor , nền , và bordercolor thuộc tính bị phản đối trong HTML5. Không sử dụng những thuộc tính này.
Thí DỤ:
<!DOCTYPE html>
<html>

   <head>
      <title>HTML Table Background</title>
   </head>
    
   <body>
      <table border = "5" bordercolor = "green" bgcolor = "yellow">
         <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
         </tr>
         <tr>
            <td rowspan = "2">Row 1 Cell 1</td>
            <td>Row 1 Cell 2</td>
            <td>Row 1 Cell 3</td>
         </tr>
         <tr>
            <td>Row 2 Cell 2</td>
            <td>Row 2 Cell 3</td>
         </tr>
         <tr>
            <td colspan = "3">Row 3 Cell 1</td>
         </tr>
      </table>
   </body>
    
</html>
```

Kết Quả:
<html>

   <head>
      <title>HTML Table Background</title>
   </head>
    
   <body>
      <table border = "5" bordercolor = "green" bgcolor = "yellow">
         <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
         </tr>
         <tr>
            <td rowspan = "2">Row 1 Cell 1</td>
            <td>Row 1 Cell 2</td>
            <td>Row 1 Cell 3</td>
         </tr>
         <tr>
            <td>Row 2 Cell 2</td>
            <td>Row 2 Cell 3</td>
         </tr>
         <tr>
            <td colspan = "3">Row 3 Cell 1</td>
         </tr>
      </table>
   </body>
    
</html>

### Table hieght and table width
```html
Bạn có thể thiết lập chiều rộng và chiều cao bảng sử dụng 
width và height thuộc tính. Bạn có thể chỉ định 
chiều rộng bảng hoặc chiều cao về mặt pixel hoặc về tỷ lệ 
diện tích màn hình có sẵn.

Thí dụ
<!DOCTYPE html>
<html>

   <head>
      <title>HTML Table Width/Height</title>
   </head>
    
   <body>
      <table border = "1" width = "400" height = "150">
         <tr>
            <td>Row 1, Column 1</td>
            <td>Row 1, Column 2</td>
         </tr>
         
         <tr>
            <td>Row 2, Column 1</td>
            <td>Row 2, Column 2</td>
         </tr>
      </table>
   </body>
    
</html>
```

Kết quả:
<html>

   <head>
      <title>HTML Table Width/Height</title>
   </head>
    
   <body>
      <table border = "1" width = "400" height = "150">
         <tr>
            <td>Row 1, Column 1</td>
            <td>Row 1, Column 2</td>
         </tr>
         
         <tr>
            <td>Row 2, Column 1</td>
            <td>Row 2, Column 2</td>
         </tr>
      </table>
   </body>
    
</html>

### Table caption
```html
Các chú thích thẻ sẽ đóng vai trò như một tiêu đề hoặc 
giải thích cho bảng và nó xuất hiện ở phía trên cùng của 
bảng. Thẻ này được tán thành trong phiên bản mới hơn của 
HTML / XHTML.

Thí dụ:
<!DOCTYPE html>
<html>

   <head>
      <title>HTML Table Caption</title>
   </head>
    
   <body>
      <table border = "1" width = "100%">
         <caption>This is the caption</caption>
         
         <tr>
            <td>row 1, column 1</td><td>row 1, columnn 2</td>
         </tr>
         
         <tr>
            <td>row 2, column 1</td><td>row 2, columnn 2</td>
         </tr>
      </table>
   </body>
    
</html>
```
Điều này sẽ tạo ra kết quả sau:
<html>

   <head>
      <title>HTML Table Caption</title>
   </head>
    
   <body>
      <table border = "1" width = "100%">
         <caption>This is the caption</caption>
         
         <tr>
            <td>row 1, column 1</td><td>row 1, columnn 2</td>
         </tr>
         
         <tr>
            <td>row 2, column 1</td><td>row 2, columnn 2</td>
         </tr>
      </table>
   </body>
    
</html>


### Table Header, Body, và Footer
```html
Bàn có thể được chia thành ba phần - một tiêu đề, một cơ 
thể, và một chân. Người đứng đầu và chân khá giống với 
header và footer trong tài liệu word-processed mà vẫn như 
cũ cho mỗi trang, trong khi cơ thể là người nắm giữ nội 
dung chính của bảng.

Ba yếu tố để tách phần đầu, thân và chân của một bảng là -

<thead> - để tạo ra một tiêu đề bảng riêng biệt.

<tbody> - để chỉ phần chính của bảng.

<tfoot> - để tạo ra một chân bảng riêng biệt.

Một bảng có thể chứa nhiều <tbody> yếu tố để chỉ các trang khác nhau hoặc các nhóm dữ liệu. Nhưng điều đáng chú ý rằng <thead> và <tfoot> thẻ sẽ xuất hiện trước <tbody>

Thí dụ:
<!DOCTYPE html>
<html>

   <head>
      <title>HTML Table</title>
   </head>
    
   <body>
      <table border = "1" width = "100%">
         <thead>
            <tr>
               <td colspan = "4">This is the head of the table</td>
            </tr>
         </thead>
         
         <tfoot>
            <tr>
               <td colspan = "4">This is the foot of the table</td>
            </tr>
         </tfoot>
         
         <tbody>
            <tr>
               <td>Cell 1</td>
               <td>Cell 2</td>
               <td>Cell 3</td>
               <td>Cell 4</td>
            </tr>
         </tbody>
         
      </table>
   </body>
    
</html>
```
Điều này sẽ tạo ra kết quả sau:
<html>

   <head>
      <title>HTML Table</title>
   </head>
    
   <body>
      <table border = "1" width = "100%">
         <thead>
            <tr>
               <td colspan = "4">This is the head of the table</td>
            </tr>
         </thead>
         
         <tfoot>
            <tr>
               <td colspan = "4">This is the foot of the table</td>
            </tr>
         </tfoot>
         
         <tbody>
            <tr>
               <td>Cell 1</td>
               <td>Cell 2</td>
               <td>Cell 3</td>
               <td>Cell 4</td>
            </tr>
         </tbody>
         
      </table>
   </body>
    
</html>


### Table lồng nhau: Nested
```html
Bạn có thể sử dụng một bảng bên trong bảng khác. Không chỉ 
bảng, bạn có thể sử dụng hầu như tất cả các thẻ bên trong 
thẻ bảng dữ liệu <td>.

Thí dụ
Sau đây là ví dụ về cách sử dụng một bảng và các thẻ khác bên trong một ô trong bảng.

<!DOCTYPE html>
<html>

   <head>
      <title>HTML Table</title>
   </head>
    
   <body>
      <table border = "1" width = "100%">
         
         <tr>
            <td>
               <table border = "1" width = "100%">
                  <tr>
                     <th>Name</th>
                     <th>Salary</th>
                  </tr>
                  <tr>
                     <td>Ramesh Raman</td>
                     <td>5000</td>
                  </tr>
                  <tr>
                     <td>Shabbir Hussein</td>
                     <td>7000</td>
                  </tr>
               </table>
            </td>
         </tr>
         
      </table>
   </body>
    
</html>
```
Điều này sẽ tạo ra kết quả sau:
<html>

   <head>
      <title>HTML Table</title>
   </head>
    
   <body>
      <table border = "1" width = "100%">
         
         <tr>
            <td>
               <table border = "1" width = "100%">
                  <tr>
                     <th>Name</th>
                     <th>Salary</th>
                  </tr>
                  <tr>
                     <td>Ramesh Raman</td>
                     <td>5000</td>
                  </tr>
                  <tr>
                     <td>Shabbir Hussein</td>
                     <td>7000</td>
                  </tr>
               </table>
            </td>
         </tr>
         
      </table>
   </body>
    
</html>

## Tổng Kết:
```html
Thẻ <table> đƣợc sử dụng để tạo bảng trong HTML
* Mỗi dòng đƣợc tạo bởi phần tử <tr>
* Trong mỗi dòng lại có các ô đƣợc tạo bởi phần tử <td>
* Có thể sử dụng thuộc tính rowspan và colspan để gộp
ô theo hàng hoặc theo cột.
* Nếu một bảng dài, có thể chia bảng ra làm 3 phần với
thẻ <thead>, <tbody>, <tfoot>
```

>By Nguyễn Duy Khánh