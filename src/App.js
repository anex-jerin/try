import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import About from "./components/about/About";
import Apply from "./components/apply/Apply";
import Employee from "./components/employee/Employee";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <About/>
      <Apply/>
      <Employee/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
