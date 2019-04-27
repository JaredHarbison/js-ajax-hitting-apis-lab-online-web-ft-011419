function displayRepositories() {
    var repos = JSON.parse(this.responseText);
    const repoList = `<ul>${
        repos.map(
            r =>
                '<li>' + 
                r.name + 
                ' - <a href= "' +
                r.html_url +
                '" data-repo = "' +
                r.name +
                '" onclick="getCommits(this)">Get Commits</a></li>'
                )
        .join('')}</ul>`;
    document.getElementById("repositories").innerHTML = repoList;
}

function displayCommits() {
    const commits = JSON.parse(this.responseText);
    const commitsList = `<ul>${
        commits.map(
            commit =>
                '<li><strong>' +
                commit.author.login +
                '</strong> - ' + 
                commit.commit.author.name +
                ' - ' +
                commit.commit.message +
                '</li>'
        )
        .join('')}</ul>`;

    document.getElementById('details').innerHTML = commitsList;
}

function displayBranches() {
    const branches = JSON.parse(this.responseText);
    const branchesList = `<ul>${
        branches.map(
            branch =>
                '<li>' +
                branch.name + 
                '</li>'
        )
        .join('')}</ul>`;

    document.getElementById('details').innerHTML = branchesList;
}

function getRepositories() {
    const req = new XMLHttpRequest()
    const user = document.getElementById("username").value
    req.addEventListener("load", displayRepositories)
    req.open("GET", `https://api.github.com/users/${user}/repos`)
    req.send()
}

function getCommits(element) {
    const name = element.dataset.repository
    const req = new XMLHttpRequest()
    const user = document.getElementById("username").value
    req.addEventListener('load', displayCommits)
    req.open(
        "GET",
        `https://api.github.com/repos/${user}/` + name + "/commits"
    )
    req.send()
}

function getBranches(element) {
    const name = element.dataset.repository
    const req = new XMLHttpRequest()
    const user = document.getElementById("username").value
    req.addEventListener("load", displayBranches)
    req.open(
        "GET",
        `https://api.github.com/repos/${user}/` + name + "/branches"
    )
    req.send()
}