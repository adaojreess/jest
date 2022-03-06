const { queryString } = require("./queryString");
describe("Object to query string", () => {
  it("should crete a valid query string when an object provided", () => {
    const obj = {
      name: "Adão",
      profession: "Developer",
    };
    expect(queryString(obj)).toBe("name=Adão&profession=Developer");
  });
});

// describe('Query string object', () => {

// });
