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
        .join('')}</ul
        
    document.getElementById('details').innerHTML = commitsList;
}