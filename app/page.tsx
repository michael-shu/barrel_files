import Image from "next/image";
//Barrel
import {NotificationToast, NavBar} from '../components';

//Direct
//import NotificationToast from "../components/NotificationToast";
//import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
  <NotificationToast />
  <NavBar/>

</>

  );
}
