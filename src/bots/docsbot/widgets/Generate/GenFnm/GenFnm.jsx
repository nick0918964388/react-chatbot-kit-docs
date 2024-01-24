import React, { useState, useEffect } from "react";


const GenFnm = ({ selectedcar, selectedplace,selectedtrainno,selecteddescription, actionProvider }) => {
    const [place, setPlace] = useState();
    const [car, setCar] = useState();
    const [trainno, setTrainno] = useState();
    const [description, setDescription] = useState();

    useEffect(() => {
        const generateFNM = async () => {
          const flights = await generatefnmAPI(selectedcar,selectedplace,selectedtrainno,selecteddescription);
    
        //   const filteredFlights = flights.filter((item) => item.Status === null);    
        //   setFlights(filteredFlights);
        //   setType(flightType);
        };
        generateFNM();
      }, []);

};

export default GenFnm;
