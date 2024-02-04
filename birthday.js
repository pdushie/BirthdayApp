function alertUser()
{
    let firstName= document.getElementById("firstName");
    let birthYear = document.getElementById("yearofBirth");
    let holdresult = document.getElementById("holdresult")
    const current_year = 2024;
    let current_age = 0;
    current_age = current_year - birthYear.value;
    strHTML = "";

    strHTML += `<h3>Hey ${firstName.value} You are ${current_age} Years old today</h3>`;
    holdresult.innerHTML = strHTML;



}