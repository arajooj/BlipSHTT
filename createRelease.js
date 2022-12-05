var fs = require("fs");
var packageJson = require('./package.json')

fs.readFile('dist/bundle.min.js', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const writeStream = fs.createWriteStream("release/blipSHTT-v"+packageJson.version+".js");
    writeStream.write("const SHTT=");
    writeStream.write(data.slice(0, -1));
    writeStream.write("(1);");
    writeStream.write("\n");
    writeStream.write("// Escolha as funcoes e coloque no objeto SHTT, segue exemplo:\n");
    writeStream.write("const { somarDoisNumeros, diminuirDoisNumeros } = SHTT;");
    writeStream.end();
    //console.log(data);
  });


