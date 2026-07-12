"use client";

import styled from "styled-components";
import { Container, Section, SectionHeading } from "@/components/ui/Shared";

const faqs = [
  {
    question: "What type of IT services does TechNest offer?",
    answer: "We provide product strategy, web and app development, digital transformation planning, and growth advisory for modern businesses.",
  },
  {
    question: "Can I get a custom project engagement?",
    answer: "Yes. We tailor engagements around your growth stage, budget, and technical priorities with a flexible delivery model.",
  },
  {
    question: "How does login state persist?",
    answer: "Your login details are stored securely in local storage so your session remains active until you sign out.",
  },
];

export function FaqPage() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions about working with TechNest"
          description="Answers to the most frequent questions about our process, services, and login experience."
        />
        <FaqGrid>
          {faqs.map((item) => (
            <FaqCard key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </FaqCard>
          ))}
        </FaqGrid>
      </Container>
    </Section>
  );
}

const FaqGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const FaqCard = styled.div`
  padding: 1.4rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.md};
  background: ${(props) => props.theme.colors.surface};

  h3 {
    margin-bottom: 0.65rem;
  }

  p {
    color: ${(props) => props.theme.colors.muted};
    line-height: 1.75;
  }
`;
