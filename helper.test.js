const {
    findMean,
    findMedian,
    findMode,
} = require("./helpers");
  
describe("#findMedian", () => {
        it("get the median of an even set of numbers", () => {
                expect(findMedian([1, 2, 3, 4])).toEqual(2.5);
            });
        it("get the median of an odd set of numbers", () => {
                expect(findMedian([1, 2, 3, 4, 5])).toEqual(3);
            });
    })

describe("#findMean", () => {
        it("finds the mean of an empty array", () => {
                expect(findMean([])).toEqual(0);
            });
        it("finds the mean of an array containing numbers", () => {
                expect(findMean([1, 2, 3, 4])).toEqual(2.5);
            });
    })

describe("#findMode", () => {
        it("determine the mode required for calculation", () => {
                expect(findMode([1, 1, 1, 2, 3])).toEqual(1);
            });
    })