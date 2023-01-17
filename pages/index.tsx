import Head from "next/head";
import Nav, { useNav, NavBtn } from "@/dtr/adaptor/web/features/nav";
import * as Layout from "@/dtr/adaptor/web/styles/layout.styled";
import { ClassCard } from "@/dtr/adaptor/web/features/card/ClassCard";
import { AppLogo } from "@/dtr/adaptor/web/components/Logo";
import UserEntity from "@/dtr/domain/entities/User.entity";
import { useEffect } from "react";

export default function Home() {
  const list = Array.from({ length: 20 }, (_, idx) => idx);
  const navHook = useNav();

  useEffect(() => {
    const user = new UserEntity({
      id: "1",
      type: "viewer",
      name: Array.from({ length: 58 }, (_, idx) => 1).join(""),
      email: "shawn-dev@naver.com",
    });
    console.log(user);
    user.validate();
  }, []);

  return (
    <Layout.AppDocument>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.AppHeader>
        <NavBtn onClick={navHook.onOpenNav} />
        <AppLogo />
        <a>Index Page</a>
      </Layout.AppHeader>
      <Nav navHook={navHook} />
      <Layout.AppContent>
        <Layout.AppMain>
          <div
            style={{
              display: "flex",
              flexFlow: "row wrap",
              gap: "12px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {list.map((v) => (
              <ClassCard
                key={v}
                name="User"
                attrs={[
                  ["private", "_id", "string"],
                  ["private", "_name", "string"],
                  ["private", "_age", "number"],
                  ["public", "id", "string"],
                  ["public", "name", "string"],
                  ["public", "age", "number"],
                ]}
                methods={[
                  ["public", "verifyName", "boolean"],
                  ["public", "verifyAge", "boolean"],
                  ["public", "validate", "boolean"],
                ]}
              />
            ))}
          </div>
        </Layout.AppMain>
        <Layout.AppFooter>footer</Layout.AppFooter>
      </Layout.AppContent>
    </Layout.AppDocument>
  );
}
