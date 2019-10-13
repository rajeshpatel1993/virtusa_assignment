const chai  = require('chai');
const request = require('request');
const { expect } = chai;

const config = require("../config/config");

const DEV_AUTH_TOKEN = config['app'].auth_token;

//set url
const main_url = 'http://localhost:8081/user/';

//set header
const headers = {
    'Authorization': DEV_AUTH_TOKEN
};

it('GET /user/users', (done) =>{
    request.get({url: main_url+'users', headers: headers} , (error, response, body) =>{
        expect(response.statusCode).to.equals(200);
        expect(response).to.have.property('body');
        done();
    });
});

//should get single user
it('GET /user/${id}', (done) =>{
    const id = '5da2f802f5cfe4460370ea2c';
    request.get({url: main_url+'/'+id, headers: headers} , (error, response, body) =>{
        expect(response.statusCode).to.equals(200);
        expect(response).to.have.property('body');
        done();
    });
});

//should not get invalid user Id
it('GET /user/${id}', (done) =>{
    const id = '5da2f802f5cfe4460370eahh';
    request.get({url: main_url+'/'+id, headers: headers} , (error, response, body) =>{
        expect(response.statusCode).to.not.equal(200);
        done();
    });
});

//should create new user

it('POST /user/create-user', (done) =>{
    const userData = {"email":"rajeshtest@test.com", firstname:"rajesh",lastname: "patel", "address":"New Delhi"};
    request({url: main_url+"/create-user",method: 'POST', json: userData} , (error, response, body) =>{
        expect(response.statusCode).to.equal(200);
        done();
    });
});


