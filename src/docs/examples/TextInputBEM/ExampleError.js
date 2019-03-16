import React from 'react';
import TextInputBEM from 'crrc/TextInputBEM';

/** Required text input with an error */
export default function ExampleError() {
  return (
    <TextInputBEM
      htmlId="text-input-error"
      label="Error Text Input"
      name="text-input-error"
      onChange={() => {}}
      required
      error="This field has an error"
    />
  );
}
