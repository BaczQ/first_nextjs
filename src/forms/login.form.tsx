"use client";

import { Form, Input, Button } from "@heroui/react";
import { useState } from "react";

interface IProps {
  onClose: () => void;
}

const LoginForm = ({ onClose }: IProps) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    onClose();
  };

  return (
    <Form className="w-full max-w-xs" onSubmit={handleSubmit}>
      <Input
        aria-label="Email"
        isRequired
        errorMessage="Please enter a valid email"
        name="email"
        placeholder="Enter your email"
        type="email"
        value={formData.email}
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus:outline-none",
        }}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        validate={(value) => {
          if (!value) return "Email is required";
          return null;
        }}
      />

      <Input
        isRequired
        name="password"
        placeholder="Enter password"
        type="password"
        value={formData.password}
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus:outline-none",
        }}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        validate={(value) => {
          if (!value) return "Password is required";
          if (value.length < 6) return "Password must be at least 6 characters long";
          return null;
        }}
      />

      <div className="flex w-[100%] gap-4 items-center pt-8 justify-end">
        <Button variant="light" onPress={onClose}>
          Cancel
        </Button>

        <Button color="primary" type="submit">
          Log in
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
