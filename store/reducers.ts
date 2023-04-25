import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
  showViral: boolean;
  section: "hot" | "top" | "user";
  sort: "viral" | "top" | "time" | "rising";
  window: "day" | "week" | "month" | "year" | "all";
}

const initialState: FiltersState = {
  showViral: false,
  section: "hot",
  sort: "viral",
  window: "day",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setShowViral(state, action: PayloadAction<boolean>) {
      state.showViral = action.payload;
    },
    setSection(state, action: PayloadAction<"hot" | "top" | "user">) {
      state.section = action.payload;
    },
    setSort(state, action: PayloadAction<"viral" | "top" | "time" | "rising">) {
      state.sort = action.payload;
    },
    setWindow(
      state,
      action: PayloadAction<"day" | "week" | "month" | "year" | "all">
    ) {
      state.window = action.payload;
    },
  },
});

export const { setShowViral, setSection, setSort, setWindow } =
  filtersSlice.actions;
export default filtersSlice.reducer;
