$(function () {
 
    $("#header-img__rateYo").rateYo({
      rating: 4.5,
      readOnly: true
    });
  });

  $(function () {
  var mixer = mixitup('.blog-list');
 
  $('.blog-button__filter').on('click', function () {
  $('.blog-button__filter').removeClass('blog-button__filter--active')
  $(this).addClass('blog-button__filter--active')
  })
 })