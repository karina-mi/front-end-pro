import { useState, ReactNode } from "react"

import MyContext from "./MyContext"

type Props = { children: ReactNode }

const MyProvider = (props: Props) => {
 const [title, setTitle] = useState<string>('My Title')

  return <MyContext.Provider value={{title, setTitle}}>
      {props.children}
  </MyContext.Provider>
}

export default MyProvider