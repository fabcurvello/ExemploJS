function gritar() {
	alert("Ahhhhhhhhhhhhhhhhh!");
}

function perguntar() {
	var nome;
	nome = prompt("Qual é o seu nome? ");
	alert("Olá " + nome);
}

function mudar_texto() {
	var h1 = document.getElementsByTagName("h1");

	if(h1[0].innerText == "Basicão de JS") {
		h1[0].innerText = "Texto alterado via JS!";
	} else {
		h1[0].innerText = "Basicão de JS";
	}
}

function incrementar() {
	var p1 = document.getElementById("p1");
	p1.innerText = parseInt(p1.innerText) + 1;
}
