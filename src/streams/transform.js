import {Transform} from 'stream';

const reverse = new Transform({transform(chunk, _, callback) {
        const transformedData = Array.from(chunk.toString()).reverse().join('');

        this.push(transformedData);

        callback();
    }
})

const transform = async () => {
    process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();