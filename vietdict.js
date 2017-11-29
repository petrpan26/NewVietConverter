function getMap(){
	vietDict = {};
	var ifrm = document.getElementById("ifrm");
	var frameDoc = ifrm.contentDocument || iframe.contentWindow.document;
	var data = frameDoc.getElementsByTagName('text')[0].innerHTML;
    var wordList = JSON.parse(data);
    console.log(wordList);
    for (i in wordList){
    	for (j in wordList[i].split(' ')){
    		input = wordList[i].split(' ')[j];
    		input = removeDialect(input);
    		input = input.toLowerCase();
    		vietDict[input] = 1;
    	}
    }
	return vietDict;
}Đụ