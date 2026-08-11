import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    if (fetchStatus.currentlyFetching) return;

    const controller = new AbortController();
    const signal = controller.signal;
    fetch("http://localhost:8000/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        console.log("items fetched", items);
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return (
    <>
      <div>Fetch Done: {fetchStatus.fetchDone}</div>
      <div>Currently Fetching: {fetchStatus.currentlyFetching}</div>
    </>
  );
};

export default FetchItems;
