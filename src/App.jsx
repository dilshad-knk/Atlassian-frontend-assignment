import Aside from "./components/Aside"
import Jobpreview from "./components/Job-preview"

function App() {

  return (
   <>
  <div className="flex ">
    <main className="flex-1">
      <Jobpreview/>
    </main>
    <Aside/>
  </div>
   </>
  )
}

export default App
