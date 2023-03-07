export default async function handler(req, res) {
    const response = await fetch("https://blog.fernandogutz.com/wp-json/wp/v2/posts/");
    const data = await response.json();
    res.status(200).json(data);
  }
  