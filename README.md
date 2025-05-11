# @a11y-tools/aria-attributes

[![CI/CD](https://github.com/a11ytools/aria-attributes/actions/workflows/main.yml/badge.svg)](https://github.com/a11ytools/aria-attributes/actions/workflows/main.yml)
[![npm version](https://img.shields.io/npm/v/@a11y-tools/aria-attributes.svg)](https://www.npmjs.com/package/@a11y-tools/aria-attributes)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/@a11y-tools/aria-attributes)](https://bundlephobia.com/package/@a11y-tools/aria-attributes)

A comprehensive utility library for working with ARIA attributes in JavaScript/TypeScript applications.

## Installation

```bash
npm install @a11y-tools/aria-attributes
```

## Usage

```typescript
import { 
  isValidAriaAttribute, 
  getAttributeData, 
  getAllAriaAttributes,
  ariaAttributes 
} from '@a11y-tools/aria-attributes';

// Check if an attribute is valid
isValidAriaAttribute('aria-label'); // true
isValidAriaAttribute('invalid-attr'); // false

// Get metadata about an attribute
const data = getAttributeData('aria-hidden');
console.log(data);
// {
//   type: 'boolean',
//   global: true
// }

// Get all ARIA attributes
const allAttributes = getAllAriaAttributes();

// Use camelCase constants
console.log(ariaAttributes.ariaLabel); // 'aria-label'
console.log(ariaAttributes.ariaHidden); // 'aria-hidden'
```

## API

### `isValidAriaAttribute(attribute: string): boolean`
Checks if the provided string is a valid ARIA attribute.

### `getAttributeData(attribute: string): AttributeData | undefined`
Returns metadata about the ARIA attribute if it exists.

### `getAllAriaAttributes(): string[]`
Returns an array of all valid ARIA attributes.

### `ariaAttributes`
An object containing camelCase mappings to hyphenated ARIA attributes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT 