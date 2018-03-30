const request = require('supertest');
const app = require('../app');
const axios = require('axios.js');
const sinon = require('sinon');
//如果采用promise断言方式，请引入下面两个文件
const expect = require('chai').expect;
const assert = require('chai').assert;

let server = app.listen(4001)

describe('searchData test ==>api_test.js', function() {
    let params = {
        Timestamp: '1522117964717',
        inputText: '',
        cardType: '全部',
        isUse: '全部',
        cardStatus: '全部',
        pageSize: '10',
        currentPage: '1',
        prop: '',
        order: ''
    }
    let res = {
        code: 1,
        message: '暂无数据',
        total: 0,
        result: ''
    }
    let res1 = {
        code: 0,
        message: '',
        total: 104,
        result: [{
                _id: '5aa613c84e320d1ddcdfabf9',
                system_id: 'VISITOR',
                card_in_number: 'test1122',
                card_number: '1122',
                card_type: '长期卡',
                is_use: '是',
                card_status: '未使用',
                card_valid_time: '2018-01-31 14:20:19',
                back_time: '',
                create_time: '2018-03-19 11:03:35',
                __v: 0,
                update_time: '2018-03-21 13:59:00'
            },
            {
                _id: '5aa613c84e320d1ddcdfabfa',
                system_id: 'VISITOR',
                card_in_number: 'test1123',
                card_number: '1123',
                card_type: '临时卡',
                is_use: '是',
                card_status: '未使用',
                card_valid_time: '2018-02-01 14:20:19',
                back_time: '',
                create_time: '2018-03-19 11:03:35',
                __v: 0
            }
        ]
    }
    it('no data', (done) => {
        axios.setAxiosGetPromise = sinon.stub().returns(res);
        request(server).get('/app/tenant/cardManagement/searchData')
            .query(params)
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err)
                done();
            });
    });
    it('have data', (done) => {
        axios.setAxiosGetPromise = sinon.stub().returns(res1);
        request(server).get('/app/tenant/cardManagement/searchData')
            .query(params)
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err)
                done();
            });
    });

})