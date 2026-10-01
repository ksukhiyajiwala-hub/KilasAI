import { useEffect } from "react";
import Home from "./pages/Home";
import getCurrrentUser from "./features/getCurrentUser.js";
import { useDispatch } from "react-redux";
import { setUserData } from "./redux/userSlice.js";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getUser = async () => {
      const data = await getCurrrentUser();
      dispatch(setUserData(data));
    };
    getUser();
  }, [dispatch]);
  return (
    <>
      <Home />
    </>
  );
}

export default App;
