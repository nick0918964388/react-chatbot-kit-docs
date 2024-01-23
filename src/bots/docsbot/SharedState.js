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
            widget : ""
        },{
            function : "故障通報",
            stage : 3 ,
            question : "故障發生時間：",
            widget : ""
        }  
    ]
  };
  
  export default SharedState;