import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaPaperPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content mt-20 relative overflow-hidden">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
      
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-md text-center lg:text-left">
            <h3 className="text-3xl font-bold mb-2">Subscribe to Newsletter</h3>
            <p className="text-sm opacity-80">Get the latest book releases, reading tips, and special discounts delivered directly to your inbox.</p>
          </div>
          <div className="join w-full max-w-md shadow-xl">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="input input-bordered join-item w-full bg-base-100/10 text-white placeholder-white/50 border-white/20 focus:border-primary focus:outline-none" 
            />
            <button className="btn btn-primary join-item">
              Subscribe <FaPaperPlane className="ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer max-w-7xl mx-auto px-6 py-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <aside className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/30">
              B
            </div>
            <span className="text-3xl font-bold tracking-tight">BookLib<span className="text-primary">.</span></span>
          </div>
          <p className="opacity-80 leading-relaxed mb-6">
            Providing reliable books and an unparalleled digital reading experience since 1992. Explore the universe of knowledge with us.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-lg hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300"><FaTwitter /></Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-lg hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300"><FaFacebook /></Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-lg hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300"><FaInstagram /></Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-lg hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300"><FaGithub /></Link>
          </div>
        </aside>
        
        <nav>
          <h6 className="footer-title text-white opacity-100 text-lg mb-4">Services</h6>
          <div className="flex flex-col gap-4">
            <Link href="/books" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>Browse Books</Link>
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>Membership</Link>
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>Reading Tips</Link>
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>Gift Cards</Link>
          </div>
        </nav>
        
        <nav>
          <h6 className="footer-title text-white opacity-100 text-lg mb-4">Company</h6>
          <div className="flex flex-col gap-4">
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>About us</Link>
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>Contact</Link>
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>Careers</Link>
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>Press Kit</Link>
          </div>
        </nav>
        
        <nav>
          <h6 className="footer-title text-white opacity-100 text-lg mb-4">Legal</h6>
          <div className="flex flex-col gap-4">
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>Terms of use</Link>
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>Privacy policy</Link>
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>Cookie policy</Link>
          </div>
        </nav>
      </div>
      
      {/* Bottom Copyright */}
      <div className="bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
          <p>© {new Date().getFullYear()} BookLib Inc. All rights reserved.</p>
          <div className="flex gap-6 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Support</Link>
            <Link href="/" className="hover:text-white transition-colors">Help Center</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
