import { getAllItems } from "@/actions/item";
import TodayPicks from "@/sections/home/TodayPicks";
import ItemsGridSection from "@/sections/menu/ItemsGridSection";
import { Fragment } from "react";

const getData = async () => {
  const res = await getAllItems()
  return res.data || []
}

export default async function Menu() {
  const data = await getData() ?? []
  // console.log(data)

  return (
    <Fragment>
      <ItemsGridSection data={data} />
    </Fragment>
  );
}
