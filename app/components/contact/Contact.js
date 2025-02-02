import React from "react";
import Information from "./Information";
import Form from "./Form";

export default function Contact() {
  return (
    <div className="p-10 max-w-[1066px] mx-auto flex md:flex-row flex-col">
      <Information />
      <Form />
    </div>
  );
}
