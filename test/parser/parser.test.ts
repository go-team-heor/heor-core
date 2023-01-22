import Parser from "../../src/parser";

test('Case 1 - English text, no intents', () => {
    const expected = {
        detectedLanguage: {"alpha2": "en", "alpha3": "eng", "language": "English","score": 1} 
    };

    const parser = new Parser();
    expect(parser.parse("hello world I love you")).toEqual(expected);
})

test('Case 2 - Spanish text, no intents', () => {
    const expected = { 
        detectedLanguage: {"alpha2": "es", "alpha3": "spa", "language": "Spanish","score": 1} 
    }
    const parser = new Parser();
    expect(parser.parse("hola al mundo")).toEqual(expected);
})
