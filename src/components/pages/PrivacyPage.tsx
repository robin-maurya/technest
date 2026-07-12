"use client";

import styled from "styled-components";
import { Container, Section, SectionHeading } from "@/components/ui/Shared";

export function PrivacyPage() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Privacy Policy"
          title="Your data stays secure with TechNest"
          description="We collect only what we need and handle it with transparent security and respect."
        />
        <ContentCard>
          <Block>
            <h3>What we collect</h3>
            <p>
              We only store basic account information and contact details when you sign up. We do not share personal data with third parties except to support your requests.
            </p>
          </Block>
          <Block>
            <h3>How we use data</h3>
            <p>
              Information is used to maintain your login state, deliver messages, and improve the product experience. We keep analytics anonymous and secure.
            </p>
          </Block>
          <Block>
            <h3>Security</h3>
            <p>
              We implement safeguards across our systems and only retain data as long as required to support your collaboration with TechNest.
            </p>
          </Block>
        </ContentCard>
      </Container>
    </Section>
  );
}

const ContentCard = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const Block = styled.div`
  padding: 1.4rem;
  border-radius: ${(props) => props.theme.radius.md};
  background: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.border};

  h3 {
    margin-bottom: 0.65rem;
  }

  p {
    color: ${(props) => props.theme.colors.muted};
    line-height: 1.8;
  }
`;
