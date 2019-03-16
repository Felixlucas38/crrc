import React from 'react';
import TextInputStyledComponents from 'crrc/TextInputStyledComponents';

/** Required text input with an error */
export default function ExampleError() {
  return (
    <TextInputStyledComponents
      htmlId="text-input-error"
      label="Error Text Input"
      name="text-input-error"
      onChange={() => {}}
      required
      error="This field has an error"
    />
  );
}
