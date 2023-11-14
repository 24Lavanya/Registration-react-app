import React from "react";
import { useState } from "react";

const StudentRegisteration = () => {
  const [name, setName] = useState("");
  const [usn, setUsn] = useState("");
  const [sem, setSem] = useState("");
  const [branch, setBranch] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: name,
      usn: usn,
      sem: sem,
      branch: branch,
      email: email,
      phone: phone,
    };
    console.log(data);
  };
  return (
    <>
      <h1>Student Registration</h1>
      <div className="container">
          <center><div className="reg">
        <center><form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
              onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="USN"
            value={usn}
              onChange={(e) => setUsn(e.target.value)}
              pattern="^\d[a-zA-Z]{2}\d{2}[a-zA-Z]{2}\d{3}$"
              title="Format:4XX21XX050"
          />

          <input
            type="text"
            placeholder="Semester"
            value={sem}
            onChange={(e) => setSem(e.target.value)}
          />

          <input
            type="text"
            placeholder="Branch"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="number"
            placeholder="Phone no."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
                  />
                  <input type="submit" value="Submit" id="btn"/>
        </form></center>
      </div></center>

      </div>
      </>
 
  );
};

export default StudentRegisteration;
