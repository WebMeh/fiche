import { useState } from "react";
import Axios from "axios"
import Navbar from "./components/Navbar";
import { useNavigate, Route, Routes } from "react-router";
import Home from "./components/Home";
import SingUp from "./components/Auth/SingUp";
import Fiche from "./components/Fiche/Fiche";
import { Button } from "react-bootstrap";
import DynamicInputForm from "./components/DynamicInputForm";
import PdfGenerate from "./components/PdfGenerate";
import Formatted from "./components/Formatted";

function App() {
  const navigate = useNavigate();
  const [username, setUserName] = useState('')
  const [userMail, setUserMail] = useState('')
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const [alert, setAlert] = useState('')

  const submitUser = event => {
    event.preventDefault();
    Axios.post('http://localhost:5501/users/insert', {
      nom: username,
      email: userMail
    })
    navigate('/users')
  }

  const deleteUser = (userId) => {
    Axios.delete('http://localhost:5501/users/' + userId + '/delete')
      .then(res => console.log("deleted"))
  }

  const submitPost = () => {
    Axios.post('http://localhost:5501/posts/insert', { title: postTitle, body: postBody })
      .then((res) => setAlert(res))
      .then(() => {
        setTimeout(() => {
          setAlert('')
        }, 2000);
      })
  }

  const [showNavbar, setShowNavbar] = useState(true)
  const hideNavbar= () => setShowNavbar(false)
  return (
    <div className="App">
      {showNavbar && <Navbar />}
      {alert &&
        <div className="alert alert-success"> {alert.data} </div>
      }
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/auth" element={<SingUp />} ></Route>
        <Route path="/fiche" element={<Fiche change={hideNavbar}/>} />
        <Route path="/pdf" element={<PdfGenerate change={hideNavbar} />} />
        <Route path="/format" element={<Formatted />} />
      </Routes>
    </div>

  );
}

export default App;
