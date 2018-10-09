$(document).ready(function() {
    $("#book-button").click(function() {
      $("#favorite-book").append("<li class='list-item'>" + $("#favorite-book").val() + "</li>");
      $("#favorite-book").val("");
    })
})
