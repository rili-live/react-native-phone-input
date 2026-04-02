# CLAUDE.md

## Project Overview

React Native phone input component with international country picker, phone number validation, and formatting. Published to npm as `react-native-phone-input`.

## Key Commands

```bash
npm test              # Run tests (mocha + chai + ts-node)
npm run test-coverage # Run tests with nyc coverage report
npm run build         # Clean dist/, copy flags, compile TypeScript
npm run lint          # ESLint (airbnb-base + typescript + react)
npm run lint-fix      # ESLint with auto-fix
```

## Architecture

- **Class-based React components** — do not convert to hooks (breaking change risk)
- **Singleton pattern** — `PhoneNumber`, `Country`, and `FlagResource` are exported as singleton instances
- `Country.getAll()` caches on first call; `setCustomCountriesData()` must be called before first access
- Phone validation/formatting uses `google-libphonenumber`
- Country picker uses `@react-native-picker/picker` (peer dependency)

## Source Structure

```
src/
  index.tsx           # Entry point, re-exports all public modules
  PhoneInput.tsx      # Main component (default export)
  CountryPicker.tsx   # Modal country picker component
  PhoneNumber.tsx     # Phone validation/formatting utility (singleton)
  country.tsx         # Country data management (singleton)
  styles.ts           # StyleSheet definitions
  typings/index.d.ts  # Public TypeScript type definitions
  resources/
    countries.json    # 243 countries (name, iso2, dialCode, priority, areaCodes)
    numberType.json   # Phone number type enum mapping
    flags/            # Flag PNG images + index.ts loader
```

## Testing

- Framework: mocha + chai, run via ts-node
- Test files: `tests/*.test.ts`
- Pre-commit hook runs lint, pre-push hook runs tests
- Coverage thresholds are currently set to 0 (not enforced)

## Build & Publish

- `npm run build` compiles TypeScript and copies flag images to `dist/`
- Only `dist/` is published to npm (see `files` in package.json)
- `npm run prepare` runs build automatically on install/publish
- Type definitions are at `dist/typings/index.d.ts`

## Style Guidelines

- 4-space indentation
- Max line length: 160 characters
- Comma-dangle: only-multiline
- Use specific lodash imports (`import { find } from 'lodash'`), not default import
