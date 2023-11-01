import React from "react";
import Button from "./components/Elements/Button/index.tsx"

function App() {

  return (
    <>
      <div className="App bg-gray-100">
       {/* <Button />
       <Button /> */}
       <Button variant="bg-green-500">
          Title
       </Button>
       {/* <ButtonGray /> */}
      </div>
    </>
  )
}

export default App
