import ComponentFragments from './fragments';
interface Schema {
  type?: string;
  title?: string;
  description?: string;
  definitions?: Record<string, unknown>;
  properties?: Record<string, unknown>;
}


function FragmentSwitcher() {}
function ConvertSchemaToFieldArray(schema: Schema): Record<string, unknown>[] {
  return [];
}
