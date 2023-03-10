import { useSession } from 'next-auth/react';

const useAuth = () => {
  const { data: session, status }: any = useSession({ required: true });
};
export default useAuth;
