import React from "react"
import AppNavigator from "./src/routes/AppNavigator"

import configureStore from "./src/redux/configureStore";
import { Provider as ReduxProvider } from "react-redux"

const store = configureStore();

export default function App(){
  return(
    <ReduxProvider store={store} >
      <AppNavigator />
    </ReduxProvider>
  )
}