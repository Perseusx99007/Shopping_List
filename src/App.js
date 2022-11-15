import "./styles.css";

var shoppingList = [
  "milk",
  "eggs",
  "bread",
  "flower",
  "chicken",
  "mutton",
  "vegetables",
  "butter",
  "cheese",
  "ice cream"
];

export default function App() {
  function getBG(index) {
    if (index % 2 !== 0) {
      return "white";
    } else {
      return "grey";
    }
  }

  function getSize(index) {
    if (index % 2 !== 0) {
      return "1rem";
    } else {
      return "1.3rem";
    }
  }

  function listItemClickHandler(item) {
    console.log("clicked", item);
  }
  return (
    <div className="App">
      <h1>SHOPPING LIST</h1>
      <ul>
        {shoppingList.map((item, index) => {
          console.log(item);
          return (
            <li
              key={item}
              onClick={() => listItemClickHandler(item)}
              style={{
                backgroundColor: getBG(index),
                fontSize: getSize(index),
                padding: "1rem"
              }}
            >
              {item}
            </li>
          );
        })}
        {/* {
          shoppingList.map(function(item){
          console.log(item);
          return <li>{item}</li>;
        })} */}
      </ul>
    </div>
  );
}
