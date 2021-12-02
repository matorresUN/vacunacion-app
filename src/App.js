import Dashboard from "./components/Dashboard";
import Error404 from "./components/Error404";
import Footer from "./components/Footer";
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Content from './components/Error404';

function App() {
  return (
    
    <div id="wrapper">
        {/* <!-- Page Wrapper --> */}
        {/* <!-- Sidebar --> */}
        <Sidebar/>
        {/* <!-- End of Sidebar --> */}

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">

                {/* <!-- Topbar --> */}
                <Topbar/>
                {/* <!-- End of Topbar --> */}

                {/* <!-- Begin Page Content --> */}
                <Content>
                  <Footer/>
                </Content>
                {/* <!-- /.container-fluid --> */}

            </div>
            {/* <!-- End of Main Content --> */}

            {/* <!-- Footer --> */}
            <Footer/>
            {/* <!-- End of Footer --> */}

        </div>
        {/* <!-- End of Content Wrapper --> */}
        {/*<!-- End of Page Wrapper --> */}

    </div>

  );
}

export default App;
