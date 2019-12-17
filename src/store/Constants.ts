import { openDB } from 'idb';
import store from '../store/index.js';

export const DB_NAME = 'saveorskip';
export const STORE_LINKS = 'links';
export const STORE_LINKS_PROFILEID = 'profileId';
export const STORE_PROFILES = 'profiles';
export const STORE_SOURCES = 'sources';
export const STORE_SOURCES_PROFILEID = 'profileId';

export const dbPromise = openDB(DB_NAME, 1, {
  upgrade(db, oldVersion, newVersion, transaction) {
    store.state.dbPromise = this;
    if (oldVersion === 0) {
      console.log('Creating stores');

      db.createObjectStore(STORE_PROFILES, { keyPath: 'id', autoIncrement: true });

      let linksStore = db.createObjectStore(STORE_LINKS, { keyPath: [STORE_LINKS_PROFILEID, 'url'] });
      linksStore.createIndex('saved', 'saved', { unique: false });
      linksStore.createIndex(STORE_LINKS_PROFILEID, STORE_LINKS_PROFILEID, { unique: false });
      linksStore.createIndex('url', 'url', { unique: false });

      let sourcesStore = db.createObjectStore(STORE_SOURCES, { keyPath: [STORE_SOURCES_PROFILEID, 'url'] });
      sourcesStore.createIndex(STORE_SOURCES_PROFILEID, STORE_SOURCES_PROFILEID);
      sourcesStore.createIndex('saved', 'saved');
      sourcesStore.createIndex('url', 'url');
    }
  },
});