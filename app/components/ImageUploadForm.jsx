
"use client";

import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ImageUploadForm = () => {
  const [preview, setPreview] = useState(null);

  return (
    <Formik
      initialValues={{ image: null }}
      validationSchema={Yup.object({
        image: Yup.mixed().required("Image is required"),
      })}
      onSubmit={(values) => {
        console.log(values);
        // Handle form submission here
      }}
    >
      {({ setFieldValue }) => (
        <Form>
          <label>Upload Your Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={(event) => {
              const file = event.currentTarget.files[0];
              setFieldValue("image", file);

              // Preview the selected image
              const reader = new FileReader();
              reader.onloadend = () => setPreview(reader.result);
              if (file) reader.readAsDataURL(file);
            }}
          />
          <ErrorMessage name="image" component="div" />

          {/* Preview of the uploaded image */}
          {preview && <img src={preview} alt="Preview" className="mt-4 max-w-xs" />}

          <button type="submit" className="mt-4 p-2 bg-blue-600 text-white rounded-lg">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ImageUploadForm;
