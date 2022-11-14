import './Navbar.css';
import logo from '../assets/logo.svg';

export default function Navbar() {
    return (
        <div>
           <header className="px-4 py-[0.875rem] text-center bg-violet-500">
             <div className="flex justify-between">
                <a href="index.html">
                  <img src={logo} className="App-logo" alt="logo" width="50" height="50"/>
                </a>
                <nav className="flex items-center justify-between text-white font-bold">
                  <ul className="flex m-0">
                    <li className="nav__item"><a href="/index.html">Home</a></li>
                    <li className="nav__item"><a href="/features">Features</a></li>
                    <li className="nav__item"><a href="/contact">Contact</a></li>
                    <li className="nav__item"><a href="/signin">Sign In</a></li>
                    <li className="nav__item px-2 rounded-full bg-white text-violet-700"><a href="/signup">Sign Up</a></li>
                  </ul>
                </nav>
             </div>
           </header>
        </div>
    );
} 