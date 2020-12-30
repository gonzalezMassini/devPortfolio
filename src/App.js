import ContactForm from './components/ContactForm';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  const [isSubmit, setIsSubmit] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_hw40h0i',
        'template_a8j5oc5',
        e.target,
        'user_tCG7P6Pcyov5HwHEE9KTc'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setIsSubmit(true);
    setTimeout(() => {
      setIsSubmit(false);
    }, 5000);
  };
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <Projects />

      <ContactForm isSubmit={isSubmit} sendEmail={sendEmail} />
      <Footer />
    </div>
  );
}

export default App;
