import { Analytics } from "@vercel/analytics/react";
import { motion, AnimatePresence } from "framer-motion";
import '@/styles/index.css'
import '@/styles/HeroHome.css'
import '@/styles/Header.css'
import '@/styles/AboutCard.css'
import '@/styles/Skills.css'
import '@/styles/ListOfPosts.css'
import '@/styles/Projects.css'
import '@/styles/Contact.css'
import '@/styles/Footer.css'
import '@/styles/About.css'
import '@/styles/ProjectItemCard.css'
import '@/styles/PostContent.css'
import '@/styles/Loader.css'

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "@/components/ui/Loader";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => setIsLoading(true);
    const handleComplete = (url) => setIsLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  return (
    <AnimatePresence mode="wait" initial={false}>
      {isLoading ? (
        // Render your loading animation component here
        <Loader></Loader>
      ) : (
        <motion.div
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Component {...pageProps} />
          <Analytics />

        </motion.div>
      )}
    </AnimatePresence>
  );
}
