import {useState} from "react"
import HomePage from "../pages/HomePage"
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";

function App() {
  const [page, setPage] = useState("home"); //this doesn't not re-run again

  function goToPage(newPage) {
    setPage(newPage); //cause a re-render and update page state contact
  }

  function showPage() {
    if (page === "home") return <HomePage />;
    if (page === "about") return <AboutPage />;
    if (page === "contact") return <ContactPage />;
  }

  return (
    <main>
      <nav>
      <a onClick={() => goToPage("home")}>Home</a> <br/>
        <a onClick={() => goToPage("about")}>About Us</a><br/>
        <a onClick={() => goToPage("contact")}>Contact Us</a> 
        
      </nav>
      {showPage()}
    </main>
  );
}

export default App;