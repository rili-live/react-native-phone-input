"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const google_libphonenumber_1 = __importDefault(require("google-libphonenumber"));
const country_1 = __importDefault(require("./country"));
const numberType_json_1 = __importDefault(require("./resources/numberType.json")); // eslint-disable-line @typescript-eslint/no-unused-vars
const phoneUtil = google_libphonenumber_1.default.PhoneNumberUtil.getInstance();
const asYouTypeFormatter = google_libphonenumber_1.default.AsYouTypeFormatter;
class PhoneNumber {
    // eslint-disable-next-line class-methods-use-this
    getAllCountries() {
        return country_1.default.getAll();
    }
    getDialCode(number) {
        let dialCode = '';
        // only interested in international numbers (starting with a plus)
        if (number.charAt(0) === '+') {
            let numericChars = '';
            // iterate over chars
            for (let i = 0; i < number.length; i++) {
                const c = number.charAt(i);
                // if char is number
                if (this.isNumeric(c)) {
                    numericChars += c;
                    // if current numericChars make a valid dial code
                    // if (this.countryCodes[numericChars]) {
                    if (country_1.default.getCountryCodes()[numericChars]) {
                        // store the actual raw string (useful for matching later)
                        dialCode = number.substr(0, i + 1);
                    }
                    // longest dial code is 4 chars
                    if (numericChars.length === 4) {
                        break;
                    }
                }
            }
        }
        return dialCode;
    }
    // eslint-disable-next-line class-methods-use-this
    getNumeric(str) {
        return str.replace(/\D/g, '');
    }
    // eslint-disable-next-line class-methods-use-this
    isNumeric(n) {
        return !Number.isNaN(parseFloat(n)) && Number.isFinite(Number(n));
    }
    getCountryCodeOfNumber(number) {
        const dialCode = this.getDialCode(number);
        const numeric = this.getNumeric(dialCode);
        const countryCode = country_1.default.getCountryCodes()[numeric];
        // countryCode[0] can be null -> get first element that is not null
        if (countryCode) {
            return lodash_1.default.first(countryCode.filter((iso2) => iso2));
        }
        return '';
    }
    // eslint-disable-next-line class-methods-use-this
    parse(number, iso2) {
        try {
            return phoneUtil.parse(number, iso2);
        }
        catch (err) {
            console.log(`Exception was thrown: ${err.toString()}`);
            return null;
        }
    }
    isValidNumber(number, iso2) {
        const phoneInfo = this.parse(number, iso2);
        if (phoneInfo) {
            return phoneUtil.isValidNumber(phoneInfo);
        }
        return false;
    }
    // eslint-disable-next-line class-methods-use-this
    format(number, iso2) {
        const formatter = new asYouTypeFormatter(iso2); // eslint-disable-line new-cap
        let formatted;
        number.replace(/-/g, '')
            .replace(/ /g, '')
            .replace(/\(/g, '')
            .replace(/\)/g, '')
            .split('')
            .forEach((n) => {
            formatted = formatter.inputDigit(n);
        });
        return formatted;
    }
    getNumberType(number, iso2) {
        const phoneInfo = this.parse(number, iso2);
        const typeIndex = phoneInfo ? phoneUtil.getNumberType(phoneInfo) : -1;
        return lodash_1.default.findKey(numberType_json_1.default, (noType) => noType === typeIndex);
    }
    // eslint-disable-next-line class-methods-use-this
    getCountryDataByCode(iso2) {
        return country_1.default.getCountryDataByCode(iso2);
    }
}
exports.default = new PhoneNumber();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGhvbmVOdW1iZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvUGhvbmVOdW1iZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0RBQXVCO0FBQ3ZCLGtGQUFtRDtBQUVuRCx3REFBZ0M7QUFFaEMsa0ZBQXFELENBQUMsd0RBQXdEO0FBRTlHLE1BQU0sU0FBUyxHQUFHLCtCQUFjLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQy9ELE1BQU0sa0JBQWtCLEdBQUcsK0JBQWMsQ0FBQyxrQkFBa0IsQ0FBQztBQUU3RCxNQUFNLFdBQVc7SUFDYixrREFBa0Q7SUFDbEQsZUFBZTtRQUNYLE9BQU8saUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsV0FBVyxDQUFDLE1BQU07UUFDZCxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbEIsa0VBQWtFO1FBQ2xFLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7WUFDMUIsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLHFCQUFxQjtZQUNyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDcEMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0Isb0JBQW9CO2dCQUNwQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ25CLFlBQVksSUFBSSxDQUFDLENBQUM7b0JBQ2xCLGlEQUFpRDtvQkFDakQseUNBQXlDO29CQUN6QyxJQUFJLGlCQUFPLENBQUMsZUFBZSxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUU7d0JBQ3pDLDBEQUEwRDt3QkFDMUQsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFF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LGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEUsT0FBTyxnQkFBQyxDQUFDLE9BQU8sQ0FBQyx5QkFBVSxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELGtEQUFrRDtJQUNsRCxvQkFBb0IsQ0FBQyxJQUFJO1FBQ3JCLE9BQU8saUJBQU8sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLFdBQVcsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBsaWJQaG9uZU51bWJlciBmcm9tICdnb29nbGUtbGlicGhvbmVudW1iZXInO1xuXG5pbXBvcnQgQ291bnRyeSBmcm9tICcuL2NvdW50cnknO1xuaW1wb3J0IGNvdW50cmllcyBmcm9tICcuL3Jlc291cmNlcy9jb3VudHJpZXMuanNvbic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5pbXBvcnQgbnVtYmVyVHlwZSBmcm9tICcuL3Jlc291cmNlcy9udW1iZXJUeXBlLmpzb24nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuXG5jb25zdCBwaG9uZVV0aWwgPSBsaWJQaG9uZU51bWJlci5QaG9uZU51bWJlclV0aWwuZ2V0SW5zdGFuY2UoKTtcbmNvbnN0IGFzWW91VHlwZUZvcm1hdHRlciA9IGxpYlBob25lTnVtYmVyLkFzWW91VHlwZUZvcm1hdHRlcjtcblxuY2xhc3MgUGhvbmVOdW1iZXIge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gICAgZ2V0QWxsQ291bnRyaWVzKCkge1xuICAgICAgICByZXR1cm4gQ291bnRyeS5nZXRBbGwoKTtcbiAgICB9XG5cbiAgICBnZXREaWFsQ29kZShudW1iZXIpIHtcbiAgICAgICAgbGV0IGRpYWxDb2RlID0gJyc7XG4gICAgICAgIC8vIG9ubHkgaW50ZXJlc3RlZCBpbiBpbnRlcm5hdGlvbmFsIG51bWJlcnMgKHN0YXJ0aW5nIHdpdGggYSBwbHVzKVxuICAgICAgICBpZiAobnVtYmVyLmNoYXJBdCgwKSA9PT0gJysnKSB7XG4gICAgICAgICAgICBsZXQgbnVtZXJpY0NoYXJzID0gJyc7XG4gICAgICAgICAgICAvLyBpdGVyYXRlIG92ZXIgY2hhcnNcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IG51bWJlci5jaGFyQXQoaSk7XG4gICAgICAgICAgICAgICAgLy8gaWYgY2hhciBpcyBudW1iZXJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc051bWVyaWMoYykpIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtZXJpY0NoYXJzICs9IGM7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIGN1cnJlbnQgbnVtZXJpY0NoYXJzIG1ha2UgYSB2YWxpZCBkaWFsIGNvZGVcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuY291bnRyeUNvZGVzW251bWVyaWNDaGFyc10pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKENvdW50cnkuZ2V0Q291bnRyeUNvZGVzKClbbnVtZXJpY0NoYXJzXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RvcmUgdGhlIGFjdHVhbCByYXcgc3RyaW5nICh1c2VmdWwgZm9yIG1hdGNoaW5nIGxhdGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbENvZGUgPSBudW1iZXIuc3Vic3RyKDAsIGkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBsb25nZXN0IGRpYWwgY29kZSBpcyA0IGNoYXJzXG4gICAgICAgICAgICAgICAgICAgIGlmIChudW1lcmljQ2hhcnMubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGlhbENvZGU7XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgICBnZXROdW1lcmljKHN0cikge1xuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgICBpc051bWVyaWMobikge1xuICAgICAgICByZXR1cm4gIU51bWJlci5pc05hTihwYXJzZUZsb2F0KG4pKSAmJiBOdW1iZXIuaXNGaW5pdGUoTnVtYmVyKG4pKTtcbiAgICB9XG5cbiAgICBnZXRDb3VudHJ5Q29kZU9mTnVtYmVyKG51bWJlcikge1xuICAgICAgICBjb25zdCBkaWFsQ29kZSA9IHRoaXMuZ2V0RGlhbENvZGUobnVtYmVyKTtcbiAgICAgICAgY29uc3QgbnVtZXJpYyA9IHRoaXMuZ2V0TnVtZXJpYyhkaWFsQ29kZSk7XG4gICAgICAgIGNvbnN0IGNvdW50cnlDb2RlID0gQ291bnRyeS5nZXRDb3VudHJ5Q29kZXMoKVtudW1lcmljXTtcblxuICAgICAgICAvLyBjb3VudHJ5Q29kZVswXSBjYW4gYmUgbnVsbCAtPiBnZXQgZmlyc3QgZWxlbWVudCB0aGF0IGlzIG5vdCBudWxsXG4gICAgICAgIGlmIChjb3VudHJ5Q29kZSkge1xuICAgICAgICAgICAgcmV0dXJuIF8uZmlyc3QoY291bnRyeUNvZGUuZmlsdGVyKChpc28yOiBhbnkpID0+IGlzbzIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICAgIHBhcnNlKG51bWJlciwgaXNvMikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHBob25lVXRpbC5wYXJzZShudW1iZXIsIGlzbzIpO1xuICAgICAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEV4Y2VwdGlvbiB3YXMgdGhyb3duOiAke2Vyci50b1N0cmluZygpfWApO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc1ZhbGlkTnVtYmVyKG51bWJlciwgaXNvMikge1xuICAgICAgICBjb25zdCBwaG9uZUluZm8gPSB0aGlzLnBhcnNlKG51bWJlciwgaXNvMik7XG5cbiAgICAgICAgaWYgKHBob25lSW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIHBob25lVXRpbC5pc1ZhbGlkTnVtYmVyKHBob25lSW5mbyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgICBmb3JtYXQobnVtYmVyLCBpc28yKSB7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBhc1lvdVR5cGVGb3JtYXR0ZXIoaXNvMik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbmV3LWNhcFxuICAgICAgICBsZXQgZm9ybWF0dGVkO1xuXG4gICAgICAgIG51bWJlci5yZXBsYWNlKC8tL2csICcnKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyAvZywgJycpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFwoL2csICcnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcKS9nLCAnJylcbiAgICAgICAgICAgIC5zcGxpdCgnJylcbiAgICAgICAgICAgIC5mb3JFYWNoKChuOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWQgPSBmb3JtYXR0ZXIuaW5wdXREaWdpdChuKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWQ7XG4gICAgfVxuXG4gICAgZ2V0TnVtYmVyVHlwZShudW1iZXIsIGlzbzIpIHtcbiAgICAgICAgY29uc3QgcGhvbmVJbmZvID0gdGhpcy5wYXJzZShudW1iZXIsIGlzbzIpO1xuICAgICAgICBjb25zdCB0eXBlSW5kZXggPSBwaG9uZUluZm8gPyBwaG9uZVV0aWwuZ2V0TnVtYmVyVHlwZShwaG9uZUluZm8pIDogLTE7XG4gICAgICAgIHJldHVybiBfLmZpbmRLZXkobnVtYmVyVHlwZSwgKG5vVHlwZSkgPT4gbm9UeXBlID09PSB0eXBlSW5kZXgpO1xuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gICAgZ2V0Q291bnRyeURhdGFCeUNvZGUoaXNvMikge1xuICAgICAgICByZXR1cm4gQ291bnRyeS5nZXRDb3VudHJ5RGF0YUJ5Q29kZShpc28yKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQaG9uZU51bWJlcigpO1xuIl19