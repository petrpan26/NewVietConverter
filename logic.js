
function translate_single_word(s){
	var original = s;
	var translated = "";
	for (var i = 0; i<original.length;i++){
		if (i!=original.length-1){
			var x = "";
			var res = "";
			x += original[i];
			x += original[i+1];
			switch (x){
				case "ch":
					res = "c";
					break;
				case "cH":
					res = "c";
					break;
				case "Ch":
					res = "C";
					break;
				case "CH":
					res = "C";
					break;
				case "tr":
					res = "c";
					break;
				case "tR":
					res = "c";
					break;
				case "Tr":
					res = "C";
					break;
				case "TR":
					res = "C";
					break;
				case "gh":
					res = "g";
					break;
				case "gH":
					res = "g";
					break;
				case "Gh":
					res = "G";
					break;
				case "GH":
					res = "G";
					break;
				case "ph":
					res = "f";
					break;
				case "pH":
					res = "f";
					break;
				case "PH":
					res = "F";
					break;
				case "Ph":
					res = "F";
					break;
				case "nh":
					res = "n'";
				case "nH":
					res = "n'";
					break;
				case "Nh":
					res = "N'";
					break;
				case "NH":
					res = "N'";
					break;
				case "Ng":
					res = "Q";
					if (i+2 < original.length && original[i+2] === 'h'){
						i++;
					}
					break;
				case "nG":
					res = "Q";
					if (i+2 < original.length && original[i+2] === 'h'){
						i++;
					}
					break;
				case "NG":
					res = "Q";
					if (i+2 < original.length && original[i+2] === 'h'){
						i++;
					}
					break;
				case "ng":
					res = "q";
					if (i+2 < original.length && original[i+2] === 'h'){
						i++;
					}
					break;
				case "kh":
					res = "x";
					break;
				case "kH":
					res = "x";
					break;
				case "Kh":
					res = "X";
					break;
				case "KH":
					res = "X";
					break;
				case "th":
					res = "w";
					break;
				case "tH":
					res = "w";
					break;
				case "Th":
					res = "W";
					break;
				case "TH":
					res = "W";
					break;
				case "gi":
					res = "z";
					break;
				case "Gi":
					res = "Z";
					break;
				case "GI":
					res = "Z";
					break;
				case "gI":
					res = "z";
					break;
			}
			if (res!="") 
			{
				i++;
				translated += res;
				continue;
			}
		}
		switch (original[i]){
			case 'c':
				translated+='k';
				break;
			case 'C':
				translated+='K';
				break;
			case 'q':
				translated+='k';
				break;
			case 'Q':
				translated+='k';
				break;
			case 'd':
				translated+='z';
				break;
			case 'r':
				translated+='z';
				break;
			case 'R':
				translated+='Z';
				break;
			case 'D':
				translated+='Z';
				break;
			case 'đ':
				translated+='d';
				break;
			case 'Đ':
				translated+='D';
				break;
			case 'x':
				translated+='s';
				break;
			case 'X':
				translated+='S';
				break;
			default:
				translated+=original[i];
				break;
		}
	}
	if (translated === "") translated = "Văn bản đượk zịc sẽ đượk hiện ở đây";
	return translated;
}

window.onload = function(){
	document.getElementById("myBtn").addEventListener("click", function(){
	var displayBox = document.getElementById("translated");
	var original = document.getElementById("original").value;
	displayBox.innerHTML = "<i>"+translate_single_word(original)+"</i>";
});
}