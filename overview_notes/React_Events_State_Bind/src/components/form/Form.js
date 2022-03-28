import { useState } from "react";
import "./styles.css";

const Form = () => {
      // tüm usestateleri ayri ayri kullanma
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [country, setCountry] = useState("");

      // single useState;
  
  const [formData, setFormData] = useState({
    name : "",
    email : "",
    password : "",
    country : ""
  });
  

  // const handleName = (e) => {
  //   setName(e.target.value);
  // };

  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handlePassword = (e) => {
  //   setPassword(e.target.value);
  // };

  // const handleCountry = (e) => {
  //   setCountry(e.target.value);
  // };

  
    /// bu kodun anlami: önce form data icinde olan tüm verileri al ser
    // formdata icinde bulunan veriler bir object elemani oldugu icin
    // biz {} kullandik. yine object icine serdik. sonra her degisiklikte 
    // yine bir key value cifti olusturuyoruz ve bunu ekliyoruz
    // e.name : e.value seklinde oldugundan mesela name email oldugunda
    // email e ait eski degeri siler ve üzerine yazar


    const handleFormData = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value } );
    }

          //  handleSubmit:
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
      name : ${formData.name},
      email : ${formData.email},
      pass : ${formData.password},
      country : ${formData.country}
    `);

    // setName("");
    // setEmail("");
    // setPassword("");
    // setCountry("");

      // tek seferde hepsinin degerini sifirlama:
          // 1. method:
      // setFormData({});
          // 2. method: 
          // burada set func kullandiigmiz icin formData.name 
          // yazmamiza gerek yoktur.
          // bu yaptigimiz islem ile sadece span ler icindeki veriler
          // sifirlanir. inputlarin icleri sifirlanmaz. bunu yapmak icin
          // her bir inputa value attribute verip bunlari state e esitliyoruz
          // setFormData state icini sifirladigi icin
      setFormData({
        name : "",
        email : "",
        password : "",
        country : ""
      })
  };

  return (
    <div style={{ height: "110vh" }}>
      <form onSubmit={handleSubmit}>
            {/* Cok önemli: onSubmit eventini form a veriyoruz */}
        <div>
          <p></p>
          <label>
            <strong>Username: {formData.name}  </strong>
          </label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="name"
              // her bir input icin ayri bir func tanimlamistik
              // ama simdi bunlari tek bir func dan handle edecegiz
            // onChange={handleName}
            onChange={handleFormData}
            // defaultValue="Jane"
            value = {formData.name}
          />
        </div>

        <div>
          <p></p>
          <label>
            <strong>E-mail: {formData.email} </strong>
          </label>
          <br />
          <input
            type="email"
            placeholder="email"
            name="email"
            // onChange={handleEmail}
            onChange={handleFormData}
            value = {formData.email}
          />
        </div>

        <div>
          <p></p>
          <label>
            <strong>Password: {formData.password} </strong>
          </label>
          <br />
          <input
            type="password"
            placeholder="pass"
            name="password"
            // onChange={handlePassword}
            onChange={handleFormData}
            value = {formData.password}
          />
        </div>

        <div style={{ margin: "10px auto" }}>
          <p></p>
          <label>
            <strong>Country: {formData.country} </strong>
          </label>{" "}
          <br />
          <select
            style={{ marginTop: "10px", width: "100px", padding: "10px" }}
            name="country"
            // onChange={handleCountry}
            onChange={handleFormData}
            value = {formData.country}
          >
            <option value="">Country</option>
            <option value="Turkey">Turkey</option>
            <option value="Germany">Germany</option>
            <option value="Netherland">Netherland</option>
            <option value="France">France</option>
          </select>
        </div>

        <button className="btn__click" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
