import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { UbiCalculator, OptionsType } from './CalculatorClass';
import Collapsible from 'react-collapsible';


export const UbiCalcApp = () => {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const ubiCalculator = new UbiCalculator();
  const onSubmit = (data: OptionsType) => setResult(ubiCalculator.getInfluenceOnHouseholds(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)} onChange={handleSubmit(onSubmit)}>
      <Collapsible trigger="Name">
        <input {...register("firstName")} placeholder="First name" />
        <input {...register("lastName")} placeholder="Last name" />
      </Collapsible>
      <select {...register("category")}>
        <option value="">Select...</option>
        <option value="A">Category A</option>
        <option value="B">Category B</option>
      </select>

      <p>{result}</p>
      <input type="submit" />
    </form>
  );
  }
  