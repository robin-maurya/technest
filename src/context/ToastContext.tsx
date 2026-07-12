"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import styled, { keyframes } from "styled-components";

type ToastType = "success" | "error" | "info";

interface ToastItem {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastContextValue {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

const slideIn = keyframes`
  from { transform: translateY(10px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const ToastViewport = styled.div`
  position: fixed;
  top: 1.25rem;
  right: 1.25rem;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ToastBox = styled.div<{ $type: ToastType }>`
  min-width: 250px;
  max-width: 320px;
  padding: 0.9rem 1rem;
  border-radius: 0.9rem;
  box-shadow: ${(props) => props.theme.shadows.md};
  background: ${(props) =>
    props.$type === "success"
      ? props.theme.colors.accent
      : props.$type === "error"
        ? "#ef4444"
        : props.theme.colors.surface};
  color: ${(props) => (props.$type === "info" ? props.theme.colors.text : "#fff")};
  animation: ${slideIn} 0.2s ease;
`;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = useCallback((message: string, type: ToastType = "info") => {
    const id = Date.now();
    setToasts((current) => [...current, { id, message, type }]);

    window.setTimeout(() => {
      setToasts((current) => current.filter((item) => item.id !== id));
    }, 3200);
  }, []);

  const value = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastViewport>
        {toasts.map((toast) => (
          <ToastBox key={toast.id} $type={toast.type}>
            {toast.message}
          </ToastBox>
        ))}
      </ToastViewport>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
