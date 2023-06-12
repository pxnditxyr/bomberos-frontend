import { createSlice } from '@reduxjs/toolkit';
import { IStation } from '../../interfaces';

interface IInitialState {
  stations: IStation[]
  activeStation: IStation | null
  isLoadingStations: boolean
}

const initialState : IInitialState = {
  stations: [],
  activeStation: null,
  isLoadingStations: true
}

export const stationSlice = createSlice({
  name: 'station',
  initialState,
  reducers: {
    onAddNewStation: ( state, { payload } ) => {
      state.stations.push( payload )
      state.activeStation = null
    }
  }
})

export const {
  onAddNewStation
} = stationSlice.actions
