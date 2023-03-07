import useFetch from "@/hooks/useFetch";

export const initialState = async () => {
    const posts = await useFetch('https://blog.fernandogutz.com/wp-json/wp/v2/posts/');

    return posts;

}