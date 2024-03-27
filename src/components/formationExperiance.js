import React from "react";
import "./formationExperiance.css";
import Dataformation from "./datas/formation";
import Formation from "./Formation";
import DataExperiance from "./datas/Experience";
import Experience from "./Experience";




function FormationExperiance(){
    console.log(Dataformation)
    return(
 
<section> 
    <Formation datas={Dataformation}/>
    <Experience datas={DataExperiance}/>

</section>

    )
};
export default FormationExperiance;