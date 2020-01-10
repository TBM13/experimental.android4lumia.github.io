async function apicall(url) {
    "use strict";
    window.console.info("API call: " + url);
    var api = new XMLHttpRequest();
    var prms = new Promise((resolve, reject) => {
        api.onreadystatechange = () => {
            //window.console.info("" + api.readyState + " - " + api.status);
            if (api.readyState == 4) {
                if (api.status == 200) {
                    resolve(JSON.parse(api.response));
                }
                else {
                    resolve(null);
                }
            }
        };
    });
    api.open("GET", url);
    api.send();
    return prms;
}

function getPropertyFromArray(array, property) {
    "use strict";
    var propertiesArray = []; 
	array.forEach(function(item){
        propertiesArray.push(item[property]);
    });
    return propertiesArray;
}

async function getOrgMembersList(org) {
    "use strict";
    return await apicall("https://api.github.com/orgs/" + org + "/members");
}

function getOrgMembersAvatarURL(membersList) {
    "use strict";
    return getPropertyFromArray(membersList, "avatar_url");
}

function getOrgMembersUsername(membersList) {
    "use strict";
    return getPropertyFromArray(membersList, "login");
}
