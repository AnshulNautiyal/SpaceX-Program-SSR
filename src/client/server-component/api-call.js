import axios from "axios";

export default function getFilterData(params, setstate) {
  debugger;
  axios
    .get(`/`, {
      params,
      headers: { "Content-Type": "application/json" },
      data: {},
    })
    .then((res) => {
      console.log("sccess", res);
      setstate(res.data);
    })
    .catch(() => {
      console.log("fails");
    });
}
