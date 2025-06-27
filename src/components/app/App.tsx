import CafeInfo from "../cafeInfo/CafeInfo";
import css from "./app.module.css";

function App() {
  return (
    <>
      <div className={css.app}>
        <CafeInfo />
      </div>
    </>
  );
}

export default App;
