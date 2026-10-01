"use client";

import { FormEvent, useMemo, useState } from "react";
import styled from "styled-components";
import { Container, Section, SectionHeading } from "@/components/ui/Shared";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/context/ToastContext";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactPage() {
  const { user, isAuthenticated } = useAuth();
  const { showToast } = useToast();
  const [form, setForm] = useState<FormState>(initialState);
  const [userFieldsEdited, setUserFieldsEdited] = useState({ name: false, email: false });
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const activeForm = useMemo(
    () => ({
      ...form,
      name: userFieldsEdited.name ? form.name : isAuthenticated && user ? user.username : form.name,
      email: userFieldsEdited.email ? form.email : isAuthenticated && user ? user.email : form.email,
    }),
    [form, isAuthenticated, user, userFieldsEdited],
  );

  const onChange = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (field === "name" || field === "email") {
      setUserFieldsEdited((current) => ({ ...current, [field]: true }));
    }
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validation = useMemo(() => {
    const nextErrors: Partial<FormState> = {};
    if (!activeForm.name.trim()) nextErrors.name = "Name is required";
    if (!activeForm.email.trim()) nextErrors.email = "Email is required";
    if (!/[^\s@]+@[^\s@]+\.[^\s@]+/.test(activeForm.email)) nextErrors.email = "Please enter a valid email";
    if (!activeForm.subject.trim()) nextErrors.subject = "Subject is required";
    if (!activeForm.message.trim()) nextErrors.message = "A short message is required";
    return nextErrors;
  }, [activeForm]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setErrors(validation);

    if (Object.keys(validation).length) {
      showToast("Please correct the highlighted fields.", "error");
      return;
    }

    showToast("Message sent. We will be in touch shortly.", "success");
    setForm(initialState);
    setUserFieldsEdited({ name: true, email: true });
  };

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Tell us about your next move"
          description="We will respond quickly with thoughtful options that match your goals."
        />
        <ContactGrid>
          <InfoCard>
            <h3>Let’s connect</h3>
            <p>Prefer email? Reach us directly at hello@technest.io.</p>
            <ul>
              <li>Fast response within one business day</li>
              <li>Flexible collaboration models</li>
              <li>Clear next steps and timelines</li>
            </ul>
          </InfoCard>
          <FormCard onSubmit={handleSubmit}>
            <Field>
              <label htmlFor="name">Name</label>
              <input id="name" value={activeForm.name} onChange={(event) => onChange("name", event.target.value)} />
              {errors.name && <Error>{errors.name}</Error>}
            </Field>
            <Field>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" value={activeForm.email} onChange={(event) => onChange("email", event.target.value)} />
              {errors.email && <Error>{errors.email}</Error>}
            </Field>
            <Field>
              <label htmlFor="subject">Subject</label>
              <input id="subject" value={form.subject} onChange={(event) => onChange("subject", event.target.value)} />
              {errors.subject && <Error>{errors.subject}</Error>}
            </Field>
            <Field>
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={5} value={form.message} onChange={(event) => onChange("message", event.target.value)} />
              {errors.message && <Error>{errors.message}</Error>}
            </Field>
            <SubmitButton type="submit">Send Message</SubmitButton>
          </FormCard>
        </ContactGrid>
      </Container>
    </Section>
  );
}

const ContactGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 0.9fr 1.1fr;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  padding: 1.5rem;
  border-radius: ${(props) => props.theme.radius.md};
  background: ${(props) => props.theme.colors.surfaceAlt};

  h3 {
    margin-bottom: 0.7rem;
  }

  p {
    color: ${(props) => props.theme.colors.muted};
    line-height: 1.7;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
    color: ${(props) => props.theme.colors.text};
  }
`;

const FormCard = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
  padding: 1.4rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.md};
  background: ${(props) => props.theme.colors.surface};
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  label {
    font-weight: 600;
  }

  input,
  textarea {
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
