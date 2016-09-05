
// errore di sintassi: unexpected identifier

var BeerSong = function() {

  var nessuna = "No more bottles of beer on the wall, no more bottles of beer.\n" +
              "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
  var una = "1 bottle of beer on the wall, 1 bottle of beer.\n" + 
            "Take it down and pass it around, no more bottles of beer on the wall.\n";

  function molteplici(num) {
    return num +" bottles of beer on the wall, " + num + 
          " bottles of beer.\nTake one down and pass it around, " + (num - 1) +
          " bottles of beer on the wall.\n";
  }

  var output = { 0: nessuna, 1: una }

  return {

    strofa: function (num) {;
      if (output[num] ===  undefined) {
        return (num);
      } else {
        return output[num];
      }
    },

    canzone: function  () {
      
      var result = []
      for (i = 99; i >= 0; i--) {
        result.push(this.strofa(i));
      };
      return result.join("\n");
    } 

  };

}();


module.exports = BeerSong;
