"use client";

import Link from "next/link";
import styled from "styled-components";
import { Card, Container, PrimaryButton, Section, SectionHeading } from "@/components/ui/Shared";
import { services } from "@/services/mockData";

export function ServicesPage() {
  return (
    <>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Flexible support for teams that need momentum"
            description="From positioning to full product strategy, our services are designed to fit your current phase and future ambition."
          />
          <ServicesGrid>
            {services.map((service) => (
              <ServiceCard key={service.id}>
                <Icon>{service.icon}</Icon>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <LearnMore href={service.link}>Learn More</LearnMore>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <CTABox>
            <h2>Need a custom engagement?</h2>
            <p>Tell us what you are building and we will shape a package around your goals.</p>
            <PrimaryButton href="/contact">Discuss Your Project</PrimaryButton>
          </CTABox>
        </Container>
      </Section>
    </>
  );
}

const ServicesGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(Card)`
  padding: 1.4rem;

  h3 {
    margin: 0.8rem 0 0.5rem;
  }

  p {
    color: ${(props) => props.theme.colors.muted};
    line-height: 1.7;
    margin-bottom: 1rem;
  }
`;

const Icon = styled.div`
  font-size: 1.4rem;
`;

const LearnMore = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
`;

const CTABox = styled(Card)`
  padding: 2rem;
  text-align: center;
  background: ${(props) => props.theme.colors.surfaceAlt};

  h2 {
    margin-bottom: 0.6rem;
  }

  p {
    color: ${(props) => props.theme.colors.muted};
    margin-bottom: 1rem;
  }
`;
