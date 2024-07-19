import React,{useEffect} from 'react';
import { Context as HomeContext } from "../../context/HomeContext";
import HomeComponent from "../../components/home/homeComp";


const Home = () => {    
    const { state, landingPage} = React.useContext(HomeContext);
    useEffect(()=>{
        landingPage()
    },[])
    console.log(state.homepageData?state.homepageData.status:null);
    return (
        <div>
            <p>This is Our Home Page!</p>
            <p>Data comes from context please check console!</p>
            <HomeComponent/>      
        </div>
    );
}

export default Home;