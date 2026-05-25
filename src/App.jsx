import React, { useState, useEffect } from "react";

const STUDENTS_KEY = "students";
const SESSION_KEY = "student_session";

/* ---------------- LOCAL STORAGE ---------------- */

function getStudents() {
  return JSON.parse(localStorage.getItem(STUDENTS_KEY)) || [];
}

function saveStudents(students) {
  localStorage.setItem(STUDENTS_KEY, JSON.stringify(students));
}

function saveSession(student) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(student));
}

function getSession() {
  return JSON.parse(localStorage.getItem(SESSION_KEY));
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

/* ================= SIGNUP ================= */

function Signup({ setPage }) {
  const [form, setForm] = useState({
    name: "",
    roll: "",
    course: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const students = getStudents();

    const studentExists = students.find(
      (student) => student.email === form.email
    );

    if (studentExists) {
      alert("Student already exists");
      return;
    }

    const newStudent = {
      id: Date.now(),
      ...form,
    };

    saveStudents([...students, newStudent]);

    alert("Signup Successful");

    setForm({
      name: "",
      roll: "",
      course: "",
      email: "",
      password: "",
    });

    setPage("login");
  }

  return (
    <div className="main-container">
      <div className="card">

        <h2>Student Signup</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="roll"
            placeholder="Enter Roll Number"
            value={form.roll}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="course"
            placeholder="Enter Course"
            value={form.course}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Signup
          </button>

        </form>

        <p>
          Already have an account?
          <span onClick={() => setPage("login")}>
            Login
          </span>
        </p>

      </div>
    </div>
  );
}

/* ================= LOGIN ================= */

function Login({ setPage, setStudent }) {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {

    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(event) {

    event.preventDefault();

    const students = getStudents();

    const foundStudent = students.find(
      (student) =>
        student.email === form.email &&
        student.password === form.password
    );

    if (!foundStudent) {
      alert("Invalid Email or Password");
      return;
    }

    saveSession(foundStudent);

    setStudent(foundStudent);

    alert("Login Successful");

    setPage("dashboard");
  }

  return (
    <div className="main-container">

      <div className="card">

        <h1>Student Login</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p>
          Don't have an account?
          <span onClick={() => setPage("signup")}>
            Signup
          </span>
        </p>

      </div>

    </div>
  );
}

/* ================= DASHBOARD ================= */

function Dashboard({ student, logout }) {

  return (
    <div className="main-container">

      <div className="card dashboard-card">

        <h1>Dashboard</h1>

        <div className="profile">

          <div className="avatar">
            {student.name.charAt(0).toUpperCase()}
          </div>

          <h2>{student.name}</h2>

          <p>{student.email}</p>

        </div>

        <div className="details">

          <div className="detail-box">
            <h3>Roll Number</h3>
            <p>{student.roll}</p>
          </div>

          <div className="detail-box">
            <h3>Course</h3>
            <p>{student.course}</p>
          </div>

        </div>

        <button onClick={logout}>
          Logout
        </button>

      </div>

    </div>
  );
}

/* ================= APP ================= */

export default function App() {

  const [page, setPage] = useState("signup");

  const [student, setStudent] = useState(null);

  useEffect(() => {

    const session = getSession();

    if (session) {
      setStudent(session);
      setPage("dashboard");
    }

  }, []);

  function logout() {

    clearSession();

    setStudent(null);

    setPage("login");
  }

  /* ================= CSS ================= */

  useEffect(() => {

    const style = document.createElement("style");

    style.innerHTML = `

      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
      }

      body{
        font-family:Arial;
        background:linear-gradient(
          135deg,
          #667eea,
          #764ba2
        );
      }

      .main-container{
        min-height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        padding:20px;
      }

      .card{
        width:380px;
        background:white;
        padding:35px;
        border-radius:20px;
        box-shadow:0 10px 30px rgba(0,0,0,0.2);
        animation:fadeIn 0.5s ease;
      }

      h1{
        text-align:center;
        margin-bottom:25px;
        color:#333;
      }

      form{
        display:flex;
        flex-direction:column;
      }

      input{
        padding:14px;
        margin-top:14px;
        border:1px solid #ddd;
        border-radius:10px;
        font-size:15px;
        transition:0.3s;
      }

      input:focus{
        border-color:#667eea;
        outline:none;
        box-shadow:0 0 8px rgba(102,126,234,0.4);
      }

      button{
        margin-top:20px;
        padding:14px;
        border:none;
        border-radius:10px;
        background:linear-gradient(
          135deg,
          #667eea,
          #764ba2
        );
        color:white;
        font-size:16px;
        cursor:pointer;
        transition:0.3s;
      }

      button:hover{
        transform:translateY(-2px);
        opacity:0.9;
      }

      p{
        text-align:center;
        margin-top:18px;
        color:#555;
      }

      span{
        color:#667eea;
        cursor:pointer;
        font-weight:bold;
        margin-left:5px;
      }

      .dashboard-card{
        text-align:center;
      }

      .profile{
        margin-bottom:25px;
      }

      .avatar{
        width:90px;
        height:90px;
        border-radius:50%;
        background:linear-gradient(
          135deg,
          #667eea,
          #764ba2
        );
        color:white;
        font-size:35px;
        display:flex;
        justify-content:center;
        align-items:center;
        margin:auto;
        margin-bottom:15px;
      }

      .details{
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:15px;
        margin-top:20px;
        margin-bottom:20px;
      }

      .detail-box{
        background:#f5f5f5;
        padding:15px;
        border-radius:12px;
      }

      .detail-box h3{
        color:#666;
        margin-bottom:8px;
        font-size:14px;
      }

      .detail-box p{
        color:#222;
        font-weight:bold;
      }

      @keyframes fadeIn{
        from{
          opacity:0;
          transform:translateY(20px);
        }
        to{
          opacity:1;
          transform:translateY(0);
        }
      }

    `;

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };

  }, []);

  if (page === "signup") {
    return <Signup setPage={setPage} />;
  }

  if (page === "login") {
    return (
      <Login
        setPage={setPage}
        setStudent={setStudent}
      />
    );
  }

  return (
    <Dashboard
      student={student}
      logout={logout}
    />
  );
}