import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { useEffect } from "react";

export default function Home() {
  let router = useRouter();
  useEffect(() => {
    const login = setTimeout(() => router.push("/login"), 500);

    return () => clearTimeout(login);
  });
  return (
    <>
      <Head>
        <title>WEB.DE</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/web.svg" />
      </Head>
      <main className="h-screen bg-white">
        <div className="border w-4/5 md:w-1/2 lg:w-1/3 mx-auto py-6 px-6 text-[12px] shadow-lg mt-20">
          Sie öffnen gerade eine Internetseite außerhalb Ihres WEB.DE Postfachs.
          Wenn Sie nicht in 3 Sekunden weitergeleitet werden,{" "}
          <Link href="/login" className="text-sky-700">
            klicken Sie hier
          </Link>
        </div>
      </main>
    </>
  );
}
