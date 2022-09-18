import { NoteCardProps } from "../types";

export const api = {
  notes: {
    list() {
      return new Array(2).fill({
        id: Date.now(),
        title: "Some old note",
        content: "Lorem ipsum dolor amet sarasa",
        lasEdited: "10/10/2022",
        archived: false
      });
    }
  }
}
