import Footer from "@components/footer/Footer";
import Navbar from "@components/navbar/Navbar";
import TranscriptVideo from "@components/transcriptVideo/TranscriptVideo";

export default function Home() {
  return (
    <div className="h-">
      <Navbar />
      <TranscriptVideo />
      <Footer />
    </div>
  )
}
