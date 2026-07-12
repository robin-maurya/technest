"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { Container, Section, SectionHeading } from "@/components/ui/Shared";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/context/ToastContext";

interface FormState {
  username: string;
  email: string;
  password: string;
}

const initialState: FormState = {
  username: "",
  email: "",
  password: "",
};

export function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const { showToast } = useToast();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const nextErrors: Partial<FormState> = {};

    if (!form.username.trim()) nextErrors.username = "Username is required";
    if (!form.email.trim()) nextErrors.email = "Email is required";
    if (!/[^\s@]+@[^\s@]+\.[^\s@]+/.test(form.email)) nextErrors.email = "Please enter a valid email";
    if (!form.password.trim() || form.password.length < 6) nextErrors.password = "Password should be at least 6 characters";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      showToast("Please correct the highlighted fields.", "error");
      return;
    }

    login({ username: form.username.trim(), email: form.email.trim() });
    showToast("Welcome back! You are now signed in.", "success");
    router.push("/");
  };

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Access your workspace"
          title="Sign in to your TechNest account"
          description="Secure, simple access to your profile and project activity."
        />
        <FormCard onSubmit={handleSubmit}>
          <Field>
            <label htmlFor="username">Username</label>
            <input id="username" value={form.username} onChange={(event) => setForm((current) => ({ ...current, username: event.target.value }))} />
            {errors.username && <Error>{errors.username}</Error>}
          </Field>
          <Field>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={form.email} onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))} />
            {errors.email && <Error>{errors.email}</Error>}
          </Field>
          <Field>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" value={form.password} onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))} />
            {errors.password && <Error>{errors.password}</Error>}
          </Field>
          <SubmitButton type="submit">Log In</SubmitButton>
        </FormCard>
      </Container>
    </Section>
  );
}

const FormCard = styled.form`
  max-width: 520px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
  padding: 1.5rem;
  border-radius: ${(props) => props.theme.radius.md};
  border: 1px solid ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.surface};
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  label {
    font-weight: 600;
  }

  input {
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: 0.8rem;
    padding: 0.8rem 0.9rem;
    background: ${(props) => props.theme.colors.surfaceAlt};
    color: ${(props) => props.theme.colors.text};
  }
`;

const Error = styled.span`
  color: #ef4444;
  font-size: 0.9rem;
`;

const SubmitButton = styled.button`
  border: none;
  border-radius: 999px;
  padding: 0.9rem 1.2rem;
  background: linear-gradient(90deg, ${(props) => props.theme.colors.primary}, ${(props) => props.theme.colors.secondary});
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
