var os = require('os'); //zaimportowanie wbudowanego modułu wewnętrzengo "os" (dostarczonego razem z pakietem instalacyjnym Node.js)
var OSinfo = require('./modules/OSInfo'); //zaimportowanie stworzonego modułu OSinfo z katalogu modules


//ustawienia odpowiedniego enkodowania przyjmowanych danych
process.stdin.setEncoding('utf-8');
// ustawienie nasłuchiwania na zdarzenia odczytu
process.stdin.on('readable', function() {
    // treść tego co ma się wykonać w momencie odczytania wejścia  
    var input = process.stdin.read(); // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    if(input !== null) { //sprawdzenie czy na wejściu cokolwiek istnieje
        // teraz jest sens cokolwiek wyświetlać
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/sayhello':
                process.stdout.write('hello!\n');
                break;
            case '/process.env':
                process.stdout.write('\nNode.js Version\n')
                process.stdout.write(process.version);
                process.stdout.write('\nOS Version\n');
                process.stdout.write(process.env.OS);
                break;
            case '/getOSinfo':
                OSinfo.print(); //wywołanie funkcji  getOSinfo znajdującej się w zaimportowanym module OSinfo
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        }
    }
});