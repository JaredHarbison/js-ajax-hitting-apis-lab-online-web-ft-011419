function displayRepositories() {
    var repos = JSON.parse(this.responseText);
    // console.log(this.responseText);
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