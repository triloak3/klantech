// Footer component — site-wide footer with links and social icons
import { Link } from "react-router-dom";
import { Link as LinkIcon } from "lucide-react";
import Insta from "../assets/Instagram.png";
import Linkdn from "../assets/Linkdn.png";



export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-heading font-bold gradient-text mb-3">
              KLANTECH AUTOSPORT
            </h3>
            <p className="text-sm text-muted-foreground">
              Driven by Innovation. Engineering Speed, Building the Future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-3">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Team", "Projects", "Events"].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase()}`}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-3">Explore</h4>
            <div className="space-y-2">
              {["Achievements", "Gallery", "Join Us"].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase().replace(" ", "")}`}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Social / Contact */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-3">Connect</h4>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/klantech_autosport/" className="p-2 rounded-md bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors" title="Instagram">
                <img 
                src={Insta}  className="w-5 h-5"/>

              </a>
              <a href="https://www.linkedin.com/company/klantech-autosport/about/" className="p-2 rounded-md bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors" title="LinkedIn">
               <img src={Linkdn}  className="w-5 h-5"/>    
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              klantechautosport.info@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Klantech Autosport. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
