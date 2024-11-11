import PostsGrid from '../posts/PostsGrid'
import classes from './featured-posts.module.css'

export default function FearturedPost(props) {
    return <section className={classes.latest}>
        <h2>Featured Posts</h2>
        <PostsGrid posts={props.posts}></PostsGrid>
    </section>
}