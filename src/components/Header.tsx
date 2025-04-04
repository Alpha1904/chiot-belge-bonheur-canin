
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Dog } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Dog className="h-8 w-8 text-dogPrimary" />
            <div>
              <h1 className="text-xl font-bold text-dogPrimary">Bonheur Canin</h1>
              <p className="text-xs text-dogSecondary">Élevage 100% Belge</p>
            </div>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-dogDark hover:text-dogPrimary transition-colors font-medium">
              Accueil
            </Link>
            <Link to="/puppies" className="text-dogDark hover:text-dogPrimary transition-colors font-medium">
              Nos Chiots
            </Link>
            <Link to="/breeds" className="text-dogDark hover:text-dogPrimary transition-colors font-medium">
              Nos Races
            </Link>
            <Link to="/care" className="text-dogDark hover:text-dogPrimary transition-colors font-medium">
              Conseils
            </Link>
            <Link to="/contact" className="text-dogDark hover:text-dogPrimary transition-colors font-medium">
              Contact
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-dogPrimary p-2 rounded-md"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 bg-dogLight rounded-lg py-4 px-2 animate-fade-in">
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/" 
                  className="block py-2 px-4 text-dogDark hover:bg-dogTertiary rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link 
                  to="/puppies" 
                  className="block py-2 px-4 text-dogDark hover:bg-dogTertiary rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Nos Chiots
                </Link>
              </li>
              <li>
                <Link 
                  to="/breeds" 
                  className="block py-2 px-4 text-dogDark hover:bg-dogTertiary rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Nos Races
                </Link>
              </li>
              <li>
                <Link 
                  to="/care" 
                  className="block py-2 px-4 text-dogDark hover:bg-dogTertiary rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Conseils
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="block py-2 px-4 text-dogDark hover:bg-dogTertiary rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
