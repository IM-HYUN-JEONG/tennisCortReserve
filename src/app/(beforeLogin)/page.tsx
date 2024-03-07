import {redirect} from "next/navigation";
import Main from "./_component/Main";

export default async function Home() {
  //  if (session?.user) {
  //  redirect('/home');
  //  return null;
  // }
  return (
    <>
      <Main />
    </>
  );
}
