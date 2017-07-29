---
layout: single
title:  "Chương III- MÔ HÌNH QUAN HỆ, CÁC RÀNG BUỘC QUAN HỆ VÀ ĐẠI SỐ QUAN HỆ"
date:   2017-07-28
categories: [CSDL,database,]
tags: [CSDL,quan hệ,ràng buộc]
---
<p>Mô hình quan hệ được Ted Codd đưa ra đầu tiên vào năm 1970 và gây được chú ý ngay tức khắc vì tính đơn giản và các cơ sở toán học của nó. Mô hình quan hệ sử dụng khái niệm quan hệ toán học như là khối xây dựng cơ sở và có cơ sở lý thuyết của nó trong lý thuyết tập hợp và logic vị từ bậc nhất. Trong chương này chúng ta sẽ nói về các đặc trưng cơ bản của mô hình, các ràng buộc của chúng và tập hợp các phép toán của mô hình quan hệ.</p>
## I- Các khái niệm cảu mô hình quan hệ

1. Miền, thuộc tính, bộ và quan hệ
 * Một miền D là một tập hợp các giá trị nguyên tử, điều đó có nghĩa là mỗi giá trị trong miền là không thể phân chia được trong phạm vi mô hình quan hệ. Để đặc tả một miền, người ta chỉ ra một tên, một kiểu dữ liệu và khuôn dạng dữ liệu. Một số ví dụ về định nghĩa miền:
   * Họ tên: Tập hợp các dãy chữ cái có độ dài <= 30.
   * Tuổi: Tập các số nguyên nằm trong khoảng từ 1 đến 80.
   * Giới tính: Tập hợp gồm hai giá trị “Nam”, “Nữ”.
 * Một lược đồ quan hệ R, ký hiệu là R(A1,A2,..., An), được tạo nên từ một tên quan hệ R một danh sách các thuộc tính A1,A2,…, An. Mỗi một thuộc tính Ai là tên vai trò của một miền D nào đó trong lược đồ quan hệ R. D được gọi là miền giá trị của Ai và được ký hiệu là Dom(Ai). Một lược đồ quan hệ được sử dụng để mô tả một quan hệ, R được gọi là tên của quan hệ đó. Cấp của một quan hệ là số các thuộc tính của lược đồ quan hệ của nó. Ví dụ, ta có lược đồ cho quan hệ cấp 5: SINHVIÊN (Mãsố, Họtên, Ngàysinh, Giớitính, Địachỉ). Với lược đồ quan hệ này, SINHVIÊN là tên của quan hệ.
 * Một quan hệ (hoặc trạng thái quan hệ) r của lược đồ quan hệ R(A1,A2,…, An) được ký hiệu là r(R), là tập hợp các n-bộ r = {t1, t2, ..., tn }. Mỗi n-bộ t là một danh sách có thứ tự của n giá trị, t = <v1, v2, …, vn>, trong đó mỗi vi ,1<= i <= n , là một phần tử của Dom(Ai) hoặc là một giá trị không xác định (null value). Giá trị thứ i của bộ t, tương ứng với thuộc tính Ai được ký hiệu là t[Ai] . Hình 1 dưới đây chỉ ra một ví dụ của quan hệ SINHVIÊN tương ứng với lược đồ quan hệ SINHVIÊN ở trên. Mỗi bộ trong quan hệ biểu diễn một thực thể sinh viên cụ thể. Quan hệ được biểu diễn như một bảng, trong đó mỗi bộ được hiển thị như một hàng và mỗi thuộc tính tương ứng với một đầu cột chỉ ra vai trò của các giá trị trong cột đó. Các giá trị không xác định biểu thị các thuộc tính mà giá trị của nó không biết được hoặc không tồn tại đối với từng bộ SINHVIÊN cụ thể.
![Hình 1](\assets\img\csdl\quanHeSinhVien.png)
2. Các đặc trưng của các quan hệ
 * _Thứ tự của các bộ trong một quan hệ_
   * Một quan hệ được định nghĩa như một tập hợp các bộ. Các phần tử trong một tập hợp không có thứ tự, vì vậy các bộ trong một quan hệ không có một thứ tự cụ thể. Tuy nhiên, trong một tệp, các bản ghi được lưu trữ một cách vật lý trên đĩa vì vậy luôn có một thứ tự giữa các bản ghi. Thứ tự này chỉ rõ bản ghi thứ nhất, bản ghi thứ hai, …, bản ghi thứ n. Một cách tương tự, khi ta biểu diễn một quan hệ như là một bảng, các hàng được hiển thị theo một thứ tự nhất định.
 * _Thứ tự của các giá trị bên trong một bộ_
   * Theo định nghĩa quan hệ ở trên, một n-bộ là một danh sách có thứ tự của n giá trị. Như vậy thứ tự của các giá trị trong một bộ là quan trọng, từ đó suy ra thứ tự của các thuộc tính trong một lược đồ quan hệ cũng quan trọng. Tuy nhiên, ở mức lôgic, thứ tự của các thuộc tính và các giá trị của nó là không thực sự quan trọng khi giữ được sự tương ứng giữa các thuộc tính và các giá trị.
   * Có thể đưa ra một định nghĩa khác về quan hệ, định nghĩa này sẽ làm cho thứ tự của các giá trị trong một bộ là không cần thiết. Theo định nghĩa này, một lược đồ quan hệ R = {A1, A2,…,An} là một tập hợp các thuộc tính và một quan hệ r(R) là một tập hợp hữu hạn các ánh xạ r = {t1, t2, …., tm}, trong đó mỗi ti là một ánh xạ từ R vào D, trong đó D = dom(A1)∪dom(A2) ∪…∪dom(An). Trong định nghĩa này, t[Ai] phải ở trong dom(Ai) với 1<= i <= n với mỗi ánh xạ ti trong r. Mỗi ánh xạ ti được gọi là một bộ.
 * _Các giá trị trong một bộ_
  *Mỗi giá trị trong một bộ là một giá trị nguyên tử, điều đó có nghĩa là nó không phân chia được thành các thành phần trong phạm vi của mô hình quan hệ. Như vậy, trong mô hình quan hệ không cho phép có các thuộc tính phức hợp và các thuộc tính đa trị. Các thuộc tính đa trị phải được biểu diễn bằng các quan hệ còn các thuộc tính phức hợp chỉ được biểu diễn bằng các thuộc tính thành phần đơn của nó.
 * _Thể hiện của một quan hệ_
  * Một lược đồ quan hệ có thể được thể hiện như là một tuyên bố hoặc một khẳng định. Ví dụ lược đồ quan hệ SINHVIÊN ở trên khẳng định rằng, nói chung, một thực thể sinh viên có một mã số, họ tên, ngày sinh, giới tính, địa chỉ. Mỗi bộ trong quan hệ được thể hiện như là một sự kiện hoặc như một thể hiện cụ thể của một khẳng định. Ngoài các quan hệ biểu diễn các sự kiện về các thực thể, một số quan hệ có thể biểu diễn các sự kiện về mối liên kết. Ví dụ, lược đồ quan hệ NHÂNVIÊN_DỰÁN(MãsốNV, MãsốDA, Sốgiờ) khẳng định các nhân viên làm việc với các dự án. Mỗi bộ trong quan hệ này liên kết một nhân viên với một dự án mà anh ta làm việc cho nó.
  
## II- Các ràng buộc quan hệ, lược đồ cơ sở dữ liệu quan hệ.

> Trong phần này chúng ta thảo luận về các hạn chế trên các dữ liệu trong một lược đồ cơ sở dữ liệu quan hệ. Các hạn chế đó được gọi là các ràng buộc. Có các loại ràng buộc: ràng buộc miền, ràng buộc khoá, ràng buộc toàn vẹn thực thể và ràng buộc toàn vẹn tham chiếu.

1. _Các ràng buộc miền_
 * Các ràng buộc miền chỉ ra rằng giá trị của mỗi thuộc tính A phải là một giá trị nguyên tử thuộc miền giá trị dom(A). Các kiểu dữ liệu liên kết với các miền bao gồm: các kiểu dữ liệu số chuẩn cho các số nguyên (short integer, integer, long integer), các số thực (float, double precision float). Ngoài ra còn các kiểu dữ liệu ký tự (dãy ký tự với độ dài cố định, dãy ký tự với độ dài thay đổi), ngày, thời gian và53 tiền tệ. Các loại miền khác có thể là các miền con của một kiểu dữ liệu hoặc một kiểu dữ liệu đếm được trong đó mọi giá trị có thể được liệt kê rõ ràng.
2. _Ràng buộc khóa và ràng buộc trên các giá trị không xác định (null)_
 * Thông thường, có tồn tại các tập con của các thuộc tính của một lược đồ quan hệ có tính chất là không có hai bộ nào ở trong mọi trạng thái quan hệ r của R có cùng một tổ hợp giá trị cho các thuộc tính của nó. Giả sử chúng ta ký hiệu một tập con như vậy là SK, khi đó với hai bộ khác nhau bất kỳ t1 và t2 trong một trạng thái quan hệ r của R chúng ta có ràng buộc là t1[SK] ≠ t2[SK].
 * Tập hợp thuộc tính SK như vậy được gọi là một siêu khoá của lược đồ quan hệ R. Một siêu khoá SK xác định rõ một ràng buộc về tính duy nhất, phát biểu rằng không có hai bộ khác nhau trong một trạng thái r của R có cùng một giá trị cho SK. Mỗi quan hệ có ít nhất là một siêu khoá mặc định, đó là tập hợp tất cả các thuộc tính của nó. Một khoá K của một lược đồ quan hệ R là một siêu khoá của R với tính chất là nếu bỏ đi bất kỳ thuộc tính A nào ra khỏi K thì sẽ còn lại một tập K không phải là siêu khoá của R. Như vậy, một khoá là một siêu khoá tối thiểu, nghĩa là đó là một siêu khoá mà ta không thể vứt bỏ thuộc tính nào ra khỏi nó mà vẫn giữ được ràng buộc về tính duy nhất.
 * Một lược đồ quan hệ có thể có nhiều hơn 1 khóa. Trong trường hợp đó, mỗi một khoá được gọi là một _khoá dự tuyển_. Thông thường ta phải chỉ định một trong các khoá dự tuyển làm _khoá chính_ của quan hệ. Khoá chính là một khoá dự tuyển mà các giá trị của chúng được dùng để xác định các bộ trong quan hệ.

## III- Các phép toán trên mô hình quan hệ

<p>Trong phần này chúng ta thảo luận về các phép toán của mô hình quan hệ. Các phép toán của mô hình quan hệ có thể phân thành hai loại: các phép toán cập nhật và các phép toán đại số quan hệ. Các phép toán cập nhật được sử dụng để tạo ra một quan hệ đúng đắn. Các phép toán đại số quan hệ được sử dụng để đặc tả các phép lấy thông tin ra.</p>

1. _các phép toán cập nhật_
 * Các phép toán cập nhật gồm ba phép toán cơ bản là chèn, xoá và sửa đổi. Phép chèn được dùng để chèn một bộ giá trị hoặc nhiều bộ giá trị vào một quan hệ. Phép xoá dùng để loại bỏ các bộ giá trị và phép sửa đổi dùng để sửa đổi các giá trị của một số thuộc tính trong các bộ giá trị đã có. Mỗi khi các phép toán cập nhật được áp dụng, các ràng buộc trên lược đồ cơ sở dữ liệu có thể bị vi phạm. Trong phần này chúng ta sẽ nói đến khả năng vi phạm các ràng buộc của từng phép toán và các kiểu hành động có thể thực hiện khi một ràng buộc bị vi phạm.
2. _Phép chèn (Insert)_
 * Phép chèn cung cấp một danh sách các giá trị cho một bộ mới t được chèn vào trong một quan hệ R. Phép chèn có thể vi phạm các kiểu ràng buộc được mô tả ở trên. Các ràng buộc miền có thể bị vi phạm nếu một giá trị thuộc tính được cho không thuộc vào miền tương ứng.
3. _Xóa (Delete)_
 * Phép xoá được sử dụng để xoá một hoặc nhiều bộ giá trị của một quan hệ. Phép xoá chỉ có thể vi phạm ràng buộc tham chiếu trong trường hợp bộ bị xoá được tham chiếu bởi một khoá ngoài từ các bộ khác trong cơ sở dữ liệu. Để chỉ rõ một phép xoá, cần phải đưa ra một điều kiện trên các thuộc tính của quan hệ để chọn các bộ sẽ bị xoá.
4. _Phép sửa đổi (Update)_
 * Phép toán sửa đổi được dùng để thay đổi các giá trị của một hoặc nhiều thuộc tính trong một (hoặc nhiều) bộ của một quan hệ R nào đấy.
5. _Phép chọn (Select)_
 * Phép chọn được sử dụng để chọn một tập hợp các bộ thoả mãn điều kiện chọn từ một quan hệ.
6. _Phép chiếu (Project)_
 * Phép chiếu là phép toán chọn một số cột của bảng.
7. _Phép đặt lại tên (Rename)_
8. _Phép nối (Join)_
9. _Phép chia_

## IV- Chuyển đổi mô hình ER thành mô hình quan hệ.
**Thuật toán chuyển dổi được thực hiện theo các bước sau:**
* **_Bước 1_** Với mỗi kiểu thực thể thông thường E trong lược đồ ER, hãy tạo một quan hệ R chứa mọi thuộc tính đơn của E. Với các thuộc tính phức hợp, chỉ lấy các thuộc tính thành phần đơn của nó. Chọn một trong các thuộc tính khoá của E làm khoá chính cho R. Nếu khoá được chọn của E là phức hợp (gồm nhiều thuộc tính) thì tập các thuộc tính đơn đó sẽ cùng nhau tạo nên khoá chính của R.
* **_Bước 2_** Với mỗi kiểu thứ thể yếu W trong lược đồ ER cùng với kiểu thực thể chủ E, hãy tạo một quan hệ R chứa tất các các thành phần đơn (hoặc các thành phần đơn của các thuộc tính phức hợp) của W như là các thuộc tính của R. Đưa các thuộc tính khoá chính của các quan hệ tương ứng với kiểu thực thể chủ làm khoá ngoài của R. Các thuộc tính này sẽ xác định kiểu liên kết của W. Khoá chính của R là một tổ hợp của khoá chính của các quan hệ tương ứng với kiểu thực thể chủ và khoá bộ phận của kiểu thực thể yếu W nếu có.
* **_Bước 3_** Với mỗi kiểu liên kết 1:1 R trong lược đồ ER, hãy xác định các quan hệ S và T tương ứng với các kiểu thực thể tham gia trong R. Hãy chọn một trong các quan hệ, chẳng hạn S, và đưa khoá chính của T vào làm khoá ngoài trong S. Tốt nhất là chọn S là một kiểu thực thể tham gia toàn bộ vào R. Đưa tất các các thuộc tính đơn (hoặc các thành phần đơn của các thuộc tính phức hợp) của kiểu liên kết 1:1 R vào làm các thuộc tính của S.
* **_Bước 4_** Với mỗi kiểu liên kết hai ngôi R kiểu 1:N, hãy xác định quan hệ S biểu diễn kiểu thực thể tham gia ở phía N của kiểu liên kết. Đưa khoá chính của quan hệ T biểu diễn kiểu thực thể tham gia vào R ở phía 1 vào làm khoá ngoài trong S. Làm như vậy là vì mỗi thực thể cụ thể của phía N được liên kết với nhiều nhất là một thực thể cụ thể của phía 1 của kiểu liên kết. Đưa các thuộc tính đơn (hoặc các thành phần đơn của các thuộc tính phức hợp) của kiểu liên kết 1:N vào làm các thuộc tính của S.
* **_Bước 5_** Với mỗi kiểu liên kết N:M hai ngôi R, hãy tạo ra một quan hệ mới S để biểu diễn R. Đưa các khoá chính của các quan hệ biểu diễn các kiểu thực thể tham gia vào làm khoá ngoài của S. Tổ hợp các khoá chính đó sẽ tạo nên khoá chính của S. Đưa tất cả các thuộc tính đơn (hoặc các thành phần đơn của các thuộc tính phức hợp) của kiểu liên kết N:M vào làm các thuộc tính của S. Chú ý rằng ta không thể biểu diễn một kiểu liên kết N:M bằng một thuộc tính khoá ngoài đơn giản trong một trong các quan hệ tham gia (như đã làm với các kiểu liên kết 1:1 và 1:N) vì tỷ số lực lượng N:M.
* **_Bước 6_** Với mỗi thuộc tính đa trị A, hãy tạo ra một quan hệ mới R. Quan hệ R này sẽ chứa một thuộc tính tương ứng với A cộng với thuộc tính khoá K của quan hệ biểu diễn kiểu thực thể hoặc kiểu liên kết có thuộc tính là A làm khoá ngoài của R. Khoá chính của R là một tổ hợp của A và K. Nếu thuộc tính đa trị là phức hợp thì chúng ta chỉ đưa vào R các thành phần đơn của nó.
* **_Bước 7_** Với mỗi kiểu liên kết n ngôi R, trong đó n > 2, hãy tạo ra một quan hệ S để biểu diễn R. Đưa các khoá chính của các quan hệ biểu diễn các kiểu thực thể tham gia vào làm khoá ngoài của S. Đưa tất cả các thuộc tính đơn (hoặc các thành phần đơn của các thuộc tính phức hợp) của kiểu liên kết n-ngôi vào làm thuộc tính của S. Khoá chính của S thường là một tổ hợp các khoá chính của các quan hệ biểu diễn các kiểu thực thể tham gia. Tuy nhiên, nếu ràng buộc lực lượng trên một kiểu thực thể E nào đó tham gia vào R là 1 thì khoá chính của S không được chứa thuộc tính khoá ngoài tham chiếu đến quan hệ E tương ứng với kiểu thực thể E.

> Nguồn: Giáo trình CSDL ~ Nguyễn Tuệ
