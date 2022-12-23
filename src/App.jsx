import { Header } from "./components/Header/Header"
import { NavBar } from "./components/NavBar/NavBar"
import { Main } from "./components/Main/Main"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { Footer } from "./components/Footer/Footer"
import { SocialMedia } from "./components/SocialMedia/SocialMedia"
import { Developer } from "./components/Developer/Developer"

function App() {
  return (
    <div className="App">
        <Header>
            <NavBar/>
        </Header>
              
        <Main>
            <ItemListContainer greeting="Bienvenidos a compucell, la tienda de venta de productos tecno." />
        </Main>

        <Footer>
          <SocialMedia/>
          <Developer/>
        </Footer>
    </div>
  )
}
export default App
