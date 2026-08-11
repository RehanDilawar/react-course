import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./ItemsSlice";
import fetchStatusSlice from "./FetchStatusSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
  },
});

export default myntraStore;