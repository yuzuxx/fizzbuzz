var should = chai.should()
describe('function fuzzbuzz', function () {
  it('num can be divisible by 3 return Fizz', function () {
    var result = fizzBuzz(9)
    result.should.be.equal('Fizz')
  })
  it('num can be divisible by 5 return Bizz', function () {
    var result = fizzBuzz(10)
    result.should.be.equal('Buzz')
  })
  it('num can be divisible by 3 and 5 return FizzBizz', function () {
    var result = fizzBuzz(15)
    result.should.be.equal('FizzBuzz')
  })
  it('num cant be divisible by 3 or 5 return num', function () {
    var result = fizzBuzz(11)
    result.should.be.equal(11)
  })
})