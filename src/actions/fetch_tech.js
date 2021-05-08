export function fetchTech() {
  //return the actual action to do
  return function (dispatch) {
    fetch(
      "https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=b58bf17ea7d34e73b32a2e3e4f79b8b1"
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // console.log(res)
        dispatch({ type: "FETCH_TECH", payload: res.articles });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
