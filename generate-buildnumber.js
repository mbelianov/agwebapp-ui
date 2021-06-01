var fs = require('fs');
var fn = 'src/build-version.json'
console.log('Incrementing build number...');
fs.readFile(fn,function(err,content) {
    if (err) throw err;
    var metadata = JSON.parse(content);
    metadata.buildRevision = metadata.buildRevision + 1;
    metadata.buildTime = new Date().toString();
    fs.writeFile(fn,JSON.stringify(metadata),function(err){
        if (err) throw err;
        console.log(`Current build number: ${metadata.buildMajor}.${metadata.buildMinor}.${metadata.buildRevision} ${metadata.buildTag} @ ${metadata.buildTime}`);
    })
});