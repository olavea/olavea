---
title: Pagination using iteration 1
author: "@OlaHolstVea"
date: 2022-05-08
---

```js
// componenets / CreateProduct.js
// Creating Products via our Mutations
import useForm from "../lib/useForm";
import DisplayError from "./ErrorMessage";

import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    # Which variables are getting passed in? And What types are they
    $name: String!
  ) {
    createProduct(data: { name: $name }) {
      id
    }
  }
`;

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: "New 😺 Boots",
  });
  const [createProduct, { loading, error, data }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: inputs,
      refetchQueries: [
        {
          query: ALL_PRODUCTS_QUERY,
        },
      ],
    }
  );
  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();

        // Submit the inputfields to the backend:
        await createProduct();
        clearForm();
      }}
    >
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <button type="submit">+ Add Mutation</button>
      </fieldset>
    </form>
  );
}
```

```js
// 7:30     inland    ingots
// lib / useForm.js
import { useState } from 'react';

export default function useForm(initial = {}) {
  // create a state object for our inputs / data
  const [i _ _ _ _, setI _ _ _ _] = useState(initial);

  // {
  //   name: 'wes',
  //   description: 'nice shoes',
  //   price: 1000
  // }
  // functionality
  function handleChange(e) {
    setI _ _ _ _({
      // copy the existing state
      ...i _ _ _ _,
      [e.target.name]: e.target.value,
    });
  }

  // return the things we want to surface from this custom hook
  return {
    i _ _ _ _,
    handleChange,
  };
}
// 12:51
```

```js
import { useState } from "react";

export default function useForm(initial = {}) {
  // create a state object for our inputs / data
  const [inputs, setInputs] = useState(initial);

  // {
  //   name: 'wes',
  //   description: 'nice shoes',
  //   price: 1000
  // }
  // functionality
  function handleChange(e) {
    setInputs({
      // copy the existing state
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }

  // return the things we want to surface from this custom hook
  return {
    inputs,
    handleChange,
  };
}
```

```js
import { useEffect, useState } from "react";

export default function useForm(initial = {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);
  const initialValues = Object.values(initial).join("");

  useEffect(() => {
    // This function runs when the things we are watching change
    setInputs(initial);
  }, [initialValues]);

  // {
  //   name: 'wes',
  //   description: 'nice shoes',
  //   price: 1000
  // }

  function handleChange(e) {
    let { value, name, type } = e.target;
    if (type === "number") {
      value = parseInt(value);
    }
    if (type === "file") {
      [value] = e.target.files;
    }
    setInputs({
      // copy the existing state
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ""])
    );
    setInputs(blankState);
  }

  // return the things we want to surface from this custom hook
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
```
