"use client";

import { ErrorMessage, Form, Formik } from "formik";
import * as yup from "yup";
import AsyncSelect from "react-select/async";
import { SingleValue } from "react-select";

export default function Step1({ next, formData }: { next: any; formData: {} }) {
  const validationSchema = yup.object().shape({
    userProfile: yup.string().required().label("User profile"),
  });

  let jobOptions: JobProfileOptionType[] = [];

  function loadOptions(inputValue: string, callback: any) {
    fetch(`http://localhost:3000/api/jobs/profiles?search=${inputValue}`).then(
      async (response) => {
        const result = await response.json();

        jobOptions = [];
        result.profiles.forEach((prof: any) => {
          jobOptions.push({
            label: prof.profile_name as string,
            value: prof.id as number,
          });
        });

        callback(jobOptions);
      }
    );
  }

  return (
    <Formik
      initialValues={formData}
      onSubmit={next}
      validationSchema={validationSchema}
    >
      {(props) => (
        <Form
          onSubmit={props.handleSubmit}
          className="w-full h-full flex flex-col items-start gap-4"
        >
          <h5 className="tracking-wide text-left">
            What job role do you currently work as?
          </h5>

          <AsyncSelect
            className="w-full"
            defaultOptions
            loadOptions={loadOptions}
            classNames={{
              control: (state) => {
                return `!border-none !bg-primary-lighter`;
              },
              container: (state) => {
                return `text-secondary rounded-md`;
              },
              option: (state) => {
                return state.isFocused
                  ? `!bg-primary-lightest`
                  : `!bg-primary-lighter`;
              },
              menu: (state) => {
                return `!bg-primary-lighter`;
              },
              singleValue: (state) => {
                return `!text-secondary`;
              },
              input: (state) => {
                return `!text-secondary`;
              },
            }}
            name="userProfile"
            onChange={(newVal: SingleValue<JobProfileOptionType>) => {
              props.setFieldValue("userProfile", newVal?.value, true);
            }}
          />
          {/* <input
            type="text"
            placeholder="eg. Software Engineer, Accountant etc."
            className="outline-none bg-primary-lighter py-3 px-4 w-full rounded"
          /> */}

          <p className="text-red-400">
            <ErrorMessage name="userProfile" />
          </p>

          <button
            type="submit"
            className="duration-100 flex items-center gap-3 px-6 py-2 bg-accent hover:bg-accent-light rounded-full"
          >
            <p>Continue</p>
          </button>
        </Form>
      )}
    </Formik>
  );
}
