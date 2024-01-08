import styles from "./Produtos.module.css";
import posts from "assets/json/posts.json"
import PostCard from "Componentes/PostCard";

const Produtos = () => {
    return (
        <ul className={styles.posts}>
            {posts.map(post => (
                <li key={post.id}>
                    <PostCard post={post}/>
                </li>
            ))}

        </ul>
    )
}

export default Produtos