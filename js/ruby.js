$(function(){
	$('ruby').each(function () {
		
		$(this).popover({trigger:'hover',
						 placement:'bottom',
						 html:'true',
						 delay:{hide:1500,},
						 content:$(this).children('rt').text(),
						});
	});
//	$('footer').onload(function(){
//		$(this).add()
//	});
});