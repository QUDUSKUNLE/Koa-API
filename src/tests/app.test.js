const server = require('../..');
const request = require('supertest');


// afterEach(() => {
//   server.close();
// });

describe('routes: index', () => {
  test('should respond as expected', async (done) => {
    const response = await request(server.callback()).get('/')
    console.log(response, '>>>>>>>>>>>>');
    // expect(response.status).toEqual(200);
    // expect(response.type).toEqual("application/json");
    // expect(response.body.data).toEqual("Sending some JSON");
    done();
  });
});
