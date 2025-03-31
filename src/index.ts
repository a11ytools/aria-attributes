import { ariaAttributesData } from './data';
import type { AriaAttribute, AriaAttributeData } from './types';

export const ariaAttributes = Object.fromEntries(
  ariaAttributesData.map((attr) => [toCamel(attr.name), attr.name])
) as Record<CamelCased<AriaAttribute>, AriaAttribute>;

export function isValidAriaAttribute(attr: string): attr is AriaAttribute {
  return ariaAttributesData.some((a) => a.name === attr);
}

export function getAttributeData(attr: string): AriaAttributeData | undefined {
  return ariaAttributesData.find((a) => a.name === attr);
}

export function getAllAriaAttributes(): AriaAttributeData[] {
  return ariaAttributesData;
}

// Utilities
function toCamel(input: string): string {
  return input.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

type CamelCased<T extends string> = T extends `${infer Head}-${infer Rest}`
  ? `${Head}${Capitalize<Rest>}`
  : T;
