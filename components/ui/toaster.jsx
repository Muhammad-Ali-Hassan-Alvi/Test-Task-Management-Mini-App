"use client";

import { useToast } from "@/hooks/use-toast";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

const Toast = ({ toast, onDismiss }) => {
  const getIcon = () => {
    switch (toast.variant) {
      case "destructive":
        return <AlertCircle className="h-4 w-4" />;
      case "success":
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Info className="h-4 w-4" />;
    }
  };

  const getVariantClasses = () => {
    switch (toast.variant) {
      case "destructive":
        return "border-red-200 bg-red-50 text-red-900";
      case "success":
        return "border-green-200 bg-green-50 text-green-900";
      default:
        return "border-gray-200 bg-white text-gray-900";
    }
  };

  return (
    <div
      className={cn(
        "pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg border shadow-lg transition-all",
        getVariantClasses()
      )}
    >
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            {getIcon()}
          </div>
          <div className="ml-3 w-0 flex-1">
            {toast.title && (
              <p className="text-sm font-medium">
                {toast.title}
              </p>
            )}
            {toast.description && (
              <p className="mt-1 text-sm opacity-90">
                {toast.description}
              </p>
            )}
          </div>
          <div className="ml-4 flex flex-shrink-0">
            <button
              className="inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
              onClick={() => onDismiss(toast.id)}
            >
              <span className="sr-only">Close</span>
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export function Toaster() {
  const { toasts, dismiss } = useToast();

  return (
    <div
      aria-live="assertive"
      className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-50"
    >
      <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            toast={toast}
            onDismiss={dismiss}
          />
        ))}
      </div>
    </div>
  );
}
