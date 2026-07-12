"use client";

import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
`;

export const Section = styled.section`
  padding: 5rem 0;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 4rem 0;
  }
`;

export const SectionHeading = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) => (
  <HeadingWrap>
    <Eyebrow>{eyebrow}</Eyebrow>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </HeadingWrap>
);

const HeadingWrap = styled.div`
  max-width: 680px;
  margin: 0 auto 2.5rem;
  text-align: center;
`;

const Eyebrow = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 0.8rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 999px;
  color: ${(props) => props.theme.colors.primary};
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  margin-bottom: 0.9rem;
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.muted};
  line-height: 1.7;
  font-size: 1rem;
`;

export const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.9rem 1.3rem;
  background: linear-gradient(90deg, ${(props) => props.theme.colors.primary}, ${(props) => props.theme.colors.secondary});
  color: white;
  border-radius: 999px;
  font-weight: 600;
  box-shadow: ${(props) => props.theme.shadows.sm};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${(props) => props.theme.shadows.md};
  }
`;

export const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.9rem 1.3rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.surface};
  color: ${(props) => props.theme.colors.text};
  border-radius: 999px;
  font-weight: 600;
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: ${(props) => props.theme.colors.surfaceAlt};
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

export const Card = styled.article`
  background: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.md};
  box-shadow: ${(props) => props.theme.shadows.sm};
`;
