import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import { useState, useEffect } from 'react';

function App() {
  const [isFlagEnabled, setIsFlagEnabled] = useState(false);
  const [email, setEmail] = useState('');

  async function fetchFlagValue() {
    try {
        const response = await fetch('http://localhost:3000/api/flag');
        response.json().then((data) => {
          setIsFlagEnabled(data);
        });
      } catch(err) {
        console.log(err);
      }
  }
  
  useEffect(() => {
    // fetch feature flag value when component is mounted
    fetchFlagValue();
    
    // ConfigCat polls the feature flag value every 60 seconds by default.
    // If you need the flag value up-to-date, fetch the value from the backend every 60 seconds
    let interval = setInterval(fetchFlagValue, 1000 * 60);

    return () => {
      clearInterval(interval);
    };

  }, [isFlagEnabled]);

  function submitForm(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('email', email);

    try {
      fetch('http://localhost:3000/api/send', {
        method: 'POST',
        body: formData
      });
    } catch(err) {
      console.errpr(err);
    }
  }
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      
      <section className="container py-4">
        <div className="p-2 flex flex-col bg-violet-100 outline outline-1 outline-violet-500 rounded w-[50%] text-justify">
          <h3 className="text-xl mb-4 font-bold text-center">{isFlagEnabled ? "Get Access to Exclusive Content for Educators" : "Subscribe to Our Newsletter"}</h3>
          <p className="mb-4 text-center">We bring you the latest research on effective learning methods every week. You also get access to download FREE ebooks on blended learning.</p>
          <form onSubmit={submitForm} className="w-[50%]">
            <div className="mb-3 flex">
              <label className="mr-4 font-semibold self-center" name="email">Email</label>
              <input type="email" placeholder="name@example.com" onChange={ (event) => setEmail(event.target.value) } className="mr-2 p-1 rounded outline outline-1" size="30"/>
            <input type="submit" value="Subscribe" className="p-1.5 rounded bg-violet-500 text-white"/>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
