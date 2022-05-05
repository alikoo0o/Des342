$(document).ready(function () {
  window.mousemove = function (e) {
    p = $(e).position() //remember $(e) - could be any html tag also..
    left = e.left //retrieving the left position of the div...
    top = e.top //get the top position of the div...
    $('#flowerman').css('transform', translate(left, top))
  }
})
