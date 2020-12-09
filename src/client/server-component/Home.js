import axios from "axios";
import React, {useState} from "react";
import { withRouter } from "react-router";
import "lazysizes";
import "./Home.scss";
import queryString from "query-string";

function Home(props) {
  const { data = [] } = props;
  const [state, setstate] = useState(data);

  const applyFilter = (item, filterName) => () => {
    let searchParams = new URLSearchParams(location.search);
    let pathname = location.pathname;

    if (filterName === "Launch Year") {
      searchParams.set("launch_year", item);
      //   props.history.push(`?launch_year=${item}`);
      props.history.push({
        pathname: pathname,
        search: searchParams.toString(),
      });

      axios
        .get(`/`, {
          params: {
            launch_year: item,
            launch_success: searchParams.get('launch_success'),
            land_success: searchParams.get('land_success'),
          },
          headers: {'Content-Type': 'application/json'},
          data: { }
        })
        .then((res) => {
          console.log("sccess",res);
          setstate(res.data);
        })
        .catch(() => {
          console.log("fails");
        });
    } else if (filterName === "Successful Launch") {
      //   props.history.push(`?launch_success=${item}`);
      searchParams.set("launch_success", item === "True" ? true : false);
      props.history.push({
        pathname: pathname,
        search: searchParams.toString(),
      });
      axios
        .get(`/`, {
          params: {
            launch_year: searchParams.get('launch_year'),
            launch_success: item,
            land_success: searchParams.get('land_success'),
          },
          headers: {'Content-Type': 'application/json'},
          data: { }
        })
        .then((res) => {
          console.log("sccess",res);
          setstate(res.data);
        })
        .catch(() => {
          console.log("fail");
        });
    } else {
      props.history.push(`&land_success=${item}`);
      searchParams.set("land_success", item === "True" ? true : false);
      props.history.push({
        pathname: pathname,
        search: searchParams.toString(),
      });
      axios
        .get(`/`, {
          params: {
            launch_year: searchParams.get('launch_year'),
            launch_success: searchParams.get('launch_success'),
            land_success: item,
          },
          headers: {'Content-Type': 'application/json'},
          data: { }
          
        })
        .then((res) => {
          console.log("sccess");
          setstate(res.data);
        })
        .catch(() => {
          console.log("fail");
        });
    }
  };
  const getFilterType = (filterName = "", ...rest) => {
    let [initialValue = "", count = 0] = rest;
    let arrayItem = [];
    if (typeof initialValue !== "object") {
      for (let i = count; i >= 0; i--) {
        arrayItem.push(initialValue);
        initialValue++;
      }
    } else {
      arrayItem = [...initialValue];
    }
    let qs = queryString.parse(props.location.search);
    let year = qs.launch_year || "";
    let launch = qs.launch_success || "";
    let landing = qs.land_success || "";
    return (
      <div className="filter">
        <div className="filter__header">{filterName}</div>
        <div className="filter__value">
          {arrayItem.map((item) => {
            let addClass = "";
            if (filterName === "Launch Year") {
              addClass = year === item.toString() ? "filterSelected" : "";
            } else if (filterName === "Successful Launch") {
              addClass = launch === item.toString().toLowerCase() ? "filterSelected" : "";
            } else {
              addClass = landing === item.toString().toLowerCase() ? "filterSelected" : "";
            }
            return (
              <div
                key={item}
                className={addClass}
                onClick={applyFilter(item, filterName)}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  const getLaunchRecord = () =>
  state.length && state.map((item, index) => {
      const {
        launch_year = "",
        mission_name = "",
        launch_success = "",
        flight_number = "",
        mission_id = [],
        links: { mission_patch = "", mission_patch_small = "" } = {},
        rocket: { first_stage: { cores = [] } = {} } = {},
      } = item;

      return (
        <div className="launchCard">
          <div className="launchImage">
            <picture>
              <source
                media="(min-width:300px && max-width:900px)"
                srcSet={mission_patch_small}
              />
              <source
                media="(min-width:900px && max-width:1200px)"
                srcSet={mission_patch}
              />
              <img
                data-src={mission_patch_small}
                alt="Space X"
                className="lazyload"
              />
            </picture>
          </div>
          <div className="launchName">
            {mission_name} # {flight_number}
          </div>
          <div className="missionID">
            <span>Mission Ids:</span>{" "}
            {mission_id.length
              ? mission_id.map((item) => <span key={item}>{item}, </span>)
              : "Not Available"}
          </div>
          <div className="year">
            <span>Launch Year:</span> {launch_year}
          </div>
          <div className="success">
            <span>Successful Launch:</span> {launch_success ? "true" : "false"}
          </div>
          <div className="fail">
            <span>Successful Landing:</span>{" "}
            {cores.length
              ? cores[0].land_success
                ? "true"
                : cores[0].land_success === false
                ? "false"
                : "Not Available"
              : "Not Available"}
          </div>
        </div>
      );
    });

    const spaceXPrograms = getLaunchRecord();
  return (
    <div className="container">
      <h1 className="container__header">SpaceX Launch Programs</h1>
      <div className="container__programs">
        <div className="container__programs--filters">
          <h2>Filters</h2>
          {getFilterType("Launch Year", 2006, 14)}
          {getFilterType("Successful Launch", ["True", "False"])}
          {getFilterType("Successful Landing", ["True", "False"])}
        </div>
        <div className="container__programs--name">{spaceXPrograms ? spaceXPrograms : 'Data Not Available'}</div>
      </div>
      <h1 className="developBy">
        Developed By:{" "}
        <a href="https://anshuljs.000webhostapp.com/">Anshul Nautiyal</a>
        <a href="https://github.com/AnshulNautiyal">Github</a>
      </h1>
    </div>
  );
}

export default withRouter(Home);
