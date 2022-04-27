import React, {useState, useEffect} from 'react';
import './App.css';
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import verifyUser from "./verifyUser";
import Main from "./components/Pages/Main/Main";


const defaultUser = {
    "name": "Denis",
    "hashedPassword": "$2a$10$3rjYkdxHaUqWEkG8yuH.IuWTSJKxO4Bo7LNWKtOk3txcQyCKN8Z06",
    "email": "borovikov.deniska@mail.ru",
    "favorites": [],
    "basket": [],
    "avatar": "../../src/img/DefaultUserIcon.png",
    "regDate": "2022-04-26T19:55:49.070+00:00"
}


function App() {

    let [auth, setAuth] = useState(false);
    let [user, setUser] = useState(defaultUser);

    useEffect((): any => {
        let cleanUpFunc = false;

        const getAuth = async () => {
            try {
                const res = await verifyUser(localStorage.getItem('token'));
                if (!cleanUpFunc) {
                    auth = !res?.user;
                    setAuth(auth);
                }
                if (auth) {
                    user = res.user;
                    setUser(user);
                }
            } catch (e) {
                console.log(e);
            }
        }

        getAuth()
        return() => cleanUpFunc = true;
    }, [])

  return (
    <div>
        <Header/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
