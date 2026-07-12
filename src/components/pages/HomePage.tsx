"use client";

import Link from "next/link";
import styled from "styled-components";
import { Card, Container, PrimaryButton, SecondaryButton, Section, SectionHeading } from "@/components/ui/Shared";
import { features, services, testimonials } from "@/services/mockData";

export function HomePage() {
  return (
    <>
      <HeroSection>
        <Container>
          <HeroGrid>
            <HeroContent>
              <Eyebrow>Full-spectrum growth partner</Eyebrow>
              <HeroTitle>Build a sharper brand and a stronger digital presence.</HeroTitle>
              <HeroText>
                TechNest helps ambitious teams refine strategy, launch standout digital products,
                and grow with confidence.
              </HeroText>
              <HeroActions>
                <PrimaryButton href="/services">Explore Services</PrimaryButton>
                <SecondaryButton href="/contact">Book a Consultation</SecondaryButton>
              </HeroActions>
              <HeroStats>
                <Stat>
                  <strong>120+</strong>
                  <span>delivered launches</span>
                </Stat>
                <Stat>
                  <strong>94%</strong>
                  <span>client retention</span>
                </Stat>
                <Stat>
                  <strong>24/7</strong>
                  <span>partner support</span>
                </Stat>
              </HeroStats>
            </HeroContent>
            <HeroVisual>
              <VisualCard>
                <VisualLabel>Momentum Snapshot</VisualLabel>
                <VisualValue>+38% lead quality</VisualValue>
                <VisualList>
                  <li>Messaging refresh</li>
                  <li>Conversion-focused launch</li>
                  <li>Agile growth support</li>
                </VisualList>
              </VisualCard>
            </HeroVisual>
          </HeroGrid>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="What we do best"
            title="Strategy that feels modern, clear, and practical"
            description="We blend insight, creativity, and systems thinking to build supportive experiences for your audience and your team."
          />
          <FeatureGrid>
            {features.map((feature) => (
              <FeatureCard key={feature.id}>
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </FeatureCard>
            ))}
          </FeatureGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Featured services"
            title="A flexible model for complex growth goals"
            description="Choose the support you need today and grow into a full strategic partnership over time."
          />
          <ServiceGrid>
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id}>
                <ServiceIcon>{service.icon}</ServiceIcon>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link href={service.link}>Learn More →</Link>
              </ServiceCard>
            ))}
          </ServiceGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Trusted by founders"
            title="Stories from teams scaling with clarity"
            description="We believe your next chapter deserves a calm, experienced perspective."
          />
          <TestimonialGrid>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id}>
                <p>“{testimonial.quote}”</p>
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </TestimonialCard>
            ))}
          </TestimonialGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <CTABox>
            <h2>Ready to bring calm momentum to your next launch?</h2>
            <p>Let’s turn ideas into a clear strategy with modern execution and measurable outcomes.</p>
            <PrimaryButton href="/contact">Start the Conversation</PrimaryButton>
          </CTABox>
        </Container>
      </Section>
    </>
  );
}

const HeroSection = styled.section`
  padding: 4.5rem 0 3.5rem;
`;

const HeroGrid = styled.div`
  display: grid;
  gap: 2rem;
  align-items: center;
  grid-template-columns: 1.2fr 0.8fr;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const HeroContent = styled.div``;

const Eyebrow = styled.p`
  display: inline-flex;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  background: ${(props) => props.theme.colors.surfaceAlt};
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
  margin-bottom: 1rem;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.2rem, 4.4vw, 3.5rem);
  line-height: 1.1;
  margin-bottom: 1rem;
`;

const HeroText = styled.p`
  color: ${(props) => props.theme.colors.muted};
  font-size: 1.06rem;
  line-height: 1.8;
  max-width: 620px;
`;

const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin: 1.3rem 0 1.6rem;
`;

const HeroStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Stat = styled.div`
  min-width: 130px;
  padding: 0.9rem 1rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.sm};
  background: ${(props) => props.theme.colors.surface};
  box-shadow: ${(props) => props.theme.shadows.sm};

  strong {
    display: block;
    font-size: 1.1rem;
    margin-bottom: 0.2rem;
  }

  span {
    color: ${(props) => props.theme.colors.muted};
    font-size: 0.92rem;
  }
`;

const HeroVisual = styled.div``;

const VisualCard = styled(Card)`
  padding: 1.4rem;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(135deg, ${(props) => props.theme.colors.primary}, ${(props) => props.theme.colors.secondary});
  color: white;
`;

const VisualLabel = styled.p`
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  opacity: 0.85;
`;

const VisualValue = styled.h3`
  font-size: 2rem;
`;

const VisualList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  color: rgba(255, 255, 255, 0.9);
`;

const FeatureGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(Card)`
  padding: 1.4rem;

  h3 {
    margin: 0.55rem 0 0.45rem;
  }

  p {
    color: ${(props) => props.theme.colors.muted};
    line-height: 1.7;
  }
`;

const FeatureIcon = styled.div`
  font-size: 1.3rem;
`;

const ServiceGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(Card)`
  padding: 1.35rem;

  h3 {
    margin: 0.75rem 0 0.55rem;
  }

  p {
    color: ${(props) => props.theme.colors.muted};
    line-height: 1.7;
    margin-bottom: 0.9rem;
  }

  a {
    color: ${(props) => props.theme.colors.primary};
    font-weight: 600;
  }
`;

const ServiceIcon = styled.div`
  font-size: 1.4rem;
`;

const TestimonialGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled(Card)`
  padding: 1.3rem;

  p {
    line-height: 1.8;
    color: ${(props) => props.theme.colors.text};
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  span {
    color: ${(props) => props.theme.colors.muted};
    font-size: 0.9rem;
  }
`;

const CTABox = styled(Card)`
  padding: 2rem;
  text-align: center;
  background: linear-gradient(135deg, ${(props) => props.theme.colors.surfaceAlt}, ${(props) => props.theme.colors.surface});

  h2 {
    margin-bottom: 0.6rem;
  }

  p {
    color: ${(props) => props.theme.colors.muted};
    margin-bottom: 1.2rem;
  }
`;
