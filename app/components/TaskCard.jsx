"use client";

import { Calendar, MoreVertical, Trash2, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatDate, isOverdue } from "../lib/utils";

export default function TaskCard({ task, project, tags, onEdit, onDelete }) {
  const taskTags = tags.filter((tag) => task.tagIds.includes(tag.id));
  const overdue = isOverdue(task.dueDate);

  const statusColors = {
    todo: "bg-muted text-muted-foreground",
    "in-progress": "bg-primary/20 text-primary",
    done: "bg-chart-3/20 text-chart-3",
  };

  return (
    <Card className="p-4 hover:border-primary/50 transition-colors">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-medium text-foreground truncate">
              {task.title}
            </h3>
            <Badge variant="outline" className={statusColors[task.status]}>
              {task.status.replace("-", " ")}
            </Badge>
          </div>

          {task.description && (
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {task.description}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-2">
            {project && (
              <Badge
                variant="outline"
                className="text-xs"
                style={{ borderColor: project.color, color: project.color }}
              >
                {project.name}
              </Badge>
            )}

            {taskTags.map((tag) => (
              <Badge
                key={tag.id}
                variant="secondary"
                className="text-xs"
                style={{ backgroundColor: `${tag.color}20`, color: tag.color }}
              >
                {tag.name}
              </Badge>
            ))}

            <div
              className={`flex items-center gap-1 text-xs ${
                overdue ? "text-destructive" : "text-muted-foreground"
              }`}
            >
              <Calendar className="h-3 w-3" />
              <span>{formatDate(task.dueDate)}</span>
            </div>
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onEdit(task)}>
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onDelete(task.id)}
              className="text-destructive focus:text-destructive"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Card>
  );
}
