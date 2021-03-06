import React from 'react';
import TextInput from 'crrc/TextInput';

/** Optional text input */
export default function ExampleOptional() {
  return (
    <TextInput
      htmlId="text-input-optional"
      label="Optional Text Input"
      name="text-input-optional"
      onChange={() => {}}
    />
  );
}
