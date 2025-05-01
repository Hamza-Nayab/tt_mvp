import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
    
      <section className="pt-32">
        <div className="max-w-md mb-8">
          <h1 className="text-6xl font-bold">
            Your one link
            <br /> for everything
          </h1>
          <h2 className="text-gray-500 text-xl mt-6">
            Share your social media, website, and
            <br /> Review with a single link.
          </h2>
          </div>
          <form className="inline-flex items-center shadow-lg shadow-gray-700/20">
            <span className="bg-white py-4 pl-4">
              TrusThread.com/
            </span>
            <input type="text" className="py-4 bg-white" placeholder="username" />
            <button type="submit" className="bg-blue-500 text-white py-4 px-6">
              Join free
            </button>
          </form>
        
      </section>
    </main>
  );
}
