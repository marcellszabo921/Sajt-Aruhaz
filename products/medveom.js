$(document).ready(function(){
  $.getJSON('medveom.json', function(data) {
    $('#termek_neve').text(data.termek_neve);
    $('#marka').text(data.marka);
    $('#sajttipus').text(data.sajttipus);
    $('#tomeg').text(data.tomeg);
    $('#aras').text(data.aras);
    
    var osszetevok = data.osszetevok;
    $.each(osszetevok, function(index, value) {
      $('#osszetevok').append('<li>' + value + '</li>');
    });
    
    $('#szallito').text(data.szallitas.szallito);
    $('#szallitasi_ido').text(data.szallitas.szallitasi_ido);
  })
  .fail(function() {
    console.error('Hiba történt a JSON betöltése közben.');
  });
});