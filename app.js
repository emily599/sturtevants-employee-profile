// var employees = {
//     name: ["Emily Doan", "Jin Lee", "Jackson Lee",],
//     photo: ["assets/emilydoan.jpg", "assets/jinlee.jpg", "assets/jacksonlee.jpg"],
//     department: ["Online", "E-commerce Manager", "Online",],
//     years: ["6", "7", "2"],
//     sports: ["Snowboard & Tennis", "Snowboard", "Snowboard"],
//     favoriteLocation: ["Snoqualmie", "Steven's Pass", "Steven's Pass"],
// }


var employees = [{
    name: "Jin Lee",
    photo: "assets/jinlee.jpg",
    department: "E-commerce manager",
    years: "7",
    sports: "Snowboard",
    favoriteLocation: "Steven's Pass",
},
{
    name: "Emily Doan",
    photo: "assets/emilydoan.jpg",
    department: "Softgoods, Tennis & Online",
    years: "6",
    sports: "Snowboard, Tennis",
    favoriteLocation: "Snoqualmie",
},
{
    name: "Jackson Lee",
    photo: "assets/jacksonlee.jpg",
    department: "Online",
    years: "1",
    sports: "Snowboard",
    favoriteLocation: "Steven's Pass",
}]

$(document).ready(function () {

    function employeeProfile() {



        for (i = 0; i < employees.length; i++) {

            var wrapper = $("<div>")
            wrapper.addClass("wrapper");



            var nameDiv = $("<div>");
            nameDiv.text(employees[i].name);
            nameDiv.addClass("nameDiv");
            wrapper.append(nameDiv);


            var photoDiv = $("<img>");

            photoDiv.attr("src", employees[i].photo);
            photoDiv.addClass("profilePics");
            wrapper.append(photoDiv);



            var departmentDiv = $("<div>");
            departmentDiv.text(employees[i].department);
            departmentDiv.addClass("departmentDiv");
            wrapper.append(departmentDiv);


            var yearsDiv = $("<div>");
            yearsDiv.text("Years worked: " + employees[i].years);
            yearsDiv.addClass("yearsDiv");
            wrapper.append(yearsDiv);


            var sportsDiv = $("<div>");
            sportsDiv.text("Sports: " + employees[i].sports);
            sportsDiv.addClass("sportsDiv");
            wrapper.append(sportsDiv);

            var favoriteLocationDiv = $("<div>");
            favoriteLocationDiv.text(employees[i].favoriteLocation);
            favoriteLocationDiv.addClass("favoriteLocationDiv");
            wrapper.append(favoriteLocationDiv);

            $("#page").append(wrapper);


        }

    }
    employeeProfile();
});
