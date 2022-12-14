//Линейные алгоритмы

const myModule = require("./code");

describe("additionAndMultiplication", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    [
        { a: 1, b: 2, resultSum: 3, resultMul: 2 },
        { a: 2, b: 4, resultSum: 6, resultMul: 8 },
        { a: 5, b: 6, resultSum: 11, resultMul: 30 },
        { a: 4, b: 0, resultSum: 4, resultMul: 0 },
        { a: 7, b: 1, resultSum: 8, resultMul: 7 },
        { a: 3, b: -2, resultSum: 1, resultMul: -6 }
    ].forEach(({ a, b, resultSum, resultMul }) =>
        it(`prints ${resultSum}, ${resultMul} for ${a} and ${b}`, () => {
            jest.spyOn(console, "log");

            myModule.additionAndMultiplication(a, b);

            expect(console.log).toHaveBeenCalledWith(resultSum, resultMul);
        })
    );
});


describe("sumOfLength", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    [
        { a: "apple", b: "banana", result: 11 },
        { a: "", b: "", result: 0 },
        { a: "apple", b: "", result: 5 }
    ].forEach(({ a, b, result }) =>
        it(`prints ${result} for ${a} and ${b}`, () => {
            jest.spyOn(console, "log");

            myModule.sumOfLength(a, b);

            expect(console.log).toHaveBeenCalledWith(result);
        })
    );
});

describe("sumOfDigits", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    [
        { num: 123, result: 6 },
        { num: 999, result: 27 },
        { num: 256, result: 13 }
    ].forEach(({ num, result }) =>
        it(`prints ${result} for ${num}`, () => {
            jest.spyOn(console, "log");

            jest.spyOn(window, "prompt").mockImplementation(() => num);

            myModule.sumOfDigits(num);

            expect(console.log).toHaveBeenCalledWith(result);
        })
    );
});

//Условия

describe("max", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    [
        { a: 11, b: 5, result: 11 },
        { a: 0, b: 1, result: 1 },
        { a: -57, b: -198, result: -57 }
    ].forEach(({ a, b, result }) =>
        it(`prints ${result} for ${a} and ${b}`, () => {
            jest.spyOn(console, "log");

            myModule.max(a, b);

            expect(console.log).toHaveBeenCalledWith(result);
        })
    );
});

describe("whatMonth", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    [
        { num: 5, result: "May" },
        { num: 1, result: "January" },
        { num: 8, result: "August" }
    ].forEach(({ num, result }) =>
        it(`prints ${result} for ${num}`, () => {
            jest.spyOn(console, "log");

            jest.spyOn(window, "prompt").mockImplementation(() => num);

            myModule.whatMonth(num);

            expect(console.log).toHaveBeenCalledWith(result);
        })
    );
});

//Циклы

describe("sumOfIntegers", () => {
    it("prints sum of all integers from 50 to 100", () => {
        jest.spyOn(console, "log");

        myModule.sumOfIntegers();

        expect(console.log).toHaveBeenCalledWith(3825);
    })
});

describe("multiplicationTable", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    [
        { num: 1, result: "7 x 1 = 7" },
        { num: 3, result: "7 x 3 = 21" },
        { num: 9, result: "7 x 9 = 63" }
    ].forEach(({ num, result }) =>
        it("prints ${result} for ${num}", () => {
            jest.spyOn(console, "log");

            myModule.multiplicationTable();

            expect(console.log).toHaveBeenCalledWith(result);
        })
    );
});