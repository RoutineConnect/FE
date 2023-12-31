export const MAINROUTINE = [
  {
    id: 1,
    type: 1,
    hours: "8시",
    description: "유산소 타기",
    retrospect: "회고 칸",
    check: {
      id: 1,
      routineId: 1,
      Date: "Mon",
      achievement: false,
    },
  },
  {
    id: 2,
    type: 2,
    hours: "10시",
    description: "루틴 2",
    retrospect: "회고 칸",
    check: {
      id: 2,
      routineId: 2,
      Date: "Mon",
      achievement: true,
    },
  },
  {
    id: 3,
    type: 1,
    hours: "점심에",
    description: "꼭 밥 챙겨먹기",
    retrospect: "회고 칸",
    check: {
      id: 3,
      routineId: 3,
      Date: "Mon",
      achievement: true,
    },
  },
  {
    id: 4,
    type: 2,
    hours: "8시",
    description: "유산소 타기",
    retrospect: null,
    check: {
      id: 4,
      routineId: 4,
      Date: "Mon",
      achievement: false,
    },
  },
  {
    id: 5,
    type: 1,
    hours: "8시",
    description: "유산소 타기",
    retrospect: "회고 칸",
    check: {
      id: 5,
      routineId: 5,
      Date: "Mon",
      achievement: false,
    },
  },
  {
    id: 5,
    type: 1,
    hours: "8시",
    description: "유산소 타기",
    retrospect: "회고 칸",
    check: {
      id: 5,
      routineId: 5,
      Date: "Mon",
      achievement: false,
    },
  },
  {
    id: 5,
    type: 1,
    hours: "8시",
    description: "유산소 타기",
    retrospect: "회고 칸",
    check: {
      id: 5,
      routineId: 5,
      Date: "Mon",
      achievement: false,
    },
  },
  {
    id: 5,
    type: 1,
    hours: "8시",
    description: "유산소 타기",
    retrospect: "회고 칸",
    check: {
      id: 5,
      routineId: 5,
      Date: "Mon",
      achievement: false,
    },
  },
  {
    id: 5,
    type: 1,
    hours: "8시",
    description: "유산소 타기",
    retrospect: "회고 칸",
    check: {
      id: 5,
      routineId: 5,
      Date: "Mon",
      achievement: false,
    },
  },
  {
    id: 5,
    type: 1,
    hours: "8시",
    description: "유산소 타기",
    retrospect: "회고 칸",
    check: {
      id: 5,
      routineId: 5,
      Date: "Mon",
      achievement: false,
    },
  },
  {
    id: 5,
    type: 1,
    hours: "8시",
    description: "유산소 타기",
    retrospect: "회고 칸",
    check: {
      id: 5,
      routineId: 5,
      Date: "Mon",
      achievement: false,
    },
  },
  {
    id: 5,
    type: 1,
    hours: "8시",
    description: "유산소 타기",
    retrospect: "회고 칸",
    check: {
      id: 5,
      routineId: 5,
      Date: "Mon",
      achievement: false,
    },
  },
  {
    id: 5,
    type: 1,
    hours: "8시",
    description: "유산소 타기",
    retrospect: "회고 칸",
    check: {
      id: 5,
      routineId: 5,
      Date: "Mon",
      achievement: false,
    },
  },
  {
    id: 5,
    type: 1,
    hours: "8시",
    description: "유산소 타기",
    retrospect: "회고 칸",
    check: {
      id: 5,
      routineId: 5,
      Date: "Mon",
      achievement: false,
    },
  },
];

interface RoutineOnDate {
  id: number;
  position: number;
  items: routine | challenge;
  accomplishment: string;
}

interface routine {
  id: number;
  title: string;
  retrospect: string;
  repeatingDays: [string];
  hour: {
    id: number;
  };
  shared: boolean;
  createDate: any;
  endedDate: any;
}
interface challenge {
  id: number;
  title: string;
  retrospect: string;
  repeatingDays: [string];
  hour: {
    id: number;
  };
  shared: boolean;
  createDate: any;
  endedDate: any;
}
