$(document).ready(function(){
	$('p[verlang="en"]').hide();
	function helloWorld(){
		console.log('done');
		$("#typed").typed({
			strings: ["Hi!", "I'm a student.", "I'm a blogger.", "I'm a developer.", "I'm Viet Anh.", "Nice to meet you!"],
			cursorChar: " |",
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
