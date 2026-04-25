const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('debe retornar Hola Mundo', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hola Mundo');
    expect(res.statusCode).toBe(200);
  });
});