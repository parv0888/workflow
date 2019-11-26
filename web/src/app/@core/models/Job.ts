export interface Job{
  id: string;
  title: string;
  duration: number;
  status: number;
  owner: {
    id: string;
    name: string;
    pushToken: string;
    username: string;
  };
  startTime : Date;
}
