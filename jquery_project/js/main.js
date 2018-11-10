$(document).ready(() => {
  $('#imageOne').hide();
  $('#imageTwo').hide()
  $('#imageThree').hide()
  $('#imageFour').hide()

  $("#b1").on('click', () => {
    $('#imageOne').toggle();
  })
  $('#b2').on('click', () => {
    $('#imageTwo').toggle();
  })
  $('#b3').on('click', () => {
    $('#imageThree').toggle();
  })
  $('#b4').on('click', () => {
    $('#imageFour').toggle();
  })
});
