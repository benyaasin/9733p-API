export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  phone?: string;
  website?: string;
}

export interface PostParams {
  userId: number;
  id: number;
  title: string;
  body: string;
} 