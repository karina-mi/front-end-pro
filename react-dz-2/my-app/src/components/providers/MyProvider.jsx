import { useState } from "react"

import MyContext from "./MyContext"

const MyProvider = ({children}) => {
 const [title, setTitle] = useState('My Title')

  return <MyContext.Provider value={{title, setTitle}}>
      {children}
  </MyContext.Provider>
}

export default MyProvider