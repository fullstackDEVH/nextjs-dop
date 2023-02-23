import './globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ReduxProvider from './ReduxProvider';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <ReduxProvider>
          <header></header>
          <main>{children}</main>
          <footer></footer>
        </ReduxProvider>
      </body>
    </html>
  );
}
