import 'reactflow/dist/style.css';
import HeaderProfile from '../(user)/HeaderUserProfile';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
