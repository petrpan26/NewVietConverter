function getMap(){
	vietDict = {};
	var ifrm = document.getElementById("ifrm");
	var frameDoc = ifrm.contentDocument || iframe.contentWindow.document;
	var data = frameDoc.getElementsByTagName('text')[0].innerHTML;
    var wordList = data.split('\n');    for (var i=1;i<wordList.length;i++){
    	input = wordList[i];
		input = removeDialect(input);
		input = input.split(' ').join('');
		input = input.toLowerCase();
		vietDict[input] = 1;
    }
	return vietDict;
}