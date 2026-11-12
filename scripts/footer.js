document.addEventListener('DOMContentLoaded', function() {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		document.getElementById("footer_bar").innerHTML = this.responseText;
		}
		};
		xhttp.open("GET", "../footer.html", true);
		xhttp.send();
		});