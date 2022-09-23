import "./App.css";
import Collection from "./components";
function App() {
  function ping(ip) {
    var img = new Image();
    var start = new Date().getTime();
    img.src = "http://" + ip;
    var flag = false; //无法访问
    img.onload = function () {
      flag = true;
      console.log("true ok");
    };
    img.onerror = function (x) {
      console.log(x);
      flag = true;
      console.log("false ok");
    };
    var timer = setTimeout(function () {
      if (!flag) {
        //如果真的无法访问
        flag = false;
        console.log("failed");
      }
    }, 1500);
  }
  // setInterval(() => {
  //   ping("82.157.250.186");
  // }, 2000);
  return (
    <div className="App">
      <Collection />
    </div>
  );
}

export default App;
