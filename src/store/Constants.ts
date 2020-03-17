import { openDB } from 'idb';
import { resetState } from '../store/index.js';
import { storeProfile, addScraper, storeSource, addLog } from './idb.js';
import RedditScraper from '../scrapers/reddit.js';
import HackerNewsScraper from '../scrapers/hackernews.js';
import DefaultScraper from '../scrapers/default.js';
import TheGuardianScraper from '../scrapers/theguardian.js';
export const DB_NAME = 'saveorskip';

export const STORE_LINKS = 'links';
export const STORE_LINKS_PROFILEID = 'profileId';
export const STORE_LINKS_TIME_ADDED = 'timeAdded';
export const STORE_LINKS_URL = 'url';
export const INDEX_LINKS_PROFILEID = STORE_LINKS_PROFILEID;
export const INDEX_LINKS_PROFILEID_TIMEADDED = STORE_LINKS_PROFILEID + '_' + STORE_LINKS_TIME_ADDED;

export const STORE_PROFILES = 'profiles';
export const INDEX_PROFILES_AUTOGENERATED = 'autoGenerated';
export const FIELD_PROFILES_AUTOGENERATED = 'autoGenerated';

export const STORE_SOURCES = 'sources';
export const STORE_SOURCES_CONSUMERID = 'consumerId'; // The user of links.
export const STORE_SOURCES_PROVIDERID = 'providerId'; // The provider of links.
export const INDEX_SOURCES_CONSUMERID = STORE_SOURCES_CONSUMERID;

export const STORE_LOGS = 'logs';
export const INDEX_LOGS_PROFILEID = 'profile';
export const INDEX_LOGS_TIME = 'time';

export const STORE_SCRAPERS = 'scrapers';

export let DB_VERSION = 5;

export const INDEX_STORES = [STORE_PROFILES, STORE_SOURCES, STORE_LINKS];
export const KEYPATH_SEPARATOR = '_';

export const getDBVersion = function() {
  return DB_VERSION;
};

export const setDBVersion = function(a) {
  DB_VERSION = a;
  return a;
};

if (!('indexedDB' in window)) {
  console.log("This browser doesn't support IndexedDB");
}

export const reset = async function() {
  addLog({
    objectKeys: [],
    objectType: 'System',
    message: 'Reset database.',
  });
  await storeProfile(
    {
      name: 'myProfile',
      defaultLinkAction: 'save',
      defaultSourceAction: 'forget',
    },
    {}
  );
  let sources = ['www.reddit.com', 'news.ycombinator.com', 'www.theguardian.com/international'];
  for (let i in sources) {
    let srcObj = {
      source: {
        saved: false,
      },
      providerId: sources[i],
      consumerId: 1,
      pointsChange: 5,
      overwrite: false,
    };
    await storeSource(srcObj);
  }
  await addScraper(DefaultScraper);
  await addScraper(RedditScraper);
  await addScraper(HackerNewsScraper);
  await addScraper(TheGuardianScraper);
  resetState();
};

export const setDBPromise = function(dbp) {
  dbPromise = dbp;
};

export const getDBPromise = function() {
  return dbPromise;
};

// When anything below changes, increment DB_VERSION or delete existing database. This forces the database schema to be updated.
let dbPromise = openDB(DB_NAME, DB_VERSION, {
  async upgrade(db, oldVersion, newVersion, transaction) {
    if (oldVersion === 0) {
      console.log('Creating stores');

      let profilesStore = db.createObjectStore(STORE_PROFILES, {
        keyPath: 'id',
        autoIncrement: true,
      });
      profilesStore.createIndex(INDEX_PROFILES_AUTOGENERATED, FIELD_PROFILES_AUTOGENERATED, {
        unique: false,
      });

      let linksStore = db.createObjectStore(STORE_LINKS, {
        keyPath: [STORE_LINKS_PROFILEID, 'url'],
      });
      linksStore.createIndex('saved', 'saved', { unique: false });
      linksStore.createIndex(INDEX_LINKS_PROFILEID, INDEX_LINKS_PROFILEID, { unique: false });
      linksStore.createIndex(INDEX_LINKS_PROFILEID_TIMEADDED, [STORE_LINKS_PROFILEID, STORE_LINKS_TIME_ADDED]);

      let sourcesStore = db.createObjectStore(STORE_SOURCES, { keyPath: [STORE_SOURCES_CONSUMERID, STORE_SOURCES_PROVIDERID] });
      sourcesStore.createIndex(STORE_SOURCES_CONSUMERID, STORE_SOURCES_CONSUMERID);
      sourcesStore.createIndex('saved', 'saved');
      sourcesStore.createIndex('url', 'url');

      let scrapersStore = db.createObjectStore(STORE_SCRAPERS, {
        keyPath: 'id',
        autoIncrement: true,
      });

      let logsStore = db.createObjectStore(STORE_LOGS, {
        keyPath: 'id',
        autoIncrement: true,
      });
      logsStore.createIndex(INDEX_LOGS_PROFILEID, ['objectType', 'objectKeys']);
      logsStore.createIndex(INDEX_LOGS_TIME, INDEX_LOGS_TIME, { unique: false });

      await reset();
    }
  },
  async blocking() {
    (await dbPromise).close();
  },
});
