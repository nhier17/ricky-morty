import Gender from './category/Gender';
import Species from './category/Species';
import Status from './category/Status';


export default function Filters() {
    return (
        <div className="grid-cols-3">
          <div className="text-center text-white mb-2 text-lg">
            Filter
            </div>     
            <div className="text-center text-white cursor-pointer">Clear filters</div>  
            <div>
                <Gender/>
                <Species/>
                <Status/>
                </div>       
        </div>
    )
}