import "../styles/globals.css";

export const metadata = {
  title: "herta kuru~ ",
  description: "The website for Herta",
  favicon: "/favicon.ico"
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    
    <body>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          
          {children}
        </main>
    </body>
  </html>
);

export default RootLayout;
