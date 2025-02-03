import { useState } from "react";

import "./App.css";

function App() {
  const [medals, setMedals] = useState([
    {
      id: 1,
      country: "korea",
      goldMedal: 0,
      silverMedal: 0,
      copperMedal: 0,
    },
  ]);
  const [inputData, setInputData] = useState({
    country: "",
    goldMedal: 0,
    silverMedal: 0,
    copperMedal: 0,
  });
  const resetForm = () => {
    setInputData({
      country: "",
      goldMedal: 0,
      silverMedal: 0,
      copperMedal: 0,
    });
  };
  const addMedal = (e) => {
    e.preventDefault();
    const newMedal = {
      id: Date.now(),
      country: inputData.country,
      goldMedal: inputData.goldMedal,
      silverMedal: inputData.silverMedal,
      copperMedal: inputData.copperMedal,
    };
    setMedals([...medals, newMedal]);
    // resetForm();
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({
      ...prev,
      [name]: name === "country" ? value : +value,
    }));
  };

  return (
    <div>
      <h1>올림픽 메달 집계</h1>
      <div className="form-container">
        <form onSubmit={addMedal}>
          <label>국가명</label>
          <input
            type="text"
            name="country"
            value={inputData.country}
            onChange={handleInput}
          />
          <label>금메달</label>
          <input
            type="number"
            name="goldMedal"
            value={inputData.goldMedal}
            onChange={handleInput}
          />
          <label>은메달</label>
          <input
            type="number"
            name="silverMedal"
            value={inputData.silverMedal}
            onChange={handleInput}
          />
          <label>동메달</label>
          <input
            type="number"
            name="copperMedal"
            value={inputData.copperMedal}
            onChange={handleInput}
          />
          <button type="submit">추가</button>
          <button type="button">수정</button>
        </form>
      </div>
      <div className="list-container">
        <table>
          <thead>
            <tr>
              <th>국가명</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
            </tr>
          </thead>
          <tbody>
            {medals.map((item) => (
              <tr key={item.id}>
                <td>{item.country}</td>
                <td>{item.goldMedal}</td>
                <td>{item.silverMedal}</td>
                <td>{item.copperMedal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
