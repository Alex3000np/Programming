using Xunit;
using Codewars;

namespace Codewars.UnitTests
{
    public class ProblemTests
    {
        [Fact]
        public void Result_ReturnsCorrrect()
        {
            //arrange
            var pr = new Problem();
            //act
            var result = pr.DoMath(7, 3);
            var exp = 10;
            //assert
            Assert.Equal(exp,result);
        }
    }
}
