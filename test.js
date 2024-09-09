const request = require('supertest');
const app = require('./server/app'); // Import app mà không cần chạy server

describe('GET /', () => {
  it('should return Hello, World!', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('<h1><b>Hello World!</b></h1>'); // Use .text since response is HTML, not JSON
  });
});
