function getHTML(url){
		$.ajax({
				url: "http://livrosdoexilado.org/a-invasao-do-mar-jules-verne/",
				type: 'GET',
				success: function(res) {
						var headline = res.responseText;
						htmlCodeTextArea.value = headline;
				}
		});
}

function imCurious(sometext){
	if(exiled(sometext)){
		feedback("OK");
	}

	else {
		feedback("naaao");
	}
}

function exiled(sometext){
	return new RegExp("^http:\/\/livrosdoexilado.org\/").test(sometext);
}

function feedback(msg){
	area = document.getElementById('feedback');
	area.style.display = 'block';
	area.appendChild(document.createTextNode(msg));
}
