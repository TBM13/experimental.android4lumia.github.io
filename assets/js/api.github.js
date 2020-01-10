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

async function getOrgMembersList(org) {
    "use strict";
    return await apicall("https://api.github.com/orgs/" + org + "/members");
}

function getOrgMembersAvatarURL(membersList) {
    "use strict";
    membersList = membersList.split('\n');
    var membersAvatar = [];
    for(var i = 0; i < membersList.length; i++) {
      if (membersList[i].contains("avatar_url"))
      {
        var memberAvatarURL = membersList[i].remove(0, membersList[i].lastIndexOf(":") + 2);
        memberAvatarURL = memberAvatarURL.remove(memberAvatarURL.length - 2, 2);
        console.log(memberAvatarURL);
        membersAvatar.push(memberAvatarURL);
      }
    }
}

function getOrgMembersUsername(membersList) {
    "use strict";
}
