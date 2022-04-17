import "./Blogs.css"
const element =(<>
    <h1>New Contact</h1>
    <div className="formdiv">
  <form name="myForm" action="/AddContact.php" onsubmit="return ()" method="post">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="First name.."></input>
    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Last name.."></input>
    <label for="pnum">Phone Number</label>
    <input type="number" id="pnum" name="phonenumber" placeholder="Phone number.."></input>
  </form>
    <button className="in_but">Add Contact</button>
    </div>
</>)
const Blogs = () => {
    return element;
  };
  
  export default Blogs;