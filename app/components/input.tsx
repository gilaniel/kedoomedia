"use client";

import { useState } from "react";

export const Input = ({
  handleChange,
  value,
  name,
  label,
  isError,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  label: string;
  isError: boolean;
}) => {
  console.log(label, isError);
  return (
    <>
      <label className={`label ${isError && "error"} `}>{label}</label>

      <input
        name={name}
        type="text"
        className={`input w-full`}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};
