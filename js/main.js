function imCurious(sometext){
	clearContentArea();

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

				if(kindlelink)
					$('#kindle_btn').click(function(){ window.open(kindlelink) });
				else
					$('#kindle_btn').addClass('hide');

				if(epublink)
					$('#epub_btn').click(function(){ window.open(epublink) });
				else
					$('#epub_btn').addClass('hide');

				if(pdflink)
					$('#pdf_btn').click(function(){ window.open(pdflink) });
				else
					$('#pdf_btn').addClass('hide');

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
	$('#feedback').text(msg);
}

function clearContentArea(){
	disableButtons();
	$('#feedback').text("");
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

function disableButtons(){
	$('#download_area').addClass('hide');
}

// URL de teste
// http://livrosdoexilado.org/os-ultimos-dias-de-john-f-kennedy-bill-oreilly/
