import AzaadDates from "./AzaadDates";
import HeadProfile from "./HeadProfile";
import SelectShow from "./SelectShow";
import Footer from "./Footer";

export default function Theatre_Selection_Page() {
  return (
    <div style={{ padding: "1.5rem" }}>
      <HeadProfile />
      <p>Home / Movie / Show Time</p>
      <AzaadDates />
      <SelectShow />
      <SelectShow />
      <SelectShow />
      <SelectShow />
      <SelectShow />
      <SelectShow />
      <SelectShow />
      <SelectShow />
      <Footer />
    </div>
  );
}
