window.onload = function(){
	vietDict = getMap();
	document.getElementById("myBtn").addEventListener("click", function(){
	var displayBox = document.getElementById("translated");
	var original = document.getElementById("original").value;
	var originalTokenizer = original.split(" ");
	var res = "";
	for (var i = 0;i<originalTokenizer.length;i++){
		if (checkWord(originalTokenizer[i])){
			res += translateSingleWord(originalTokenizer[i]);
			res += " ";
		}
		else{
			res += originalTokenizer[i];
			res += " ";
		}
	}
	if (res!="") res = res.slice(0,-1);
	if (res==="") res = "Hãy viết tiếq Việt dúq dể zữ gìn sự coq sáq kủa tiếq Việt!!!";
	displayBox.innerHTML = "<i>"+res+"</i>";
});
}