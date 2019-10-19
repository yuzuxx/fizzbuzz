var should = chai.should()
describe('function fuzzbuzz', function () {
  it('should return Fizznum when num can be divisible by 3 ', function () {
    var result = fizzBuzz(9)
    result.should.be.equal('Fizz')
  })
  it('should return Bizznum when num can be divisible by 5 ', function () {
    var result = fizzBuzz(10)
    result.should.be.equal('Buzz')
  })
  it('should return FizzBizz when num can be divisible by 3 and 5 ', function () {
    var result = fizzBuzz(15)
    result.should.be.equal('FizzBuzz')
  })
  it('should return num when num cant be divisible by 3 or 5 ', function () {
    var result = fizzBuzz(11)
    result.should.be.equal(11)
  })
})