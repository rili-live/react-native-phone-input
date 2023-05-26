"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumber = exports.CountryList = exports.CountryPicker = void 0;
const PhoneInput_1 = __importDefault(require("./PhoneInput"));
var CountryPicker_1 = require("./CountryPicker");
Object.defineProperty(exports, "CountryPicker", { enumerable: true, get: function () { return __importDefault(CountryPicker_1).default; } });
var countries_json_1 = require("./resources/countries.json");
Object.defineProperty(exports, "CountryList", { enumerable: true, get: function () { return __importDefault(countries_json_1).default; } });
var PhoneNumber_1 = require("./PhoneNumber");
Object.defineProperty(exports, "PhoneNumber", { enumerable: true, get: function () { return __importDefault(PhoneNumber_1).default; } });
exports.default = PhoneInput_1.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDhEQUFzQztBQUV0QyxpREFBMkQ7QUFBbEQsK0hBQUEsT0FBTyxPQUFpQjtBQUNqQyw2REFBb0U7QUFBM0QsOEhBQUEsT0FBTyxPQUFlO0FBQy9CLDZDQUF1RDtBQUE5QywySEFBQSxPQUFPLE9BQWU7QUFDL0Isa0JBQWUsb0JBQVUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQaG9uZUlucHV0IGZyb20gJy4vUGhvbmVJbnB1dCc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ291bnRyeVBpY2tlciB9IGZyb20gJy4vQ291bnRyeVBpY2tlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvdW50cnlMaXN0IH0gZnJvbSAnLi9yZXNvdXJjZXMvY291bnRyaWVzLmpzb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQaG9uZU51bWJlciB9IGZyb20gJy4vUGhvbmVOdW1iZXInO1xuZXhwb3J0IGRlZmF1bHQgUGhvbmVJbnB1dDtcbiJdfQ==