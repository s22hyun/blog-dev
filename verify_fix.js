const probe = require('probe-image-size');
const { Readable } = require('stream');

const url = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';

console.log('Testing probe with fetch + stream...');

(async () => {
    try {
        const response = await fetch(url);
        if (!response.body) throw new Error('No body');

        // Convert Web Stream to Node Stream
        const nodeStream = Readable.fromWeb(response.body);

        const result = await probe(nodeStream);
        console.log('Success! Dimensions:', result.width, 'x', result.height);
    } catch (e) {
        console.error('Error:', e);
    }
})();
