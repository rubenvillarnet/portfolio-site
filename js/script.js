$(function () {
  $('[data-toggle="tooltip"]').tooltip();
})

$(function(){
  $('.featured .image-container').on('click', function(){
    $('#modal').modal;
    var image_path= ($(this).find('img').attr('src'));
    $('#modal-image').attr('src' , image_path);
  });

  $('#modal').on('click', function(){
    $('modal').modal('hide');
  })
})
