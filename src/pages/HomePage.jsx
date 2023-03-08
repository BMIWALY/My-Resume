import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SoftSkill from "../components/SoftSkill";
import Portfolio from "../components/Portfolio";



function HomePage() {



    return (
        <div >
           <Header/>
           <SoftSkill/>
           <Portfolio/>
        </div>

    )
    
}

export default HomePage;