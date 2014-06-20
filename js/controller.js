exilio.controller('MainCtrl', ['$scope', function(scope){

	scope.imCurious = function(sometext){
		if(exiled(sometext)){
			disableSearch();
			getHTML(sometext.trim());
		}

		else {
			feedback("Something wrong with your url");
		}
	}

	function exiled(sometext){
		return new RegExp("^http:\/\/livrosdoexilado.org\/").test(sometext);
	}

	function feedback(msg){
		scope.feedback = msg;
	}

	//DAQUI PRA BAIXO, ANTIGO
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

}]);
