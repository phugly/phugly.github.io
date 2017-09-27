
	
	var $pull = $('#Pool');
	var $Firstname = $('#First');
	var $Lastname = $('#Last');
$('#Savedata').on('click',function ( ) {

		
		var file =  
		{
			Firstname: $Firstname.val(),
			Lastname: $Lastname.val(),
		};
		

		$.ajax ( {

			type: 'POST',
			url: '/Pool',
			data: file,
			success: function(file) {
				$pull.append('<li> name : '+ file.Firstname +', Lastname:' +file.Lastname + ' . ');

			},
			error: function()
			{ 
					alert('error');
			}
		});




});
