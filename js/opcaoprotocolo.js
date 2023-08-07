


function propriedade() {
    let matriz = document.getElementById('matriz').value;
    let analito = document.getElementById('analito').value;
    let metodo = document.getElementById('metodo').value;
    let escopo = document.getElementById('escopo').value;
    let aplicação = document.getElementById('aplicação').value;




    function opçãoProtocolos() {

        if ((matriz === 'nãobiologica') && (analito === 'pesticida') 
        && (metodo === 'quantitativo') && (escopo === 'ambiental') 
        && (aplicação === 'nacional')) {

            document.getElementById('inmetro').style.display = 'inline-block';
            document.getElementById('mapa').style.display = 'inline-block';
            console.log('INMETRO');
            console.log('MAPA');
            return;
        }

        document.getElementById('inmetro').style.display = 'none';
        document.getElementById('mapa').style.display = 'none';
        document.getElementById('anvisa').style.display = 'none';
        document.getElementById('anvisa23').style.display = 'none';

        if ((matriz === 'nãobiologica') && (analito === 'farmaco') 
        && (metodo === 'quantitativo') && (escopo === 'farmaceutica') 
        && (aplicação === 'nacional')) {
            document.getElementById('anvisa').style.display = 'inline-block';
            document.getElementById('inmetro').style.display = 'inline-block';
            console.log('RDC166');
            console.log('INMETRO');
            return;
        }

        document.getElementById('inmetro').style.display = 'none';
        document.getElementById('mapa').style.display = 'none';
        document.getElementById('anvisa').style.display = 'none';
        document.getElementById('anvisa23').style.display = 'none';

        if ((matriz === 'biologica') && (analito === 'farmaco') 
        && (metodo === 'quantitativo') && (escopo === 'farmaceutica')
        && (aplicação === 'nacional')) {
            document.getElementById('anvisa23').style.display = 'inline-block';
            document.getElementById('inmetro').style.display = 'inline-block';
            console.log('RDC23');
            return;
        }
        
        document.getElementById('inmetro').style.display = 'none';
        document.getElementById('mapa').style.display = 'none';
        document.getElementById('anvisa').style.display = 'none';
        document.getElementById('anvisa23').style.display = 'none';
       
    }

    opçãoProtocolos();
    
}
