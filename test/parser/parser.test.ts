import Parser from "../../src/parser";

test('Parser returns hello world', () => {
    const parser = new Parser();
    expect(parser.parse("foo bar")).toBe("Hello world");
})
