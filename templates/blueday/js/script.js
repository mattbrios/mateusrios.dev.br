//Carregamento da classe pra animações
AOS.init({
    duration: 1200,
});

$(function () {
    //Carregamento dos arquivos de menu e footer
    $('#menu').load('menu.html', menuLoad);
    $('#footer').load('footer.html', footerLoad);

    //Direcionamento botão Saiba Mais dos boxes de Funcionalidades na home
    $('.btn-saibamais').click(function() {
        window.location.href = "funcionalidades.html"
    });
    
    //Click na TV destaque pra exibir o vídeo do YouTube em modal
    $('.btn-video').click(function() {
        $('.embed-responsive-item').attr('src', "https://www.youtube.com/embed/XpeOIww_l4A?autoplay=1");
        $('#video-modal').modal('toggle');
    });

    //Funcão de "matar" o vídeo quando fecha a modal
    $('#video-modal').on('hide.bs.modal', function(e) {
        $('.embed-responsive-item').each(function(){
            $('.embed-responsive-item').attr('src', "");
        });
    });

    //Scroll dos botões de categoria da view de Funcionalidades
    $('.btn-scroll').click( function(e) {
        e.preventDefault();
        scrollTo($(this).attr('destiny'));
    });

    //Efeito onda do destaque no Firefox
    if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
        $('.header-home').addClass('header-firefox')
    }

    //Delay de animação pra exibição do formulário em testar-agora
    setTimeout(function() {
        $('.vcenter').fadeIn();
    }, 300);
});

//Função de scroll animado
function scrollTo(destiny) {
    $('html, body').animate({
        scrollTop: $('#' + destiny).offset().top
    }, 'slow');
}

//Função após o carregamento dinâmico do arquivo menu.html
function menuLoad() {
    $('.menu-phone').attr('href', whatsappButton);

    $('.cliente').click(function() {
        window.open('https://www.calendrier.com.br/app/');
    })
}

//Função após o carregmento dinâmico do arquivo footer.html
function footerLoad() {
    $('.whatsapp-btn').hide();
    $('.whatsapp-btn').click(function(e) {
        window.open(whatsappButton());
    });

    //Animação de entrada do botão flutuante de WhatsApp
    setTimeout(function() {
        $('.whatsapp-btn').fadeIn();
    }, 5000);
}

//Validação do dispositivo pra encaminhar a URL do Whatsapp
function whatsappButton() {
    let textoShare = "Olá! Gostaria de mais informações sobre a sua empresa. Poderia me ajudar?";
    let wppURL = "https://wa.me/5515996236179/?text-" + encodeURIComponent(textoShare);
    return wppURL;
}