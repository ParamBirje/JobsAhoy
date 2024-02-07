import { ArrowRight } from "@/lib/Icons";
import { ErrorMessage, Form, Formik } from "formik";
import * as yup from "yup";

export default function Step2({ next, formData }: { next: any; formData: any }) {
  const validationSchema = yup.object().shape({
    profileDesc: yup
      .string()
      .min(10, "Atleast enter an introduction")
      .max(1000, "Alright, no need to publish a book. Reduce your content.")
      .required()
      .label("Description"),
    userProfileExperience: yup
      .number()
      .required("Please enter your experience on this profile.")
      .label("Experience"),
  });

  return (
    <Formik initialValues={formData} onSubmit={next} validationSchema={validationSchema}>
      {(props) => (
        <Form
          onSubmit={props.handleSubmit}
          className="w-full h-full flex flex-col items-start gap-4"
        >
          <h5 className="tracking-wide text-left">
            How many years of experience do you have in this role? (0 if fresher)
          </h5>

          <input
            type="number"
            className="outline-none bg-primary-lighter py-3 px-4 w-full rounded"
            id="userProfileExperience"
            {...props.getFieldProps("userProfileExperience")}
          />

          <p className="text-red-400">
            <ErrorMessage name="userProfileExperience" />
          </p>

          <h5 className="tracking-wide text-left">Please tell us about your role in short.</h5>

          <textarea
            rows={5}
            className="outline-none bg-primary-lighter py-3 px-4 w-full rounded"
            placeholder="I'm a software engineer and have worked on ..."
            id="profileDesc"
            {...props.getFieldProps("profileDesc")}
          />

          <p className="text-red-400">
            <ErrorMessage name="profileDesc" />
          </p>

          <button
            type="submit"
            className="duration-100 flex items-center gap-3 px-6 py-2 bg-accent hover:bg-accent-light rounded-full"
          >
            <p>Finish</p>
            <ArrowRight size={20} />
          </button>
        </Form>
      )}
    </Formik>
  );
}
