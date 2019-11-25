export interface Person {
  email: string;
  id: string;
  pushToken: string;
  jobs: Array<{
    id: string;
    title: string;
    duration: number;
    status: number;
  }>;
  username: string;
}
