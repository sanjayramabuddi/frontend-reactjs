import "./App.css";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";

function App() {
  const response = [
    {
      itemName: "Soo Guys",
      itemDay: "01",
      itemMonth: "April",
      itemYear: "2000",
    },
    {
      itemName: "Mee Guys",
      itemDay: "04",
      itemMonth: "July",
      itemYear: "1999",
    },
    {
      itemName: "YOOOOOOO Guys",
      itemDay: "00",
      itemMonth: "December",
      itemYear: "1025",
    },
  ];

  return (
    <div>
      <Item name={response[0].itemName}></Item>
      <ItemDate day={response[0].itemDay} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

      <Item name={response[1].itemName}></Item>
      <ItemDate day={response[1].itemDay} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

      <Item name={response[2].itemName}></Item>
      <ItemDate day={response[2].itemDay} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>

      <div className="App">Hello Guys !!!</div>
    </div>
  );
}

export default App;
