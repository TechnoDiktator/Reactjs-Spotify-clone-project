import { Loader , Error , SongCard } from "../components";
import {genres} from '../assets/constants'




const Discover = () =>{

    const genreTitle = 'Pop';

    console.log(genres)

    return(
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white text-left ">Discover {genreTitle}</h2>
                <select value="" onChange={()=>{}} className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5">
                    {/* mapping each genre to an option */ }
                    {genres.map((genre) =>{
                        <option>{genre.title}</option>
                    }  
                    )}
                </select>
            </div>
        </div>
    )

};












export default Discover;
