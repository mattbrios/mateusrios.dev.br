$(document).ready(() => {
  $('#showApartament').modal({
    show: false
  });
  $("#show").modal({
    show: false
  })
  $('.modal').on("hidden.bs.modal", function (e) { //fire on closing modal box
    if ($('.modal:visible').length) { // check whether parent modal is opend after child modal close
        $('body').addClass('modal-open'); // if open mean length is 1 then add a bootstrap css class to body of the page
    }
});
})

//Primeiro criaremos a função que exibe a imagem em gif do loading
function loading_show(){
  $('#show').modal('show');
}

//Agora é a vez de criar a função que esconde a imagem da gif de loading
function loading_hide(){
  $('#show').modal('hide');
} 

$('.place').click((e) => {
  e.preventDefault();
  var idEl = $('#apartId');
  var id = e.currentTarget.attributes.id.value
  idEl.innerText = id;
  console.log(id);
  
    $.ajax({
      dataType: "json",
      url: '/code/select.php?id='+id,
      beforeSend: () =>{
        loading_show();  
      },
      success: (data) => {
        
        loading_hide();
        
        
        var apartamento = data;
        var imagens = apartamento.imagens;
        var videos = apartamento.video;
        var endereco2 = apartamento.city;
        var mailOrigin = `Contato via site - ${apartamento.address}`;
        var bedrooms = parseInt(apartamento.bedrooms, 10);
        var doorman = parseInt(apartamento.doorman,10);
        var elevator = parseInt(apartamento.elevator,10);
        var pets = parseInt(apartamento.pets,10);
        var gym = parseInt(apartamento.gym,10);
        var laundry = apartamento.laundry;
        var map = apartamento.map;
        
        $('#origin').val(mailOrigin)
        $('#endereco').text(apartamento.address);
        $('#endereco2').text(endereco2);
        
        $('#tipo').text(apartamento.tipo.name);
        $('#preco').text("$" + apartamento.price);
        $('#rentOrSale').text("For "+ apartamento.rentOrSale + ":");
        if(bedrooms > 0){
          $('#quartos').text(apartamento.bedrooms + " bedrooms");
        }else {
          $('#quartos').text("Studio");
        }
        $('#banheiros').text(apartamento.baths + " baths");
        if(apartamento.feets > 0){
            $('#area').text(apartamento.feets + " ft²");
        }else{
            $('#area').text("N/A");
        }
 
        if(!doorman){
            $('#doorman').attr('hidden',true);
        }else{
            $('#doorman').attr('hidden',false);
        }
        
        if(!elevator){
            $('#elevator').attr('hidden',true);
        }else{
            $('#elevator').attr('hidden',false);
        }
        
        if(!pets){
            $('#pets').attr('hidden',true);
        }else{
            $('#pets').attr('hidden',false);
        }
        
        if(!gym){
            $('#gym').attr('hidden',true);
        }else{
            $('#gym').attr('hidden',false);
        }
        
        if(laundry === 'no'){
            $('#laundry').attr("hidden", true);
        }else{
            let text = "Laundry " + laundry;
            $('#laundry-value').text(text);
            $('#laundry').attr("hidden", false);
        }
        
        var carouselEl = $('.carousel-inner');
        var carFtEl   = $('.carousel-photos');
        $(carouselEl).html("");
        $(carFtEl).html("");
        $('#carousel-placedetails').attr('hidden',false);
        
        if(imagens.length > 0){
          imagens.forEach((imagem, index) => {
            var ftDivEl = document.createElement('div');
            // var imgEl = document.createElement('img');

            // $(imgEl).attr("src","/uploads/" + imagem.path);
            // $(imgEl).attr('width', '100%');

            $(ftDivEl).attr("style", "background-image: url(uploads/" + imagem.path + ")")
            var liEl  = document.createElement('li');
      
            $(liEl).attr('data-target', "#carousel-placedetails");
            $(liEl).attr('data-slide-to', index);
            $(liEl).attr('style', 
              "background-image: url(uploads/"+imagem.path+");");
            /*$(liEl).click(() => {
              this.handleSwitchImage(imagem.path);
            });*/
            $(carFtEl).append(liEl);
            if(index === 0){
              $(ftDivEl).attr('class','item active');
            }else{
              $(ftDivEl).attr('class','item');
            }
            // ftDivEl.appendChild(imgEl);
            $(carouselEl).append(ftDivEl);
          });
        }else if(imagens.length <= 0 && Object.keys(videos).length <= 0){
          $('#carousel-placedetails').attr('hidden',true);
        }
        
        if (Object.keys(videos).length > 0) {
          Object.values(videos).forEach((video, index) =>{
            
            var liEl  = document.createElement('li');
            var ifrEl = document.createElement('iframe');
            var vidDivEl = document.createElement('div');
            var carDivEl = document.createElement('div');
            
            var url= video.replace('youtu.be','youtube.com').split("/");
            url.splice(3,0,"embed");
            url = url.join('/');
            
            $(ifrEl).attr("src",url);
            $(ifrEl).attr("class","embed-responsive-item");
            $(ifrEl).attr("allowfullscreen","true");
            $(ifrEl).attr("id","player");
            
            
            $(vidDivEl).attr('class','embed-responsive embed-responsive-16by9');

            $(liEl).attr('data-target', "#carousel-placedetails");
            $(liEl).attr('data-slide-to', (imagens.length + index));
            $(liEl).attr('style', 
              "background-image: url(imgs/video.png);");
            
            $(carFtEl).append(liEl);
            if(index === 0 && imagens.length <= 0){
              $(carDivEl).attr('class','item active');
            }else{
              $(carDivEl).attr('class','item');
            }
            vidDivEl.appendChild(ifrEl);
            carDivEl.appendChild(vidDivEl);
            $(carouselEl).append(carDivEl);
          })
        }
          
        
        
        var about = apartamento.about.replace(/\n/g,'</br>');
        $('#descricao').html(about);
        
        $('#map-container-google-1').html(map);
        $('.place-details').modal('show');
        
      }
      
    });
  
})

 function handleSwitchImage(image){
    $(".item>img").attr('src', "/storage/uploads/"+image);
  };