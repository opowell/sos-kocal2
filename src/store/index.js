import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import * as getters from './getters';
import mutations from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localForage,
});

export default new Vuex.Store({
  state: {
    // Active tab id
    activeTabId: '',

    // Input for new profile
    profileInput: '',

    // Set of profiles.
    profiles: [],

    // Id of current target.
    targetId: '',
    curLink: {
      url: '',
      title: '',
    },
    curSuggestion: null,
    curSuggestionTabId: null,
    profileDuplicate: null,
    sourceDuplicate: null,
    needCurSuggestion: true,
    sourceForCurUrl: null,
    nextSuggestion: null,
    scrapeDelayMS: 1000 * 60 * 60 * 24,
    urlToScrape: null,
  },
  getters,
  mutations,
  actions,
  plugins: [vuexLocal.plugin],
});
