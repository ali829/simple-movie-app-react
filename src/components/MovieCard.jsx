export const MovieCard = ({movie : {Poster, Title, Type, Year}}) => {
    const randomColor = ()=>{
        const colors = ["#FAB4FF","#78C149","#F4BB57","#7499F9","#7499F9" , "#ACA7CB" , "#FF6A69"]
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }
    
  return (
    <>
    <div className="movie-card">
        <div className="movie-poster-container" style={{backgroundColor: randomColor()}}>
            <img src={Poster !== "N/A" ? Poster : 'https://via.placeholder.com/400'} alt="" />
        </div>
        <h2>{Title}</h2>
        <div className="type-year-container">
            <div className="type-container">{Type}</div>
            <div className="year-container">{Year}</div>
        </div>
    </div>
    </>
  )
}
