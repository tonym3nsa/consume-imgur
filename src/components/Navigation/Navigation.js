import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  DAY,
  HOT,
  MONTH,
  TIME,
  TOP,
  USER,
  WEEK,
  YEAR,
  ALL,
  VIRAL,
} from "../../constants";
import { getGallery } from "../../redux/actions/gallery";
import Select from "../Select/Select";
import "./Navigation.css";

function Navigation() {
  const dispatch = useDispatch();
  const [section, setSection] = useState(HOT);
  const [sort, setSort] = useState(TOP);
  const [window, setWindow] = useState(DAY);
  useEffect(() => {
    dispatch(getGallery());
  }, []);
  const sectionOptions = [
    {
      value: HOT,
      name: HOT,
    },
    {
      value: TOP,
      name: TOP,
    },
    {
      value: USER,
      name: USER,
    },
  ];
  const sortOptions = [
    {
      value: TOP,
      name: TOP,
    },
    {
      value: TIME,
      name: TIME,
    },
    {
      value: VIRAL,
      name: VIRAL,
    },
  ];
  const windowOptions = [
    {
      value: DAY,
      name: DAY,
    },
    {
      value: WEEK,
      name: WEEK,
    },
    {
      value: MONTH,
      name: MONTH,
    },
    {
      value: YEAR,
      name: YEAR,
    },
    {
      value: ALL,
      name: ALL,
    },
  ];

  function selectSectionFilter(selection) {
    setSection(selection);
    implementFilter(selection, sort, window);
  }

  function selectSortFilter(selection) {
    setSort(selection);
    implementFilter(section, selection, window);
  }

  function selectWindowFilter(selection) {
    setWindow(selection);
    implementFilter(section, sort, selection);
  }

  function implementFilter(section, sort, window) {
    const filter = {
      section: section,
      sort: sort,
      window: window,
    };

    dispatch(getGallery(filter));
  }
  return (
    <div className="filters">
      <div className="row">
        <div className="col-md-2">
          <label>Section</label>
          <Select options={sectionOptions} handleChange={selectSectionFilter} />
        </div>
        <div className="col-md-2">
          <label>Sort</label>
          <Select options={sortOptions} handleChange={selectSortFilter} />
        </div>
        <div className="col-md-2">
          <label>Window</label>
          <Select options={windowOptions} handleChange={selectWindowFilter} />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
