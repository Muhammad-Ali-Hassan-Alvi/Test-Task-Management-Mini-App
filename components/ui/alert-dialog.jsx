"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function AlertDialog({ open, onOpenChange, children }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog>
  );
}

export function AlertDialogTrigger({ children, asChild, ...props }) {
  return children;
}

export function AlertDialogContent({ children, className, ...props }) {
  return (
    <DialogContent className={className} {...props}>
      {children}
    </DialogContent>
  );
}

export function AlertDialogHeader({ children, ...props }) {
  return <DialogHeader {...props}>{children}</DialogHeader>;
}

export function AlertDialogTitle({ children, ...props }) {
  return <DialogTitle {...props}>{children}</DialogTitle>;
}

export function AlertDialogDescription({ children, ...props }) {
  return <DialogDescription {...props}>{children}</DialogDescription>;
}

export function AlertDialogFooter({ children, ...props }) {
  return <DialogFooter {...props}>{children}</DialogFooter>;
}

export function AlertDialogAction({ children, onClick, ...props }) {
  return (
    <Button onClick={onClick} {...props}>
      {children}
    </Button>
  );
}

export function AlertDialogCancel({ children, onClick, ...props }) {
  return (
    <Button variant="outline" onClick={onClick} {...props}>
      {children}
    </Button>
  );
}
