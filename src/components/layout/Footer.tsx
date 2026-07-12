"use client";

import Link from "next/link";
import styled from "styled-components";
import { Container } from "@/components/ui/Shared";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },  { label: "FAQ", href: "/faq" },
  { label: "Privacy Policy", href: "/privacy" },  { label: "Contact", href: "/contact" },
  { label: "Login", href: "/login" },
];

export function Footer() {
  return (
    <FooterWrap>
      <Container>
        <FooterGrid>
          <div>
            <Brand>TechNest</Brand>
            <Description>
              Modern IT services and digital product execution for ambitious teams.
            </Description>
          </div>
          <div>
            <Title>Explore</Title>
            <List>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </List>
          </div>
          <div>
            <Title>Connect</Title>
            <List>
              <li>
                <FooterLink href="mailto:hello@technest.io">hello@technest.io</FooterLink>
              </li>
              <li>
                <FooterLink href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                  LinkedIn
                </FooterLink>
              </li>
              <li>
                <FooterLink href="https://www.instagram.com" target="_blank" rel="noreferrer">
                  Instagram
                </FooterLink>
              </li>
            </List>
          </div>
        </FooterGrid>
      </Container>
    </FooterWrap>
  );
}

const FooterWrap = styled.footer`
  border-top: 1px solid ${(props) => props.theme.colors.border};
  padding: 3rem 0 2rem;
  background: ${(props) => props.theme.colors.surface};
`;

const FooterGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1.5fr 1fr 1fr;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const Brand = styled.h3`
  margin-bottom: 0.7rem;
  font-size: 1.2rem;
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.muted};
  line-height: 1.7;
  max-width: 320px;
`;

const Title = styled.h4`
  margin-bottom: 0.75rem;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const FooterLink = styled(Link)`
  color: ${(props) => props.theme.colors.muted};

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;
