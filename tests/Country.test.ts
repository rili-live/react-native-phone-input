import { expect } from 'chai';
import Country from '../src/country';

describe('Country', () => {
    describe('getAll', () => {
        it('returns a non-empty array', () => {
            const countries = Country.getAll();
            expect(countries).to.be.an('array');
            expect(countries.length).to.be.greaterThan(0);
        });

        it('returns countries sorted by name', () => {
            const countries = Country.getAll();
            for (let i = 1; i < countries.length; i++) {
                const current = countries[i].name.toLowerCase();
                const previous = countries[i - 1].name.toLowerCase();
                expect(current >= previous).to.equal(true,
                    `Expected "${countries[i].name}" to come after "${countries[i - 1].name}"`);
            }
        });

        it('each element has required properties', () => {
            const countries = Country.getAll();
            countries.forEach((country) => {
                expect(country).to.have.property('name').that.is.a('string');
                expect(country).to.have.property('iso2').that.is.a('string');
                expect(country).to.have.property('dialCode').that.is.a('string');
            });
        });
    });

    describe('getCountryCodes', () => {
        it('contains known dial codes', () => {
            const codes = Country.getCountryCodes();
            expect(codes['1']).to.be.an('array');
            expect(codes['44']).to.be.an('array');
        });

        it('maps US dial code 1 to include us', () => {
            const codes = Country.getCountryCodes();
            expect(codes['1']).to.include('us');
        });

        it('maps GB dial code 44 to include gb', () => {
            const codes = Country.getCountryCodes();
            expect(codes['44']).to.include('gb');
        });
    });

    describe('getCountryDataByCode', () => {
        it('returns correct country for us', () => {
            const us = Country.getCountryDataByCode('us');
            expect(us).to.not.be.undefined;
            expect(us.name).to.include('United States');
            expect(us.dialCode).to.equal('1');
        });

        it('returns correct country for gb', () => {
            const gb = Country.getCountryDataByCode('gb');
            expect(gb).to.not.be.undefined;
            expect(gb.dialCode).to.equal('44');
        });

        it('returns undefined for non-existent iso2 code', () => {
            const result = Country.getCountryDataByCode('zz');
            expect(result).to.be.undefined;
        });

        it('returns undefined for empty string', () => {
            const result = Country.getCountryDataByCode('');
            expect(result).to.be.undefined;
        });
    });
});
