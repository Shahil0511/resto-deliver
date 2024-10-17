import RestaurantFooter from "./_components/RestaurantFooter";
import RestaurantHeader from "./_components/RestaurantHeader";
import "./globals.css";

export const metadata = {
  title: "Restro Deliver",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <RestaurantHeader />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <RestaurantFooter />
      </body>
    </html>
  );
}
