$(document).ready(function(){
	$('*[verlang="vi"]').hide();
	function helloWorld(){
		$("#typed").typed({
			strings: ["Hi!", "I'm a student.", "I'm a blogger.", "I'm a developer.", "I'm Duy Khanh.", "Nice to meet you!"],
			cursorChar: " &#9749;",
			typeSpeed: 45,
			callback: function(){
		    	setTimeout(function(){
			        helloWorld();
			    }, 4500);
		    }
		});
	}
	helloWorld();
});
