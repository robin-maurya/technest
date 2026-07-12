"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import { useToast } from "@/context/ToastContext";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, isAuthenticated, logout } = useAuth();
  const { themeMode, toggleTheme } = useTheme();
  const { showToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const previousPath = useRef(pathname);

  useEffect(() => {
    if (pathname !== previousPath.current) {
      previousPath.current = pathname;
      setIsLoading(false);
    }
  }, [pathname]);

  const handleSignOut = () => {
    logout();
    showToast("Signed out successfully.", "info");
    setIsLoading(true);
    router.push("/");
  };

  return (
    <HeaderWrap>
      <ProgressBar $active={isLoading} />
      <NavContainer>
        <Brand href="/">
          <BrandMark>TN</BrandMark>
          <div>
            <BrandName>TechNest</BrandName>
            <BrandTag>Design • Engineering • Growth</BrandTag>
          </div>
        </Brand>

        <DesktopNav>
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              prefetch={true}
              $active={pathname === item.href}
              onClick={() => setIsLoading(true)}
            >
              {item.label}
            </NavLink>
          ))}
          {isAuthenticated ? (
            <>
              <NavLink
                href="/dashboard"
                prefetch={true}
                $active={pathname === "/dashboard"}
                onClick={() => setIsLoading(true)}
              >
                Dashboard
              </NavLink>
              <UserBadge>Welcome, {user?.username}</UserBadge>
              <AuthButton onClick={handleSignOut}>Sign Out</AuthButton>
            </>
          ) : (
            <NavLink
              href="/login"
              prefetch={true}
              $active={pathname === "/login"}
              onClick={() => setIsLoading(true)}
            >
              Login
            </NavLink>
          )}
          <ThemeButton onClick={toggleTheme} type="button">
            {themeMode === "light" ? "🌙" : "☀️"}
          </ThemeButton>
        </DesktopNav>

        <MobileActions>
          <ThemeButton onClick={toggleTheme} type="button">
            {themeMode === "light" ? "🌙" : "☀️"}
          </ThemeButton>
          <MenuButton type="button" onClick={() => setOpen((value) => !value)}>
            ☰
          </MenuButton>
        </MobileActions>
      </NavContainer>

      {open && (
        <MobileNav>
          {navItems.map((item) => (
            <MobileLink
              key={item.href}
              href={item.href}
              prefetch={true}
              onClick={() => {
                setOpen(false);
                setIsLoading(true);
              }}
            >
              {item.label}
            </MobileLink>
          ))}
          {isAuthenticated ? (
            <>
              <MobileLink href="/dashboard" onClick={() => setOpen(false)}>
                Dashboard
              </MobileLink>
              <MobileLink href="/" onClick={handleSignOut}>
                Sign Out
              </MobileLink>
            </>
          ) : (
            <MobileLink href="/login" onClick={() => setOpen(false)}>
              Login
            </MobileLink>
          )}
        </MobileNav>
      )}
    </HeaderWrap>
  );
}

const HeaderWrap = styled.header`
  position: sticky;
  top: 0;
  z-index: 999;
  backdrop-filter: blur(16px);
  background: ${(props) => props.theme.colors.surface};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

const NavContainer = styled.div`
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const BrandMark = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.7rem;
  height: 2.7rem;
  border-radius: 50%;
  background: linear-gradient(135deg, ${(props) => props.theme.colors.primary}, ${(props) => props.theme.colors.secondary});
  color: white;
  font-weight: 700;
`;

const BrandName = styled.span`
  display: block;
  font-weight: 700;
`;

const BrandTag = styled.span`
  display: block;
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.muted};
`;

const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ $active?: boolean }>`
  color: ${(props) => (props.$active ? props.theme.colors.primary : props.theme.colors.text)};
  font-weight: 600;
`;

const ProgressBar = styled.div<{ $active: boolean }>`
  position: absolute;
  inset: 0 0 auto;
  height: 4px;
  width: 100%;
  transform-origin: left;
  transform: scaleX(${(props) => (props.$active ? 1 : 0)});
  opacity: ${(props) => (props.$active ? 1 : 0)};
  background: linear-gradient(90deg, ${(props) => props.theme.colors.primary}, ${(props) => props.theme.colors.secondary});
  transition: transform 200ms ease, opacity 200ms ease;
`;

const UserBadge = styled.span`
  padding: 0.5rem 0.8rem;
  border-radius: 999px;
  background: ${(props) => props.theme.colors.surfaceAlt};
  color: ${(props) => props.theme.colors.primary};
  font-size: 0.9rem;
`;

const AuthButton = styled.button`
  border: none;
  background: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 0.7rem 1rem;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
`;

const ThemeButton = styled.button`
  border: none;
  background: transparent;
  color: ${(props) => props.theme.colors.text};
  font-size: 1.15rem;
  cursor: pointer;
`;

const MobileActions = styled.div`
  display: none;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: flex;
  }
`;

const MenuButton = styled.button`
  border: 1px solid ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.surface};
  color: ${(props) => props.theme.colors.text};
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  cursor: pointer;
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  padding: 1rem 1rem 1.25rem;
  border-top: 1px solid ${(props) => props.theme.colors.border};
`;

const MobileLink = styled(Link)`
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
`;
