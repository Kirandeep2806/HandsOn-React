let myData = []

async function DataCollector()  {
    const response = await fetch('https://anime-facts-rest-api.herokuapp.com/api/v1');
    const data = await response.json();
    myData = data;
}

// (async () => {
//     const data = await DataCollector();
//     a = data;
//     console.log(a);
// })();

// export default a;
DataCollector();

export default myData;
