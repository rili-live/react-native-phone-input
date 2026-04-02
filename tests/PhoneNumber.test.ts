import { expect } from 'chai';
import PhoneNumber from '../src/PhoneNumber';

describe('getNumberType', () => {
    it('returns UNKNOWN type', () => {
        const number = '+44000';
        const iso2 = 'gb';
        const numberType = PhoneNumber.getNumberType(number, iso2);
        expect(numberType).to.equal('UNKNOWN');
    });

    it('returns MOBILE type', () => {
        const number = '+447900000001';
        const iso2 = 'gb';
        const numberType = PhoneNumber.getNumberType(number, iso2);
        expect(numberType).to.equal('MOBILE');
    });

    it('returns FIXED_LINE type', () => {
        const number = '+442072212217';
        const iso2 = 'gb';
        const numberType = PhoneNumber.getNumberType(number, iso2);
        expect(numberType).to.equal('FIXED_LINE');
    });
});

describe('getDialCode', () => {
    it('returns dial code for a valid international number', () => {
        expect(PhoneNumber.getDialCode('+447900000001')).to.equal('+44');
    });

    it('returns dial code for US number', () => {
        expect(PhoneNumber.getDialCode('+12025551234')).to.equal('+1');
    });

    it('returns empty string for numbers without + prefix', () => {
        expect(PhoneNumber.getDialCode('447900000001')).to.equal('');
    });

    it('returns empty string for empty string input', () => {
        expect(PhoneNumber.getDialCode('')).to.equal('');
    });

    it('handles numbers with formatting characters', () => {
        expect(PhoneNumber.getDialCode('+44 7900 000001')).to.equal('+44');
    });
});

describe('getNumeric', () => {
    it('strips non-numeric characters from a string', () => {
        expect(PhoneNumber.getNumeric('+44 7900-000(001)')).to.equal('447900000001');
    });

    it('returns empty string for all-alpha input', () => {
        expect(PhoneNumber.getNumeric('abcdef')).to.equal('');
    });

    it('preserves digits only', () => {
        expect(PhoneNumber.getNumeric('a1b2c3')).to.equal('123');
    });
});

describe('isNumeric', () => {
    it('returns true for numeric strings', () => {
        expect(PhoneNumber.isNumeric('5')).to.equal(true);
        expect(PhoneNumber.isNumeric('0')).to.equal(true);
    });

    it('returns false for non-numeric strings', () => {
        expect(PhoneNumber.isNumeric('abc')).to.equal(false);
        expect(PhoneNumber.isNumeric('+')).to.equal(false);
    });
});

describe('getCountryCodeOfNumber', () => {
    it('returns correct iso2 code for known numbers', () => {
        expect(PhoneNumber.getCountryCodeOfNumber('+447900000001')).to.equal('gb');
    });

    it('returns us for US number', () => {
        expect(PhoneNumber.getCountryCodeOfNumber('+12025551234')).to.equal('us');
    });

    it('returns empty string for invalid dial codes', () => {
        expect(PhoneNumber.getCountryCodeOfNumber('+0001234')).to.equal('');
    });

    it('returns empty string for empty input', () => {
        expect(PhoneNumber.getCountryCodeOfNumber('')).to.equal('');
    });
});

describe('isValidNumber', () => {
    it('returns true for valid phone numbers', () => {
        expect(PhoneNumber.isValidNumber('+442072212217', 'gb')).to.equal(true);
    });

    it('returns true for valid US number', () => {
        expect(PhoneNumber.isValidNumber('+12025551234', 'us')).to.equal(true);
    });

    it('returns false for invalid phone numbers', () => {
        expect(PhoneNumber.isValidNumber('+44000', 'gb')).to.equal(false);
    });

    it('returns false for empty input', () => {
        expect(PhoneNumber.isValidNumber('', 'us')).to.equal(false);
    });
});

describe('format', () => {
    it('formats a US number correctly', () => {
        const formatted = PhoneNumber.format('+12025551234', 'us');
        expect(formatted).to.be.a('string');
        expect(formatted).to.include('202');
    });

    it('formats a UK number correctly', () => {
        const formatted = PhoneNumber.format('+442072212217', 'gb');
        expect(formatted).to.be.a('string');
        expect(formatted).to.include('20');
    });

    it('handles numbers with existing formatting', () => {
        const formatted = PhoneNumber.format('+1 (202) 555-1234', 'us');
        expect(formatted).to.be.a('string');
        expect(formatted).to.include('202');
    });
});

describe('parse', () => {
    it('returns a phone number object for valid input', () => {
        const result = PhoneNumber.parse('+442072212217', 'gb');
        expect(result).to.not.be.null;
    });

    it('returns null for invalid input', () => {
        const result = PhoneNumber.parse('invalid', 'gb');
        expect(result).to.be.null;
    });

    it('returns null for empty string', () => {
        const result = PhoneNumber.parse('', 'gb');
        expect(result).to.be.null;
    });
});

describe('getCountryDataByCode', () => {
    it('returns country data for valid iso2', () => {
        const us = PhoneNumber.getCountryDataByCode('us');
        expect(us).to.not.be.undefined;
        expect(us.name).to.be.a('string');
        expect(us.dialCode).to.equal('1');
        expect(us.iso2).to.equal('us');
    });

    it('returns country data for gb', () => {
        const gb = PhoneNumber.getCountryDataByCode('gb');
        expect(gb).to.not.be.undefined;
        expect(gb.dialCode).to.equal('44');
    });

    it('returns undefined for invalid iso2', () => {
        const result = PhoneNumber.getCountryDataByCode('zz');
        expect(result).to.be.undefined;
    });
});

describe('getAllCountries', () => {
    it('returns a non-empty array', () => {
        const countries = PhoneNumber.getAllCountries();
        expect(countries).to.be.an('array');
        expect(countries.length).to.be.greaterThan(0);
    });

    it('each element has required properties', () => {
        const countries = PhoneNumber.getAllCountries();
        countries.forEach((country) => {
            expect(country).to.have.property('name');
            expect(country).to.have.property('iso2');
            expect(country).to.have.property('dialCode');
        });
    });
});
