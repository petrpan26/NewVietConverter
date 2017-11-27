function process(){
	var displayBox = document.getElementById("translated");
	var original = document.getElementById("original").value;
	res = translateString(original);
	if (res==="") res = "Hãy viết tiếq Việt dúq dể zữ gìn sự coq sáq kủa tiếq Việt!!!";
	displayBox.innerHTML = "<i>"+res+"</i>";
}
window.onload = function(){
	vietDict = getMap();
	document.getElementById("myBtn").addEventListener("click", process);
	document.getElementById("original").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
    	process();
    }
});
};