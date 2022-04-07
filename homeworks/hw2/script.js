$('h1').click(function () {
    $('body').toggleClass('purple')
  })

  
  $('.one').click(function () {
    $('.slide').attr('src', 'side1.png').css('border', '1px dashed red').css('padding', '20px')
  })
  
  $('.two').click(function () {
    document.getElementsByClassName('slide').attr('src', 'slide2.png')
  })
  
  $('.three').click(function () {
    $('.slide').attr('src', 'slide3.png')
  })
  $('.four').click(function () {
    $('.slide').attr('src', 'slide4.png')
  })
  $('.five').click(function () {
    $('.slide').attr('src', 'slide5.png')
  })
  $('.six').click(function () {
    $('.slide').attr('src', 'slide6.png')
  })
  $('.seven').click(function () {
    $('.slide').attr('src', 'slide7.png')
  })
  $('.eight').click(function () {
    $('.slide').attr('src', 'slide8.png')
  })