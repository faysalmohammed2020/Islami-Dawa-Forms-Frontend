// import CreateLead from "./pages/CreateLead"
// import Newform from './pages/Newform';

import Table from "../src/pages/Table"
import columns from "./Data/ColoumnsData"
import tableData from "./Data/TableDataNew"
// import IntakeForm from "./pages/IntakeForm"
import TableNew from "./pages/TableNew"


function App() {
  

  return (
    <>
      {/* <CreateLead/> */}
      {/* <Newform/> */}
      {/* <IntakeForm/> */}
      
      <TableNew columns={columns} data={tableData} />
      <Table/>
    </>
  )
}

export default App
