export class User {
  id: number;
  userName: string;
  password: string;
  displayName: string;
  email: string;
}

export const mockUsers: User[] = [
  {
    id: 1,
    userName: 'ahad',
    password: '123',
    displayName: 'Ahad',
    email: 'ahad@ahad',
  },
  {
    id: 2,
    userName: 'ahad2',
    password: '123',
    displayName: 'Ahad2',
    email: 'ahad2@ahad2',
  },
];
