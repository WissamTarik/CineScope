
import { Outlet } from 'react-router-dom'
import MainSideBar from '../components/MainSidebar/MainSideBar'

const Layout = () => {
  
  return (
    <>
    <MainSideBar>
<main>

    <Outlet/>
</main>

    </MainSideBar>


    </>
  )
}

export default Layout