export default async function Page() {
    const posts: string[] = []
    try {
        const data: Response = await fetch('http://localhost:3000/get-exercise')
        posts.push(...await data.json())
    } catch (e) {
        console.log(e)
    }

    return (
        <ul>
            {posts.length}
        </ul>
    )
}