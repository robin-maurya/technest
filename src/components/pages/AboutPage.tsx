"use client";

import styled from "styled-components";
import { Card, Container, Section, SectionHeading } from "@/components/ui/Shared";
import { teamMembers } from "@/services/mockData";

export function AboutPage() {
  return (
    <>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="About TechNest"
            title="A modern IT partner helping bold ideas launch with clarity"
            description="We partner with founders and teams that care deeply about quality, trust, and momentum."
          />
          <IntroGrid>
            <IntroCard>
              <h3>Our story</h3>
              <p>
                TechNest was built to support ambitious teams that need modern IT product strategy and polished delivery without the noise of traditional vendors.
              </p>
            </IntroCard>
            <IntroCard>
              <h3>Mission</h3>
              <p>
                We make complex growth decisions feel simple, actionable, and human-centered.
              </p>
            </IntroCard>
            <IntroCard>
              <h3>Vision</h3>
              <p>
                We imagine a future where every brand can communicate with confidence and grow with intention.
              </p>
            </IntroCard>
          </IntroGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <StatsGrid>
            <StatCard>
              <strong>12+</strong>
              <span>years of combined experience</span>
            </StatCard>
            <StatCard>
              <strong>38%</strong>
              <span>average conversion lift</span>
            </StatCard>
            <StatCard>
              <strong>4.9/5</strong>
              <span>average client satisfaction</span>
            </StatCard>
            <StatCard>
              <strong>20+</strong>
              <span>global partners</span>
            </StatCard>
          </StatsGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="The team"
            title="A calm, collaborative crew with sharp execution"
            description="Our team balances strategic thinking with hands-on delivery so you always know what comes next."
          />
          <TeamGrid>
            {teamMembers.map((member) => (
              <TeamCard key={member.id}>
                <Avatar>{member.name.charAt(0)}</Avatar>
                <h3>{member.name}</h3>
                <Role>{member.role}</Role>
                <p>{member.bio}</p>
              </TeamCard>
            ))}
          </TeamGrid>
        </Container>
      </Section>
    </>
  );
}

const IntroGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const IntroCard = styled(Card)`
  padding: 1.4rem;

  h3 {
    margin-bottom: 0.6rem;
  }

  p {
    line-height: 1.8;
    color: ${(props) => props.theme.colors.muted};
  }
`;

const StatsGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const StatCard = styled(Card)`
  padding: 1.2rem;
  text-align: center;

  strong {
    display: block;
    font-size: 1.5rem;
    margin-bottom: 0.35rem;
  }

  span {
    color: ${(props) => props.theme.colors.muted};
  }
`;

const TeamGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const TeamCard = styled(Card)`
  padding: 1.4rem;

  p {
    color: ${(props) => props.theme.colors.muted};
    line-height: 1.7;
  }
`;

const Avatar = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.surfaceAlt};
  color: ${(props) => props.theme.colors.primary};
  font-weight: 700;
  margin-bottom: 0.8rem;
`;

const Role = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
  margin: 0.2rem 0 0.6rem;
`;
