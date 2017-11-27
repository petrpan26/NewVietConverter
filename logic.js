window.onload = function(){
	document.getElementById("myBtn").addEventListener("click", function(){
	var displayBox = document.getElementById("translated");
	displayBox.innerHTML = "Cax";
	var original = document.getElementById("original").value
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
				case "Ch":
					res = "C";
					break;
				case "tr":
					res = "c";
					break;
				case "Tr":
					res = "C";
					break;
				case "gh":
					res = "g";
					break;
				case "Gh":
					res = "G";
					break;
				case "ph":
					res = "f";
					break;
				case "Ph":
					res = "F";
					break;
				case "nh":
					res = "n'";
					break;
				case "Nh":
					res = "N'";
					break;
				case "Ng":
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
				case "Kh":
					res = "X";
					break;
				case "th":
					res = "w";
					break;
				case "Th":
					res = "W";
					break;
				case "gi":
					res = "z";
					break;
				case "Gi":
					res = "Z";
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
			default:
				translated+=original[i];
				break;
		}
	}
	if (translated === "") translated = "Văn bản đượk zịc sẽ đượk hiện ở đây";
	displayBox.innerHTML = "<i>"+translated+"</i>";
});
}