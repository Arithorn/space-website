import React from "react";

import LaunchCard from "./launchcard";
import useSWR from "swr";
import api from "../api/launchlibrary";

const renderList = (list) => {
  console.log(list);
  return list?.map((item) => {
    return (
      <LaunchCard
        key={item.id}
        id={item.id}
        name={item.name.split("|")[1]}
        rocketname={item.rocket.name}
        startwindow={item.windowstart}
        country={item.location.countryCode}
      >
        {item.name}
      </LaunchCard>
    );
  });
};

const LaunchList = () => {
  const { data, error } = useSWR("/next/10", (url) =>
    api.get(url).then((r) => r.data)
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <div>{renderList(data.launches)}</div>;
};

export default LaunchList;
