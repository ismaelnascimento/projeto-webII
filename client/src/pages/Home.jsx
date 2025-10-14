import { useEffect, useState } from "react";
import api from "../services/api"

function Home() {
  const [listOfPosts, setOfPosts] = useState([]);

  useEffect(() => {
    // api.get("/posts").then((response) => {
    //   setOfPosts(response.data);
    // })
  }, []);

  return (
    <div className="App">
      Hi guys
      {listOfPosts.map((value, key) => {
        return (
          <div className="post">
            <div className="title"> {value.title} </div>
            <div className="body">{value.posttext}</div>
            <div className="footer">{value.username}</div>
          </div>
        );
      })}
    </div>
  )
}

export default Home;