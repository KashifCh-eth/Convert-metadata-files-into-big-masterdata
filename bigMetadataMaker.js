const fs = require('fs');
const path = require('path');

function read_metadata(filePath) {
  const file = fs.readFileSync(filePath, 'utf8');
  const json = JSON.parse(file);
  return json;
}

function write_metadata() { 
  const data = [];
  for (let i = -1 ; i <7776; i++) {

    const json = read_metadata(path.join(__dirname,`./${i+1}.json`));
    console.log(json);
    data.push(json);
  } 

  console.log(data.length);

  const file = JSON.stringify(data, null, 2);
  fs.writeFileSync(path.join(__dirname, `./_metadata.json`), file, 'utf8');
  
} 


write_metadata()
