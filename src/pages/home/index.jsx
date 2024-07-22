import { Outlet } from "react-router-dom"
import Layout from "../../layout/index"
const Index = () => {
  return (
    <div>
        <div className="hidden md:block">
          <Layout/>
        </div>
        <div className="md:hidden p-4">
          <Outlet/>
        </div>
    </div>
  )
}

export default Index