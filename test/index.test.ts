import {
  ariaAttributes,
  isValidAriaAttribute,
  getAttributeData,
  getAllAriaAttributes,
} from '../src/index';
import { describe, it, expect } from 'vitest';

describe('@a11y-tools/aria-attributes', () => {
  it('should return true for valid attributes', () => {
    expect(isValidAriaAttribute('aria-label')).toBe(true);
    expect(isValidAriaAttribute('aria-hidden')).toBe(true);
  });

  it('should return false for invalid attributes', () => {
    expect(isValidAriaAttribute('aria-invalid-attr')).toBe(false);
    expect(isValidAriaAttribute('label')).toBe(false);
  });

  it('should return correct metadata for a valid attribute', () => {
    const data = getAttributeData('aria-hidden');
    expect(data?.type).toBe('boolean');
    expect(data?.global).toBe(true);
  });

  it('should return undefined for unknown attributes', () => {
    const data = getAttributeData('aria-invalid-attr');
    expect(data).toBeUndefined();
  });

  it('should return all attributes', () => {
    const all = getAllAriaAttributes();
    expect(Array.isArray(all)).toBe(true);
    expect(all.length).toBeGreaterThan(0);
  });

  it('should provide camelCase access via ariaAttributes object', () => {
    expect(ariaAttributes.ariaLabel).toBe('aria-label');
    expect(ariaAttributes.ariaHidden).toBe('aria-hidden');
  });
});
