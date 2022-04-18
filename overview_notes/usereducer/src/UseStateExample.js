import { useState } from "react";

  /// useState de 3 tane state imiz var. ve her biri degistiginde sayfa 3 kez render edilir

const UseStateExample = () => {
  const [dog, setDog] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchDog = () => {
    setLoading(true);
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDog(data.message);
        setLoading(false);
      })
      .catch(() => {
        setError("HATA!! VERİLER ÇEKİLEMEDİ");
        setLoading(false);
      });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <button
        onClick={fetchDog}
        disabled={loading}
        style={{ width: "200px", margin: "1rem" }}
      >
        Fetch Dog
      </button>
      {dog && <img src={dog} alt="" />}
      {error && <h2>{error}</h2>}
    </div>
  );
};

export default UseStateExample;
