import { ReactNode } from "react";

export type Note = {
  id: number,
  title: string,
  lastEdited: string,
  archived: boolean,
  copy: string,
  tags: string[]
}

export interface LayoutProps {
    children?: ReactNode
}
