
import { Language } from "node-nlp";

export const SUPPORTED_LANGUAGES = [ "en", "es", "de", "fi", "sv"];

export type ParseResult = {
    detectedLanguage: DetectedLanguage
}

export type DetectedLanguage = {
    "alpha2": string,
    "alpha3": string,
    "language": string,
    "score": number,
}

export default class Parser {
    private language = new Language();

    parse (input: string): ParseResult {
        return {
            detectedLanguage: this.language.guessBest(input, SUPPORTED_LANGUAGES),
        }
    }
}