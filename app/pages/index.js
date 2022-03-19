import Head from "next/head";
import Additionally from "../components/Additionally";
import Header from "../components/Header";
import Info from "../components/info/Info";
import Links from "../components/Links";
import Wishes from "../components/Wishes";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div id="content">
            <Header />
            <Info />
            <Wishes />
            <Additionally />
            <Links />
        </div>
    );
}
