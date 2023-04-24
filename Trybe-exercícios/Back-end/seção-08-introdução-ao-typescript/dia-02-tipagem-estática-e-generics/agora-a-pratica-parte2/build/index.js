"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Author_1 = __importDefault(require("./database/models/Author"));
const Book_1 = __importDefault(require("./database/models/Book"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    const authors = yield Author_1.default.findAll();
    console.table(authors.map((author) => author.toJSON()));
    process.exit(0);
}))();
(() => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield Book_1.default.findAll();
    console.table(books.map((book) => book.toJSON()));
    process.exit(0);
}))();
