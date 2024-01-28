import "./mycontainer.css";
// components
import { MyCard } from "../../components";

export default function MyContainer() {
  return (
    <main className="flex justify-center items-center h-screen">
      <MyCard />
    </main>
  );
}
