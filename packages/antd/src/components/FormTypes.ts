/**
 * Defines a JSON schema.
 */
export interface Schema {
  // Basic information

  /**
   * The unique identifier for the schema.
   */
  $id?: string;

  /**
   * A reference to another schema.
   */
  $ref?: string;

  /**
   * The title of the schema.
   */
  title?: string;

  /**
   * A description of the schema.
   */
  description?: string;

  /**
   * The default value for the schema.
   */
  default?: any;

  // Access control

  /**
   * Indicates whether the property is read-only.
   */
  readOnly?: boolean;

  /**
   * Indicates whether the property is write-only.
   */
  writeOnly?: boolean;

  /**
   * Example values for the schema.
   */
  examples?: any;

  /**
   * Additional comments about the schema.
   */
  $comment?: string;

  /**
   * The maximum value allowed for the schema.
   */
  maximum?: number;

  /**
   * The minimum value allowed for the schema.
   */
  minimum?: number;

  /**
   * Indicates whether the minimum value is exclusive.
   */
  exclusiveMinimum?: number;

  // Validation

  /**
   * The maximum length allowed for the property.
   */
  maxLength?: number;

  /**
   * The minimum length allowed for the property.
   */
  minLength?: number;

  /**
   * The regular expression pattern the property must match.
   */
  pattern?: string;

  /**
   * Defines the properties of the schema.
   */
  properties?: {
    [key: string]: SchemaDefinition;
  };
}

/**
 * Represents a JSON schema definition or a boolean value.
 */
export type SchemaDefinition = Schema | boolean;
