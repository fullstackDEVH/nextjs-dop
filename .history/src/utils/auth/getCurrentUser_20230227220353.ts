'use client';
import { cookies } from 'next/headers';

const getCurrentUser = async (): Promise<any | null> => {
  const cookieStore = cookies();
  const userTokenCookie = cookieStore.get('auth');
  const hasUserToken = userTokenCookie && userTokenCookie.value;
  if (!hasUserToken) {
    return null;
  }
  const user = {
    displayName: 'test',
    avatar: 'https://mui.com/static/images/avatar/1.jpg',
  };
  return user;
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user`, {
  //   headers: {
  //     authorization: `Bearer ${userTokenCookie.value}`,
  //   },
  //   cache: 'no-store',
  // });

  // if (!response.ok) {
  //   return null;
  // }

  // const currentUserResponse: any = await response.json();

  // return currentUserResponse.user;
};
export default getCurrentUser;
