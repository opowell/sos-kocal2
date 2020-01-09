/* eslint-disable no-undef */
let out = {};

out.name = 'www.reddit.com';
out.domain = 'www.reddit.com';
out.priority = 2;

out.getLinks = function() {
  let links = [];
  if (sos.isOverlaidPost()) {
    return links;
  }

  let linkEls = document.getElementsByClassName('SQnoC3ObvgnGjWt90zD9Z');

  for (let i = 0; i < linkEls.length; i++) {
    let linkEl = linkEls[i];

    // Skip sticky posts.
    if (linkEl.parentElement.parentElement.parentElement.querySelector('.icon-sticky')) {
      continue;
    }

    links.push({
      url: 'http://www.reddit.com' + linkEl.getAttribute('href'),
      title: linkEl.text,
    });
  }
  return links;
};

out.getSources = function(saveOrSkip) {
  let sources = [];
  // REDDIT
  if (sos.trimmedUrl(window.location.href) !== 'www.reddit.com') {
    sources.push({
      url: 'www.reddit.com',
      points: sos[saveOrSkip].SUGGESTIONS_DOMAIN,
    });
  }

  // SUBREDDIT
  try {
    let subreddit = null;
    let name = sos.getSubredditName();
    subreddit = sos.buildUrl(name);
    sources.push({
      url: subreddit,
      points: sos[saveOrSkip].SUGGESTIONS_SUBREDDIT,
    });
  } catch (err) {}

  let posterLink = null;
  try {
    if (sos.isPost()) {
      let user = sos.getPosterName();
      posterLink = sos.buildUrl(user);
      sources.push({
        url: posterLink,
        points: sos[saveOrSkip].SUGGESTIONS_POSTER,
      });
    }
  } catch (err) {}

  if (sos.isPost()) {
    try {
      let commenters = document.getElementsByClassName('_23wugcdiaj44hdfugIAlnX');
      console.log('found ' + commenters.length + ' commenters');
      // Skip author and logged-in user.
      let startAt = 2;
      let skipNames = [];
      let numFound = 0;
      skipNames.push(commenters[0].getAttribute('href'));
      skipNames.push(commenters[1].getAttribute('href'));
      for (let i = startAt; i < commenters.length; i++) {
        let commenterLink = sos.buildUrl(commenters[i].getAttribute('href'));
        if (posterLink !== commenterLink && !skipNames.includes(commenters[i].getAttribute('href'))) {
          skipNames.push(commenters[i].getAttribute('href'));
          numFound++;
          sources.push({
            url: commenterLink,
            points: sos[saveOrSkip].SUGGESTIONS_COMMENTER,
          });
          if (numFound >= sos.MAX_COMMENTERS) {
            break;
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
  return sources;
};

out.getSourcesOfUrl = function() {
  let sources = [];
  let linkEls = document.getElementsByClassName('SQnoC3ObvgnGjWt90zD9Z');
  for (let i = 0; i < linkEls; i++) {
    let url = linkEls[i].getAttribute('href');
    if (!url.includes('://')) {
      url = location.host + '/' + sos.trimmedUrl(url);
    } else {
      url = sos.trimmedUrl(url);
    }
    if (targetUrl === url) {
      sources.push({
        url: sos.trimmedUrl(location.href),
        points: sos[saveOrSkip].URL_SOURCE,
      });
      break;
    }
  }
  console.log('returning sources (' + saveOrSkip + ') of url ' + targetUrl + ':\n' + sos.objJoin(sources, '\n'));
  sendResponse(sources);
};

out.getPageAttributes = function(page) {
  if (sos.isRegularPost()) {
    page.subreddit = sos.getSubredditName();
    page.poster = sos.getPosterName();
  }
};

out.onScriptLoad = function() {
  sos.save = {
    SUGGESTIONS_SUBREDDIT: 3,
    SUGGESTIONS_POSTER: 3,
    SUGGESTIONS_COMMENTER: 1,
    SUGGESTIONS_DOMAIN: 1,
    URL_SOURCE: 1,
  };
  sos.skip = {
    SUGGESTIONS_SUBREDDIT: -2,
    SUGGESTIONS_POSTER: -2,
    SUGGESTIONS_COMMENTER: -1,
    SUGGESTIONS_DOMAIN: 1,
    URL_SOURCE: -1,
  };

  sos.SUBREDDIT_CLASS = '_19bCWnxeTjqzBElWZfIlJb';

  sos.MAX_COMMENTERS = 3;

  sos.isOverlaidPost = function() {
    return document.getElementById('overlayScrollContainer') != null;
  };

  sos.isPageWithLinks = function() {
    return document.getElementsByClassName('rpBJOHq2PR60pnwJlUyP0').length > 0;
  };

  sos.getSubredditName = function() {
    let name = null;
    if (sos.isOverlaidPost()) {
      let els = document.getElementsByClassName('_3ryJoIoycVkA88fy40qNJc');
      name = els[els.length - 1].getAttribute('href');
    } else {
      name = document.getElementsByClassName('_2D7eYuDY6cYGtybECmsxvE')[0].innerText;
    }
    return name;
  };

  sos.isRegularPost = function() {
    return document.getElementsByClassName('_2M2wOqmeoPVvcSsJ6Po9-V').length === 1;
  };

  sos.getPosterName = function() {
    return document.getElementsByClassName('_2tbHP6ZydRpjI44J3syuqC _23wugcdiaj44hdfugIAlnX oQctV4n0yUb0uiHDdGnmE')[0].innerText;
  };

  sos.isPost = function() {
    return sos.isOverlaidPost() || sos.hasRegularPosts();
  };

  sos.hasRegularPosts = function() {
    return document.getElementsByClassName('_2D7eYuDY6cYGtybECmsxvE').length > 0;
  };

  setTimeout(function() {
    sos.finishScraperLoad();
  }, 8000);

  sos.doFinish = false;
};

export default out;
