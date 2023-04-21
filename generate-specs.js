const spec = require('./petstore.json');
const { writeFileSync } = require('fs');
const { join } = require('path');

for (let index = 0; index < 50; index++) {
  const copy = JSON.parse(JSON.stringify(spec));
  copy.info.title = `${copy.info.title} ${index}!`
  writeFileSync(join(__dirname, 'specs', `petstore-${index}.json`), JSON.stringify(copy))
}
