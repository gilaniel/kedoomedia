"use client";

import { useState } from "react";
import { Input } from "./input";

export const emailRegExp: any =
  /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;

type Errors = {
  [key: string]: boolean;
};

const DEFAULT_FIELDS = {
  name: "",
  email: "",
  company: "",
  desc: "",
};

export const Form = () => {
  const [fields, setFields] = useState(DEFAULT_FIELDS);
  const [error, setError] = useState<Errors>({});

  const checkErrors = () => {
    let hasError = false;

    Object.entries(fields).map((item) => {
      const [name, value] = item;

      if (name !== "company") {
        if (!value && !hasError) {
          hasError = true;
        }

        setError((prev) => ({
          ...prev,
          [name]: !value,
        }));
      }
    });

    return hasError;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setError((prev) => ({
      ...prev,
      [name]: name === "email" ? !value.match(emailRegExp) : !value,
    }));

    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const hasError = checkErrors();

    if (hasError) return;

    try {
      const resp = await fetch("/sendmail", {
        method: "POST",
        body: JSON.stringify({ ...fields }),
      });

      if (resp.status !== 200) {
        throw new Error("error");
      }

      setFields(DEFAULT_FIELDS);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(error);

  return (
    <div className="flex flex-col gap-10 lg:max-w-[560px] w-full">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="basis-1 lg:basis-1/3">
          <Input
            name="name"
            handleChange={handleInputChange}
            value={fields.name}
            label="Имя"
            isError={error["name"]}
          />
        </div>
        <div className="basis-1 lg:basis-1/3">
          <Input
            name="company"
            handleChange={handleInputChange}
            value={fields.company}
            label="Название компании"
            isError={error["company"]}
          />
        </div>
        <div className="basis-1 lg:basis-1/3">
          <Input
            name="email"
            handleChange={handleInputChange}
            value={fields.email}
            label="Email"
            isError={error["email"]}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <Input
          name="desc"
          handleChange={handleInputChange}
          value={fields.desc}
          label="Ваш комментарий"
          isError={error["desc"]}
        />
      </div>
      <button className="btn" onClick={handleSubmit}>
        Отправить
      </button>
    </div>
  );
};
