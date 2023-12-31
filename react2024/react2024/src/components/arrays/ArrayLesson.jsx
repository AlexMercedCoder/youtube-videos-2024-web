import movies2023 from "./data";
import ArrayItem from "./ArrayItem";

function ArrayLesson() {

    // const arrayOfJSX = []

    // for(let i = 0; i < movies2023.length; i++){
        
    //     const movie = movies2023[i]
        
    //     arrayOfJSX.push((<div>
    //         <h1>{movie.title}</h1>
    //         <img src={movie.imageUrl} alt={movie.title}/>
    //     </div>))
    // }


  return <div>
    {movies2023.map((movie, index) => {
        return <ArrayItem movie={movie} index={index} key={index}/>
    })}
  </div>;
}

export default ArrayLesson;
