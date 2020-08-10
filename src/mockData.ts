import { UserTasksProps } from "./App";

export const data: UserTasksProps[] = [
  {
    key: new Date(),
    title: "okoko",
    description: "ooopooo",
    isDone: false,
  },
  {
    key: new Date(),
    title: "okoko",
    description: "ooopooo",
    isDone: true,
  },
];

export const tabPaths: Record<string, string>[] = [
  {
    title: "first",
    linkTo: "/first",
  },
  {
    title: "second",
    linkTo: "/second",
  },
  {
    title: "third",
    linkTo: "/third",
  },
  {
    title: "fourth",
    linkTo: "/fourth",
  },
];
