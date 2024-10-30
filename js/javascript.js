console.log("Hey");

const container = document.querySelector("#container");

for (let j = 0; j < 16; j++)
{
const newFlex = document.createElement("div");
newFlex.style.display = "flex";

    for (let i = 0; i < 16; i++)
    {
        const newDiv = document.createElement("div");

        newDiv.style.borderColor = "red";
        newDiv.style.borderWidth = "1px";
        newDiv.style.borderStyle = "solid";
        newDiv.style.width = "100px";
        newDiv.style.height = "100px";

        newFlex.append(newDiv);   
    }      
container.append(newFlex);
}