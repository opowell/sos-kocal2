/* eslint-disable prettier/prettier */
var sos = sos || {};

sos.SUGGESTIONS_PER_SAVE = 2;
sos.doFinish = true;

sos.trimmedUrl = function(url) {
  if (url.includes('://')) {
    url = url.substring(url.indexOf('://') + '://'.length);
  }
  if (url.endsWith('/')) {
    url = url.substring(0, url.length - 1);
  }
  return url;
};

sos.objJoin = function(obj, separator) {
  var arr = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      arr.push(JSON.stringify(obj[key]));
    }
  }
  return arr.join(separator || '\n');
};

sos.getLinksWithResponse = function(sendResponse) {
  let links = sos.getLinks();
  if (sendResponse != null) {
    sendResponse(links);
  }
  if (links.length > 0 && sos.closeAfterScrape) {
    window.close();
  }
};

sos.buildUrl = function(url) {
  if (url.includes('#')) {
    let hashIndex = url.indexOf('#');
    let questionIndex = url.indexOf('?');
    url = url.substring(0, hashIndex) + questionIndex > -1 ? url.substring(questionIndex) : '';
  }
  if (!url.includes('://')) {
    url = sos.trimmedUrl(location.origin) + (url.startsWith('/') ? '' : '/') + sos.trimmedUrl(url);
    url = sos.trimmedUrl(url);
  } else {
    url = sos.trimmedUrl(url);
  }
  return url;
};

sos.getLinksWithResponse = function(sendResponse) {
  let links = sos.getLinks();
  if (sendResponse != null) {
    sendResponse(links);
  }
  if (links.length > 0 && sos.closeAfterScrape) {
    window.close();
  }
};

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log('sos received message: ' + request.action, request, sender, sendResponse);

  if (request.action === 'getScraper') {
    getScraperCallback(request.payload);
  } else if (request.action === 'getSources') {
    let sources = sos.getSources();
    sendResponse({ sources });
  } else if (request.action === 'getUrlSources') {
    let sources = sos.getSourcesForUrl(request.url);
    sendResponse({ sources });
  } else if (request.action === 'getLinks') {
    sos.getLinksWithResponse(sendResponse);
  } else if (request.action === 'getPage') {
    sos.sendPageObj();
  } else if (request.action === 'setUrl') {
    window.location.href = request.url;
  } else {
    console.log('sos unknown message: ' + request.action, request);
    sendResponse({}); // Send nothing..
  }
});

sos.getPage = function() {
  if (sos.scraper == null) {
    console.log('No scraper, stopping.');
    return;
  }
  let links = sos.getLinks();
  let sources = sos.getSources();
  let out = {
    url: sos.trimmedUrl(location.href),
    title: document.title,
    sources,
    links,
    scraperId: sos.scraper.id,
  };
  sos.getPageAttributes(out);
  return out;
};

sos.setIfNotNull = function(scraper, field) {
  if (scraper[field] != null) {
    // eslint-disable-next-line no-eval
    eval(`sos[field] = ${scraper[field]}`);
  }
};

let getScraperCallback = function(response) {
  if (response == null) {
    return;
  }
  if (response.scraper == null) {
    return;
  }
  let { scraper, closeWhenDone } = response;
  if (response.isScraperPage) {
    console.log('THIS IS THE SCRAPING TAB!');
    let elemDiv = document.createElement('div');
    elemDiv.style.cssText =
      'position:fixed;width:100%;height:100%;z-index:999999999;background-color:rgba(0,0,0,0.8);color:#FFF;align-items: center; justify-content: center; display: flex; top: 0; left: 0; font-size: 5rem;';
    elemDiv.innerHTML = '<div style="margin: 5rem;">This tab is scraping pages for GoForward.</div>';
    document.body.appendChild(elemDiv);
  }
  sos.scraper = scraper;
  sos.closeWhenDone = closeWhenDone;

  sos.setIfNotNull(scraper, 'getPageAttributes');
  sos.setIfNotNull(scraper, 'getLinks');
  sos.setIfNotNull(scraper, 'getSources');
  sos.setIfNotNull(scraper, 'getSourcesForUrl');
  sos.setIfNotNull(scraper, 'onScriptLoad');

  sos.onScriptLoad();

  if (sos.doFinish) {
    sos.finishScraperLoad();
  }
};

sos.finishScraperLoad = function() {
  sos.sendPageObj();

  if (sos.closeWhenDone === true) {
    window.close();
  }
};

sos.sendPageObj = function() {
  let page = sos.getPage();
  console.log('got page: ' + JSON.stringify(page));
  chrome.runtime.sendMessage({
    action: 'getPage',
    page,
  });
};

console.log('finished running, sending pageLoaded message');
chrome.runtime.sendMessage({ action: 'pageLoaded' });

// Functions to overwrite in scraper instances.
sos.getLinks = function() {
  return [];
};
sos.getSources = function() {
  return [];
};
sos.getSourcesOfUrl = function() {
  return [];
};
sos.getPageAttributes = function(page) {};
sos.onScriptLoad = function() {};
