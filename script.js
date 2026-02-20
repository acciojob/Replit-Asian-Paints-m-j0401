//your JS code here. If required.

let container=document.querySelector(".grid-container");
let color_inp=document.getElementById("colour_id");
let btn=document.querySelector("button");
let fragment=document.createDocumentFragment();
for(let i=0;i<9;i++)
	{
		let div=document.createElement("div");
		div.id=i+1;
		div.className="grid-item";
		fragment.appendChild(div);
	}
container.appendChild(fragment);
let grid=document.querySelectorAll(".grid-item");
btn.addEventListener("click",()=>{
	let v=color_inp.value;
	for(let g of grid)
		{
			g.style.backgroundColor=v;
		}
})
