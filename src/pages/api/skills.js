export default function handler(req, res) {
    const skills = {
        listOfSkills: [

            {
                "tag": "front",
                "urlImg": "html.png",
                "title": "HTML5",
            },

            {
                "tag": "front",
                "urlImg": "css.png",
                "title": "CSS",
            },

            {
                "tag": "front",
                "urlImg": "js.png",
                "title": "JavaScript",
            },

            {
                "tag": "front",
                "urlImg": "react.png",
                "title": "React.js",
            },

            {
                "tag": "front",
                "urlImg": "nextjs.png",
                "title": "Next.js",
            },

            {
                "tag": "tool",
                "urlImg": "git.png",
                "title": "Git",
            },

            {
                "tag": "front",
                "urlImg": "sass.png",
                "title": "Sass",
            },

            {
                "tag": "front",
                "urlImg": "bootstrap.png",
                "title": "Bootstrap",
            },

            {
                "tag": "design",
                "urlImg": "figma.png",
                "title": "Figma",
            },

            {
                "tag": "back",
                "urlImg": "php.png",
                "title": "PHP8",
            },

            {
                "tag": "back",
                "urlImg": "mysql.png",
                "title": "MySQL",
            },

            {
                "tag": "back",
                "urlImg": "wordpress.png",
                "title": "WordPress",
            },

            {
                "tag": "back",
                "urlImg": "nodejs.png",
                "title": "Node.js",
            },

            {
                "tag": "back",
                "urlImg": "woocommerce.png",
                "title": "WooCommerce",
            },

            {
                "tag": "design",
                "urlImg": "elementor.png",
                "title": "Elementor",
            },

            {
                "tag": "design",
                "urlImg": "inkscape.png",
                "title": "Inkscape",
            },

            {
                "tag": "tool",
                "urlImg": "github.png",
                "title": "GitHub",
            },

            {
                "tag": "design",
                "urlImg": "canva.png",
                "title": "Canva",
            },

            {
                "tag": "tool",
                "urlImg": "ga.png",
                "title": "Google Analytics",
            },

            {
                "tag": "tool",
                "urlImg": "searchConsole.png",
                "title": "Search Console",
            },

            {
                "tag": "tool",
                "urlImg": "adsManager.png",
                "title": "Ads Manager",
            },

        ]
    }


    res.status(200).json(skills)
}

