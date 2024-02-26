import { useState } from "react";
import axios from "axios";

const StudentsForm = () => {
  const [studDetails, setStudDetails] = useState({
    name: "",
    email: "",
    admNo: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url =
      "http://localhost:8000/Documents/projects/phpProjects/FeesManager/api/server.php";

    let fData = new FormData();
    fData.append("name", studDetails.name);
    fData.append("email", studDetails.email);
    fData.append("admNo", studDetails.admNo);
    fData.append("phone", studDetails.phone);

    axios
      .post(url, fData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setStudDetails({
      name: "",
      email: "",
      admNo: "",
      phone: "",
    });
  };

  return (
    <>
      <main className="container">
        <header className="header">
          <div className="topLine"></div>
          <h2>StudentDetails</h2>
          <div className="bottomLine"></div>
        </header>

        <form action="#" onSubmit={handleSubmit}>
          <table className="studTable" cellSpacing="10">
            <tbody>
              <tr>
                <td>
                  <label htmlFor="name">Name</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={studDetails.name}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor="email">Email</label>
                </td>
                <td>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={studDetails.email}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor="admNo">Adm.No</label>
                </td>

                <td>
                  <input
                    type="text"
                    name="admNo"
                    id="admNo"
                    value={studDetails.admNo}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor="phone">Phone</label>
                </td>
                <td>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={studDetails.phone}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>

              <tr>
                <td align="right" colSpan="2">
                  <button type="Submit">Submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </main>
    </>
  );
};

export default StudentsForm;
