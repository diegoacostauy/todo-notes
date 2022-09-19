import { NoteCardProps } from "../types";

export const api = {
  notes: {
    list() {
      return [
        {
          id: Date.now() + 1,
          title: "Some old note",
          copy: "Lorem ipsum dolor amet sarasa",
          lastEdited: "10/10/2022",
          archived: false,
          tags: []
        },
        {
          id: Date.now() + 2,
          title: "Some old note",
          copy: "Lorem ipsum dolor amet sarasa",
          lastEdited: "10/10/2022",
          archived: false,
          tags: []
        },
      ];
    },
  },
};
