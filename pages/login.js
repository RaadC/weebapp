import Head from "next/head";
import Login from "../components/LogIn";


export default function Loggedin() {
  return (
    <div>
      <Head>
        <title>Weebapp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/weeblogo40.png" />
      </Head>
      
      <Login />
    </div>
  );
}