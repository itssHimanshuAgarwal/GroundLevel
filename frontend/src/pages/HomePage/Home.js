import React from 'react';
import Hero from '../../components/Hero'
import { homeObjOne,  homeObjTwo, homeObjThree} from './Data';
import { InfoSection } from '../../components';

function Home() {
    return ( <>
        <Hero />
        <InfoSection {...homeObjOne }
        />
         <InfoSection {...homeObjThree }/>
          <InfoSection {...homeObjTwo }/> 
           < / >
    );
}

export default Home;