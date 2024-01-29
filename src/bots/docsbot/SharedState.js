const SharedState = {
    data: {
        currentFunction : "",
        currentStage: 0
    },
    functions : [
        {
            function : "故障通報",
            stage : 1 ,
            question : "請提供故障車號：",
            widget : "carSelector"
        },{
            function : "故障通報",
            stage : 2 ,
            question : "請提供發生地點：",
            widget : "placeSelector"
        },{
            function : "故障通報",
            stage : 3 ,
            question : "故障車次：",
            widget : ""
        },{
            function : "故障通報",
            stage : 4 ,
            question : "故障概況：",
            widget : ""
        }
    ],
    selectedcar:"",
    selectedplace:"",
    selectedtrainno:"",
    selecteddescription:"",
  };
  
  export default SharedState;