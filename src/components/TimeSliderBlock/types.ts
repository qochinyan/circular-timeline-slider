export interface TimePeriodData {
  from: number;
  to: number;
  name:string;
  events: {
    year: number;
    description: string;
  }[];
}
