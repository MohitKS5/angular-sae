function adding() {

  var b=$('_var').first();
  for (var i =1; i <50; i++) {
    a=b.html();
    b=b.next('_var');  
  $('.s6').html(a);
  console.log(b);
  }    
}