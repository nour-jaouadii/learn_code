$(function() {

	$(".videos .video a").on('click', function(e) {
		e.preventDefault();
		
		let link = $(this).attr('href');
		$(".modal div .modal-content .modal-body iframe").attr('src', link);
	});

});