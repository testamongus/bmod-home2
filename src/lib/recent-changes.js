$(document).ready(function () {
  const waitForElement = (selector, callback) => {
    const el = document.querySelector(selector);
    if (el) return callback();
    const observer = new MutationObserver(() => {
      const elNow = document.querySelector(selector);
      if (elNow) {
        observer.disconnect();
        callback();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  };

  waitForElement('.commit-list', function () {
    console.log('Fetching commits...'); // Debug log
      const org = 'dinosaurmod';
      const reposUrl = `https://api.github.com/orgs/${org}/repos?per_page=14`;
      let allCommits = [];

      $.ajax({
        url: reposUrl,
        method: 'GET',
        success: function (repos) {
          let completed = 0;
          if (repos.length === 0) {
            console.log('No repositories found'); // Debug log
            $('#error-message').show();
            return;
          }
          console.log('Repositories fetched:', repos); // Debug log

          repos.forEach(function (repo) {
            const commitsUrl = `https://api.github.com/repos/${org}/${repo.name}/commits?per_page=6`;
            $.ajax({
              url: commitsUrl,
              method: 'GET',
              success: function (commits) {
                console.log('Commits fetched for repo:', repo.name, commits); // Debug log
                allCommits = allCommits.concat(commits);
                completed++;
                if (completed === repos.length) {
                  if (allCommits.length === 0) {
                    $('#error-message').show();
                    return;
                  }
                  console.log('All repositories processed'); // Debug log

                  allCommits.sort((a, b) => new Date(b.commit.author.date) - new Date(a.commit.author.date));
                  const recent = allCommits.slice(0, 6);

                  recent.forEach(commit => {
                    const message = commit.commit.message;
                    const url = commit.html_url;
                    const authorLogin = commit.author ? commit.author.login : 'Unknown';
                    const authorName = commit.commit.author.name;
                    const avatarUrl = commit.author ? commit.author.avatar_url : 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';
                    const date = new Date(commit.commit.author.date).toLocaleString();

                    console.log('Appending commit:', message); // Debug log

                    $('.commit-list').append(`
                      <li class="commit">
                        <img src="${avatarUrl}" alt="avatar" class="avatar">
                        <div class="commit-info">
                          <div class="commit-title">
                            <a href="${url}" target="_blank">${message}</a>
                          </div>
                          <div class="author-name">By ${authorName} (${authorLogin})</div>
                          <div class="commit-date">${date}</div>
                        </div>
                      </li>
                    `);
                  });
                }
              },
              error: function () {
                completed++;
                if (completed === repos.length && allCommits.length === 0) {
                  $('#error-message').show();
                }
              }
            });
          });
        },
        error: function () {
          $('#error-message').show();
        }
      });
  });
});