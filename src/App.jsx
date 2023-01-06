import { Header } from "./components/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";
import { Main } from "./components/Main/Main";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Footer } from "./components/Footer/Footer";
import { SocialMedia } from "./components/SocialMedia/SocialMedia";
import { Developer } from "./components/Developer/Developer";
import { Home } from "./components/Home/Home";
import { ItemDetailsContainer } from "./components/ItemDetailsContainer/ItemDetailsContainer";
import { Contacts } from "./components/Contacts/Contacts";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header>
          <NavBar />
        </Header>

        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route
              path="/productos/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/producto/:id" element={<ItemDetailsContainer />} />
            <Route path="/contacto" element={<Contacts />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </Main>

        <Footer>
          <SocialMedia />
          <Developer />
        </Footer>
      </BrowserRouter>
    </div>
  );
}
export default App;
