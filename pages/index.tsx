import { NextPage } from "next";
import FilterControls from "../components/FilterControls";
import Gallery from "../components/Gallery";

const Index: NextPage = () => (
  <div className="main">
    <FilterControls />
    <Gallery />
  </div>
);

export default Index;
