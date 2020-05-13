function filterText()
	{  
        const rex = new RegExp($('#dropDown').val());
        console.log(rex)
        if(rex =="/All/"){
            clearFilter()
        }
        else{
			$('.content').hide();
			$('.contentType').filter(function() {
                // console.log($(this).text())
                return rex.test($(this).text());
			}).parent().show();
	}
	}
	
function clearFilter()
	{
		$('#dropDown').val('All');
		$('.content').show();
	}
