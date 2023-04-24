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
// src/server.js
const app_1 = __importDefault(require("./app"));
const PORT = 3001;
app_1.default.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`books_api está sendo executada na porta ${PORT}`);
    // O código abaixo é para testarmos a comunicação com o MySQL
    // const [result] = await connection.execute('SELECT 1');
    // if (result) {
    //   console.log('MySQL connection OK');
    // }
}));
