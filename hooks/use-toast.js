"use client";

import { createContext, useContext, useState, useCallback } from "react";

const ToastContext = createContext();

let toastId = 0;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const toast = useCallback(({ title, description, variant = "default", duration = 5000 }) => {
    const id = toastId++;
    const newToast = {
      id,
      title,
      description,
      variant,
      duration,
    };

    setToasts((prev) => [...prev, newToast]);

    // Auto remove toast after duration
    if (duration > 0) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
      }, duration);
    }

    return id;
  }, []);

  const dismiss = useCallback((toastId) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== toastId));
  }, []);

  return (
    <ToastContext.Provider value={{ toast, dismiss, toasts }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    // Fallback for when used outside provider
    return {
      toast: ({ title, description, variant }) => {
        console.log(`Toast: ${title} - ${description} (${variant})`);
      },
      dismiss: () => {},
      toasts: [],
    };
  }
  return context;
}
