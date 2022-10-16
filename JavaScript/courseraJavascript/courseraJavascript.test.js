
const { default: test } = require("node:test");
const reVerseString  = require(`./function`);
test("return a reverse string ",  (reverseMe) => {
    expect(reVerseString("Rails")).toBe("sliaR");
})



