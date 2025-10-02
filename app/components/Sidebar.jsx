"use client";

import { LayoutDashboard, CheckSquare, FolderKanban } from "lucide-react";
import { cn } from "../lib/utils";

export default function Sidebar({ stats }) {
  return (
    <aside className="w-64 border-r border-border bg-sidebar p-6 flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-sidebar-foreground mb-1">
          TaskFlow
        </h1>
        <p className="text-sm text-sidebar-foreground/60">
          Manage your tasks efficiently
        </p>
      </div>

      <nav className="flex flex-col gap-2">
        <a
          href="#"
          className={cn(
            "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium",
            "bg-sidebar-accent text-sidebar-accent-foreground"
          )}
        >
          <LayoutDashboard className="h-4 w-4" />
          Dashboard
        </a>
        <a
          href="#"
          className={cn(
            "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium",
            "text-sidebar-foreground/60 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
          )}
        >
          <CheckSquare className="h-4 w-4" />
          My Tasks
        </a>
        <a
          href="#"
          className={cn(
            "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium",
            "text-sidebar-foreground/60 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
          )}
        >
          <FolderKanban className="h-4 w-4" />
          Projects
        </a>
      </nav>

      {stats && (
        <div className="mt-auto space-y-4">
          <div className="p-4 bg-sidebar-accent rounded-lg">
            <h3 className="text-sm font-medium text-sidebar-foreground mb-3">
              Overview
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-sidebar-foreground/60">Total Tasks</span>
                <span className="font-medium text-sidebar-foreground">
                  {stats.total}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-sidebar-foreground/60">In Progress</span>
                <span className="font-medium text-primary">
                  {stats.inProgress}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-sidebar-foreground/60">Completed</span>
                <span className="font-medium text-chart-3">
                  {stats.completed}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
