var $contactForm = $('#contact-form-homepage');

$contactForm.submit(function(e) {
	e.preventDefault();
	var $submit = $(':submit', $contactForm);
	var defaultSubmitText = $submit.val();

	$.ajax({
		url: 'https://docs.google.com/forms/d/e/1FAIpQLSdaLOuWHSlzzAob7J1ShY2WuYTMGncV7yR7beavnnhcbTYNnw/formResponse',
		method: 'POST',
		data: $(this).serialize() + '&url=' + encodeURIComponent(window.location),
		dataType: 'json',
		beforeSend: function() {
			$submit.attr('disabled', true).val('Sending...');
		},
		success: function(data) {
			$submit.val('Message sent!');
			setTimeout(function() {
				$submit.attr('disabled', false).val(defaultSubmitText);
				grecaptcha.reset();
			}, 5000);
		},
		error: function(err) {
			$submit.val('Ops, there was an error.');
			setTimeout(function() {
				$submit.attr('disabled', false).val(defaultSubmitText);
				grecaptcha.reset();
			}, 5000);
		}
	});
});
