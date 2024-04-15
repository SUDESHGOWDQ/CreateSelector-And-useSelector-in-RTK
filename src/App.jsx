import { useSelector, useDispatch } from "react-redux";
import {incrementX,incrementY,incrementZ,selectSum,selectProduct} from "./app/CounterSlice";

const App =() => {
  const state = useSelector((state) => state.Counter);
  const sum = selectSum(state);
  const product = selectProduct(state);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(incrementZ(-1))}>Z-1</button>
      <button onClick={() => dispatch(incrementY(-1))}>Y-1</button>
      <button onClick={() => dispatch(incrementX(-1))}>X-1</button>
      <span>({state.x},{state.y},{state.z})</span>
      <button onClick={() => dispatch(incrementX(1))}>X+1</button>
      <button onClick={() => dispatch(incrementY(1))}>Y+1</button>
      <button onClick={() => dispatch(incrementZ(1))}>Z+1</button>
      <br />
      <span>sum: {sum}</span>
      <br />
      <span>product: {product}</span>
      <br />
    </div>
  );
};

export default App