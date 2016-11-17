/**
 * Created by liujinhe on 16/11/14.
 */

var request=require('supertest');
var assert=require('chai').assert;
var expect=require('chai').expect;
require('chai').should();


require('../db/db');

var User=require('../user.js');

describe('UserModel',function(){
    before(function(){

    })
    after(function(){

    })
    beforeEach(function () {

    })

    describe('#save()',function(){

        it('should return stuq when user save', function (done) {
            User.create({"name":"stuq","password":"password"}, function (err,user) {
                if(err){
                    expect(err).to.be.not.null;
                    done();
                }


                expect(user.name).to.be.a('string');
                expect(user.name).to.equal('stuq');
                done();
            })


        })
    })


})








