$(function() {
  if($('#toc').length){
    Toc.init({
      $nav: $("#toc"),
      $scope: $.merge($("h2"), $("h3"), $("h4"))
    });
    $("body").scrollspy({target: "#toc"});
  }
});
