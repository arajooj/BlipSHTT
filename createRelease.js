import { readFile, createWriteStream } from "fs";

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const version = require("./package.json");


readFile('dist/bundle.min.js', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const writeStream = createWriteStream("release/blipSHTT-v"+version.version+".js");
    writeStream.write("const SHTT=");
    writeStream.write(data.slice(0, -1));
    writeStream.write("(1);");
    writeStream.write("\n");
    writeStream.write("// Escolha os modulos que deseja usar:\n");
    writeStream.write("const { Base } = SHTT;  // Lista de modulos e suas funcoes no github\n\n");
    writeStream.write("// Execute as funcoes de cada modulo:\n");
    writeStream.write("Base.somarDoisNumeros(1, 2)");
    writeStream.end();
    //console.log(data);
  });


