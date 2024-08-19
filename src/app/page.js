import Head from 'next/head';

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleComplete = () => {
      setTimeout(() => {
        setLoading(false);
      }, 0);
    };

    if (typeof document !== "undefined" && document.readyState === "complete") {
      handleComplete();
    } else if (typeof window !== "undefined") {
      window.addEventListener("load", handleComplete);
      return () => window.removeEventListener("load", handleComplete);
    }
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="">
        <div className={loading ? "blur-sm" : ""}>
          <Home />
        </div>
      </main>
    </>
  );
}
