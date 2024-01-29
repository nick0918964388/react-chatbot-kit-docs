import React, { useState, useEffect } from "react";
import {generatefnmAPI} from "../../../service/generate";
import SharedState from '../../../SharedState';

const GenFnm = (props) => {
    // const [place, setPlace] = useState();
    // const [car, setCar] = useState();
    // const [trainno, setTrainno] = useState();
    // const [description, setDescription] = useState();
    // const [fnmnum,setfnmnum] = useState('');

    useEffect(() => {
        const generateFNM = async () => {

          const fnmnum_return = await generatefnmAPI(SharedState.selectedcar,SharedState.selectedplace,SharedState.selectedtrainno,SharedState.selecteddescription);
          console.log('fnmnum_return =>',fnmnum_return)
          props.actionProvider.handleFnmCreateMessage(fnmnum_return);
        //   const filteredFlights = flights.filter((item) => item.Status === null);    
        //   setFlights(filteredFlights);
        //   setType(flightType);
        };
        generateFNM();
        
        
      }, []);

      return "";
};

export default GenFnm;
