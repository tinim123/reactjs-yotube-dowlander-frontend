import YoutubeVideo from "./YotubeVideo";
import { useState, useEffect } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [youtube, setYoutube] = useState(false);
  const [loading, setLoading] = useState(false)

  const download = () => {
    if (url) {
      setLoading(true)
      fetch(`https://tinim123.pythonanywhere.com/api/youtube?url=${url}`)
        .then((res) => res.json())
        .then((data) => {
          setLoading(false)
          setYoutube(data)
        });
    }
  };

  return (
    <div className="App">
      <form action="" method="post" onSubmit={(e) => e.preventDefault()}>
        <h3>Youtube Downloader</h3>
        <div className="search">
          <input
            type="text"
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Youtube URL"
          />
          <button type="submit" onClick={download}>
            Download
          </button>
        </div>
      </form>
      {loading && <div className="loader">Yükleniyor..</div>}
      {youtube && loading===false && <YoutubeVideo youtube={youtube} />}
    </div>
  );
}

export default App;
