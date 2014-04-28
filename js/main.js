function imCurious(sometext){
	if(exiled(sometext)){
		getHTML(sometext.trim());
	}

	else {
		feedback("Something wrong with your url");
	}
}

function getHTML(url){
		$.ajax({
				url: url,
				type: 'GET',
				success: function(res) {
						var headline = res.responseText;
						feedback(headline);
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

// URL de teste
// http://livrosdoexilado.org/os-ultimos-dias-de-john-f-kennedy-bill-oreilly/
