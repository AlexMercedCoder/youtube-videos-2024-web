function ArrayItem(props){
    const {movie, index} = props
    return <div key={index}>
    <h1>{movie.title}</h1>
    <img src={movie.imageUrl} alt={movie.title}/>
</div>
}

export default ArrayItem