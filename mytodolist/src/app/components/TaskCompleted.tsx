import { useEffect, useRef, useState } from 'react';

import { useFormik, Formik, Field, Form, useFormikContext } from 'formik';

interface toggleIsActive {
  toggle: boolean
}

export default function TaskCompleted({ vaueTaskRealized, onSubmit, idcheck }: any) {

  const AutoSubmitToken: any = () => {

    const { values } = useFormikContext<{ toggle: boolean }>()
    const isFirst = useRef(true)

    useEffect(() => {
      if (isFirst.current) {        
        isFirst.current = false;
        return;
      }
      // console.log("Se ha cambiado el vlaor de uno de los true/false ")
      // console.log("se ha enviado el valor del formularo")
      onSubmit(values.toggle, idcheck)

    }, [values.toggle, onSubmit, idcheck])
    ////values, submitForm
    return null
  }
  const toggleIsActive: toggleIsActive = {
    toggle: vaueTaskRealized,
  }
  return (
    <div>
      <h1>Check</h1>
      <Formik
        initialValues={toggleIsActive} onSubmit={() => {
          //  const objectStruc = JSON.stringify({ valorRealizado: values.toggle })
          // console.dir(objectStruc, { depth: null });
        }}
      >
        {({ values }) => (
          <Form>
            <label>
              <Field type="checkbox" name="toggle" />
              <div>{`${values.toggle}`} </div>
            </label>
            <AutoSubmitToken />
            {/* <button type="submit">Submit</button> */}
          </Form>
        )}
      </Formik>
    </div>)
}




