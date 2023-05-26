declare class PhoneNumber {
    getAllCountries(): any;
    getDialCode(number: any): string;
    getNumeric(str: any): any;
    isNumeric(n: any): boolean;
    getCountryCodeOfNumber(number: any): any;
    parse(number: any, iso2: any): any;
    isValidNumber(number: any, iso2: any): any;
    format(number: any, iso2: any): any;
    getNumberType(number: any, iso2: any): any;
    getCountryDataByCode(iso2: any): any;
}
declare const _default: PhoneNumber;
export default _default;
