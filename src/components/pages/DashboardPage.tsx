"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { Container, Section, SectionHeading } from "@/components/ui/Shared";
import { useAuth } from "@/context/AuthContext";
import { recentActivities } from "@/services/mockData";

export function DashboardPage() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return <Loading>Preparing your workspace…</Loading>;
  }

  if (!user) {
    return null;
  }

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Profile"
          title={`Welcome back, ${user.username}`}
          description="Here is a snapshot of your account and the recent momentum around your projects."
        />
        <ProfileGrid>
          <ProfileCard>
            <Avatar>{user.username.charAt(0).toUpperCase()}</Avatar>
            <h3>{user.username}</h3>
            <p>{user.email}</p>
            <Badge>Premium Member</Badge>
          </ProfileCard>
          <InfoCard>
            <h3>Account Information</h3>
            <InfoList>
              <li>
                <span>Member since</span>
                <strong>March 2025</strong>
              </li>
              <li>
                <span>Primary focus</span>
                <strong>Growth & positioning</strong>
              </li>
              <li>
                <span>Support tier</span>
                <strong>Strategic advisory</strong>
              </li>
            </InfoList>
          </InfoCard>
        </ProfileGrid>

        <ActivitySection>
          <h3>Recent activity</h3>
          <ActivityGrid>
            {recentActivities.map((activity) => (
              <ActivityCard key={activity.id}>
                <p>{activity.title}</p>
                <span>{activity.detail}</span>
                <small>{activity.time}</small>
              </ActivityCard>
            ))}
          </ActivityGrid>
        </ActivitySection>
      </Container>
    </Section>
  );
}

const Loading = styled.div`
  min-height: 60vh;
  display: grid;
  place-items: center;
  font-weight: 600;
`;

const ProfileGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 0.9fr 1.1fr;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ProfileCard = styled.div`
  padding: 1.5rem;
  border-radius: ${(props) => props.theme.radius.md};
  background: linear-gradient(135deg, ${(props) => props.theme.colors.primary}, ${(props) => props.theme.colors.secondary});
  color: white;
  box-shadow: ${(props) => props.theme.shadows.md};

  h3 {
    margin: 1rem 0 0.3rem;
  }

  p {
    opacity: 0.9;
  }
`;

const Avatar = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.2);
  font-weight: 700;
  font-size: 1.2rem;
`;

const Badge = styled.span`
  display: inline-block;
  margin-top: 0.8rem;
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.16);
`;

const InfoCard = styled.div`
  padding: 1.4rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.md};
  background: ${(props) => props.theme.colors.surface};

  h3 {
    margin-bottom: 0.9rem;
  }
`;

const InfoList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;

  li {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    color: ${(props) => props.theme.colors.muted};
  }

  strong {
    color: ${(props) => props.theme.colors.text};
  }
`;

const ActivitySection = styled.section`
  margin-top: 1.5rem;

  h3 {
    margin-bottom: 0.9rem;
  }
`;

const ActivityGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ActivityCard = styled.div`
  padding: 1.2rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.md};
  background: ${(props) => props.theme.colors.surface};

  p {
    margin-bottom: 0.45rem;
    font-weight: 600;
  }

  span {
    color: ${(props) => props.theme.colors.muted};
    display: block;
    line-height: 1.7;
  }

  small {
    display: inline-block;
    margin-top: 0.6rem;
    color: ${(props) => props.theme.colors.primary};
  }
`;
