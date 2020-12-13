import React, { useState } from "react";
import { withRouter } from "react-router";
import queryString from "query-string";
import "lazysizes";
import "./Home.scss";
import getFilterData from "./api-call";

function Home(props) {
  const { data = [] } = props;
  const [state, setstate] = useState(data);

  const applyFilter = (filterName) => (event) => {
    let searchParams = new URLSearchParams(location.search);
    let pathname = location.pathname;
    const { value: item = "" } = event.target;
    // EDGECASE: If parent div clicked ignore the click functionality
    if (!item) return;
    // EDGECASE: if same year clicked twice
    const yearTwiceClick = searchParams.get("launch_year", item);
    const launchTwiceClick = searchParams.get("launch_success", item);
    const landTwiceClick = searchParams.get("land_success", item);
    
    if (
      item === yearTwiceClick ||
      (item.toLowerCase() === launchTwiceClick &&
        filterName === "Successful Launch") ||
      (item.toLowerCase() === landTwiceClick &&
        filterName === "Successful Landing")
    ) {
      const filterButton = document.getElementById(`${item}${filterName}`);
      filterButton.classList.remove("filterSelected");
      
      if(filterName === "Successful Launch") searchParams.delete('launch_success');
      else  if(filterName === "Successful Landing") searchParams.delete('land_success');
      else searchParams.delete('launch_year');

      history.replaceState(null, '', '?' + searchParams + location.hash);

      const params = {
        launch_year: searchParams.get("launch_year"),
        launch_success: searchParams.get("launch_success"),
        land_success: searchParams.get("land_success"),
      };

      getFilterData(params, setstate);
      return;
    }
    // NOTE: Happy Path - filter is selected
    if (filterName === "Launch Year") {
      searchParams.set("launch_year", item);
      props.history.push({
        pathname: pathname,
        search: searchParams.toString(),
      });
      const params = {
        launch_year: item,
        launch_success: searchParams.get("launch_success"),
        land_success: searchParams.get("land_success"),
      };
      getFilterData(params, setstate);
    } else if (filterName === "Successful Launch") {
      searchParams.set("launch_success", item === "True" ? true : false);
      props.history.push({
        pathname: pathname,
        search: searchParams.toString(),
      });
      const params = {
        launch_year: searchParams.get("launch_year"),
        launch_success: item,
        land_success: searchParams.get("land_success"),
      };
      getFilterData(params, setstate);
    } else {
      searchParams.set("land_success", item === "True" ? true : false);
      props.history.push({
        pathname: pathname,
        search: searchParams.toString(),
      });
      const params = {
        launch_year: searchParams.get("launch_year"),
        launch_success: searchParams.get("launch_success"),
        land_success: item,
      };
      getFilterData(params, setstate);
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
        <div className="filter__value" onClick={applyFilter(filterName)}>
          {arrayItem.map((item) => {
            let addClass = "";
            if (filterName === "Launch Year") {
              addClass = year === item.toString() ? "filterSelected" : "";
            } else if (filterName === "Successful Launch") {
              addClass =
                launch === item.toString().toLowerCase()
                  ? "filterSelected"
                  : "";
            } else {
              addClass =
                landing === item.toString().toLowerCase()
                  ? "filterSelected"
                  : "";
            }
            return (
              <button key={item} value={item} className={addClass} id={`${item}${filterName}`}>
                {item}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const getLaunchRecord = () =>
    state.length &&
    state.map((item, index) => {
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
        <div className="launchCard" key={index}>
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
        <div className="container__programs--name">
          {spaceXPrograms ? spaceXPrograms : "Data Not Available"}
        </div>
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
