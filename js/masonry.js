
$('#masonry-grid').masonry({
    columnWidth: 200,
    itemSelector: '.grid-item'
  });
  
  
  // This does the filter by binding an event on the change of a select box
  $("#grid-filter li").click(function() {
      var group = $(this).data('category');
      var group_class = "." + group;
      
      if(group == "*"){
          $(".grid-item").show();
          $('#masonry-grid').masonry('layout');
         }
      else if(group != "") {
          $(".grid-item").hide();
          $(group_class).show();
          $('#masonry-grid').masonry('layout');
      } else {
          $(".grid-item").show();
          $('#masonry-grid').masonry('layout');
      }
  });
  