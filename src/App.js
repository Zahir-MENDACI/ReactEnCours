import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import {Provider} from 'react-redux'
import {store} from './config/store'
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import Routes from './config/router'
import './config/translations'
import {useTranslation} from 'react-i18next'
import { ThemeProvider } from "styled-components";

import ThemeContextProvider from './config/Context/ThemeContext';
import BtnToggle from './components/BtnToggle/BtnToggle';
import Navbar from './components/Navbar';




function App() {
  const {t, i18n} = useTranslation()

  const [theme, setTheme] = useState("light")
  
  return (
      <ThemeContextProvider>
        <Provider store={store}>
        <Navbar/>
          
          <Routes>

          </Routes>
        </Provider>
      </ThemeContextProvider>
    );
    
//   init("user_s8PpYDAqUM3HKVcCGPmLc");

//   function sendEmail(e) {
//     e.preventDefault();

//     emailjs.sendForm('default_service', 'template_0q0rkov', e.target)
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   }

//   return (
//     <form className="contact-form" onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="name" />
//       <label>Email</label>
//       <input type="email" name="email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
}

const LightTheme = {
  pageBackground: "white",
  titleColor: "#dc658b",
  tagLineColor: "black"
};

const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "lightpink",
  tagLineColor: "lavender"
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}

export default App;




// import React, { useState } from "react";
// import './App.css'
// import emailjs from 'emailjs-com';
// import{ init } from 'emailjs-com';
// init("user_s8PpYDAqUM3HKVcCGPmLc");

// const App = () => {
//   const [name, setName] = useState("");
//   const [company, setCompany] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     sendFeedback("template_0q0rkov", {
//       name,
//       company,
//       phone,
//       email,
//       message,
//     });
//   };

//   const sendFeedback = (templateId, variables) => {

//     emailjs.send('default_service', templateId, variables)
//       .then((res) => {
//         console.log('success !');
//         setName("");
//         setCompany("");
//         setPhone("");
//         setEmail("");
//         setMessage("");
//       })
//       .catch(
//         (err) =>
//           document.querySelector('.form-message').innerHTML =
//             "Une erreur s'est produite, veuillez réessayer.")
//   };

//   return (
//     <form className="contact-form">
//       <h2>Contactez-nous</h2>
//       <div className="form-content">
//         <input
//           type="text"
//           id="name"
//           name="name"
//           onChange={(e) => setName(e.target.value)}
//           placeholder="nom *"
//           value={name}
//           autoComplete="off"
//         />
//         <input
//           type="text"
//           id="company"
//           name="company"
//           onChange={(e) => setCompany(e.target.value)}
//           placeholder="société"
//           value={company}
//         />
//         <input
//           type="text"
//           id="phone"
//           name="phone"
//           onChange={(e) => setPhone(e.target.value)}
//           placeholder="téléphone"
//           value={phone}
//         />
//         <div className="email-content">
//           <label id="not-mail">Email non valide</label>
//           <input
//             type="mail"
//             id="email"
//             name="email"
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="email *"
//             value={email}
//             autoComplete="off"
//           />
//         </div>
//         <textarea
//           id="message"
//           name="message"
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="message *"
//           value={message}
//         />
//       </div>
//       <input
//         className="button"
//         type="button"
//         value="Envoyer"
//         onClick={handleSubmit}
//       />
//       <div className="form-message"></div>
//     </form>
//   );
// };

// export default App;




