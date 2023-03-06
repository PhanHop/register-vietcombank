import Form from "@/components/Form";
import React from "react";

type Props = {};

export default function FormPage({}: Props) {
  return (
    <Form activeIndex={[1, 2, 3, 4, 5]}>
      <div></div>
    </Form>
  );
}
