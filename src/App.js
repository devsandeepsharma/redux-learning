import { useSelector } from "react-redux";
import Auth from "./components/Auth";
import Counter from "./components/Counter"
import Header from "./components/Header";
import Profile from "./components/Profile"

const App = () => {
  const auth = useSelector(state => state.auth.authentication)
  return (
    <>
      <Header />
      <main>
        {
          auth ?
          <>
            <Profile />
            <Counter />
          </>
          :
          <Auth />
        }
      </main>
    </>
  )
}

export default App;