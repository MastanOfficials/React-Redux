import "./App.css";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, deleteUser, getdataApi, updateUser } from "./redux/action";

function App() {
  const myRef = useRef();
  // const bodyRef = useRef();
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.data.data);
  const submitHandler = (e) => {
    e.preventDefault();
    const id = Date.now();
    const title = myRef.current.value;
    const body = myRef.current.value;
    const data = { id, title, body };

    if (user) {
      dispatch(updateUser(user.id, data));
      setUser(null);
    } else {
      dispatch(createUser(data));
    }
    // dispatch(createUser(data));
    e.target.reset();
    console.log("data successfully sending");
    // console.log(data);
  };
  // console.log(user);
  const updateHandler = (itemid) => {
    // dispatch(updateUser(itemid, userData));
    // console.log("One user upDateData");
    setUser(itemid);
    myRef.current.value = itemid.title;
    myRef.current.value = itemid.body;
  };
  const deleteHandler = (itemid) => {
    dispatch(deleteUser(itemid));
    console.log("userDelete");
  };

  useEffect(() => {
    dispatch(getdataApi());
  }, [dispatch]);
  // console.log(items);
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="your name" ref={myRef} />
        <br />
        <input type="text" ref={myRef} placeholder="body" />
        <br />
        <button
          type="submit"
          style={{ color: "white", backgroundColor: "blue", margin: "5px" }}
        >
          submit
        </button>
        <br />
      </form>

      <table>
        {items.map((item) => {
          console.log(item);
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
              <td>
                <button
                  onClick={() => updateHandler(item.id)}
                  style={{
                    color: "orange",
                    backgroundColor: "yellow",
                    margin: "5px",
                  }}
                >
                  update
                </button>
              </td>
              <td>
                <button
                  onClick={() => deleteHandler(item)}
                  style={{
                    color: "white",
                    backgroundColor: "red",
                    margin: "5px",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
