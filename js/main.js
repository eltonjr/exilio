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
		,error: function(type, status, msg){
			feedback("Something went wrong with the request");

			enableSearch();
		}
	});
}

function exiled(sometext){
	return new RegExp("^http:\/\/livrosdoexilado.org\/").test(sometext);
}

function feedback(msg){
	area = document.getElementById('feedback');
	area.style.display = 'block';
	area.appendChild(document.createTextNode(msg));
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


// URL de teste
// http://livrosdoexilado.org/os-ultimos-dias-de-john-f-kennedy-bill-oreilly/
