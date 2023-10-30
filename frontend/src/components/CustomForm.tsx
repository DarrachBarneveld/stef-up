import { ErrorMessage, Field, Form, Formik } from "formik";
import { FunctionComponent } from "react";

interface initialValues {
  [key: string]: string | number | boolean;
}

type inputField = {
  name: string;
  label: string;
  type: string;
  options?: { value: string; label: string }[];
};

interface CustomFormProps {
  initialValues: initialValues;
  inputFields: inputField[];
  validationSchema: {};
  heading?: string;
  handleSubmit: (
    values: any,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => void;
}

const CustomForm: FunctionComponent<CustomFormProps> = ({
  initialValues,
  inputFields,
  validationSchema,
  heading,
  handleSubmit,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className="flex w-full flex-col gap-5 rounded-lg bg-slate-100 px-5 py-1 text-center shadow-md">
          {heading && (
            <h2 className="border-b border-slate-300 p-3 text-xl font-extrabold text-black">
              {heading}
            </h2>
          )}
          <div className="flex flex-col gap-2 ">
            {inputFields.map((field) => (
              <div key={field.name} className="flex flex-col">
                <label className="font-bold text-black" htmlFor={field.name}>
                  {field.label}
                </label>
                <ErrorMessage
                  name={field.name}
                  component="div"
                  className="error"
                />
                {field.type === "radio" ? (
                  <div className="">
                    {field.options?.map((option) => {
                      return (
                        <div key={option.value} className="">
                          <label htmlFor={option.value}>{option.label}</label>
                          <Field
                            type="radio"
                            id={option.value}
                            name={field.name}
                            value={option.value}
                            isInvalid={
                              touched[field.name] && errors[field.name]
                            }
                            className="rounded-md p-2"
                            // className={` ${
                            //   touched[field.name] && errors[field.name]
                            //     ? ""
                            //     : ""
                            // }`}
                          />
                        </div>
                      );
                    })}
                  </div>
                ) : field.type === "select" ? (
                  <div className="">
                    <Field
                      as="select"
                      name={field.name}
                      className="w-full rounded-md p-2"
                      // onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                      //   const inputValue = e.target.value;
                      //   if (
                      //     inputValue === "Skierg" ||
                      //     inputValue === "Burpee Broad Jump"
                      //   ) {
                      //     setFormInputFields(
                      //       inputFields.filter(
                      //         (field) => field.name !== "distance",
                      //       ),
                      //     );
                      //   } else {
                      //     setFormInputFields(inputFields);
                      //   }
                      // }}
                      // className={` ${
                      //   touched[field.name] && errors[field.name] ? "" : ""
                      // }`}
                    >
                      {field.options?.map((option, i) => (
                        <option
                          key={i}
                          value={option.value}
                          label={option.label}
                          className="rounded-md p-2"
                        />
                      ))}
                    </Field>
                  </div>
                ) : field.type === "checkbox" ? (
                  <Field
                    type="checkbox"
                    name={field.name}
                    className="rounded-md p-2"

                    // className={` ${
                    //   touched[field.name] && errors[field.name] ? "" : ""
                    // }`}
                  />
                ) : field.type === "time" ? (
                  <Field
                    type="time"
                    name={field.name}
                    className="rounded-md p-2"

                    // className={` ${
                    //   touched[field.name] && errors[field.name] ? "" : ""
                    // }`}
                  />
                ) : (
                  <Field
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    // required={field.required}
                    className="rounded-md p-2"

                    // className={` ${
                    //   touched[field.name] && errors[field.name] ? "" : ""
                    // }`}
                  />
                )}
              </div>
            ))}
            <ErrorMessage name="custom" component="div" className="" />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-green-700 px-4 py-2 text-green-100 duration-300 hover:bg-green-800"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CustomForm;
