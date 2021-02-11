import api from "./config";

export async function login(credentials) {
  // console.log(JSON.stringify(credentials));
  return api
    .post("/api/v1/users/login", JSON.stringify(credentials))
    .then((data) => console.log(data.json()));

  // return fetch("http://174.138.103.162:4000/api/v1/users/login", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     accept: "*/*",
  //   },
  //   body: JSON.stringify(credentials),
  // }).then((data) => data.json());

  // var postData = {
  //   email: "test@test.com",
  //   password: "password",
  // };

  // let axiosConfig = {
  //   headers: {
  //     "Content-Type": "application/json;charset=UTF-8",
  //     "Access-Control-Allow-Origin": "*",
  //     accept: "*/*",
  //   },
  // };

  // axios
  //   .post(
  //     "http://174.138.103.162:4000/api/v1/users/login",
  //     JSON.stringify(postData),
  //     axiosConfig
  //   )
  //   .then((res) => {
  //     console.log("RESPONSE RECEIVED: ", res);
  //   })
  //   .catch((err) => {
  //     console.log("AXIOS ERROR: ", err);
  //   });
}
