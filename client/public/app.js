$(document).ready(function(){

	$('#post-form').on('submit', function(e){
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
				alert("Message added successful")
			} 
			else {
				console.log("Not working")
			}

		});

		$('#title-input').val("");
		$('#message-input').val("");
	});

});