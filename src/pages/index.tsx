import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Panel1 from "@/components/Panel1";
import Panel2 from "@/components/Panel2";
import Panel3 from "@/components/Panel3";
import Panel4 from "@/components/Panel4";
import Panel5 from "@/components/Panel5";
import Panel6 from "@/components/Panel6";
import Panel7 from "@/components/Panel7";
import Panel8 from "@/components/Panel8";

export default function Home() {
  return (
    <div className="page-width">
      <main>
        <Header />
        <Panel1 />
      </main>
      <Panel2 />
      <Panel3 />
      <Panel4 />
      <Panel5 />
      <Panel6 />
      <Panel7 />
      <Panel8 />
      <Footer />
    </div>
  );
}
