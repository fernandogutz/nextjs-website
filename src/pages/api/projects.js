export default async function handler(req, res) {
    const response = await fetch("https://blog.fernandogutz.com/wp-json/wp/v2/project?per_page=100");
    const projects = await response.json();

    res.status(200).json(projects)
}

