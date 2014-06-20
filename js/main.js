function imCurious(sometext){
	if(exiled(sometext)){
		disableSearch();
		getHTML(sometext.trim());
	}

	else {
		feedback("Something wrong with your url");
	}
}

function getHTML(url){
	$.ajax({
		url: url
		,type: 'GET'
		,success: function(res) {
			if(res.responseText){
				var headline = res.responseText;
				var kindlelink = $(headline).find('.scp_button_red').closest('a').attr('href');
				var epublink = $(headline).find('.scp_button_blue').closest('a').attr('href');
				var pdflink = $(headline).find('.scp_button_yellow').closest('a').attr('href');

				$('#kindle_btn').click(function(){ window.location.replace(kindlelink) });
				$('#epub_btn').click(function(){ window.location.replace(epublink) });
				$('#pdf_btn').click(function(){ window.location.replace(pdflink) });

				enableButtons();
				enableSearch();
			}

			else {
				wrongUrl();
			}
		}
		,error: wrongUrl = function(type, status, msg){
			feedback("Não há nada nessa URL !");
			enableSearch();
		}
	});
}

function exiled(sometext){
	return new RegExp("^http:\/\/livrosdoexilado.org\/").test(sometext);
}

function feedback(msg){
	// area = document.getElementById('feedback');
	// area.appendChild(document.createTextNode(msg));
	$('#feedback').text(msg);
}

function  enableSearch(){
	$('#search').removeAttr('disabled');
	$('.loading').addClass('hide');
}

function disableSearch(){
	$('#search').attr('disabled','disabled');
	$('.loading').removeClass('hide');
}

function enableButtons(){
	$('#download_area').removeClass('hide');
}
