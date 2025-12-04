const request = require('supertest');
const app = require('./index');

describe('POST /api/appointment', () => {
  it('should return 400 if name is missing', async () => {
    const res = await request(app)
      .post('/api/appointment')
      .send({ date: '2024-01-01' });
    expect(res.status).toBe(400);
  });

  it('should return 400 if date is missing', async () => {
    const res = await request(app)
      .post('/api/appointment')
      .send({ name: 'John Doe' });
    expect(res.status).toBe(400);
  });
});
