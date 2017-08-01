---
layout: single
title:  "Chương V- CÁC THUẬT TOÁN TRONG CƠ SỞ DỮ LIỆU"
date:   2017-08-01
categories: [CSDL,thuật toán]
tags: [CSDL,quan hệ,thuật toán]
---
## I- Các thuật toán tìm khóa

1. Tìm bao đóng của tập các phụ thuộc hàm.
* Bao đóng của tập phụ thuộc hàm F (ký hiệu là F+) là tập hợp tất cả các phụ thuộc hàm suy diễn được từ F.
* Thuật toán: Cho lược đồ quan hệ R = (U,F), tìm bao đóng của tập phụ thuộc hàm F.
  * B1: Đặt Xo = X.
  * B2: Lặp :Với mỗi phụ thuộc hàm Y → Z trong F và Xi ⊃ Y thì Xi+1 = Xi ∪ Z. Trừ khi Xi+1 = Xi thì Tập X+ = Xi.

2. Thuật toán tìm 1 khóa.
* B1: Tính L là hợp của các thuộc tính ở vể trái của các phụ thuộc hàm trong F.
* B2: TÍnh bao đóng của các tập con của L. Bao đóng nào chứa tất cả các thuộc tính của R là siêu khóa.
* B3: Kiểm tra các siêu khóa xem có phải là khóa không.

3. Thuật toán tìm tất cả các khóa.
* B1: Tạo tập nguồn TN và tập trung gian TG. TN là các thuộc tính chỉ xuất hiện ở vế trái, không xuất hiện ở vế phải của F( tập phụ thuộc hàm) và các thuộc tính không xuất hiện ở cả vế trái và vế phải của F. TG bao gồm các thuộc tính xuất hiện ở cả vế trái và vế phải của các quan hệ trong F.
* B2: Nếu TG # 0 thì sang bước 3, ngược lại thì tập khóa K = TN.
* B3: Tìm tất cả các tập con Xi của TG.
* B4: Tìm bao đóng Si+ = (TN U Xi)+. Nết Si+ = U thì Si là siêu khóa.
* B5: Loại bỏ các siêu khóa k tối thiểu, còn lại là khóa.

Ví dụ : Cho một tập cơ sỡ dữ liệu R = <Q, F>
Với Q = {ABC}     F = {AB –> C, C -> A}. Tìm tất cả các khóa thuộc tập cơ sở dữ liệu trên.

Bài Làm :

L = {ABC}      R = {CA}
TN = {B}        TG = {AC} # 0 nên ta làm tiếp bước 3

Ta có tập con Xi của tập TG = {0, A,C,AC}

Ta lấy từng thuộc tính thuộc tập con Xi của tập TG hợp với TN ta có các thuộc tính sau :

S1 = TN U 0 = B Ta có B+ = B # Q nên S1 = A không là siêu khóa

S2 = TN U A = AB Ta có AB+ = ABC = Q nên S2 = AB là siêu khóa

S3 = TN U C = BC Ta có BC+ = ABC = Q nên S3 = BC là siêu khóa

S4 = TN U AC = ABC Ta có ABC+ = ABC = Q nên S4 = ABC  là siêu khóa

Vậy ta có tập siêu khóa S = {AB,BC,ABC}.

Tuy nhiên, vì AB chứa trong ABC và BC chứa trong ABC nên loại bỏ siêu khóa ABC ra khỏi tập siêu khóa

Vậy ta có, tập khóa K = {AB,BC} là khóa của lượt đồ quan hệ

> By Nguyễn Duy Khánh
