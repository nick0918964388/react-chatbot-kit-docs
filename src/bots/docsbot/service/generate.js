const baseURL = "http://tra.webtw.xyz:8888/maximo/zz_data";
const environment = "?method=genFailRP";
const method = "";


export const generatefnmAPI = async (carno, selectedplace, selectedtrainno, reason) => {
  const response = await fetch(`${baseURL}/${environment}&carno=${carno}&date=2024-01-24&loc=${selectedplace}&trainno=${selectedtrainno}&reason=${reason}`
    , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // 这里假设您的服务器接受 JSON 格式的数据
        // 如果需要其他头部信息，比如认证（Authorization），可以在这里添加
      },
    });
  const data = await response.json();
  console.log('return from api : ', data);
  return data;
};


