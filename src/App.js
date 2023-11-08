import logo from './logo.svg';
import './App.css';
import girl from './re.webp';
import myGif from './mygif.gif';
import my from './gg.gif';
import StudentForm from './components/StudentsForm/StudentForm';

{/*function NavBar() {
   return <h1>This is a navbar component</h1>;
 }
 function Banner() {
   return <h1>This is banner component </h1>;
 }
 function Header() {
   return <h1>This is a header component</h1>;
 }
 function Footer() {
   return <h1> This is a footer component</h1>;
 }*/}
function GreetUser(props) {
  return (
  <div>
   {/* <h1>Welcome {props.name} </h1>
    <h1>Your email is {props.email} </h1>
    <h1>Your phone number is {props.phonenumber}</h1>
    <h1>Branch name is {props.branch}</h1>
  <h1>Semester is {props.semester}</h1>*/}
  </div>
  );
}

function App() {
  return (
    <div className="App">
      {/* <NavBar />
      <Banner />
      <Header />
      <Footer />
      <Banner /> */}
      <GreetUser name="Shravya"  email="shravya.21ad052@sode-edu.in" phonenumber="+5678766" branch="AIDS" semester="5th" />
      <StudentForm />
      {/*<header className="App-header">/*}
        {/*<img src={logo} className="App-logo" alt="logo" />
        <img src={girl} className="App-girl" alt="girl" />
        <img src={myGif} className="App-myGif" animated="myGif" />
        <img src={my} className="App-my" animated="my" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>hi how are you</h1>
        <p>one fine day</p>
        <marquee direction="right">hello world</marquee>
        <marquee direction="right">Iam a barbie girl</marquee>
        <nav>HTML</nav>|
        <nav>css</nav>|
      
  </header> */}
    </div>
  );
}

export default App;
