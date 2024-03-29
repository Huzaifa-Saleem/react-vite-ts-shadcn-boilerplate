import { createSlice } from '@reduxjs/toolkit';

import { dispatch } from '@redux/store';
import type { TAppState } from '@typedefs/app';

// ----------------------------------------------------------------------
const initialState: TAppState = {
  hasError: false,
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setError: (state: TAppState) => {
      state.hasError = true;
    },
  },
});

export default slice.reducer;

// ----------------------------------------------------------------------
export function setError() {
  return async () => {
    // set app as loaded
    dispatch(slice.actions.setError());
  };
}
