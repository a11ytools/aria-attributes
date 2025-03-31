export type AriaAttribute =
  | 'aria-activedescendant'
  | 'aria-atomic'
  | 'aria-autocomplete'
  | 'aria-busy'
  | 'aria-checked'
  | 'aria-colcount'
  | 'aria-colindex'
  | 'aria-colspan'
  | 'aria-controls'
  | 'aria-current'
  | 'aria-describedby'
  | 'aria-details'
  | 'aria-disabled'
  | 'aria-errormessage'
  | 'aria-expanded'
  | 'aria-flowto'
  | 'aria-haspopup'
  | 'aria-hidden'
  | 'aria-invalid'
  | 'aria-keyshortcuts'
  | 'aria-label'
  | 'aria-labelledby'
  | 'aria-level'
  | 'aria-live'
  | 'aria-modal'
  | 'aria-multiline'
  | 'aria-multiselectable'
  | 'aria-orientation'
  | 'aria-owns'
  | 'aria-placeholder'
  | 'aria-posinset'
  | 'aria-pressed'
  | 'aria-readonly'
  | 'aria-relevant'
  | 'aria-required'
  | 'aria-roledescription'
  | 'aria-rowcount'
  | 'aria-rowindex'
  | 'aria-rowspan'
  | 'aria-selected'
  | 'aria-setsize'
  | 'aria-sort'
  | 'aria-valuemax'
  | 'aria-valuemin'
  | 'aria-valuenow'
  | 'aria-valuetext';

export interface AriaAttributeData {
  name: AriaAttribute;
  type: 'string' | 'boolean' | 'token' | 'id' | 'idlist' | 'integer';
  global: boolean;
  description?: string;
  values?: string[];
  roles?: string[];
}
