$(document).ready(function() {

	$('body').append('<img src="http://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Animals-PNG/Transparent_Mouse_PNG_Picture.png?m=1421362291">');
    

    var date = new Date();
    var minutes =  date.getMinutes();  
	var margin = minutes * 12 + 100;
	var increase = true;

    if (minutes > 29) {
        increase = false;
        margin = 460 - minutes * 12;
    }

	$('img').css('margin-left', margin + 'px').css('transform', 'rotate(' + margin + 'deg)');
	setInterval( function() {
		$('img').css('margin-left', margin + 'px').css('transform', 'rotate(' + margin + 'deg)');
		if (increase == true) margin++;
		else margin--;

		if (margin == 460) increase = false;
		else if (margin == 0) increase = true;

	}, 5000);

    setInterval( function() 
    {
        $('h1').fadeIn();
        setTimeout( function() {
         $('h1').fadeOut();
        }, 800);
    }, 1000);

});
