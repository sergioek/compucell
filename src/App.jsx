import { Header } from "./components/Header/Header"
import { NavBar } from "./components/NavBar/NavBar"
import { Main } from "./components/Main/Main"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { Footer } from "./components/Footer/Footer"
import { SocialMedia } from "./components/SocialMedia/SocialMedia"
import { Developer } from "./components/Developer/Developer"
import { Home } from "./components/Home/Home"
import { ItemList } from "./components/ItemList/ItemList"
import { Item } from "./components/Item/Item"
import { ItemDetailsContainer } from "./components/ItemDetailsContainer/ItemDetailsContainer"

function App() {
  return (
    <div className="App">
        <Header>
            <NavBar/>
        </Header>
              
        <Main>
          {/* <ItemListContainer>
             <ItemList/>
          </ItemListContainer> */}
          <ItemDetailsContainer/>
        </Main>

        <Footer>
          <SocialMedia/>
          <Developer/>
        </Footer>
    </div>
  )
}
export default App
