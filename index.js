var fs = require('fs');
var StatMode = require('stat-mode');
colors = require('colors');

fs.stat('./cat.jpg', function(err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});

fs.readdir('./', function(err, files) {
    console.log('W katalogu znajdują się:'.blue);
    console.log(files);
    fs.writeFile('./tekst.txt', files, function(err) {
        if (err) throw err;
        console.log('Utworzono plik tekst.txt o zawartości:'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function(err, files) {
            console.log(files);
        });
    });
});
