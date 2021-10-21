import React from "react";
import { Formik, Form, Field } from "formik";

export default function TaskListForm(props) {
  return (
    <Formik
      onSubmit={props.onSubmit}
      initialValues={{
        title: "",
      }}
    >
      {() => {
        return (
          <Form>
            <Field type="text" name="title" />
            <button type="submit">Добавить таску</button>
          </Form>
        );
      }}
    </Formik>
  );
}
