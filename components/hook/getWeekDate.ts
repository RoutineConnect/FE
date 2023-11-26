export interface WeekDateInfo {
  date: string;
  day: number;
  dayOfTheWeek: string;
}

export default function GetWeekDatesWithToday(): WeekDateInfo[] {
  const today: Date = new Date();
  const currentDay: number = today.getDay();
  const startOfWeek: Date = new Date(today);
  startOfWeek.setDate(today.getDate() - currentDay);

  const weekDatesWithToday: WeekDateInfo[] = [];
  for (let i = 0; i < 7; i++) {
    const date: Date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    const formattedDate: string = formatDate(date);
    const dayOfTheWeek: string = getDayOfTheWeek(date.getDay());
    weekDatesWithToday.push({
      date: formattedDate,
      day: date.getDate(),
      dayOfTheWeek: dayOfTheWeek,
    });
  }

  return weekDatesWithToday;
}

function formatDate(date: Date): string {
  const year: number = date.getFullYear();
  const month: number = date.getMonth() + 1;
  const day: number = date.getDate();
  return `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`;
}

function getDayOfTheWeek(day: number): string {
  const daysInKorean: string[] = ["일", "월", "화", "수", "목", "금", "토"];
  return daysInKorean[day];
}
