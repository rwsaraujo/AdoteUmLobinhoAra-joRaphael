const wolvesUrl = "../wolves.json";

fetch(wolvesUrl)
  .then((r) => r.json())
  .then((json) => {
    if (json.length > 0) {
      for (let i = 0; i < 2; i++) {
        const wolvesList = document.querySelector(".wolves-list");

        const aWolfDiv = document.createElement("div");
        const aWolfImageDiv = document.createElement("div");
        const aWolfImageImg = document.createElement("img");
        const aWolfTextDivContainer = document.createElement("div");
        const aWolfTextProfileDivContainer = document.createElement("div");
        const aWolfTextProfileNameH3 = document.createElement("h3");
        const aWolfTextProfileAgeP = document.createElement("p");
        const aWolfTextDescriptionP = document.createElement("p");

        aWolfDiv.classList.add("a-wolf", "flex");
        aWolfImageDiv.classList.add("wolf-img");
        aWolfTextDivContainer.classList.add("wolf-txt", "flex", "column");

        aWolfImageImg.setAttribute("src", `${json[i].link_image}`);
        aWolfImageImg.setAttribute("alt", `${json[i].name}`);
        aWolfTextProfileNameH3.append(json[i].name);
        aWolfTextProfileAgeP.append(`${json[i].age} anos`);
        aWolfTextDescriptionP.append(json[i].description);

        aWolfImageDiv.appendChild(aWolfImageImg);
        aWolfTextProfileDivContainer.appendChild(aWolfTextProfileNameH3);
        aWolfTextProfileDivContainer.appendChild(aWolfTextProfileAgeP);
        aWolfTextDivContainer.appendChild(aWolfTextProfileDivContainer);
        aWolfTextDivContainer.appendChild(aWolfTextDescriptionP);
        aWolfDiv.appendChild(aWolfImageDiv);
        aWolfDiv.appendChild(aWolfTextDivContainer);

        wolvesList.appendChild(aWolfDiv);

        // console.log(aWolfDiv);
      }
    } else {
      const sectionWolvesTitle = (document.querySelector(
        ".section-wolves-title"
      ).innerHTML = "Não temos nenhum lobinho no momento.");
    }
  });
