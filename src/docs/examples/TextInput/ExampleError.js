import React from 'react';
import TextInput from 'crrc/TextInput';

/** Required text input with an error */
export default function ExampleError() {
  return (
    <TextInput
      html="text-input-error"
      label="Error Text Input"
      name="text-input-error"
      onChange={() => {}}
      required
      error="This field has an error"
    />
  );
}
