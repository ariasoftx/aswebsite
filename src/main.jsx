import { createRoot } from "react-dom/client"
import "./css/main.css"
import { Home } from "./pages/home"
import { Article } from "./pages/article"
import { About } from "./pages/about"
import {Pager, Page,Nav,Navitem,RightNav } from "./general"
import { useState } from "react"
function App() {
    let [page, setPage] = useState("home")
    return (
        <>
            <Nav>
                <Navitem click={() =>setPage("home") }>home</Navitem>
                <Navitem click={() =>setPage("article")}>article</Navitem>
                <Navitem click={() => setPage("about")}>about</Navitem>
                <RightNav>
                    <input type="text" placeholder="Search..." className="search" />
                </RightNav>
            </Nav>
            <Pager page={page}>
                <Page id="home"><Home /></Page>
                <Page id="article"><Article /></Page>
                <Page id="about"><About /></Page>
            </Pager>
            <footer>
                <p>copyright 2025 ariasoft</p>
            </footer>
        </>
    )
}
createRoot(document.getElementById("root")).render(<App />)