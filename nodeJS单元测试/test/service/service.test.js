var service_controllers = require('controllers/service_controllers.js');
var MongoCon = require('mongo_controllers.js');
var sinon = require('sinon');
var expect = require('chai').expect;
var assert = require('chai').assert;


describe('getTotal test ==>service_controllers.js', function() {
    const params = {
        Timestamp: '1521078200336',
        inputText: '',
        cardType: '全部',
        isUse: '全部',
        cardStatus: '全部',
        pageSize: '10',
        currentPage: '1',
        prop: 'is_use',
        order: 'descending'
    }
    const res = {
        "code": 0,
        "message": "",
        "result": [101]
    }
    it('getTotal test', function(done) {
        MongoCon.prototype.count = sinon.stub().returns(res)
        service_controllers.getTotal(params)
            .then(res => {
                expect(res.code).to.be.equal(0)
                done()
            }).catch(err => {
                assert(false)
                done()
            })
    })
})