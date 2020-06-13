'use strict';
const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);
const mongo = require('../src/auth/models/mongo.js');

describe('server module', () => {
  describe('signup', () => {
    it('should respond with 404 on invalied route', () => {
      return mockRequest.post('/wrong').then((results) => {
        // expect(results.status).toBe(404);
      });
    });

    //     it('should respond with 200 on valied route', () => {
    //       let user = { 
    //         username: 'yasmin',
    //         password: '1234', 
    //       };
    //       mockRequest
    //         .post('/signup')
    //         .send(user)
    //         .then((data) => {
    //           const record = data.body;
    //         //   expect(console.log(record)).toEqual('yasmin');
    //         });
    //     });
    //   });
    //   it('should respond with 403 when the user is already exists', () => {
    //     let user = { 
    //       username: 'yasmin',
    //       password: '1234', 
    //     };
    //     mockRequest
    //       .post('/signup')
    //       .send(user)
    //       .then((data) => {
    //         //   expect(data.status).toEqual(403)
    //           expect(data.body.message).toEqual({message :'user already exists'});
    //       });
    //   }); 
    //   it('should respond with 200 on valied route', () => {
    //     mockRequest
    //       .post('/signin')
    //       .set('Authorization', 'Basic yasmin:1234')
    //       .then(result => {
    //         //   expect(result.status).toEqual(200);
    //         expect(result.user.username).toEqual('yasmin');
    //       });
    //   });
    
  }); 
});

