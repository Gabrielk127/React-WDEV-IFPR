import { useState } from "react";
import Input from "./Input";

const Form = () => {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = () => {
    console.log(text);
    console.log(email);
    console.log(message);
  };
  return (
    <div>
      <h2 className="text-center text-3xl">Short Bio</h2>
      <div className="flex flex-col gap-4">
        <Input
          label="Nome:"
          value="name"
          onChange={(value) => setText(value)}
          placeholder="Gabriel Fernandes"
          type="text"
        />{" "}
        <Input
          label="Email:"
          value="email"
          onChange={(value) => setEmail(value)}
          placeholder="Gabriel Fernandes"
          type="mail"
        />
        <Input
          label="Message:"
          value="message"
          onChange={(value) => setMessage(value)}
          placeholder="Gabriel Fernandes"
          type="text"
        />{" "}
      </div>
      <div className="mt-6 flex justify-end">
        <button
          className=" bg-cyan-400 py-3 px-10 rounded-lg font-bold hover:font-black hover:bg-cyan-300"
          onClick={submit}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Form;
