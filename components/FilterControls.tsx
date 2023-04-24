import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../pages/store/store";
import {
  setShowViral,
  setSection,
  setSort,
  setWindow,
} from "../pages/store/reducers";
import logo from "../assets/img/imgur.png";

export function FilterControls() {
  const filters = useSelector((state: RootState) => state.filters);
  const dispatch = useDispatch();

  const handleShowViralChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setShowViral(event.target.checked));
  };

  const handleSectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSection(event.target.value as "hot" | "top" | "user"));
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      setSort(event.target.value as "viral" | "top" | "time" | "rising")
    );
  };

  const handleWindowChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      setWindow(event.target.value as "day" | "week" | "month" | "year" | "all")
    );
  };

  return (
    <div className="filter-wrapper">
      <div className="filters">
        <div className="logo">
          <img src={logo.src} alt="" />
        </div>
        <div className="controls">
          <label>
            <input
              type="checkbox"
              checked={filters.showViral}
              onChange={handleShowViralChange}
            />
            Show viral images
          </label>
          {/* <br /> */}
          <label>
            <select value={filters.section} onChange={handleSectionChange}>
              {/* <option value="">Section</option> */}
              <option value="hot">Hot</option>
              <option value="top">Top</option>
              <option value="user">User</option>
            </select>
          </label>
          {/* <br /> */}
          <label>
            <select value={filters.sort} onChange={handleSortChange}>
              <option value="">Sort</option>
              <option value="viral">Viral</option>
              <option value="top">Top</option>
              <option value="time">Time</option>
              <option value="rising">Rising</option>
            </select>
          </label>
          {/* <br /> */}
          {filters.section === "top" && (
            <label>
              <select value={filters.window} onChange={handleWindowChange}>
                <option value="">Period</option>
                <option value="day">Day</option>
                <option value="week">Week</option>
                <option value="month">Month</option>
                <option value="year">Year</option>
                <option value="all">All</option>
              </select>
            </label>
          )}
        </div>
      </div>
    </div>
  );
}
