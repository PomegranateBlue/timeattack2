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
    setMedals([...medals], newMedal);
    // resetForm();
  };
  console.log(inputData);
  return (
    <div>
      <h1>올림픽 메달 집계</h1>
      <div className="form-container">
        <form onSubmit={addMedal}>
          <label>국가명</label>
          <input
            type="text"
            value={inputData.country}
            onChange={(e) => setInputData(e.target.value)}
          />
          <label>금메달</label>
          <input
            type="number"
            value={inputData.goldMedal}
            onChange={(e) => setInputData(e.target.value)}
          />
          <label>은메달</label>
          <input
            type="number"
            value={inputData.silverMedal}
            onChange={(e) => setInputData(e.target.value)}
          />
          <label>동메달</label>
          <input
            type="number"
            value={inputData.copperMedal}
            onChange={(e) => setInputData(e.target.value)}
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
