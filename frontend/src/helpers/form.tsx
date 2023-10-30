import * as Yup from "yup";

export type FieldSet = Record<
  string,
  Yup.StringSchema | Yup.NumberSchema | Yup.BooleanSchema | typeof timeSchema
>;

export const timeSchema = Yup.string().test(
  "isValidTime",
  "Invalid time format (HH:MM)",
  (value) => {
    if (!value) return true;
    const timeRegex = /^(?:[01]\d|2[0-3]):[0-5]\d$/;
    return timeRegex.test(value);
  },
);

export function createValidationSchema(fields: FieldSet) {
  return Yup.object().shape(fields);
}
