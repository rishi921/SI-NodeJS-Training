import { watch } from 'node:fs';
//The fs.watch method is used to watch for file changes
console.log('Watching for file changes..');
watch('./watch.txt', (eventType, filename) => {
    console.log('---------------');
    console.log(`Event type is : ${eventType}`);
    if (filename) {
        console.log(`Filename provided: ${filename}`)
    }
})