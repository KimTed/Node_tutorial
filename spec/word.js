const assert = require('assert');
const request = require('supertest');
const app = require('../app');

describe('word API test', ()=> {
    describe('성공', () => {
        it('Insert', (done) => {
            request(app)
            .post('/insertWord')
            .send({
                prd_cls_cd: "0-110100",
                prd_cls_nm: "의류>여성의류>원피스",
                wordNm: "모카테스트",
                manager: "김태수"
                
            })
            .end((err, res) => {
                if (err) console.log(err);
                console.log(res.status);
                done();
            })
        })
    })
    describe('실패', () => {
        it('Insert', (done) => {
            request(app)
            .post('/insertWord')
            .send({
                prd_cls_cd: "D010020003",
                prd_cls_nm: "의류>여성의류>원피스",
                manager: "김태수"
            })
            .end((err, res) => {
                if (err){
                    console.log(err);
                } else {
                    console.log(res.status);
                }
                done();
            })
        })
    })
})