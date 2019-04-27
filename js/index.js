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
}