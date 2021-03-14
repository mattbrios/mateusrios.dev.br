document.querySelector("#form-contact").addEventListener("submit", function(e){
	e.preventDefault();
	document.querySelector('button').setAttribute('disabled', 'disabled');
	document.querySelector('button').innerHTML = 'Enviando...';

	var name = document.getElementsByName('name')[0].value;
	var email = document.getElementsByName('email')[0].value;
	var message = document.getElementsByName('message')[0].value;

	var http = new XMLHttpRequest();
    http.open("POST", "contact.php", true);
    http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    var params = "name=" + name + "&email=" + email + "&message=" + message;
    http.send(params);
    http.onload = function() {
        console.log(http.responseText);
        document.querySelector('button').removeAttribute('disabled');
        document.querySelector('button').innerHTML = 'Enviar <i class="mdi-content-send right white-text"></i>';
        if(http.responseText == 'success'){
        	document.getElementById("form-contact").reset();
	        $.alert({
	            title: 'Parabéns!',
	            content: 'Sua mensagem foi enviada com sucesso.',
	        });
        }else{
        	$.alert({
        	    title: 'Erro!',
        	    content: 'Ocorreu um erro. Tente novamente mais tarde.',
        	});
        }
    }

	// return false;
});
