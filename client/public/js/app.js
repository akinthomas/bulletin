$(document).ready(function(){

	$('#bulletin-form').on('submit', function(e){
		e.preventDefault();

		var postObj = {
			title: $('#title-input').val(),
			message: $('#message-input').val(),
		}

		$.ajax({
			method: 'POST',
			url: '/api/new-post',
			dataType: 'json',
			data: JSON.stringify(postObj),
			contentType: 'application/json'
		}).then(function(res){
			if(res.results === "successful"){
				alert("Your message has been received. You'll be redirected and have a chance to see your post.")
				
			} 
			else {
				console.log("Not working")
			}

		});

		$('#title-input').val("");
		$('#message-input').val("");
	});

}); 