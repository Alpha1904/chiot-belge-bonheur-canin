
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center bg-dogLight py-12">
        <div className="text-center">
          <div className="text-9xl font-bold text-dogPrimary mb-4">404</div>
          <h1 className="text-3xl font-bold mb-4">Page introuvable</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Désolé, la page que vous recherchez n'existe pas.
          </p>
          <Button asChild className="bg-dogPrimary hover:bg-dogDark">
            <Link to="/">
              Retour à l'accueil
            </Link>
          </Button>
          <div className="mt-12 text-6xl animate-bounce-slight">
            🐾
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
