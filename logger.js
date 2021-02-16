const fs = require('fs')

function imprimeRegistros(results){
    
    fs.writeFile(__dirname + '/log/nomesBancoDados.json', JSON.stringify(results,null, " "), (err) => {
        console.log(err || 'Arquivo Salvo!');
    })
    
}

module.exports = {imprimeRegistros}