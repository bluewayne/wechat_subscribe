/**
 * Created by liujinhe on 16/11/14.
 */

var chai = require('chai');
var request = require('supertest');
var assert = chai.assert;
var expect = chai.expect;
chai.should();

var app = require('../app');

require('../db/db');

describe('POST /users/register', function () {
    it('respond register with json', function (done) {
        request(app)
            .post('/users/register')
            .send({
                'name': 'stuq',
                'password': '123456'
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200, done);


    })
})