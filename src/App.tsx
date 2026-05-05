import { Route, Routes } from "react-router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./pages/Main";
import { routes } from "./router";
import Services from "./pages/Services";
import About from "./pages/About";
import Bitrix from "./pages/Bitrix";
import BpmSoft from "./pages/BpmSoft";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={routes.main} element={<Main />} />
        <Route path={routes.services} element={<Services />} />
        <Route path={routes.about} element={ <About /> }/>
        <Route path={routes.bitrix} element={ <Bitrix /> }/>
        <Route path={routes.bpmSoft} element={ <BpmSoft /> }/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
