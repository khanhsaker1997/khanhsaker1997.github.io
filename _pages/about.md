---
permalink: /about/
title: "About me!"
excerpt: "Tôi là Duy Khánh. Tôi đang là sinh viên, yêu lập trình, thích tìm hiểu các công nghệ mới."
last_modified_at: 2020-05-01T10:15:22-04:00
# toc: true
layout: single
---
<style media="screen">
	.project {
		width: 50%;
		max-width: 500px;
		float: left;
		padding: 10px;
		box-sizing: border-box;
	}
</style>
<div class="main-explain-area jumbotron">

	<img src="{{ site.url }}{{ site.baseurl }}/assets/images/language-flags/uk.png" style="float: right;" onclick="$('*[verlang=vi]').hide(); $('*[verlang=en]').show();">
	<img src="{{ site.url }}{{ site.baseurl }}/assets/images/language-flags/vn.png" style="float: right;" onclick="$('*[verlang=en]').hide(); $('*[verlang=vi]').show();">

	<h2 verlang="en">Hi!</h2>
	<p verlang="en">I'm Duy Khanh. I'm a student, I love programming and have passion for technology. I am currently focusing on developing and managing Websites and Web applications.</p>
	<p verlang="en">I created this website as a place for sharing my knowledge and experiences I've gained in my study, my work and my life. Nice to meet you all!</p>


	<h2 verlang="vi">Chào bạn!</h2>
	<p verlang="vi">Tôi là Duy Khánh. Tôi đang là sinh viên, yêu lập trình, thích tìm hiểu các công nghệ mới. Hiện tại tôi đang tập trung vào phát triển và quản lí các Website và các phần mềm dựa trên nền tảng Web.</p>
	<p verlang="vi">Tôi tạo Website này như là nơi tôi chia sẻ các kiến thức, kinh nghiệm đã thu được trong học tập, công việc và cuộc sống. Rất vui được làm quen với tất cả mọi người!</p>


	<h2 verlang="en">Contact Info</h2>
	<h2 verlang="vi">Thông tin liên hệ</h2>
	<br>
	<i class="fab fa-github fa-lg" aria-hidden="true"></i>
	<b>Github:</b> <a href="https://github.com/khanhsaker97">https://github.com/khanhsaker97</a><br><br>

	<i class="far fa-envelope fa-lg" aria-hidden="true"></i>
	<b>Email:</b> <a href="mailto:khanhsaker1997@gmail.com">khanhsaker1997@gmail.com</a><br><br>

	<i class="fab fa-facebook fa-lg" aria-hidden="true"></i>
	<b>Facebook:</b> <a href="https://fb.com/khanhsakercsdn">fb.com/khanhsakercsdn</a>


	<section id="contact" style="height: auto">
		<div>
			<h2>Say hello to me!</h2>
		</div>
		<div>
			<div>
				<div id="contact-form-wrapper">
					<form id="contact-form" class="js-form form" method="post" action="https://docs.google.com/forms/d/e/1FAIpQLSdaLOuWHSlzzAob7J1ShY2WuYTMGncV7yR7beavnnhcbTYNnw/formResponse">
						<div class="form-group">
							<label for="message">Message</label>
							<textarea class="form-control" type="text" rows="3" id="contactform-message" name="entry.937941528" tabindex="1"></textarea>
						</div>
						<div class="form-group">
							<label for="name">Your name</label>
							<textarea class="form-control" type="text" rows="1" id="contactform-name" name="entry.1468537712" tabindex="1"></textarea>
						</div>
						<div class="form-group">
							<button type="submit" id="contact-form-submit" tabindex="5" class="btn btn--info">
								<span class="text">Send</span>
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>

</div>

<style media="screen">
	*[verlang="vi"] {
		display: none;
	}
</style>