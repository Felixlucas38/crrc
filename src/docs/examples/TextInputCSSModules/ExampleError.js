import React from 'react';
import TextInputCSSModules from 'crrc/TextInputCSSModules';

/** Required text input with an error */
export default function ExampleError() {
  return (
    <TextInputCSSModules
      htmlId="text-input-error"
      label="Error Text Input"
      name="text-input-error"
      onChange={() => {}}
      required
      error="This field has an error"
    />
  );
}
