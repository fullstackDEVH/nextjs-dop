import { cookies } from 'next/headers';

const useCheckAuth = async (): Promise<any | null> => {
  const cookieStore = cookies();
  const userTokenCookie = cookieStore.get('auth');
  const hasUserToken = userTokenCookie && userTokenCookie.value;
  if (!hasUserToken) {
    return null;
  }
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user`, {
    headers: {
      authorization: `Bearer ${userTokenCookie.value}`,
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    return null;
  }

  const currentUserResponse: any = await response.json();

  return currentUserResponse.user;
};
export default useCheckAuth;
