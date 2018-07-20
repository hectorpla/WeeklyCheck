import { WeekTaskLists } from "../types";

// TODO set readonly
// ! should never change again, write new instance instead
export const mockWeekTasks: WeekTaskLists = {
  Monday: [{ code: 12 }, { code: 23 }],
  Tuesday: [{ code: 111, description: "haha" }],
  Wednesday: [{ code: 11111 }, { code: 99 }, { code: 87 }],
  Thursday: [],
  Friday: [{ code: 23, description: "im 23" }, { code: 11 }],
  Saturday: [],
  Sunday: [{ code: 122 }, { code: 88 }]
}

// shallow copy
export const createMockWeekTasks: () => WeekTaskLists = () => {
  return {
    ...mockWeekTasks
  };
}
