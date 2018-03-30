var expect = require('chai').expect;
var axios = require('axios')

function add(x, y) {
    return x + y;
}


var foo = { bar: 'baz' };

describe('test demo', function() {
    before(function() {
        console.log("测试开始==============");
    })
    after(function() {
        console.log("测试结束===============");
    })
    beforeEach(function() {
        console.log("在本区块的每个测试用例之前执行");
    })
    afterEach(function() {
        console.log("在本区块的每个测试用例之后执行");
    })

    //每个it代表一个测试用例
    it('判断是否相等', function() {
        expect(add(1 + 1)).to.be.equal(2);
        expect(4 + 5).to.be.equal(9);
        expect(4 + 5).to.be.not.equal(10);
        expect(foo).to.be.deep.equal({ bar: 'baz' });
    })
    it('判断是否为true', function() {
        expect('everthing').to.be.ok;
        expect(false).to.not.be.ok;
    });
    it('判断类型是否相同', function() {
        expect('test').to.be.a('string');
        expect({ foo: 'bar' }).to.be.an('object');
        //expect(foo).to.be.an.instanceof(Foo);
    });
    it('判断是否包含指定对象', function() {
        expect([1, 2, 3]).to.include(2);
        expect('foobar').to.contain('foo');
        expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');
    });
    it('判断是否为空', function() {
        expect([]).to.be.empty;
        expect('').to.be.empty;
        expect({}).to.be.empty;
    });
    it('判断是否匹配', function() {
        expect('foobar').to.match(/^foo/);
    });
    it('测试应该5000毫秒后结束', function(done) {
        var x = true;
        var f = function() {
            x = false;
            expect(x).to.be.not.ok;
            done(); // 通知Mocha测试结束
        };
        setTimeout(f, 1000);
    });

    it.skip('这个测试用例不会执行', function() {
        expect(add(1, 0)).to.be.equal(1);
    });

    // it.only('这个测试用例会执行，其它测试用例不会执行', function () {
    //     expect(add(1, 1)).to.be.equal(2);
    // });

    // it('异步请求应该返回一个对象', function (done) {
    //     axios.get('https://api.github.com').then(function(res){
    //         expect(res).to.be.an('object');
    //         done();
    //     }).catch(function(err){
    //         done();
    //     })
    // });
})