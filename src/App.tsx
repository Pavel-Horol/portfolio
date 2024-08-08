import {RouterProvider} from "react-router-dom";
import {router} from "./router/router.tsx";
import {AnimatePresence} from "framer-motion";

function App() {

  return (
    <>
        <AnimatePresence mode="wait" >
            <RouterProvider router={router}/>
        </AnimatePresence>
    </>
  )
}

export default App
