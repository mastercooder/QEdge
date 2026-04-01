import '../style/Fcomp.css'
import Fcomp2 from './Fcomp2';
import Fcomp3 from './Fcomp3';
import Fcomp5 from './Fcomp5';

function Fcomp1(){
    return(
        <div className="Fcomp1 text-center">
            <h1 className='Fcomp1Header'>F Component</h1>
            <Fcomp2/>
            <Fcomp3/>
            <Fcomp5/>
        </div>
    )
}

export default Fcomp1;