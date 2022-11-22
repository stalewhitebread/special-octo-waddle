function jget() {
    //fetches json values
    console.log("in jget");
    fetch("data/words.json")

    //console log of server response
    .then((result) => {
            console.log(result);
            // if (result.status != 200) { throw new Error("Bad Server Response"); }
            return result.json();
        })
        .then((response) => {
            console.log(response);
            console.log(response.name); 
        })
    .catch((error) => { console.log(error); });
}

$('#btnLoadData').click(jget());
