declare class Country {
    private countryCodes;
    private countriesData;
    private countries;
    constructor();
    setCustomCountriesData(json: any): void;
    addCountryCode(iso2: any, dialCode: string, priority?: any): void;
    getAll(): any;
    getCountryCodes(): any[];
    getCountryDataByCode(iso2: any): any;
}
declare const _default: Country;
export default _default;
