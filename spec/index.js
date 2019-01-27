const assert = require('assert');
const request = require('supertest');
const app = require('../app');

describe('Test start', () => {
    describe('성공', () => {
        it('call /', (done) => {
            assert.equal(1,1);
            request(app)
                .get('/')
                .end((err, res) =>{
                    if (err) console.log(err);
                    console.log(res.body);
                    
                    done();
                })
        })
    })
    describe('실패', () => {

    })
})