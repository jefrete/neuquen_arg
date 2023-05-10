lista = [
    'entretenimientomasivo',
    'tchpro',
    'clubamigosdelaweb',
    'twitch_siempre',
    'ranmaseries',
    'ovin00',
    'sp_godlatino',
    'saintobronze40',
    'losins0h'
]

var canal = 0;
var player = new Twitch.Player("culo2", options);
function cambiarCanal(rrrr) {
    var canal = rrrr;
    player.destroy();
    options.channel = canal;
    player = new Twitch.Player("culo2", options);
}

function mutear() {
    player.destroy();
    player = new Twitch.Player("culo2", options);

}

function cambioma() {
    canal++;
    if (canal > lista.length-1) {
        canal = 0;
    }
    options.channel = lista[canal];
    player.destroy();

    player = new Twitch.Player("culo2", options);
}
function cambiome() {
    canal--;
    if (canal < 0) {
        canal = lista.length-1;
    }
    options.channel = lista[canal];

    player.destroy();

    player = new Twitch.Player("culo2", options);
}
  /*function canalArriba() {
          if{
              sopa=request
              sopita=soup(sopa)
              sopita=select(div,class='canal')
              objetivo=canal apagado
          }else{
              options.channel = lista[1++]
          }
          player.destroy();
          player = new Twitch.Player("culo2", options);
      }
      ano();
      */
