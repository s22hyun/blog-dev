const probe = require('probe-image-size');

// Test with a stable public image URL
const url = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';

console.log('Testing probe with URL string...');

(async () => {
    try {
        const result = await probe(url);
        console.log('Success! Dimensions:', result.width, 'x', result.height);
    } catch (e) {
        console.error('Error:', e);
    }
})();
