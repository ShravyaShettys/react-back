import React, { useState } from 'react';
import axios from 'axios';
import "./StudentForm.css";
function StudentForm() {
  const [name, setName] = useState("Shravya");
  const [email, setEmail] = useState("shravya.21ad052@sode-edu.in");
  const [phone, setPhone] = useState("8758758758");
  const [branch, setBranch] = useState("AIDS");
  const [sem, setSemester] = useState("5");
  const [id, setID] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      id: id,
      name: name,
      email: email,
      phone: phone,
      branch: branch,
      sem: sem,
    }
    try {
      const response = await axios.post("http://localhost:5000/student", data);
      alert("Student Created");
    } catch (error) {
      console.log(error);
    }

  };
  return (
    <div>
      <h1>Student Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Enter your ID" value={id} onChange={(e) => setID(e.target.value)} /><br></br>
        <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} /><br></br>
        <input type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} /><br></br>
        <input type="number" placeholder="Enter your phone no" value={phone} onChange={(e) => setPhone(e.target.value)} /><br></br>
        <input type="text" placeholder="Enter your branch" value={branch} onChange={(e) => setBranch(e.target.value)} /><br></br>
        <input type="number" placeholder="Enter your number" value={sem} onChange={(e) => setSemester(e.target.value)} /><br></br>
        <button>submit</button>
        <p>{id}</p>
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{branch}</p>
        <p>{sem}</p>

      </form>
    </div>
  );
}

export default StudentForm