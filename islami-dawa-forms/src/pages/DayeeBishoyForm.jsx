import { Button } from "@/components/ui/button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {
  
   initialFormData,
   validationSchema,
  
} from "../Data/DayeeBishoyData";

const DayeeBishoyForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Data:", values);
    resetForm();
  };

  return (
    <div className="mx-auto mt-8 max-w-4xl rounded bg-white p-4 shadow-lg">
      <h2 className="mb-6 text-2xl">দায়ী বিষয়</h2>
      <Formik
        initialValues={initialFormData}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
        <div className="grid grid-cols-2 gap-10">
            <div>
              <label className="mb-2 block text-gray-700">সহযোগি দায়ী তৈরি হয়েছে</label>
              <Field
                name="SohojogiDayee"
                placeholder="Enter value"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
              />
              <ErrorMessage
                name="SohojogiDayee"
                component="div"
                className="text-red-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-gray-700">মহিলাদের তালিমে মোট অংশগ্রহণ করেছে</label>
              <Field
                name="TalimOngshoGrohon"
                placeholder="Enter Value"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
              />
                
              <ErrorMessage
                name="TalimOngshoGrohon"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>
        <div className="grid grid-cols-2 gap-10">
            <div>
              <label className="mb-2 block text-gray-700">মক্তব থেকে ছাত্রছাত্রী মাদ্রাসায় ভর্তি হয়েছে</label>
              <Field
                name="MoktobAdmit"
                placeholder="Enter Value"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
              />
              <ErrorMessage
                name="MoktobAdmit"
                component="div"
                className="text-red-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-gray-700">এই মাসে বয়স্ক কোরআন শিক্ষা চালু হয়েছে</label>
              <Field
                name="QuranSikkha"
                placeholder="Enter Value"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
              />
                
              <ErrorMessage
                name="QuranSikkha"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>
          <div className="flex justify-end">
          <Button variant="ghost" size="default" type="submit">
            Submit
          </Button>

          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default DayeeBishoyForm;
