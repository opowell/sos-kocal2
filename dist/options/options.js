!(function(t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var i = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function(t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function(t) {
      'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (n.t = function(t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if ((n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
        for (var i in t)
          n.d(
            r,
            i,
            function(e) {
              return t[e];
            }.bind(null, i)
          );
      return r;
    }),
    (n.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return n.d(e, 'a', e), e;
    }),
    (n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ''),
    n((n.s = 133));
})([
  function(t, e, n) {
    'use strict';
    n.d(e, 'a', function() {
      return r;
    }),
      n.d(e, 'b', function() {
        return i;
      }),
      n.d(e, 'c', function() {
        return o;
      }),
      n.d(e, 'd', function() {
        return a;
      }),
      n.d(e, 'e', function() {
        return s;
      }),
      n.d(e, 'f', function() {
        return l;
      }),
      n.d(e, 'g', function() {
        return u;
      }),
      n.d(e, 'h', function() {
        return c;
      }),
      n.d(e, 'i', function() {
        return f;
      }),
      n.d(e, 'j', function() {
        return d;
      }),
      n.d(e, 'k', function() {
        return h;
      }),
      n.d(e, 'l', function() {
        return p;
      }),
      n.d(e, 'm', function() {
        return m;
      }),
      n.d(e, 'n', function() {
        return v;
      }),
      n.d(e, 'o', function() {
        return g;
      }),
      n.d(e, 'p', function() {
        return b;
      }),
      n.d(e, 'q', function() {
        return y;
      }),
      n.d(e, 'x', function() {
        return w;
      }),
      n.d(e, 'y', function() {
        return O;
      }),
      n.d(e, 'z', function() {
        return S;
      }),
      n.d(e, 'A', function() {
        return _;
      }),
      n.d(e, 't', function() {
        return k;
      }),
      n.d(e, 's', function() {
        return x;
      }),
      n.d(e, 'B', function() {
        return T;
      }),
      n.d(e, 'u', function() {
        return P;
      }),
      n.d(e, 'v', function() {
        return j;
      }),
      n.d(e, 'w', function() {
        return C;
      }),
      n.d(e, 'r', function() {
        return B;
      }),
      n.d(e, 'C', function() {
        return $;
      });
    var r = 'ADD_PROFILE',
      i = 'ADD_SOURCE',
      o = 'ADD_SOURCES',
      a = 'DELETE_PROFILE',
      s = 'DUPLICATE_PROFILE',
      l = 'DUPLICATE_SOURCE',
      u = 'FETCH_PROFILES',
      c = 'LOAD_LINK',
      f = 'LOAD_LINKS',
      d = 'LOAD_PROFILE',
      h = 'LOAD_PROFILE_STATS',
      p = 'LOAD_SOURCE',
      m = 'LOAD_SOURCES',
      v = 'REMOVE_SOURCE',
      g = 'RENAME_PROFILE',
      b = 'RENAME_SOURCE',
      y = 'SAVE_OR_SKIP_LINK',
      w = 'SET_NEED_CUR_SUGGESTION',
      O = 'SET_NEXT_SUGGESTION',
      S = 'SET_SOURCE_FOR_CUR_URL',
      _ = 'SET_SOURCE_SAVED',
      k = 'SET_CUR_SUGGESTION_TAB_ID',
      x = 'SET_CUR_SUGGESTION',
      T = 'SET_TARGET',
      P = 'SET_CUR_URL',
      j = 'SET_CUR_URL_LINK_STATUS',
      C = 'SET_CUR_URL_SOURCE_STATUS',
      B = 'SET_ACTIVE_TAB_ID',
      $ = 'SET_URL_TO_SCRAPE';
  },
  function(t, e, n) {
    'use strict';
    const r = (t, e) => e.some(e => t instanceof e);
    let i, o;
    const a = new WeakMap(),
      s = new WeakMap(),
      l = new WeakMap(),
      u = new WeakMap(),
      c = new WeakMap();
    let f = {
      get(t, e, n) {
        if (t instanceof IDBTransaction) {
          if ('done' === e) return s.get(t);
          if ('objectStoreNames' === e) return t.objectStoreNames || l.get(t);
          if ('store' === e) return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
        }
        return p(t[e]);
      },
      has: (t, e) => (t instanceof IDBTransaction && ('done' === e || 'store' === e)) || e in t,
    };
    function d(t) {
      return t !== IDBDatabase.prototype.transaction || 'objectStoreNames' in IDBTransaction.prototype
        ? (o || (o = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(t)
          ? function(...e) {
              return t.apply(m(this), e), p(a.get(this));
            }
          : function(...e) {
              return p(t.apply(m(this), e));
            }
        : function(e, ...n) {
            const r = t.call(m(this), e, ...n);
            return l.set(r, e.sort ? e.sort() : [e]), p(r);
          };
    }
    function h(t) {
      return 'function' == typeof t
        ? d(t)
        : (t instanceof IDBTransaction &&
            (function(t) {
              if (s.has(t)) return;
              const e = new Promise((e, n) => {
                const r = () => {
                    t.removeEventListener('complete', i), t.removeEventListener('error', o), t.removeEventListener('abort', o);
                  },
                  i = () => {
                    e(), r();
                  },
                  o = () => {
                    n(t.error), r();
                  };
                t.addEventListener('complete', i), t.addEventListener('error', o), t.addEventListener('abort', o);
              });
              s.set(t, e);
            })(t),
          r(t, i || (i = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])) ? new Proxy(t, f) : t);
    }
    function p(t) {
      if (t instanceof IDBRequest)
        return (function(t) {
          const e = new Promise((e, n) => {
            const r = () => {
                t.removeEventListener('success', i), t.removeEventListener('error', o);
              },
              i = () => {
                e(p(t.result)), r();
              },
              o = () => {
                n(t.error), r();
              };
            t.addEventListener('success', i), t.addEventListener('error', o);
          });
          return (
            e
              .then(e => {
                e instanceof IDBCursor && a.set(e, t);
              })
              .catch(() => {}),
            c.set(e, t),
            e
          );
        })(t);
      if (u.has(t)) return u.get(t);
      const e = h(t);
      return e !== t && (u.set(t, e), c.set(e, t)), e;
    }
    const m = t => c.get(t);
    const v = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
      g = ['put', 'add', 'delete', 'clear'],
      b = new Map();
    function y(t, e) {
      if (!(t instanceof IDBDatabase) || e in t || 'string' != typeof e) return;
      if (b.get(e)) return b.get(e);
      const n = e.replace(/FromIndex$/, ''),
        r = e !== n,
        i = g.includes(n);
      if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || (!i && !v.includes(n))) return;
      const o = async function(t, ...e) {
        const o = this.transaction(t, i ? 'readwrite' : 'readonly');
        let a = o.store;
        r && (a = a.index(e.shift()));
        const s = a[n](...e);
        return i && (await o.done), s;
      };
      return b.set(e, o), o;
    }
    f = (t => ({ get: (e, n, r) => y(e, n) || t.get(e, n, r), has: (e, n) => !!y(e, n) || t.has(e, n) }))(f);
    var w = n(2);
    n.d(e, 'a', function() {
      return O;
    }),
      n.d(e, 'b', function() {
        return S;
      }),
      n.d(e, 'c', function() {
        return _;
      }),
      n.d(e, 'd', function() {
        return k;
      }),
      n.d(e, 'e', function() {
        return x;
      }),
      n.d(e, 'f', function() {
        return T;
      });
    const O = 'links',
      S = 'profileId',
      _ = 'profiles',
      k = 'sources',
      x = 'profileId',
      T = (function(t, e, { blocked: n, upgrade: r, blocking: i } = {}) {
        const o = indexedDB.open(t, e),
          a = p(o);
        return (
          r &&
            o.addEventListener('upgradeneeded', t => {
              r(p(o.result), t.oldVersion, t.newVersion, p(o.transaction));
            }),
          n && o.addEventListener('blocked', () => n()),
          i && a.then(t => t.addEventListener('versionchange', i)).catch(() => {}),
          a
        );
      })('saveorskip', 1, {
        upgrade(t, e, n, r) {
          if (((w.a.state.dbPromise = this), 0 === e)) {
            console.log('Creating stores'), t.createObjectStore(_, { keyPath: 'id', autoIncrement: !0 });
            let e = t.createObjectStore(O, { keyPath: [S, 'url'] });
            e.createIndex('saved', 'saved', { unique: !1 }), e.createIndex(S, S, { unique: !1 }), e.createIndex('url', 'url', { unique: !1 });
            let n = t.createObjectStore(k, { keyPath: [x, 'url'] });
            n.createIndex(x, x), n.createIndex('saved', 'saved'), n.createIndex('url', 'url');
          }
        },
      });
  },
  function(t, e, n) {
    'use strict';
    var r = {};
    n.r(r),
      n.d(r, 'curTarget', function() {
        return g;
      }),
      n.d(r, 'curSourceStatus', function() {
        return b;
      }),
      n.d(r, 'getUrlLinkStatus', function() {
        return y;
      }),
      n.d(r, 'getUrlSourceStatus', function() {
        return w;
      }),
      n.d(r, 'getLinks', function() {
        return O;
      });
    var i = {};
    n.r(i),
      n.d(i, 'setTarget', function() {
        return j;
      }),
      n.d(i, 'setCurUrl', function() {
        return C;
      }),
      n.d(i, 'setCurUrlLinkStatus', function() {
        return B;
      }),
      n.d(i, 'setCurUrlSourceStatus', function() {
        return $;
      }),
      n.d(i, 'setUrlToScrape', function() {
        return A;
      }),
      n.d(i, 'addProfile', function() {
        return E;
      }),
      n.d(i, 'saveOrSkipLink', function() {
        return I;
      }),
      n.d(i, 'addSources', function() {
        return D;
      }),
      n.d(i, 'removeSource', function() {
        return N;
      }),
      n.d(i, 'deleteProfile', function() {
        return F;
      }),
      n.d(i, 'renameProfile', function() {
        return R;
      }),
      n.d(i, 'duplicateProfile', function() {
        return L;
      }),
      n.d(i, 'renameSource', function() {
        return V;
      }),
      n.d(i, 'duplicateSource', function() {
        return M;
      }),
      n.d(i, 'setNeedCurSuggestion', function() {
        return H;
      }),
      n.d(i, 'setSourceForCurUrl', function() {
        return z;
      }),
      n.d(i, 'setSourceSaved', function() {
        return G;
      }),
      n.d(i, 'setCurSuggestionTabId', function() {
        return U;
      }),
      n.d(i, 'setCurSuggestion', function() {
        return W;
      }),
      n.d(i, 'setActiveTabId', function() {
        return q;
      }),
      n.d(i, 'setNextSuggestion', function() {
        return K;
      }),
      n.d(i, 'fetchProfiles', function() {
        return J;
      }),
      n.d(i, 'loadLinks', function() {
        return X;
      }),
      n.d(i, 'loadProfile', function() {
        return Y;
      });
    var o = n(12),
      a = n(61),
      s = n(75),
      l = n.n(s);
    let u;
    u = class {
      get length() {
        return Object.keys(this).length;
      }
      key(t) {
        return Object.keys(this)[t];
      }
      setItem(t, e) {
        this[t] = e.toString();
      }
      getItem(t) {
        return this[t];
      }
      removeItem(t) {
        delete this[t];
      }
      clear() {
        for (const t of Object.keys(this)) delete this[t];
      }
    };
    class c {
      constructor() {
        (this._queue = []), (this._flushing = !1);
      }
      enqueue(t) {
        return this._queue.push(t), this._flushing ? Promise.resolve() : this.flushQueue();
      }
      flushQueue() {
        this._flushing = !0;
        const t = () => {
          const e = this._queue.shift();
          if (e) return e.then(t);
          this._flushing = !1;
        };
        return Promise.resolve(t());
      }
    }
    function f(t, e) {
      return l()({}, t, e);
    }
    let d = JSON;
    var h,
      p = class {
        constructor(t) {
          (this._mutex = new c()),
            (this.subscriber = t => e => t.subscribe(e)),
            void 0 === t && (t = {}),
            (this.key = null != t.key ? t.key : 'vuex'),
            (this.subscribed = !1),
            (this.supportCircular = t.supportCircular || !1),
            this.supportCircular && (d = n(93)),
            (this.storage = t.storage || window.localStorage),
            (this.reducer = null != t.reducer ? t.reducer : null == t.modules ? t => t : e => t.modules.reduce((t, n) => f(t, { [n]: e[n] }), {})),
            (this.filter = t.filter || (t => !0)),
            (this.strictMode = t.strictMode || !1),
            (this.RESTORE_MUTATION = function(t, e) {
              const n = f(t, e || {});
              for (const e of Object.keys(n)) this._vm.$set(t, e, n[e]);
            }),
            (this.asyncStorage = t.asyncStorage || !1),
            this.asyncStorage
              ? ((this.restoreState =
                  null != t.restoreState
                    ? t.restoreState
                    : (t, e) => e.getItem(t).then(t => ('string' == typeof t ? (this.supportCircular ? d.parse(t || '{}') : JSON.parse(t || '{}')) : t || {}))),
                (this.saveState =
                  null != t.saveState ? t.saveState : (t, e, n) => n.setItem(t, this.asyncStorage ? f({}, e || {}) : this.supportCircular ? d.stringify(e) : JSON.stringify(e))),
                (this.plugin = t => {
                  t.restored = this.restoreState(this.key, this.storage).then(e => {
                    this.strictMode ? t.commit('RESTORE_MUTATION', e) : t.replaceState(f(t.state, e || {})),
                      this.subscriber(t)((t, e) => {
                        this.filter(t) && this._mutex.enqueue(this.saveState(this.key, this.reducer(e), this.storage));
                      }),
                      (this.subscribed = !0);
                  });
                }))
              : ((this.restoreState =
                  null != t.restoreState
                    ? t.restoreState
                    : (t, e) => {
                        const n = e.getItem(t);
                        return 'string' == typeof n ? (this.supportCircular ? d.parse(n || '{}') : JSON.parse(n || '{}')) : n || {};
                      }),
                (this.saveState = null != t.saveState ? t.saveState : (t, e, n) => n.setItem(t, this.supportCircular ? d.stringify(e) : JSON.stringify(e))),
                (this.plugin = t => {
                  const e = this.restoreState(this.key, this.storage);
                  this.strictMode ? t.commit('RESTORE_MUTATION', e) : t.replaceState(f(t.state, e || {})),
                    this.subscriber(t)((t, e) => {
                      this.filter(t) && this.saveState(this.key, this.reducer(e), this.storage);
                    }),
                    (this.subscribed = !0);
                }));
        }
      },
      m = (n(54), n(1)),
      v = n(13),
      g = function(t) {
        for (var e = 0; e < t.profiles.length; e++) if (t.profiles[e].id == t.targetId) return t.profiles[e];
        return null;
      },
      b = function(t, e) {
        if (null == e.curTarget) return 'neither';
        m.f.then(function(e) {
          var n, r;
          return regeneratorRuntime.async(
            function(i) {
              for (;;)
                switch ((i.prev = i.next)) {
                  case 0:
                    return (n = e.transaction(m.d, 'readonly')), (i.prev = 1), (i.next = 4), regeneratorRuntime.awrap(e.get(m.d, [t.targetId, t.curLink.url]));
                  case 4:
                    if (null != (r = i.sent)) {
                      i.next = 7;
                      break;
                    }
                    return i.abrupt('return', 'neither');
                  case 7:
                    return i.abrupt('return', r.saved ? 'saved' : 'unsaved');
                  case 10:
                    (i.prev = 10), (i.t0 = i.catch(1)), console.log(i.t0), console.log(i.t0.stack), n.abort();
                  case 15:
                  case 'end':
                    return i.stop();
                }
            },
            null,
            null,
            [[1, 10]]
          );
        });
      },
      y = function(t, e) {
        return function(e) {
          return null == t.targetId
            ? (console.log('no current target'), 'neither')
            : null == e
            ? (console.log('no link'), 'neither')
            : ((e = Object(v.b)(e)),
              console.log('1. checking link status of ' + t.targetId + '/' + e),
              void m.f.then(function(n) {
                var r;
                return regeneratorRuntime.async(
                  function(i) {
                    for (;;)
                      switch ((i.prev = i.next)) {
                        case 0:
                          return (i.prev = 0), console.log('2. running query'), (i.next = 4), regeneratorRuntime.awrap(n.get(m.a, [t.targetId - 0, e]));
                        case 4:
                          if (((r = i.sent), console.log('3. check null'), null != r)) {
                            i.next = 8;
                            break;
                          }
                          return i.abrupt('return', 'neither');
                        case 8:
                          return console.log('4. returning ' + r.saved), (t.curLinkStatus = r.saved ? 'saved' : 'unsaved'), i.abrupt('return', t.curLinkStatus);
                        case 13:
                          (i.prev = 13), (i.t0 = i.catch(0)), console.log(i.t0), console.log(i.t0.stack);
                        case 17:
                        case 'end':
                          return i.stop();
                      }
                  },
                  null,
                  null,
                  [[0, 13]]
                );
              }));
        };
      },
      w = function(t, e) {
        return function(n) {
          return null == e.curTarget
            ? (console.log('no current target'), 'neither')
            : null == n
            ? (console.log('no source'), 'neither')
            : (console.log('checking source status of ' + t.targetId + '/' + n),
              void m.f.then(function(e) {
                var r;
                return regeneratorRuntime.async(
                  function(i) {
                    for (;;)
                      switch ((i.prev = i.next)) {
                        case 0:
                          return (i.prev = 0), (i.next = 3), regeneratorRuntime.awrap(e.get(m.d, [t.targetId, n]));
                        case 3:
                          if (null != (r = i.sent)) {
                            i.next = 6;
                            break;
                          }
                          return i.abrupt('return', 'neither');
                        case 6:
                          return i.abrupt('return', r.saved ? 'saved' : 'unsaved');
                        case 9:
                          (i.prev = 9), (i.t0 = i.catch(0)), console.log(i.t0), console.log(i.t0.stack);
                        case 13:
                        case 'end':
                          return i.stop();
                      }
                  },
                  null,
                  null,
                  [[0, 9]]
                );
              }));
        };
      },
      O = function(t, e) {
        return function(t) {
          var e = [];
          return (
            m.f.then(function(n) {
              var r;
              return regeneratorRuntime.async(
                function(i) {
                  for (;;)
                    switch ((i.prev = i.next)) {
                      case 0:
                        return (
                          'links',
                          (r = n.transaction('links', 'readonly')),
                          (i.prev = 2),
                          console.log('Get links: Profile.id=' + t),
                          (i.next = 6),
                          regeneratorRuntime.awrap(n.getAllFromIndex('links', 'profileId'))
                        );
                      case 6:
                        (e = i.sent), console.log('found ' + e.length + ' links'), (i.next = 15);
                        break;
                      case 10:
                        (i.prev = 10), (i.t0 = i.catch(2)), r.abort(), console.log(i.t0), console.log(i.t0.stack);
                      case 15:
                      case 'end':
                        return i.stop();
                    }
                },
                null,
                null,
                [[2, 10]]
              );
            }),
            e
          );
        };
      },
      S = (n(51), n(45), n(52), n(53), n(62), n(0)),
      _ = n(30),
      k = n(55);
    function x(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var T =
      (x((h = {}), S.g, function(t, e) {
        t.profiles.splice(0, t.profiles.length);
        for (var n = 0; n < e.length; n++) t.profiles.push(e[n]);
      }),
      x(h, S.v, function(t, e) {
        t.curUrlAsLink = e;
      }),
      x(h, S.w, function(t, e) {
        t.curUrlAsSource = e;
      }),
      x(h, S.a, function(t, e) {
        var n = new _.a(e);
        t.profiles.push(n);
      }),
      x(h, S.b, function(t, e) {
        t.sources.push(e);
      }),
      x(h, S.j, function(t, e) {
        t.profile = e;
      }),
      x(h, S.k, function(t, e) {
        t.profileStats = e;
      }),
      x(h, S.i, function(t, e) {
        t.links.splice(0, t.links.length);
        for (var n = 0; n < e.length; n++) t.links.push(e[n]);
      }),
      x(h, S.h, function(t, e) {
        t.link = e;
      }),
      x(h, S.l, function(t, e) {
        t.source = e;
      }),
      x(h, S.m, function(t, e) {
        t.sources.splice(0, t.sources.length);
        for (var n = 0; n < e.length; n++) t.sources.push(e[n]);
      }),
      x(h, S.A, function(t, e) {
        var n = P(t, e.targetId);
        _.a.setSourceSaved(n, e.source, e.saved);
      }),
      x(h, S.n, function(t, e) {
        var n = P(t, e.targetId);
        _.a.removeSource(n, e.url);
      }),
      x(h, S.B, function(t, e) {
        t.targetId = e;
      }),
      x(h, S.d, function(t, e) {
        for (var n = 0; n < t.profiles.length; n++)
          if (t.profiles[n].id === e.profileId) {
            t.profiles.splice(n, 1);
            break;
          }
      }),
      x(h, S.o, function(t, e) {
        m.f.then(function(n) {
          var r, i, o;
          return regeneratorRuntime.async(
            function(a) {
              for (;;)
                switch ((a.prev = a.next)) {
                  case 0:
                    return (r = n.transaction(m.c, 'readwrite')), (a.prev = 1), (a.next = 4), regeneratorRuntime.awrap(n.get(m.c, e.profileId));
                  case 4:
                    return ((i = a.sent).name = e.newName), (a.next = 8), regeneratorRuntime.awrap(n.put(m.c, i));
                  case 8:
                    o = 0;
                  case 9:
                    if (!(o < t.profiles.length)) {
                      a.next = 16;
                      break;
                    }
                    if (t.profiles[o].name !== e.profileId) {
                      a.next = 13;
                      break;
                    }
                    return (t.profiles[o].name = e.newName), a.abrupt('return');
                  case 13:
                    o++, (a.next = 9);
                    break;
                  case 16:
                    a.next = 23;
                    break;
                  case 18:
                    (a.prev = 18), (a.t0 = a.catch(1)), console.log(a.t0), console.log(a.t0.stack), r.abort();
                  case 23:
                  case 'end':
                    return a.stop();
                }
            },
            null,
            null,
            [[1, 18]]
          );
        });
      }),
      x(h, S.p, function(t, e) {
        for (var n = 0; n < t.profiles.length; n++)
          if (t.profiles[n].name === e.profileId)
            for (var r = t.profiles[n], i = Object.keys(r.sources), o = 0; o < i.length; o++)
              if (r.sources[i[o]] === e.sourceId) {
                var a = i[o],
                  s = r.sources[a];
                return (s.url = e.newName), delete r.sources[a], void (r.sources[e.newName] = s);
              }
      }),
      x(h, S.u, function(t, e) {
        (e.url = Object(v.b)(e.url)), (t.curLink = e);
      }),
      x(h, S.C, function(t, e) {
        t.urlToScrape = Object(v.b)(e);
      }),
      x(h, S.e, function(t, e) {
        for (var n, r = P(t, e.profileId), i = !0, o = 0; i; ) {
          o++, (n = r.name + o), (i = !1);
          for (var a = 0; a < t.profiles.length; a++)
            if (t.profiles[a].name === n) {
              i = !0;
              break;
            }
        }
        var s = new _.a(n);
        for (var l in r.links) _.a.setLink(s, r.links[l], r.links[l].saved);
        for (var u in r.sources) _.a.addSources(s, [r.sources[u]]);
        t.profiles.push(s), (t.profileDuplicate = s);
      }),
      x(h, S.f, function(t, e) {
        for (var n, r = P(t, e.profileId), i = !0, o = 0; i; ) o++, (n = e.sourceId + o), (i = null == r.sources[n]);
        var a = r.sources[e.sourceId],
          s = Object(k.a)(n);
        (s.saved = a.saved), (s.lastScraped = a.lastScraped), (s.nextScrape = a.nextScrape), (s.points = a.points), (r.sources[n] = s), (t.sourceDuplicate = s);
      }),
      x(h, S.x, function(t, e) {
        t.needCurSuggestion = e.value;
      }),
      x(h, S.z, function(t, e) {
        t.sourceForCurUrl = e.url;
      }),
      x(h, S.t, function(t, e) {
        t.curSuggestionTabId = e.tabId;
      }),
      x(h, S.r, function(t, e) {
        t.activeTabId = e.tabId;
      }),
      x(h, S.s, function(t, e) {
        t.curSuggestion = e.url;
      }),
      x(h, S.y, function(t, e) {
        t.nextSuggestion = e.url;
      }),
      h);
    function P(t, e) {
      for (var n = null, r = 0; r < t.profiles.length; r++) t.profiles[r].name === e && (n = t.profiles[r]);
      return n;
    }
    var j = function(t, e) {
        (0, t.commit)(S.B, e);
      },
      C = function(t, e) {
        (0, t.commit)(S.u, e);
      },
      B = function(t, e) {
        (0, t.commit)(S.v, e);
      },
      $ = function(t, e) {
        (0, t.commit)(S.w, e);
      },
      A = function(t, e) {
        (0, t.commit)(S.C, e);
      },
      E = function(t, e) {
        (0, t.commit)(S.a, e);
      },
      I = function(t, e) {
        (0, t.commit)(S.q, e);
      },
      D = function(t, e) {
        (0, t.commit)(S.c, e);
      },
      N = function(t, e) {
        (0, t.commit)(S.n, e);
      },
      F = function(t, e) {
        (0, t.commit)(S.d, e);
      },
      R = function(t, e) {
        (0, t.commit)(S.o, e);
      },
      L = function(t, e) {
        (0, t.commit)(S.e, e);
      },
      V = function(t, e) {
        (0, t.commit)(S.p, e);
      },
      M = function(t, e) {
        (0, t.commit)(S.f, e);
      },
      H = function(t, e) {
        (0, t.commit)(S.x, e);
      },
      z = function(t, e) {
        (0, t.commit)(S.z, e);
      },
      G = function(t, e) {
        (0, t.commit)(S.A, e);
      },
      U = function(t, e) {
        (0, t.commit)(S.t, e);
      },
      W = function(t, e) {
        (0, t.commit)(S.s, e);
      },
      q = function(t, e) {
        (0, t.commit)(S.r, e);
      },
      K = function(t, e) {
        (0, t.commit)(S.y, e);
      },
      J = function(t, e) {
        (0, t.commit)(S.g, e);
      },
      X = function(t, e) {
        (0, t.commit)(S.i, e);
      },
      Y = function(t, e) {
        (0, t.commit)(S.j, e);
      };
    o.default.use(a.a);
    var Z = new p({
      key: 'saveorskip',
      storage: window.localStorage,
      reducer: function(t) {
        return { activeTabId: t.activeTabId, curLink: t.curLink, targetId: t.targetId };
      },
    });
    e.a = new a.a.Store({
      state: {
        activeTabId: '',
        profileInput: '',
        profile: null,
        profileStats: null,
        profiles: [],
        links: [],
        source: null,
        sources: [],
        link: null,
        targetId: '',
        curLink: { url: '', title: '' },
        curUrlAsLink: null,
        curUrlAsSource: null,
        curSuggestion: null,
        curSuggestionTabId: null,
        profileDuplicate: null,
        sourceDuplicate: null,
        needCurSuggestion: !0,
        sourceForCurUrl: null,
        nextSuggestion: null,
        scrapeDelayMS: 864e5,
        urlToScrape: null,
        dbPromise: null,
      },
      getters: r,
      mutations: T,
      actions: i,
      plugins: [Z.plugin],
    });
  },
  function(t, e) {
    var n = (t.exports = 'undefined' != typeof window && window.Math == Math ? window : 'undefined' != typeof self && self.Math == Math ? self : Function('return this')());
    'number' == typeof __g && (__g = n);
  },
  function(t, e, n) {
    var r = n(22)('wks'),
      i = n(18),
      o = n(3).Symbol,
      a = 'function' == typeof o;
    (t.exports = function(t) {
      return r[t] || (r[t] = (a && o[t]) || (a ? o : i)('Symbol.' + t));
    }).store = r;
  },
  function(t, e, n) {
    'use strict';
    (function(t) {
      n.d(e, 'i', function() {
        return r;
      }),
        n.d(e, 'b', function() {
          return i;
        }),
        n.d(e, 'g', function() {
          return a;
        }),
        n.d(e, 'd', function() {
          return s;
        }),
        n.d(e, 'j', function() {
          return l;
        }),
        n.d(e, 'k', function() {
          return c;
        }),
        n.d(e, 'e', function() {
          return f;
        }),
        n.d(e, 'h', function() {
          return d;
        }),
        n.d(e, 'f', function() {
          return h;
        }),
        n.d(e, 'c', function() {
          return p;
        }),
        n.d(e, 'a', function() {
          return m;
        });
      var r = 'undefined' != typeof window,
        i = 'undefined' != typeof document,
        o = 'undefined' != typeof navigator,
        a = 'undefined' != typeof Promise,
        s = 'undefined' != typeof MutationObserver || 'undefined' != typeof WebKitMutationObserver || 'undefined' != typeof MozMutationObserver,
        l = r && i && o,
        u = l ? window.navigator.userAgent.toLowerCase() : '',
        c = u.indexOf('jsdom') > 0,
        f =
          (/msie|trident/.test(u),
          (function() {
            var t = !1;
            if (l)
              try {
                var e = {
                  get passive() {
                    t = !0;
                  },
                };
                window.addEventListener('test', e, e), window.removeEventListener('test', e, e);
              } catch (e) {
                t = !1;
              }
            return t;
          })()),
        d = l && ('ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0),
        h = l && Boolean(window.PointerEvent || window.MSPointerEvent),
        p = l && 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype,
        m = function() {
          return (function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              r = void 0 !== t && t ? Object({ NODE_ENV: 'production' }) || !1 : {};
            return e ? r[e] || n : r;
          })('BOOTSTRAP_VUE_NO_WARN');
        };
    }.call(this, n(80)));
  },
  function(t, e, n) {
    var r = n(3),
      i = n(10),
      o = n(9),
      a = n(23),
      s = n(33),
      l = function(t, e, n) {
        var u,
          c,
          f,
          d,
          h = t & l.F,
          p = t & l.G,
          m = t & l.S,
          v = t & l.P,
          g = t & l.B,
          b = p ? r : m ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
          y = p ? i : i[e] || (i[e] = {}),
          w = y.prototype || (y.prototype = {});
        for (u in (p && (n = e), n))
          (f = ((c = !h && b && void 0 !== b[u]) ? b : n)[u]),
            (d = g && c ? s(f, r) : v && 'function' == typeof f ? s(Function.call, f) : f),
            b && a(b, u, f, t & l.U),
            y[u] != f && o(y, u, d),
            v && w[u] != f && (w[u] = f);
      };
    (r.core = i), (l.F = 1), (l.G = 2), (l.S = 4), (l.P = 8), (l.B = 16), (l.W = 32), (l.U = 64), (l.R = 128), (t.exports = l);
  },
  function(t, e) {
    t.exports = function(t) {
      return 'object' == typeof t ? null !== t : 'function' == typeof t;
    };
  },
  function(t, e, n) {
    'use strict';
    n.d(e, 'h', function() {
      return l;
    }),
      n.d(e, 'j', function() {
        return u;
      }),
      n.d(e, 'g', function() {
        return c;
      }),
      n.d(e, 'f', function() {
        return f;
      }),
      n.d(e, 'i', function() {
        return d;
      }),
      n.d(e, 'c', function() {
        return h;
      }),
      n.d(e, 'l', function() {
        return p;
      }),
      n.d(e, 'm', function() {
        return m;
      }),
      n.d(e, 'e', function() {
        return v;
      }),
      n.d(e, 'd', function() {
        return g;
      }),
      n.d(e, 'b', function() {
        return b;
      }),
      n.d(e, 'n', function() {
        return y;
      }),
      n.d(e, 'k', function() {
        return w;
      }),
      n.d(e, 'a', function() {
        return O;
      }),
      n.d(e, 'o', function() {
        return S;
      }),
      n.d(e, 'p', function() {
        return _;
      });
    n(53), n(62), n(97), n(51), n(45), n(52), n(112), n(54);
    var r = n(2),
      i = n(1),
      o = n(13),
      a = n(30),
      s = n(0);
    function l(t) {
      i.f.then(function(e) {
        var n, o;
        return regeneratorRuntime.async(
          function(a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (a.prev = 0), (a.next = 3), regeneratorRuntime.awrap(e.get(i.c, t.profileId - 0));
                case 3:
                  if (((n = a.sent), r.a.commit(s.j, n), null == n)) {
                    a.next = 14;
                    break;
                  }
                  return (o = {}), (a.next = 9), regeneratorRuntime.awrap(e.countFromIndex(i.a, 'profileId', n.id));
                case 9:
                  return (o.numLinks = a.sent), (a.next = 12), regeneratorRuntime.awrap(e.countFromIndex(i.d, 'profileId', n.id));
                case 12:
                  (o.numSources = a.sent), r.a.commit(s.k, o);
                case 14:
                  a.next = 20;
                  break;
                case 16:
                  (a.prev = 16), (a.t0 = a.catch(0)), console.log(a.t0), console.log(a.t0.stack);
                case 20:
                case 'end':
                  return a.stop();
              }
          },
          null,
          null,
          [[0, 16]]
        );
      });
    }
    function u(t) {
      i.f.then(function(e) {
        var n;
        return regeneratorRuntime.async(
          function(o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  return (o.prev = 0), (o.next = 3), regeneratorRuntime.awrap(e.getAllFromIndex(i.d, i.e, t.profileId - 0));
                case 3:
                  if (null != (n = o.sent)) {
                    o.next = 6;
                    break;
                  }
                  return o.abrupt('return');
                case 6:
                  r.a.commit(s.m, n), (o.next = 13);
                  break;
                case 9:
                  (o.prev = 9), (o.t0 = o.catch(0)), console.log(o.t0), console.log(o.t0.stack);
                case 13:
                case 'end':
                  return o.stop();
              }
          },
          null,
          null,
          [[0, 9]]
        );
      });
    }
    function c(t) {
      return regeneratorRuntime.async(function(e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (
                (e.next = 2),
                regeneratorRuntime.awrap(
                  i.f.then(function(e) {
                    var n;
                    return regeneratorRuntime.async(
                      function(o) {
                        for (;;)
                          switch ((o.prev = o.next)) {
                            case 0:
                              return (o.prev = 0), (o.next = 3), regeneratorRuntime.awrap(e.getAllFromIndex(i.a, i.b, t.profileId - 0));
                            case 3:
                              if (null != (n = o.sent)) {
                                o.next = 6;
                                break;
                              }
                              return o.abrupt('return');
                            case 6:
                              r.a.commit(s.i, n), (o.next = 13);
                              break;
                            case 9:
                              (o.prev = 9), (o.t0 = o.catch(0)), console.log(o.t0), console.log(o.t0.stack);
                            case 13:
                            case 'end':
                              return o.stop();
                          }
                      },
                      null,
                      null,
                      [[0, 9]]
                    );
                  })
                )
              );
            case 2:
            case 'end':
              return e.stop();
          }
      });
    }
    function f(t) {
      var e = t.profileId,
        n = t.linkId;
      i.f.then(function(t) {
        var o;
        return regeneratorRuntime.async(
          function(a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (a.prev = 0), (a.next = 3), regeneratorRuntime.awrap(t.get(i.a, [e - 0, n]));
                case 3:
                  if (null != (o = a.sent)) {
                    a.next = 6;
                    break;
                  }
                  return a.abrupt('return');
                case 6:
                  r.a.commit(s.h, o), (a.next = 13);
                  break;
                case 9:
                  (a.prev = 9), (a.t0 = a.catch(0)), console.log(a.t0), console.log(a.t0.stack);
                case 13:
                case 'end':
                  return a.stop();
              }
          },
          null,
          null,
          [[0, 9]]
        );
      });
    }
    function d(t) {
      i.f.then(function(e) {
        var n;
        return regeneratorRuntime.async(
          function(o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  return (o.prev = 0), (o.next = 3), regeneratorRuntime.awrap(e.get(i.d, t));
                case 3:
                  if (null != (n = o.sent)) {
                    o.next = 6;
                    break;
                  }
                  return o.abrupt('return');
                case 6:
                  r.a.commit(s.l, n), (o.next = 13);
                  break;
                case 9:
                  (o.prev = 9), (o.t0 = o.catch(0)), console.log(o.t0), console.log(o.t0.stack);
                case 13:
                case 'end':
                  return o.stop();
              }
          },
          null,
          null,
          [[0, 9]]
        );
      });
    }
    function h(t) {
      var e = t.profileId,
        n = t.linkId;
      i.f.then(function(t) {
        return regeneratorRuntime.async(
          function(o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  return (o.prev = 0), (o.next = 3), regeneratorRuntime.awrap(t.delete(i.a, [e - 0, n]));
                case 3:
                  r.a.commit(s.h, void 0), (o.next = 10);
                  break;
                case 6:
                  (o.prev = 6), (o.t0 = o.catch(0)), console.log(o.t0), console.log(o.t0.stack);
                case 10:
                case 'end':
                  return o.stop();
              }
          },
          null,
          null,
          [[0, 6]]
        );
      });
    }
    function p(t) {
      (t.profileId = t.profileId - 0),
        i.f.then(function(e) {
          return regeneratorRuntime.async(
            function(n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (n.prev = 0), (n.next = 3), regeneratorRuntime.awrap(e.put(i.a, t));
                  case 3:
                    n.next = 9;
                    break;
                  case 5:
                    (n.prev = 5), (n.t0 = n.catch(0)), console.log(n.t0), console.log(n.t0.stack);
                  case 9:
                  case 'end':
                    return n.stop();
                }
            },
            null,
            null,
            [[0, 5]]
          );
        });
    }
    function m(t, e) {
      i.f.then(function(n) {
        return regeneratorRuntime.async(
          function(r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (r.prev = 0), (r.next = 3), regeneratorRuntime.awrap(n.put(t, e));
                case 3:
                  r.next = 9;
                  break;
                case 5:
                  (r.prev = 5), (r.t0 = r.catch(0)), console.log(r.t0), console.log(r.t0.stack);
                case 9:
                case 'end':
                  return r.stop();
              }
          },
          null,
          null,
          [[0, 5]]
        );
      });
    }
    function v() {
      i.f.then(function(t) {
        var e, n, o, a, s;
        return regeneratorRuntime.async(function(l) {
          for (;;)
            switch ((l.prev = l.next)) {
              case 0:
                return (e = t.transaction(i.c)), (n = e.objectStore(i.c)), (l.next = 4), regeneratorRuntime.awrap(n.getAll());
              case 4:
                (o = l.sent), (a = []), (s = 0);
              case 7:
                if (!(s < o.length)) {
                  l.next = 18;
                  break;
                }
                return (l.next = 10), regeneratorRuntime.awrap(t.countFromIndex(i.a, i.b, o[s].id));
              case 10:
                return (o[s].links = l.sent), (l.next = 13), regeneratorRuntime.awrap(t.countFromIndex(i.d, i.e, o[s].id));
              case 13:
                (o[s].sources = l.sent), a.push(o[s]);
              case 15:
                s++, (l.next = 7);
                break;
              case 18:
                return (l.next = 20), regeneratorRuntime.awrap(e.done);
              case 20:
                r.a.dispatch('fetchProfiles', a);
              case 21:
              case 'end':
                return l.stop();
            }
        });
      });
    }
    function g(t) {
      i.f.then(function(e) {
        var n, o;
        return regeneratorRuntime.async(
          function(a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (n = e.transaction(i.c, 'readwrite')), (o = n.objectStore(i.c)), (a.prev = 2), (a.next = 5), regeneratorRuntime.awrap(o.delete(t.profileId));
                case 5:
                  r.a.dispatch('deleteProfile', t), (a.next = 13);
                  break;
                case 8:
                  (a.prev = 8), (a.t0 = a.catch(2)), n.abort(), console.log(a.t0), console.log(a.t0.stack);
                case 13:
                case 'end':
                  return a.stop();
              }
          },
          null,
          null,
          [[2, 8]]
        );
      });
    }
    function b(t) {
      i.f.then(function(e) {
        var n = e.transaction(i.d, 'readwrite'),
          o = n.objectStore(i.d);
        return Promise.all(
          t.sources.map(function(t) {
            return regeneratorRuntime.async(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    console.log('Storing source:', t), o.put(t), r.a.commit(s.b, t);
                  case 3:
                  case 'end':
                    return e.stop();
                }
            });
          })
        )
          .catch(function(t) {
            n.abort(), console.log(t);
          })
          .then(function() {
            console.log('Sources "' + JSON.stringify(t.sources) + '" stored successfully.');
          });
      });
    }
    function y(t) {
      return regeneratorRuntime.async(function(e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (
                (e.next = 2),
                regeneratorRuntime.awrap(
                  i.f.then(function(e) {
                    var n, r, a, s;
                    return regeneratorRuntime.async(function(l) {
                      for (;;)
                        switch ((l.prev = l.next)) {
                          case 0:
                            if (
                              ((n = i.a),
                              (r = { url: Object(o.b)(t.link.url), title: t.link.title, saved: 'save' === t.action, profileId: t.targetId - 0, timeSaved: new Date() }),
                              null != t.props)
                            )
                              for (a = Object.keys(t.props), s = 0; s < a.length; s++) r[a[s]] = t.props[s];
                            return console.log('Storing link:', r), (l.next = 6), regeneratorRuntime.awrap(e.put(n, r));
                          case 6:
                            return console.log('Link "' + t.link.url + '" stored successfully.'), (l.next = 9), regeneratorRuntime.awrap(S());
                          case 9:
                            chrome.runtime.sendMessage('save');
                          case 10:
                          case 'end':
                            return l.stop();
                        }
                    });
                  })
                )
              );
            case 2:
            case 'end':
              return e.stop();
          }
      });
    }
    function w(t) {
      return regeneratorRuntime.async(function(e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (
                (e.next = 2),
                regeneratorRuntime.awrap(
                  i.f.then(function(e) {
                    var n;
                    return regeneratorRuntime.async(function(r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (n = i.a), (r.next = 3), regeneratorRuntime.awrap(e.delete(n, [t.targetId, t.url]));
                          case 3:
                            return (r.next = 5), regeneratorRuntime.awrap(S());
                          case 5:
                          case 'end':
                            return r.stop();
                        }
                    });
                  })
                )
              );
            case 2:
            case 'end':
              return e.stop();
          }
      });
    }
    function O(t) {
      var e = new a.a(t);
      i.f.then(function(t) {
        var n, o;
        return regeneratorRuntime.async(
          function(a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (
                    (n = t.transaction(i.c, 'readwrite')),
                    (o = n.objectStore(i.c)),
                    (a.prev = 2),
                    (a.next = 5),
                    regeneratorRuntime.awrap(
                      Promise.all(
                        [e].map(function(t) {
                          var e = { name: t.name };
                          o.put(e), r.a.commit(s.a, e.name);
                        })
                      )
                    )
                  );
                case 5:
                  v(), (a.next = 13);
                  break;
                case 8:
                  (a.prev = 8), (a.t0 = a.catch(2)), n.abort(), console.log(a.t0), console.log(a.t0.stack);
                case 13:
                case 'end':
                  return a.stop();
              }
          },
          null,
          null,
          [[2, 8]]
        );
      });
    }
    function S() {
      var t;
      return regeneratorRuntime.async(function(e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (((t = r.a.state.curLink.url), console.log('setting current url as link: ' + r.a.state.targetId + '/' + t), null != r.a.state.targetId)) {
                e.next = 6;
                break;
              }
              return console.log('no current target'), r.a.commit(s.v, 'neither'), e.abrupt('return');
            case 6:
              if (null != t) {
                e.next = 10;
                break;
              }
              return console.log('no link'), r.a.commit(s.v, 'neither'), e.abrupt('return');
            case 10:
              (t = Object(o.b)(t)),
                i.f.then(function(e) {
                  var n;
                  return regeneratorRuntime.async(
                    function(o) {
                      for (;;)
                        switch ((o.prev = o.next)) {
                          case 0:
                            return (o.prev = 0), (o.next = 3), regeneratorRuntime.awrap(e.get(i.a, [r.a.state.targetId - 0, t]));
                          case 3:
                            null == (n = o.sent) ? (console.log('link is null, return neither'), r.a.commit(s.v, 'neither')) : r.a.commit(s.v, n.saved), (o.next = 11);
                            break;
                          case 7:
                            (o.prev = 7), (o.t0 = o.catch(0)), console.log(o.t0), console.log(o.t0.stack);
                          case 11:
                          case 'end':
                            return o.stop();
                        }
                    },
                    null,
                    null,
                    [[0, 7]]
                  );
                });
            case 12:
            case 'end':
              return e.stop();
          }
      });
    }
    function _() {
      var t;
      return regeneratorRuntime.async(function(e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (((t = r.a.state.curLink.url), null != r.a.state.targetId)) {
                e.next = 4;
                break;
              }
              return r.a.commit(s.w, 'neither'), e.abrupt('return');
            case 4:
              if (null != t) {
                e.next = 7;
                break;
              }
              return r.a.commit(s.w, 'neither'), e.abrupt('return');
            case 7:
              (t = Object(o.b)(t)),
                i.f.then(function(e) {
                  var n;
                  return regeneratorRuntime.async(
                    function(o) {
                      for (;;)
                        switch ((o.prev = o.next)) {
                          case 0:
                            return (o.prev = 0), (o.next = 3), regeneratorRuntime.awrap(e.get(i.d, [r.a.state.targetId - 0, t]));
                          case 3:
                            null == (n = o.sent) ? r.a.commit(s.w, 'neither') : r.a.commit(s.w, n.saved), (o.next = 11);
                            break;
                          case 7:
                            (o.prev = 7), (o.t0 = o.catch(0)), console.log(o.t0), console.log(o.t0.stack);
                          case 11:
                          case 'end':
                            return o.stop();
                        }
                    },
                    null,
                    null,
                    [[0, 7]]
                  );
                });
            case 9:
            case 'end':
              return e.stop();
          }
      });
    }
  },
  function(t, e, n) {
    var r = n(19),
      i = n(32);
    t.exports = n(11)
      ? function(t, e, n) {
          return r.f(t, e, i(1, n));
        }
      : function(t, e, n) {
          return (t[e] = n), t;
        };
  },
  function(t, e) {
    var n = (t.exports = { version: '2.6.11' });
    'number' == typeof __e && (__e = n);
  },
  function(t, e, n) {
    t.exports = !n(14)(function() {
      return (
        7 !=
        Object.defineProperty({}, 'a', {
          get: function() {
            return 7;
          },
        }).a
      );
    });
  },
  function(t, e, n) {
    'use strict';
    n.r(e),
      function(t, n) {
        /*!
         * Vue.js v2.6.10
         * (c) 2014-2019 Evan You
         * Released under the MIT License.
         */
        var r = Object.freeze({});
        function i(t) {
          return null == t;
        }
        function o(t) {
          return null != t;
        }
        function a(t) {
          return !0 === t;
        }
        function s(t) {
          return 'string' == typeof t || 'number' == typeof t || 'symbol' == typeof t || 'boolean' == typeof t;
        }
        function l(t) {
          return null !== t && 'object' == typeof t;
        }
        var u = Object.prototype.toString;
        function c(t) {
          return '[object Object]' === u.call(t);
        }
        function f(t) {
          return '[object RegExp]' === u.call(t);
        }
        function d(t) {
          var e = parseFloat(String(t));
          return e >= 0 && Math.floor(e) === e && isFinite(t);
        }
        function h(t) {
          return o(t) && 'function' == typeof t.then && 'function' == typeof t.catch;
        }
        function p(t) {
          return null == t ? '' : Array.isArray(t) || (c(t) && t.toString === u) ? JSON.stringify(t, null, 2) : String(t);
        }
        function m(t) {
          var e = parseFloat(t);
          return isNaN(e) ? t : e;
        }
        function v(t, e) {
          for (var n = Object.create(null), r = t.split(','), i = 0; i < r.length; i++) n[r[i]] = !0;
          return e
            ? function(t) {
                return n[t.toLowerCase()];
              }
            : function(t) {
                return n[t];
              };
        }
        v('slot,component', !0);
        var g = v('key,ref,slot,slot-scope,is');
        function b(t, e) {
          if (t.length) {
            var n = t.indexOf(e);
            if (n > -1) return t.splice(n, 1);
          }
        }
        var y = Object.prototype.hasOwnProperty;
        function w(t, e) {
          return y.call(t, e);
        }
        function O(t) {
          var e = Object.create(null);
          return function(n) {
            return e[n] || (e[n] = t(n));
          };
        }
        var S = /-(\w)/g,
          _ = O(function(t) {
            return t.replace(S, function(t, e) {
              return e ? e.toUpperCase() : '';
            });
          }),
          k = O(function(t) {
            return t.charAt(0).toUpperCase() + t.slice(1);
          }),
          x = /\B([A-Z])/g,
          T = O(function(t) {
            return t.replace(x, '-$1').toLowerCase();
          });
        var P = Function.prototype.bind
          ? function(t, e) {
              return t.bind(e);
            }
          : function(t, e) {
              function n(n) {
                var r = arguments.length;
                return r ? (r > 1 ? t.apply(e, arguments) : t.call(e, n)) : t.call(e);
              }
              return (n._length = t.length), n;
            };
        function j(t, e) {
          e = e || 0;
          for (var n = t.length - e, r = new Array(n); n--; ) r[n] = t[n + e];
          return r;
        }
        function C(t, e) {
          for (var n in e) t[n] = e[n];
          return t;
        }
        function B(t) {
          for (var e = {}, n = 0; n < t.length; n++) t[n] && C(e, t[n]);
          return e;
        }
        function $(t, e, n) {}
        var A = function(t, e, n) {
            return !1;
          },
          E = function(t) {
            return t;
          };
        function I(t, e) {
          if (t === e) return !0;
          var n = l(t),
            r = l(e);
          if (!n || !r) return !n && !r && String(t) === String(e);
          try {
            var i = Array.isArray(t),
              o = Array.isArray(e);
            if (i && o)
              return (
                t.length === e.length &&
                t.every(function(t, n) {
                  return I(t, e[n]);
                })
              );
            if (t instanceof Date && e instanceof Date) return t.getTime() === e.getTime();
            if (i || o) return !1;
            var a = Object.keys(t),
              s = Object.keys(e);
            return (
              a.length === s.length &&
              a.every(function(n) {
                return I(t[n], e[n]);
              })
            );
          } catch (t) {
            return !1;
          }
        }
        function D(t, e) {
          for (var n = 0; n < t.length; n++) if (I(t[n], e)) return n;
          return -1;
        }
        function N(t) {
          var e = !1;
          return function() {
            e || ((e = !0), t.apply(this, arguments));
          };
        }
        var F = 'data-server-rendered',
          R = ['component', 'directive', 'filter'],
          L = [
            'beforeCreate',
            'created',
            'beforeMount',
            'mounted',
            'beforeUpdate',
            'updated',
            'beforeDestroy',
            'destroyed',
            'activated',
            'deactivated',
            'errorCaptured',
            'serverPrefetch',
          ],
          V = {
            optionMergeStrategies: Object.create(null),
            silent: !1,
            productionTip: !1,
            devtools: !1,
            performance: !1,
            errorHandler: null,
            warnHandler: null,
            ignoredElements: [],
            keyCodes: Object.create(null),
            isReservedTag: A,
            isReservedAttr: A,
            isUnknownElement: A,
            getTagNamespace: $,
            parsePlatformTagName: E,
            mustUseProp: A,
            async: !0,
            _lifecycleHooks: L,
          },
          M = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
        function H(t, e, n, r) {
          Object.defineProperty(t, e, { value: n, enumerable: !!r, writable: !0, configurable: !0 });
        }
        var z = new RegExp('[^' + M.source + '.$_\\d]');
        var G,
          U = '__proto__' in {},
          W = 'undefined' != typeof window,
          q = 'undefined' != typeof WXEnvironment && !!WXEnvironment.platform,
          K = q && WXEnvironment.platform.toLowerCase(),
          J = W && window.navigator.userAgent.toLowerCase(),
          X = J && /msie|trident/.test(J),
          Y = J && J.indexOf('msie 9.0') > 0,
          Z = J && J.indexOf('edge/') > 0,
          Q = (J && J.indexOf('android'), (J && /iphone|ipad|ipod|ios/.test(J)) || 'ios' === K),
          tt = (J && /chrome\/\d+/.test(J), J && /phantomjs/.test(J), J && J.match(/firefox\/(\d+)/)),
          et = {}.watch,
          nt = !1;
        if (W)
          try {
            var rt = {};
            Object.defineProperty(rt, 'passive', {
              get: function() {
                nt = !0;
              },
            }),
              window.addEventListener('test-passive', null, rt);
          } catch (t) {}
        var it = function() {
            return void 0 === G && (G = !W && !q && void 0 !== t && t.process && 'server' === t.process.env.VUE_ENV), G;
          },
          ot = W && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
        function at(t) {
          return 'function' == typeof t && /native code/.test(t.toString());
        }
        var st,
          lt = 'undefined' != typeof Symbol && at(Symbol) && 'undefined' != typeof Reflect && at(Reflect.ownKeys);
        st =
          'undefined' != typeof Set && at(Set)
            ? Set
            : (function() {
                function t() {
                  this.set = Object.create(null);
                }
                return (
                  (t.prototype.has = function(t) {
                    return !0 === this.set[t];
                  }),
                  (t.prototype.add = function(t) {
                    this.set[t] = !0;
                  }),
                  (t.prototype.clear = function() {
                    this.set = Object.create(null);
                  }),
                  t
                );
              })();
        var ut = $,
          ct = 0,
          ft = function() {
            (this.id = ct++), (this.subs = []);
          };
        (ft.prototype.addSub = function(t) {
          this.subs.push(t);
        }),
          (ft.prototype.removeSub = function(t) {
            b(this.subs, t);
          }),
          (ft.prototype.depend = function() {
            ft.target && ft.target.addDep(this);
          }),
          (ft.prototype.notify = function() {
            var t = this.subs.slice();
            for (var e = 0, n = t.length; e < n; e++) t[e].update();
          }),
          (ft.target = null);
        var dt = [];
        function ht(t) {
          dt.push(t), (ft.target = t);
        }
        function pt() {
          dt.pop(), (ft.target = dt[dt.length - 1]);
        }
        var mt = function(t, e, n, r, i, o, a, s) {
            (this.tag = t),
              (this.data = e),
              (this.children = n),
              (this.text = r),
              (this.elm = i),
              (this.ns = void 0),
              (this.context = o),
              (this.fnContext = void 0),
              (this.fnOptions = void 0),
              (this.fnScopeId = void 0),
              (this.key = e && e.key),
              (this.componentOptions = a),
              (this.componentInstance = void 0),
              (this.parent = void 0),
              (this.raw = !1),
              (this.isStatic = !1),
              (this.isRootInsert = !0),
              (this.isComment = !1),
              (this.isCloned = !1),
              (this.isOnce = !1),
              (this.asyncFactory = s),
              (this.asyncMeta = void 0),
              (this.isAsyncPlaceholder = !1);
          },
          vt = { child: { configurable: !0 } };
        (vt.child.get = function() {
          return this.componentInstance;
        }),
          Object.defineProperties(mt.prototype, vt);
        var gt = function(t) {
          void 0 === t && (t = '');
          var e = new mt();
          return (e.text = t), (e.isComment = !0), e;
        };
        function bt(t) {
          return new mt(void 0, void 0, void 0, String(t));
        }
        function yt(t) {
          var e = new mt(t.tag, t.data, t.children && t.children.slice(), t.text, t.elm, t.context, t.componentOptions, t.asyncFactory);
          return (
            (e.ns = t.ns),
            (e.isStatic = t.isStatic),
            (e.key = t.key),
            (e.isComment = t.isComment),
            (e.fnContext = t.fnContext),
            (e.fnOptions = t.fnOptions),
            (e.fnScopeId = t.fnScopeId),
            (e.asyncMeta = t.asyncMeta),
            (e.isCloned = !0),
            e
          );
        }
        var wt = Array.prototype,
          Ot = Object.create(wt);
        ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function(t) {
          var e = wt[t];
          H(Ot, t, function() {
            for (var n = [], r = arguments.length; r--; ) n[r] = arguments[r];
            var i,
              o = e.apply(this, n),
              a = this.__ob__;
            switch (t) {
              case 'push':
              case 'unshift':
                i = n;
                break;
              case 'splice':
                i = n.slice(2);
            }
            return i && a.observeArray(i), a.dep.notify(), o;
          });
        });
        var St = Object.getOwnPropertyNames(Ot),
          _t = !0;
        function kt(t) {
          _t = t;
        }
        var xt = function(t) {
          (this.value = t),
            (this.dep = new ft()),
            (this.vmCount = 0),
            H(t, '__ob__', this),
            Array.isArray(t)
              ? (U
                  ? (function(t, e) {
                      t.__proto__ = e;
                    })(t, Ot)
                  : (function(t, e, n) {
                      for (var r = 0, i = n.length; r < i; r++) {
                        var o = n[r];
                        H(t, o, e[o]);
                      }
                    })(t, Ot, St),
                this.observeArray(t))
              : this.walk(t);
        };
        function Tt(t, e) {
          var n;
          if (l(t) && !(t instanceof mt))
            return (
              w(t, '__ob__') && t.__ob__ instanceof xt ? (n = t.__ob__) : _t && !it() && (Array.isArray(t) || c(t)) && Object.isExtensible(t) && !t._isVue && (n = new xt(t)),
              e && n && n.vmCount++,
              n
            );
        }
        function Pt(t, e, n, r, i) {
          var o = new ft(),
            a = Object.getOwnPropertyDescriptor(t, e);
          if (!a || !1 !== a.configurable) {
            var s = a && a.get,
              l = a && a.set;
            (s && !l) || 2 !== arguments.length || (n = t[e]);
            var u = !i && Tt(n);
            Object.defineProperty(t, e, {
              enumerable: !0,
              configurable: !0,
              get: function() {
                var e = s ? s.call(t) : n;
                return (
                  ft.target &&
                    (o.depend(),
                    u &&
                      (u.dep.depend(),
                      Array.isArray(e) &&
                        (function t(e) {
                          for (var n = void 0, r = 0, i = e.length; r < i; r++) (n = e[r]) && n.__ob__ && n.__ob__.dep.depend(), Array.isArray(n) && t(n);
                        })(e))),
                  e
                );
              },
              set: function(e) {
                var r = s ? s.call(t) : n;
                e === r || (e != e && r != r) || (s && !l) || (l ? l.call(t, e) : (n = e), (u = !i && Tt(e)), o.notify());
              },
            });
          }
        }
        function jt(t, e, n) {
          if (Array.isArray(t) && d(e)) return (t.length = Math.max(t.length, e)), t.splice(e, 1, n), n;
          if (e in t && !(e in Object.prototype)) return (t[e] = n), n;
          var r = t.__ob__;
          return t._isVue || (r && r.vmCount) ? n : r ? (Pt(r.value, e, n), r.dep.notify(), n) : ((t[e] = n), n);
        }
        function Ct(t, e) {
          if (Array.isArray(t) && d(e)) t.splice(e, 1);
          else {
            var n = t.__ob__;
            t._isVue || (n && n.vmCount) || (w(t, e) && (delete t[e], n && n.dep.notify()));
          }
        }
        (xt.prototype.walk = function(t) {
          for (var e = Object.keys(t), n = 0; n < e.length; n++) Pt(t, e[n]);
        }),
          (xt.prototype.observeArray = function(t) {
            for (var e = 0, n = t.length; e < n; e++) Tt(t[e]);
          });
        var Bt = V.optionMergeStrategies;
        function $t(t, e) {
          if (!e) return t;
          for (var n, r, i, o = lt ? Reflect.ownKeys(e) : Object.keys(e), a = 0; a < o.length; a++)
            '__ob__' !== (n = o[a]) && ((r = t[n]), (i = e[n]), w(t, n) ? r !== i && c(r) && c(i) && $t(r, i) : jt(t, n, i));
          return t;
        }
        function At(t, e, n) {
          return n
            ? function() {
                var r = 'function' == typeof e ? e.call(n, n) : e,
                  i = 'function' == typeof t ? t.call(n, n) : t;
                return r ? $t(r, i) : i;
              }
            : e
            ? t
              ? function() {
                  return $t('function' == typeof e ? e.call(this, this) : e, 'function' == typeof t ? t.call(this, this) : t);
                }
              : e
            : t;
        }
        function Et(t, e) {
          var n = e ? (t ? t.concat(e) : Array.isArray(e) ? e : [e]) : t;
          return n
            ? (function(t) {
                for (var e = [], n = 0; n < t.length; n++) -1 === e.indexOf(t[n]) && e.push(t[n]);
                return e;
              })(n)
            : n;
        }
        function It(t, e, n, r) {
          var i = Object.create(t || null);
          return e ? C(i, e) : i;
        }
        (Bt.data = function(t, e, n) {
          return n ? At(t, e, n) : e && 'function' != typeof e ? t : At(t, e);
        }),
          L.forEach(function(t) {
            Bt[t] = Et;
          }),
          R.forEach(function(t) {
            Bt[t + 's'] = It;
          }),
          (Bt.watch = function(t, e, n, r) {
            if ((t === et && (t = void 0), e === et && (e = void 0), !e)) return Object.create(t || null);
            if (!t) return e;
            var i = {};
            for (var o in (C(i, t), e)) {
              var a = i[o],
                s = e[o];
              a && !Array.isArray(a) && (a = [a]), (i[o] = a ? a.concat(s) : Array.isArray(s) ? s : [s]);
            }
            return i;
          }),
          (Bt.props = Bt.methods = Bt.inject = Bt.computed = function(t, e, n, r) {
            if (!t) return e;
            var i = Object.create(null);
            return C(i, t), e && C(i, e), i;
          }),
          (Bt.provide = At);
        var Dt = function(t, e) {
          return void 0 === e ? t : e;
        };
        function Nt(t, e, n) {
          if (
            ('function' == typeof e && (e = e.options),
            (function(t, e) {
              var n = t.props;
              if (n) {
                var r,
                  i,
                  o = {};
                if (Array.isArray(n)) for (r = n.length; r--; ) 'string' == typeof (i = n[r]) && (o[_(i)] = { type: null });
                else if (c(n)) for (var a in n) (i = n[a]), (o[_(a)] = c(i) ? i : { type: i });
                else 0;
                t.props = o;
              }
            })(e),
            (function(t, e) {
              var n = t.inject;
              if (n) {
                var r = (t.inject = {});
                if (Array.isArray(n)) for (var i = 0; i < n.length; i++) r[n[i]] = { from: n[i] };
                else if (c(n))
                  for (var o in n) {
                    var a = n[o];
                    r[o] = c(a) ? C({ from: o }, a) : { from: a };
                  }
                else 0;
              }
            })(e),
            (function(t) {
              var e = t.directives;
              if (e)
                for (var n in e) {
                  var r = e[n];
                  'function' == typeof r && (e[n] = { bind: r, update: r });
                }
            })(e),
            !e._base && (e.extends && (t = Nt(t, e.extends, n)), e.mixins))
          )
            for (var r = 0, i = e.mixins.length; r < i; r++) t = Nt(t, e.mixins[r], n);
          var o,
            a = {};
          for (o in t) s(o);
          for (o in e) w(t, o) || s(o);
          function s(r) {
            var i = Bt[r] || Dt;
            a[r] = i(t[r], e[r], n, r);
          }
          return a;
        }
        function Ft(t, e, n, r) {
          if ('string' == typeof n) {
            var i = t[e];
            if (w(i, n)) return i[n];
            var o = _(n);
            if (w(i, o)) return i[o];
            var a = k(o);
            return w(i, a) ? i[a] : i[n] || i[o] || i[a];
          }
        }
        function Rt(t, e, n, r) {
          var i = e[t],
            o = !w(n, t),
            a = n[t],
            s = Mt(Boolean, i.type);
          if (s > -1)
            if (o && !w(i, 'default')) a = !1;
            else if ('' === a || a === T(t)) {
              var l = Mt(String, i.type);
              (l < 0 || s < l) && (a = !0);
            }
          if (void 0 === a) {
            a = (function(t, e, n) {
              if (!w(e, 'default')) return;
              var r = e.default;
              0;
              if (t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t._props[n]) return t._props[n];
              return 'function' == typeof r && 'Function' !== Lt(e.type) ? r.call(t) : r;
            })(r, i, t);
            var u = _t;
            kt(!0), Tt(a), kt(u);
          }
          return a;
        }
        function Lt(t) {
          var e = t && t.toString().match(/^\s*function (\w+)/);
          return e ? e[1] : '';
        }
        function Vt(t, e) {
          return Lt(t) === Lt(e);
        }
        function Mt(t, e) {
          if (!Array.isArray(e)) return Vt(e, t) ? 0 : -1;
          for (var n = 0, r = e.length; n < r; n++) if (Vt(e[n], t)) return n;
          return -1;
        }
        function Ht(t, e, n) {
          ht();
          try {
            if (e)
              for (var r = e; (r = r.$parent); ) {
                var i = r.$options.errorCaptured;
                if (i)
                  for (var o = 0; o < i.length; o++)
                    try {
                      if (!1 === i[o].call(r, t, e, n)) return;
                    } catch (t) {
                      Gt(t, r, 'errorCaptured hook');
                    }
              }
            Gt(t, e, n);
          } finally {
            pt();
          }
        }
        function zt(t, e, n, r, i) {
          var o;
          try {
            (o = n ? t.apply(e, n) : t.call(e)) &&
              !o._isVue &&
              h(o) &&
              !o._handled &&
              (o.catch(function(t) {
                return Ht(t, r, i + ' (Promise/async)');
              }),
              (o._handled = !0));
          } catch (t) {
            Ht(t, r, i);
          }
          return o;
        }
        function Gt(t, e, n) {
          if (V.errorHandler)
            try {
              return V.errorHandler.call(null, t, e, n);
            } catch (e) {
              e !== t && Ut(e, null, 'config.errorHandler');
            }
          Ut(t, e, n);
        }
        function Ut(t, e, n) {
          if ((!W && !q) || 'undefined' == typeof console) throw t;
          console.error(t);
        }
        var Wt,
          qt = !1,
          Kt = [],
          Jt = !1;
        function Xt() {
          Jt = !1;
          var t = Kt.slice(0);
          Kt.length = 0;
          for (var e = 0; e < t.length; e++) t[e]();
        }
        if ('undefined' != typeof Promise && at(Promise)) {
          var Yt = Promise.resolve();
          (Wt = function() {
            Yt.then(Xt), Q && setTimeout($);
          }),
            (qt = !0);
        } else if (X || 'undefined' == typeof MutationObserver || (!at(MutationObserver) && '[object MutationObserverConstructor]' !== MutationObserver.toString()))
          Wt =
            void 0 !== n && at(n)
              ? function() {
                  n(Xt);
                }
              : function() {
                  setTimeout(Xt, 0);
                };
        else {
          var Zt = 1,
            Qt = new MutationObserver(Xt),
            te = document.createTextNode(String(Zt));
          Qt.observe(te, { characterData: !0 }),
            (Wt = function() {
              (Zt = (Zt + 1) % 2), (te.data = String(Zt));
            }),
            (qt = !0);
        }
        function ee(t, e) {
          var n;
          if (
            (Kt.push(function() {
              if (t)
                try {
                  t.call(e);
                } catch (t) {
                  Ht(t, e, 'nextTick');
                }
              else n && n(e);
            }),
            Jt || ((Jt = !0), Wt()),
            !t && 'undefined' != typeof Promise)
          )
            return new Promise(function(t) {
              n = t;
            });
        }
        var ne = new st();
        function re(t) {
          !(function t(e, n) {
            var r,
              i,
              o = Array.isArray(e);
            if ((!o && !l(e)) || Object.isFrozen(e) || e instanceof mt) return;
            if (e.__ob__) {
              var a = e.__ob__.dep.id;
              if (n.has(a)) return;
              n.add(a);
            }
            if (o) for (r = e.length; r--; ) t(e[r], n);
            else for (i = Object.keys(e), r = i.length; r--; ) t(e[i[r]], n);
          })(t, ne),
            ne.clear();
        }
        var ie = O(function(t) {
          var e = '&' === t.charAt(0),
            n = '~' === (t = e ? t.slice(1) : t).charAt(0),
            r = '!' === (t = n ? t.slice(1) : t).charAt(0);
          return { name: (t = r ? t.slice(1) : t), once: n, capture: r, passive: e };
        });
        function oe(t, e) {
          function n() {
            var t = arguments,
              r = n.fns;
            if (!Array.isArray(r)) return zt(r, null, arguments, e, 'v-on handler');
            for (var i = r.slice(), o = 0; o < i.length; o++) zt(i[o], null, t, e, 'v-on handler');
          }
          return (n.fns = t), n;
        }
        function ae(t, e, n, r, o, s) {
          var l, u, c, f;
          for (l in t)
            (u = t[l]),
              (c = e[l]),
              (f = ie(l)),
              i(u) ||
                (i(c)
                  ? (i(u.fns) && (u = t[l] = oe(u, s)), a(f.once) && (u = t[l] = o(f.name, u, f.capture)), n(f.name, u, f.capture, f.passive, f.params))
                  : u !== c && ((c.fns = u), (t[l] = c)));
          for (l in e) i(t[l]) && r((f = ie(l)).name, e[l], f.capture);
        }
        function se(t, e, n) {
          var r;
          t instanceof mt && (t = t.data.hook || (t.data.hook = {}));
          var s = t[e];
          function l() {
            n.apply(this, arguments), b(r.fns, l);
          }
          i(s) ? (r = oe([l])) : o(s.fns) && a(s.merged) ? (r = s).fns.push(l) : (r = oe([s, l])), (r.merged = !0), (t[e] = r);
        }
        function le(t, e, n, r, i) {
          if (o(e)) {
            if (w(e, n)) return (t[n] = e[n]), i || delete e[n], !0;
            if (w(e, r)) return (t[n] = e[r]), i || delete e[r], !0;
          }
          return !1;
        }
        function ue(t) {
          return s(t)
            ? [bt(t)]
            : Array.isArray(t)
            ? (function t(e, n) {
                var r,
                  l,
                  u,
                  c,
                  f = [];
                for (r = 0; r < e.length; r++)
                  i((l = e[r])) ||
                    'boolean' == typeof l ||
                    ((u = f.length - 1),
                    (c = f[u]),
                    Array.isArray(l)
                      ? l.length > 0 && (ce((l = t(l, (n || '') + '_' + r))[0]) && ce(c) && ((f[u] = bt(c.text + l[0].text)), l.shift()), f.push.apply(f, l))
                      : s(l)
                      ? ce(c)
                        ? (f[u] = bt(c.text + l))
                        : '' !== l && f.push(bt(l))
                      : ce(l) && ce(c)
                      ? (f[u] = bt(c.text + l.text))
                      : (a(e._isVList) && o(l.tag) && i(l.key) && o(n) && (l.key = '__vlist' + n + '_' + r + '__'), f.push(l)));
                return f;
              })(t)
            : void 0;
        }
        function ce(t) {
          return o(t) && o(t.text) && !1 === t.isComment;
        }
        function fe(t, e) {
          if (t) {
            for (var n = Object.create(null), r = lt ? Reflect.ownKeys(t) : Object.keys(t), i = 0; i < r.length; i++) {
              var o = r[i];
              if ('__ob__' !== o) {
                for (var a = t[o].from, s = e; s; ) {
                  if (s._provided && w(s._provided, a)) {
                    n[o] = s._provided[a];
                    break;
                  }
                  s = s.$parent;
                }
                if (!s)
                  if ('default' in t[o]) {
                    var l = t[o].default;
                    n[o] = 'function' == typeof l ? l.call(e) : l;
                  } else 0;
              }
            }
            return n;
          }
        }
        function de(t, e) {
          if (!t || !t.length) return {};
          for (var n = {}, r = 0, i = t.length; r < i; r++) {
            var o = t[r],
              a = o.data;
            if ((a && a.attrs && a.attrs.slot && delete a.attrs.slot, (o.context !== e && o.fnContext !== e) || !a || null == a.slot)) (n.default || (n.default = [])).push(o);
            else {
              var s = a.slot,
                l = n[s] || (n[s] = []);
              'template' === o.tag ? l.push.apply(l, o.children || []) : l.push(o);
            }
          }
          for (var u in n) n[u].every(he) && delete n[u];
          return n;
        }
        function he(t) {
          return (t.isComment && !t.asyncFactory) || ' ' === t.text;
        }
        function pe(t, e, n) {
          var i,
            o = Object.keys(e).length > 0,
            a = t ? !!t.$stable : !o,
            s = t && t.$key;
          if (t) {
            if (t._normalized) return t._normalized;
            if (a && n && n !== r && s === n.$key && !o && !n.$hasNormal) return n;
            for (var l in ((i = {}), t)) t[l] && '$' !== l[0] && (i[l] = me(e, l, t[l]));
          } else i = {};
          for (var u in e) u in i || (i[u] = ve(e, u));
          return t && Object.isExtensible(t) && (t._normalized = i), H(i, '$stable', a), H(i, '$key', s), H(i, '$hasNormal', o), i;
        }
        function me(t, e, n) {
          var r = function() {
            var t = arguments.length ? n.apply(null, arguments) : n({});
            return (t = t && 'object' == typeof t && !Array.isArray(t) ? [t] : ue(t)) && (0 === t.length || (1 === t.length && t[0].isComment)) ? void 0 : t;
          };
          return n.proxy && Object.defineProperty(t, e, { get: r, enumerable: !0, configurable: !0 }), r;
        }
        function ve(t, e) {
          return function() {
            return t[e];
          };
        }
        function ge(t, e) {
          var n, r, i, a, s;
          if (Array.isArray(t) || 'string' == typeof t) for (n = new Array(t.length), r = 0, i = t.length; r < i; r++) n[r] = e(t[r], r);
          else if ('number' == typeof t) for (n = new Array(t), r = 0; r < t; r++) n[r] = e(r + 1, r);
          else if (l(t))
            if (lt && t[Symbol.iterator]) {
              n = [];
              for (var u = t[Symbol.iterator](), c = u.next(); !c.done; ) n.push(e(c.value, n.length)), (c = u.next());
            } else for (a = Object.keys(t), n = new Array(a.length), r = 0, i = a.length; r < i; r++) (s = a[r]), (n[r] = e(t[s], s, r));
          return o(n) || (n = []), (n._isVList = !0), n;
        }
        function be(t, e, n, r) {
          var i,
            o = this.$scopedSlots[t];
          o ? ((n = n || {}), r && (n = C(C({}, r), n)), (i = o(n) || e)) : (i = this.$slots[t] || e);
          var a = n && n.slot;
          return a ? this.$createElement('template', { slot: a }, i) : i;
        }
        function ye(t) {
          return Ft(this.$options, 'filters', t) || E;
        }
        function we(t, e) {
          return Array.isArray(t) ? -1 === t.indexOf(e) : t !== e;
        }
        function Oe(t, e, n, r, i) {
          var o = V.keyCodes[e] || n;
          return i && r && !V.keyCodes[e] ? we(i, r) : o ? we(o, t) : r ? T(r) !== e : void 0;
        }
        function Se(t, e, n, r, i) {
          if (n)
            if (l(n)) {
              var o;
              Array.isArray(n) && (n = B(n));
              var a = function(a) {
                if ('class' === a || 'style' === a || g(a)) o = t;
                else {
                  var s = t.attrs && t.attrs.type;
                  o = r || V.mustUseProp(e, s, a) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {});
                }
                var l = _(a),
                  u = T(a);
                l in o ||
                  u in o ||
                  ((o[a] = n[a]),
                  i &&
                    ((t.on || (t.on = {}))['update:' + a] = function(t) {
                      n[a] = t;
                    }));
              };
              for (var s in n) a(s);
            } else;
          return t;
        }
        function _e(t, e) {
          var n = this._staticTrees || (this._staticTrees = []),
            r = n[t];
          return r && !e ? r : (xe((r = n[t] = this.$options.staticRenderFns[t].call(this._renderProxy, null, this)), '__static__' + t, !1), r);
        }
        function ke(t, e, n) {
          return xe(t, '__once__' + e + (n ? '_' + n : ''), !0), t;
        }
        function xe(t, e, n) {
          if (Array.isArray(t)) for (var r = 0; r < t.length; r++) t[r] && 'string' != typeof t[r] && Te(t[r], e + '_' + r, n);
          else Te(t, e, n);
        }
        function Te(t, e, n) {
          (t.isStatic = !0), (t.key = e), (t.isOnce = n);
        }
        function Pe(t, e) {
          if (e)
            if (c(e)) {
              var n = (t.on = t.on ? C({}, t.on) : {});
              for (var r in e) {
                var i = n[r],
                  o = e[r];
                n[r] = i ? [].concat(i, o) : o;
              }
            } else;
          return t;
        }
        function je(t, e, n, r) {
          e = e || { $stable: !n };
          for (var i = 0; i < t.length; i++) {
            var o = t[i];
            Array.isArray(o) ? je(o, e, n) : o && (o.proxy && (o.fn.proxy = !0), (e[o.key] = o.fn));
          }
          return r && (e.$key = r), e;
        }
        function Ce(t, e) {
          for (var n = 0; n < e.length; n += 2) {
            var r = e[n];
            'string' == typeof r && r && (t[e[n]] = e[n + 1]);
          }
          return t;
        }
        function Be(t, e) {
          return 'string' == typeof t ? e + t : t;
        }
        function $e(t) {
          (t._o = ke),
            (t._n = m),
            (t._s = p),
            (t._l = ge),
            (t._t = be),
            (t._q = I),
            (t._i = D),
            (t._m = _e),
            (t._f = ye),
            (t._k = Oe),
            (t._b = Se),
            (t._v = bt),
            (t._e = gt),
            (t._u = je),
            (t._g = Pe),
            (t._d = Ce),
            (t._p = Be);
        }
        function Ae(t, e, n, i, o) {
          var s,
            l = this,
            u = o.options;
          w(i, '_uid') ? ((s = Object.create(i))._original = i) : ((s = i), (i = i._original));
          var c = a(u._compiled),
            f = !c;
          (this.data = t),
            (this.props = e),
            (this.children = n),
            (this.parent = i),
            (this.listeners = t.on || r),
            (this.injections = fe(u.inject, i)),
            (this.slots = function() {
              return l.$slots || pe(t.scopedSlots, (l.$slots = de(n, i))), l.$slots;
            }),
            Object.defineProperty(this, 'scopedSlots', {
              enumerable: !0,
              get: function() {
                return pe(t.scopedSlots, this.slots());
              },
            }),
            c && ((this.$options = u), (this.$slots = this.slots()), (this.$scopedSlots = pe(t.scopedSlots, this.$slots))),
            u._scopeId
              ? (this._c = function(t, e, n, r) {
                  var o = Me(s, t, e, n, r, f);
                  return o && !Array.isArray(o) && ((o.fnScopeId = u._scopeId), (o.fnContext = i)), o;
                })
              : (this._c = function(t, e, n, r) {
                  return Me(s, t, e, n, r, f);
                });
        }
        function Ee(t, e, n, r, i) {
          var o = yt(t);
          return (o.fnContext = n), (o.fnOptions = r), e.slot && ((o.data || (o.data = {})).slot = e.slot), o;
        }
        function Ie(t, e) {
          for (var n in e) t[_(n)] = e[n];
        }
        $e(Ae.prototype);
        var De = {
            init: function(t, e) {
              if (t.componentInstance && !t.componentInstance._isDestroyed && t.data.keepAlive) {
                var n = t;
                De.prepatch(n, n);
              } else {
                (t.componentInstance = (function(t, e) {
                  var n = { _isComponent: !0, _parentVnode: t, parent: e },
                    r = t.data.inlineTemplate;
                  o(r) && ((n.render = r.render), (n.staticRenderFns = r.staticRenderFns));
                  return new t.componentOptions.Ctor(n);
                })(t, Ye)).$mount(e ? t.elm : void 0, e);
              }
            },
            prepatch: function(t, e) {
              var n = e.componentOptions;
              !(function(t, e, n, i, o) {
                0;
                var a = i.data.scopedSlots,
                  s = t.$scopedSlots,
                  l = !!((a && !a.$stable) || (s !== r && !s.$stable) || (a && t.$scopedSlots.$key !== a.$key)),
                  u = !!(o || t.$options._renderChildren || l);
                (t.$options._parentVnode = i), (t.$vnode = i), t._vnode && (t._vnode.parent = i);
                if (((t.$options._renderChildren = o), (t.$attrs = i.data.attrs || r), (t.$listeners = n || r), e && t.$options.props)) {
                  kt(!1);
                  for (var c = t._props, f = t.$options._propKeys || [], d = 0; d < f.length; d++) {
                    var h = f[d],
                      p = t.$options.props;
                    c[h] = Rt(h, p, e, t);
                  }
                  kt(!0), (t.$options.propsData = e);
                }
                n = n || r;
                var m = t.$options._parentListeners;
                (t.$options._parentListeners = n), Xe(t, n, m), u && ((t.$slots = de(o, i.context)), t.$forceUpdate());
                0;
              })((e.componentInstance = t.componentInstance), n.propsData, n.listeners, e, n.children);
            },
            insert: function(t) {
              var e,
                n = t.context,
                r = t.componentInstance;
              r._isMounted || ((r._isMounted = !0), en(r, 'mounted')), t.data.keepAlive && (n._isMounted ? (((e = r)._inactive = !1), rn.push(e)) : tn(r, !0));
            },
            destroy: function(t) {
              var e = t.componentInstance;
              e._isDestroyed ||
                (t.data.keepAlive
                  ? (function t(e, n) {
                      if (n && ((e._directInactive = !0), Qe(e))) return;
                      if (!e._inactive) {
                        e._inactive = !0;
                        for (var r = 0; r < e.$children.length; r++) t(e.$children[r]);
                        en(e, 'deactivated');
                      }
                    })(e, !0)
                  : e.$destroy());
            },
          },
          Ne = Object.keys(De);
        function Fe(t, e, n, s, u) {
          if (!i(t)) {
            var c = n.$options._base;
            if ((l(t) && (t = c.extend(t)), 'function' == typeof t)) {
              var f;
              if (
                i(t.cid) &&
                void 0 ===
                  (t = (function(t, e) {
                    if (a(t.error) && o(t.errorComp)) return t.errorComp;
                    if (o(t.resolved)) return t.resolved;
                    var n = ze;
                    n && o(t.owners) && -1 === t.owners.indexOf(n) && t.owners.push(n);
                    if (a(t.loading) && o(t.loadingComp)) return t.loadingComp;
                    if (n && !o(t.owners)) {
                      var r = (t.owners = [n]),
                        s = !0,
                        u = null,
                        c = null;
                      n.$on('hook:destroyed', function() {
                        return b(r, n);
                      });
                      var f = function(t) {
                          for (var e = 0, n = r.length; e < n; e++) r[e].$forceUpdate();
                          t && ((r.length = 0), null !== u && (clearTimeout(u), (u = null)), null !== c && (clearTimeout(c), (c = null)));
                        },
                        d = N(function(n) {
                          (t.resolved = Ge(n, e)), s ? (r.length = 0) : f(!0);
                        }),
                        p = N(function(e) {
                          o(t.errorComp) && ((t.error = !0), f(!0));
                        }),
                        m = t(d, p);
                      return (
                        l(m) &&
                          (h(m)
                            ? i(t.resolved) && m.then(d, p)
                            : h(m.component) &&
                              (m.component.then(d, p),
                              o(m.error) && (t.errorComp = Ge(m.error, e)),
                              o(m.loading) &&
                                ((t.loadingComp = Ge(m.loading, e)),
                                0 === m.delay
                                  ? (t.loading = !0)
                                  : (u = setTimeout(function() {
                                      (u = null), i(t.resolved) && i(t.error) && ((t.loading = !0), f(!1));
                                    }, m.delay || 200))),
                              o(m.timeout) &&
                                (c = setTimeout(function() {
                                  (c = null), i(t.resolved) && p(null);
                                }, m.timeout)))),
                        (s = !1),
                        t.loading ? t.loadingComp : t.resolved
                      );
                    }
                  })((f = t), c))
              )
                return (function(t, e, n, r, i) {
                  var o = gt();
                  return (o.asyncFactory = t), (o.asyncMeta = { data: e, context: n, children: r, tag: i }), o;
                })(f, e, n, s, u);
              (e = e || {}),
                kn(t),
                o(e.model) &&
                  (function(t, e) {
                    var n = (t.model && t.model.prop) || 'value',
                      r = (t.model && t.model.event) || 'input';
                    (e.attrs || (e.attrs = {}))[n] = e.model.value;
                    var i = e.on || (e.on = {}),
                      a = i[r],
                      s = e.model.callback;
                    o(a) ? (Array.isArray(a) ? -1 === a.indexOf(s) : a !== s) && (i[r] = [s].concat(a)) : (i[r] = s);
                  })(t.options, e);
              var d = (function(t, e, n) {
                var r = e.options.props;
                if (!i(r)) {
                  var a = {},
                    s = t.attrs,
                    l = t.props;
                  if (o(s) || o(l))
                    for (var u in r) {
                      var c = T(u);
                      le(a, l, u, c, !0) || le(a, s, u, c, !1);
                    }
                  return a;
                }
              })(e, t);
              if (a(t.options.functional))
                return (function(t, e, n, i, a) {
                  var s = t.options,
                    l = {},
                    u = s.props;
                  if (o(u)) for (var c in u) l[c] = Rt(c, u, e || r);
                  else o(n.attrs) && Ie(l, n.attrs), o(n.props) && Ie(l, n.props);
                  var f = new Ae(n, l, a, i, t),
                    d = s.render.call(null, f._c, f);
                  if (d instanceof mt) return Ee(d, n, f.parent, s, f);
                  if (Array.isArray(d)) {
                    for (var h = ue(d) || [], p = new Array(h.length), m = 0; m < h.length; m++) p[m] = Ee(h[m], n, f.parent, s, f);
                    return p;
                  }
                })(t, d, e, n, s);
              var p = e.on;
              if (((e.on = e.nativeOn), a(t.options.abstract))) {
                var m = e.slot;
                (e = {}), m && (e.slot = m);
              }
              !(function(t) {
                for (var e = t.hook || (t.hook = {}), n = 0; n < Ne.length; n++) {
                  var r = Ne[n],
                    i = e[r],
                    o = De[r];
                  i === o || (i && i._merged) || (e[r] = i ? Re(o, i) : o);
                }
              })(e);
              var v = t.options.name || u;
              return new mt('vue-component-' + t.cid + (v ? '-' + v : ''), e, void 0, void 0, void 0, n, { Ctor: t, propsData: d, listeners: p, tag: u, children: s }, f);
            }
          }
        }
        function Re(t, e) {
          var n = function(n, r) {
            t(n, r), e(n, r);
          };
          return (n._merged = !0), n;
        }
        var Le = 1,
          Ve = 2;
        function Me(t, e, n, r, u, c) {
          return (
            (Array.isArray(n) || s(n)) && ((u = r), (r = n), (n = void 0)),
            a(c) && (u = Ve),
            (function(t, e, n, r, s) {
              if (o(n) && o(n.__ob__)) return gt();
              o(n) && o(n.is) && (e = n.is);
              if (!e) return gt();
              0;
              Array.isArray(r) && 'function' == typeof r[0] && (((n = n || {}).scopedSlots = { default: r[0] }), (r.length = 0));
              s === Ve
                ? (r = ue(r))
                : s === Le &&
                  (r = (function(t) {
                    for (var e = 0; e < t.length; e++) if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);
                    return t;
                  })(r));
              var u, c;
              if ('string' == typeof e) {
                var f;
                (c = (t.$vnode && t.$vnode.ns) || V.getTagNamespace(e)),
                  (u = V.isReservedTag(e)
                    ? new mt(V.parsePlatformTagName(e), n, r, void 0, void 0, t)
                    : (n && n.pre) || !o((f = Ft(t.$options, 'components', e)))
                    ? new mt(e, n, r, void 0, void 0, t)
                    : Fe(f, n, t, r, e));
              } else u = Fe(e, n, t, r);
              return Array.isArray(u)
                ? u
                : o(u)
                ? (o(c) &&
                    (function t(e, n, r) {
                      (e.ns = n), 'foreignObject' === e.tag && ((n = void 0), (r = !0));
                      if (o(e.children))
                        for (var s = 0, l = e.children.length; s < l; s++) {
                          var u = e.children[s];
                          o(u.tag) && (i(u.ns) || (a(r) && 'svg' !== u.tag)) && t(u, n, r);
                        }
                    })(u, c),
                  o(n) &&
                    (function(t) {
                      l(t.style) && re(t.style);
                      l(t.class) && re(t.class);
                    })(n),
                  u)
                : gt();
            })(t, e, n, r, u)
          );
        }
        var He,
          ze = null;
        function Ge(t, e) {
          return (t.__esModule || (lt && 'Module' === t[Symbol.toStringTag])) && (t = t.default), l(t) ? e.extend(t) : t;
        }
        function Ue(t) {
          return t.isComment && t.asyncFactory;
        }
        function We(t) {
          if (Array.isArray(t))
            for (var e = 0; e < t.length; e++) {
              var n = t[e];
              if (o(n) && (o(n.componentOptions) || Ue(n))) return n;
            }
        }
        function qe(t, e) {
          He.$on(t, e);
        }
        function Ke(t, e) {
          He.$off(t, e);
        }
        function Je(t, e) {
          var n = He;
          return function r() {
            var i = e.apply(null, arguments);
            null !== i && n.$off(t, r);
          };
        }
        function Xe(t, e, n) {
          (He = t), ae(e, n || {}, qe, Ke, Je, t), (He = void 0);
        }
        var Ye = null;
        function Ze(t) {
          var e = Ye;
          return (
            (Ye = t),
            function() {
              Ye = e;
            }
          );
        }
        function Qe(t) {
          for (; t && (t = t.$parent); ) if (t._inactive) return !0;
          return !1;
        }
        function tn(t, e) {
          if (e) {
            if (((t._directInactive = !1), Qe(t))) return;
          } else if (t._directInactive) return;
          if (t._inactive || null === t._inactive) {
            t._inactive = !1;
            for (var n = 0; n < t.$children.length; n++) tn(t.$children[n]);
            en(t, 'activated');
          }
        }
        function en(t, e) {
          ht();
          var n = t.$options[e],
            r = e + ' hook';
          if (n) for (var i = 0, o = n.length; i < o; i++) zt(n[i], t, null, t, r);
          t._hasHookEvent && t.$emit('hook:' + e), pt();
        }
        var nn = [],
          rn = [],
          on = {},
          an = !1,
          sn = !1,
          ln = 0;
        var un = 0,
          cn = Date.now;
        if (W && !X) {
          var fn = window.performance;
          fn &&
            'function' == typeof fn.now &&
            cn() > document.createEvent('Event').timeStamp &&
            (cn = function() {
              return fn.now();
            });
        }
        function dn() {
          var t, e;
          for (
            un = cn(),
              sn = !0,
              nn.sort(function(t, e) {
                return t.id - e.id;
              }),
              ln = 0;
            ln < nn.length;
            ln++
          )
            (t = nn[ln]).before && t.before(), (e = t.id), (on[e] = null), t.run();
          var n = rn.slice(),
            r = nn.slice();
          (ln = nn.length = rn.length = 0),
            (on = {}),
            (an = sn = !1),
            (function(t) {
              for (var e = 0; e < t.length; e++) (t[e]._inactive = !0), tn(t[e], !0);
            })(n),
            (function(t) {
              var e = t.length;
              for (; e--; ) {
                var n = t[e],
                  r = n.vm;
                r._watcher === n && r._isMounted && !r._isDestroyed && en(r, 'updated');
              }
            })(r),
            ot && V.devtools && ot.emit('flush');
        }
        var hn = 0,
          pn = function(t, e, n, r, i) {
            (this.vm = t),
              i && (t._watcher = this),
              t._watchers.push(this),
              r
                ? ((this.deep = !!r.deep), (this.user = !!r.user), (this.lazy = !!r.lazy), (this.sync = !!r.sync), (this.before = r.before))
                : (this.deep = this.user = this.lazy = this.sync = !1),
              (this.cb = n),
              (this.id = ++hn),
              (this.active = !0),
              (this.dirty = this.lazy),
              (this.deps = []),
              (this.newDeps = []),
              (this.depIds = new st()),
              (this.newDepIds = new st()),
              (this.expression = ''),
              'function' == typeof e
                ? (this.getter = e)
                : ((this.getter = (function(t) {
                    if (!z.test(t)) {
                      var e = t.split('.');
                      return function(t) {
                        for (var n = 0; n < e.length; n++) {
                          if (!t) return;
                          t = t[e[n]];
                        }
                        return t;
                      };
                    }
                  })(e)),
                  this.getter || (this.getter = $)),
              (this.value = this.lazy ? void 0 : this.get());
          };
        (pn.prototype.get = function() {
          var t;
          ht(this);
          var e = this.vm;
          try {
            t = this.getter.call(e, e);
          } catch (t) {
            if (!this.user) throw t;
            Ht(t, e, 'getter for watcher "' + this.expression + '"');
          } finally {
            this.deep && re(t), pt(), this.cleanupDeps();
          }
          return t;
        }),
          (pn.prototype.addDep = function(t) {
            var e = t.id;
            this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this));
          }),
          (pn.prototype.cleanupDeps = function() {
            for (var t = this.deps.length; t--; ) {
              var e = this.deps[t];
              this.newDepIds.has(e.id) || e.removeSub(this);
            }
            var n = this.depIds;
            (this.depIds = this.newDepIds),
              (this.newDepIds = n),
              this.newDepIds.clear(),
              (n = this.deps),
              (this.deps = this.newDeps),
              (this.newDeps = n),
              (this.newDeps.length = 0);
          }),
          (pn.prototype.update = function() {
            this.lazy
              ? (this.dirty = !0)
              : this.sync
              ? this.run()
              : (function(t) {
                  var e = t.id;
                  if (null == on[e]) {
                    if (((on[e] = !0), sn)) {
                      for (var n = nn.length - 1; n > ln && nn[n].id > t.id; ) n--;
                      nn.splice(n + 1, 0, t);
                    } else nn.push(t);
                    an || ((an = !0), ee(dn));
                  }
                })(this);
          }),
          (pn.prototype.run = function() {
            if (this.active) {
              var t = this.get();
              if (t !== this.value || l(t) || this.deep) {
                var e = this.value;
                if (((this.value = t), this.user))
                  try {
                    this.cb.call(this.vm, t, e);
                  } catch (t) {
                    Ht(t, this.vm, 'callback for watcher "' + this.expression + '"');
                  }
                else this.cb.call(this.vm, t, e);
              }
            }
          }),
          (pn.prototype.evaluate = function() {
            (this.value = this.get()), (this.dirty = !1);
          }),
          (pn.prototype.depend = function() {
            for (var t = this.deps.length; t--; ) this.deps[t].depend();
          }),
          (pn.prototype.teardown = function() {
            if (this.active) {
              this.vm._isBeingDestroyed || b(this.vm._watchers, this);
              for (var t = this.deps.length; t--; ) this.deps[t].removeSub(this);
              this.active = !1;
            }
          });
        var mn = { enumerable: !0, configurable: !0, get: $, set: $ };
        function vn(t, e, n) {
          (mn.get = function() {
            return this[e][n];
          }),
            (mn.set = function(t) {
              this[e][n] = t;
            }),
            Object.defineProperty(t, n, mn);
        }
        function gn(t) {
          t._watchers = [];
          var e = t.$options;
          e.props &&
            (function(t, e) {
              var n = t.$options.propsData || {},
                r = (t._props = {}),
                i = (t.$options._propKeys = []);
              t.$parent && kt(!1);
              var o = function(o) {
                i.push(o);
                var a = Rt(o, e, n, t);
                Pt(r, o, a), o in t || vn(t, '_props', o);
              };
              for (var a in e) o(a);
              kt(!0);
            })(t, e.props),
            e.methods &&
              (function(t, e) {
                t.$options.props;
                for (var n in e) t[n] = 'function' != typeof e[n] ? $ : P(e[n], t);
              })(t, e.methods),
            e.data
              ? (function(t) {
                  var e = t.$options.data;
                  c(
                    (e = t._data =
                      'function' == typeof e
                        ? (function(t, e) {
                            ht();
                            try {
                              return t.call(e, e);
                            } catch (t) {
                              return Ht(t, e, 'data()'), {};
                            } finally {
                              pt();
                            }
                          })(e, t)
                        : e || {})
                  ) || (e = {});
                  var n = Object.keys(e),
                    r = t.$options.props,
                    i = (t.$options.methods, n.length);
                  for (; i--; ) {
                    var o = n[i];
                    0, (r && w(r, o)) || ((a = void 0), 36 !== (a = (o + '').charCodeAt(0)) && 95 !== a && vn(t, '_data', o));
                  }
                  var a;
                  Tt(e, !0);
                })(t)
              : Tt((t._data = {}), !0),
            e.computed &&
              (function(t, e) {
                var n = (t._computedWatchers = Object.create(null)),
                  r = it();
                for (var i in e) {
                  var o = e[i],
                    a = 'function' == typeof o ? o : o.get;
                  0, r || (n[i] = new pn(t, a || $, $, bn)), i in t || yn(t, i, o);
                }
              })(t, e.computed),
            e.watch &&
              e.watch !== et &&
              (function(t, e) {
                for (var n in e) {
                  var r = e[n];
                  if (Array.isArray(r)) for (var i = 0; i < r.length; i++) Sn(t, n, r[i]);
                  else Sn(t, n, r);
                }
              })(t, e.watch);
        }
        var bn = { lazy: !0 };
        function yn(t, e, n) {
          var r = !it();
          'function' == typeof n ? ((mn.get = r ? wn(e) : On(n)), (mn.set = $)) : ((mn.get = n.get ? (r && !1 !== n.cache ? wn(e) : On(n.get)) : $), (mn.set = n.set || $)),
            Object.defineProperty(t, e, mn);
        }
        function wn(t) {
          return function() {
            var e = this._computedWatchers && this._computedWatchers[t];
            if (e) return e.dirty && e.evaluate(), ft.target && e.depend(), e.value;
          };
        }
        function On(t) {
          return function() {
            return t.call(this, this);
          };
        }
        function Sn(t, e, n, r) {
          return c(n) && ((r = n), (n = n.handler)), 'string' == typeof n && (n = t[n]), t.$watch(e, n, r);
        }
        var _n = 0;
        function kn(t) {
          var e = t.options;
          if (t.super) {
            var n = kn(t.super);
            if (n !== t.superOptions) {
              t.superOptions = n;
              var r = (function(t) {
                var e,
                  n = t.options,
                  r = t.sealedOptions;
                for (var i in n) n[i] !== r[i] && (e || (e = {}), (e[i] = n[i]));
                return e;
              })(t);
              r && C(t.extendOptions, r), (e = t.options = Nt(n, t.extendOptions)).name && (e.components[e.name] = t);
            }
          }
          return e;
        }
        function xn(t) {
          this._init(t);
        }
        function Tn(t) {
          t.cid = 0;
          var e = 1;
          t.extend = function(t) {
            t = t || {};
            var n = this,
              r = n.cid,
              i = t._Ctor || (t._Ctor = {});
            if (i[r]) return i[r];
            var o = t.name || n.options.name;
            var a = function(t) {
              this._init(t);
            };
            return (
              ((a.prototype = Object.create(n.prototype)).constructor = a),
              (a.cid = e++),
              (a.options = Nt(n.options, t)),
              (a.super = n),
              a.options.props &&
                (function(t) {
                  var e = t.options.props;
                  for (var n in e) vn(t.prototype, '_props', n);
                })(a),
              a.options.computed &&
                (function(t) {
                  var e = t.options.computed;
                  for (var n in e) yn(t.prototype, n, e[n]);
                })(a),
              (a.extend = n.extend),
              (a.mixin = n.mixin),
              (a.use = n.use),
              R.forEach(function(t) {
                a[t] = n[t];
              }),
              o && (a.options.components[o] = a),
              (a.superOptions = n.options),
              (a.extendOptions = t),
              (a.sealedOptions = C({}, a.options)),
              (i[r] = a),
              a
            );
          };
        }
        function Pn(t) {
          return t && (t.Ctor.options.name || t.tag);
        }
        function jn(t, e) {
          return Array.isArray(t) ? t.indexOf(e) > -1 : 'string' == typeof t ? t.split(',').indexOf(e) > -1 : !!f(t) && t.test(e);
        }
        function Cn(t, e) {
          var n = t.cache,
            r = t.keys,
            i = t._vnode;
          for (var o in n) {
            var a = n[o];
            if (a) {
              var s = Pn(a.componentOptions);
              s && !e(s) && Bn(n, o, r, i);
            }
          }
        }
        function Bn(t, e, n, r) {
          var i = t[e];
          !i || (r && i.tag === r.tag) || i.componentInstance.$destroy(), (t[e] = null), b(n, e);
        }
        !(function(t) {
          t.prototype._init = function(t) {
            var e = this;
            (e._uid = _n++),
              (e._isVue = !0),
              t && t._isComponent
                ? (function(t, e) {
                    var n = (t.$options = Object.create(t.constructor.options)),
                      r = e._parentVnode;
                    (n.parent = e.parent), (n._parentVnode = r);
                    var i = r.componentOptions;
                    (n.propsData = i.propsData),
                      (n._parentListeners = i.listeners),
                      (n._renderChildren = i.children),
                      (n._componentTag = i.tag),
                      e.render && ((n.render = e.render), (n.staticRenderFns = e.staticRenderFns));
                  })(e, t)
                : (e.$options = Nt(kn(e.constructor), t || {}, e)),
              (e._renderProxy = e),
              (e._self = e),
              (function(t) {
                var e = t.$options,
                  n = e.parent;
                if (n && !e.abstract) {
                  for (; n.$options.abstract && n.$parent; ) n = n.$parent;
                  n.$children.push(t);
                }
                (t.$parent = n),
                  (t.$root = n ? n.$root : t),
                  (t.$children = []),
                  (t.$refs = {}),
                  (t._watcher = null),
                  (t._inactive = null),
                  (t._directInactive = !1),
                  (t._isMounted = !1),
                  (t._isDestroyed = !1),
                  (t._isBeingDestroyed = !1);
              })(e),
              (function(t) {
                (t._events = Object.create(null)), (t._hasHookEvent = !1);
                var e = t.$options._parentListeners;
                e && Xe(t, e);
              })(e),
              (function(t) {
                (t._vnode = null), (t._staticTrees = null);
                var e = t.$options,
                  n = (t.$vnode = e._parentVnode),
                  i = n && n.context;
                (t.$slots = de(e._renderChildren, i)),
                  (t.$scopedSlots = r),
                  (t._c = function(e, n, r, i) {
                    return Me(t, e, n, r, i, !1);
                  }),
                  (t.$createElement = function(e, n, r, i) {
                    return Me(t, e, n, r, i, !0);
                  });
                var o = n && n.data;
                Pt(t, '$attrs', (o && o.attrs) || r, null, !0), Pt(t, '$listeners', e._parentListeners || r, null, !0);
              })(e),
              en(e, 'beforeCreate'),
              (function(t) {
                var e = fe(t.$options.inject, t);
                e &&
                  (kt(!1),
                  Object.keys(e).forEach(function(n) {
                    Pt(t, n, e[n]);
                  }),
                  kt(!0));
              })(e),
              gn(e),
              (function(t) {
                var e = t.$options.provide;
                e && (t._provided = 'function' == typeof e ? e.call(t) : e);
              })(e),
              en(e, 'created'),
              e.$options.el && e.$mount(e.$options.el);
          };
        })(xn),
          (function(t) {
            var e = {
                get: function() {
                  return this._data;
                },
              },
              n = {
                get: function() {
                  return this._props;
                },
              };
            Object.defineProperty(t.prototype, '$data', e),
              Object.defineProperty(t.prototype, '$props', n),
              (t.prototype.$set = jt),
              (t.prototype.$delete = Ct),
              (t.prototype.$watch = function(t, e, n) {
                if (c(e)) return Sn(this, t, e, n);
                (n = n || {}).user = !0;
                var r = new pn(this, t, e, n);
                if (n.immediate)
                  try {
                    e.call(this, r.value);
                  } catch (t) {
                    Ht(t, this, 'callback for immediate watcher "' + r.expression + '"');
                  }
                return function() {
                  r.teardown();
                };
              });
          })(xn),
          (function(t) {
            var e = /^hook:/;
            (t.prototype.$on = function(t, n) {
              var r = this;
              if (Array.isArray(t)) for (var i = 0, o = t.length; i < o; i++) r.$on(t[i], n);
              else (r._events[t] || (r._events[t] = [])).push(n), e.test(t) && (r._hasHookEvent = !0);
              return r;
            }),
              (t.prototype.$once = function(t, e) {
                var n = this;
                function r() {
                  n.$off(t, r), e.apply(n, arguments);
                }
                return (r.fn = e), n.$on(t, r), n;
              }),
              (t.prototype.$off = function(t, e) {
                var n = this;
                if (!arguments.length) return (n._events = Object.create(null)), n;
                if (Array.isArray(t)) {
                  for (var r = 0, i = t.length; r < i; r++) n.$off(t[r], e);
                  return n;
                }
                var o,
                  a = n._events[t];
                if (!a) return n;
                if (!e) return (n._events[t] = null), n;
                for (var s = a.length; s--; )
                  if ((o = a[s]) === e || o.fn === e) {
                    a.splice(s, 1);
                    break;
                  }
                return n;
              }),
              (t.prototype.$emit = function(t) {
                var e = this,
                  n = e._events[t];
                if (n) {
                  n = n.length > 1 ? j(n) : n;
                  for (var r = j(arguments, 1), i = 'event handler for "' + t + '"', o = 0, a = n.length; o < a; o++) zt(n[o], e, r, e, i);
                }
                return e;
              });
          })(xn),
          (function(t) {
            (t.prototype._update = function(t, e) {
              var n = this,
                r = n.$el,
                i = n._vnode,
                o = Ze(n);
              (n._vnode = t),
                (n.$el = i ? n.__patch__(i, t) : n.__patch__(n.$el, t, e, !1)),
                o(),
                r && (r.__vue__ = null),
                n.$el && (n.$el.__vue__ = n),
                n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el);
            }),
              (t.prototype.$forceUpdate = function() {
                this._watcher && this._watcher.update();
              }),
              (t.prototype.$destroy = function() {
                var t = this;
                if (!t._isBeingDestroyed) {
                  en(t, 'beforeDestroy'), (t._isBeingDestroyed = !0);
                  var e = t.$parent;
                  !e || e._isBeingDestroyed || t.$options.abstract || b(e.$children, t), t._watcher && t._watcher.teardown();
                  for (var n = t._watchers.length; n--; ) t._watchers[n].teardown();
                  t._data.__ob__ && t._data.__ob__.vmCount--,
                    (t._isDestroyed = !0),
                    t.__patch__(t._vnode, null),
                    en(t, 'destroyed'),
                    t.$off(),
                    t.$el && (t.$el.__vue__ = null),
                    t.$vnode && (t.$vnode.parent = null);
                }
              });
          })(xn),
          (function(t) {
            $e(t.prototype),
              (t.prototype.$nextTick = function(t) {
                return ee(t, this);
              }),
              (t.prototype._render = function() {
                var t,
                  e = this,
                  n = e.$options,
                  r = n.render,
                  i = n._parentVnode;
                i && (e.$scopedSlots = pe(i.data.scopedSlots, e.$slots, e.$scopedSlots)), (e.$vnode = i);
                try {
                  (ze = e), (t = r.call(e._renderProxy, e.$createElement));
                } catch (n) {
                  Ht(n, e, 'render'), (t = e._vnode);
                } finally {
                  ze = null;
                }
                return Array.isArray(t) && 1 === t.length && (t = t[0]), t instanceof mt || (t = gt()), (t.parent = i), t;
              });
          })(xn);
        var $n = [String, RegExp, Array],
          An = {
            KeepAlive: {
              name: 'keep-alive',
              abstract: !0,
              props: { include: $n, exclude: $n, max: [String, Number] },
              created: function() {
                (this.cache = Object.create(null)), (this.keys = []);
              },
              destroyed: function() {
                for (var t in this.cache) Bn(this.cache, t, this.keys);
              },
              mounted: function() {
                var t = this;
                this.$watch('include', function(e) {
                  Cn(t, function(t) {
                    return jn(e, t);
                  });
                }),
                  this.$watch('exclude', function(e) {
                    Cn(t, function(t) {
                      return !jn(e, t);
                    });
                  });
              },
              render: function() {
                var t = this.$slots.default,
                  e = We(t),
                  n = e && e.componentOptions;
                if (n) {
                  var r = Pn(n),
                    i = this.include,
                    o = this.exclude;
                  if ((i && (!r || !jn(i, r))) || (o && r && jn(o, r))) return e;
                  var a = this.cache,
                    s = this.keys,
                    l = null == e.key ? n.Ctor.cid + (n.tag ? '::' + n.tag : '') : e.key;
                  a[l]
                    ? ((e.componentInstance = a[l].componentInstance), b(s, l), s.push(l))
                    : ((a[l] = e), s.push(l), this.max && s.length > parseInt(this.max) && Bn(a, s[0], s, this._vnode)),
                    (e.data.keepAlive = !0);
                }
                return e || (t && t[0]);
              },
            },
          };
        !(function(t) {
          var e = {
            get: function() {
              return V;
            },
          };
          Object.defineProperty(t, 'config', e),
            (t.util = { warn: ut, extend: C, mergeOptions: Nt, defineReactive: Pt }),
            (t.set = jt),
            (t.delete = Ct),
            (t.nextTick = ee),
            (t.observable = function(t) {
              return Tt(t), t;
            }),
            (t.options = Object.create(null)),
            R.forEach(function(e) {
              t.options[e + 's'] = Object.create(null);
            }),
            (t.options._base = t),
            C(t.options.components, An),
            (function(t) {
              t.use = function(t) {
                var e = this._installedPlugins || (this._installedPlugins = []);
                if (e.indexOf(t) > -1) return this;
                var n = j(arguments, 1);
                return n.unshift(this), 'function' == typeof t.install ? t.install.apply(t, n) : 'function' == typeof t && t.apply(null, n), e.push(t), this;
              };
            })(t),
            (function(t) {
              t.mixin = function(t) {
                return (this.options = Nt(this.options, t)), this;
              };
            })(t),
            Tn(t),
            (function(t) {
              R.forEach(function(e) {
                t[e] = function(t, n) {
                  return n
                    ? ('component' === e && c(n) && ((n.name = n.name || t), (n = this.options._base.extend(n))),
                      'directive' === e && 'function' == typeof n && (n = { bind: n, update: n }),
                      (this.options[e + 's'][t] = n),
                      n)
                    : this.options[e + 's'][t];
                };
              });
            })(t);
        })(xn),
          Object.defineProperty(xn.prototype, '$isServer', { get: it }),
          Object.defineProperty(xn.prototype, '$ssrContext', {
            get: function() {
              return this.$vnode && this.$vnode.ssrContext;
            },
          }),
          Object.defineProperty(xn, 'FunctionalRenderContext', { value: Ae }),
          (xn.version = '2.6.10');
        var En = v('style,class'),
          In = v('input,textarea,option,select,progress'),
          Dn = v('contenteditable,draggable,spellcheck'),
          Nn = v('events,caret,typing,plaintext-only'),
          Fn = function(t, e) {
            return Hn(e) || 'false' === e ? 'false' : 'contenteditable' === t && Nn(e) ? e : 'true';
          },
          Rn = v(
            'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible'
          ),
          Ln = 'http://www.w3.org/1999/xlink',
          Vn = function(t) {
            return ':' === t.charAt(5) && 'xlink' === t.slice(0, 5);
          },
          Mn = function(t) {
            return Vn(t) ? t.slice(6, t.length) : '';
          },
          Hn = function(t) {
            return null == t || !1 === t;
          };
        function zn(t) {
          for (var e = t.data, n = t, r = t; o(r.componentInstance); ) (r = r.componentInstance._vnode) && r.data && (e = Gn(r.data, e));
          for (; o((n = n.parent)); ) n && n.data && (e = Gn(e, n.data));
          return (function(t, e) {
            if (o(t) || o(e)) return Un(t, Wn(e));
            return '';
          })(e.staticClass, e.class);
        }
        function Gn(t, e) {
          return { staticClass: Un(t.staticClass, e.staticClass), class: o(t.class) ? [t.class, e.class] : e.class };
        }
        function Un(t, e) {
          return t ? (e ? t + ' ' + e : t) : e || '';
        }
        function Wn(t) {
          return Array.isArray(t)
            ? (function(t) {
                for (var e, n = '', r = 0, i = t.length; r < i; r++) o((e = Wn(t[r]))) && '' !== e && (n && (n += ' '), (n += e));
                return n;
              })(t)
            : l(t)
            ? (function(t) {
                var e = '';
                for (var n in t) t[n] && (e && (e += ' '), (e += n));
                return e;
              })(t)
            : 'string' == typeof t
            ? t
            : '';
        }
        var qn = { svg: 'http://www.w3.org/2000/svg', math: 'http://www.w3.org/1998/Math/MathML' },
          Kn = v(
            'html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot'
          ),
          Jn = v(
            'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
            !0
          ),
          Xn = function(t) {
            return Kn(t) || Jn(t);
          };
        var Yn = Object.create(null);
        var Zn = v('text,number,password,search,email,tel,url');
        var Qn = Object.freeze({
            createElement: function(t, e) {
              var n = document.createElement(t);
              return 'select' !== t ? n : (e.data && e.data.attrs && void 0 !== e.data.attrs.multiple && n.setAttribute('multiple', 'multiple'), n);
            },
            createElementNS: function(t, e) {
              return document.createElementNS(qn[t], e);
            },
            createTextNode: function(t) {
              return document.createTextNode(t);
            },
            createComment: function(t) {
              return document.createComment(t);
            },
            insertBefore: function(t, e, n) {
              t.insertBefore(e, n);
            },
            removeChild: function(t, e) {
              t.removeChild(e);
            },
            appendChild: function(t, e) {
              t.appendChild(e);
            },
            parentNode: function(t) {
              return t.parentNode;
            },
            nextSibling: function(t) {
              return t.nextSibling;
            },
            tagName: function(t) {
              return t.tagName;
            },
            setTextContent: function(t, e) {
              t.textContent = e;
            },
            setStyleScope: function(t, e) {
              t.setAttribute(e, '');
            },
          }),
          tr = {
            create: function(t, e) {
              er(e);
            },
            update: function(t, e) {
              t.data.ref !== e.data.ref && (er(t, !0), er(e));
            },
            destroy: function(t) {
              er(t, !0);
            },
          };
        function er(t, e) {
          var n = t.data.ref;
          if (o(n)) {
            var r = t.context,
              i = t.componentInstance || t.elm,
              a = r.$refs;
            e
              ? Array.isArray(a[n])
                ? b(a[n], i)
                : a[n] === i && (a[n] = void 0)
              : t.data.refInFor
              ? Array.isArray(a[n])
                ? a[n].indexOf(i) < 0 && a[n].push(i)
                : (a[n] = [i])
              : (a[n] = i);
          }
        }
        var nr = new mt('', {}, []),
          rr = ['create', 'activate', 'update', 'remove', 'destroy'];
        function ir(t, e) {
          return (
            t.key === e.key &&
            ((t.tag === e.tag &&
              t.isComment === e.isComment &&
              o(t.data) === o(e.data) &&
              (function(t, e) {
                if ('input' !== t.tag) return !0;
                var n,
                  r = o((n = t.data)) && o((n = n.attrs)) && n.type,
                  i = o((n = e.data)) && o((n = n.attrs)) && n.type;
                return r === i || (Zn(r) && Zn(i));
              })(t, e)) ||
              (a(t.isAsyncPlaceholder) && t.asyncFactory === e.asyncFactory && i(e.asyncFactory.error)))
          );
        }
        function or(t, e, n) {
          var r,
            i,
            a = {};
          for (r = e; r <= n; ++r) o((i = t[r].key)) && (a[i] = r);
          return a;
        }
        var ar = {
          create: sr,
          update: sr,
          destroy: function(t) {
            sr(t, nr);
          },
        };
        function sr(t, e) {
          (t.data.directives || e.data.directives) &&
            (function(t, e) {
              var n,
                r,
                i,
                o = t === nr,
                a = e === nr,
                s = ur(t.data.directives, t.context),
                l = ur(e.data.directives, e.context),
                u = [],
                c = [];
              for (n in l)
                (r = s[n]),
                  (i = l[n]),
                  r
                    ? ((i.oldValue = r.value), (i.oldArg = r.arg), fr(i, 'update', e, t), i.def && i.def.componentUpdated && c.push(i))
                    : (fr(i, 'bind', e, t), i.def && i.def.inserted && u.push(i));
              if (u.length) {
                var f = function() {
                  for (var n = 0; n < u.length; n++) fr(u[n], 'inserted', e, t);
                };
                o ? se(e, 'insert', f) : f();
              }
              c.length &&
                se(e, 'postpatch', function() {
                  for (var n = 0; n < c.length; n++) fr(c[n], 'componentUpdated', e, t);
                });
              if (!o) for (n in s) l[n] || fr(s[n], 'unbind', t, t, a);
            })(t, e);
        }
        var lr = Object.create(null);
        function ur(t, e) {
          var n,
            r,
            i = Object.create(null);
          if (!t) return i;
          for (n = 0; n < t.length; n++) (r = t[n]).modifiers || (r.modifiers = lr), (i[cr(r)] = r), (r.def = Ft(e.$options, 'directives', r.name));
          return i;
        }
        function cr(t) {
          return t.rawName || t.name + '.' + Object.keys(t.modifiers || {}).join('.');
        }
        function fr(t, e, n, r, i) {
          var o = t.def && t.def[e];
          if (o)
            try {
              o(n.elm, t, n, r, i);
            } catch (r) {
              Ht(r, n.context, 'directive ' + t.name + ' ' + e + ' hook');
            }
        }
        var dr = [tr, ar];
        function hr(t, e) {
          var n = e.componentOptions;
          if (!((o(n) && !1 === n.Ctor.options.inheritAttrs) || (i(t.data.attrs) && i(e.data.attrs)))) {
            var r,
              a,
              s = e.elm,
              l = t.data.attrs || {},
              u = e.data.attrs || {};
            for (r in (o(u.__ob__) && (u = e.data.attrs = C({}, u)), u)) (a = u[r]), l[r] !== a && pr(s, r, a);
            for (r in ((X || Z) && u.value !== l.value && pr(s, 'value', u.value), l)) i(u[r]) && (Vn(r) ? s.removeAttributeNS(Ln, Mn(r)) : Dn(r) || s.removeAttribute(r));
          }
        }
        function pr(t, e, n) {
          t.tagName.indexOf('-') > -1
            ? mr(t, e, n)
            : Rn(e)
            ? Hn(n)
              ? t.removeAttribute(e)
              : ((n = 'allowfullscreen' === e && 'EMBED' === t.tagName ? 'true' : e), t.setAttribute(e, n))
            : Dn(e)
            ? t.setAttribute(e, Fn(e, n))
            : Vn(e)
            ? Hn(n)
              ? t.removeAttributeNS(Ln, Mn(e))
              : t.setAttributeNS(Ln, e, n)
            : mr(t, e, n);
        }
        function mr(t, e, n) {
          if (Hn(n)) t.removeAttribute(e);
          else {
            if (X && !Y && 'TEXTAREA' === t.tagName && 'placeholder' === e && '' !== n && !t.__ieph) {
              var r = function(e) {
                e.stopImmediatePropagation(), t.removeEventListener('input', r);
              };
              t.addEventListener('input', r), (t.__ieph = !0);
            }
            t.setAttribute(e, n);
          }
        }
        var vr = { create: hr, update: hr };
        function gr(t, e) {
          var n = e.elm,
            r = e.data,
            a = t.data;
          if (!(i(r.staticClass) && i(r.class) && (i(a) || (i(a.staticClass) && i(a.class))))) {
            var s = zn(e),
              l = n._transitionClasses;
            o(l) && (s = Un(s, Wn(l))), s !== n._prevClass && (n.setAttribute('class', s), (n._prevClass = s));
          }
        }
        var br,
          yr = { create: gr, update: gr },
          wr = '__r',
          Or = '__c';
        function Sr(t, e, n) {
          var r = br;
          return function i() {
            var o = e.apply(null, arguments);
            null !== o && xr(t, i, n, r);
          };
        }
        var _r = qt && !(tt && Number(tt[1]) <= 53);
        function kr(t, e, n, r) {
          if (_r) {
            var i = un,
              o = e;
            e = o._wrapper = function(t) {
              if (t.target === t.currentTarget || t.timeStamp >= i || t.timeStamp <= 0 || t.target.ownerDocument !== document) return o.apply(this, arguments);
            };
          }
          br.addEventListener(t, e, nt ? { capture: n, passive: r } : n);
        }
        function xr(t, e, n, r) {
          (r || br).removeEventListener(t, e._wrapper || e, n);
        }
        function Tr(t, e) {
          if (!i(t.data.on) || !i(e.data.on)) {
            var n = e.data.on || {},
              r = t.data.on || {};
            (br = e.elm),
              (function(t) {
                if (o(t[wr])) {
                  var e = X ? 'change' : 'input';
                  (t[e] = [].concat(t[wr], t[e] || [])), delete t[wr];
                }
                o(t[Or]) && ((t.change = [].concat(t[Or], t.change || [])), delete t[Or]);
              })(n),
              ae(n, r, kr, xr, Sr, e.context),
              (br = void 0);
          }
        }
        var Pr,
          jr = { create: Tr, update: Tr };
        function Cr(t, e) {
          if (!i(t.data.domProps) || !i(e.data.domProps)) {
            var n,
              r,
              a = e.elm,
              s = t.data.domProps || {},
              l = e.data.domProps || {};
            for (n in (o(l.__ob__) && (l = e.data.domProps = C({}, l)), s)) n in l || (a[n] = '');
            for (n in l) {
              if (((r = l[n]), 'textContent' === n || 'innerHTML' === n)) {
                if ((e.children && (e.children.length = 0), r === s[n])) continue;
                1 === a.childNodes.length && a.removeChild(a.childNodes[0]);
              }
              if ('value' === n && 'PROGRESS' !== a.tagName) {
                a._value = r;
                var u = i(r) ? '' : String(r);
                Br(a, u) && (a.value = u);
              } else if ('innerHTML' === n && Jn(a.tagName) && i(a.innerHTML)) {
                (Pr = Pr || document.createElement('div')).innerHTML = '<svg>' + r + '</svg>';
                for (var c = Pr.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
                for (; c.firstChild; ) a.appendChild(c.firstChild);
              } else if (r !== s[n])
                try {
                  a[n] = r;
                } catch (t) {}
            }
          }
        }
        function Br(t, e) {
          return (
            !t.composing &&
            ('OPTION' === t.tagName ||
              (function(t, e) {
                var n = !0;
                try {
                  n = document.activeElement !== t;
                } catch (t) {}
                return n && t.value !== e;
              })(t, e) ||
              (function(t, e) {
                var n = t.value,
                  r = t._vModifiers;
                if (o(r)) {
                  if (r.number) return m(n) !== m(e);
                  if (r.trim) return n.trim() !== e.trim();
                }
                return n !== e;
              })(t, e))
          );
        }
        var $r = { create: Cr, update: Cr },
          Ar = O(function(t) {
            var e = {},
              n = /:(.+)/;
            return (
              t.split(/;(?![^(]*\))/g).forEach(function(t) {
                if (t) {
                  var r = t.split(n);
                  r.length > 1 && (e[r[0].trim()] = r[1].trim());
                }
              }),
              e
            );
          });
        function Er(t) {
          var e = Ir(t.style);
          return t.staticStyle ? C(t.staticStyle, e) : e;
        }
        function Ir(t) {
          return Array.isArray(t) ? B(t) : 'string' == typeof t ? Ar(t) : t;
        }
        var Dr,
          Nr = /^--/,
          Fr = /\s*!important$/,
          Rr = function(t, e, n) {
            if (Nr.test(e)) t.style.setProperty(e, n);
            else if (Fr.test(n)) t.style.setProperty(T(e), n.replace(Fr, ''), 'important');
            else {
              var r = Vr(e);
              if (Array.isArray(n)) for (var i = 0, o = n.length; i < o; i++) t.style[r] = n[i];
              else t.style[r] = n;
            }
          },
          Lr = ['Webkit', 'Moz', 'ms'],
          Vr = O(function(t) {
            if (((Dr = Dr || document.createElement('div').style), 'filter' !== (t = _(t)) && t in Dr)) return t;
            for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < Lr.length; n++) {
              var r = Lr[n] + e;
              if (r in Dr) return r;
            }
          });
        function Mr(t, e) {
          var n = e.data,
            r = t.data;
          if (!(i(n.staticStyle) && i(n.style) && i(r.staticStyle) && i(r.style))) {
            var a,
              s,
              l = e.elm,
              u = r.staticStyle,
              c = r.normalizedStyle || r.style || {},
              f = u || c,
              d = Ir(e.data.style) || {};
            e.data.normalizedStyle = o(d.__ob__) ? C({}, d) : d;
            var h = (function(t, e) {
              var n,
                r = {};
              if (e) for (var i = t; i.componentInstance; ) (i = i.componentInstance._vnode) && i.data && (n = Er(i.data)) && C(r, n);
              (n = Er(t.data)) && C(r, n);
              for (var o = t; (o = o.parent); ) o.data && (n = Er(o.data)) && C(r, n);
              return r;
            })(e, !0);
            for (s in f) i(h[s]) && Rr(l, s, '');
            for (s in h) (a = h[s]) !== f[s] && Rr(l, s, null == a ? '' : a);
          }
        }
        var Hr = { create: Mr, update: Mr },
          zr = /\s+/;
        function Gr(t, e) {
          if (e && (e = e.trim()))
            if (t.classList)
              e.indexOf(' ') > -1
                ? e.split(zr).forEach(function(e) {
                    return t.classList.add(e);
                  })
                : t.classList.add(e);
            else {
              var n = ' ' + (t.getAttribute('class') || '') + ' ';
              n.indexOf(' ' + e + ' ') < 0 && t.setAttribute('class', (n + e).trim());
            }
        }
        function Ur(t, e) {
          if (e && (e = e.trim()))
            if (t.classList)
              e.indexOf(' ') > -1
                ? e.split(zr).forEach(function(e) {
                    return t.classList.remove(e);
                  })
                : t.classList.remove(e),
                t.classList.length || t.removeAttribute('class');
            else {
              for (var n = ' ' + (t.getAttribute('class') || '') + ' ', r = ' ' + e + ' '; n.indexOf(r) >= 0; ) n = n.replace(r, ' ');
              (n = n.trim()) ? t.setAttribute('class', n) : t.removeAttribute('class');
            }
        }
        function Wr(t) {
          if (t) {
            if ('object' == typeof t) {
              var e = {};
              return !1 !== t.css && C(e, qr(t.name || 'v')), C(e, t), e;
            }
            return 'string' == typeof t ? qr(t) : void 0;
          }
        }
        var qr = O(function(t) {
            return {
              enterClass: t + '-enter',
              enterToClass: t + '-enter-to',
              enterActiveClass: t + '-enter-active',
              leaveClass: t + '-leave',
              leaveToClass: t + '-leave-to',
              leaveActiveClass: t + '-leave-active',
            };
          }),
          Kr = W && !Y,
          Jr = 'transition',
          Xr = 'animation',
          Yr = 'transition',
          Zr = 'transitionend',
          Qr = 'animation',
          ti = 'animationend';
        Kr &&
          (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && ((Yr = 'WebkitTransition'), (Zr = 'webkitTransitionEnd')),
          void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && ((Qr = 'WebkitAnimation'), (ti = 'webkitAnimationEnd')));
        var ei = W
          ? window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : setTimeout
          : function(t) {
              return t();
            };
        function ni(t) {
          ei(function() {
            ei(t);
          });
        }
        function ri(t, e) {
          var n = t._transitionClasses || (t._transitionClasses = []);
          n.indexOf(e) < 0 && (n.push(e), Gr(t, e));
        }
        function ii(t, e) {
          t._transitionClasses && b(t._transitionClasses, e), Ur(t, e);
        }
        function oi(t, e, n) {
          var r = si(t, e),
            i = r.type,
            o = r.timeout,
            a = r.propCount;
          if (!i) return n();
          var s = i === Jr ? Zr : ti,
            l = 0,
            u = function() {
              t.removeEventListener(s, c), n();
            },
            c = function(e) {
              e.target === t && ++l >= a && u();
            };
          setTimeout(function() {
            l < a && u();
          }, o + 1),
            t.addEventListener(s, c);
        }
        var ai = /\b(transform|all)(,|$)/;
        function si(t, e) {
          var n,
            r = window.getComputedStyle(t),
            i = (r[Yr + 'Delay'] || '').split(', '),
            o = (r[Yr + 'Duration'] || '').split(', '),
            a = li(i, o),
            s = (r[Qr + 'Delay'] || '').split(', '),
            l = (r[Qr + 'Duration'] || '').split(', '),
            u = li(s, l),
            c = 0,
            f = 0;
          return (
            e === Jr
              ? a > 0 && ((n = Jr), (c = a), (f = o.length))
              : e === Xr
              ? u > 0 && ((n = Xr), (c = u), (f = l.length))
              : (f = (n = (c = Math.max(a, u)) > 0 ? (a > u ? Jr : Xr) : null) ? (n === Jr ? o.length : l.length) : 0),
            { type: n, timeout: c, propCount: f, hasTransform: n === Jr && ai.test(r[Yr + 'Property']) }
          );
        }
        function li(t, e) {
          for (; t.length < e.length; ) t = t.concat(t);
          return Math.max.apply(
            null,
            e.map(function(e, n) {
              return ui(e) + ui(t[n]);
            })
          );
        }
        function ui(t) {
          return 1e3 * Number(t.slice(0, -1).replace(',', '.'));
        }
        function ci(t, e) {
          var n = t.elm;
          o(n._leaveCb) && ((n._leaveCb.cancelled = !0), n._leaveCb());
          var r = Wr(t.data.transition);
          if (!i(r) && !o(n._enterCb) && 1 === n.nodeType) {
            for (
              var a = r.css,
                s = r.type,
                u = r.enterClass,
                c = r.enterToClass,
                f = r.enterActiveClass,
                d = r.appearClass,
                h = r.appearToClass,
                p = r.appearActiveClass,
                v = r.beforeEnter,
                g = r.enter,
                b = r.afterEnter,
                y = r.enterCancelled,
                w = r.beforeAppear,
                O = r.appear,
                S = r.afterAppear,
                _ = r.appearCancelled,
                k = r.duration,
                x = Ye,
                T = Ye.$vnode;
              T && T.parent;

            )
              (x = T.context), (T = T.parent);
            var P = !x._isMounted || !t.isRootInsert;
            if (!P || O || '' === O) {
              var j = P && d ? d : u,
                C = P && p ? p : f,
                B = P && h ? h : c,
                $ = (P && w) || v,
                A = P && 'function' == typeof O ? O : g,
                E = (P && S) || b,
                I = (P && _) || y,
                D = m(l(k) ? k.enter : k);
              0;
              var F = !1 !== a && !Y,
                R = hi(A),
                L = (n._enterCb = N(function() {
                  F && (ii(n, B), ii(n, C)), L.cancelled ? (F && ii(n, j), I && I(n)) : E && E(n), (n._enterCb = null);
                }));
              t.data.show ||
                se(t, 'insert', function() {
                  var e = n.parentNode,
                    r = e && e._pending && e._pending[t.key];
                  r && r.tag === t.tag && r.elm._leaveCb && r.elm._leaveCb(), A && A(n, L);
                }),
                $ && $(n),
                F &&
                  (ri(n, j),
                  ri(n, C),
                  ni(function() {
                    ii(n, j), L.cancelled || (ri(n, B), R || (di(D) ? setTimeout(L, D) : oi(n, s, L)));
                  })),
                t.data.show && (e && e(), A && A(n, L)),
                F || R || L();
            }
          }
        }
        function fi(t, e) {
          var n = t.elm;
          o(n._enterCb) && ((n._enterCb.cancelled = !0), n._enterCb());
          var r = Wr(t.data.transition);
          if (i(r) || 1 !== n.nodeType) return e();
          if (!o(n._leaveCb)) {
            var a = r.css,
              s = r.type,
              u = r.leaveClass,
              c = r.leaveToClass,
              f = r.leaveActiveClass,
              d = r.beforeLeave,
              h = r.leave,
              p = r.afterLeave,
              v = r.leaveCancelled,
              g = r.delayLeave,
              b = r.duration,
              y = !1 !== a && !Y,
              w = hi(h),
              O = m(l(b) ? b.leave : b);
            0;
            var S = (n._leaveCb = N(function() {
              n.parentNode && n.parentNode._pending && (n.parentNode._pending[t.key] = null),
                y && (ii(n, c), ii(n, f)),
                S.cancelled ? (y && ii(n, u), v && v(n)) : (e(), p && p(n)),
                (n._leaveCb = null);
            }));
            g ? g(_) : _();
          }
          function _() {
            S.cancelled ||
              (!t.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[t.key] = t),
              d && d(n),
              y &&
                (ri(n, u),
                ri(n, f),
                ni(function() {
                  ii(n, u), S.cancelled || (ri(n, c), w || (di(O) ? setTimeout(S, O) : oi(n, s, S)));
                })),
              h && h(n, S),
              y || w || S());
          }
        }
        function di(t) {
          return 'number' == typeof t && !isNaN(t);
        }
        function hi(t) {
          if (i(t)) return !1;
          var e = t.fns;
          return o(e) ? hi(Array.isArray(e) ? e[0] : e) : (t._length || t.length) > 1;
        }
        function pi(t, e) {
          !0 !== e.data.show && ci(e);
        }
        var mi = (function(t) {
          var e,
            n,
            r = {},
            l = t.modules,
            u = t.nodeOps;
          for (e = 0; e < rr.length; ++e) for (r[rr[e]] = [], n = 0; n < l.length; ++n) o(l[n][rr[e]]) && r[rr[e]].push(l[n][rr[e]]);
          function c(t) {
            var e = u.parentNode(t);
            o(e) && u.removeChild(e, t);
          }
          function f(t, e, n, i, s, l, c) {
            if (
              (o(t.elm) && o(l) && (t = l[c] = yt(t)),
              (t.isRootInsert = !s),
              !(function(t, e, n, i) {
                var s = t.data;
                if (o(s)) {
                  var l = o(t.componentInstance) && s.keepAlive;
                  if ((o((s = s.hook)) && o((s = s.init)) && s(t, !1), o(t.componentInstance)))
                    return (
                      d(t, e),
                      h(n, t.elm, i),
                      a(l) &&
                        (function(t, e, n, i) {
                          var a,
                            s = t;
                          for (; s.componentInstance; )
                            if (((s = s.componentInstance._vnode), o((a = s.data)) && o((a = a.transition)))) {
                              for (a = 0; a < r.activate.length; ++a) r.activate[a](nr, s);
                              e.push(s);
                              break;
                            }
                          h(n, t.elm, i);
                        })(t, e, n, i),
                      !0
                    );
                }
              })(t, e, n, i))
            ) {
              var f = t.data,
                m = t.children,
                v = t.tag;
              o(v)
                ? ((t.elm = t.ns ? u.createElementNS(t.ns, v) : u.createElement(v, t)), b(t), p(t, m, e), o(f) && g(t, e), h(n, t.elm, i))
                : a(t.isComment)
                ? ((t.elm = u.createComment(t.text)), h(n, t.elm, i))
                : ((t.elm = u.createTextNode(t.text)), h(n, t.elm, i));
            }
          }
          function d(t, e) {
            o(t.data.pendingInsert) && (e.push.apply(e, t.data.pendingInsert), (t.data.pendingInsert = null)),
              (t.elm = t.componentInstance.$el),
              m(t) ? (g(t, e), b(t)) : (er(t), e.push(t));
          }
          function h(t, e, n) {
            o(t) && (o(n) ? u.parentNode(n) === t && u.insertBefore(t, e, n) : u.appendChild(t, e));
          }
          function p(t, e, n) {
            if (Array.isArray(e)) {
              0;
              for (var r = 0; r < e.length; ++r) f(e[r], n, t.elm, null, !0, e, r);
            } else s(t.text) && u.appendChild(t.elm, u.createTextNode(String(t.text)));
          }
          function m(t) {
            for (; t.componentInstance; ) t = t.componentInstance._vnode;
            return o(t.tag);
          }
          function g(t, n) {
            for (var i = 0; i < r.create.length; ++i) r.create[i](nr, t);
            o((e = t.data.hook)) && (o(e.create) && e.create(nr, t), o(e.insert) && n.push(t));
          }
          function b(t) {
            var e;
            if (o((e = t.fnScopeId))) u.setStyleScope(t.elm, e);
            else for (var n = t; n; ) o((e = n.context)) && o((e = e.$options._scopeId)) && u.setStyleScope(t.elm, e), (n = n.parent);
            o((e = Ye)) && e !== t.context && e !== t.fnContext && o((e = e.$options._scopeId)) && u.setStyleScope(t.elm, e);
          }
          function y(t, e, n, r, i, o) {
            for (; r <= i; ++r) f(n[r], o, t, e, !1, n, r);
          }
          function w(t) {
            var e,
              n,
              i = t.data;
            if (o(i)) for (o((e = i.hook)) && o((e = e.destroy)) && e(t), e = 0; e < r.destroy.length; ++e) r.destroy[e](t);
            if (o((e = t.children))) for (n = 0; n < t.children.length; ++n) w(t.children[n]);
          }
          function O(t, e, n, r) {
            for (; n <= r; ++n) {
              var i = e[n];
              o(i) && (o(i.tag) ? (S(i), w(i)) : c(i.elm));
            }
          }
          function S(t, e) {
            if (o(e) || o(t.data)) {
              var n,
                i = r.remove.length + 1;
              for (
                o(e)
                  ? (e.listeners += i)
                  : (e = (function(t, e) {
                      function n() {
                        0 == --n.listeners && c(t);
                      }
                      return (n.listeners = e), n;
                    })(t.elm, i)),
                  o((n = t.componentInstance)) && o((n = n._vnode)) && o(n.data) && S(n, e),
                  n = 0;
                n < r.remove.length;
                ++n
              )
                r.remove[n](t, e);
              o((n = t.data.hook)) && o((n = n.remove)) ? n(t, e) : e();
            } else c(t.elm);
          }
          function _(t, e, n, r) {
            for (var i = n; i < r; i++) {
              var a = e[i];
              if (o(a) && ir(t, a)) return i;
            }
          }
          function k(t, e, n, s, l, c) {
            if (t !== e) {
              o(e.elm) && o(s) && (e = s[l] = yt(e));
              var d = (e.elm = t.elm);
              if (a(t.isAsyncPlaceholder)) o(e.asyncFactory.resolved) ? P(t.elm, e, n) : (e.isAsyncPlaceholder = !0);
              else if (a(e.isStatic) && a(t.isStatic) && e.key === t.key && (a(e.isCloned) || a(e.isOnce))) e.componentInstance = t.componentInstance;
              else {
                var h,
                  p = e.data;
                o(p) && o((h = p.hook)) && o((h = h.prepatch)) && h(t, e);
                var v = t.children,
                  g = e.children;
                if (o(p) && m(e)) {
                  for (h = 0; h < r.update.length; ++h) r.update[h](t, e);
                  o((h = p.hook)) && o((h = h.update)) && h(t, e);
                }
                i(e.text)
                  ? o(v) && o(g)
                    ? v !== g &&
                      (function(t, e, n, r, a) {
                        var s,
                          l,
                          c,
                          d = 0,
                          h = 0,
                          p = e.length - 1,
                          m = e[0],
                          v = e[p],
                          g = n.length - 1,
                          b = n[0],
                          w = n[g],
                          S = !a;
                        for (0; d <= p && h <= g; )
                          i(m)
                            ? (m = e[++d])
                            : i(v)
                            ? (v = e[--p])
                            : ir(m, b)
                            ? (k(m, b, r, n, h), (m = e[++d]), (b = n[++h]))
                            : ir(v, w)
                            ? (k(v, w, r, n, g), (v = e[--p]), (w = n[--g]))
                            : ir(m, w)
                            ? (k(m, w, r, n, g), S && u.insertBefore(t, m.elm, u.nextSibling(v.elm)), (m = e[++d]), (w = n[--g]))
                            : ir(v, b)
                            ? (k(v, b, r, n, h), S && u.insertBefore(t, v.elm, m.elm), (v = e[--p]), (b = n[++h]))
                            : (i(s) && (s = or(e, d, p)),
                              i((l = o(b.key) ? s[b.key] : _(b, e, d, p)))
                                ? f(b, r, t, m.elm, !1, n, h)
                                : ir((c = e[l]), b)
                                ? (k(c, b, r, n, h), (e[l] = void 0), S && u.insertBefore(t, c.elm, m.elm))
                                : f(b, r, t, m.elm, !1, n, h),
                              (b = n[++h]));
                        d > p ? y(t, i(n[g + 1]) ? null : n[g + 1].elm, n, h, g, r) : h > g && O(0, e, d, p);
                      })(d, v, g, n, c)
                    : o(g)
                    ? (o(t.text) && u.setTextContent(d, ''), y(d, null, g, 0, g.length - 1, n))
                    : o(v)
                    ? O(0, v, 0, v.length - 1)
                    : o(t.text) && u.setTextContent(d, '')
                  : t.text !== e.text && u.setTextContent(d, e.text),
                  o(p) && o((h = p.hook)) && o((h = h.postpatch)) && h(t, e);
              }
            }
          }
          function x(t, e, n) {
            if (a(n) && o(t.parent)) t.parent.data.pendingInsert = e;
            else for (var r = 0; r < e.length; ++r) e[r].data.hook.insert(e[r]);
          }
          var T = v('attrs,class,staticClass,staticStyle,key');
          function P(t, e, n, r) {
            var i,
              s = e.tag,
              l = e.data,
              u = e.children;
            if (((r = r || (l && l.pre)), (e.elm = t), a(e.isComment) && o(e.asyncFactory))) return (e.isAsyncPlaceholder = !0), !0;
            if (o(l) && (o((i = l.hook)) && o((i = i.init)) && i(e, !0), o((i = e.componentInstance)))) return d(e, n), !0;
            if (o(s)) {
              if (o(u))
                if (t.hasChildNodes())
                  if (o((i = l)) && o((i = i.domProps)) && o((i = i.innerHTML))) {
                    if (i !== t.innerHTML) return !1;
                  } else {
                    for (var c = !0, f = t.firstChild, h = 0; h < u.length; h++) {
                      if (!f || !P(f, u[h], n, r)) {
                        c = !1;
                        break;
                      }
                      f = f.nextSibling;
                    }
                    if (!c || f) return !1;
                  }
                else p(e, u, n);
              if (o(l)) {
                var m = !1;
                for (var v in l)
                  if (!T(v)) {
                    (m = !0), g(e, n);
                    break;
                  }
                !m && l.class && re(l.class);
              }
            } else t.data !== e.text && (t.data = e.text);
            return !0;
          }
          return function(t, e, n, s) {
            if (!i(e)) {
              var l,
                c = !1,
                d = [];
              if (i(t)) (c = !0), f(e, d);
              else {
                var h = o(t.nodeType);
                if (!h && ir(t, e)) k(t, e, d, null, null, s);
                else {
                  if (h) {
                    if ((1 === t.nodeType && t.hasAttribute(F) && (t.removeAttribute(F), (n = !0)), a(n) && P(t, e, d))) return x(e, d, !0), t;
                    (l = t), (t = new mt(u.tagName(l).toLowerCase(), {}, [], void 0, l));
                  }
                  var p = t.elm,
                    v = u.parentNode(p);
                  if ((f(e, d, p._leaveCb ? null : v, u.nextSibling(p)), o(e.parent)))
                    for (var g = e.parent, b = m(e); g; ) {
                      for (var y = 0; y < r.destroy.length; ++y) r.destroy[y](g);
                      if (((g.elm = e.elm), b)) {
                        for (var S = 0; S < r.create.length; ++S) r.create[S](nr, g);
                        var _ = g.data.hook.insert;
                        if (_.merged) for (var T = 1; T < _.fns.length; T++) _.fns[T]();
                      } else er(g);
                      g = g.parent;
                    }
                  o(v) ? O(0, [t], 0, 0) : o(t.tag) && w(t);
                }
              }
              return x(e, d, c), e.elm;
            }
            o(t) && w(t);
          };
        })({
          nodeOps: Qn,
          modules: [
            vr,
            yr,
            jr,
            $r,
            Hr,
            W
              ? {
                  create: pi,
                  activate: pi,
                  remove: function(t, e) {
                    !0 !== t.data.show ? fi(t, e) : e();
                  },
                }
              : {},
          ].concat(dr),
        });
        Y &&
          document.addEventListener('selectionchange', function() {
            var t = document.activeElement;
            t && t.vmodel && _i(t, 'input');
          });
        var vi = {
          inserted: function(t, e, n, r) {
            'select' === n.tag
              ? (r.elm && !r.elm._vOptions
                  ? se(n, 'postpatch', function() {
                      vi.componentUpdated(t, e, n);
                    })
                  : gi(t, e, n.context),
                (t._vOptions = [].map.call(t.options, wi)))
              : ('textarea' === n.tag || Zn(t.type)) &&
                ((t._vModifiers = e.modifiers),
                e.modifiers.lazy || (t.addEventListener('compositionstart', Oi), t.addEventListener('compositionend', Si), t.addEventListener('change', Si), Y && (t.vmodel = !0)));
          },
          componentUpdated: function(t, e, n) {
            if ('select' === n.tag) {
              gi(t, e, n.context);
              var r = t._vOptions,
                i = (t._vOptions = [].map.call(t.options, wi));
              if (
                i.some(function(t, e) {
                  return !I(t, r[e]);
                })
              )
                (t.multiple
                  ? e.value.some(function(t) {
                      return yi(t, i);
                    })
                  : e.value !== e.oldValue && yi(e.value, i)) && _i(t, 'change');
            }
          },
        };
        function gi(t, e, n) {
          bi(t, e, n),
            (X || Z) &&
              setTimeout(function() {
                bi(t, e, n);
              }, 0);
        }
        function bi(t, e, n) {
          var r = e.value,
            i = t.multiple;
          if (!i || Array.isArray(r)) {
            for (var o, a, s = 0, l = t.options.length; s < l; s++)
              if (((a = t.options[s]), i)) (o = D(r, wi(a)) > -1), a.selected !== o && (a.selected = o);
              else if (I(wi(a), r)) return void (t.selectedIndex !== s && (t.selectedIndex = s));
            i || (t.selectedIndex = -1);
          }
        }
        function yi(t, e) {
          return e.every(function(e) {
            return !I(e, t);
          });
        }
        function wi(t) {
          return '_value' in t ? t._value : t.value;
        }
        function Oi(t) {
          t.target.composing = !0;
        }
        function Si(t) {
          t.target.composing && ((t.target.composing = !1), _i(t.target, 'input'));
        }
        function _i(t, e) {
          var n = document.createEvent('HTMLEvents');
          n.initEvent(e, !0, !0), t.dispatchEvent(n);
        }
        function ki(t) {
          return !t.componentInstance || (t.data && t.data.transition) ? t : ki(t.componentInstance._vnode);
        }
        var xi = {
            model: vi,
            show: {
              bind: function(t, e, n) {
                var r = e.value,
                  i = (n = ki(n)).data && n.data.transition,
                  o = (t.__vOriginalDisplay = 'none' === t.style.display ? '' : t.style.display);
                r && i
                  ? ((n.data.show = !0),
                    ci(n, function() {
                      t.style.display = o;
                    }))
                  : (t.style.display = r ? o : 'none');
              },
              update: function(t, e, n) {
                var r = e.value;
                !r != !e.oldValue &&
                  ((n = ki(n)).data && n.data.transition
                    ? ((n.data.show = !0),
                      r
                        ? ci(n, function() {
                            t.style.display = t.__vOriginalDisplay;
                          })
                        : fi(n, function() {
                            t.style.display = 'none';
                          }))
                    : (t.style.display = r ? t.__vOriginalDisplay : 'none'));
              },
              unbind: function(t, e, n, r, i) {
                i || (t.style.display = t.__vOriginalDisplay);
              },
            },
          },
          Ti = {
            name: String,
            appear: Boolean,
            css: Boolean,
            mode: String,
            type: String,
            enterClass: String,
            leaveClass: String,
            enterToClass: String,
            leaveToClass: String,
            enterActiveClass: String,
            leaveActiveClass: String,
            appearClass: String,
            appearActiveClass: String,
            appearToClass: String,
            duration: [Number, String, Object],
          };
        function Pi(t) {
          var e = t && t.componentOptions;
          return e && e.Ctor.options.abstract ? Pi(We(e.children)) : t;
        }
        function ji(t) {
          var e = {},
            n = t.$options;
          for (var r in n.propsData) e[r] = t[r];
          var i = n._parentListeners;
          for (var o in i) e[_(o)] = i[o];
          return e;
        }
        function Ci(t, e) {
          if (/\d-keep-alive$/.test(e.tag)) return t('keep-alive', { props: e.componentOptions.propsData });
        }
        var Bi = function(t) {
            return t.tag || Ue(t);
          },
          $i = function(t) {
            return 'show' === t.name;
          },
          Ai = {
            name: 'transition',
            props: Ti,
            abstract: !0,
            render: function(t) {
              var e = this,
                n = this.$slots.default;
              if (n && (n = n.filter(Bi)).length) {
                0;
                var r = this.mode;
                0;
                var i = n[0];
                if (
                  (function(t) {
                    for (; (t = t.parent); ) if (t.data.transition) return !0;
                  })(this.$vnode)
                )
                  return i;
                var o = Pi(i);
                if (!o) return i;
                if (this._leaving) return Ci(t, i);
                var a = '__transition-' + this._uid + '-';
                o.key = null == o.key ? (o.isComment ? a + 'comment' : a + o.tag) : s(o.key) ? (0 === String(o.key).indexOf(a) ? o.key : a + o.key) : o.key;
                var l = ((o.data || (o.data = {})).transition = ji(this)),
                  u = this._vnode,
                  c = Pi(u);
                if (
                  (o.data.directives && o.data.directives.some($i) && (o.data.show = !0),
                  c &&
                    c.data &&
                    !(function(t, e) {
                      return e.key === t.key && e.tag === t.tag;
                    })(o, c) &&
                    !Ue(c) &&
                    (!c.componentInstance || !c.componentInstance._vnode.isComment))
                ) {
                  var f = (c.data.transition = C({}, l));
                  if ('out-in' === r)
                    return (
                      (this._leaving = !0),
                      se(f, 'afterLeave', function() {
                        (e._leaving = !1), e.$forceUpdate();
                      }),
                      Ci(t, i)
                    );
                  if ('in-out' === r) {
                    if (Ue(o)) return u;
                    var d,
                      h = function() {
                        d();
                      };
                    se(l, 'afterEnter', h),
                      se(l, 'enterCancelled', h),
                      se(f, 'delayLeave', function(t) {
                        d = t;
                      });
                  }
                }
                return i;
              }
            },
          },
          Ei = C({ tag: String, moveClass: String }, Ti);
        function Ii(t) {
          t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb();
        }
        function Di(t) {
          t.data.newPos = t.elm.getBoundingClientRect();
        }
        function Ni(t) {
          var e = t.data.pos,
            n = t.data.newPos,
            r = e.left - n.left,
            i = e.top - n.top;
          if (r || i) {
            t.data.moved = !0;
            var o = t.elm.style;
            (o.transform = o.WebkitTransform = 'translate(' + r + 'px,' + i + 'px)'), (o.transitionDuration = '0s');
          }
        }
        delete Ei.mode;
        var Fi = {
          Transition: Ai,
          TransitionGroup: {
            props: Ei,
            beforeMount: function() {
              var t = this,
                e = this._update;
              this._update = function(n, r) {
                var i = Ze(t);
                t.__patch__(t._vnode, t.kept, !1, !0), (t._vnode = t.kept), i(), e.call(t, n, r);
              };
            },
            render: function(t) {
              for (
                var e = this.tag || this.$vnode.data.tag || 'span',
                  n = Object.create(null),
                  r = (this.prevChildren = this.children),
                  i = this.$slots.default || [],
                  o = (this.children = []),
                  a = ji(this),
                  s = 0;
                s < i.length;
                s++
              ) {
                var l = i[s];
                if (l.tag)
                  if (null != l.key && 0 !== String(l.key).indexOf('__vlist')) o.push(l), (n[l.key] = l), ((l.data || (l.data = {})).transition = a);
                  else;
              }
              if (r) {
                for (var u = [], c = [], f = 0; f < r.length; f++) {
                  var d = r[f];
                  (d.data.transition = a), (d.data.pos = d.elm.getBoundingClientRect()), n[d.key] ? u.push(d) : c.push(d);
                }
                (this.kept = t(e, null, u)), (this.removed = c);
              }
              return t(e, null, o);
            },
            updated: function() {
              var t = this.prevChildren,
                e = this.moveClass || (this.name || 'v') + '-move';
              t.length &&
                this.hasMove(t[0].elm, e) &&
                (t.forEach(Ii),
                t.forEach(Di),
                t.forEach(Ni),
                (this._reflow = document.body.offsetHeight),
                t.forEach(function(t) {
                  if (t.data.moved) {
                    var n = t.elm,
                      r = n.style;
                    ri(n, e),
                      (r.transform = r.WebkitTransform = r.transitionDuration = ''),
                      n.addEventListener(
                        Zr,
                        (n._moveCb = function t(r) {
                          (r && r.target !== n) || (r && !/transform$/.test(r.propertyName)) || (n.removeEventListener(Zr, t), (n._moveCb = null), ii(n, e));
                        })
                      );
                  }
                }));
            },
            methods: {
              hasMove: function(t, e) {
                if (!Kr) return !1;
                if (this._hasMove) return this._hasMove;
                var n = t.cloneNode();
                t._transitionClasses &&
                  t._transitionClasses.forEach(function(t) {
                    Ur(n, t);
                  }),
                  Gr(n, e),
                  (n.style.display = 'none'),
                  this.$el.appendChild(n);
                var r = si(n);
                return this.$el.removeChild(n), (this._hasMove = r.hasTransform);
              },
            },
          },
        };
        (xn.config.mustUseProp = function(t, e, n) {
          return ('value' === n && In(t) && 'button' !== e) || ('selected' === n && 'option' === t) || ('checked' === n && 'input' === t) || ('muted' === n && 'video' === t);
        }),
          (xn.config.isReservedTag = Xn),
          (xn.config.isReservedAttr = En),
          (xn.config.getTagNamespace = function(t) {
            return Jn(t) ? 'svg' : 'math' === t ? 'math' : void 0;
          }),
          (xn.config.isUnknownElement = function(t) {
            if (!W) return !0;
            if (Xn(t)) return !1;
            if (((t = t.toLowerCase()), null != Yn[t])) return Yn[t];
            var e = document.createElement(t);
            return t.indexOf('-') > -1
              ? (Yn[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement)
              : (Yn[t] = /HTMLUnknownElement/.test(e.toString()));
          }),
          C(xn.options.directives, xi),
          C(xn.options.components, Fi),
          (xn.prototype.__patch__ = W ? mi : $),
          (xn.prototype.$mount = function(t, e) {
            return (function(t, e, n) {
              var r;
              return (
                (t.$el = e),
                t.$options.render || (t.$options.render = gt),
                en(t, 'beforeMount'),
                (r = function() {
                  t._update(t._render(), n);
                }),
                new pn(
                  t,
                  r,
                  $,
                  {
                    before: function() {
                      t._isMounted && !t._isDestroyed && en(t, 'beforeUpdate');
                    },
                  },
                  !0
                ),
                (n = !1),
                null == t.$vnode && ((t._isMounted = !0), en(t, 'mounted')),
                t
              );
            })(
              this,
              (t =
                t && W
                  ? (function(t) {
                      if ('string' == typeof t) {
                        var e = document.querySelector(t);
                        return e || document.createElement('div');
                      }
                      return t;
                    })(t)
                  : void 0),
              e
            );
          }),
          W &&
            setTimeout(function() {
              V.devtools && ot && ot.emit('init', xn);
            }, 0),
          (e.default = xn);
      }.call(this, n(41), n(95).setImmediate);
  },
  function(t, e, n) {
    'use strict';
    n.d(e, 'b', function() {
      return r;
    }),
      n.d(e, 'a', function() {
        return i;
      });
    n(46), n(36), n(37);
    function r(t) {
      return (
        null == t && console.log('error trying to trim url'),
        null == t.includes && console.log('error trying to trim url, url.includes is not defined'),
        t.includes('://') && (t = t.substring(t.indexOf('://') + '://'.length)),
        t.endsWith('/') && (t = t.substring(0, t.length - 1)),
        t
      );
    }
    function i(t) {
      for (var e = '', n = 0; n < t.length; n++) e += JSON.stringify(t[n]) + '\n';
      return e;
    }
  },
  function(t, e) {
    t.exports = function(t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function(t, e, n) {
    var r = n(7);
    t.exports = function(t) {
      if (!r(t)) throw TypeError(t + ' is not an object!');
      return t;
    };
  },
  function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
      return n.call(t).slice(8, -1);
    };
  },
  function(t, e) {
    t.exports = function(t) {
      if (null == t) throw TypeError("Can't call method on  " + t);
      return t;
    };
  },
  function(t, e) {
    var n = 0,
      r = Math.random();
    t.exports = function(t) {
      return 'Symbol('.concat(void 0 === t ? '' : t, ')_', (++n + r).toString(36));
    };
  },
  function(t, e, n) {
    var r = n(15),
      i = n(38),
      o = n(31),
      a = Object.defineProperty;
    e.f = n(11)
      ? Object.defineProperty
      : function(t, e, n) {
          if ((r(t), (e = o(e, !0)), r(n), i))
            try {
              return a(t, e, n);
            } catch (t) {}
          if ('get' in n || 'set' in n) throw TypeError('Accessors not supported!');
          return 'value' in n && (t[e] = n.value), t;
        };
  },
  function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
      return n.call(t, e);
    };
  },
  function(t, e, n) {
    var r = n(25),
      i = Math.min;
    t.exports = function(t) {
      return t > 0 ? i(r(t), 9007199254740991) : 0;
    };
  },
  function(t, e, n) {
    var r = n(10),
      i = n(3),
      o = i['__core-js_shared__'] || (i['__core-js_shared__'] = {});
    (t.exports = function(t, e) {
      return o[t] || (o[t] = void 0 !== e ? e : {});
    })('versions', []).push({ version: r.version, mode: n(28) ? 'pure' : 'global', copyright: '© 2019 Denis Pushkarev (zloirock.ru)' });
  },
  function(t, e, n) {
    var r = n(3),
      i = n(9),
      o = n(20),
      a = n(18)('src'),
      s = n(42),
      l = ('' + s).split('toString');
    (n(10).inspectSource = function(t) {
      return s.call(t);
    }),
      (t.exports = function(t, e, n, s) {
        var u = 'function' == typeof n;
        u && (o(n, 'name') || i(n, 'name', e)),
          t[e] !== n && (u && (o(n, a) || i(n, a, t[e] ? '' + t[e] : l.join(String(e)))), t === r ? (t[e] = n) : s ? (t[e] ? (t[e] = n) : i(t, e, n)) : (delete t[e], i(t, e, n)));
      })(Function.prototype, 'toString', function() {
        return ('function' == typeof this && this[a]) || s.call(this);
      });
  },
  function(t, e, n) {
    var r = n(43),
      i = n(17);
    t.exports = function(t) {
      return r(i(t));
    };
  },
  function(t, e) {
    var n = Math.ceil,
      r = Math.floor;
    t.exports = function(t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
    };
  },
  function(t, e, n) {
    var r = n(47),
      i = n(17);
    t.exports = function(t, e, n) {
      if (r(e)) throw TypeError('String#' + n + " doesn't accept regex!");
      return String(i(t));
    };
  },
  function(t, e, n) {
    var r = n(4)('match');
    t.exports = function(t) {
      var e = /./;
      try {
        '/./'[t](e);
      } catch (n) {
        try {
          return (e[r] = !1), !'/./'[t](e);
        } catch (t) {}
      }
      return !0;
    };
  },
  function(t, e) {
    t.exports = !1;
  },
  function(t, e, n) {
    'use strict';
    function r(t, e, n, r, i, o, a, s) {
      var l,
        u = 'function' == typeof t ? t.options : t;
      if (
        (e && ((u.render = e), (u.staticRenderFns = n), (u._compiled = !0)),
        r && (u.functional = !0),
        o && (u._scopeId = 'data-v-' + o),
        a
          ? ((l = function(t) {
              (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                (t = __VUE_SSR_CONTEXT__),
                i && i.call(this, t),
                t && t._registeredComponents && t._registeredComponents.add(a);
            }),
            (u._ssrRegister = l))
          : i &&
            (l = s
              ? function() {
                  i.call(this, this.$root.$options.shadowRoot);
                }
              : i),
        l)
      )
        if (u.functional) {
          u._injectStyles = l;
          var c = u.render;
          u.render = function(t, e) {
            return l.call(e), c(t, e);
          };
        } else {
          var f = u.beforeCreate;
          u.beforeCreate = f ? [].concat(f, l) : [l];
        }
      return { exports: t, options: u };
    }
    n.d(e, 'a', function() {
      return r;
    });
  },
  function(t, e, n) {
    'use strict';
    n(63), n(64), n(51), n(45), n(52), n(53);
    var r = function t(e, n, r) {
        if (
          ((function(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          })(this, t),
          (this.url = e),
          (this.saved = n),
          null != r)
        )
          for (var i = Object.keys(r), o = 0; o < i.length; o++) {
            var a = i[o];
            this[a] = r[a];
          }
      },
      i = n(55),
      o = n(12);
    function a(t) {
      return (a =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(t) {
              return typeof t;
            }
          : function(t) {
              return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
            })(t);
    }
    function s(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }
    n.d(e, 'a', function() {
      return l;
    });
    var l = (function() {
      function t(e) {
        !(function(t, e) {
          if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
        })(this, t),
          (this.name = e);
      }
      var e, n, l;
      return (
        (e = t),
        (l = [
          {
            key: 'addSources',
            value: function(t, e) {
              if (null != e && null != t) {
                console.log('adding sources: ' + t.name + ', ' + JSON.stringify(e));
                for (var n = 0; n < e.length; n++) {
                  var r = e[n],
                    a = t.sources[r.url] ? t.sources[r.url] : Object(i.a)(r.url);
                  (a.points = a.points + r.points), null != r.saved && (a.saved = r.saved), o.default.set(t.sources, r.url, a);
                }
              }
            },
          },
          {
            key: 'setLink',
            value: function(t, e, n) {
              if (null != t)
                if (('object' !== a(e) && (e = { url: e }), null == t.links[e.url])) {
                  var i = new r(e.url, n, e.keyProps);
                  o.default.set(t.links, e.url, i);
                } else t.links[e.url].saved = n;
            },
          },
          {
            key: 'removeLink',
            value: function(t, e) {
              o.default.delete(t.links, e);
            },
          },
          {
            key: 'removeSource',
            value: function(t, e) {
              o.default.delete(t.sources, e);
            },
          },
          {
            key: 'setSourceSaved',
            value: function(t, e, n) {
              if (null != t) {
                var r = t.sources[e];
                null != r && (r.saved = n);
              }
            },
          },
          {
            key: 'saveLink',
            value: function(t, e) {
              this.setLink(t, e, !0);
            },
          },
          {
            key: 'skipLink',
            value: function(t, e) {
              this.setLink(t, e, !1);
            },
          },
        ]),
        (n = null) && s(e.prototype, n),
        l && s(e, l),
        t
      );
    })();
  },
  function(t, e, n) {
    var r = n(7);
    t.exports = function(t, e) {
      if (!r(t)) return t;
      var n, i;
      if (e && 'function' == typeof (n = t.toString) && !r((i = n.call(t)))) return i;
      if ('function' == typeof (n = t.valueOf) && !r((i = n.call(t)))) return i;
      if (!e && 'function' == typeof (n = t.toString) && !r((i = n.call(t)))) return i;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function(t, e) {
    t.exports = function(t, e) {
      return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
    };
  },
  function(t, e, n) {
    var r = n(34);
    t.exports = function(t, e, n) {
      if ((r(t), void 0 === e)) return t;
      switch (n) {
        case 1:
          return function(n) {
            return t.call(e, n);
          };
        case 2:
          return function(n, r) {
            return t.call(e, n, r);
          };
        case 3:
          return function(n, r, i) {
            return t.call(e, n, r, i);
          };
      }
      return function() {
        return t.apply(e, arguments);
      };
    };
  },
  function(t, e) {
    t.exports = function(t) {
      if ('function' != typeof t) throw TypeError(t + ' is not a function!');
      return t;
    };
  },
  function(t, e, n) {
    var r = n(7),
      i = n(3).document,
      o = r(i) && r(i.createElement);
    t.exports = function(t) {
      return o ? i.createElement(t) : {};
    };
  },
  function(t, e, n) {
    'use strict';
    var r = n(6),
      i = n(39)(!0);
    r(r.P, 'Array', {
      includes: function(t) {
        return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }),
      n(40)('includes');
  },
  function(t, e, n) {
    'use strict';
    var r = n(6),
      i = n(26);
    r(r.P + r.F * n(27)('includes'), 'String', {
      includes: function(t) {
        return !!~i(this, t, 'includes').indexOf(t, arguments.length > 1 ? arguments[1] : void 0);
      },
    });
  },
  function(t, e, n) {
    t.exports =
      !n(11) &&
      !n(14)(function() {
        return (
          7 !=
          Object.defineProperty(n(35)('div'), 'a', {
            get: function() {
              return 7;
            },
          }).a
        );
      });
  },
  function(t, e, n) {
    var r = n(24),
      i = n(21),
      o = n(44);
    t.exports = function(t) {
      return function(e, n, a) {
        var s,
          l = r(e),
          u = i(l.length),
          c = o(a, u);
        if (t && n != n) {
          for (; u > c; ) if ((s = l[c++]) != s) return !0;
        } else for (; u > c; c++) if ((t || c in l) && l[c] === n) return t || c || 0;
        return !t && -1;
      };
    };
  },
  function(t, e, n) {
    var r = n(4)('unscopables'),
      i = Array.prototype;
    null == i[r] && n(9)(i, r, {}),
      (t.exports = function(t) {
        i[r][t] = !0;
      });
  },
  function(t, e) {
    var n;
    n = (function() {
      return this;
    })();
    try {
      n = n || new Function('return this')();
    } catch (t) {
      'object' == typeof window && (n = window);
    }
    t.exports = n;
  },
  function(t, e, n) {
    t.exports = n(22)('native-function-to-string', Function.toString);
  },
  function(t, e, n) {
    var r = n(16);
    t.exports = Object('z').propertyIsEnumerable(0)
      ? Object
      : function(t) {
          return 'String' == r(t) ? t.split('') : Object(t);
        };
  },
  function(t, e, n) {
    var r = n(25),
      i = Math.max,
      o = Math.min;
    t.exports = function(t, e) {
      return (t = r(t)) < 0 ? i(t + e, 0) : o(t, e);
    };
  },
  function(t, e, n) {
    'use strict';
    var r = n(40),
      i = n(88),
      o = n(49),
      a = n(24);
    (t.exports = n(72)(
      Array,
      'Array',
      function(t, e) {
        (this._t = a(t)), (this._i = 0), (this._k = e);
      },
      function() {
        var t = this._t,
          e = this._k,
          n = this._i++;
        return !t || n >= t.length ? ((this._t = void 0), i(1)) : i(0, 'keys' == e ? n : 'values' == e ? t[n] : [n, t[n]]);
      },
      'values'
    )),
      (o.Arguments = o.Array),
      r('keys'),
      r('values'),
      r('entries');
  },
  function(t, e, n) {
    'use strict';
    var r = n(6),
      i = n(21),
      o = n(26),
      a = ''.endsWith;
    r(r.P + r.F * n(27)('endsWith'), 'String', {
      endsWith: function(t) {
        var e = o(this, t, 'endsWith'),
          n = arguments.length > 1 ? arguments[1] : void 0,
          r = i(e.length),
          s = void 0 === n ? r : Math.min(i(n), r),
          l = String(t);
        return a ? a.call(e, l, s) : e.slice(s - l.length, s) === l;
      },
    });
  },
  function(t, e, n) {
    var r = n(7),
      i = n(16),
      o = n(4)('match');
    t.exports = function(t) {
      var e;
      return r(t) && (void 0 !== (e = t[o]) ? !!e : 'RegExp' == i(t));
    };
  },
  function(t, e, n) {
    var r = n(67),
      i = n(59);
    t.exports =
      Object.keys ||
      function(t) {
        return r(t, i);
      };
  },
  function(t, e) {
    t.exports = {};
  },
  function(t, e, n) {
    var r = n(17);
    t.exports = function(t) {
      return Object(r(t));
    };
  },
  function(t, e, n) {
    for (
      var r = n(45),
        i = n(48),
        o = n(23),
        a = n(3),
        s = n(9),
        l = n(49),
        u = n(4),
        c = u('iterator'),
        f = u('toStringTag'),
        d = l.Array,
        h = {
          CSSRuleList: !0,
          CSSStyleDeclaration: !1,
          CSSValueList: !1,
          ClientRectList: !1,
          DOMRectList: !1,
          DOMStringList: !1,
          DOMTokenList: !0,
          DataTransferItemList: !1,
          FileList: !1,
          HTMLAllCollection: !1,
          HTMLCollection: !1,
          HTMLFormElement: !1,
          HTMLSelectElement: !1,
          MediaList: !0,
          MimeTypeArray: !1,
          NamedNodeMap: !1,
          NodeList: !0,
          PaintRequestList: !1,
          Plugin: !1,
          PluginArray: !1,
          SVGLengthList: !1,
          SVGNumberList: !1,
          SVGPathSegList: !1,
          SVGPointList: !1,
          SVGStringList: !1,
          SVGTransformList: !1,
          SourceBufferList: !1,
          StyleSheetList: !0,
          TextTrackCueList: !1,
          TextTrackList: !1,
          TouchList: !1,
        },
        p = i(h),
        m = 0;
      m < p.length;
      m++
    ) {
      var v,
        g = p[m],
        b = h[g],
        y = a[g],
        w = y && y.prototype;
      if (w && (w[c] || s(w, c, d), w[f] || s(w, f, g), (l[g] = d), b)) for (v in r) w[v] || o(w, v, r[v], !0);
    }
  },
  function(t, e, n) {
    'use strict';
    var r = n(57),
      i = {};
    (i[n(4)('toStringTag')] = 'z'),
      i + '' != '[object z]' &&
        n(23)(
          Object.prototype,
          'toString',
          function() {
            return '[object ' + r(this) + ']';
          },
          !0
        );
  },
  function(t, e, n) {
    var r = n(50),
      i = n(48);
    n(91)('keys', function() {
      return function(t) {
        return i(r(t));
      };
    });
  },
  function(t, e, n) {
    var r = (function(t) {
      'use strict';
      var e,
        n = Object.prototype,
        r = n.hasOwnProperty,
        i = 'function' == typeof Symbol ? Symbol : {},
        o = i.iterator || '@@iterator',
        a = i.asyncIterator || '@@asyncIterator',
        s = i.toStringTag || '@@toStringTag';
      function l(t, e, n, r) {
        var i = e && e.prototype instanceof m ? e : m,
          o = Object.create(i.prototype),
          a = new P(r || []);
        return (
          (o._invoke = (function(t, e, n) {
            var r = c;
            return function(i, o) {
              if (r === d) throw new Error('Generator is already running');
              if (r === h) {
                if ('throw' === i) throw o;
                return C();
              }
              for (n.method = i, n.arg = o; ; ) {
                var a = n.delegate;
                if (a) {
                  var s = k(a, n);
                  if (s) {
                    if (s === p) continue;
                    return s;
                  }
                }
                if ('next' === n.method) n.sent = n._sent = n.arg;
                else if ('throw' === n.method) {
                  if (r === c) throw ((r = h), n.arg);
                  n.dispatchException(n.arg);
                } else 'return' === n.method && n.abrupt('return', n.arg);
                r = d;
                var l = u(t, e, n);
                if ('normal' === l.type) {
                  if (((r = n.done ? h : f), l.arg === p)) continue;
                  return { value: l.arg, done: n.done };
                }
                'throw' === l.type && ((r = h), (n.method = 'throw'), (n.arg = l.arg));
              }
            };
          })(t, n, a)),
          o
        );
      }
      function u(t, e, n) {
        try {
          return { type: 'normal', arg: t.call(e, n) };
        } catch (t) {
          return { type: 'throw', arg: t };
        }
      }
      t.wrap = l;
      var c = 'suspendedStart',
        f = 'suspendedYield',
        d = 'executing',
        h = 'completed',
        p = {};
      function m() {}
      function v() {}
      function g() {}
      var b = {};
      b[o] = function() {
        return this;
      };
      var y = Object.getPrototypeOf,
        w = y && y(y(j([])));
      w && w !== n && r.call(w, o) && (b = w);
      var O = (g.prototype = m.prototype = Object.create(b));
      function S(t) {
        ['next', 'throw', 'return'].forEach(function(e) {
          t[e] = function(t) {
            return this._invoke(e, t);
          };
        });
      }
      function _(t) {
        var e;
        this._invoke = function(n, i) {
          function o() {
            return new Promise(function(e, o) {
              !(function e(n, i, o, a) {
                var s = u(t[n], t, i);
                if ('throw' !== s.type) {
                  var l = s.arg,
                    c = l.value;
                  return c && 'object' == typeof c && r.call(c, '__await')
                    ? Promise.resolve(c.__await).then(
                        function(t) {
                          e('next', t, o, a);
                        },
                        function(t) {
                          e('throw', t, o, a);
                        }
                      )
                    : Promise.resolve(c).then(
                        function(t) {
                          (l.value = t), o(l);
                        },
                        function(t) {
                          return e('throw', t, o, a);
                        }
                      );
                }
                a(s.arg);
              })(n, i, e, o);
            });
          }
          return (e = e ? e.then(o, o) : o());
        };
      }
      function k(t, n) {
        var r = t.iterator[n.method];
        if (r === e) {
          if (((n.delegate = null), 'throw' === n.method)) {
            if (t.iterator.return && ((n.method = 'return'), (n.arg = e), k(t, n), 'throw' === n.method)) return p;
            (n.method = 'throw'), (n.arg = new TypeError("The iterator does not provide a 'throw' method"));
          }
          return p;
        }
        var i = u(r, t.iterator, n.arg);
        if ('throw' === i.type) return (n.method = 'throw'), (n.arg = i.arg), (n.delegate = null), p;
        var o = i.arg;
        return o
          ? o.done
            ? ((n[t.resultName] = o.value), (n.next = t.nextLoc), 'return' !== n.method && ((n.method = 'next'), (n.arg = e)), (n.delegate = null), p)
            : o
          : ((n.method = 'throw'), (n.arg = new TypeError('iterator result is not an object')), (n.delegate = null), p);
      }
      function x(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
      }
      function T(t) {
        var e = t.completion || {};
        (e.type = 'normal'), delete e.arg, (t.completion = e);
      }
      function P(t) {
        (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(x, this), this.reset(!0);
      }
      function j(t) {
        if (t) {
          var n = t[o];
          if (n) return n.call(t);
          if ('function' == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var i = -1,
              a = function n() {
                for (; ++i < t.length; ) if (r.call(t, i)) return (n.value = t[i]), (n.done = !1), n;
                return (n.value = e), (n.done = !0), n;
              };
            return (a.next = a);
          }
        }
        return { next: C };
      }
      function C() {
        return { value: e, done: !0 };
      }
      return (
        (v.prototype = O.constructor = g),
        (g.constructor = v),
        (g[s] = v.displayName = 'GeneratorFunction'),
        (t.isGeneratorFunction = function(t) {
          var e = 'function' == typeof t && t.constructor;
          return !!e && (e === v || 'GeneratorFunction' === (e.displayName || e.name));
        }),
        (t.mark = function(t) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : ((t.__proto__ = g), s in t || (t[s] = 'GeneratorFunction')), (t.prototype = Object.create(O)), t;
        }),
        (t.awrap = function(t) {
          return { __await: t };
        }),
        S(_.prototype),
        (_.prototype[a] = function() {
          return this;
        }),
        (t.AsyncIterator = _),
        (t.async = function(e, n, r, i) {
          var o = new _(l(e, n, r, i));
          return t.isGeneratorFunction(n)
            ? o
            : o.next().then(function(t) {
                return t.done ? t.value : o.next();
              });
        }),
        S(O),
        (O[s] = 'Generator'),
        (O[o] = function() {
          return this;
        }),
        (O.toString = function() {
          return '[object Generator]';
        }),
        (t.keys = function(t) {
          var e = [];
          for (var n in t) e.push(n);
          return (
            e.reverse(),
            function n() {
              for (; e.length; ) {
                var r = e.pop();
                if (r in t) return (n.value = r), (n.done = !1), n;
              }
              return (n.done = !0), n;
            }
          );
        }),
        (t.values = j),
        (P.prototype = {
          constructor: P,
          reset: function(t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = e),
              (this.done = !1),
              (this.delegate = null),
              (this.method = 'next'),
              (this.arg = e),
              this.tryEntries.forEach(T),
              !t)
            )
              for (var n in this) 't' === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
          },
          stop: function() {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ('throw' === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function(t) {
            if (this.done) throw t;
            var n = this;
            function i(r, i) {
              return (s.type = 'throw'), (s.arg = t), (n.next = r), i && ((n.method = 'next'), (n.arg = e)), !!i;
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var a = this.tryEntries[o],
                s = a.completion;
              if ('root' === a.tryLoc) return i('end');
              if (a.tryLoc <= this.prev) {
                var l = r.call(a, 'catchLoc'),
                  u = r.call(a, 'finallyLoc');
                if (l && u) {
                  if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                } else if (l) {
                  if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                } else {
                  if (!u) throw new Error('try statement without catch or finally');
                  if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                }
              }
            }
          },
          abrupt: function(t, e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var i = this.tryEntries[n];
              if (i.tryLoc <= this.prev && r.call(i, 'finallyLoc') && this.prev < i.finallyLoc) {
                var o = i;
                break;
              }
            }
            o && ('break' === t || 'continue' === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
            var a = o ? o.completion : {};
            return (a.type = t), (a.arg = e), o ? ((this.method = 'next'), (this.next = o.finallyLoc), p) : this.complete(a);
          },
          complete: function(t, e) {
            if ('throw' === t.type) throw t.arg;
            return (
              'break' === t.type || 'continue' === t.type
                ? (this.next = t.arg)
                : 'return' === t.type
                ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
                : 'normal' === t.type && e && (this.next = e),
              p
            );
          },
          finish: function(t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];
              if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), T(n), p;
            }
          },
          catch: function(t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];
              if (n.tryLoc === t) {
                var r = n.completion;
                if ('throw' === r.type) {
                  var i = r.arg;
                  T(n);
                }
                return i;
              }
            }
            throw new Error('illegal catch attempt');
          },
          delegateYield: function(t, n, r) {
            return (this.delegate = { iterator: j(t), resultName: n, nextLoc: r }), 'next' === this.method && (this.arg = e), p;
          },
        }),
        t
      );
    })(t.exports);
    try {
      regeneratorRuntime = r;
    } catch (t) {
      Function('r', 'regeneratorRuntime = r')(r);
    }
  },
  function(t, e, n) {
    'use strict';
    n.d(e, 'a', function() {
      return r;
    });
    n(79);
    function r(t, e) {
      var n = {};
      return (
        (n.url = t),
        (n.profileId = e - 0),
        (n.firstSaved = new Date().toJSON()),
        (n.lastSaved = new Date().toJSON()),
        (n.nextScrape = new Date().toJSON()),
        (n.points = 0),
        (n.saved = !1),
        n
      );
    }
  },
  function(t, e, n) {
    var r = n(19).f,
      i = n(20),
      o = n(4)('toStringTag');
    t.exports = function(t, e, n) {
      t && !i((t = n ? t : t.prototype), o) && r(t, o, { configurable: !0, value: e });
    };
  },
  function(t, e, n) {
    var r = n(16),
      i = n(4)('toStringTag'),
      o =
        'Arguments' ==
        r(
          (function() {
            return arguments;
          })()
        );
    t.exports = function(t) {
      var e, n, a;
      return void 0 === t
        ? 'Undefined'
        : null === t
        ? 'Null'
        : 'string' ==
          typeof (n = (function(t, e) {
            try {
              return t[e];
            } catch (t) {}
          })((e = Object(t)), i))
        ? n
        : o
        ? r(e)
        : 'Object' == (a = r(e)) && 'function' == typeof e.callee
        ? 'Arguments'
        : a;
    };
  },
  function(t, e, n) {
    var r = n(22)('keys'),
      i = n(18);
    t.exports = function(t) {
      return r[t] || (r[t] = i(t));
    };
  },
  function(t, e) {
    t.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
  },
  function(t, e) {
    e.f = {}.propertyIsEnumerable;
  },
  function(t, e, n) {
    'use strict';
    (function(t) {
      var n = ('undefined' != typeof window ? window : void 0 !== t ? t : {}).__VUE_DEVTOOLS_GLOBAL_HOOK__;
      function r(t, e) {
        Object.keys(t).forEach(function(n) {
          return e(t[n], n);
        });
      }
      function i(t) {
        return null !== t && 'object' == typeof t;
      }
      var o = function(t, e) {
          (this.runtime = e), (this._children = Object.create(null)), (this._rawModule = t);
          var n = t.state;
          this.state = ('function' == typeof n ? n() : n) || {};
        },
        a = { namespaced: { configurable: !0 } };
      (a.namespaced.get = function() {
        return !!this._rawModule.namespaced;
      }),
        (o.prototype.addChild = function(t, e) {
          this._children[t] = e;
        }),
        (o.prototype.removeChild = function(t) {
          delete this._children[t];
        }),
        (o.prototype.getChild = function(t) {
          return this._children[t];
        }),
        (o.prototype.update = function(t) {
          (this._rawModule.namespaced = t.namespaced),
            t.actions && (this._rawModule.actions = t.actions),
            t.mutations && (this._rawModule.mutations = t.mutations),
            t.getters && (this._rawModule.getters = t.getters);
        }),
        (o.prototype.forEachChild = function(t) {
          r(this._children, t);
        }),
        (o.prototype.forEachGetter = function(t) {
          this._rawModule.getters && r(this._rawModule.getters, t);
        }),
        (o.prototype.forEachAction = function(t) {
          this._rawModule.actions && r(this._rawModule.actions, t);
        }),
        (o.prototype.forEachMutation = function(t) {
          this._rawModule.mutations && r(this._rawModule.mutations, t);
        }),
        Object.defineProperties(o.prototype, a);
      var s = function(t) {
        this.register([], t, !1);
      };
      (s.prototype.get = function(t) {
        return t.reduce(function(t, e) {
          return t.getChild(e);
        }, this.root);
      }),
        (s.prototype.getNamespace = function(t) {
          var e = this.root;
          return t.reduce(function(t, n) {
            return t + ((e = e.getChild(n)).namespaced ? n + '/' : '');
          }, '');
        }),
        (s.prototype.update = function(t) {
          !(function t(e, n, r) {
            0;
            if ((n.update(r), r.modules))
              for (var i in r.modules) {
                if (!n.getChild(i)) return void 0;
                t(e.concat(i), n.getChild(i), r.modules[i]);
              }
          })([], this.root, t);
        }),
        (s.prototype.register = function(t, e, n) {
          var i = this;
          void 0 === n && (n = !0);
          var a = new o(e, n);
          0 === t.length ? (this.root = a) : this.get(t.slice(0, -1)).addChild(t[t.length - 1], a);
          e.modules &&
            r(e.modules, function(e, r) {
              i.register(t.concat(r), e, n);
            });
        }),
        (s.prototype.unregister = function(t) {
          var e = this.get(t.slice(0, -1)),
            n = t[t.length - 1];
          e.getChild(n).runtime && e.removeChild(n);
        });
      var l;
      var u = function(t) {
          var e = this;
          void 0 === t && (t = {}), !l && 'undefined' != typeof window && window.Vue && g(window.Vue);
          var r = t.plugins;
          void 0 === r && (r = []);
          var i = t.strict;
          void 0 === i && (i = !1),
            (this._committing = !1),
            (this._actions = Object.create(null)),
            (this._actionSubscribers = []),
            (this._mutations = Object.create(null)),
            (this._wrappedGetters = Object.create(null)),
            (this._modules = new s(t)),
            (this._modulesNamespaceMap = Object.create(null)),
            (this._subscribers = []),
            (this._watcherVM = new l()),
            (this._makeLocalGettersCache = Object.create(null));
          var o = this,
            a = this.dispatch,
            u = this.commit;
          (this.dispatch = function(t, e) {
            return a.call(o, t, e);
          }),
            (this.commit = function(t, e, n) {
              return u.call(o, t, e, n);
            }),
            (this.strict = i);
          var c = this._modules.root.state;
          p(this, c, [], this._modules.root),
            h(this, c),
            r.forEach(function(t) {
              return t(e);
            }),
            (void 0 !== t.devtools ? t.devtools : l.config.devtools) &&
              (function(t) {
                n &&
                  ((t._devtoolHook = n),
                  n.emit('vuex:init', t),
                  n.on('vuex:travel-to-state', function(e) {
                    t.replaceState(e);
                  }),
                  t.subscribe(function(t, e) {
                    n.emit('vuex:mutation', t, e);
                  }));
              })(this);
        },
        c = { state: { configurable: !0 } };
      function f(t, e) {
        return (
          e.indexOf(t) < 0 && e.push(t),
          function() {
            var n = e.indexOf(t);
            n > -1 && e.splice(n, 1);
          }
        );
      }
      function d(t, e) {
        (t._actions = Object.create(null)), (t._mutations = Object.create(null)), (t._wrappedGetters = Object.create(null)), (t._modulesNamespaceMap = Object.create(null));
        var n = t.state;
        p(t, n, [], t._modules.root, !0), h(t, n, e);
      }
      function h(t, e, n) {
        var i = t._vm;
        (t.getters = {}), (t._makeLocalGettersCache = Object.create(null));
        var o = t._wrappedGetters,
          a = {};
        r(o, function(e, n) {
          (a[n] = (function(t, e) {
            return function() {
              return t(e);
            };
          })(e, t)),
            Object.defineProperty(t.getters, n, {
              get: function() {
                return t._vm[n];
              },
              enumerable: !0,
            });
        });
        var s = l.config.silent;
        (l.config.silent = !0),
          (t._vm = new l({ data: { $$state: e }, computed: a })),
          (l.config.silent = s),
          t.strict &&
            (function(t) {
              t._vm.$watch(
                function() {
                  return this._data.$$state;
                },
                function() {
                  0;
                },
                { deep: !0, sync: !0 }
              );
            })(t),
          i &&
            (n &&
              t._withCommit(function() {
                i._data.$$state = null;
              }),
            l.nextTick(function() {
              return i.$destroy();
            }));
      }
      function p(t, e, n, r, i) {
        var o = !n.length,
          a = t._modules.getNamespace(n);
        if ((r.namespaced && (t._modulesNamespaceMap[a], (t._modulesNamespaceMap[a] = r)), !o && !i)) {
          var s = m(e, n.slice(0, -1)),
            u = n[n.length - 1];
          t._withCommit(function() {
            l.set(s, u, r.state);
          });
        }
        var c = (r.context = (function(t, e, n) {
          var r = '' === e,
            i = {
              dispatch: r
                ? t.dispatch
                : function(n, r, i) {
                    var o = v(n, r, i),
                      a = o.payload,
                      s = o.options,
                      l = o.type;
                    return (s && s.root) || (l = e + l), t.dispatch(l, a);
                  },
              commit: r
                ? t.commit
                : function(n, r, i) {
                    var o = v(n, r, i),
                      a = o.payload,
                      s = o.options,
                      l = o.type;
                    (s && s.root) || (l = e + l), t.commit(l, a, s);
                  },
            };
          return (
            Object.defineProperties(i, {
              getters: {
                get: r
                  ? function() {
                      return t.getters;
                    }
                  : function() {
                      return (function(t, e) {
                        if (!t._makeLocalGettersCache[e]) {
                          var n = {},
                            r = e.length;
                          Object.keys(t.getters).forEach(function(i) {
                            if (i.slice(0, r) === e) {
                              var o = i.slice(r);
                              Object.defineProperty(n, o, {
                                get: function() {
                                  return t.getters[i];
                                },
                                enumerable: !0,
                              });
                            }
                          }),
                            (t._makeLocalGettersCache[e] = n);
                        }
                        return t._makeLocalGettersCache[e];
                      })(t, e);
                    },
              },
              state: {
                get: function() {
                  return m(t.state, n);
                },
              },
            }),
            i
          );
        })(t, a, n));
        r.forEachMutation(function(e, n) {
          !(function(t, e, n, r) {
            (t._mutations[e] || (t._mutations[e] = [])).push(function(e) {
              n.call(t, r.state, e);
            });
          })(t, a + n, e, c);
        }),
          r.forEachAction(function(e, n) {
            var r = e.root ? n : a + n,
              i = e.handler || e;
            !(function(t, e, n, r) {
              (t._actions[e] || (t._actions[e] = [])).push(function(e) {
                var i,
                  o = n.call(t, { dispatch: r.dispatch, commit: r.commit, getters: r.getters, state: r.state, rootGetters: t.getters, rootState: t.state }, e);
                return (
                  ((i = o) && 'function' == typeof i.then) || (o = Promise.resolve(o)),
                  t._devtoolHook
                    ? o.catch(function(e) {
                        throw (t._devtoolHook.emit('vuex:error', e), e);
                      })
                    : o
                );
              });
            })(t, r, i, c);
          }),
          r.forEachGetter(function(e, n) {
            !(function(t, e, n, r) {
              if (t._wrappedGetters[e]) return void 0;
              t._wrappedGetters[e] = function(t) {
                return n(r.state, r.getters, t.state, t.getters);
              };
            })(t, a + n, e, c);
          }),
          r.forEachChild(function(r, o) {
            p(t, e, n.concat(o), r, i);
          });
      }
      function m(t, e) {
        return e.length
          ? e.reduce(function(t, e) {
              return t[e];
            }, t)
          : t;
      }
      function v(t, e, n) {
        return i(t) && t.type && ((n = e), (e = t), (t = t.type)), { type: t, payload: e, options: n };
      }
      function g(t) {
        (l && t === l) ||
          /**
           * vuex v3.1.2
           * (c) 2019 Evan You
           * @license MIT
           */
          (function(t) {
            if (Number(t.version.split('.')[0]) >= 2) t.mixin({ beforeCreate: n });
            else {
              var e = t.prototype._init;
              t.prototype._init = function(t) {
                void 0 === t && (t = {}), (t.init = t.init ? [n].concat(t.init) : n), e.call(this, t);
              };
            }
            function n() {
              var t = this.$options;
              t.store ? (this.$store = 'function' == typeof t.store ? t.store() : t.store) : t.parent && t.parent.$store && (this.$store = t.parent.$store);
            }
          })((l = t));
      }
      (c.state.get = function() {
        return this._vm._data.$$state;
      }),
        (c.state.set = function(t) {
          0;
        }),
        (u.prototype.commit = function(t, e, n) {
          var r = this,
            i = v(t, e, n),
            o = i.type,
            a = i.payload,
            s = (i.options, { type: o, payload: a }),
            l = this._mutations[o];
          l &&
            (this._withCommit(function() {
              l.forEach(function(t) {
                t(a);
              });
            }),
            this._subscribers.forEach(function(t) {
              return t(s, r.state);
            }));
        }),
        (u.prototype.dispatch = function(t, e) {
          var n = this,
            r = v(t, e),
            i = r.type,
            o = r.payload,
            a = { type: i, payload: o },
            s = this._actions[i];
          if (s) {
            try {
              this._actionSubscribers
                .filter(function(t) {
                  return t.before;
                })
                .forEach(function(t) {
                  return t.before(a, n.state);
                });
            } catch (t) {
              0;
            }
            return (s.length > 1
              ? Promise.all(
                  s.map(function(t) {
                    return t(o);
                  })
                )
              : s[0](o)
            ).then(function(t) {
              try {
                n._actionSubscribers
                  .filter(function(t) {
                    return t.after;
                  })
                  .forEach(function(t) {
                    return t.after(a, n.state);
                  });
              } catch (t) {
                0;
              }
              return t;
            });
          }
        }),
        (u.prototype.subscribe = function(t) {
          return f(t, this._subscribers);
        }),
        (u.prototype.subscribeAction = function(t) {
          return f('function' == typeof t ? { before: t } : t, this._actionSubscribers);
        }),
        (u.prototype.watch = function(t, e, n) {
          var r = this;
          return this._watcherVM.$watch(
            function() {
              return t(r.state, r.getters);
            },
            e,
            n
          );
        }),
        (u.prototype.replaceState = function(t) {
          var e = this;
          this._withCommit(function() {
            e._vm._data.$$state = t;
          });
        }),
        (u.prototype.registerModule = function(t, e, n) {
          void 0 === n && (n = {}),
            'string' == typeof t && (t = [t]),
            this._modules.register(t, e),
            p(this, this.state, t, this._modules.get(t), n.preserveState),
            h(this, this.state);
        }),
        (u.prototype.unregisterModule = function(t) {
          var e = this;
          'string' == typeof t && (t = [t]),
            this._modules.unregister(t),
            this._withCommit(function() {
              var n = m(e.state, t.slice(0, -1));
              l.delete(n, t[t.length - 1]);
            }),
            d(this);
        }),
        (u.prototype.hotUpdate = function(t) {
          this._modules.update(t), d(this, !0);
        }),
        (u.prototype._withCommit = function(t) {
          var e = this._committing;
          (this._committing = !0), t(), (this._committing = e);
        }),
        Object.defineProperties(u.prototype, c);
      var b = _(function(t, e) {
          var n = {};
          return (
            S(e).forEach(function(e) {
              var r = e.key,
                i = e.val;
              (n[r] = function() {
                var e = this.$store.state,
                  n = this.$store.getters;
                if (t) {
                  var r = k(this.$store, 'mapState', t);
                  if (!r) return;
                  (e = r.context.state), (n = r.context.getters);
                }
                return 'function' == typeof i ? i.call(this, e, n) : e[i];
              }),
                (n[r].vuex = !0);
            }),
            n
          );
        }),
        y = _(function(t, e) {
          var n = {};
          return (
            S(e).forEach(function(e) {
              var r = e.key,
                i = e.val;
              n[r] = function() {
                for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
                var r = this.$store.commit;
                if (t) {
                  var o = k(this.$store, 'mapMutations', t);
                  if (!o) return;
                  r = o.context.commit;
                }
                return 'function' == typeof i ? i.apply(this, [r].concat(e)) : r.apply(this.$store, [i].concat(e));
              };
            }),
            n
          );
        }),
        w = _(function(t, e) {
          var n = {};
          return (
            S(e).forEach(function(e) {
              var r = e.key,
                i = e.val;
              (i = t + i),
                (n[r] = function() {
                  if (!t || k(this.$store, 'mapGetters', t)) return this.$store.getters[i];
                }),
                (n[r].vuex = !0);
            }),
            n
          );
        }),
        O = _(function(t, e) {
          var n = {};
          return (
            S(e).forEach(function(e) {
              var r = e.key,
                i = e.val;
              n[r] = function() {
                for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
                var r = this.$store.dispatch;
                if (t) {
                  var o = k(this.$store, 'mapActions', t);
                  if (!o) return;
                  r = o.context.dispatch;
                }
                return 'function' == typeof i ? i.apply(this, [r].concat(e)) : r.apply(this.$store, [i].concat(e));
              };
            }),
            n
          );
        });
      function S(t) {
        return (function(t) {
          return Array.isArray(t) || i(t);
        })(t)
          ? Array.isArray(t)
            ? t.map(function(t) {
                return { key: t, val: t };
              })
            : Object.keys(t).map(function(e) {
                return { key: e, val: t[e] };
              })
          : [];
      }
      function _(t) {
        return function(e, n) {
          return 'string' != typeof e ? ((n = e), (e = '')) : '/' !== e.charAt(e.length - 1) && (e += '/'), t(e, n);
        };
      }
      function k(t, e, n) {
        return t._modulesNamespaceMap[n];
      }
      var x = {
        Store: u,
        install: g,
        version: '3.1.2',
        mapState: b,
        mapMutations: y,
        mapGetters: w,
        mapActions: O,
        createNamespacedHelpers: function(t) {
          return { mapState: b.bind(null, t), mapGetters: w.bind(null, t), mapMutations: y.bind(null, t), mapActions: O.bind(null, t) };
        },
      };
      e.a = x;
    }.call(this, n(41)));
  },
  function(t, e, n) {
    'use strict';
    n(94)('link', function(t) {
      return function(e) {
        return t(this, 'a', 'href', e);
      };
    });
  },
  function(t, e, n) {
    n(65)('asyncIterator');
  },
  function(t, e, n) {
    'use strict';
    var r = n(3),
      i = n(20),
      o = n(11),
      a = n(6),
      s = n(23),
      l = n(82).KEY,
      u = n(14),
      c = n(22),
      f = n(56),
      d = n(18),
      h = n(4),
      p = n(66),
      m = n(65),
      v = n(83),
      g = n(84),
      b = n(15),
      y = n(7),
      w = n(50),
      O = n(24),
      S = n(31),
      _ = n(32),
      k = n(69),
      x = n(86),
      T = n(87),
      P = n(68),
      j = n(19),
      C = n(48),
      B = T.f,
      $ = j.f,
      A = x.f,
      E = r.Symbol,
      I = r.JSON,
      D = I && I.stringify,
      N = h('_hidden'),
      F = h('toPrimitive'),
      R = {}.propertyIsEnumerable,
      L = c('symbol-registry'),
      V = c('symbols'),
      M = c('op-symbols'),
      H = Object.prototype,
      z = 'function' == typeof E && !!P.f,
      G = r.QObject,
      U = !G || !G.prototype || !G.prototype.findChild,
      W =
        o &&
        u(function() {
          return (
            7 !=
            k(
              $({}, 'a', {
                get: function() {
                  return $(this, 'a', { value: 7 }).a;
                },
              })
            ).a
          );
        })
          ? function(t, e, n) {
              var r = B(H, e);
              r && delete H[e], $(t, e, n), r && t !== H && $(H, e, r);
            }
          : $,
      q = function(t) {
        var e = (V[t] = k(E.prototype));
        return (e._k = t), e;
      },
      K =
        z && 'symbol' == typeof E.iterator
          ? function(t) {
              return 'symbol' == typeof t;
            }
          : function(t) {
              return t instanceof E;
            },
      J = function(t, e, n) {
        return (
          t === H && J(M, e, n),
          b(t),
          (e = S(e, !0)),
          b(n),
          i(V, e)
            ? (n.enumerable ? (i(t, N) && t[N][e] && (t[N][e] = !1), (n = k(n, { enumerable: _(0, !1) }))) : (i(t, N) || $(t, N, _(1, {})), (t[N][e] = !0)), W(t, e, n))
            : $(t, e, n)
        );
      },
      X = function(t, e) {
        b(t);
        for (var n, r = v((e = O(e))), i = 0, o = r.length; o > i; ) J(t, (n = r[i++]), e[n]);
        return t;
      },
      Y = function(t) {
        var e = R.call(this, (t = S(t, !0)));
        return !(this === H && i(V, t) && !i(M, t)) && (!(e || !i(this, t) || !i(V, t) || (i(this, N) && this[N][t])) || e);
      },
      Z = function(t, e) {
        if (((t = O(t)), (e = S(e, !0)), t !== H || !i(V, e) || i(M, e))) {
          var n = B(t, e);
          return !n || !i(V, e) || (i(t, N) && t[N][e]) || (n.enumerable = !0), n;
        }
      },
      Q = function(t) {
        for (var e, n = A(O(t)), r = [], o = 0; n.length > o; ) i(V, (e = n[o++])) || e == N || e == l || r.push(e);
        return r;
      },
      tt = function(t) {
        for (var e, n = t === H, r = A(n ? M : O(t)), o = [], a = 0; r.length > a; ) !i(V, (e = r[a++])) || (n && !i(H, e)) || o.push(V[e]);
        return o;
      };
    z ||
      (s(
        (E = function() {
          if (this instanceof E) throw TypeError('Symbol is not a constructor!');
          var t = d(arguments.length > 0 ? arguments[0] : void 0),
            e = function(n) {
              this === H && e.call(M, n), i(this, N) && i(this[N], t) && (this[N][t] = !1), W(this, t, _(1, n));
            };
          return o && U && W(H, t, { configurable: !0, set: e }), q(t);
        }).prototype,
        'toString',
        function() {
          return this._k;
        }
      ),
      (T.f = Z),
      (j.f = J),
      (n(71).f = x.f = Q),
      (n(60).f = Y),
      (P.f = tt),
      o && !n(28) && s(H, 'propertyIsEnumerable', Y, !0),
      (p.f = function(t) {
        return q(h(t));
      })),
      a(a.G + a.W + a.F * !z, { Symbol: E });
    for (var et = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), nt = 0; et.length > nt; )
      h(et[nt++]);
    for (var rt = C(h.store), it = 0; rt.length > it; ) m(rt[it++]);
    a(a.S + a.F * !z, 'Symbol', {
      for: function(t) {
        return i(L, (t += '')) ? L[t] : (L[t] = E(t));
      },
      keyFor: function(t) {
        if (!K(t)) throw TypeError(t + ' is not a symbol!');
        for (var e in L) if (L[e] === t) return e;
      },
      useSetter: function() {
        U = !0;
      },
      useSimple: function() {
        U = !1;
      },
    }),
      a(a.S + a.F * !z, 'Object', {
        create: function(t, e) {
          return void 0 === e ? k(t) : X(k(t), e);
        },
        defineProperty: J,
        defineProperties: X,
        getOwnPropertyDescriptor: Z,
        getOwnPropertyNames: Q,
        getOwnPropertySymbols: tt,
      });
    var ot = u(function() {
      P.f(1);
    });
    a(a.S + a.F * ot, 'Object', {
      getOwnPropertySymbols: function(t) {
        return P.f(w(t));
      },
    }),
      I &&
        a(
          a.S +
            a.F *
              (!z ||
                u(function() {
                  var t = E();
                  return '[null]' != D([t]) || '{}' != D({ a: t }) || '{}' != D(Object(t));
                })),
          'JSON',
          {
            stringify: function(t) {
              for (var e, n, r = [t], i = 1; arguments.length > i; ) r.push(arguments[i++]);
              if (((n = e = r[1]), (y(e) || void 0 !== t) && !K(t)))
                return (
                  g(e) ||
                    (e = function(t, e) {
                      if (('function' == typeof n && (e = n.call(this, t, e)), !K(e))) return e;
                    }),
                  (r[1] = e),
                  D.apply(I, r)
                );
            },
          }
        ),
      E.prototype[F] || n(9)(E.prototype, F, E.prototype.valueOf),
      f(E, 'Symbol'),
      f(Math, 'Math', !0),
      f(r.JSON, 'JSON', !0);
  },
  function(t, e, n) {
    var r = n(3),
      i = n(10),
      o = n(28),
      a = n(66),
      s = n(19).f;
    t.exports = function(t) {
      var e = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
      '_' == t.charAt(0) || t in e || s(e, t, { value: a.f(t) });
    };
  },
  function(t, e, n) {
    e.f = n(4);
  },
  function(t, e, n) {
    var r = n(20),
      i = n(24),
      o = n(39)(!1),
      a = n(58)('IE_PROTO');
    t.exports = function(t, e) {
      var n,
        s = i(t),
        l = 0,
        u = [];
      for (n in s) n != a && r(s, n) && u.push(n);
      for (; e.length > l; ) r(s, (n = e[l++])) && (~o(u, n) || u.push(n));
      return u;
    };
  },
  function(t, e) {
    e.f = Object.getOwnPropertySymbols;
  },
  function(t, e, n) {
    var r = n(15),
      i = n(85),
      o = n(59),
      a = n(58)('IE_PROTO'),
      s = function() {},
      l = function() {
        var t,
          e = n(35)('iframe'),
          r = o.length;
        for (
          e.style.display = 'none',
            n(70).appendChild(e),
            e.src = 'javascript:',
            (t = e.contentWindow.document).open(),
            t.write('<script>document.F=Object</script>'),
            t.close(),
            l = t.F;
          r--;

        )
          delete l.prototype[o[r]];
        return l();
      };
    t.exports =
      Object.create ||
      function(t, e) {
        var n;
        return null !== t ? ((s.prototype = r(t)), (n = new s()), (s.prototype = null), (n[a] = t)) : (n = l()), void 0 === e ? n : i(n, e);
      };
  },
  function(t, e, n) {
    var r = n(3).document;
    t.exports = r && r.documentElement;
  },
  function(t, e, n) {
    var r = n(67),
      i = n(59).concat('length', 'prototype');
    e.f =
      Object.getOwnPropertyNames ||
      function(t) {
        return r(t, i);
      };
  },
  function(t, e, n) {
    'use strict';
    var r = n(28),
      i = n(6),
      o = n(23),
      a = n(9),
      s = n(49),
      l = n(89),
      u = n(56),
      c = n(90),
      f = n(4)('iterator'),
      d = !([].keys && 'next' in [].keys()),
      h = function() {
        return this;
      };
    t.exports = function(t, e, n, p, m, v, g) {
      l(n, e, p);
      var b,
        y,
        w,
        O = function(t) {
          if (!d && t in x) return x[t];
          switch (t) {
            case 'keys':
            case 'values':
              return function() {
                return new n(this, t);
              };
          }
          return function() {
            return new n(this, t);
          };
        },
        S = e + ' Iterator',
        _ = 'values' == m,
        k = !1,
        x = t.prototype,
        T = x[f] || x['@@iterator'] || (m && x[m]),
        P = T || O(m),
        j = m ? (_ ? O('entries') : P) : void 0,
        C = ('Array' == e && x.entries) || T;
      if (
        (C && (w = c(C.call(new t()))) !== Object.prototype && w.next && (u(w, S, !0), r || 'function' == typeof w[f] || a(w, f, h)),
        _ &&
          T &&
          'values' !== T.name &&
          ((k = !0),
          (P = function() {
            return T.call(this);
          })),
        (r && !g) || (!d && !k && x[f]) || a(x, f, P),
        (s[e] = P),
        (s[S] = h),
        m)
      )
        if (((b = { values: _ ? P : O('values'), keys: v ? P : O('keys'), entries: j }), g)) for (y in b) y in x || o(x, y, b[y]);
        else i(i.P + i.F * (d || k), e, b);
      return b;
    };
  },
  function(t, e, n) {
    var r,
      i,
      o,
      a = n(33),
      s = n(104),
      l = n(70),
      u = n(35),
      c = n(3),
      f = c.process,
      d = c.setImmediate,
      h = c.clearImmediate,
      p = c.MessageChannel,
      m = c.Dispatch,
      v = 0,
      g = {},
      b = function() {
        var t = +this;
        if (g.hasOwnProperty(t)) {
          var e = g[t];
          delete g[t], e();
        }
      },
      y = function(t) {
        b.call(t.data);
      };
    (d && h) ||
      ((d = function(t) {
        for (var e = [], n = 1; arguments.length > n; ) e.push(arguments[n++]);
        return (
          (g[++v] = function() {
            s('function' == typeof t ? t : Function(t), e);
          }),
          r(v),
          v
        );
      }),
      (h = function(t) {
        delete g[t];
      }),
      'process' == n(16)(f)
        ? (r = function(t) {
            f.nextTick(a(b, t, 1));
          })
        : m && m.now
        ? (r = function(t) {
            m.now(a(b, t, 1));
          })
        : p
        ? ((o = (i = new p()).port2), (i.port1.onmessage = y), (r = a(o.postMessage, o, 1)))
        : c.addEventListener && 'function' == typeof postMessage && !c.importScripts
        ? ((r = function(t) {
            c.postMessage(t + '', '*');
          }),
          c.addEventListener('message', y, !1))
        : (r =
            'onreadystatechange' in u('script')
              ? function(t) {
                  l.appendChild(u('script')).onreadystatechange = function() {
                    l.removeChild(this), b.call(t);
                  };
                }
              : function(t) {
                  setTimeout(a(b, t, 1), 0);
                })),
      (t.exports = { set: d, clear: h });
  },
  function(t, e, n) {
    'use strict';
    var r = n(34);
    function i(t) {
      var e, n;
      (this.promise = new t(function(t, r) {
        if (void 0 !== e || void 0 !== n) throw TypeError('Bad Promise constructor');
        (e = t), (n = r);
      })),
        (this.resolve = r(e)),
        (this.reject = r(n));
    }
    t.exports.f = function(t) {
      return new i(t);
    };
  },
  function(t, e, n) {
    (function(t, n) {
      var r = 200,
        i = '__lodash_hash_undefined__',
        o = 800,
        a = 16,
        s = 9007199254740991,
        l = '[object Arguments]',
        u = '[object AsyncFunction]',
        c = '[object Function]',
        f = '[object GeneratorFunction]',
        d = '[object Null]',
        h = '[object Object]',
        p = '[object Proxy]',
        m = '[object Undefined]',
        v = /^\[object .+?Constructor\]$/,
        g = /^(?:0|[1-9]\d*)$/,
        b = {};
      (b['[object Float32Array]'] = b['[object Float64Array]'] = b['[object Int8Array]'] = b['[object Int16Array]'] = b['[object Int32Array]'] = b['[object Uint8Array]'] = b[
        '[object Uint8ClampedArray]'
      ] = b['[object Uint16Array]'] = b['[object Uint32Array]'] = !0),
        (b[l] = b['[object Array]'] = b['[object ArrayBuffer]'] = b['[object Boolean]'] = b['[object DataView]'] = b['[object Date]'] = b['[object Error]'] = b[c] = b[
          '[object Map]'
        ] = b['[object Number]'] = b[h] = b['[object RegExp]'] = b['[object Set]'] = b['[object String]'] = b['[object WeakMap]'] = !1);
      var y = 'object' == typeof t && t && t.Object === Object && t,
        w = 'object' == typeof self && self && self.Object === Object && self,
        O = y || w || Function('return this')(),
        S = e && !e.nodeType && e,
        _ = S && 'object' == typeof n && n && !n.nodeType && n,
        k = _ && _.exports === S,
        x = k && y.process,
        T = (function() {
          try {
            var t = _ && _.require && _.require('util').types;
            return t || (x && x.binding && x.binding('util'));
          } catch (t) {}
        })(),
        P = T && T.isTypedArray;
      function j(t, e, n) {
        switch (n.length) {
          case 0:
            return t.call(e);
          case 1:
            return t.call(e, n[0]);
          case 2:
            return t.call(e, n[0], n[1]);
          case 3:
            return t.call(e, n[0], n[1], n[2]);
        }
        return t.apply(e, n);
      }
      var C,
        B,
        $,
        A = Array.prototype,
        E = Function.prototype,
        I = Object.prototype,
        D = O['__core-js_shared__'],
        N = E.toString,
        F = I.hasOwnProperty,
        R = (C = /[^.]+$/.exec((D && D.keys && D.keys.IE_PROTO) || '')) ? 'Symbol(src)_1.' + C : '',
        L = I.toString,
        V = N.call(Object),
        M = RegExp(
          '^' +
            N.call(F)
              .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
              .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
            '$'
        ),
        H = k ? O.Buffer : void 0,
        z = O.Symbol,
        G = O.Uint8Array,
        U = H ? H.allocUnsafe : void 0,
        W =
          ((B = Object.getPrototypeOf),
          ($ = Object),
          function(t) {
            return B($(t));
          }),
        q = Object.create,
        K = I.propertyIsEnumerable,
        J = A.splice,
        X = z ? z.toStringTag : void 0,
        Y = (function() {
          try {
            var t = St(Object, 'defineProperty');
            return t({}, '', {}), t;
          } catch (t) {}
        })(),
        Z = H ? H.isBuffer : void 0,
        Q = Math.max,
        tt = Date.now,
        et = St(O, 'Map'),
        nt = St(Object, 'create'),
        rt = (function() {
          function t() {}
          return function(e) {
            if (!It(e)) return {};
            if (q) return q(e);
            t.prototype = e;
            var n = new t();
            return (t.prototype = void 0), n;
          };
        })();
      function it(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      function ot(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      function at(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      function st(t) {
        var e = (this.__data__ = new ot(t));
        this.size = e.size;
      }
      function lt(t, e) {
        var n = Ct(t),
          r = !n && jt(t),
          i = !n && !r && $t(t),
          o = !n && !r && !i && Nt(t),
          a = n || r || i || o,
          s = a
            ? (function(t, e) {
                for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
                return r;
              })(t.length, String)
            : [],
          l = s.length;
        for (var u in t)
          (!e && !F.call(t, u)) ||
            (a && ('length' == u || (i && ('offset' == u || 'parent' == u)) || (o && ('buffer' == u || 'byteLength' == u || 'byteOffset' == u)) || _t(u, l))) ||
            s.push(u);
        return s;
      }
      function ut(t, e, n) {
        ((void 0 === n || Pt(t[e], n)) && (void 0 !== n || e in t)) || dt(t, e, n);
      }
      function ct(t, e, n) {
        var r = t[e];
        (F.call(t, e) && Pt(r, n) && (void 0 !== n || e in t)) || dt(t, e, n);
      }
      function ft(t, e) {
        for (var n = t.length; n--; ) if (Pt(t[n][0], e)) return n;
        return -1;
      }
      function dt(t, e, n) {
        '__proto__' == e && Y ? Y(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : (t[e] = n);
      }
      (it.prototype.clear = function() {
        (this.__data__ = nt ? nt(null) : {}), (this.size = 0);
      }),
        (it.prototype.delete = function(t) {
          var e = this.has(t) && delete this.__data__[t];
          return (this.size -= e ? 1 : 0), e;
        }),
        (it.prototype.get = function(t) {
          var e = this.__data__;
          if (nt) {
            var n = e[t];
            return n === i ? void 0 : n;
          }
          return F.call(e, t) ? e[t] : void 0;
        }),
        (it.prototype.has = function(t) {
          var e = this.__data__;
          return nt ? void 0 !== e[t] : F.call(e, t);
        }),
        (it.prototype.set = function(t, e) {
          var n = this.__data__;
          return (this.size += this.has(t) ? 0 : 1), (n[t] = nt && void 0 === e ? i : e), this;
        }),
        (ot.prototype.clear = function() {
          (this.__data__ = []), (this.size = 0);
        }),
        (ot.prototype.delete = function(t) {
          var e = this.__data__,
            n = ft(e, t);
          return !(n < 0) && (n == e.length - 1 ? e.pop() : J.call(e, n, 1), --this.size, !0);
        }),
        (ot.prototype.get = function(t) {
          var e = this.__data__,
            n = ft(e, t);
          return n < 0 ? void 0 : e[n][1];
        }),
        (ot.prototype.has = function(t) {
          return ft(this.__data__, t) > -1;
        }),
        (ot.prototype.set = function(t, e) {
          var n = this.__data__,
            r = ft(n, t);
          return r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this;
        }),
        (at.prototype.clear = function() {
          (this.size = 0), (this.__data__ = { hash: new it(), map: new (et || ot)(), string: new it() });
        }),
        (at.prototype.delete = function(t) {
          var e = Ot(this, t).delete(t);
          return (this.size -= e ? 1 : 0), e;
        }),
        (at.prototype.get = function(t) {
          return Ot(this, t).get(t);
        }),
        (at.prototype.has = function(t) {
          return Ot(this, t).has(t);
        }),
        (at.prototype.set = function(t, e) {
          var n = Ot(this, t),
            r = n.size;
          return n.set(t, e), (this.size += n.size == r ? 0 : 1), this;
        }),
        (st.prototype.clear = function() {
          (this.__data__ = new ot()), (this.size = 0);
        }),
        (st.prototype.delete = function(t) {
          var e = this.__data__,
            n = e.delete(t);
          return (this.size = e.size), n;
        }),
        (st.prototype.get = function(t) {
          return this.__data__.get(t);
        }),
        (st.prototype.has = function(t) {
          return this.__data__.has(t);
        }),
        (st.prototype.set = function(t, e) {
          var n = this.__data__;
          if (n instanceof ot) {
            var i = n.__data__;
            if (!et || i.length < r - 1) return i.push([t, e]), (this.size = ++n.size), this;
            n = this.__data__ = new at(i);
          }
          return n.set(t, e), (this.size = n.size), this;
        });
      var ht,
        pt = function(t, e, n) {
          for (var r = -1, i = Object(t), o = n(t), a = o.length; a--; ) {
            var s = o[ht ? a : ++r];
            if (!1 === e(i[s], s, i)) break;
          }
          return t;
        };
      function mt(t) {
        return null == t
          ? void 0 === t
            ? m
            : d
          : X && X in Object(t)
          ? (function(t) {
              var e = F.call(t, X),
                n = t[X];
              try {
                t[X] = void 0;
                var r = !0;
              } catch (t) {}
              var i = L.call(t);
              r && (e ? (t[X] = n) : delete t[X]);
              return i;
            })(t)
          : (function(t) {
              return L.call(t);
            })(t);
      }
      function vt(t) {
        return Dt(t) && mt(t) == l;
      }
      function gt(t) {
        return (
          !(
            !It(t) ||
            (function(t) {
              return !!R && R in t;
            })(t)
          ) &&
          (At(t) ? M : v).test(
            (function(t) {
              if (null != t) {
                try {
                  return N.call(t);
                } catch (t) {}
                try {
                  return t + '';
                } catch (t) {}
              }
              return '';
            })(t)
          )
        );
      }
      function bt(t) {
        if (!It(t))
          return (function(t) {
            var e = [];
            if (null != t) for (var n in Object(t)) e.push(n);
            return e;
          })(t);
        var e = kt(t),
          n = [];
        for (var r in t) ('constructor' != r || (!e && F.call(t, r))) && n.push(r);
        return n;
      }
      function yt(t, e, n, r, i) {
        t !== e &&
          pt(
            e,
            function(o, a) {
              if ((i || (i = new st()), It(o)))
                !(function(t, e, n, r, i, o, a) {
                  var s = xt(t, n),
                    l = xt(e, n),
                    u = a.get(l);
                  if (u) return void ut(t, n, u);
                  var c = o ? o(s, l, n + '', t, e, a) : void 0,
                    f = void 0 === c;
                  if (f) {
                    var d = Ct(l),
                      p = !d && $t(l),
                      m = !d && !p && Nt(l);
                    (c = l),
                      d || p || m
                        ? Ct(s)
                          ? (c = s)
                          : Dt((w = s)) && Bt(w)
                          ? (c = (function(t, e) {
                              var n = -1,
                                r = t.length;
                              e || (e = Array(r));
                              for (; ++n < r; ) e[n] = t[n];
                              return e;
                            })(s))
                          : p
                          ? ((f = !1),
                            (c = (function(t, e) {
                              if (e) return t.slice();
                              var n = t.length,
                                r = U ? U(n) : new t.constructor(n);
                              return t.copy(r), r;
                            })(l, !0)))
                          : m
                          ? ((f = !1),
                            (v = l),
                            (g = !0 ? ((b = v.buffer), (y = new b.constructor(b.byteLength)), new G(y).set(new G(b)), y) : v.buffer),
                            (c = new v.constructor(g, v.byteOffset, v.length)))
                          : (c = [])
                        : (function(t) {
                            if (!Dt(t) || mt(t) != h) return !1;
                            var e = W(t);
                            if (null === e) return !0;
                            var n = F.call(e, 'constructor') && e.constructor;
                            return 'function' == typeof n && n instanceof n && N.call(n) == V;
                          })(l) || jt(l)
                        ? ((c = s),
                          jt(s)
                            ? (c = (function(t) {
                                return (function(t, e, n, r) {
                                  var i = !n;
                                  n || (n = {});
                                  var o = -1,
                                    a = e.length;
                                  for (; ++o < a; ) {
                                    var s = e[o],
                                      l = r ? r(n[s], t[s], s, n, t) : void 0;
                                    void 0 === l && (l = t[s]), i ? dt(n, s, l) : ct(n, s, l);
                                  }
                                  return n;
                                })(t, Ft(t));
                              })(s))
                            : (It(s) && !At(s)) ||
                              (c = (function(t) {
                                return 'function' != typeof t.constructor || kt(t) ? {} : rt(W(t));
                              })(l)))
                        : (f = !1);
                  }
                  var v, g, b, y;
                  var w;
                  f && (a.set(l, c), i(c, l, r, o, a), a.delete(l));
                  ut(t, n, c);
                })(t, e, a, n, yt, r, i);
              else {
                var s = r ? r(xt(t, a), o, a + '', t, e, i) : void 0;
                void 0 === s && (s = o), ut(t, a, s);
              }
            },
            Ft
          );
      }
      function wt(t, e) {
        return Tt(
          (function(t, e, n) {
            return (
              (e = Q(void 0 === e ? t.length - 1 : e, 0)),
              function() {
                for (var r = arguments, i = -1, o = Q(r.length - e, 0), a = Array(o); ++i < o; ) a[i] = r[e + i];
                i = -1;
                for (var s = Array(e + 1); ++i < e; ) s[i] = r[i];
                return (s[e] = n(a)), j(t, this, s);
              }
            );
          })(t, e, Vt),
          t + ''
        );
      }
      function Ot(t, e) {
        var n,
          r,
          i = t.__data__;
        return ('string' == (r = typeof (n = e)) || 'number' == r || 'symbol' == r || 'boolean' == r
        ? '__proto__' !== n
        : null === n)
          ? i['string' == typeof e ? 'string' : 'hash']
          : i.map;
      }
      function St(t, e) {
        var n = (function(t, e) {
          return null == t ? void 0 : t[e];
        })(t, e);
        return gt(n) ? n : void 0;
      }
      function _t(t, e) {
        var n = typeof t;
        return !!(e = null == e ? s : e) && ('number' == n || ('symbol' != n && g.test(t))) && t > -1 && t % 1 == 0 && t < e;
      }
      function kt(t) {
        var e = t && t.constructor;
        return t === (('function' == typeof e && e.prototype) || I);
      }
      function xt(t, e) {
        if (('constructor' !== e || 'function' != typeof t[e]) && '__proto__' != e) return t[e];
      }
      var Tt = (function(t) {
        var e = 0,
          n = 0;
        return function() {
          var r = tt(),
            i = a - (r - n);
          if (((n = r), i > 0)) {
            if (++e >= o) return arguments[0];
          } else e = 0;
          return t.apply(void 0, arguments);
        };
      })(
        Y
          ? function(t, e) {
              return Y(t, 'toString', {
                configurable: !0,
                enumerable: !1,
                value:
                  ((n = e),
                  function() {
                    return n;
                  }),
                writable: !0,
              });
              var n;
            }
          : Vt
      );
      function Pt(t, e) {
        return t === e || (t != t && e != e);
      }
      var jt = vt(
          (function() {
            return arguments;
          })()
        )
          ? vt
          : function(t) {
              return Dt(t) && F.call(t, 'callee') && !K.call(t, 'callee');
            },
        Ct = Array.isArray;
      function Bt(t) {
        return null != t && Et(t.length) && !At(t);
      }
      var $t =
        Z ||
        function() {
          return !1;
        };
      function At(t) {
        if (!It(t)) return !1;
        var e = mt(t);
        return e == c || e == f || e == u || e == p;
      }
      function Et(t) {
        return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= s;
      }
      function It(t) {
        var e = typeof t;
        return null != t && ('object' == e || 'function' == e);
      }
      function Dt(t) {
        return null != t && 'object' == typeof t;
      }
      var Nt = P
        ? (function(t) {
            return function(e) {
              return t(e);
            };
          })(P)
        : function(t) {
            return Dt(t) && Et(t.length) && !!b[mt(t)];
          };
      function Ft(t) {
        return Bt(t) ? lt(t, !0) : bt(t);
      }
      var Rt,
        Lt =
          ((Rt = function(t, e, n) {
            yt(t, e, n);
          }),
          wt(function(t, e) {
            var n = -1,
              r = e.length,
              i = r > 1 ? e[r - 1] : void 0,
              o = r > 2 ? e[2] : void 0;
            for (
              i = Rt.length > 3 && 'function' == typeof i ? (r--, i) : void 0,
                o &&
                  (function(t, e, n) {
                    if (!It(n)) return !1;
                    var r = typeof e;
                    return !!('number' == r ? Bt(n) && _t(e, n.length) : 'string' == r && (e in n)) && Pt(n[e], t);
                  })(e[0], e[1], o) &&
                  ((i = r < 3 ? void 0 : i), (r = 1)),
                t = Object(t);
              ++n < r;

            ) {
              var a = e[n];
              a && Rt(t, a, n, i);
            }
            return t;
          }));
      function Vt(t) {
        return t;
      }
      n.exports = Lt;
    }.call(this, n(41), n(92)(t)));
  },
  function(t, e, n) {
    var r = n(25),
      i = n(17);
    t.exports = function(t) {
      return function(e, n) {
        var o,
          a,
          s = String(i(e)),
          l = r(n),
          u = s.length;
        return l < 0 || l >= u
          ? t
            ? ''
            : void 0
          : (o = s.charCodeAt(l)) < 55296 || o > 56319 || l + 1 === u || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343
          ? t
            ? s.charAt(l)
            : o
          : t
          ? s.slice(l, l + 2)
          : a - 56320 + ((o - 55296) << 10) + 65536;
      };
    };
  },
  ,
  function(t, e, n) {
    'use strict';
    /*!
     * vue-router v3.1.3
     * (c) 2019 Evan You
     * @license MIT
     */ function r(t) {
      return Object.prototype.toString.call(t).indexOf('Error') > -1;
    }
    function i(t, e) {
      return e instanceof t || (e && (e.name === t.name || e._name === t._name));
    }
    function o(t, e) {
      for (var n in e) t[n] = e[n];
      return t;
    }
    var a = {
      name: 'RouterView',
      functional: !0,
      props: { name: { type: String, default: 'default' } },
      render: function(t, e) {
        var n = e.props,
          r = e.children,
          i = e.parent,
          a = e.data;
        a.routerView = !0;
        for (var s = i.$createElement, l = n.name, u = i.$route, c = i._routerViewCache || (i._routerViewCache = {}), f = 0, d = !1; i && i._routerRoot !== i; ) {
          var h = i.$vnode && i.$vnode.data;
          h && (h.routerView && f++, h.keepAlive && i._inactive && (d = !0)), (i = i.$parent);
        }
        if (((a.routerViewDepth = f), d)) return s(c[l], a, r);
        var p = u.matched[f];
        if (!p) return (c[l] = null), s();
        var m = (c[l] = p.components[l]);
        (a.registerRouteInstance = function(t, e) {
          var n = p.instances[l];
          ((e && n !== t) || (!e && n === t)) && (p.instances[l] = e);
        }),
          ((a.hook || (a.hook = {})).prepatch = function(t, e) {
            p.instances[l] = e.componentInstance;
          }),
          (a.hook.init = function(t) {
            t.data.keepAlive && t.componentInstance && t.componentInstance !== p.instances[l] && (p.instances[l] = t.componentInstance);
          });
        var v = (a.props = (function(t, e) {
          switch (typeof e) {
            case 'undefined':
              return;
            case 'object':
              return e;
            case 'function':
              return e(t);
            case 'boolean':
              return e ? t.params : void 0;
            default:
              0;
          }
        })(u, p.props && p.props[l]));
        if (v) {
          v = a.props = o({}, v);
          var g = (a.attrs = a.attrs || {});
          for (var b in v) (m.props && b in m.props) || ((g[b] = v[b]), delete v[b]);
        }
        return s(m, a, r);
      },
    };
    var s = /[!'()*]/g,
      l = function(t) {
        return '%' + t.charCodeAt(0).toString(16);
      },
      u = /%2C/g,
      c = function(t) {
        return encodeURIComponent(t)
          .replace(s, l)
          .replace(u, ',');
      },
      f = decodeURIComponent;
    function d(t) {
      var e = {};
      return (t = t.trim().replace(/^(\?|#|&)/, ''))
        ? (t.split('&').forEach(function(t) {
            var n = t.replace(/\+/g, ' ').split('='),
              r = f(n.shift()),
              i = n.length > 0 ? f(n.join('=')) : null;
            void 0 === e[r] ? (e[r] = i) : Array.isArray(e[r]) ? e[r].push(i) : (e[r] = [e[r], i]);
          }),
          e)
        : e;
    }
    function h(t) {
      var e = t
        ? Object.keys(t)
            .map(function(e) {
              var n = t[e];
              if (void 0 === n) return '';
              if (null === n) return c(e);
              if (Array.isArray(n)) {
                var r = [];
                return (
                  n.forEach(function(t) {
                    void 0 !== t && (null === t ? r.push(c(e)) : r.push(c(e) + '=' + c(t)));
                  }),
                  r.join('&')
                );
              }
              return c(e) + '=' + c(n);
            })
            .filter(function(t) {
              return t.length > 0;
            })
            .join('&')
        : null;
      return e ? '?' + e : '';
    }
    var p = /\/?$/;
    function m(t, e, n, r) {
      var i = r && r.options.stringifyQuery,
        o = e.query || {};
      try {
        o = v(o);
      } catch (t) {}
      var a = {
        name: e.name || (t && t.name),
        meta: (t && t.meta) || {},
        path: e.path || '/',
        hash: e.hash || '',
        query: o,
        params: e.params || {},
        fullPath: y(e, i),
        matched: t ? b(t) : [],
      };
      return n && (a.redirectedFrom = y(n, i)), Object.freeze(a);
    }
    function v(t) {
      if (Array.isArray(t)) return t.map(v);
      if (t && 'object' == typeof t) {
        var e = {};
        for (var n in t) e[n] = v(t[n]);
        return e;
      }
      return t;
    }
    var g = m(null, { path: '/' });
    function b(t) {
      for (var e = []; t; ) e.unshift(t), (t = t.parent);
      return e;
    }
    function y(t, e) {
      var n = t.path,
        r = t.query;
      void 0 === r && (r = {});
      var i = t.hash;
      return void 0 === i && (i = ''), (n || '/') + (e || h)(r) + i;
    }
    function w(t, e) {
      return e === g
        ? t === e
        : !!e &&
            (t.path && e.path
              ? t.path.replace(p, '') === e.path.replace(p, '') && t.hash === e.hash && O(t.query, e.query)
              : !(!t.name || !e.name) && t.name === e.name && t.hash === e.hash && O(t.query, e.query) && O(t.params, e.params));
    }
    function O(t, e) {
      if ((void 0 === t && (t = {}), void 0 === e && (e = {}), !t || !e)) return t === e;
      var n = Object.keys(t),
        r = Object.keys(e);
      return (
        n.length === r.length &&
        n.every(function(n) {
          var r = t[n],
            i = e[n];
          return 'object' == typeof r && 'object' == typeof i ? O(r, i) : String(r) === String(i);
        })
      );
    }
    function S(t, e, n) {
      var r = t.charAt(0);
      if ('/' === r) return t;
      if ('?' === r || '#' === r) return e + t;
      var i = e.split('/');
      (n && i[i.length - 1]) || i.pop();
      for (var o = t.replace(/^\//, '').split('/'), a = 0; a < o.length; a++) {
        var s = o[a];
        '..' === s ? i.pop() : '.' !== s && i.push(s);
      }
      return '' !== i[0] && i.unshift(''), i.join('/');
    }
    function _(t) {
      return t.replace(/\/\//g, '/');
    }
    var k =
        Array.isArray ||
        function(t) {
          return '[object Array]' == Object.prototype.toString.call(t);
        },
      x = L,
      T = $,
      P = function(t, e) {
        return E($(t, e));
      },
      j = E,
      C = R,
      B = new RegExp(['(\\\\.)', '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
    function $(t, e) {
      for (var n, r = [], i = 0, o = 0, a = '', s = (e && e.delimiter) || '/'; null != (n = B.exec(t)); ) {
        var l = n[0],
          u = n[1],
          c = n.index;
        if (((a += t.slice(o, c)), (o = c + l.length), u)) a += u[1];
        else {
          var f = t[o],
            d = n[2],
            h = n[3],
            p = n[4],
            m = n[5],
            v = n[6],
            g = n[7];
          a && (r.push(a), (a = ''));
          var b = null != d && null != f && f !== d,
            y = '+' === v || '*' === v,
            w = '?' === v || '*' === v,
            O = n[2] || s,
            S = p || m;
          r.push({ name: h || i++, prefix: d || '', delimiter: O, optional: w, repeat: y, partial: b, asterisk: !!g, pattern: S ? D(S) : g ? '.*' : '[^' + I(O) + ']+?' });
        }
      }
      return o < t.length && (a += t.substr(o)), a && r.push(a), r;
    }
    function A(t) {
      return encodeURI(t).replace(/[\/?#]/g, function(t) {
        return (
          '%' +
          t
            .charCodeAt(0)
            .toString(16)
            .toUpperCase()
        );
      });
    }
    function E(t) {
      for (var e = new Array(t.length), n = 0; n < t.length; n++) 'object' == typeof t[n] && (e[n] = new RegExp('^(?:' + t[n].pattern + ')$'));
      return function(n, r) {
        for (var i = '', o = n || {}, a = (r || {}).pretty ? A : encodeURIComponent, s = 0; s < t.length; s++) {
          var l = t[s];
          if ('string' != typeof l) {
            var u,
              c = o[l.name];
            if (null == c) {
              if (l.optional) {
                l.partial && (i += l.prefix);
                continue;
              }
              throw new TypeError('Expected "' + l.name + '" to be defined');
            }
            if (k(c)) {
              if (!l.repeat) throw new TypeError('Expected "' + l.name + '" to not repeat, but received `' + JSON.stringify(c) + '`');
              if (0 === c.length) {
                if (l.optional) continue;
                throw new TypeError('Expected "' + l.name + '" to not be empty');
              }
              for (var f = 0; f < c.length; f++) {
                if (((u = a(c[f])), !e[s].test(u))) throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '", but received `' + JSON.stringify(u) + '`');
                i += (0 === f ? l.prefix : l.delimiter) + u;
              }
            } else {
              if (
                ((u = l.asterisk
                  ? encodeURI(c).replace(/[?#]/g, function(t) {
                      return (
                        '%' +
                        t
                          .charCodeAt(0)
                          .toString(16)
                          .toUpperCase()
                      );
                    })
                  : a(c)),
                !e[s].test(u))
              )
                throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + u + '"');
              i += l.prefix + u;
            }
          } else i += l;
        }
        return i;
      };
    }
    function I(t) {
      return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
    }
    function D(t) {
      return t.replace(/([=!:$\/()])/g, '\\$1');
    }
    function N(t, e) {
      return (t.keys = e), t;
    }
    function F(t) {
      return t.sensitive ? '' : 'i';
    }
    function R(t, e, n) {
      k(e) || ((n = e || n), (e = []));
      for (var r = (n = n || {}).strict, i = !1 !== n.end, o = '', a = 0; a < t.length; a++) {
        var s = t[a];
        if ('string' == typeof s) o += I(s);
        else {
          var l = I(s.prefix),
            u = '(?:' + s.pattern + ')';
          e.push(s), s.repeat && (u += '(?:' + l + u + ')*'), (o += u = s.optional ? (s.partial ? l + '(' + u + ')?' : '(?:' + l + '(' + u + '))?') : l + '(' + u + ')');
        }
      }
      var c = I(n.delimiter || '/'),
        f = o.slice(-c.length) === c;
      return r || (o = (f ? o.slice(0, -c.length) : o) + '(?:' + c + '(?=$))?'), (o += i ? '$' : r && f ? '' : '(?=' + c + '|$)'), N(new RegExp('^' + o, F(n)), e);
    }
    function L(t, e, n) {
      return (
        k(e) || ((n = e || n), (e = [])),
        (n = n || {}),
        t instanceof RegExp
          ? (function(t, e) {
              var n = t.source.match(/\((?!\?)/g);
              if (n) for (var r = 0; r < n.length; r++) e.push({ name: r, prefix: null, delimiter: null, optional: !1, repeat: !1, partial: !1, asterisk: !1, pattern: null });
              return N(t, e);
            })(t, e)
          : k(t)
          ? (function(t, e, n) {
              for (var r = [], i = 0; i < t.length; i++) r.push(L(t[i], e, n).source);
              return N(new RegExp('(?:' + r.join('|') + ')', F(n)), e);
            })(t, e, n)
          : (function(t, e, n) {
              return R($(t, n), e, n);
            })(t, e, n)
      );
    }
    (x.parse = T), (x.compile = P), (x.tokensToFunction = j), (x.tokensToRegExp = C);
    var V = Object.create(null);
    function M(t, e, n) {
      e = e || {};
      try {
        var r = V[t] || (V[t] = x.compile(t));
        return e.pathMatch && (e[0] = e.pathMatch), r(e, { pretty: !0 });
      } catch (t) {
        return '';
      } finally {
        delete e[0];
      }
    }
    function H(t, e, n, r) {
      var i = 'string' == typeof t ? { path: t } : t;
      if (i._normalized) return i;
      if (i.name) return o({}, t);
      if (!i.path && i.params && e) {
        (i = o({}, i))._normalized = !0;
        var a = o(o({}, e.params), i.params);
        if (e.name) (i.name = e.name), (i.params = a);
        else if (e.matched.length) {
          var s = e.matched[e.matched.length - 1].path;
          i.path = M(s, a, e.path);
        } else 0;
        return i;
      }
      var l = (function(t) {
          var e = '',
            n = '',
            r = t.indexOf('#');
          r >= 0 && ((e = t.slice(r)), (t = t.slice(0, r)));
          var i = t.indexOf('?');
          return i >= 0 && ((n = t.slice(i + 1)), (t = t.slice(0, i))), { path: t, query: n, hash: e };
        })(i.path || ''),
        u = (e && e.path) || '/',
        c = l.path ? S(l.path, u, n || i.append) : u,
        f = (function(t, e, n) {
          void 0 === e && (e = {});
          var r,
            i = n || d;
          try {
            r = i(t || '');
          } catch (t) {
            r = {};
          }
          for (var o in e) r[o] = e[o];
          return r;
        })(l.query, i.query, r && r.options.parseQuery),
        h = i.hash || l.hash;
      return h && '#' !== h.charAt(0) && (h = '#' + h), { _normalized: !0, path: c, query: f, hash: h };
    }
    var z,
      G = function() {},
      U = {
        name: 'RouterLink',
        props: {
          to: { type: [String, Object], required: !0 },
          tag: { type: String, default: 'a' },
          exact: Boolean,
          append: Boolean,
          replace: Boolean,
          activeClass: String,
          exactActiveClass: String,
          event: { type: [String, Array], default: 'click' },
        },
        render: function(t) {
          var e = this,
            n = this.$router,
            r = this.$route,
            i = n.resolve(this.to, r, this.append),
            a = i.location,
            s = i.route,
            l = i.href,
            u = {},
            c = n.options.linkActiveClass,
            f = n.options.linkExactActiveClass,
            d = null == c ? 'router-link-active' : c,
            h = null == f ? 'router-link-exact-active' : f,
            v = null == this.activeClass ? d : this.activeClass,
            g = null == this.exactActiveClass ? h : this.exactActiveClass,
            b = s.redirectedFrom ? m(null, H(s.redirectedFrom), null, n) : s;
          (u[g] = w(r, b)),
            (u[v] = this.exact
              ? u[g]
              : (function(t, e) {
                  return (
                    0 === t.path.replace(p, '/').indexOf(e.path.replace(p, '/')) &&
                    (!e.hash || t.hash === e.hash) &&
                    (function(t, e) {
                      for (var n in e) if (!(n in t)) return !1;
                      return !0;
                    })(t.query, e.query)
                  );
                })(r, b));
          var y = function(t) {
              W(t) && (e.replace ? n.replace(a, G) : n.push(a, G));
            },
            O = { click: W };
          Array.isArray(this.event)
            ? this.event.forEach(function(t) {
                O[t] = y;
              })
            : (O[this.event] = y);
          var S = { class: u },
            _ = !this.$scopedSlots.$hasNormal && this.$scopedSlots.default && this.$scopedSlots.default({ href: l, route: s, navigate: y, isActive: u[v], isExactActive: u[g] });
          if (_) {
            if (1 === _.length) return _[0];
            if (_.length > 1 || !_.length) return 0 === _.length ? t() : t('span', {}, _);
          }
          if ('a' === this.tag) (S.on = O), (S.attrs = { href: l });
          else {
            var k = (function t(e) {
              var n;
              if (e)
                for (var r = 0; r < e.length; r++) {
                  if ('a' === (n = e[r]).tag) return n;
                  if (n.children && (n = t(n.children))) return n;
                }
            })(this.$slots.default);
            if (k) {
              k.isStatic = !1;
              var x = (k.data = o({}, k.data));
              for (var T in ((x.on = x.on || {}), x.on)) {
                var P = x.on[T];
                T in O && (x.on[T] = Array.isArray(P) ? P : [P]);
              }
              for (var j in O) j in x.on ? x.on[j].push(O[j]) : (x.on[j] = y);
              (k.data.attrs = o({}, k.data.attrs)).href = l;
            } else S.on = O;
          }
          return t(this.tag, S, this.$slots.default);
        },
      };
    function W(t) {
      if (!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey || t.defaultPrevented || (void 0 !== t.button && 0 !== t.button))) {
        if (t.currentTarget && t.currentTarget.getAttribute) {
          var e = t.currentTarget.getAttribute('target');
          if (/\b_blank\b/i.test(e)) return;
        }
        return t.preventDefault && t.preventDefault(), !0;
      }
    }
    var q = 'undefined' != typeof window;
    function K(t, e, n, r) {
      var i = e || [],
        o = n || Object.create(null),
        a = r || Object.create(null);
      t.forEach(function(t) {
        !(function t(e, n, r, i, o, a) {
          var s = i.path,
            l = i.name;
          0;
          var u = i.pathToRegexpOptions || {},
            c = (function(t, e, n) {
              n || (t = t.replace(/\/$/, ''));
              if ('/' === t[0]) return t;
              if (null == e) return t;
              return _(e.path + '/' + t);
            })(s, o, u.strict);
          'boolean' == typeof i.caseSensitive && (u.sensitive = i.caseSensitive);
          var f = {
            path: c,
            regex: J(c, u),
            components: i.components || { default: i.component },
            instances: {},
            name: l,
            parent: o,
            matchAs: a,
            redirect: i.redirect,
            beforeEnter: i.beforeEnter,
            meta: i.meta || {},
            props: null == i.props ? {} : i.components ? i.props : { default: i.props },
          };
          i.children &&
            i.children.forEach(function(i) {
              var o = a ? _(a + '/' + i.path) : void 0;
              t(e, n, r, i, f, o);
            });
          n[f.path] || (e.push(f.path), (n[f.path] = f));
          if (void 0 !== i.alias)
            for (var d = Array.isArray(i.alias) ? i.alias : [i.alias], h = 0; h < d.length; ++h) {
              0;
              var p = { path: d[h], children: i.children };
              t(e, n, r, p, o, f.path || '/');
            }
          l && (r[l] || (r[l] = f));
        })(i, o, a, t);
      });
      for (var s = 0, l = i.length; s < l; s++) '*' === i[s] && (i.push(i.splice(s, 1)[0]), l--, s--);
      return { pathList: i, pathMap: o, nameMap: a };
    }
    function J(t, e) {
      return x(t, [], e);
    }
    function X(t, e) {
      var n = K(t),
        r = n.pathList,
        i = n.pathMap,
        o = n.nameMap;
      function a(t, n, a) {
        var s = H(t, n, !1, e),
          u = s.name;
        if (u) {
          var c = o[u];
          if (!c) return l(null, s);
          var f = c.regex.keys
            .filter(function(t) {
              return !t.optional;
            })
            .map(function(t) {
              return t.name;
            });
          if (('object' != typeof s.params && (s.params = {}), n && 'object' == typeof n.params))
            for (var d in n.params) !(d in s.params) && f.indexOf(d) > -1 && (s.params[d] = n.params[d]);
          return (s.path = M(c.path, s.params)), l(c, s, a);
        }
        if (s.path) {
          s.params = {};
          for (var h = 0; h < r.length; h++) {
            var p = r[h],
              m = i[p];
            if (Y(m.regex, s.path, s.params)) return l(m, s, a);
          }
        }
        return l(null, s);
      }
      function s(t, n) {
        var r = t.redirect,
          i = 'function' == typeof r ? r(m(t, n, null, e)) : r;
        if (('string' == typeof i && (i = { path: i }), !i || 'object' != typeof i)) return l(null, n);
        var s = i,
          u = s.name,
          c = s.path,
          f = n.query,
          d = n.hash,
          h = n.params;
        if (((f = s.hasOwnProperty('query') ? s.query : f), (d = s.hasOwnProperty('hash') ? s.hash : d), (h = s.hasOwnProperty('params') ? s.params : h), u)) {
          o[u];
          return a({ _normalized: !0, name: u, query: f, hash: d, params: h }, void 0, n);
        }
        if (c) {
          var p = (function(t, e) {
            return S(t, e.parent ? e.parent.path : '/', !0);
          })(c, t);
          return a({ _normalized: !0, path: M(p, h), query: f, hash: d }, void 0, n);
        }
        return l(null, n);
      }
      function l(t, n, r) {
        return t && t.redirect
          ? s(t, r || n)
          : t && t.matchAs
          ? (function(t, e, n) {
              var r = a({ _normalized: !0, path: M(n, e.params) });
              if (r) {
                var i = r.matched,
                  o = i[i.length - 1];
                return (e.params = r.params), l(o, e);
              }
              return l(null, e);
            })(0, n, t.matchAs)
          : m(t, n, r, e);
      }
      return {
        match: a,
        addRoutes: function(t) {
          K(t, r, i, o);
        },
      };
    }
    function Y(t, e, n) {
      var r = e.match(t);
      if (!r) return !1;
      if (!n) return !0;
      for (var i = 1, o = r.length; i < o; ++i) {
        var a = t.keys[i - 1],
          s = 'string' == typeof r[i] ? decodeURIComponent(r[i]) : r[i];
        a && (n[a.name || 'pathMatch'] = s);
      }
      return !0;
    }
    var Z = q && window.performance && window.performance.now ? window.performance : Date;
    function Q() {
      return Z.now().toFixed(3);
    }
    var tt = Q();
    function et() {
      return tt;
    }
    function nt(t) {
      return (tt = t);
    }
    var rt = Object.create(null);
    function it() {
      var t = window.location.protocol + '//' + window.location.host,
        e = window.location.href.replace(t, '');
      window.history.replaceState({ key: et() }, '', e),
        window.addEventListener('popstate', function(t) {
          at(), t.state && t.state.key && nt(t.state.key);
        });
    }
    function ot(t, e, n, r) {
      if (t.app) {
        var i = t.options.scrollBehavior;
        i &&
          t.app.$nextTick(function() {
            var o = (function() {
                var t = et();
                if (t) return rt[t];
              })(),
              a = i.call(t, e, n, r ? o : null);
            a &&
              ('function' == typeof a.then
                ? a
                    .then(function(t) {
                      ft(t, o);
                    })
                    .catch(function(t) {
                      0;
                    })
                : ft(a, o));
          });
      }
    }
    function at() {
      var t = et();
      t && (rt[t] = { x: window.pageXOffset, y: window.pageYOffset });
    }
    function st(t) {
      return ut(t.x) || ut(t.y);
    }
    function lt(t) {
      return { x: ut(t.x) ? t.x : window.pageXOffset, y: ut(t.y) ? t.y : window.pageYOffset };
    }
    function ut(t) {
      return 'number' == typeof t;
    }
    var ct = /^#\d/;
    function ft(t, e) {
      var n,
        r = 'object' == typeof t;
      if (r && 'string' == typeof t.selector) {
        var i = ct.test(t.selector) ? document.getElementById(t.selector.slice(1)) : document.querySelector(t.selector);
        if (i) {
          var o = t.offset && 'object' == typeof t.offset ? t.offset : {};
          e = (function(t, e) {
            var n = document.documentElement.getBoundingClientRect(),
              r = t.getBoundingClientRect();
            return { x: r.left - n.left - e.x, y: r.top - n.top - e.y };
          })(i, (o = { x: ut((n = o).x) ? n.x : 0, y: ut(n.y) ? n.y : 0 }));
        } else st(t) && (e = lt(t));
      } else r && st(t) && (e = lt(t));
      e && window.scrollTo(e.x, e.y);
    }
    var dt,
      ht =
        q &&
        ((-1 === (dt = window.navigator.userAgent).indexOf('Android 2.') && -1 === dt.indexOf('Android 4.0')) ||
          -1 === dt.indexOf('Mobile Safari') ||
          -1 !== dt.indexOf('Chrome') ||
          -1 !== dt.indexOf('Windows Phone')) &&
          window.history &&
          'pushState' in window.history;
    function pt(t, e) {
      at();
      var n = window.history;
      try {
        e ? n.replaceState({ key: et() }, '', t) : n.pushState({ key: nt(Q()) }, '', t);
      } catch (n) {
        window.location[e ? 'replace' : 'assign'](t);
      }
    }
    function mt(t) {
      pt(t, !0);
    }
    function vt(t, e, n) {
      var r = function(i) {
        i >= t.length
          ? n()
          : t[i]
          ? e(t[i], function() {
              r(i + 1);
            })
          : r(i + 1);
      };
      r(0);
    }
    function gt(t) {
      return function(e, n, i) {
        var o = !1,
          a = 0,
          s = null;
        bt(t, function(t, e, n, l) {
          if ('function' == typeof t && void 0 === t.cid) {
            (o = !0), a++;
            var u,
              c = Ot(function(e) {
                var r;
                ((r = e).__esModule || (wt && 'Module' === r[Symbol.toStringTag])) && (e = e.default),
                  (t.resolved = 'function' == typeof e ? e : z.extend(e)),
                  (n.components[l] = e),
                  --a <= 0 && i();
              }),
              f = Ot(function(t) {
                var e = 'Failed to resolve async component ' + l + ': ' + t;
                s || ((s = r(t) ? t : new Error(e)), i(s));
              });
            try {
              u = t(c, f);
            } catch (t) {
              f(t);
            }
            if (u)
              if ('function' == typeof u.then) u.then(c, f);
              else {
                var d = u.component;
                d && 'function' == typeof d.then && d.then(c, f);
              }
          }
        }),
          o || i();
      };
    }
    function bt(t, e) {
      return yt(
        t.map(function(t) {
          return Object.keys(t.components).map(function(n) {
            return e(t.components[n], t.instances[n], t, n);
          });
        })
      );
    }
    function yt(t) {
      return Array.prototype.concat.apply([], t);
    }
    var wt = 'function' == typeof Symbol && 'symbol' == typeof Symbol.toStringTag;
    function Ot(t) {
      var e = !1;
      return function() {
        for (var n = [], r = arguments.length; r--; ) n[r] = arguments[r];
        if (!e) return (e = !0), t.apply(this, n);
      };
    }
    var St = (function(t) {
      function e(e) {
        t.call(this),
          (this.name = this._name = 'NavigationDuplicated'),
          (this.message = 'Navigating to current location ("' + e.fullPath + '") is not allowed'),
          Object.defineProperty(this, 'stack', { value: new t().stack, writable: !0, configurable: !0 });
      }
      return t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)), (e.prototype.constructor = e), e;
    })(Error);
    St._name = 'NavigationDuplicated';
    var _t = function(t, e) {
      (this.router = t),
        (this.base = (function(t) {
          if (!t)
            if (q) {
              var e = document.querySelector('base');
              t = (t = (e && e.getAttribute('href')) || '/').replace(/^https?:\/\/[^\/]+/, '');
            } else t = '/';
          '/' !== t.charAt(0) && (t = '/' + t);
          return t.replace(/\/$/, '');
        })(e)),
        (this.current = g),
        (this.pending = null),
        (this.ready = !1),
        (this.readyCbs = []),
        (this.readyErrorCbs = []),
        (this.errorCbs = []);
    };
    function kt(t, e, n, r) {
      var i = bt(t, function(t, r, i, o) {
        var a = (function(t, e) {
          'function' != typeof t && (t = z.extend(t));
          return t.options[e];
        })(t, e);
        if (a)
          return Array.isArray(a)
            ? a.map(function(t) {
                return n(t, r, i, o);
              })
            : n(a, r, i, o);
      });
      return yt(r ? i.reverse() : i);
    }
    function xt(t, e) {
      if (e)
        return function() {
          return t.apply(e, arguments);
        };
    }
    (_t.prototype.listen = function(t) {
      this.cb = t;
    }),
      (_t.prototype.onReady = function(t, e) {
        this.ready ? t() : (this.readyCbs.push(t), e && this.readyErrorCbs.push(e));
      }),
      (_t.prototype.onError = function(t) {
        this.errorCbs.push(t);
      }),
      (_t.prototype.transitionTo = function(t, e, n) {
        var r = this,
          i = this.router.match(t, this.current);
        this.confirmTransition(
          i,
          function() {
            r.updateRoute(i),
              e && e(i),
              r.ensureURL(),
              r.ready ||
                ((r.ready = !0),
                r.readyCbs.forEach(function(t) {
                  t(i);
                }));
          },
          function(t) {
            n && n(t),
              t &&
                !r.ready &&
                ((r.ready = !0),
                r.readyErrorCbs.forEach(function(e) {
                  e(t);
                }));
          }
        );
      }),
      (_t.prototype.confirmTransition = function(t, e, n) {
        var o = this,
          a = this.current,
          s = function(t) {
            !i(St, t) &&
              r(t) &&
              (o.errorCbs.length
                ? o.errorCbs.forEach(function(e) {
                    e(t);
                  })
                : console.error(t)),
              n && n(t);
          };
        if (w(t, a) && t.matched.length === a.matched.length) return this.ensureURL(), s(new St(t));
        var l = (function(t, e) {
            var n,
              r = Math.max(t.length, e.length);
            for (n = 0; n < r && t[n] === e[n]; n++);
            return { updated: e.slice(0, n), activated: e.slice(n), deactivated: t.slice(n) };
          })(this.current.matched, t.matched),
          u = l.updated,
          c = l.deactivated,
          f = l.activated,
          d = [].concat(
            (function(t) {
              return kt(t, 'beforeRouteLeave', xt, !0);
            })(c),
            this.router.beforeHooks,
            (function(t) {
              return kt(t, 'beforeRouteUpdate', xt);
            })(u),
            f.map(function(t) {
              return t.beforeEnter;
            }),
            gt(f)
          );
        this.pending = t;
        var h = function(e, n) {
          if (o.pending !== t) return s();
          try {
            e(t, a, function(t) {
              !1 === t || r(t)
                ? (o.ensureURL(!0), s(t))
                : 'string' == typeof t || ('object' == typeof t && ('string' == typeof t.path || 'string' == typeof t.name))
                ? (s(), 'object' == typeof t && t.replace ? o.replace(t) : o.push(t))
                : n(t);
            });
          } catch (t) {
            s(t);
          }
        };
        vt(d, h, function() {
          var n = [];
          vt(
            (function(t, e, n) {
              return kt(t, 'beforeRouteEnter', function(t, r, i, o) {
                return (function(t, e, n, r, i) {
                  return function(o, a, s) {
                    return t(o, a, function(t) {
                      'function' == typeof t &&
                        r.push(function() {
                          !(function t(e, n, r, i) {
                            n[r] && !n[r]._isBeingDestroyed
                              ? e(n[r])
                              : i() &&
                                setTimeout(function() {
                                  t(e, n, r, i);
                                }, 16);
                          })(t, e.instances, n, i);
                        }),
                        s(t);
                    });
                  };
                })(t, i, o, e, n);
              });
            })(f, n, function() {
              return o.current === t;
            }).concat(o.router.resolveHooks),
            h,
            function() {
              if (o.pending !== t) return s();
              (o.pending = null),
                e(t),
                o.router.app &&
                  o.router.app.$nextTick(function() {
                    n.forEach(function(t) {
                      t();
                    });
                  });
            }
          );
        });
      }),
      (_t.prototype.updateRoute = function(t) {
        var e = this.current;
        (this.current = t),
          this.cb && this.cb(t),
          this.router.afterHooks.forEach(function(n) {
            n && n(t, e);
          });
      });
    var Tt = (function(t) {
      function e(e, n) {
        var r = this;
        t.call(this, e, n);
        var i = e.options.scrollBehavior,
          o = ht && i;
        o && it();
        var a = Pt(this.base);
        window.addEventListener('popstate', function(t) {
          var n = r.current,
            i = Pt(r.base);
          (r.current === g && i === a) ||
            r.transitionTo(i, function(t) {
              o && ot(e, t, n, !0);
            });
        });
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        (e.prototype.go = function(t) {
          window.history.go(t);
        }),
        (e.prototype.push = function(t, e, n) {
          var r = this,
            i = this.current;
          this.transitionTo(
            t,
            function(t) {
              pt(_(r.base + t.fullPath)), ot(r.router, t, i, !1), e && e(t);
            },
            n
          );
        }),
        (e.prototype.replace = function(t, e, n) {
          var r = this,
            i = this.current;
          this.transitionTo(
            t,
            function(t) {
              mt(_(r.base + t.fullPath)), ot(r.router, t, i, !1), e && e(t);
            },
            n
          );
        }),
        (e.prototype.ensureURL = function(t) {
          if (Pt(this.base) !== this.current.fullPath) {
            var e = _(this.base + this.current.fullPath);
            t ? pt(e) : mt(e);
          }
        }),
        (e.prototype.getCurrentLocation = function() {
          return Pt(this.base);
        }),
        e
      );
    })(_t);
    function Pt(t) {
      var e = decodeURI(window.location.pathname);
      return t && 0 === e.indexOf(t) && (e = e.slice(t.length)), (e || '/') + window.location.search + window.location.hash;
    }
    var jt = (function(t) {
      function e(e, n, r) {
        t.call(this, e, n),
          (r &&
            (function(t) {
              var e = Pt(t);
              if (!/^\/#/.test(e)) return window.location.replace(_(t + '/#' + e)), !0;
            })(this.base)) ||
            Ct();
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        (e.prototype.setupListeners = function() {
          var t = this,
            e = this.router.options.scrollBehavior,
            n = ht && e;
          n && it(),
            window.addEventListener(ht ? 'popstate' : 'hashchange', function() {
              var e = t.current;
              Ct() &&
                t.transitionTo(Bt(), function(r) {
                  n && ot(t.router, r, e, !0), ht || Et(r.fullPath);
                });
            });
        }),
        (e.prototype.push = function(t, e, n) {
          var r = this,
            i = this.current;
          this.transitionTo(
            t,
            function(t) {
              At(t.fullPath), ot(r.router, t, i, !1), e && e(t);
            },
            n
          );
        }),
        (e.prototype.replace = function(t, e, n) {
          var r = this,
            i = this.current;
          this.transitionTo(
            t,
            function(t) {
              Et(t.fullPath), ot(r.router, t, i, !1), e && e(t);
            },
            n
          );
        }),
        (e.prototype.go = function(t) {
          window.history.go(t);
        }),
        (e.prototype.ensureURL = function(t) {
          var e = this.current.fullPath;
          Bt() !== e && (t ? At(e) : Et(e));
        }),
        (e.prototype.getCurrentLocation = function() {
          return Bt();
        }),
        e
      );
    })(_t);
    function Ct() {
      var t = Bt();
      return '/' === t.charAt(0) || (Et('/' + t), !1);
    }
    function Bt() {
      var t = window.location.href,
        e = t.indexOf('#');
      if (e < 0) return '';
      var n = (t = t.slice(e + 1)).indexOf('?');
      if (n < 0) {
        var r = t.indexOf('#');
        t = r > -1 ? decodeURI(t.slice(0, r)) + t.slice(r) : decodeURI(t);
      } else n > -1 && (t = decodeURI(t.slice(0, n)) + t.slice(n));
      return t;
    }
    function $t(t) {
      var e = window.location.href,
        n = e.indexOf('#');
      return (n >= 0 ? e.slice(0, n) : e) + '#' + t;
    }
    function At(t) {
      ht ? pt($t(t)) : (window.location.hash = t);
    }
    function Et(t) {
      ht ? mt($t(t)) : window.location.replace($t(t));
    }
    var It = (function(t) {
        function e(e, n) {
          t.call(this, e, n), (this.stack = []), (this.index = -1);
        }
        return (
          t && (e.__proto__ = t),
          (e.prototype = Object.create(t && t.prototype)),
          (e.prototype.constructor = e),
          (e.prototype.push = function(t, e, n) {
            var r = this;
            this.transitionTo(
              t,
              function(t) {
                (r.stack = r.stack.slice(0, r.index + 1).concat(t)), r.index++, e && e(t);
              },
              n
            );
          }),
          (e.prototype.replace = function(t, e, n) {
            var r = this;
            this.transitionTo(
              t,
              function(t) {
                (r.stack = r.stack.slice(0, r.index).concat(t)), e && e(t);
              },
              n
            );
          }),
          (e.prototype.go = function(t) {
            var e = this,
              n = this.index + t;
            if (!(n < 0 || n >= this.stack.length)) {
              var r = this.stack[n];
              this.confirmTransition(
                r,
                function() {
                  (e.index = n), e.updateRoute(r);
                },
                function(t) {
                  i(St, t) && (e.index = n);
                }
              );
            }
          }),
          (e.prototype.getCurrentLocation = function() {
            var t = this.stack[this.stack.length - 1];
            return t ? t.fullPath : '/';
          }),
          (e.prototype.ensureURL = function() {}),
          e
        );
      })(_t),
      Dt = function(t) {
        void 0 === t && (t = {}),
          (this.app = null),
          (this.apps = []),
          (this.options = t),
          (this.beforeHooks = []),
          (this.resolveHooks = []),
          (this.afterHooks = []),
          (this.matcher = X(t.routes || [], this));
        var e = t.mode || 'hash';
        switch (((this.fallback = 'history' === e && !ht && !1 !== t.fallback), this.fallback && (e = 'hash'), q || (e = 'abstract'), (this.mode = e), e)) {
          case 'history':
            this.history = new Tt(this, t.base);
            break;
          case 'hash':
            this.history = new jt(this, t.base, this.fallback);
            break;
          case 'abstract':
            this.history = new It(this, t.base);
            break;
          default:
            0;
        }
      },
      Nt = { currentRoute: { configurable: !0 } };
    function Ft(t, e) {
      return (
        t.push(e),
        function() {
          var n = t.indexOf(e);
          n > -1 && t.splice(n, 1);
        }
      );
    }
    (Dt.prototype.match = function(t, e, n) {
      return this.matcher.match(t, e, n);
    }),
      (Nt.currentRoute.get = function() {
        return this.history && this.history.current;
      }),
      (Dt.prototype.init = function(t) {
        var e = this;
        if (
          (this.apps.push(t),
          t.$once('hook:destroyed', function() {
            var n = e.apps.indexOf(t);
            n > -1 && e.apps.splice(n, 1), e.app === t && (e.app = e.apps[0] || null);
          }),
          !this.app)
        ) {
          this.app = t;
          var n = this.history;
          if (n instanceof Tt) n.transitionTo(n.getCurrentLocation());
          else if (n instanceof jt) {
            var r = function() {
              n.setupListeners();
            };
            n.transitionTo(n.getCurrentLocation(), r, r);
          }
          n.listen(function(t) {
            e.apps.forEach(function(e) {
              e._route = t;
            });
          });
        }
      }),
      (Dt.prototype.beforeEach = function(t) {
        return Ft(this.beforeHooks, t);
      }),
      (Dt.prototype.beforeResolve = function(t) {
        return Ft(this.resolveHooks, t);
      }),
      (Dt.prototype.afterEach = function(t) {
        return Ft(this.afterHooks, t);
      }),
      (Dt.prototype.onReady = function(t, e) {
        this.history.onReady(t, e);
      }),
      (Dt.prototype.onError = function(t) {
        this.history.onError(t);
      }),
      (Dt.prototype.push = function(t, e, n) {
        var r = this;
        if (!e && !n && 'undefined' != typeof Promise)
          return new Promise(function(e, n) {
            r.history.push(t, e, n);
          });
        this.history.push(t, e, n);
      }),
      (Dt.prototype.replace = function(t, e, n) {
        var r = this;
        if (!e && !n && 'undefined' != typeof Promise)
          return new Promise(function(e, n) {
            r.history.replace(t, e, n);
          });
        this.history.replace(t, e, n);
      }),
      (Dt.prototype.go = function(t) {
        this.history.go(t);
      }),
      (Dt.prototype.back = function() {
        this.go(-1);
      }),
      (Dt.prototype.forward = function() {
        this.go(1);
      }),
      (Dt.prototype.getMatchedComponents = function(t) {
        var e = t ? (t.matched ? t : this.resolve(t).route) : this.currentRoute;
        return e
          ? [].concat.apply(
              [],
              e.matched.map(function(t) {
                return Object.keys(t.components).map(function(e) {
                  return t.components[e];
                });
              })
            )
          : [];
      }),
      (Dt.prototype.resolve = function(t, e, n) {
        var r = H(t, (e = e || this.history.current), n, this),
          i = this.match(r, e),
          o = i.redirectedFrom || i.fullPath;
        return {
          location: r,
          route: i,
          href: (function(t, e, n) {
            var r = 'hash' === n ? '#' + e : e;
            return t ? _(t + '/' + r) : r;
          })(this.history.base, o, this.mode),
          normalizedTo: r,
          resolved: i,
        };
      }),
      (Dt.prototype.addRoutes = function(t) {
        this.matcher.addRoutes(t), this.history.current !== g && this.history.transitionTo(this.history.getCurrentLocation());
      }),
      Object.defineProperties(Dt.prototype, Nt),
      (Dt.install = function t(e) {
        if (!t.installed || z !== e) {
          (t.installed = !0), (z = e);
          var n = function(t) {
              return void 0 !== t;
            },
            r = function(t, e) {
              var r = t.$options._parentVnode;
              n(r) && n((r = r.data)) && n((r = r.registerRouteInstance)) && r(t, e);
            };
          e.mixin({
            beforeCreate: function() {
              n(this.$options.router)
                ? ((this._routerRoot = this), (this._router = this.$options.router), this._router.init(this), e.util.defineReactive(this, '_route', this._router.history.current))
                : (this._routerRoot = (this.$parent && this.$parent._routerRoot) || this),
                r(this, this);
            },
            destroyed: function() {
              r(this);
            },
          }),
            Object.defineProperty(e.prototype, '$router', {
              get: function() {
                return this._routerRoot._router;
              },
            }),
            Object.defineProperty(e.prototype, '$route', {
              get: function() {
                return this._routerRoot._route;
              },
            }),
            e.component('RouterView', a),
            e.component('RouterLink', U);
          var i = e.config.optionMergeStrategies;
          i.beforeRouteEnter = i.beforeRouteLeave = i.beforeRouteUpdate = i.created;
        }
      }),
      (Dt.version = '3.1.3'),
      q && window.Vue && window.Vue.use(Dt),
      (e.a = Dt);
  },
  function(t, e, n) {
    'use strict';
    var r = n(6),
      i = n(50),
      o = n(31);
    r(
      r.P +
        r.F *
          n(14)(function() {
            return (
              null !== new Date(NaN).toJSON() ||
              1 !==
                Date.prototype.toJSON.call({
                  toISOString: function() {
                    return 1;
                  },
                })
            );
          }),
      'Date',
      {
        toJSON: function(t) {
          var e = i(this),
            n = o(e);
          return 'number' != typeof n || isFinite(n) ? e.toISOString() : null;
        },
      }
    );
  },
  function(t, e) {
    var n,
      r,
      i = (t.exports = {});
    function o() {
      throw new Error('setTimeout has not been defined');
    }
    function a() {
      throw new Error('clearTimeout has not been defined');
    }
    function s(t) {
      if (n === setTimeout) return setTimeout(t, 0);
      if ((n === o || !n) && setTimeout) return (n = setTimeout), setTimeout(t, 0);
      try {
        return n(t, 0);
      } catch (e) {
        try {
          return n.call(null, t, 0);
        } catch (e) {
          return n.call(this, t, 0);
        }
      }
    }
    !(function() {
      try {
        n = 'function' == typeof setTimeout ? setTimeout : o;
      } catch (t) {
        n = o;
      }
      try {
        r = 'function' == typeof clearTimeout ? clearTimeout : a;
      } catch (t) {
        r = a;
      }
    })();
    var l,
      u = [],
      c = !1,
      f = -1;
    function d() {
      c && l && ((c = !1), l.length ? (u = l.concat(u)) : (f = -1), u.length && h());
    }
    function h() {
      if (!c) {
        var t = s(d);
        c = !0;
        for (var e = u.length; e; ) {
          for (l = u, u = []; ++f < e; ) l && l[f].run();
          (f = -1), (e = u.length);
        }
        (l = null),
          (c = !1),
          (function(t) {
            if (r === clearTimeout) return clearTimeout(t);
            if ((r === a || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(t);
            try {
              r(t);
            } catch (e) {
              try {
                return r.call(null, t);
              } catch (e) {
                return r.call(this, t);
              }
            }
          })(t);
      }
    }
    function p(t, e) {
      (this.fun = t), (this.array = e);
    }
    function m() {}
    (i.nextTick = function(t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
      u.push(new p(t, e)), 1 !== u.length || c || s(h);
    }),
      (p.prototype.run = function() {
        this.fun.apply(null, this.array);
      }),
      (i.title = 'browser'),
      (i.browser = !0),
      (i.env = {}),
      (i.argv = []),
      (i.version = ''),
      (i.versions = {}),
      (i.on = m),
      (i.addListener = m),
      (i.once = m),
      (i.off = m),
      (i.removeListener = m),
      (i.removeAllListeners = m),
      (i.emit = m),
      (i.prependListener = m),
      (i.prependOnceListener = m),
      (i.listeners = function(t) {
        return [];
      }),
      (i.binding = function(t) {
        throw new Error('process.binding is not supported');
      }),
      (i.cwd = function() {
        return '/';
      }),
      (i.chdir = function(t) {
        throw new Error('process.chdir is not supported');
      }),
      (i.umask = function() {
        return 0;
      });
  },
  function(t, e, n) {
    'use strict';
    /*!
     * portal-vue © Thorsten Lünborg, 2019
     *
     * Version: 2.1.6
     *
     * LICENCE: MIT
     *
     * https://github.com/linusborg/portal-vue
     *
     */ Object.defineProperty(e, '__esModule', { value: !0 });
    var r,
      i = (r = n(12)) && 'object' == typeof r && 'default' in r ? r.default : r;
    function o(t) {
      return (o =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(t) {
              return typeof t;
            }
          : function(t) {
              return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
            })(t);
    }
    function a(t) {
      return (
        (function(t) {
          if (Array.isArray(t)) {
            for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
            return n;
          }
        })(t) ||
        (function(t) {
          if (Symbol.iterator in Object(t) || '[object Arguments]' === Object.prototype.toString.call(t)) return Array.from(t);
        })(t) ||
        (function() {
          throw new TypeError('Invalid attempt to spread non-iterable instance');
        })()
      );
    }
    var s = 'undefined' != typeof window;
    function l(t, e) {
      return e.reduce(function(e, n) {
        return t.hasOwnProperty(n) && (e[n] = t[n]), e;
      }, {});
    }
    var u = {},
      c = {},
      f = {},
      d = new (i.extend({
        data: function() {
          return { transports: u, targets: c, sources: f, trackInstances: s };
        },
        methods: {
          open: function(t) {
            if (s) {
              var e = t.to,
                n = t.from,
                r = t.passengers,
                a = t.order,
                l = void 0 === a ? 1 / 0 : a;
              if (e && n && r) {
                var u,
                  c = { to: e, from: n, passengers: ((u = r), Array.isArray(u) || 'object' === o(u) ? Object.freeze(u) : u), order: l };
                -1 === Object.keys(this.transports).indexOf(e) && i.set(this.transports, e, []);
                var f,
                  d = this.$_getTransportIndex(c),
                  h = this.transports[e].slice(0);
                -1 === d ? h.push(c) : (h[d] = c),
                  (this.transports[e] =
                    ((f = function(t, e) {
                      return t.order - e.order;
                    }),
                    h
                      .map(function(t, e) {
                        return [e, t];
                      })
                      .sort(function(t, e) {
                        return f(t[1], e[1]) || t[0] - e[0];
                      })
                      .map(function(t) {
                        return t[1];
                      })));
              }
            }
          },
          close: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = t.to,
              r = t.from;
            if (n && (r || !1 !== e) && this.transports[n])
              if (e) this.transports[n] = [];
              else {
                var i = this.$_getTransportIndex(t);
                if (i >= 0) {
                  var o = this.transports[n].slice(0);
                  o.splice(i, 1), (this.transports[n] = o);
                }
              }
          },
          registerTarget: function(t, e, n) {
            s &&
              (this.trackInstances && !n && this.targets[t] && console.warn('[portal-vue]: Target '.concat(t, ' already exists')), this.$set(this.targets, t, Object.freeze([e])));
          },
          unregisterTarget: function(t) {
            this.$delete(this.targets, t);
          },
          registerSource: function(t, e, n) {
            s &&
              (this.trackInstances && !n && this.sources[t] && console.warn('[portal-vue]: source '.concat(t, ' already exists')), this.$set(this.sources, t, Object.freeze([e])));
          },
          unregisterSource: function(t) {
            this.$delete(this.sources, t);
          },
          hasTarget: function(t) {
            return !(!this.targets[t] || !this.targets[t][0]);
          },
          hasSource: function(t) {
            return !(!this.sources[t] || !this.sources[t][0]);
          },
          hasContentFor: function(t) {
            return !!this.transports[t] && !!this.transports[t].length;
          },
          $_getTransportIndex: function(t) {
            var e = t.to,
              n = t.from;
            for (var r in this.transports[e]) if (this.transports[e][r].from === n) return +r;
            return -1;
          },
        },
      }))(u),
      h = 1,
      p = i.extend({
        name: 'portal',
        props: {
          disabled: { type: Boolean },
          name: {
            type: String,
            default: function() {
              return String(h++);
            },
          },
          order: { type: Number, default: 0 },
          slim: { type: Boolean },
          slotProps: {
            type: Object,
            default: function() {
              return {};
            },
          },
          tag: { type: String, default: 'DIV' },
          to: {
            type: String,
            default: function() {
              return String(Math.round(1e7 * Math.random()));
            },
          },
        },
        created: function() {
          var t = this;
          this.$nextTick(function() {
            d.registerSource(t.name, t);
          });
        },
        mounted: function() {
          this.disabled || this.sendUpdate();
        },
        updated: function() {
          this.disabled ? this.clear() : this.sendUpdate();
        },
        beforeDestroy: function() {
          d.unregisterSource(this.name), this.clear();
        },
        watch: {
          to: function(t, e) {
            e && e !== t && this.clear(e), this.sendUpdate();
          },
        },
        methods: {
          clear: function(t) {
            var e = { from: this.name, to: t || this.to };
            d.close(e);
          },
          normalizeSlots: function() {
            return this.$scopedSlots.default ? [this.$scopedSlots.default] : this.$slots.default;
          },
          normalizeOwnChildren: function(t) {
            return 'function' == typeof t ? t(this.slotProps) : t;
          },
          sendUpdate: function() {
            var t = this.normalizeSlots();
            if (t) {
              var e = { from: this.name, to: this.to, passengers: a(t), order: this.order };
              d.open(e);
            } else this.clear();
          },
        },
        render: function(t) {
          var e = this.$slots.default || this.$scopedSlots.default || [],
            n = this.tag;
          return e && this.disabled
            ? e.length <= 1 && this.slim
              ? this.normalizeOwnChildren(e)[0]
              : t(n, [this.normalizeOwnChildren(e)])
            : this.slim
            ? t()
            : t(n, { class: { 'v-portal': !0 }, style: { display: 'none' }, key: 'v-portal-placeholder' });
        },
      }),
      m = i.extend({
        name: 'portalTarget',
        props: {
          multiple: { type: Boolean, default: !1 },
          name: { type: String, required: !0 },
          slim: { type: Boolean, default: !1 },
          slotProps: {
            type: Object,
            default: function() {
              return {};
            },
          },
          tag: { type: String, default: 'div' },
          transition: { type: [String, Object, Function] },
        },
        data: function() {
          return { transports: d.transports, firstRender: !0 };
        },
        created: function() {
          var t = this;
          this.$nextTick(function() {
            d.registerTarget(t.name, t);
          });
        },
        watch: {
          ownTransports: function() {
            this.$emit('change', this.children().length > 0);
          },
          name: function(t, e) {
            d.unregisterTarget(e), d.registerTarget(t, this);
          },
        },
        mounted: function() {
          var t = this;
          this.transition &&
            this.$nextTick(function() {
              t.firstRender = !1;
            });
        },
        beforeDestroy: function() {
          d.unregisterTarget(this.name);
        },
        computed: {
          ownTransports: function() {
            var t = this.transports[this.name] || [];
            return this.multiple ? t : 0 === t.length ? [] : [t[t.length - 1]];
          },
          passengers: function() {
            return (function(t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              return t.reduce(function(t, n) {
                var r = n.passengers[0],
                  i = 'function' == typeof r ? r(e) : n.passengers;
                return t.concat(i);
              }, []);
            })(this.ownTransports, this.slotProps);
          },
        },
        methods: {
          children: function() {
            return 0 !== this.passengers.length ? this.passengers : this.$scopedSlots.default ? this.$scopedSlots.default(this.slotProps) : this.$slots.default || [];
          },
          noWrapper: function() {
            var t = this.slim && !this.transition;
            return t && this.children().length > 1 && console.warn('[portal-vue]: PortalTarget with `slim` option received more than one child element.'), t;
          },
        },
        render: function(t) {
          var e = this.noWrapper(),
            n = this.children(),
            r = this.transition || this.tag;
          return e ? n[0] : this.slim && !r ? t() : t(r, { props: { tag: this.transition && this.tag ? this.tag : void 0 }, class: { 'vue-portal-target': !0 } }, n);
        },
      }),
      v = 0,
      g = ['disabled', 'name', 'order', 'slim', 'slotProps', 'tag', 'to'],
      b = ['multiple', 'transition'],
      y = i.extend({
        name: 'MountingPortal',
        inheritAttrs: !1,
        props: {
          append: { type: [Boolean, String] },
          bail: { type: Boolean },
          mountTo: { type: String, required: !0 },
          disabled: { type: Boolean },
          name: {
            type: String,
            default: function() {
              return 'mounted_' + String(v++);
            },
          },
          order: { type: Number, default: 0 },
          slim: { type: Boolean },
          slotProps: {
            type: Object,
            default: function() {
              return {};
            },
          },
          tag: { type: String, default: 'DIV' },
          to: {
            type: String,
            default: function() {
              return String(Math.round(1e7 * Math.random()));
            },
          },
          multiple: { type: Boolean, default: !1 },
          targetSlim: { type: Boolean },
          targetSlotProps: {
            type: Object,
            default: function() {
              return {};
            },
          },
          targetTag: { type: String, default: 'div' },
          transition: { type: [String, Object, Function] },
        },
        created: function() {
          if ('undefined' != typeof document) {
            var t = document.querySelector(this.mountTo);
            if (t) {
              var e = this.$props;
              if (d.targets[e.name])
                e.bail
                  ? console.warn('[portal-vue]: Target '.concat(e.name, " is already mounted.\n        Aborting because 'bail: true' is set"))
                  : (this.portalTarget = d.targets[e.name]);
              else {
                var n = e.append;
                if (n) {
                  var r = 'string' == typeof n ? n : 'DIV',
                    i = document.createElement(r);
                  t.appendChild(i), (t = i);
                }
                var o = l(this.$props, b);
                (o.slim = this.targetSlim),
                  (o.tag = this.targetTag),
                  (o.slotProps = this.targetSlotProps),
                  (o.name = this.to),
                  (this.portalTarget = new m({ el: t, parent: this.$parent || this, propsData: o }));
              }
            } else console.error("[portal-vue]: Mount Point '".concat(this.mountTo, "' not found in document"));
          }
        },
        beforeDestroy: function() {
          var t = this.portalTarget;
          if (this.append) {
            var e = t.$el;
            e.parentNode.removeChild(e);
          }
          t.$destroy();
        },
        render: function(t) {
          if (!this.portalTarget) return console.warn("[portal-vue] Target wasn't mounted"), t();
          if (!this.$scopedSlots.manual) {
            var e = l(this.$props, g);
            return t(p, { props: e, attrs: this.$attrs, on: this.$listeners, scopedSlots: this.$scopedSlots }, this.$slots.default);
          }
          var n = this.$scopedSlots.manual({ to: this.to });
          return Array.isArray(n) && (n = n[0]), n || t();
        },
      });
    var w = {
      install: function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        t.component(e.portalName || 'Portal', p), t.component(e.portalTargetName || 'PortalTarget', m), t.component(e.MountingPortalName || 'MountingPortal', y);
      },
    };
    (e.default = w), (e.Portal = p), (e.PortalTarget = m), (e.MountingPortal = y), (e.Wormhole = d);
  },
  function(t, e, n) {
    var r = n(18)('meta'),
      i = n(7),
      o = n(20),
      a = n(19).f,
      s = 0,
      l =
        Object.isExtensible ||
        function() {
          return !0;
        },
      u = !n(14)(function() {
        return l(Object.preventExtensions({}));
      }),
      c = function(t) {
        a(t, r, { value: { i: 'O' + ++s, w: {} } });
      },
      f = (t.exports = {
        KEY: r,
        NEED: !1,
        fastKey: function(t, e) {
          if (!i(t)) return 'symbol' == typeof t ? t : ('string' == typeof t ? 'S' : 'P') + t;
          if (!o(t, r)) {
            if (!l(t)) return 'F';
            if (!e) return 'E';
            c(t);
          }
          return t[r].i;
        },
        getWeak: function(t, e) {
          if (!o(t, r)) {
            if (!l(t)) return !0;
            if (!e) return !1;
            c(t);
          }
          return t[r].w;
        },
        onFreeze: function(t) {
          return u && f.NEED && l(t) && !o(t, r) && c(t), t;
        },
      });
  },
  function(t, e, n) {
    var r = n(48),
      i = n(68),
      o = n(60);
    t.exports = function(t) {
      var e = r(t),
        n = i.f;
      if (n) for (var a, s = n(t), l = o.f, u = 0; s.length > u; ) l.call(t, (a = s[u++])) && e.push(a);
      return e;
    };
  },
  function(t, e, n) {
    var r = n(16);
    t.exports =
      Array.isArray ||
      function(t) {
        return 'Array' == r(t);
      };
  },
  function(t, e, n) {
    var r = n(19),
      i = n(15),
      o = n(48);
    t.exports = n(11)
      ? Object.defineProperties
      : function(t, e) {
          i(t);
          for (var n, a = o(e), s = a.length, l = 0; s > l; ) r.f(t, (n = a[l++]), e[n]);
          return t;
        };
  },
  function(t, e, n) {
    var r = n(24),
      i = n(71).f,
      o = {}.toString,
      a = 'object' == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function(t) {
      return a && '[object Window]' == o.call(t)
        ? (function(t) {
            try {
              return i(t);
            } catch (t) {
              return a.slice();
            }
          })(t)
        : i(r(t));
    };
  },
  function(t, e, n) {
    var r = n(60),
      i = n(32),
      o = n(24),
      a = n(31),
      s = n(20),
      l = n(38),
      u = Object.getOwnPropertyDescriptor;
    e.f = n(11)
      ? u
      : function(t, e) {
          if (((t = o(t)), (e = a(e, !0)), l))
            try {
              return u(t, e);
            } catch (t) {}
          if (s(t, e)) return i(!r.f.call(t, e), t[e]);
        };
  },
  function(t, e) {
    t.exports = function(t, e) {
      return { value: e, done: !!t };
    };
  },
  function(t, e, n) {
    'use strict';
    var r = n(69),
      i = n(32),
      o = n(56),
      a = {};
    n(9)(a, n(4)('iterator'), function() {
      return this;
    }),
      (t.exports = function(t, e, n) {
        (t.prototype = r(a, { next: i(1, n) })), o(t, e + ' Iterator');
      });
  },
  function(t, e, n) {
    var r = n(20),
      i = n(50),
      o = n(58)('IE_PROTO'),
      a = Object.prototype;
    t.exports =
      Object.getPrototypeOf ||
      function(t) {
        return (t = i(t)), r(t, o) ? t[o] : 'function' == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null;
      };
  },
  function(t, e, n) {
    var r = n(6),
      i = n(10),
      o = n(14);
    t.exports = function(t, e) {
      var n = (i.Object || {})[t] || Object[t],
        a = {};
      (a[t] = e(n)),
        r(
          r.S +
            r.F *
              o(function() {
                n(1);
              }),
          'Object',
          a
        );
    };
  },
  function(t, e) {
    t.exports = function(t) {
      return (
        t.webpackPolyfill ||
          ((t.deprecate = function() {}),
          (t.paths = []),
          t.children || (t.children = []),
          Object.defineProperty(t, 'loaded', {
            enumerable: !0,
            get: function() {
              return t.l;
            },
          }),
          Object.defineProperty(t, 'id', {
            enumerable: !0,
            get: function() {
              return t.i;
            },
          }),
          (t.webpackPolyfill = 1)),
        t
      );
    };
  },
  function(t, e, n) {
    'use strict';
    n.r(e),
      n.d(e, 'parse', function() {
        return i;
      }),
      n.d(e, 'stringify', function() {
        return o;
      });
    var r = (function(t, e) {
      return {
        parse: function(e, r) {
          var a = JSON.parse(e, o).map(i),
            s = a[0],
            l = r || n,
            u =
              'object' == typeof s && s
                ? (function e(n, r, i, o) {
                    return Object.keys(i).reduce(function(i, a) {
                      var s = i[a];
                      if (s instanceof t) {
                        var l = n[s];
                        'object' != typeof l || r.has(l) ? (i[a] = o.call(i, a, l)) : (r.add(l), (i[a] = o.call(i, a, e(n, r, l, o))));
                      } else i[a] = o.call(i, a, s);
                      return i;
                    }, i);
                  })(a, new Set(), s, l)
                : s;
          return l.call({ '': u }, '', u);
        },
        stringify: function(t, i, o) {
          for (
            var a,
              s = new Map(),
              l = [],
              u = [],
              c =
                i && typeof i == typeof l
                  ? function(t, e) {
                      if ('' === t || -1 < i.indexOf(t)) return e;
                    }
                  : i || n,
              f = +r(s, l, c.call({ '': t }, '', t)),
              d = function(t, n) {
                if (a) return (a = !a), n;
                var i = c.call(this, t, n);
                switch (typeof i) {
                  case 'object':
                    if (null === i) return i;
                  case e:
                    return s.get(i) || r(s, l, i);
                }
                return i;
              };
            f < l.length;
            f++
          )
            (a = !0), (u[f] = JSON.stringify(l[f], d, o));
          return '[' + u.join(',') + ']';
        },
      };
      function n(t, e) {
        return e;
      }
      function r(e, n, r) {
        var i = t(n.push(r) - 1);
        return e.set(r, i), i;
      }
      function i(e) {
        return e instanceof t ? t(e) : e;
      }
      function o(n, r) {
        return typeof r === e ? new t(r) : r;
      }
    })(String, 'string');
    e.default = r;
    var i = r.parse,
      o = r.stringify;
  },
  function(t, e, n) {
    var r = n(6),
      i = n(14),
      o = n(17),
      a = /"/g,
      s = function(t, e, n, r) {
        var i = String(o(t)),
          s = '<' + e;
        return '' !== n && (s += ' ' + n + '="' + String(r).replace(a, '&quot;') + '"'), s + '>' + i + '</' + e + '>';
      };
    t.exports = function(t, e) {
      var n = {};
      (n[t] = e(s)),
        r(
          r.P +
            r.F *
              i(function() {
                var e = ''[t]('"');
                return e !== e.toLowerCase() || e.split('"').length > 3;
              }),
          'String',
          n
        );
    };
  },
  function(t, e, n) {
    (function(t) {
      var r = (void 0 !== t && t) || ('undefined' != typeof self && self) || window,
        i = Function.prototype.apply;
      function o(t, e) {
        (this._id = t), (this._clearFn = e);
      }
      (e.setTimeout = function() {
        return new o(i.call(setTimeout, r, arguments), clearTimeout);
      }),
        (e.setInterval = function() {
          return new o(i.call(setInterval, r, arguments), clearInterval);
        }),
        (e.clearTimeout = e.clearInterval = function(t) {
          t && t.close();
        }),
        (o.prototype.unref = o.prototype.ref = function() {}),
        (o.prototype.close = function() {
          this._clearFn.call(r, this._id);
        }),
        (e.enroll = function(t, e) {
          clearTimeout(t._idleTimeoutId), (t._idleTimeout = e);
        }),
        (e.unenroll = function(t) {
          clearTimeout(t._idleTimeoutId), (t._idleTimeout = -1);
        }),
        (e._unrefActive = e.active = function(t) {
          clearTimeout(t._idleTimeoutId);
          var e = t._idleTimeout;
          e >= 0 &&
            (t._idleTimeoutId = setTimeout(function() {
              t._onTimeout && t._onTimeout();
            }, e));
        }),
        n(96),
        (e.setImmediate = ('undefined' != typeof self && self.setImmediate) || (void 0 !== t && t.setImmediate) || (this && this.setImmediate)),
        (e.clearImmediate = ('undefined' != typeof self && self.clearImmediate) || (void 0 !== t && t.clearImmediate) || (this && this.clearImmediate));
    }.call(this, n(41)));
  },
  function(t, e, n) {
    (function(t, e) {
      !(function(t, n) {
        'use strict';
        if (!t.setImmediate) {
          var r,
            i,
            o,
            a,
            s,
            l = 1,
            u = {},
            c = !1,
            f = t.document,
            d = Object.getPrototypeOf && Object.getPrototypeOf(t);
          (d = d && d.setTimeout ? d : t),
            '[object process]' === {}.toString.call(t.process)
              ? (r = function(t) {
                  e.nextTick(function() {
                    p(t);
                  });
                })
              : !(function() {
                  if (t.postMessage && !t.importScripts) {
                    var e = !0,
                      n = t.onmessage;
                    return (
                      (t.onmessage = function() {
                        e = !1;
                      }),
                      t.postMessage('', '*'),
                      (t.onmessage = n),
                      e
                    );
                  }
                })()
              ? t.MessageChannel
                ? (((o = new MessageChannel()).port1.onmessage = function(t) {
                    p(t.data);
                  }),
                  (r = function(t) {
                    o.port2.postMessage(t);
                  }))
                : f && 'onreadystatechange' in f.createElement('script')
                ? ((i = f.documentElement),
                  (r = function(t) {
                    var e = f.createElement('script');
                    (e.onreadystatechange = function() {
                      p(t), (e.onreadystatechange = null), i.removeChild(e), (e = null);
                    }),
                      i.appendChild(e);
                  }))
                : (r = function(t) {
                    setTimeout(p, 0, t);
                  })
              : ((a = 'setImmediate$' + Math.random() + '$'),
                (s = function(e) {
                  e.source === t && 'string' == typeof e.data && 0 === e.data.indexOf(a) && p(+e.data.slice(a.length));
                }),
                t.addEventListener ? t.addEventListener('message', s, !1) : t.attachEvent('onmessage', s),
                (r = function(e) {
                  t.postMessage(a + e, '*');
                })),
            (d.setImmediate = function(t) {
              'function' != typeof t && (t = new Function('' + t));
              for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
              var i = { callback: t, args: e };
              return (u[l] = i), r(l), l++;
            }),
            (d.clearImmediate = h);
        }
        function h(t) {
          delete u[t];
        }
        function p(t) {
          if (c) setTimeout(p, 0, t);
          else {
            var e = u[t];
            if (e) {
              c = !0;
              try {
                !(function(t) {
                  var e = t.callback,
                    r = t.args;
                  switch (r.length) {
                    case 0:
                      e();
                      break;
                    case 1:
                      e(r[0]);
                      break;
                    case 2:
                      e(r[0], r[1]);
                      break;
                    case 3:
                      e(r[0], r[1], r[2]);
                      break;
                    default:
                      e.apply(n, r);
                  }
                })(e);
              } finally {
                h(t), (c = !1);
              }
            }
          }
        }
      })('undefined' == typeof self ? (void 0 === t ? this : t) : self);
    }.call(this, n(41), n(80)));
  },
  function(t, e, n) {
    'use strict';
    var r,
      i,
      o,
      a,
      s = n(28),
      l = n(3),
      u = n(33),
      c = n(57),
      f = n(6),
      d = n(7),
      h = n(34),
      p = n(98),
      m = n(99),
      v = n(103),
      g = n(73).set,
      b = n(105)(),
      y = n(74),
      w = n(106),
      O = n(107),
      S = n(108),
      _ = l.TypeError,
      k = l.process,
      x = k && k.versions,
      T = (x && x.v8) || '',
      P = l.Promise,
      j = 'process' == c(k),
      C = function() {},
      B = (i = y.f),
      $ = !!(function() {
        try {
          var t = P.resolve(1),
            e = ((t.constructor = {})[n(4)('species')] = function(t) {
              t(C, C);
            });
          return (j || 'function' == typeof PromiseRejectionEvent) && t.then(C) instanceof e && 0 !== T.indexOf('6.6') && -1 === O.indexOf('Chrome/66');
        } catch (t) {}
      })(),
      A = function(t) {
        var e;
        return !(!d(t) || 'function' != typeof (e = t.then)) && e;
      },
      E = function(t, e) {
        if (!t._n) {
          t._n = !0;
          var n = t._c;
          b(function() {
            for (
              var r = t._v,
                i = 1 == t._s,
                o = 0,
                a = function(e) {
                  var n,
                    o,
                    a,
                    s = i ? e.ok : e.fail,
                    l = e.resolve,
                    u = e.reject,
                    c = e.domain;
                  try {
                    s
                      ? (i || (2 == t._h && N(t), (t._h = 1)),
                        !0 === s ? (n = r) : (c && c.enter(), (n = s(r)), c && (c.exit(), (a = !0))),
                        n === e.promise ? u(_('Promise-chain cycle')) : (o = A(n)) ? o.call(n, l, u) : l(n))
                      : u(r);
                  } catch (t) {
                    c && !a && c.exit(), u(t);
                  }
                };
              n.length > o;

            )
              a(n[o++]);
            (t._c = []), (t._n = !1), e && !t._h && I(t);
          });
        }
      },
      I = function(t) {
        g.call(l, function() {
          var e,
            n,
            r,
            i = t._v,
            o = D(t);
          if (
            (o &&
              ((e = w(function() {
                j
                  ? k.emit('unhandledRejection', i, t)
                  : (n = l.onunhandledrejection)
                  ? n({ promise: t, reason: i })
                  : (r = l.console) && r.error && r.error('Unhandled promise rejection', i);
              })),
              (t._h = j || D(t) ? 2 : 1)),
            (t._a = void 0),
            o && e.e)
          )
            throw e.v;
        });
      },
      D = function(t) {
        return 1 !== t._h && 0 === (t._a || t._c).length;
      },
      N = function(t) {
        g.call(l, function() {
          var e;
          j ? k.emit('rejectionHandled', t) : (e = l.onrejectionhandled) && e({ promise: t, reason: t._v });
        });
      },
      F = function(t) {
        var e = this;
        e._d || ((e._d = !0), ((e = e._w || e)._v = t), (e._s = 2), e._a || (e._a = e._c.slice()), E(e, !0));
      },
      R = function(t) {
        var e,
          n = this;
        if (!n._d) {
          (n._d = !0), (n = n._w || n);
          try {
            if (n === t) throw _("Promise can't be resolved itself");
            (e = A(t))
              ? b(function() {
                  var r = { _w: n, _d: !1 };
                  try {
                    e.call(t, u(R, r, 1), u(F, r, 1));
                  } catch (t) {
                    F.call(r, t);
                  }
                })
              : ((n._v = t), (n._s = 1), E(n, !1));
          } catch (t) {
            F.call({ _w: n, _d: !1 }, t);
          }
        }
      };
    $ ||
      ((P = function(t) {
        p(this, P, 'Promise', '_h'), h(t), r.call(this);
        try {
          t(u(R, this, 1), u(F, this, 1));
        } catch (t) {
          F.call(this, t);
        }
      }),
      ((r = function(t) {
        (this._c = []), (this._a = void 0), (this._s = 0), (this._d = !1), (this._v = void 0), (this._h = 0), (this._n = !1);
      }).prototype = n(109)(P.prototype, {
        then: function(t, e) {
          var n = B(v(this, P));
          return (
            (n.ok = 'function' != typeof t || t),
            (n.fail = 'function' == typeof e && e),
            (n.domain = j ? k.domain : void 0),
            this._c.push(n),
            this._a && this._a.push(n),
            this._s && E(this, !1),
            n.promise
          );
        },
        catch: function(t) {
          return this.then(void 0, t);
        },
      })),
      (o = function() {
        var t = new r();
        (this.promise = t), (this.resolve = u(R, t, 1)), (this.reject = u(F, t, 1));
      }),
      (y.f = B = function(t) {
        return t === P || t === a ? new o(t) : i(t);
      })),
      f(f.G + f.W + f.F * !$, { Promise: P }),
      n(56)(P, 'Promise'),
      n(110)('Promise'),
      (a = n(10).Promise),
      f(f.S + f.F * !$, 'Promise', {
        reject: function(t) {
          var e = B(this);
          return (0, e.reject)(t), e.promise;
        },
      }),
      f(f.S + f.F * (s || !$), 'Promise', {
        resolve: function(t) {
          return S(s && this === a ? P : this, t);
        },
      }),
      f(
        f.S +
          f.F *
            !(
              $ &&
              n(111)(function(t) {
                P.all(t).catch(C);
              })
            ),
        'Promise',
        {
          all: function(t) {
            var e = this,
              n = B(e),
              r = n.resolve,
              i = n.reject,
              o = w(function() {
                var n = [],
                  o = 0,
                  a = 1;
                m(t, !1, function(t) {
                  var s = o++,
                    l = !1;
                  n.push(void 0),
                    a++,
                    e.resolve(t).then(function(t) {
                      l || ((l = !0), (n[s] = t), --a || r(n));
                    }, i);
                }),
                  --a || r(n);
              });
            return o.e && i(o.v), n.promise;
          },
          race: function(t) {
            var e = this,
              n = B(e),
              r = n.reject,
              i = w(function() {
                m(t, !1, function(t) {
                  e.resolve(t).then(n.resolve, r);
                });
              });
            return i.e && r(i.v), n.promise;
          },
        }
      );
  },
  function(t, e) {
    t.exports = function(t, e, n, r) {
      if (!(t instanceof e) || (void 0 !== r && r in t)) throw TypeError(n + ': incorrect invocation!');
      return t;
    };
  },
  function(t, e, n) {
    var r = n(33),
      i = n(100),
      o = n(101),
      a = n(15),
      s = n(21),
      l = n(102),
      u = {},
      c = {};
    ((e = t.exports = function(t, e, n, f, d) {
      var h,
        p,
        m,
        v,
        g = d
          ? function() {
              return t;
            }
          : l(t),
        b = r(n, f, e ? 2 : 1),
        y = 0;
      if ('function' != typeof g) throw TypeError(t + ' is not iterable!');
      if (o(g)) {
        for (h = s(t.length); h > y; y++) if ((v = e ? b(a((p = t[y]))[0], p[1]) : b(t[y])) === u || v === c) return v;
      } else for (m = g.call(t); !(p = m.next()).done; ) if ((v = i(m, b, p.value, e)) === u || v === c) return v;
    }).BREAK = u),
      (e.RETURN = c);
  },
  function(t, e, n) {
    var r = n(15);
    t.exports = function(t, e, n, i) {
      try {
        return i ? e(r(n)[0], n[1]) : e(n);
      } catch (e) {
        var o = t.return;
        throw (void 0 !== o && r(o.call(t)), e);
      }
    };
  },
  function(t, e, n) {
    var r = n(49),
      i = n(4)('iterator'),
      o = Array.prototype;
    t.exports = function(t) {
      return void 0 !== t && (r.Array === t || o[i] === t);
    };
  },
  function(t, e, n) {
    var r = n(57),
      i = n(4)('iterator'),
      o = n(49);
    t.exports = n(10).getIteratorMethod = function(t) {
      if (null != t) return t[i] || t['@@iterator'] || o[r(t)];
    };
  },
  function(t, e, n) {
    var r = n(15),
      i = n(34),
      o = n(4)('species');
    t.exports = function(t, e) {
      var n,
        a = r(t).constructor;
      return void 0 === a || null == (n = r(a)[o]) ? e : i(n);
    };
  },
  function(t, e) {
    t.exports = function(t, e, n) {
      var r = void 0 === n;
      switch (e.length) {
        case 0:
          return r ? t() : t.call(n);
        case 1:
          return r ? t(e[0]) : t.call(n, e[0]);
        case 2:
          return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
        case 3:
          return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
        case 4:
          return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3]);
      }
      return t.apply(n, e);
    };
  },
  function(t, e, n) {
    var r = n(3),
      i = n(73).set,
      o = r.MutationObserver || r.WebKitMutationObserver,
      a = r.process,
      s = r.Promise,
      l = 'process' == n(16)(a);
    t.exports = function() {
      var t,
        e,
        n,
        u = function() {
          var r, i;
          for (l && (r = a.domain) && r.exit(); t; ) {
            (i = t.fn), (t = t.next);
            try {
              i();
            } catch (r) {
              throw (t ? n() : (e = void 0), r);
            }
          }
          (e = void 0), r && r.enter();
        };
      if (l)
        n = function() {
          a.nextTick(u);
        };
      else if (!o || (r.navigator && r.navigator.standalone))
        if (s && s.resolve) {
          var c = s.resolve(void 0);
          n = function() {
            c.then(u);
          };
        } else
          n = function() {
            i.call(r, u);
          };
      else {
        var f = !0,
          d = document.createTextNode('');
        new o(u).observe(d, { characterData: !0 }),
          (n = function() {
            d.data = f = !f;
          });
      }
      return function(r) {
        var i = { fn: r, next: void 0 };
        e && (e.next = i), t || ((t = i), n()), (e = i);
      };
    };
  },
  function(t, e) {
    t.exports = function(t) {
      try {
        return { e: !1, v: t() };
      } catch (t) {
        return { e: !0, v: t };
      }
    };
  },
  function(t, e, n) {
    var r = n(3).navigator;
    t.exports = (r && r.userAgent) || '';
  },
  function(t, e, n) {
    var r = n(15),
      i = n(7),
      o = n(74);
    t.exports = function(t, e) {
      if ((r(t), i(e) && e.constructor === t)) return e;
      var n = o.f(t);
      return (0, n.resolve)(e), n.promise;
    };
  },
  function(t, e, n) {
    var r = n(23);
    t.exports = function(t, e, n) {
      for (var i in e) r(t, i, e[i], n);
      return t;
    };
  },
  function(t, e, n) {
    'use strict';
    var r = n(3),
      i = n(19),
      o = n(11),
      a = n(4)('species');
    t.exports = function(t) {
      var e = r[t];
      o &&
        e &&
        !e[a] &&
        i.f(e, a, {
          configurable: !0,
          get: function() {
            return this;
          },
        });
    };
  },
  function(t, e, n) {
    var r = n(4)('iterator'),
      i = !1;
    try {
      var o = [7][r]();
      (o.return = function() {
        i = !0;
      }),
        Array.from(o, function() {
          throw 2;
        });
    } catch (t) {}
    t.exports = function(t, e) {
      if (!e && !i) return !1;
      var n = !1;
      try {
        var o = [7],
          a = o[r]();
        (a.next = function() {
          return { done: (n = !0) };
        }),
          (o[r] = function() {
            return a;
          }),
          t(o);
      } catch (t) {}
      return n;
    };
  },
  function(t, e, n) {
    'use strict';
    var r = n(76)(!0);
    n(72)(
      String,
      'String',
      function(t) {
        (this._t = String(t)), (this._i = 0);
      },
      function() {
        var t,
          e = this._t,
          n = this._i;
        return n >= e.length ? { value: void 0, done: !0 } : ((t = r(e, n)), (this._i += t.length), { value: t, done: !1 });
      }
    );
  },
  function(t, e, n) {
    var r, i, o;
    (i = [t]),
      void 0 ===
        (o =
          'function' ==
          typeof (r = function(t) {
            'use strict';
            if ('undefined' == typeof browser || Object.getPrototypeOf(browser) !== Object.prototype) {
              const e = 'The message port closed before a response was received.',
                n =
                  'Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)',
                r = () => {
                  const t = {
                    alarms: { clear: { minArgs: 0, maxArgs: 1 }, clearAll: { minArgs: 0, maxArgs: 0 }, get: { minArgs: 0, maxArgs: 1 }, getAll: { minArgs: 0, maxArgs: 0 } },
                    bookmarks: {
                      create: { minArgs: 1, maxArgs: 1 },
                      get: { minArgs: 1, maxArgs: 1 },
                      getChildren: { minArgs: 1, maxArgs: 1 },
                      getRecent: { minArgs: 1, maxArgs: 1 },
                      getSubTree: { minArgs: 1, maxArgs: 1 },
                      getTree: { minArgs: 0, maxArgs: 0 },
                      move: { minArgs: 2, maxArgs: 2 },
                      remove: { minArgs: 1, maxArgs: 1 },
                      removeTree: { minArgs: 1, maxArgs: 1 },
                      search: { minArgs: 1, maxArgs: 1 },
                      update: { minArgs: 2, maxArgs: 2 },
                    },
                    browserAction: {
                      disable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                      enable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                      getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                      getBadgeText: { minArgs: 1, maxArgs: 1 },
                      getPopup: { minArgs: 1, maxArgs: 1 },
                      getTitle: { minArgs: 1, maxArgs: 1 },
                      openPopup: { minArgs: 0, maxArgs: 0 },
                      setBadgeBackgroundColor: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                      setBadgeText: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                      setIcon: { minArgs: 1, maxArgs: 1 },
                      setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                      setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                    },
                    browsingData: {
                      remove: { minArgs: 2, maxArgs: 2 },
                      removeCache: { minArgs: 1, maxArgs: 1 },
                      removeCookies: { minArgs: 1, maxArgs: 1 },
                      removeDownloads: { minArgs: 1, maxArgs: 1 },
                      removeFormData: { minArgs: 1, maxArgs: 1 },
                      removeHistory: { minArgs: 1, maxArgs: 1 },
                      removeLocalStorage: { minArgs: 1, maxArgs: 1 },
                      removePasswords: { minArgs: 1, maxArgs: 1 },
                      removePluginData: { minArgs: 1, maxArgs: 1 },
                      settings: { minArgs: 0, maxArgs: 0 },
                    },
                    commands: { getAll: { minArgs: 0, maxArgs: 0 } },
                    contextMenus: { remove: { minArgs: 1, maxArgs: 1 }, removeAll: { minArgs: 0, maxArgs: 0 }, update: { minArgs: 2, maxArgs: 2 } },
                    cookies: {
                      get: { minArgs: 1, maxArgs: 1 },
                      getAll: { minArgs: 1, maxArgs: 1 },
                      getAllCookieStores: { minArgs: 0, maxArgs: 0 },
                      remove: { minArgs: 1, maxArgs: 1 },
                      set: { minArgs: 1, maxArgs: 1 },
                    },
                    devtools: { inspectedWindow: { eval: { minArgs: 1, maxArgs: 2 } }, panels: { create: { minArgs: 3, maxArgs: 3, singleCallbackArg: !0 } } },
                    downloads: {
                      cancel: { minArgs: 1, maxArgs: 1 },
                      download: { minArgs: 1, maxArgs: 1 },
                      erase: { minArgs: 1, maxArgs: 1 },
                      getFileIcon: { minArgs: 1, maxArgs: 2 },
                      open: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                      pause: { minArgs: 1, maxArgs: 1 },
                      removeFile: { minArgs: 1, maxArgs: 1 },
                      resume: { minArgs: 1, maxArgs: 1 },
                      search: { minArgs: 1, maxArgs: 1 },
                      show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                    },
                    extension: { isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 }, isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 } },
                    history: {
                      addUrl: { minArgs: 1, maxArgs: 1 },
                      deleteAll: { minArgs: 0, maxArgs: 0 },
                      deleteRange: { minArgs: 1, maxArgs: 1 },
                      deleteUrl: { minArgs: 1, maxArgs: 1 },
                      getVisits: { minArgs: 1, maxArgs: 1 },
                      search: { minArgs: 1, maxArgs: 1 },
                    },
                    i18n: { detectLanguage: { minArgs: 1, maxArgs: 1 }, getAcceptLanguages: { minArgs: 0, maxArgs: 0 } },
                    identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
                    idle: { queryState: { minArgs: 1, maxArgs: 1 } },
                    management: {
                      get: { minArgs: 1, maxArgs: 1 },
                      getAll: { minArgs: 0, maxArgs: 0 },
                      getSelf: { minArgs: 0, maxArgs: 0 },
                      setEnabled: { minArgs: 2, maxArgs: 2 },
                      uninstallSelf: { minArgs: 0, maxArgs: 1 },
                    },
                    notifications: {
                      clear: { minArgs: 1, maxArgs: 1 },
                      create: { minArgs: 1, maxArgs: 2 },
                      getAll: { minArgs: 0, maxArgs: 0 },
                      getPermissionLevel: { minArgs: 0, maxArgs: 0 },
                      update: { minArgs: 2, maxArgs: 2 },
                    },
                    pageAction: {
                      getPopup: { minArgs: 1, maxArgs: 1 },
                      getTitle: { minArgs: 1, maxArgs: 1 },
                      hide: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                      setIcon: { minArgs: 1, maxArgs: 1 },
                      setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                      setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                      show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                    },
                    permissions: {
                      contains: { minArgs: 1, maxArgs: 1 },
                      getAll: { minArgs: 0, maxArgs: 0 },
                      remove: { minArgs: 1, maxArgs: 1 },
                      request: { minArgs: 1, maxArgs: 1 },
                    },
                    runtime: {
                      getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                      getBrowserInfo: { minArgs: 0, maxArgs: 0 },
                      getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                      openOptionsPage: { minArgs: 0, maxArgs: 0 },
                      requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                      sendMessage: { minArgs: 1, maxArgs: 3 },
                      sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                      setUninstallURL: { minArgs: 1, maxArgs: 1 },
                    },
                    sessions: { getDevices: { minArgs: 0, maxArgs: 1 }, getRecentlyClosed: { minArgs: 0, maxArgs: 1 }, restore: { minArgs: 0, maxArgs: 1 } },
                    storage: {
                      local: {
                        clear: { minArgs: 0, maxArgs: 0 },
                        get: { minArgs: 0, maxArgs: 1 },
                        getBytesInUse: { minArgs: 0, maxArgs: 1 },
                        remove: { minArgs: 1, maxArgs: 1 },
                        set: { minArgs: 1, maxArgs: 1 },
                      },
                      managed: { get: { minArgs: 0, maxArgs: 1 }, getBytesInUse: { minArgs: 0, maxArgs: 1 } },
                      sync: {
                        clear: { minArgs: 0, maxArgs: 0 },
                        get: { minArgs: 0, maxArgs: 1 },
                        getBytesInUse: { minArgs: 0, maxArgs: 1 },
                        remove: { minArgs: 1, maxArgs: 1 },
                        set: { minArgs: 1, maxArgs: 1 },
                      },
                    },
                    tabs: {
                      captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                      create: { minArgs: 1, maxArgs: 1 },
                      detectLanguage: { minArgs: 0, maxArgs: 1 },
                      discard: { minArgs: 0, maxArgs: 1 },
                      duplicate: { minArgs: 1, maxArgs: 1 },
                      executeScript: { minArgs: 1, maxArgs: 2 },
                      get: { minArgs: 1, maxArgs: 1 },
                      getCurrent: { minArgs: 0, maxArgs: 0 },
                      getZoom: { minArgs: 0, maxArgs: 1 },
                      getZoomSettings: { minArgs: 0, maxArgs: 1 },
                      highlight: { minArgs: 1, maxArgs: 1 },
                      insertCSS: { minArgs: 1, maxArgs: 2 },
                      move: { minArgs: 2, maxArgs: 2 },
                      query: { minArgs: 1, maxArgs: 1 },
                      reload: { minArgs: 0, maxArgs: 2 },
                      remove: { minArgs: 1, maxArgs: 1 },
                      removeCSS: { minArgs: 1, maxArgs: 2 },
                      sendMessage: { minArgs: 2, maxArgs: 3 },
                      setZoom: { minArgs: 1, maxArgs: 2 },
                      setZoomSettings: { minArgs: 1, maxArgs: 2 },
                      update: { minArgs: 1, maxArgs: 2 },
                    },
                    topSites: { get: { minArgs: 0, maxArgs: 0 } },
                    webNavigation: { getAllFrames: { minArgs: 1, maxArgs: 1 }, getFrame: { minArgs: 1, maxArgs: 1 } },
                    webRequest: { handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 } },
                    windows: {
                      create: { minArgs: 0, maxArgs: 1 },
                      get: { minArgs: 1, maxArgs: 2 },
                      getAll: { minArgs: 0, maxArgs: 1 },
                      getCurrent: { minArgs: 0, maxArgs: 1 },
                      getLastFocused: { minArgs: 0, maxArgs: 1 },
                      remove: { minArgs: 1, maxArgs: 1 },
                      update: { minArgs: 2, maxArgs: 2 },
                    },
                  };
                  if (0 === Object.keys(t).length) throw new Error('api-metadata.json has not been included in browser-polyfill');
                  class r extends WeakMap {
                    constructor(t, e) {
                      super(e), (this.createItem = t);
                    }
                    get(t) {
                      return this.has(t) || this.set(t, this.createItem(t)), super.get(t);
                    }
                  }
                  const i = (t, e) => (...n) => {
                      chrome.runtime.lastError ? t.reject(chrome.runtime.lastError) : e.singleCallbackArg || n.length <= 1 ? t.resolve(n[0]) : t.resolve(n);
                    },
                    o = t => (1 == t ? 'argument' : 'arguments'),
                    a = (t, e, n) => new Proxy(e, { apply: (e, r, i) => n.call(r, t, ...i) });
                  let s = Function.call.bind(Object.prototype.hasOwnProperty);
                  const l = (t, e = {}, n = {}) => {
                      let r = Object.create(null),
                        u = {
                          has: (e, n) => n in t || n in r,
                          get(u, c, f) {
                            if (c in r) return r[c];
                            if (!(c in t)) return;
                            let d = t[c];
                            if ('function' == typeof d)
                              if ('function' == typeof e[c]) d = a(t, t[c], e[c]);
                              else if (s(n, c)) {
                                let e = ((t, e) =>
                                  function(n, ...r) {
                                    if (r.length < e.minArgs) throw new Error(`Expected at least ${e.minArgs} ${o(e.minArgs)} for ${t}(), got ${r.length}`);
                                    if (r.length > e.maxArgs) throw new Error(`Expected at most ${e.maxArgs} ${o(e.maxArgs)} for ${t}(), got ${r.length}`);
                                    return new Promise((o, a) => {
                                      if (e.fallbackToNoCallback)
                                        try {
                                          n[t](...r, i({ resolve: o, reject: a }, e));
                                        } catch (i) {
                                          console.warn(`${t} API method doesn't seem to support the callback parameter, ` + 'falling back to call it without a callback: ', i),
                                            n[t](...r),
                                            (e.fallbackToNoCallback = !1),
                                            (e.noCallback = !0),
                                            o();
                                        }
                                      else e.noCallback ? (n[t](...r), o()) : n[t](...r, i({ resolve: o, reject: a }, e));
                                    });
                                  })(c, n[c]);
                                d = a(t, t[c], e);
                              } else d = d.bind(t);
                            else {
                              if ('object' != typeof d || null === d || (!s(e, c) && !s(n, c)))
                                return (
                                  Object.defineProperty(r, c, {
                                    configurable: !0,
                                    enumerable: !0,
                                    get: () => t[c],
                                    set(e) {
                                      t[c] = e;
                                    },
                                  }),
                                  d
                                );
                              d = l(d, e[c], n[c]);
                            }
                            return (r[c] = d), d;
                          },
                          set: (e, n, i, o) => (n in r ? (r[n] = i) : (t[n] = i), !0),
                          defineProperty: (t, e, n) => Reflect.defineProperty(r, e, n),
                          deleteProperty: (t, e) => Reflect.deleteProperty(r, e),
                        },
                        c = Object.create(t);
                      return new Proxy(c, u);
                    },
                    u = t => ({
                      addListener(e, n, ...r) {
                        e.addListener(t.get(n), ...r);
                      },
                      hasListener: (e, n) => e.hasListener(t.get(n)),
                      removeListener(e, n) {
                        e.removeListener(t.get(n));
                      },
                    });
                  let c = !1;
                  const f = new r(t =>
                      'function' != typeof t
                        ? t
                        : function(e, r, i) {
                            let o,
                              a,
                              s = !1,
                              l = new Promise(t => {
                                o = function(e) {
                                  c || (console.warn(n, new Error().stack), (c = !0)), (s = !0), t(e);
                                };
                              });
                            try {
                              a = t(e, r, o);
                            } catch (t) {
                              a = Promise.reject(t);
                            }
                            const u = !0 !== a && (t => t && 'object' == typeof t && 'function' == typeof t.then)(a);
                            if (!0 !== a && !u && !s) return !1;
                            const f = t => {
                              t.then(
                                t => {
                                  i(t);
                                },
                                t => {
                                  let e;
                                  (e = t && (t instanceof Error || 'string' == typeof t.message) ? t.message : 'An unexpected error occurred'),
                                    i({ __mozWebExtensionPolyfillReject__: !0, message: e });
                                }
                              ).catch(t => {
                                console.error('Failed to send onMessage rejected reply', t);
                              });
                            };
                            return f(u ? a : l), !0;
                          }
                    ),
                    d = ({ reject: t, resolve: n }, r) => {
                      chrome.runtime.lastError
                        ? chrome.runtime.lastError.message === e
                          ? n()
                          : t(chrome.runtime.lastError)
                        : r && r.__mozWebExtensionPolyfillReject__
                        ? t(new Error(r.message))
                        : n(r);
                    },
                    h = (t, e, n, ...r) => {
                      if (r.length < e.minArgs) throw new Error(`Expected at least ${e.minArgs} ${o(e.minArgs)} for ${t}(), got ${r.length}`);
                      if (r.length > e.maxArgs) throw new Error(`Expected at most ${e.maxArgs} ${o(e.maxArgs)} for ${t}(), got ${r.length}`);
                      return new Promise((t, e) => {
                        const i = d.bind(null, { resolve: t, reject: e });
                        r.push(i), n.sendMessage(...r);
                      });
                    },
                    p = {
                      runtime: { onMessage: u(f), onMessageExternal: u(f), sendMessage: h.bind(null, 'sendMessage', { minArgs: 1, maxArgs: 3 }) },
                      tabs: { sendMessage: h.bind(null, 'sendMessage', { minArgs: 2, maxArgs: 3 }) },
                    },
                    m = { clear: { minArgs: 1, maxArgs: 1 }, get: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } };
                  return (
                    (t.privacy = {
                      network: { networkPredictionEnabled: m, webRTCIPHandlingPolicy: m },
                      services: { passwordSavingEnabled: m },
                      websites: { hyperlinkAuditingEnabled: m, referrersEnabled: m },
                    }),
                    l(chrome, p, t)
                  );
                };
              t.exports = r();
            } else t.exports = browser;
          })
            ? r.apply(e, i)
            : r) || (t.exports = o);
  },
  function(t, e, n) {
    'use strict';
    (function(t) {
      /**!
       * @fileOverview Kickass library to create and place poppers near their reference elements.
       * @version 1.16.0
       * @license
       * Copyright (c) 2016 Federico Zivolo and contributors
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in all
       * copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
       * SOFTWARE.
       */
      var n = 'undefined' != typeof window && 'undefined' != typeof document && 'undefined' != typeof navigator,
        r = (function() {
          for (var t = ['Edge', 'Trident', 'Firefox'], e = 0; e < t.length; e += 1) if (n && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
          return 0;
        })();
      var i =
        n && window.Promise
          ? function(t) {
              var e = !1;
              return function() {
                e ||
                  ((e = !0),
                  window.Promise.resolve().then(function() {
                    (e = !1), t();
                  }));
              };
            }
          : function(t) {
              var e = !1;
              return function() {
                e ||
                  ((e = !0),
                  setTimeout(function() {
                    (e = !1), t();
                  }, r));
              };
            };
      function o(t) {
        return t && '[object Function]' === {}.toString.call(t);
      }
      function a(t, e) {
        if (1 !== t.nodeType) return [];
        var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
        return e ? n[e] : n;
      }
      function s(t) {
        return 'HTML' === t.nodeName ? t : t.parentNode || t.host;
      }
      function l(t) {
        if (!t) return document.body;
        switch (t.nodeName) {
          case 'HTML':
          case 'BODY':
            return t.ownerDocument.body;
          case '#document':
            return t.body;
        }
        var e = a(t),
          n = e.overflow,
          r = e.overflowX,
          i = e.overflowY;
        return /(auto|scroll|overlay)/.test(n + i + r) ? t : l(s(t));
      }
      function u(t) {
        return t && t.referenceNode ? t.referenceNode : t;
      }
      var c = n && !(!window.MSInputMethodContext || !document.documentMode),
        f = n && /MSIE 10/.test(navigator.userAgent);
      function d(t) {
        return 11 === t ? c : 10 === t ? f : c || f;
      }
      function h(t) {
        if (!t) return document.documentElement;
        for (var e = d(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling; ) n = (t = t.nextElementSibling).offsetParent;
        var r = n && n.nodeName;
        return r && 'BODY' !== r && 'HTML' !== r
          ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) && 'static' === a(n, 'position')
            ? h(n)
            : n
          : t
          ? t.ownerDocument.documentElement
          : document.documentElement;
      }
      function p(t) {
        return null !== t.parentNode ? p(t.parentNode) : t;
      }
      function m(t, e) {
        if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
        var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
          r = n ? t : e,
          i = n ? e : t,
          o = document.createRange();
        o.setStart(r, 0), o.setEnd(i, 0);
        var a,
          s,
          l = o.commonAncestorContainer;
        if ((t !== l && e !== l) || r.contains(i)) return 'BODY' === (s = (a = l).nodeName) || ('HTML' !== s && h(a.firstElementChild) !== a) ? h(l) : l;
        var u = p(t);
        return u.host ? m(u.host, e) : m(t, p(e).host);
      }
      function v(t) {
        var e = 'top' === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'top') ? 'scrollTop' : 'scrollLeft',
          n = t.nodeName;
        if ('BODY' === n || 'HTML' === n) {
          var r = t.ownerDocument.documentElement;
          return (t.ownerDocument.scrollingElement || r)[e];
        }
        return t[e];
      }
      function g(t, e) {
        var n = 'x' === e ? 'Left' : 'Top',
          r = 'Left' === n ? 'Right' : 'Bottom';
        return parseFloat(t['border' + n + 'Width'], 10) + parseFloat(t['border' + r + 'Width'], 10);
      }
      function b(t, e, n, r) {
        return Math.max(
          e['offset' + t],
          e['scroll' + t],
          n['client' + t],
          n['offset' + t],
          n['scroll' + t],
          d(10) ? parseInt(n['offset' + t]) + parseInt(r['margin' + ('Height' === t ? 'Top' : 'Left')]) + parseInt(r['margin' + ('Height' === t ? 'Bottom' : 'Right')]) : 0
        );
      }
      function y(t) {
        var e = t.body,
          n = t.documentElement,
          r = d(10) && getComputedStyle(n);
        return { height: b('Height', e, n, r), width: b('Width', e, n, r) };
      }
      var w = function(t, e) {
          if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
        },
        O = (function() {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }
          return function(e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        })(),
        S = function(t, e, n) {
          return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
        },
        _ =
          Object.assign ||
          function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          };
      function k(t) {
        return _({}, t, { right: t.left + t.width, bottom: t.top + t.height });
      }
      function x(t) {
        var e = {};
        try {
          if (d(10)) {
            e = t.getBoundingClientRect();
            var n = v(t, 'top'),
              r = v(t, 'left');
            (e.top += n), (e.left += r), (e.bottom += n), (e.right += r);
          } else e = t.getBoundingClientRect();
        } catch (t) {}
        var i = { left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top },
          o = 'HTML' === t.nodeName ? y(t.ownerDocument) : {},
          s = o.width || t.clientWidth || i.width,
          l = o.height || t.clientHeight || i.height,
          u = t.offsetWidth - s,
          c = t.offsetHeight - l;
        if (u || c) {
          var f = a(t);
          (u -= g(f, 'x')), (c -= g(f, 'y')), (i.width -= u), (i.height -= c);
        }
        return k(i);
      }
      function T(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = d(10),
          i = 'HTML' === e.nodeName,
          o = x(t),
          s = x(e),
          u = l(t),
          c = a(e),
          f = parseFloat(c.borderTopWidth, 10),
          h = parseFloat(c.borderLeftWidth, 10);
        n && i && ((s.top = Math.max(s.top, 0)), (s.left = Math.max(s.left, 0)));
        var p = k({ top: o.top - s.top - f, left: o.left - s.left - h, width: o.width, height: o.height });
        if (((p.marginTop = 0), (p.marginLeft = 0), !r && i)) {
          var m = parseFloat(c.marginTop, 10),
            g = parseFloat(c.marginLeft, 10);
          (p.top -= f - m), (p.bottom -= f - m), (p.left -= h - g), (p.right -= h - g), (p.marginTop = m), (p.marginLeft = g);
        }
        return (
          (r && !n ? e.contains(u) : e === u && 'BODY' !== u.nodeName) &&
            (p = (function(t, e) {
              var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = v(e, 'top'),
                i = v(e, 'left'),
                o = n ? -1 : 1;
              return (t.top += r * o), (t.bottom += r * o), (t.left += i * o), (t.right += i * o), t;
            })(p, e)),
          p
        );
      }
      function P(t) {
        if (!t || !t.parentElement || d()) return document.documentElement;
        for (var e = t.parentElement; e && 'none' === a(e, 'transform'); ) e = e.parentElement;
        return e || document.documentElement;
      }
      function j(t, e, n, r) {
        var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          o = { top: 0, left: 0 },
          c = i ? P(t) : m(t, u(e));
        if ('viewport' === r)
          o = (function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = t.ownerDocument.documentElement,
              r = T(t, n),
              i = Math.max(n.clientWidth, window.innerWidth || 0),
              o = Math.max(n.clientHeight, window.innerHeight || 0),
              a = e ? 0 : v(n),
              s = e ? 0 : v(n, 'left');
            return k({ top: a - r.top + r.marginTop, left: s - r.left + r.marginLeft, width: i, height: o });
          })(c, i);
        else {
          var f = void 0;
          'scrollParent' === r ? 'BODY' === (f = l(s(e))).nodeName && (f = t.ownerDocument.documentElement) : (f = 'window' === r ? t.ownerDocument.documentElement : r);
          var d = T(f, c, i);
          if (
            'HTML' !== f.nodeName ||
            (function t(e) {
              var n = e.nodeName;
              if ('BODY' === n || 'HTML' === n) return !1;
              if ('fixed' === a(e, 'position')) return !0;
              var r = s(e);
              return !!r && t(r);
            })(c)
          )
            o = d;
          else {
            var h = y(t.ownerDocument),
              p = h.height,
              g = h.width;
            (o.top += d.top - d.marginTop), (o.bottom = p + d.top), (o.left += d.left - d.marginLeft), (o.right = g + d.left);
          }
        }
        var b = 'number' == typeof (n = n || 0);
        return (o.left += b ? n : n.left || 0), (o.top += b ? n : n.top || 0), (o.right -= b ? n : n.right || 0), (o.bottom -= b ? n : n.bottom || 0), o;
      }
      function C(t, e, n, r, i) {
        var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf('auto')) return t;
        var a = j(n, r, o, i),
          s = {
            top: { width: a.width, height: e.top - a.top },
            right: { width: a.right - e.right, height: a.height },
            bottom: { width: a.width, height: a.bottom - e.bottom },
            left: { width: e.left - a.left, height: a.height },
          },
          l = Object.keys(s)
            .map(function(t) {
              return _({ key: t }, s[t], { area: ((e = s[t]), e.width * e.height) });
              var e;
            })
            .sort(function(t, e) {
              return e.area - t.area;
            }),
          u = l.filter(function(t) {
            var e = t.width,
              r = t.height;
            return e >= n.clientWidth && r >= n.clientHeight;
          }),
          c = u.length > 0 ? u[0].key : l[0].key,
          f = t.split('-')[1];
        return c + (f ? '-' + f : '');
      }
      function B(t, e, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        return T(n, r ? P(e) : m(e, u(n)), r);
      }
      function $(t) {
        var e = t.ownerDocument.defaultView.getComputedStyle(t),
          n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
          r = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
        return { width: t.offsetWidth + r, height: t.offsetHeight + n };
      }
      function A(t) {
        var e = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
        return t.replace(/left|right|bottom|top/g, function(t) {
          return e[t];
        });
      }
      function E(t, e, n) {
        n = n.split('-')[0];
        var r = $(t),
          i = { width: r.width, height: r.height },
          o = -1 !== ['right', 'left'].indexOf(n),
          a = o ? 'top' : 'left',
          s = o ? 'left' : 'top',
          l = o ? 'height' : 'width',
          u = o ? 'width' : 'height';
        return (i[a] = e[a] + e[l] / 2 - r[l] / 2), (i[s] = n === s ? e[s] - r[u] : e[A(s)]), i;
      }
      function I(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0];
      }
      function D(t, e, n) {
        return (
          (void 0 === n
            ? t
            : t.slice(
                0,
                (function(t, e, n) {
                  if (Array.prototype.findIndex)
                    return t.findIndex(function(t) {
                      return t[e] === n;
                    });
                  var r = I(t, function(t) {
                    return t[e] === n;
                  });
                  return t.indexOf(r);
                })(t, 'name', n)
              )
          ).forEach(function(t) {
            t.function && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
            var n = t.function || t.fn;
            t.enabled && o(n) && ((e.offsets.popper = k(e.offsets.popper)), (e.offsets.reference = k(e.offsets.reference)), (e = n(e, t)));
          }),
          e
        );
      }
      function N() {
        if (!this.state.isDestroyed) {
          var t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
          (t.offsets.reference = B(this.state, this.popper, this.reference, this.options.positionFixed)),
            (t.placement = C(
              this.options.placement,
              t.offsets.reference,
              this.popper,
              this.reference,
              this.options.modifiers.flip.boundariesElement,
              this.options.modifiers.flip.padding
            )),
            (t.originalPlacement = t.placement),
            (t.positionFixed = this.options.positionFixed),
            (t.offsets.popper = E(this.popper, t.offsets.reference, t.placement)),
            (t.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'),
            (t = D(this.modifiers, t)),
            this.state.isCreated ? this.options.onUpdate(t) : ((this.state.isCreated = !0), this.options.onCreate(t));
        }
      }
      function F(t, e) {
        return t.some(function(t) {
          var n = t.name;
          return t.enabled && n === e;
        });
      }
      function R(t) {
        for (var e = [!1, 'ms', 'Webkit', 'Moz', 'O'], n = t.charAt(0).toUpperCase() + t.slice(1), r = 0; r < e.length; r++) {
          var i = e[r],
            o = i ? '' + i + n : t;
          if (void 0 !== document.body.style[o]) return o;
        }
        return null;
      }
      function L() {
        return (
          (this.state.isDestroyed = !0),
          F(this.modifiers, 'applyStyle') &&
            (this.popper.removeAttribute('x-placement'),
            (this.popper.style.position = ''),
            (this.popper.style.top = ''),
            (this.popper.style.left = ''),
            (this.popper.style.right = ''),
            (this.popper.style.bottom = ''),
            (this.popper.style.willChange = ''),
            (this.popper.style[R('transform')] = '')),
          this.disableEventListeners(),
          this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
          this
        );
      }
      function V(t) {
        var e = t.ownerDocument;
        return e ? e.defaultView : window;
      }
      function M(t, e, n, r) {
        (n.updateBound = r), V(t).addEventListener('resize', n.updateBound, { passive: !0 });
        var i = l(t);
        return (
          (function t(e, n, r, i) {
            var o = 'BODY' === e.nodeName,
              a = o ? e.ownerDocument.defaultView : e;
            a.addEventListener(n, r, { passive: !0 }), o || t(l(a.parentNode), n, r, i), i.push(a);
          })(i, 'scroll', n.updateBound, n.scrollParents),
          (n.scrollElement = i),
          (n.eventsEnabled = !0),
          n
        );
      }
      function H() {
        this.state.eventsEnabled || (this.state = M(this.reference, this.options, this.state, this.scheduleUpdate));
      }
      function z() {
        var t, e;
        this.state.eventsEnabled &&
          (cancelAnimationFrame(this.scheduleUpdate),
          (this.state =
            ((t = this.reference),
            (e = this.state),
            V(t).removeEventListener('resize', e.updateBound),
            e.scrollParents.forEach(function(t) {
              t.removeEventListener('scroll', e.updateBound);
            }),
            (e.updateBound = null),
            (e.scrollParents = []),
            (e.scrollElement = null),
            (e.eventsEnabled = !1),
            e)));
      }
      function G(t) {
        return '' !== t && !isNaN(parseFloat(t)) && isFinite(t);
      }
      function U(t, e) {
        Object.keys(e).forEach(function(n) {
          var r = '';
          -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(n) && G(e[n]) && (r = 'px'), (t.style[n] = e[n] + r);
        });
      }
      var W = n && /Firefox/i.test(navigator.userAgent);
      function q(t, e, n) {
        var r = I(t, function(t) {
            return t.name === e;
          }),
          i =
            !!r &&
            t.some(function(t) {
              return t.name === n && t.enabled && t.order < r.order;
            });
        if (!i) {
          var o = '`' + e + '`',
            a = '`' + n + '`';
          console.warn(a + ' modifier is required by ' + o + ' modifier in order to work, be sure to include it before ' + o + '!');
        }
        return i;
      }
      var K = [
          'auto-start',
          'auto',
          'auto-end',
          'top-start',
          'top',
          'top-end',
          'right-start',
          'right',
          'right-end',
          'bottom-end',
          'bottom',
          'bottom-start',
          'left-end',
          'left',
          'left-start',
        ],
        J = K.slice(3);
      function X(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = J.indexOf(t),
          r = J.slice(n + 1).concat(J.slice(0, n));
        return e ? r.reverse() : r;
      }
      var Y = { FLIP: 'flip', CLOCKWISE: 'clockwise', COUNTERCLOCKWISE: 'counterclockwise' };
      function Z(t, e, n, r) {
        var i = [0, 0],
          o = -1 !== ['right', 'left'].indexOf(r),
          a = t.split(/(\+|\-)/).map(function(t) {
            return t.trim();
          }),
          s = a.indexOf(
            I(a, function(t) {
              return -1 !== t.search(/,|\s/);
            })
          );
        a[s] && -1 === a[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
        var l = /\s*,\s*|\s+/,
          u = -1 !== s ? [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))] : [a];
        return (
          (u = u.map(function(t, r) {
            var i = (1 === r ? !o : o) ? 'height' : 'width',
              a = !1;
            return t
              .reduce(function(t, e) {
                return '' === t[t.length - 1] && -1 !== ['+', '-'].indexOf(e) ? ((t[t.length - 1] = e), (a = !0), t) : a ? ((t[t.length - 1] += e), (a = !1), t) : t.concat(e);
              }, [])
              .map(function(t) {
                return (function(t, e, n, r) {
                  var i = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                    o = +i[1],
                    a = i[2];
                  if (!o) return t;
                  if (0 === a.indexOf('%')) {
                    var s = void 0;
                    switch (a) {
                      case '%p':
                        s = n;
                        break;
                      case '%':
                      case '%r':
                      default:
                        s = r;
                    }
                    return (k(s)[e] / 100) * o;
                  }
                  if ('vh' === a || 'vw' === a) {
                    return (
                      (('vh' === a
                        ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
                        : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) /
                        100) *
                      o
                    );
                  }
                  return o;
                })(t, i, e, n);
              });
          })).forEach(function(t, e) {
            t.forEach(function(n, r) {
              G(n) && (i[e] += n * ('-' === t[r - 1] ? -1 : 1));
            });
          }),
          i
        );
      }
      var Q = {
          placement: 'bottom',
          positionFixed: !1,
          eventsEnabled: !0,
          removeOnDestroy: !1,
          onCreate: function() {},
          onUpdate: function() {},
          modifiers: {
            shift: {
              order: 100,
              enabled: !0,
              fn: function(t) {
                var e = t.placement,
                  n = e.split('-')[0],
                  r = e.split('-')[1];
                if (r) {
                  var i = t.offsets,
                    o = i.reference,
                    a = i.popper,
                    s = -1 !== ['bottom', 'top'].indexOf(n),
                    l = s ? 'left' : 'top',
                    u = s ? 'width' : 'height',
                    c = { start: S({}, l, o[l]), end: S({}, l, o[l] + o[u] - a[u]) };
                  t.offsets.popper = _({}, a, c[r]);
                }
                return t;
              },
            },
            offset: {
              order: 200,
              enabled: !0,
              fn: function(t, e) {
                var n = e.offset,
                  r = t.placement,
                  i = t.offsets,
                  o = i.popper,
                  a = i.reference,
                  s = r.split('-')[0],
                  l = void 0;
                return (
                  (l = G(+n) ? [+n, 0] : Z(n, o, a, s)),
                  'left' === s
                    ? ((o.top += l[0]), (o.left -= l[1]))
                    : 'right' === s
                    ? ((o.top += l[0]), (o.left += l[1]))
                    : 'top' === s
                    ? ((o.left += l[0]), (o.top -= l[1]))
                    : 'bottom' === s && ((o.left += l[0]), (o.top += l[1])),
                  (t.popper = o),
                  t
                );
              },
              offset: 0,
            },
            preventOverflow: {
              order: 300,
              enabled: !0,
              fn: function(t, e) {
                var n = e.boundariesElement || h(t.instance.popper);
                t.instance.reference === n && (n = h(n));
                var r = R('transform'),
                  i = t.instance.popper.style,
                  o = i.top,
                  a = i.left,
                  s = i[r];
                (i.top = ''), (i.left = ''), (i[r] = '');
                var l = j(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
                (i.top = o), (i.left = a), (i[r] = s), (e.boundaries = l);
                var u = e.priority,
                  c = t.offsets.popper,
                  f = {
                    primary: function(t) {
                      var n = c[t];
                      return c[t] < l[t] && !e.escapeWithReference && (n = Math.max(c[t], l[t])), S({}, t, n);
                    },
                    secondary: function(t) {
                      var n = 'right' === t ? 'left' : 'top',
                        r = c[n];
                      return c[t] > l[t] && !e.escapeWithReference && (r = Math.min(c[n], l[t] - ('right' === t ? c.width : c.height))), S({}, n, r);
                    },
                  };
                return (
                  u.forEach(function(t) {
                    var e = -1 !== ['left', 'top'].indexOf(t) ? 'primary' : 'secondary';
                    c = _({}, c, f[e](t));
                  }),
                  (t.offsets.popper = c),
                  t
                );
              },
              priority: ['left', 'right', 'top', 'bottom'],
              padding: 5,
              boundariesElement: 'scrollParent',
            },
            keepTogether: {
              order: 400,
              enabled: !0,
              fn: function(t) {
                var e = t.offsets,
                  n = e.popper,
                  r = e.reference,
                  i = t.placement.split('-')[0],
                  o = Math.floor,
                  a = -1 !== ['top', 'bottom'].indexOf(i),
                  s = a ? 'right' : 'bottom',
                  l = a ? 'left' : 'top',
                  u = a ? 'width' : 'height';
                return n[s] < o(r[l]) && (t.offsets.popper[l] = o(r[l]) - n[u]), n[l] > o(r[s]) && (t.offsets.popper[l] = o(r[s])), t;
              },
            },
            arrow: {
              order: 500,
              enabled: !0,
              fn: function(t, e) {
                var n;
                if (!q(t.instance.modifiers, 'arrow', 'keepTogether')) return t;
                var r = e.element;
                if ('string' == typeof r) {
                  if (!(r = t.instance.popper.querySelector(r))) return t;
                } else if (!t.instance.popper.contains(r)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), t;
                var i = t.placement.split('-')[0],
                  o = t.offsets,
                  s = o.popper,
                  l = o.reference,
                  u = -1 !== ['left', 'right'].indexOf(i),
                  c = u ? 'height' : 'width',
                  f = u ? 'Top' : 'Left',
                  d = f.toLowerCase(),
                  h = u ? 'left' : 'top',
                  p = u ? 'bottom' : 'right',
                  m = $(r)[c];
                l[p] - m < s[d] && (t.offsets.popper[d] -= s[d] - (l[p] - m)),
                  l[d] + m > s[p] && (t.offsets.popper[d] += l[d] + m - s[p]),
                  (t.offsets.popper = k(t.offsets.popper));
                var v = l[d] + l[c] / 2 - m / 2,
                  g = a(t.instance.popper),
                  b = parseFloat(g['margin' + f], 10),
                  y = parseFloat(g['border' + f + 'Width'], 10),
                  w = v - t.offsets.popper[d] - b - y;
                return (w = Math.max(Math.min(s[c] - m, w), 0)), (t.arrowElement = r), (t.offsets.arrow = (S((n = {}), d, Math.round(w)), S(n, h, ''), n)), t;
              },
              element: '[x-arrow]',
            },
            flip: {
              order: 600,
              enabled: !0,
              fn: function(t, e) {
                if (F(t.instance.modifiers, 'inner')) return t;
                if (t.flipped && t.placement === t.originalPlacement) return t;
                var n = j(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                  r = t.placement.split('-')[0],
                  i = A(r),
                  o = t.placement.split('-')[1] || '',
                  a = [];
                switch (e.behavior) {
                  case Y.FLIP:
                    a = [r, i];
                    break;
                  case Y.CLOCKWISE:
                    a = X(r);
                    break;
                  case Y.COUNTERCLOCKWISE:
                    a = X(r, !0);
                    break;
                  default:
                    a = e.behavior;
                }
                return (
                  a.forEach(function(s, l) {
                    if (r !== s || a.length === l + 1) return t;
                    (r = t.placement.split('-')[0]), (i = A(r));
                    var u = t.offsets.popper,
                      c = t.offsets.reference,
                      f = Math.floor,
                      d =
                        ('left' === r && f(u.right) > f(c.left)) ||
                        ('right' === r && f(u.left) < f(c.right)) ||
                        ('top' === r && f(u.bottom) > f(c.top)) ||
                        ('bottom' === r && f(u.top) < f(c.bottom)),
                      h = f(u.left) < f(n.left),
                      p = f(u.right) > f(n.right),
                      m = f(u.top) < f(n.top),
                      v = f(u.bottom) > f(n.bottom),
                      g = ('left' === r && h) || ('right' === r && p) || ('top' === r && m) || ('bottom' === r && v),
                      b = -1 !== ['top', 'bottom'].indexOf(r),
                      y = !!e.flipVariations && ((b && 'start' === o && h) || (b && 'end' === o && p) || (!b && 'start' === o && m) || (!b && 'end' === o && v)),
                      w = !!e.flipVariationsByContent && ((b && 'start' === o && p) || (b && 'end' === o && h) || (!b && 'start' === o && v) || (!b && 'end' === o && m)),
                      O = y || w;
                    (d || g || O) &&
                      ((t.flipped = !0),
                      (d || g) && (r = a[l + 1]),
                      O &&
                        (o = (function(t) {
                          return 'end' === t ? 'start' : 'start' === t ? 'end' : t;
                        })(o)),
                      (t.placement = r + (o ? '-' + o : '')),
                      (t.offsets.popper = _({}, t.offsets.popper, E(t.instance.popper, t.offsets.reference, t.placement))),
                      (t = D(t.instance.modifiers, t, 'flip')));
                  }),
                  t
                );
              },
              behavior: 'flip',
              padding: 5,
              boundariesElement: 'viewport',
              flipVariations: !1,
              flipVariationsByContent: !1,
            },
            inner: {
              order: 700,
              enabled: !1,
              fn: function(t) {
                var e = t.placement,
                  n = e.split('-')[0],
                  r = t.offsets,
                  i = r.popper,
                  o = r.reference,
                  a = -1 !== ['left', 'right'].indexOf(n),
                  s = -1 === ['top', 'left'].indexOf(n);
                return (i[a ? 'left' : 'top'] = o[n] - (s ? i[a ? 'width' : 'height'] : 0)), (t.placement = A(e)), (t.offsets.popper = k(i)), t;
              },
            },
            hide: {
              order: 800,
              enabled: !0,
              fn: function(t) {
                if (!q(t.instance.modifiers, 'hide', 'preventOverflow')) return t;
                var e = t.offsets.reference,
                  n = I(t.instance.modifiers, function(t) {
                    return 'preventOverflow' === t.name;
                  }).boundaries;
                if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                  if (!0 === t.hide) return t;
                  (t.hide = !0), (t.attributes['x-out-of-boundaries'] = '');
                } else {
                  if (!1 === t.hide) return t;
                  (t.hide = !1), (t.attributes['x-out-of-boundaries'] = !1);
                }
                return t;
              },
            },
            computeStyle: {
              order: 850,
              enabled: !0,
              fn: function(t, e) {
                var n = e.x,
                  r = e.y,
                  i = t.offsets.popper,
                  o = I(t.instance.modifiers, function(t) {
                    return 'applyStyle' === t.name;
                  }).gpuAcceleration;
                void 0 !== o && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
                var a = void 0 !== o ? o : e.gpuAcceleration,
                  s = h(t.instance.popper),
                  l = x(s),
                  u = { position: i.position },
                  c = (function(t, e) {
                    var n = t.offsets,
                      r = n.popper,
                      i = n.reference,
                      o = Math.round,
                      a = Math.floor,
                      s = function(t) {
                        return t;
                      },
                      l = o(i.width),
                      u = o(r.width),
                      c = -1 !== ['left', 'right'].indexOf(t.placement),
                      f = -1 !== t.placement.indexOf('-'),
                      d = e ? (c || f || l % 2 == u % 2 ? o : a) : s,
                      h = e ? o : s;
                    return { left: d(l % 2 == 1 && u % 2 == 1 && !f && e ? r.left - 1 : r.left), top: h(r.top), bottom: h(r.bottom), right: d(r.right) };
                  })(t, window.devicePixelRatio < 2 || !W),
                  f = 'bottom' === n ? 'top' : 'bottom',
                  d = 'right' === r ? 'left' : 'right',
                  p = R('transform'),
                  m = void 0,
                  v = void 0;
                if (
                  ((v = 'bottom' === f ? ('HTML' === s.nodeName ? -s.clientHeight + c.bottom : -l.height + c.bottom) : c.top),
                  (m = 'right' === d ? ('HTML' === s.nodeName ? -s.clientWidth + c.right : -l.width + c.right) : c.left),
                  a && p)
                )
                  (u[p] = 'translate3d(' + m + 'px, ' + v + 'px, 0)'), (u[f] = 0), (u[d] = 0), (u.willChange = 'transform');
                else {
                  var g = 'bottom' === f ? -1 : 1,
                    b = 'right' === d ? -1 : 1;
                  (u[f] = v * g), (u[d] = m * b), (u.willChange = f + ', ' + d);
                }
                var y = { 'x-placement': t.placement };
                return (t.attributes = _({}, y, t.attributes)), (t.styles = _({}, u, t.styles)), (t.arrowStyles = _({}, t.offsets.arrow, t.arrowStyles)), t;
              },
              gpuAcceleration: !0,
              x: 'bottom',
              y: 'right',
            },
            applyStyle: {
              order: 900,
              enabled: !0,
              fn: function(t) {
                var e, n;
                return (
                  U(t.instance.popper, t.styles),
                  (e = t.instance.popper),
                  (n = t.attributes),
                  Object.keys(n).forEach(function(t) {
                    !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
                  }),
                  t.arrowElement && Object.keys(t.arrowStyles).length && U(t.arrowElement, t.arrowStyles),
                  t
                );
              },
              onLoad: function(t, e, n, r, i) {
                var o = B(i, e, t, n.positionFixed),
                  a = C(n.placement, o, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                return e.setAttribute('x-placement', a), U(e, { position: n.positionFixed ? 'fixed' : 'absolute' }), n;
              },
              gpuAcceleration: void 0,
            },
          },
        },
        tt = (function() {
          function t(e, n) {
            var r = this,
              a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            w(this, t),
              (this.scheduleUpdate = function() {
                return requestAnimationFrame(r.update);
              }),
              (this.update = i(this.update.bind(this))),
              (this.options = _({}, t.Defaults, a)),
              (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
              (this.reference = e && e.jquery ? e[0] : e),
              (this.popper = n && n.jquery ? n[0] : n),
              (this.options.modifiers = {}),
              Object.keys(_({}, t.Defaults.modifiers, a.modifiers)).forEach(function(e) {
                r.options.modifiers[e] = _({}, t.Defaults.modifiers[e] || {}, a.modifiers ? a.modifiers[e] : {});
              }),
              (this.modifiers = Object.keys(this.options.modifiers)
                .map(function(t) {
                  return _({ name: t }, r.options.modifiers[t]);
                })
                .sort(function(t, e) {
                  return t.order - e.order;
                })),
              this.modifiers.forEach(function(t) {
                t.enabled && o(t.onLoad) && t.onLoad(r.reference, r.popper, r.options, t, r.state);
              }),
              this.update();
            var s = this.options.eventsEnabled;
            s && this.enableEventListeners(), (this.state.eventsEnabled = s);
          }
          return (
            O(t, [
              {
                key: 'update',
                value: function() {
                  return N.call(this);
                },
              },
              {
                key: 'destroy',
                value: function() {
                  return L.call(this);
                },
              },
              {
                key: 'enableEventListeners',
                value: function() {
                  return H.call(this);
                },
              },
              {
                key: 'disableEventListeners',
                value: function() {
                  return z.call(this);
                },
              },
            ]),
            t
          );
        })();
      (tt.Utils = ('undefined' != typeof window ? window : t).PopperUtils), (tt.placements = K), (tt.Defaults = Q), (e.a = tt);
    }.call(this, n(41)));
  },
  ,
  function(t, e, n) {},
  function(t, e, n) {},
  function(t, e, n) {},
  function(t, e, n) {},
  function(t, e, n) {},
  function(t, e, n) {},
  function(t, e, n) {},
  ,
  ,
  function(t, e, n) {
    'use strict';
    var r = n(12).default,
      i = n(5),
      o = function(t) {
        Object(i.a)() || console.warn('[BootstrapVue warn]: '.concat(t));
      },
      a = function(t) {
        return !i.j && (o(''.concat(t, ': Can not be called during SSR.')), !0);
      },
      s = function(t) {
        return !i.g && (o(''.concat(t, ': Requires Promise support.')), !0);
      },
      l = o,
      u = Array.from,
      c = Array.isArray,
      f = function(t, e) {
        return -1 !== t.indexOf(e);
      },
      d = function() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return Array.prototype.concat.apply([], e);
      };
    function h(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function p(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? h(n, !0).forEach(function(e) {
              m(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : h(n).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return t;
    }
    function m(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    function v(t) {
      return (v =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(t) {
              return typeof t;
            }
          : function(t) {
              return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
            })(t);
    }
    var g = Object.assign,
      b = Object.getOwnPropertyNames,
      y = Object.keys,
      w = Object.defineProperties,
      O = Object.defineProperty,
      S = Object.freeze,
      _ = (Object.getOwnPropertyDescriptor, Object.getOwnPropertySymbols, Object.getPrototypeOf, Object.create),
      k =
        (Object.isFrozen,
        Object.is,
        function(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }),
      x = function(t) {
        return null !== t && 'object' === v(t);
      },
      T = function(t) {
        return '[object Object]' === Object.prototype.toString.call(t);
      },
      P = function(t) {
        return p({}, t);
      },
      j = function(t, e) {
        return y(t)
          .filter(function(t) {
            return -1 === e.indexOf(t);
          })
          .reduce(function(e, n) {
            return p({}, e, m({}, n, t[n]));
          }, {});
      },
      C = function() {
        return { enumerable: !0, configurable: !1, writable: !1 };
      };
    function B(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function $(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? B(n, !0).forEach(function(e) {
              A(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : B(n).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return t;
    }
    function A(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    function E(t) {
      return (
        (function(t) {
          if (Array.isArray(t)) {
            for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
            return n;
          }
        })(t) ||
        (function(t) {
          if (Symbol.iterator in Object(t) || '[object Arguments]' === Object.prototype.toString.call(t)) return Array.from(t);
        })(t) ||
        (function() {
          throw new TypeError('Invalid attempt to spread non-iterable instance');
        })()
      );
    }
    var I = function t(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
        return c(e)
          ? e.reduce(function(e, n) {
              return [].concat(E(e), [t(n, n)]);
            }, [])
          : T(e)
          ? y(e).reduce(function(n, r) {
              return $({}, n, A({}, r, t(e[r], e[r])));
            }, {})
          : n;
      },
      D = function(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (!(e = c(e) ? e.join('.') : e) || !x(t)) return n;
        if (e in t) return t[e];
        var r = (e = String(e).replace(/\[(\d+)]/g, '.$1')).split('.').filter(Boolean);
        return 0 === r.length
          ? n
          : r.every(function(e) {
              return x(t) && e in t && null != (t = t[e]);
            })
          ? t
          : n;
      };
    function N(t) {
      return (N =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(t) {
              return typeof t;
            }
          : function(t) {
              return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
            })(t);
    }
    function F(t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
    }
    function R(t, e) {
      return !e || ('object' !== N(e) && 'function' != typeof e)
        ? (function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t;
          })(t)
        : e;
    }
    function L(t, e) {
      if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
      (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && H(t, e);
    }
    function V(t) {
      var e = 'function' == typeof Map ? new Map() : void 0;
      return (V = function(t) {
        if (null === t || ((n = t), -1 === Function.toString.call(n).indexOf('[native code]'))) return t;
        var n;
        if ('function' != typeof t) throw new TypeError('Super expression must either be null or a function');
        if (void 0 !== e) {
          if (e.has(t)) return e.get(t);
          e.set(t, r);
        }
        function r() {
          return M(t, arguments, z(this).constructor);
        }
        return (r.prototype = Object.create(t.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })), H(r, t);
      })(t);
    }
    function M(t, e, n) {
      return (M = (function() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
        } catch (t) {
          return !1;
        }
      })()
        ? Reflect.construct
        : function(t, e, n) {
            var r = [null];
            r.push.apply(r, e);
            var i = new (Function.bind.apply(t, r))();
            return n && H(i, n.prototype), i;
          }).apply(null, arguments);
    }
    function H(t, e) {
      return (H =
        Object.setPrototypeOf ||
        function(t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function z(t) {
      return (z = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var G = i.i ? window : {},
      U = i.i
        ? G.Element
        : (function(t) {
            function e() {
              return F(this, e), R(this, z(e).apply(this, arguments));
            }
            return L(e, t), e;
          })(V(Object)),
      W = i.i
        ? G.HTMLElement
        : (function(t) {
            function e() {
              return F(this, e), R(this, z(e).apply(this, arguments));
            }
            return L(e, t), e;
          })(U),
      q = i.i
        ? G.SVGElement
        : (function(t) {
            function e() {
              return F(this, e), R(this, z(e).apply(this, arguments));
            }
            return L(e, t), e;
          })(U),
      K = i.i
        ? G.File
        : (function(t) {
            function e() {
              return F(this, e), R(this, z(e).apply(this, arguments));
            }
            return L(e, t), e;
          })(V(Object));
    function J(t) {
      return (J =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(t) {
              return typeof t;
            }
          : function(t) {
              return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
            })(t);
    }
    var X = function(t) {
        return J(t);
      },
      Y = function(t) {
        return Object.prototype.toString.call(t).slice(8, -1);
      },
      Z = function(t) {
        return void 0 === t;
      },
      Q = function(t) {
        return null === t;
      },
      tt = function(t) {
        return Z(t) || Q(t);
      },
      et = function(t) {
        return 'function' === X(t);
      },
      nt = function(t) {
        return 'boolean' === X(t);
      },
      rt = function(t) {
        return 'string' === X(t);
      },
      it = function(t) {
        return 'number' === X(t);
      },
      ot = function(t) {
        return t instanceof Date;
      },
      at = function(t) {
        return t instanceof Event;
      },
      st = function(t) {
        return t instanceof K;
      },
      lt = function(t) {
        return 'RegExp' === Y(t);
      },
      ut = (function t(e) {
        return (
          y(e).forEach(function(n) {
            var r = e[n];
            e[n] = r && (T(r) || c(r)) ? t(r) : r;
          }),
          S(e)
        );
      })({
        breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
        formControls: { size: null },
        BAlert: { dismissLabel: 'Close', variant: 'info' },
        BBadge: { variant: 'secondary' },
        BButton: { size: null, variant: 'secondary' },
        BButtonClose: { textVariant: null, ariaLabel: 'Close' },
        BCardSubTitle: { subTitleTextVariant: 'muted' },
        BCarousel: { labelPrev: 'Previous Slide', labelNext: 'Next Slide', labelGotoSlide: 'Goto Slide', labelIndicators: 'Select a slide to display' },
        BDropdown: { toggleText: 'Toggle Dropdown', size: null, variant: 'secondary', splitVariant: null },
        BFormFile: { browseText: 'Browse', placeholder: 'No file chosen', dropPlaceholder: 'Drop files here' },
        BFormText: { textVariant: 'muted' },
        BImg: { blankColor: 'transparent' },
        BImgLazy: { blankColor: 'transparent' },
        BInputGroup: { size: null },
        BJumbotron: { bgVariant: null, borderVariant: null, textVariant: null },
        BListGroupItem: { variant: null },
        BModal: {
          titleTag: 'h5',
          size: 'md',
          headerBgVariant: null,
          headerBorderVariant: null,
          headerTextVariant: null,
          headerCloseVariant: null,
          bodyBgVariant: null,
          bodyTextVariant: null,
          footerBgVariant: null,
          footerBorderVariant: null,
          footerTextVariant: null,
          cancelTitle: 'Cancel',
          cancelVariant: 'secondary',
          okTitle: 'OK',
          okVariant: 'primary',
          headerCloseLabel: 'Close',
        },
        BNavbar: { variant: null },
        BNavbarToggle: { label: 'Toggle navigation' },
        BPagination: { size: null },
        BPaginationNav: { size: null },
        BPopover: { boundary: 'scrollParent', boundaryPadding: 5, customClass: null, delay: 50, variant: null },
        BProgress: { variant: null },
        BProgressBar: { variant: null },
        BSpinner: { variant: null },
        BTable: { selectedVariant: 'active', headVariant: null, footVariant: null },
        BToast: { toaster: 'b-toaster-top-right', autoHideDelay: 5e3, variant: null, toastClass: null, headerClass: null, bodyClass: null },
        BToaster: { ariaLive: null, ariaAtomic: null, role: null },
        BTooltip: { boundary: 'scrollParent', boundaryPadding: 5, customClass: null, delay: 50, variant: null },
      });
    function ct(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }
    var ft = (function() {
        function t() {
          !(function(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this.$_config = {}),
            (this.$_cachedBreakpoints = null);
        }
        var e, n, r;
        return (
          (e = t),
          (r = [
            {
              key: 'Defaults',
              get: function() {
                return ut;
              },
            },
          ]),
          (n = [
            {
              key: 'getDefaults',
              value: function() {
                return this.defaults;
              },
            },
            {
              key: 'setConfig',
              value: function() {
                var t = this,
                  e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (T(e)) {
                  var n = b(e);
                  n.forEach(function(n) {
                    if (k(ut, n)) {
                      var r = e[n];
                      if ('breakpoints' === n) {
                        var i = e.breakpoints;
                        !c(i) ||
                        i.length < 2 ||
                        i.some(function(t) {
                          return !rt(t) || 0 === t.length;
                        })
                          ? l('config: "breakpoints" must be an array of at least 2 breakpoint names')
                          : (t.$_config.breakpoints = I(i));
                      } else
                        T(r) &&
                          b(r).forEach(function(e) {
                            k(ut[n], e)
                              ? ((t.$_config[n] = t.$_config[n] || {}), Z(r[e]) || (t.$_config[n][e] = I(r[e])))
                              : l('config: unknown config property "'.concat(n, '.').concat(e, '"'));
                          });
                    } else l('config: unknown config property "'.concat(n, '"'));
                  });
                }
              },
            },
            {
              key: 'resetConfig',
              value: function() {
                this.$_config = {};
              },
            },
            {
              key: 'getConfig',
              value: function() {
                return I(this.$_config);
              },
            },
            {
              key: 'getConfigValue',
              value: function(t) {
                return I(D(this.$_config, t, D(ut, t)));
              },
            },
            {
              key: 'defaults',
              get: function() {
                return ut;
              },
            },
          ]) && ct(e.prototype, n),
          r && ct(e, r),
          t
        );
      })(),
      dt = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r;
        (e.prototype.$bvConfig = r.prototype.$bvConfig = e.prototype.$bvConfig || r.prototype.$bvConfig || new ft()), e.prototype.$bvConfig.setConfig(t);
      };
    function ht(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function pt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ht(n, !0).forEach(function(e) {
              mt(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : ht(n).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return t;
    }
    function mt(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var vt,
      gt,
      bt =
        ((vt = !1),
        (gt = [
          'Multiple instances of Vue detected!',
          'You may need to set up an alias for Vue in your bundler config.',
          'See: https://bootstrap-vue.js.org/docs#using-module-bundlers',
        ].join('\n')),
        function(t) {
          vt || r === t || i.k || l(gt), (vt = !0);
        }),
      yt = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.components,
          n = t.directives,
          r = t.plugins,
          i = function t(i) {
            var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            t.installed || ((t.installed = !0), bt(i), dt(o, i), _t(i, e), xt(i, n), Ot(i, r));
          };
        return (i.installed = !1), i;
      },
      wt = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return pt({}, e, { install: yt(t) });
      },
      Ot = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        for (var n in e) n && e[n] && t.use(e[n]);
      },
      St = function(t, e, n) {
        t && e && n && t.component(e, n);
      },
      _t = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        for (var n in e) St(t, n, e[n]);
      },
      kt = function(t, e, n) {
        t && e && n && t.directive(e.replace(/^VB/, 'B'), n);
      },
      xt = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        for (var n in e) kt(t, n, e[n]);
      },
      Tt = function(t) {
        var e = _(null);
        return function() {
          for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
          var o = JSON.stringify(r);
          return (e[o] = e[o] || t.apply(null, r));
        };
      },
      Pt = r.prototype,
      jt = function(t) {
        return Pt.$bvConfig ? Pt.$bvConfig.getConfigValue(t) : I(D(ut, t));
      },
      Ct = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return e ? jt(''.concat(t, '.').concat(e)) : jt(t) || {};
      },
      Bt = function() {
        return jt('breakpoints');
      },
      $t = Tt(function() {
        return Bt();
      }),
      At = function() {
        return I($t());
      },
      Et = Tt(function() {
        var t = At();
        return (t[0] = ''), t;
      }),
      It = i.i ? window : {},
      Dt = i.b ? document : {},
      Nt = 'undefined' != typeof Element ? Element.prototype : {},
      Ft = Nt.matches || Nt.msMatchesSelector || Nt.webkitMatchesSelector,
      Rt =
        Nt.closest ||
        function(t) {
          var e = this;
          do {
            if (Xt(e, t)) return e;
            e = e.parentElement || e.parentNode;
          } while (!Q(e) && e.nodeType === Node.ELEMENT_NODE);
          return null;
        },
      Lt =
        It.requestAnimationFrame ||
        It.webkitRequestAnimationFrame ||
        It.mozRequestAnimationFrame ||
        It.msRequestAnimationFrame ||
        It.oRequestAnimationFrame ||
        function(t) {
          return setTimeout(t, 16);
        },
      Vt = It.MutationObserver || It.WebKitMutationObserver || It.MozMutationObserver || null,
      Mt = function(t) {
        return i.e ? (x(t) ? t : { useCapture: Boolean(t || !1) }) : Boolean(x(t) ? t.useCapture : t);
      },
      Ht = function(t, e, n, r) {
        t && t.addEventListener && t.addEventListener(e, n, Mt(r));
      },
      zt = function(t, e, n, r) {
        t && t.removeEventListener && t.removeEventListener(e, n, Mt(r));
      },
      Gt = function(t) {
        return Boolean(t && t.nodeType === Node.ELEMENT_NODE);
      },
      Ut = function(t) {
        if (!Gt(t) || !Zt(Dt.body, t)) return !1;
        if ('none' === t.style.display) return !1;
        var e = se(t);
        return Boolean(e && e.height > 0 && e.width > 0);
      },
      Wt = function(t) {
        return !Gt(t) || t.disabled || Boolean(oe(t, 'disabled')) || ne(t, 'disabled');
      },
      qt = function(t) {
        return Gt(t) && t.offsetHeight;
      },
      Kt = function(t, e) {
        return u((Gt(e) ? e : Dt).querySelectorAll(t));
      },
      Jt = function(t, e) {
        return (Gt(e) ? e : Dt).querySelector(t) || null;
      },
      Xt = function(t, e) {
        return !!Gt(t) && Ft.call(t, e);
      },
      Yt = function(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!Gt(e)) return null;
        var r = Rt.call(e, t);
        return n ? r : r === e ? null : r;
      },
      Zt = function(t, e) {
        return !(!t || !et(t.contains)) && t.contains(e);
      },
      Qt = function(t) {
        return Dt.getElementById(/^#/.test(t) ? t.slice(1) : t) || null;
      },
      te = function(t, e) {
        e && Gt(t) && t.classList && t.classList.add(e);
      },
      ee = function(t, e) {
        e && Gt(t) && t.classList && t.classList.remove(e);
      },
      ne = function(t, e) {
        return !!(e && Gt(t) && t.classList) && t.classList.contains(e);
      },
      re = function(t, e, n) {
        e && Gt(t) && t.setAttribute(e, n);
      },
      ie = function(t, e) {
        e && Gt(t) && t.removeAttribute(e);
      },
      oe = function(t, e) {
        return e && Gt(t) ? t.getAttribute(e) : null;
      },
      ae = function(t, e) {
        return e && Gt(t) ? t.hasAttribute(e) : null;
      },
      se = function(t) {
        return Gt(t) ? t.getBoundingClientRect() : null;
      },
      le = function(t) {
        return i.i && Gt(t) ? It.getComputedStyle(t) : {};
      },
      ue = function() {
        return i.i && It.getSelection ? It.getSelection() : null;
      },
      ce = function(t) {
        var e = { top: 0, left: 0 };
        if (!Gt(t) || 0 === t.getClientRects().length) return e;
        var n = se(t);
        if (n) {
          var r = t.ownerDocument.defaultView;
          (e.top = n.top + r.pageYOffset), (e.left = n.left + r.pageXOffset);
        }
        return e;
      },
      fe = function(t) {
        var e = { top: 0, left: 0 };
        if (!Gt(t)) return e;
        var n = { top: 0, left: 0 },
          r = le(t);
        if ('fixed' === r.position) e = se(t) || e;
        else {
          e = ce(t);
          for (var i = t.ownerDocument, o = t.offsetParent || i.documentElement; o && (o === i.body || o === i.documentElement) && 'static' === le(o).position; ) o = o.parentNode;
          if (o && o !== t && o.nodeType === Node.ELEMENT_NODE) {
            n = ce(o);
            var a = le(o);
            (n.top += parseFloat(a.borderTopWidth)), (n.left += parseFloat(a.borderLeftWidth));
          }
        }
        return { top: e.top - n.top - parseFloat(r.marginTop), left: e.left - n.left - parseFloat(r.marginLeft) };
      },
      de = function() {
        return (de =
          Object.assign ||
          function(t) {
            for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t;
          }).apply(this, arguments);
      },
      he = { kebab: /-(\w)/g, styleProp: /:(.*)/, styleList: /;(?![^(]*\))/g };
    function pe(t, e) {
      return e ? e.toUpperCase() : '';
    }
    function me(t) {
      for (var e, n = {}, r = 0, i = t.split(he.styleList); r < i.length; r++) {
        var o = i[r].split(he.styleProp),
          a = o[0],
          s = o[1];
        (a = a.trim()) && ('string' == typeof s && (s = s.trim()), (n[((e = a), e.replace(he.kebab, pe))] = s));
      }
      return n;
    }
    function ve() {
      for (var t, e, n = {}, r = arguments.length; r--; )
        for (var i = 0, o = Object.keys(arguments[r]); i < o.length; i++)
          switch ((t = o[i])) {
            case 'class':
            case 'style':
            case 'directives':
              if ((Array.isArray(n[t]) || (n[t] = []), 'style' === t)) {
                var a = void 0;
                a = Array.isArray(arguments[r].style) ? arguments[r].style : [arguments[r].style];
                for (var s = 0; s < a.length; s++) {
                  var l = a[s];
                  'string' == typeof l && (a[s] = me(l));
                }
                arguments[r].style = a;
              }
              n[t] = n[t].concat(arguments[r][t]);
              break;
            case 'staticClass':
              if (!arguments[r][t]) break;
              void 0 === n[t] && (n[t] = ''), n[t] && (n[t] += ' '), (n[t] += arguments[r][t].trim());
              break;
            case 'on':
            case 'nativeOn':
              n[t] || (n[t] = {});
              for (var u = 0, c = Object.keys(arguments[r][t] || {}); u < c.length; u++)
                (e = c[u]), n[t][e] ? (n[t][e] = [].concat(n[t][e], arguments[r][t][e])) : (n[t][e] = arguments[r][t][e]);
              break;
            case 'attrs':
            case 'props':
            case 'domProps':
            case 'scopedSlots':
            case 'staticStyle':
            case 'hook':
            case 'transition':
              n[t] || (n[t] = {}), (n[t] = de({}, arguments[r][t], n[t]));
              break;
            case 'slot':
            case 'key':
            case 'ref':
            case 'tag':
            case 'show':
            case 'keepAlive':
            default:
              n[t] || (n[t] = arguments[r][t]);
          }
      return n;
    }
    function ge(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function be(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ge(n, !0).forEach(function(e) {
              ye(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : ge(n).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return t;
    }
    function ye(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var we = { name: '', enterClass: '', enterActiveClass: '', enterToClass: 'show', leaveClass: 'show', leaveActiveClass: '', leaveToClass: '' },
      Oe = be({}, we, { enterActiveClass: 'fade', leaveActiveClass: 'fade' }),
      Se = r.extend({
        name: 'BVTransition',
        functional: !0,
        props: { noFade: { type: Boolean, default: !1 }, appear: { type: Boolean, default: !1 }, mode: { type: String }, transProps: { type: Object, default: null } },
        render: function(t, e) {
          var n = e.children,
            r = e.data,
            i = (e.listeners, e.props),
            o = i.transProps;
          return (
            T(o) ||
              ((o = i.noFade ? we : Oe),
              i.appear && (o = be({}, o, { appear: !0, appearClass: o.enterClass, appearActiveClass: o.enterActiveClass, appearToClass: o.enterToClass }))),
            t('transition', ve(r, { props: (o = be({ mode: i.mode }, o, { css: !0 })) }), n)
          );
        },
      }),
      _e = Se,
      ke = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return (t = d(t).filter(Boolean)).some(function(t) {
          return e[t] || n[t];
        });
      },
      xe = function(t) {
        var e,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        t = d(t).filter(Boolean);
        for (var o = 0; o < t.length && !e; o++) {
          var a = t[o];
          e = r[a] || i[a];
        }
        return et(e) ? e(n) : e;
      },
      Te = {
        methods: {
          hasNormalizedSlot: function(t) {
            return ke(t, this.$scopedSlots, this.$slots);
          },
          normalizeSlot: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = xe(t, e, this.$scopedSlots, this.$slots);
            return n ? d(n) : n;
          },
        },
      };
    var Pe = {
        disabled: { type: Boolean, default: !1 },
        ariaLabel: {
          type: String,
          default: function() {
            return Ct('BButtonClose', 'ariaLabel');
          },
        },
        textVariant: {
          type: String,
          default: function() {
            return Ct('BButtonClose', 'textVariant');
          },
        },
      },
      je = r.extend({
        name: 'BButtonClose',
        functional: !0,
        props: Pe,
        render: function(t, e) {
          var n,
            r,
            i,
            o = e.props,
            a = e.data,
            s = (e.listeners, e.slots),
            l = e.scopedSlots,
            u = s(),
            c = l || {},
            f = {
              staticClass: 'close',
              class:
                ((n = {}),
                (r = 'text-'.concat(o.textVariant)),
                (i = o.textVariant),
                r in n ? Object.defineProperty(n, r, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (n[r] = i),
                n),
              attrs: { type: 'button', disabled: o.disabled, 'aria-label': o.ariaLabel ? String(o.ariaLabel) : null },
              on: {
                click: function(t) {
                  o.disabled && at(t) && (t.stopPropagation(), t.preventDefault());
                },
              },
            };
          return ke('default', c, u) || (f.domProps = { innerHTML: '&times;' }), t('button', ve(a, f), xe('default', {}, c, u));
        },
      });
    var Ce = function(t) {
        return '' === t || nt(t) ? 0 : (t = parseInt(t, 10)) > 0 ? t : 0;
      },
      Be = function(t) {
        return '' === t || !0 === t || (!(parseInt(t, 10) < 1) && Boolean(t));
      },
      $e = function(t) {
        return !isNaN(parseInt(t, 10));
      },
      Ae = wt({
        components: {
          BAlert: r.extend({
            name: 'BAlert',
            mixins: [Te],
            model: { prop: 'show', event: 'input' },
            props: {
              variant: {
                type: String,
                default: function() {
                  return Ct('BAlert', 'variant');
                },
              },
              dismissible: { type: Boolean, default: !1 },
              dismissLabel: {
                type: String,
                default: function() {
                  return Ct('BAlert', 'dismissLabel');
                },
              },
              show: { type: [Boolean, Number, String], default: !1 },
              fade: { type: Boolean, default: !1 },
            },
            data: function() {
              return { countDownTimerId: null, countDown: 0, localShow: Be(this.show) };
            },
            watch: {
              show: function(t) {
                (this.countDown = Ce(t)), (this.localShow = Be(t));
              },
              countDown: function(t) {
                var e = this;
                this.clearTimer(),
                  $e(this.show) &&
                    (this.$emit('dismiss-count-down', t),
                    this.show !== t && this.$emit('input', t),
                    t > 0
                      ? ((this.localShow = !0),
                        (this.countDownTimerId = setTimeout(function() {
                          e.countDown--;
                        }, 1e3)))
                      : this.$nextTick(function() {
                          Lt(function() {
                            e.localShow = !1;
                          });
                        }));
              },
              localShow: function(t) {
                t || (!this.dismissible && !$e(this.show)) || this.$emit('dismissed'), $e(this.show) || this.show === t || this.$emit('input', t);
              },
            },
            created: function() {
              (this.countDown = Ce(this.show)), (this.localShow = Be(this.show));
            },
            mounted: function() {
              (this.countDown = Ce(this.show)), (this.localShow = Be(this.show));
            },
            beforeDestroy: function() {
              this.clearTimer();
            },
            methods: {
              dismiss: function() {
                this.clearTimer(), (this.countDown = 0), (this.localShow = !1);
              },
              clearTimer: function() {
                this.countDownTimerId && (clearInterval(this.countDownTimerId), (this.countDownTimerId = null));
              },
            },
            render: function(t) {
              var e, n, r, i;
              if (this.localShow) {
                var o = t();
                this.dismissible && (o = t(je, { attrs: { 'aria-label': this.dismissLabel }, on: { click: this.dismiss } }, [this.normalizeSlot('dismiss')])),
                  (e = [
                    (e = t(
                      'div',
                      {
                        key: this._uid,
                        staticClass: 'alert',
                        class:
                          ((n = { 'alert-dismissible': this.dismissible }),
                          (r = 'alert-'.concat(this.variant)),
                          (i = this.variant),
                          r in n ? Object.defineProperty(n, r, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (n[r] = i),
                          n),
                        attrs: { role: 'alert', 'aria-live': 'polite', 'aria-atomic': !0 },
                      },
                      [o, this.normalizeSlot('default')]
                    )),
                  ]);
              }
              return t(_e, { props: { noFade: !this.fade } }, e);
            },
          }),
        },
      }),
      Ee = function(t) {
        return t;
      },
      Ie = function(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ee;
        return (c(t) ? t.slice() : y(t)).reduce(function(t, r) {
          return (t[n(r)] = e[r]), t;
        }, {});
      },
      De = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return tt(t) ? '' : c(t) || (T(t) && t.toString === Object.prototype.toString) ? JSON.stringify(t, null, e) : String(t);
      },
      Ne = /%2C/g,
      Fe = /[!'()*]/g,
      Re = function(t) {
        return '%' + t.charCodeAt(0).toString(16);
      },
      Le = function(t) {
        return encodeURIComponent(De(t))
          .replace(Fe, Re)
          .replace(Ne, ',');
      },
      Ve = decodeURIComponent,
      Me = function(t) {
        if (!T(t)) return '';
        var e = y(t)
          .map(function(e) {
            var n = t[e];
            return Z(n)
              ? ''
              : Q(n)
              ? Le(e)
              : c(n)
              ? n
                  .reduce(function(t, n) {
                    return Q(n) ? t.push(Le(e)) : Z(n) || t.push(Le(e) + '=' + Le(n)), t;
                  }, [])
                  .join('&')
              : Le(e) + '=' + Le(n);
          })
          .filter(function(t) {
            return t.length > 0;
          })
          .join('&');
        return e ? '?'.concat(e) : '';
      },
      He = function(t) {
        var e = {};
        return (t = De(t)
          .trim()
          .replace(/^(\?|#|&)/, ''))
          ? (t.split('&').forEach(function(t) {
              var n = t.replace(/\+/g, ' ').split('='),
                r = Ve(n.shift()),
                i = n.length > 0 ? Ve(n.join('=')) : null;
              Z(e[r]) ? (e[r] = i) : c(e[r]) ? e[r].push(i) : (e[r] = [e[r], i]);
            }),
            e)
          : e;
      },
      ze = function(t) {
        return 'a' !== De(t).toLowerCase();
      },
      Ge = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.href,
          n = t.to,
          r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'a',
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '#',
          o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : '/';
        if (ze(r)) return null;
        if (e) return e;
        if (n) {
          if (rt(n)) return n || o;
          if (T(n) && (n.path || n.query || n.hash)) {
            var a = De(n.path),
              s = Me(n.query),
              l = De(n.hash);
            return (
              (l = l && '#' !== l.charAt(0) ? '#'.concat(l) : l),
              ''
                .concat(a)
                .concat(s)
                .concat(l) || o
            );
          }
        }
        return i;
      };
    function Ue(t) {
      return (
        (function(t) {
          if (Array.isArray(t)) {
            for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
            return n;
          }
        })(t) ||
        (function(t) {
          if (Symbol.iterator in Object(t) || '[object Arguments]' === Object.prototype.toString.call(t)) return Array.from(t);
        })(t) ||
        (function() {
          throw new TypeError('Invalid attempt to spread non-iterable instance');
        })()
      );
    }
    function We(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function qe(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? We(n, !0).forEach(function(e) {
              Ke(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : We(n).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return t;
    }
    function Ke(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var Je = function() {
        return {
          href: { type: String, default: null },
          rel: { type: String, default: null },
          target: { type: String, default: '_self' },
          active: { type: Boolean, default: !1 },
          disabled: { type: Boolean, default: !1 },
          to: { type: [String, Object], default: null },
          append: { type: Boolean, default: !1 },
          replace: { type: Boolean, default: !1 },
          event: { type: [String, Array], default: 'click' },
          activeClass: { type: String },
          exact: { type: Boolean, default: !1 },
          exactActiveClass: { type: String },
          routerTag: { type: String, default: 'a' },
          noPrefetch: { type: Boolean, default: !1 },
        };
      },
      Xe =
        (Je(),
        r.extend({
          name: 'BLink',
          mixins: [Te],
          inheritAttrs: !1,
          props: Je(),
          computed: {
            computedTag: function() {
              return (function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  e = t.to,
                  n = t.disabled,
                  r = arguments.length > 1 ? arguments[1] : void 0;
                return r.$router && e && !n ? (r.$nuxt ? 'nuxt-link' : 'router-link') : 'a';
              })({ to: this.to, disabled: this.disabled }, this);
            },
            isRouterLink: function() {
              return ze(this.computedTag);
            },
            computedRel: function() {
              return (function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  e = t.target,
                  n = t.rel;
                return '_blank' === e && Q(n) ? 'noopener' : n || null;
              })({ target: this.target, rel: this.rel });
            },
            computedHref: function() {
              return Ge({ to: this.to, href: this.href }, this.computedTag);
            },
            computedProps: function() {
              return this.isRouterLink ? qe({}, this.$props, { tag: this.routerTag }) : {};
            },
          },
          methods: {
            onClick: function(t) {
              var e = arguments,
                n = at(t),
                r = this.isRouterLink,
                i = this.$listeners.click;
              n && this.disabled
                ? (t.stopPropagation(), t.stopImmediatePropagation())
                : (r && t.currentTarget.__vue__ && t.currentTarget.__vue__.$emit('click', t),
                  d(i)
                    .filter(function(t) {
                      return et(t);
                    })
                    .forEach(function(t) {
                      t.apply(void 0, Ue(e));
                    }),
                  this.$root.$emit('clicked::link', t)),
                n && (this.disabled || (!r && '#' === this.computedHref)) && t.preventDefault();
            },
            focus: function() {
              this.$el && this.$el.focus && this.$el.focus();
            },
            blur: function() {
              this.$el && this.$el.blur && this.$el.blur();
            },
          },
          render: function(t) {
            var e = this.computedTag,
              n = this.computedRel,
              r = this.computedHref,
              i = this.isRouterLink,
              o = {
                class: { active: this.active, disabled: this.disabled },
                attrs: qe({}, this.$attrs, {
                  rel: n,
                  target: this.target,
                  tabindex: this.disabled ? '-1' : Z(this.$attrs.tabindex) ? null : this.$attrs.tabindex,
                  'aria-disabled': this.disabled ? 'true' : null,
                }),
                props: this.computedProps,
              };
            return (
              (o[i ? 'nativeOn' : 'on'] = qe({}, this.$listeners, { click: this.onClick })), r ? (o.attrs.href = r) : delete o.props.href, t(e, o, this.normalizeSlot('default'))
            );
          },
        }));
    function Ye(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Ze(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var Qe = Je();
    delete Qe.href.default, delete Qe.to.default;
    var tn = (function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Ye(n, !0).forEach(function(e) {
                Ze(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Ye(n).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      })({}, Qe, {
        tag: { type: String, default: 'span' },
        variant: {
          type: String,
          default: function() {
            return Ct('BBadge', 'variant');
          },
        },
        pill: { type: Boolean, default: !1 },
      }),
      en = wt({
        components: {
          BBadge: r.extend({
            name: 'BBadge',
            functional: !0,
            props: tn,
            render: function(t, e) {
              var n = e.props,
                r = e.data,
                i = e.children;
              return t(
                n.href || n.to ? Xe : n.tag,
                ve(r, {
                  staticClass: 'badge',
                  class: [n.variant ? 'badge-'.concat(n.variant) : 'badge-secondary', { 'badge-pill': Boolean(n.pill), active: n.active, disabled: n.disabled }],
                  props: Ie(Qe, n),
                }),
                i
              );
            },
          }),
        },
      }),
      nn = /(<([^>]+)>)/gi,
      rn = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
        return String(t).replace(nn, '');
      },
      on = function(t, e) {
        return t ? { innerHTML: t } : e ? { textContent: e } : {};
      };
    function an(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function sn(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var ln = (function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? an(n, !0).forEach(function(e) {
                sn(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : an(n).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      })({}, Je(), { text: { type: String, default: null }, html: { type: String, default: null }, ariaCurrent: { type: String, default: 'location' } }),
      un = r.extend({
        name: 'BBreadcrumbLink',
        functional: !0,
        props: ln,
        render: function(t, e) {
          var n = e.props,
            r = e.data,
            i = e.children,
            o = n.active ? 'span' : Xe,
            a = { props: Ie(ln, n) };
          return n.active && (a.attrs = { 'aria-current': n.ariaCurrent }), i || (a.domProps = on(n.html, n.text)), t(o, ve(r, a), i);
        },
      }),
      cn = r.extend({
        name: 'BBreadcrumbItem',
        functional: !0,
        props: ln,
        render: function(t, e) {
          var n = e.props,
            r = e.data,
            i = e.children;
          return t('li', ve(r, { staticClass: 'breadcrumb-item', class: { active: n.active } }), [t(un, { props: n }, i)]);
        },
      });
    function fn(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function dn(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? fn(n, !0).forEach(function(e) {
              hn(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : fn(n).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return t;
    }
    function hn(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var pn = { items: { type: Array, default: null } },
      mn = wt({
        components: {
          BBreadcrumb: r.extend({
            name: 'BBreadcrumb',
            functional: !0,
            props: pn,
            render: function(t, e) {
              var n = e.props,
                r = e.data,
                i = e.children;
              if (c(n.items)) {
                var o = !1;
                i = n.items.map(function(e, r) {
                  x(e) || (e = { text: De(e) });
                  var i = e.active;
                  return i && (o = !0), i || o || (i = r + 1 === n.items.length), t(cn, { props: dn({}, e, { active: i }) });
                });
              }
              return t('ol', ve(r, { staticClass: 'breadcrumb' }), i);
            },
          }),
          BBreadcrumbItem: cn,
          BBreadcrumbLink: un,
        },
      });
    function vn(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function gn(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var bn = {
        block: { type: Boolean, default: !1 },
        disabled: { type: Boolean, default: !1 },
        size: {
          type: String,
          default: function() {
            return Ct('BButton', 'size');
          },
        },
        variant: {
          type: String,
          default: function() {
            return Ct('BButton', 'variant');
          },
        },
        type: { type: String, default: 'button' },
        tag: { type: String, default: 'button' },
        pill: { type: Boolean, default: !1 },
        squared: { type: Boolean, default: !1 },
        pressed: { type: Boolean, default: null },
      },
      yn = Je();
    delete yn.href.default, delete yn.to.default;
    var wn = y(yn),
      On = (function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? vn(n, !0).forEach(function(e) {
                gn(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : vn(n).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      })({}, yn, {}, bn),
      Sn = function(t) {
        'focusin' === t.type ? te(t.target, 'focus') : 'focusout' === t.type && ee(t.target, 'focus');
      },
      _n = function(t) {
        return Boolean(t.href || t.to || (t.tag && 'a' === String(t.tag).toLowerCase()));
      },
      kn = function(t) {
        return nt(t.pressed);
      },
      xn = function(t) {
        return !_n(t) && (!t.tag || 'button' === String(t.tag).toLowerCase());
      },
      Tn = function(t) {
        var e;
        return [
          'btn-'.concat(t.variant || Ct('BButton', 'variant')),
          ((e = {}),
          gn(e, 'btn-'.concat(t.size), Boolean(t.size)),
          gn(e, 'btn-block', t.block),
          gn(e, 'rounded-pill', t.pill),
          gn(e, 'rounded-0', t.squared && !t.pill),
          gn(e, 'disabled', t.disabled),
          gn(e, 'active', t.pressed),
          e),
        ];
      },
      Pn = function(t) {
        return _n(t) ? Ie(wn, t) : null;
      },
      jn = function(t, e) {
        var n = xn(t),
          r = _n(t),
          i = kn(t),
          o = (function(t) {
            return !_n(t) && !xn(t);
          })(t),
          a = e.attrs && e.attrs.role ? e.attrs.role : null,
          s = e.attrs ? e.attrs.tabindex : null;
        return (
          o && (s = '0'),
          {
            type: n && !r ? t.type : null,
            disabled: n ? t.disabled : null,
            role: o ? 'button' : a,
            'aria-disabled': o ? String(t.disabled) : null,
            'aria-pressed': i ? String(t.pressed) : null,
            autocomplete: i ? 'off' : null,
            tabindex: t.disabled && !n ? '-1' : s,
          }
        );
      },
      Cn = r.extend({
        name: 'BButton',
        functional: !0,
        props: On,
        render: function(t, e) {
          var n = e.props,
            r = e.data,
            i = e.listeners,
            o = e.children,
            a = kn(n),
            s = _n(n),
            l = {
              click: function(t) {
                n.disabled && at(t)
                  ? (t.stopPropagation(), t.preventDefault())
                  : a &&
                    i &&
                    i['update:pressed'] &&
                    d(i['update:pressed']).forEach(function(t) {
                      et(t) && t(!n.pressed);
                    });
              },
            };
          a && ((l.focusin = Sn), (l.focusout = Sn));
          var u = { staticClass: 'btn', class: Tn(n), props: Pn(n), attrs: jn(n, r), on: l };
          return t(s ? Xe : n.tag, ve(r, u), o);
        },
      }),
      Bn = wt({ components: { BButton: Cn, BBtn: Cn, BButtonClose: je, BBtnClose: je } });
    var $n = {
        vertical: { type: Boolean, default: !1 },
        size: {
          type: String,
          default: function() {
            return Ct('BButton', 'size');
          },
        },
        tag: { type: String, default: 'div' },
        ariaRole: { type: String, default: 'group' },
      },
      An = r.extend({
        name: 'BButtonGroup',
        functional: !0,
        props: $n,
        render: function(t, e) {
          var n,
            r,
            i,
            o = e.props,
            a = e.data,
            s = e.children;
          return t(
            o.tag,
            ve(a, {
              class:
                ((n = { 'btn-group': !o.vertical, 'btn-group-vertical': o.vertical }),
                (r = 'btn-group-'.concat(o.size)),
                (i = Boolean(o.size)),
                r in n ? Object.defineProperty(n, r, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (n[r] = i),
                n),
              attrs: { role: o.ariaRole },
            }),
            s
          );
        },
      }),
      En = wt({ components: { BButtonGroup: An, BBtnGroup: An } }),
      In = {
        SPACE: 32,
        ENTER: 13,
        ESC: 27,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        PAGEUP: 33,
        PAGEDOWN: 34,
        HOME: 36,
        END: 35,
        TAB: 9,
        SHIFT: 16,
        CTRL: 17,
        BACKSPACE: 8,
        ALT: 18,
        PAUSE: 19,
        BREAK: 19,
        INSERT: 45,
        INS: 45,
        DELETE: 46,
      },
      Dn = [
        '.btn:not(.disabled):not([disabled]):not(.dropdown-item)',
        '.form-control:not(.disabled):not([disabled])',
        'select:not(.disabled):not([disabled])',
        'input[type="checkbox"]:not(.disabled)',
        'input[type="radio"]:not(.disabled)',
      ].join(','),
      Nn = r.extend({
        name: 'BButtonToolbar',
        mixins: [Te],
        props: { justify: { type: Boolean, default: !1 }, keyNav: { type: Boolean, default: !1 } },
        mounted: function() {
          this.keyNav && this.getItems();
        },
        methods: {
          onFocusin: function(t) {
            t.target === this.$el && (t.preventDefault(), t.stopPropagation(), this.focusFirst(t));
          },
          stop: function(t) {
            t.preventDefault(), t.stopPropagation();
          },
          onKeydown: function(t) {
            if (this.keyNav) {
              var e = t.keyCode,
                n = t.shiftKey;
              e === In.UP || e === In.LEFT
                ? (this.stop(t), n ? this.focusFirst(t) : this.focusPrev(t))
                : (e !== In.DOWN && e !== In.RIGHT) || (this.stop(t), n ? this.focusLast(t) : this.focusNext(t));
            }
          },
          setItemFocus: function(t) {
            t && t.focus && t.focus();
          },
          focusFirst: function(t) {
            var e = this.getItems();
            this.setItemFocus(e[0]);
          },
          focusPrev: function(t) {
            var e = this.getItems(),
              n = e.indexOf(t.target);
            n > -1 && ((e = e.slice(0, n).reverse()), this.setItemFocus(e[0]));
          },
          focusNext: function(t) {
            var e = this.getItems(),
              n = e.indexOf(t.target);
            n > -1 && ((e = e.slice(n + 1)), this.setItemFocus(e[0]));
          },
          focusLast: function(t) {
            var e = this.getItems().reverse();
            this.setItemFocus(e[0]);
          },
          getItems: function() {
            var t = Kt(Dn, this.$el);
            return (
              t.forEach(function(t) {
                t.tabIndex = -1;
              }),
              t.filter(function(t) {
                return Ut(t);
              })
            );
          },
        },
        render: function(t) {
          return t(
            'div',
            {
              staticClass: 'btn-toolbar',
              class: { 'justify-content-between': this.justify },
              attrs: { role: 'toolbar', tabindex: this.keyNav ? '0' : null },
              on: this.keyNav ? { focusin: this.onFocusin, keydown: this.onKeydown } : {},
            },
            [this.normalizeSlot('default')]
          );
        },
      }),
      Fn = wt({ components: { BButtonToolbar: Nn, BBtnToolbar: Nn } }),
      Rn = function(t) {
        return rt(t) || (t = String(t)), (t = t.trim()).charAt(0).toUpperCase() + t.slice(1);
      },
      Ln = function(t, e) {
        return t + Rn(e);
      },
      Vn = function(t) {
        return (t = String(t)).charAt(0).toLowerCase() + t.slice(1);
      },
      Mn = function(t, e) {
        return Vn(e.replace(t, ''));
      },
      Hn = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ee;
        if (c(t)) return t.map(e);
        var n = {};
        for (var r in t) t.hasOwnProperty(r) && (n[e(r)] = x(t[r]) ? P(t[r]) : t[r]);
        return n;
      },
      zn = {
        props: {
          tag: { type: String, default: 'div' },
          bgVariant: { type: String, default: null },
          borderVariant: { type: String, default: null },
          textVariant: { type: String, default: null },
        },
      },
      Gn = { title: { type: String, default: '' }, titleTag: { type: String, default: 'h4' } },
      Un = r.extend({
        name: 'BCardTitle',
        functional: !0,
        props: Gn,
        render: function(t, e) {
          var n = e.props,
            r = e.data,
            i = e.children;
          return t(n.titleTag, ve(r, { staticClass: 'card-title' }), i || n.title);
        },
      }),
      Wn = {
        subTitle: { type: String, default: '' },
        subTitleTag: { type: String, default: 'h6' },
        subTitleTextVariant: {
          type: String,
          default: function() {
            return Ct('BCardSubTitle', 'subTitleTextVariant');
          },
        },
      },
      qn = r.extend({
        name: 'BCardSubTitle',
        functional: !0,
        props: Wn,
        render: function(t, e) {
          var n = e.props,
            r = e.data,
            i = e.children;
          return t(n.subTitleTag, ve(r, { staticClass: 'card-subtitle', class: [n.subTitleTextVariant ? 'text-'.concat(n.subTitleTextVariant) : null] }), i || n.subTitle);
        },
      });
    function Kn(t) {
      return (
        (function(t) {
          if (Array.isArray(t)) {
            for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
            return n;
          }
        })(t) ||
        (function(t) {
          if (Symbol.iterator in Object(t) || '[object Arguments]' === Object.prototype.toString.call(t)) return Array.from(t);
        })(t) ||
        (function() {
          throw new TypeError('Invalid attempt to spread non-iterable instance');
        })()
      );
    }
    function Jn(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Xn(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var Yn = (function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Jn(n, !0).forEach(function(e) {
                Xn(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Jn(n).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      })({}, Hn(zn.props, Ln.bind(null, 'body')), { bodyClass: { type: [String, Object, Array], default: null } }, Gn, {}, Wn, { overlay: { type: Boolean, default: !1 } }),
      Zn = r.extend({
        name: 'BCardBody',
        functional: !0,
        props: Yn,
        render: function(t, e) {
          var n,
            r = e.props,
            i = e.data,
            o = e.children,
            a = t(),
            s = t(),
            l = o || [t()];
          return (
            r.title && (a = t(Un, { props: Ie(Gn, r) })),
            r.subTitle && (s = t(qn, { props: Ie(Wn, r), class: ['mb-2'] })),
            t(
              r.bodyTag,
              ve(i, {
                staticClass: 'card-body',
                class: [
                  ((n = { 'card-img-overlay': r.overlay }),
                  Xn(n, 'bg-'.concat(r.bodyBgVariant), Boolean(r.bodyBgVariant)),
                  Xn(n, 'border-'.concat(r.bodyBorderVariant), Boolean(r.bodyBorderVariant)),
                  Xn(n, 'text-'.concat(r.bodyTextVariant), Boolean(r.bodyTextVariant)),
                  n),
                  r.bodyClass || {},
                ],
              }),
              [a, s].concat(Kn(l))
            )
          );
        },
      });
    function Qn(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function tr(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var er = (function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Qn(n, !0).forEach(function(e) {
                tr(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Qn(n).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      })({}, Hn(zn.props, Ln.bind(null, 'header')), {
        header: { type: String, default: null },
        headerHtml: { type: String, default: null },
        headerClass: { type: [String, Object, Array], default: null },
      }),
      nr = r.extend({
        name: 'BCardHeader',
        functional: !0,
        props: er,
        render: function(t, e) {
          var n,
            r = e.props,
            i = e.data,
            o = e.children;
          return t(
            r.headerTag,
            ve(i, {
              staticClass: 'card-header',
              class: [
                r.headerClass,
                ((n = {}),
                tr(n, 'bg-'.concat(r.headerBgVariant), Boolean(r.headerBgVariant)),
                tr(n, 'border-'.concat(r.headerBorderVariant), Boolean(r.headerBorderVariant)),
                tr(n, 'text-'.concat(r.headerTextVariant), Boolean(r.headerTextVariant)),
                n),
              ],
            }),
            o || [t('div', { domProps: on(r.headerHtml, r.header) })]
          );
        },
      });
    function rr(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function ir(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var or = (function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? rr(n, !0).forEach(function(e) {
                ir(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : rr(n).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      })({}, Hn(zn.props, Ln.bind(null, 'footer')), {
        footer: { type: String, default: null },
        footerHtml: { type: String, default: null },
        footerClass: { type: [String, Object, Array], default: null },
      }),
      ar = r.extend({
        name: 'BCardFooter',
        functional: !0,
        props: or,
        render: function(t, e) {
          var n,
            r = e.props,
            i = e.data,
            o = e.children;
          return t(
            r.footerTag,
            ve(i, {
              staticClass: 'card-footer',
              class: [
                r.footerClass,
                ((n = {}),
                ir(n, 'bg-'.concat(r.footerBgVariant), Boolean(r.footerBgVariant)),
                ir(n, 'border-'.concat(r.footerBorderVariant), Boolean(r.footerBorderVariant)),
                ir(n, 'text-'.concat(r.footerTextVariant), Boolean(r.footerTextVariant)),
                n),
              ],
            }),
            o || [t('div', { domProps: on(r.footerHtml, r.footer) })]
          );
        },
      }),
      sr = {
        src: { type: String, default: null, required: !0 },
        alt: { type: String, default: null },
        top: { type: Boolean, default: !1 },
        bottom: { type: Boolean, default: !1 },
        start: { type: Boolean, default: !1 },
        left: { type: Boolean, default: !1 },
        end: { type: Boolean, default: !1 },
        right: { type: Boolean, default: !1 },
        height: { type: [Number, String], default: null },
        width: { type: [Number, String], default: null },
      },
      lr = r.extend({
        name: 'BCardImg',
        functional: !0,
        props: sr,
        render: function(t, e) {
          var n = e.props,
            r = e.data,
            i = 'card-img';
          return (
            n.top ? (i += '-top') : n.right || n.end ? (i += '-right') : n.bottom ? (i += '-bottom') : (n.left || n.start) && (i += '-left'),
            t('img', ve(r, { class: [i], attrs: { src: n.src, alt: n.alt, height: n.height, width: n.width } }))
          );
        },
      });
    function ur(t) {
      return (
        (function(t) {
          if (Array.isArray(t)) {
            for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
            return n;
          }
        })(t) ||
        (function(t) {
          if (Symbol.iterator in Object(t) || '[object Arguments]' === Object.prototype.toString.call(t)) return Array.from(t);
        })(t) ||
        (function() {
          throw new TypeError('Invalid attempt to spread non-iterable instance');
        })()
      );
    }
    function cr(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function fr(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var dr = Hn(sr, Ln.bind(null, 'img'));
    dr.imgSrc.required = !1;
    var hr = (function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? cr(n, !0).forEach(function(e) {
                fr(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : cr(n).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      })({}, Yn, {}, er, {}, or, {}, dr, {}, Hn(zn.props), { align: { type: String, default: null }, noBody: { type: Boolean, default: !1 } }),
      pr = r.extend({
        name: 'BCard',
        functional: !0,
        props: hr,
        render: function(t, e) {
          var n,
            r = e.props,
            i = e.data,
            o = e.slots,
            a = e.scopedSlots,
            s = o(),
            l = a || {},
            u = t(),
            c = t(),
            f = t(),
            d = t(),
            h = t();
          if (r.imgSrc) {
            var p = t(lr, { props: Ie(dr, r, Mn.bind(null, 'img')) });
            r.imgBottom ? (h = p) : (u = p);
          }
          return (
            (r.header || ke('header', l, s)) && (c = t(nr, { props: Ie(er, r) }, xe('header', {}, l, s))),
            (f = xe('default', {}, l, s) || []),
            r.noBody || (f = [t(Zn, { props: Ie(Yn, r) }, ur(f))]),
            (r.footer || ke('footer', l, s)) && (d = t(ar, { props: Ie(or, r) }, xe('footer', {}, l, s))),
            t(
              r.tag,
              ve(i, {
                staticClass: 'card',
                class:
                  ((n = { 'flex-row': r.imgLeft || r.imgStart, 'flex-row-reverse': (r.imgRight || r.imgEnd) && !(r.imgLeft || r.imgStart) }),
                  fr(n, 'text-'.concat(r.align), Boolean(r.align)),
                  fr(n, 'bg-'.concat(r.bgVariant), Boolean(r.bgVariant)),
                  fr(n, 'border-'.concat(r.borderVariant), Boolean(r.borderVariant)),
                  fr(n, 'text-'.concat(r.textVariant), Boolean(r.textVariant)),
                  n),
              }),
              [u, c].concat(ur(f), [d, h])
            )
          );
        },
      }),
      mr = function t(e, n) {
        if (e === n) return !0;
        var r = ot(e),
          i = ot(n);
        if (r || i) return !(!r || !i) && e.getTime() === n.getTime();
        if (((r = c(e)), (i = c(n)), r || i))
          return (
            !(!r || !i) &&
            (function(t, e) {
              if (t.length !== e.length) return !1;
              for (var n = !0, r = 0; n && r < t.length; r++) n = mr(t[r], e[r]);
              return n;
            })(e, n)
          );
        if (((r = x(e)), (i = x(n)), r || i)) {
          if (!r || !i) return !1;
          if (y(e).length !== y(n).length) return !1;
          for (var o in e) {
            var a = e.hasOwnProperty(o),
              s = n.hasOwnProperty(o);
            if ((a && !s) || (!a && s) || !t(e[o], n[o])) return !1;
          }
        }
        return String(e) === String(n);
      },
      vr = mr;
    function gr(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }
    var br = '__bv__visibility_observer',
      yr = (function() {
        function t(e, n, r) {
          !(function(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this.el = e),
            (this.callback = n.callback),
            (this.margin = n.margin || 0),
            (this.once = n.once || !1),
            (this.observer = null),
            (this.visible = void 0),
            (this.doneOnce = !1),
            this.createObserver(r);
        }
        var e, n, r;
        return (
          (e = t),
          (n = [
            {
              key: 'createObserver',
              value: function(t) {
                var e = this;
                if ((this.observer && this.stop(), !this.doneOnce && et(this.callback))) {
                  try {
                    this.observer = new IntersectionObserver(this.handler.bind(this), { root: null, rootMargin: this.margin, threshold: 0 });
                  } catch (t) {
                    return (this.doneOnce = !0), (this.observer = void 0), void this.callback(null);
                  }
                  t.context.$nextTick(function() {
                    Lt(function() {
                      e.observer && e.observer.observe(e.el);
                    });
                  });
                }
              },
            },
            {
              key: 'handler',
              value: function(t) {
                var e = t ? t[0] : {},
                  n = Boolean(e.isIntersecting || e.intersectionRatio > 0);
                n !== this.visible && ((this.visible = n), this.callback(n), this.once && this.visible && ((this.doneOnce = !0), this.stop()));
              },
            },
            {
              key: 'stop',
              value: function() {
                var t = this.observer;
                t && t.disconnect && t.disconnect(), (this.observer = null);
              },
            },
          ]) && gr(e.prototype, n),
          r && gr(e, r),
          t
        );
      })(),
      wr = function(t) {
        var e = t[br];
        e && e.stop && e.stop(), delete t[br];
      },
      Or = function(t, e, n) {
        var r = e.value,
          i = e.modifiers,
          o = { margin: '0px', once: !1, callback: r };
        y(i).forEach(function(t) {
          /^\d+$/.test(t) ? (o.margin = ''.concat(t, 'px')) : 'once' === t.toLowerCase() && (o.once = !0);
        }),
          wr(t),
          (t[br] = new yr(t, o, n)),
          (t[br]._prevModifiers = P(i));
      },
      Sr = {
        bind: Or,
        componentUpdated: function(t, e, n) {
          var r = e.value,
            i = e.oldValue,
            o = e.modifiers;
          (o = P(o)), !t || (r === i && t[br] && vr(o, t[br]._prevModifiers)) || Or(t, { value: r, modifiers: o }, n);
        },
        unbind: function(t) {
          wr(t);
        },
      };
    function _r(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var kr =
        '<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',
      xr = {
        src: { type: String, default: null },
        srcset: { type: [String, Array], default: null },
        sizes: { type: [String, Array], default: null },
        alt: { type: String, default: null },
        width: { type: [Number, String], default: null },
        height: { type: [Number, String], default: null },
        block: { type: Boolean, default: !1 },
        fluid: { type: Boolean, default: !1 },
        fluidGrow: { type: Boolean, default: !1 },
        rounded: { type: [Boolean, String], default: !1 },
        thumbnail: { type: Boolean, default: !1 },
        left: { type: Boolean, default: !1 },
        right: { type: Boolean, default: !1 },
        center: { type: Boolean, default: !1 },
        blank: { type: Boolean, default: !1 },
        blankColor: {
          type: String,
          default: function() {
            return Ct('BImg', 'blankColor');
          },
        },
      },
      Tr = r.extend({
        name: 'BImg',
        functional: !0,
        props: xr,
        render: function(t, e) {
          var n,
            r = e.props,
            i = e.data,
            o = r.src,
            a = parseInt(r.width, 10) ? parseInt(r.width, 10) : null,
            s = parseInt(r.height, 10) ? parseInt(r.height, 10) : null,
            l = null,
            u = r.block,
            c = d(r.srcset)
              .filter(Boolean)
              .join(','),
            f = d(r.sizes)
              .filter(Boolean)
              .join(',');
          return (
            r.blank &&
              (!s && Boolean(a) ? (s = a) : !a && Boolean(s) && (a = s),
              a || s || ((a = 1), (s = 1)),
              (o = (function(t, e, n) {
                var r = encodeURIComponent(
                  kr
                    .replace('%{w}', String(t))
                    .replace('%{h}', String(e))
                    .replace('%{f}', n)
                );
                return 'data:image/svg+xml;charset=UTF-8,'.concat(r);
              })(a, s, r.blankColor || 'transparent')),
              (c = null),
              (f = null)),
            r.left ? (l = 'float-left') : r.right ? (l = 'float-right') : r.center && ((l = 'mx-auto'), (u = !0)),
            t(
              'img',
              ve(i, {
                attrs: { src: o, alt: r.alt, width: a ? String(a) : null, height: s ? String(s) : null, srcset: c || null, sizes: f || null },
                class:
                  ((n = { 'img-thumbnail': r.thumbnail, 'img-fluid': r.fluid || r.fluidGrow, 'w-100': r.fluidGrow, rounded: '' === r.rounded || !0 === r.rounded }),
                  _r(n, 'rounded-'.concat(r.rounded), rt(r.rounded) && '' !== r.rounded),
                  _r(n, l, Boolean(l)),
                  _r(n, 'd-block', u),
                  n),
              })
            )
          );
        },
      });
    function Pr(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var jr = {
        src: { type: String, default: null, required: !0 },
        srcset: { type: [String, Array], default: null },
        sizes: { type: [String, Array], default: null },
        alt: { type: String, default: null },
        width: { type: [Number, String], default: null },
        height: { type: [Number, String], default: null },
        blankSrc: { type: String, default: null },
        blankColor: {
          type: String,
          default: function() {
            return Ct('BImgLazy', 'blankColor');
          },
        },
        blankWidth: { type: [Number, String], default: null },
        blankHeight: { type: [Number, String], default: null },
        show: { type: Boolean, default: !1 },
        fluid: { type: Boolean, default: !1 },
        fluidGrow: { type: Boolean, default: !1 },
        block: { type: Boolean, default: !1 },
        thumbnail: { type: Boolean, default: !1 },
        rounded: { type: [Boolean, String], default: !1 },
        left: { type: Boolean, default: !1 },
        right: { type: Boolean, default: !1 },
        center: { type: Boolean, default: !1 },
        offset: { type: [Number, String], default: 360 },
      },
      Cr = r.extend({
        name: 'BImgLazy',
        directives: { bVisible: Sr },
        props: jr,
        data: function() {
          return { isShown: this.show };
        },
        computed: {
          computedSrc: function() {
            return !this.blankSrc || this.isShown ? this.src : this.blankSrc;
          },
          computedBlank: function() {
            return !(this.isShown || this.blankSrc);
          },
          computedWidth: function() {
            return this.isShown ? this.width : this.blankWidth || this.width;
          },
          computedHeight: function() {
            return this.isShown ? this.height : this.blankHeight || this.height;
          },
          computedSrcset: function() {
            var t = d(this.srcset)
              .filter(Boolean)
              .join(',');
            return !this.blankSrc || this.isShown ? t : null;
          },
          computedSizes: function() {
            var t = d(this.sizes)
              .filter(Boolean)
              .join(',');
            return !this.blankSrc || this.isShown ? t : null;
          },
        },
        watch: {
          show: function(t, e) {
            if (t !== e) {
              var n = !i.c || t;
              (this.isShown = n), n !== t && this.$nextTick(this.updateShowProp);
            }
          },
          isShown: function(t, e) {
            t !== e && this.updateShowProp();
          },
        },
        mounted: function() {
          this.isShown = !i.c || this.show;
        },
        methods: {
          updateShowProp: function() {
            this.$emit('update:show', this.isShown);
          },
          doShow: function(t) {
            (!t && null !== t) || this.isShown || (this.isShown = !0);
          },
        },
        render: function(t) {
          var e,
            n = [];
          this.isShown || n.push({ name: 'b-visible', value: this.doShow, modifiers: ((e = {}), Pr(e, ''.concat(parseInt(this.offset, 10) || 0), !0), Pr(e, 'once', !0), e) });
          return t(Tr, {
            directives: n,
            props: {
              src: this.computedSrc,
              blank: this.computedBlank,
              width: this.computedWidth,
              height: this.computedHeight,
              srcset: this.computedSrcset || null,
              sizes: this.computedSizes || null,
              alt: this.alt,
              blankColor: this.blankColor,
              fluid: this.fluid,
              fluidGrow: this.fluidGrow,
              block: this.block,
              thumbnail: this.thumbnail,
              rounded: this.rounded,
              left: this.left,
              right: this.right,
              center: this.center,
            },
          });
        },
      });
    function Br(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function $r(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Br(n, !0).forEach(function(e) {
              Ar(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Br(n).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return t;
    }
    function Ar(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var Er = $r({}, j(jr, ['left', 'right', 'center', 'block', 'rounded', 'thumbnail', 'fluid', 'fluidGrow']), {
        top: { type: Boolean, default: !1 },
        bottom: { type: Boolean, default: !1 },
        start: { type: Boolean, default: !1 },
        left: { type: Boolean, default: !1 },
        end: { type: Boolean, default: !1 },
        right: { type: Boolean, default: !1 },
      }),
      Ir = { textTag: { type: String, default: 'p' } },
      Dr = { tag: { type: String, default: 'div' }, deck: { type: Boolean, default: !1 }, columns: { type: Boolean, default: !1 } },
      Nr = wt({
        components: {
          BCard: pr,
          BCardHeader: nr,
          BCardBody: Zn,
          BCardTitle: Un,
          BCardSubTitle: qn,
          BCardFooter: ar,
          BCardImg: lr,
          BCardImgLazy: r.extend({
            name: 'BCardImgLazy',
            functional: !0,
            props: Er,
            render: function(t, e) {
              var n = e.props,
                r = e.data,
                i = 'card-img';
              n.top ? (i += '-top') : n.right || n.end ? (i += '-right') : n.bottom ? (i += '-bottom') : (n.left || n.start) && (i += '-left');
              var o = $r({}, n, { left: !1, right: !1, center: !1 });
              return t(Cr, ve(r, { class: [i], props: o }));
            },
          }),
          BCardText: r.extend({
            name: 'BCardText',
            functional: !0,
            props: Ir,
            render: function(t, e) {
              var n = e.props,
                r = e.data,
                i = e.children;
              return t(n.textTag, ve(r, { staticClass: 'card-text' }), i);
            },
          }),
          BCardGroup: r.extend({
            name: 'BCardGroup',
            functional: !0,
            props: Dr,
            render: function(t, e) {
              var n = e.props,
                r = e.data,
                i = e.children,
                o = 'card-group';
              return n.deck ? (o = 'card-deck') : n.columns && (o = 'card-columns'), t(n.tag, ve(r, { class: o }), i);
            },
          }),
        },
      }),
      Fr = function() {};
    function Rr(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Lr(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var Vr = function(t, e, n) {
        if (((t = t ? t.$el || t : null), !Gt(t))) return null;
        if (((r = 'observeDom'), !i.d && (o(''.concat(r, ': Requires MutationObserver support.')), 1))) return null;
        var r,
          a = new Vt(function(t) {
            for (var n = !1, r = 0; r < t.length && !n; r++) {
              var i = t[r],
                o = i.type,
                a = i.target;
              'characterData' === o && a.nodeType === Node.TEXT_NODE
                ? (n = !0)
                : 'attributes' === o
                ? (n = !0)
                : 'childList' === o && (i.addedNodes.length > 0 || i.removedNodes.length > 0) && (n = !0);
            }
            n && e();
          });
        return (
          a.observe(
            t,
            (function(t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? Rr(n, !0).forEach(function(e) {
                      Lr(t, e, n[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                  : Rr(n).forEach(function(e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
              }
              return t;
            })({ childList: !0, subtree: !0 }, n)
          ),
          a
        );
      },
      Mr = {
        props: { id: { type: String, default: null } },
        data: function() {
          return { localId_: null };
        },
        computed: {
          safeId: function() {
            var t = this.id || this.localId_;
            return function(e) {
              return t ? ((e = String(e || '').replace(/\s+/g, '_')) ? t + '_' + e : t) : null;
            };
          },
        },
        mounted: function() {
          var t = this;
          this.$nextTick(function() {
            t.localId_ = '__BVID__'.concat(t._uid);
          });
        },
      },
      Hr = { next: { dirClass: 'carousel-item-left', overlayClass: 'carousel-item-next' }, prev: { dirClass: 'carousel-item-right', overlayClass: 'carousel-item-prev' } },
      zr = { TOUCH: 'touch', PEN: 'pen' },
      Gr = { WebkitTransition: 'webkitTransitionEnd', MozTransition: 'transitionend', OTransition: 'otransitionend oTransitionEnd', transition: 'transitionend' },
      Ur = { passive: !0, capture: !1 },
      Wr = r.extend({
        name: 'BCarousel',
        mixins: [Mr, Te],
        provide: function() {
          return { bvCarousel: this };
        },
        model: { prop: 'value', event: 'input' },
        props: {
          labelPrev: {
            type: String,
            default: function() {
              return Ct('BCarousel', 'labelPrev');
            },
          },
          labelNext: {
            type: String,
            default: function() {
              return Ct('BCarousel', 'labelNext');
            },
          },
          labelGotoSlide: {
            type: String,
            default: function() {
              return Ct('BCarousel', 'labelGotoSlide');
            },
          },
          labelIndicators: {
            type: String,
            default: function() {
              return Ct('BCarousel', 'labelIndicators');
            },
          },
          interval: { type: Number, default: 5e3 },
          indicators: { type: Boolean, default: !1 },
          controls: { type: Boolean, default: !1 },
          noAnimation: { type: Boolean, default: !1 },
          fade: { type: Boolean, default: !1 },
          noWrap: { type: Boolean, default: !1 },
          noTouch: { type: Boolean, default: !1 },
          noHoverPause: { type: Boolean, default: !1 },
          imgWidth: { type: [Number, String] },
          imgHeight: { type: [Number, String] },
          background: { type: String },
          value: { type: Number, default: 0 },
        },
        data: function() {
          return {
            index: this.value || 0,
            isSliding: !1,
            transitionEndEvent: null,
            slides: [],
            direction: null,
            isPaused: !(parseInt(this.interval, 10) > 0),
            touchStartX: 0,
            touchDeltaX: 0,
          };
        },
        computed: {
          numSlides: function() {
            return this.slides.length;
          },
        },
        watch: {
          value: function(t, e) {
            t !== e && this.setSlide(parseInt(t, 10) || 0);
          },
          interval: function(t, e) {
            t !== e && (t ? (this.pause(!0), this.start(!1)) : this.pause(!1));
          },
          isPaused: function(t, e) {
            t !== e && this.$emit(t ? 'paused' : 'unpaused');
          },
          index: function(t, e) {
            t === e || this.isSliding || this.doSlide(t, e);
          },
        },
        created: function() {
          (this._intervalId = null), (this._animationTimeout = null), (this._touchTimeout = null), (this.isPaused = !(parseInt(this.interval, 10) > 0));
        },
        mounted: function() {
          (this.transitionEndEvent =
            (function(t) {
              for (var e in Gr) if (!Z(t.style[e])) return Gr[e];
              return null;
            })(this.$el) || null),
            this.updateSlides(),
            Vr(this.$refs.inner, this.updateSlides.bind(this), { subtree: !1, childList: !0, attributes: !0, attributeFilter: ['id'] });
        },
        beforeDestroy: function() {
          clearTimeout(this._animationTimeout),
            clearTimeout(this._touchTimeout),
            clearInterval(this._intervalId),
            (this._intervalId = null),
            (this._animationTimeout = null),
            (this._touchTimeout = null);
        },
        methods: {
          setSlide: function(t) {
            var e = this,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (!(i.j && document.visibilityState && document.hidden)) {
              var r = this.noWrap,
                o = this.numSlides;
              (t = Math.floor(t)),
                0 !== o &&
                  (this.isSliding
                    ? this.$once('sliding-end', function() {
                        return e.setSlide(t, n);
                      })
                    : ((this.direction = n),
                      (this.index = t >= o ? (r ? o - 1 : 0) : t < 0 ? (r ? 0 : o - 1) : t),
                      r && this.index !== t && this.index !== this.value && this.$emit('input', this.index)));
            }
          },
          prev: function() {
            this.setSlide(this.index - 1, 'prev');
          },
          next: function() {
            this.setSlide(this.index + 1, 'next');
          },
          pause: function(t) {
            t || (this.isPaused = !0), this._intervalId && (clearInterval(this._intervalId), (this._intervalId = null));
          },
          start: function(t) {
            t || (this.isPaused = !1),
              this._intervalId && (clearInterval(this._intervalId), (this._intervalId = null)),
              this.interval && this.numSlides > 1 && (this._intervalId = setInterval(this.next, Math.max(1e3, this.interval)));
          },
          restart: function(t) {
            this.$el.contains(document.activeElement) || this.start();
          },
          doSlide: function(t, e) {
            var n = this,
              r = Boolean(this.interval),
              i = this.calcDirection(this.direction, e, t),
              o = i.overlayClass,
              a = i.dirClass,
              s = this.slides[e],
              l = this.slides[t];
            if (s && l) {
              if (((this.isSliding = !0), r && this.pause(!1), this.$emit('sliding-start', t), this.$emit('input', this.index), this.noAnimation))
                te(l, 'active'),
                  ee(s, 'active'),
                  (this.isSliding = !1),
                  this.$nextTick(function() {
                    return n.$emit('sliding-end', t);
                  });
              else {
                te(l, o), qt(l), te(s, a), te(l, a);
                var u = !1,
                  c = function e(r) {
                    if (!u) {
                      if (((u = !0), n.transitionEndEvent))
                        n.transitionEndEvent.split(/\s+/).forEach(function(t) {
                          return zt(s, t, e, Ur);
                        });
                      (n._animationTimeout = null),
                        ee(l, a),
                        ee(l, o),
                        te(l, 'active'),
                        ee(s, 'active'),
                        ee(s, a),
                        ee(s, o),
                        re(s, 'aria-current', 'false'),
                        re(l, 'aria-current', 'true'),
                        re(s, 'aria-hidden', 'true'),
                        re(l, 'aria-hidden', 'false'),
                        (n.isSliding = !1),
                        (n.direction = null),
                        n.$nextTick(function() {
                          return n.$emit('sliding-end', t);
                        });
                    }
                  };
                if (this.transitionEndEvent)
                  this.transitionEndEvent.split(/\s+/).forEach(function(t) {
                    return Ht(s, t, c, Ur);
                  });
                this._animationTimeout = setTimeout(c, 650);
              }
              r && this.start(!1);
            }
          },
          updateSlides: function() {
            this.pause(!0), (this.slides = Kt('.carousel-item', this.$refs.inner));
            var t = this.slides.length,
              e = Math.max(0, Math.min(Math.floor(this.index), t - 1));
            this.slides.forEach(function(n, r) {
              var i = r + 1;
              r === e ? (te(n, 'active'), re(n, 'aria-current', 'true')) : (ee(n, 'active'), re(n, 'aria-current', 'false')),
                re(n, 'aria-posinset', String(i)),
                re(n, 'aria-setsize', String(t));
            }),
              this.setSlide(e),
              this.start(this.isPaused);
          },
          calcDirection: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            return t ? Hr[t] : n > e ? Hr.next : Hr.prev;
          },
          handleClick: function(t, e) {
            var n = t.keyCode;
            ('click' !== t.type && n !== In.SPACE && n !== In.ENTER) || (t.preventDefault(), t.stopPropagation(), e());
          },
          handleSwipe: function() {
            var t = Math.abs(this.touchDeltaX);
            if (!(t <= 40)) {
              var e = t / this.touchDeltaX;
              (this.touchDeltaX = 0), e > 0 ? this.prev() : e < 0 && this.next();
            }
          },
          touchStart: function(t) {
            i.f && zr[t.pointerType.toUpperCase()] ? (this.touchStartX = t.clientX) : i.f || (this.touchStartX = t.touches[0].clientX);
          },
          touchMove: function(t) {
            t.touches && t.touches.length > 1 ? (this.touchDeltaX = 0) : (this.touchDeltaX = t.touches[0].clientX - this.touchStartX);
          },
          touchEnd: function(t) {
            i.f && zr[t.pointerType.toUpperCase()] && (this.touchDeltaX = t.clientX - this.touchStartX),
              this.handleSwipe(),
              this.pause(!1),
              this._touchTimeout && clearTimeout(this._touchTimeout),
              (this._touchTimeout = setTimeout(this.start, 500 + Math.max(1e3, this.interval)));
          },
        },
        render: function(t) {
          var e = this,
            n = t('div', { ref: 'inner', class: ['carousel-inner'], attrs: { id: this.safeId('__BV_inner_'), role: 'list' } }, [this.normalizeSlot('default')]),
            r = t();
          if (this.controls) {
            var o = function(t) {
                e.isSliding ? t.preventDefault() : e.handleClick(t, e.prev);
              },
              a = function(t) {
                e.isSliding ? t.preventDefault() : e.handleClick(t, e.next);
              };
            r = [
              t(
                'a',
                {
                  class: ['carousel-control-prev'],
                  attrs: { href: '#', role: 'button', 'aria-controls': this.safeId('__BV_inner_'), 'aria-disabled': this.isSliding ? 'true' : null },
                  on: { click: o, keydown: o },
                },
                [t('span', { class: ['carousel-control-prev-icon'], attrs: { 'aria-hidden': 'true' } }), t('span', { class: ['sr-only'] }, [this.labelPrev])]
              ),
              t(
                'a',
                {
                  class: ['carousel-control-next'],
                  attrs: { href: '#', role: 'button', 'aria-controls': this.safeId('__BV_inner_'), 'aria-disabled': this.isSliding ? 'true' : null },
                  on: { click: a, keydown: a },
                },
                [t('span', { class: ['carousel-control-next-icon'], attrs: { 'aria-hidden': 'true' } }), t('span', { class: ['sr-only'] }, [this.labelNext])]
              ),
            ];
          }
          var s = t(
              'ol',
              {
                class: ['carousel-indicators'],
                directives: [{ name: 'show', rawName: 'v-show', value: this.indicators, expression: 'indicators' }],
                attrs: {
                  id: this.safeId('__BV_indicators_'),
                  'aria-hidden': this.indicators ? 'false' : 'true',
                  'aria-label': this.labelIndicators,
                  'aria-owns': this.safeId('__BV_inner_'),
                },
              },
              this.slides.map(function(n, r) {
                return t('li', {
                  key: 'slide_'.concat(r),
                  class: { active: r === e.index },
                  attrs: {
                    role: 'button',
                    id: e.safeId('__BV_indicator_'.concat(r + 1, '_')),
                    tabindex: e.indicators ? '0' : '-1',
                    'aria-current': r === e.index ? 'true' : 'false',
                    'aria-label': ''.concat(e.labelGotoSlide, ' ').concat(r + 1),
                    'aria-describedby': e.slides[r].id || null,
                    'aria-controls': e.safeId('__BV_inner_'),
                  },
                  on: {
                    click: function(t) {
                      e.handleClick(t, function() {
                        e.setSlide(r);
                      });
                    },
                    keydown: function(t) {
                      e.handleClick(t, function() {
                        e.setSlide(r);
                      });
                    },
                  },
                });
              })
            ),
            l = {
              mouseenter: this.noHoverPause ? Fr : this.pause,
              mouseleave: this.noHoverPause ? Fr : this.restart,
              focusin: this.pause,
              focusout: this.restart,
              keydown: function(t) {
                if (!/input|textarea/i.test(t.target.tagName)) {
                  var n = t.keyCode;
                  (n !== In.LEFT && n !== In.RIGHT) || (t.preventDefault(), t.stopPropagation(), e[n === In.LEFT ? 'prev' : 'next']());
                }
              },
            };
          return (
            !this.noTouch &&
              i.h &&
              (i.f
                ? ((l['&pointerdown'] = this.touchStart), (l['&pointerup'] = this.touchEnd))
                : ((l['&touchstart'] = this.touchStart), (l['&touchmove'] = this.touchMove), (l['&touchend'] = this.touchEnd))),
            t(
              'div',
              {
                staticClass: 'carousel',
                class: { slide: !this.noAnimation, 'carousel-fade': !this.noAnimation && this.fade, 'pointer-event': !this.noTouch && i.h && i.f },
                style: { background: this.background },
                attrs: { role: 'region', id: this.safeId(), 'aria-busy': this.isSliding ? 'true' : 'false' },
                on: l,
              },
              [n, r, s]
            )
          );
        },
      }),
      qr = {
        imgSrc: { type: String },
        imgAlt: { type: String },
        imgWidth: { type: [Number, String] },
        imgHeight: { type: [Number, String] },
        imgBlank: { type: Boolean, default: !1 },
        imgBlankColor: { type: String, default: 'transparent' },
        contentVisibleUp: { type: String },
        contentTag: { type: String, default: 'div' },
        caption: { type: String },
        captionHtml: { type: String },
        captionTag: { type: String, default: 'h3' },
        text: { type: String },
        textHtml: { type: String },
        textTag: { type: String, default: 'p' },
        background: { type: String },
      },
      Kr = wt({
        components: {
          BCarousel: Wr,
          BCarouselSlide: r.extend({
            name: 'BCarouselSlide',
            mixins: [Mr, Te],
            inject: {
              bvCarousel: {
                default: function() {
                  return { noTouch: !0 };
                },
              },
            },
            props: qr,
            computed: {
              contentClasses: function() {
                return [this.contentVisibleUp ? 'd-none' : '', this.contentVisibleUp ? 'd-'.concat(this.contentVisibleUp, '-block') : ''];
              },
              computedWidth: function() {
                return this.imgWidth || this.bvCarousel.imgWidth || null;
              },
              computedHeight: function() {
                return this.imgHeight || this.bvCarousel.imgHeight || null;
              },
            },
            render: function(t) {
              var e = !this.bvCarousel.noTouch && i.h,
                n = this.normalizeSlot('img');
              n ||
                (!this.imgSrc && !this.imgBlank) ||
                (n = t(Tr, {
                  props: {
                    fluidGrow: !0,
                    block: !0,
                    src: this.imgSrc,
                    blank: this.imgBlank,
                    blankColor: this.imgBlankColor,
                    width: this.computedWidth,
                    height: this.computedHeight,
                    alt: this.imgAlt,
                  },
                  on: e
                    ? {
                        dragstart: function(t) {
                          t.preventDefault();
                        },
                      }
                    : {},
                })),
                n || (n = t());
              var r = t(),
                o = [
                  !(!this.caption && !this.captionHtml) && t(this.captionTag, { domProps: on(this.captionHtml, this.caption) }),
                  !(!this.text && !this.textHtml) && t(this.textTag, { domProps: on(this.textHtml, this.text) }),
                  this.normalizeSlot('default') || !1,
                ];
              return (
                o.some(Boolean) &&
                  (r = t(
                    this.contentTag,
                    { staticClass: 'carousel-caption', class: this.contentClasses },
                    o.map(function(e) {
                      return e || t();
                    })
                  )),
                t(
                  'div',
                  { staticClass: 'carousel-item', style: { background: this.background || this.bvCarousel.background || null }, attrs: { id: this.safeId(), role: 'listitem' } },
                  [n, r]
                )
              );
            },
          }),
        },
      }),
      Jr = {
        methods: {
          listenOnRoot: function(t, e) {
            var n = this;
            return (
              this.$root.$on(t, e),
              this.$on('hook:beforeDestroy', function() {
                n.$root.$off(t, e);
              }),
              this
            );
          },
          listenOnRootOnce: function(t, e) {
            var n = this;
            return (
              this.$root.$once(t, e),
              this.$on('hook:beforeDestroy', function() {
                n.$root.$off(t, e);
              }),
              this
            );
          },
          emitOnRoot: function(t) {
            for (var e, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
            return (e = this.$root).$emit.apply(e, [t].concat(r)), this;
          },
        },
      },
      Xr = { passive: !0, capture: !1 },
      Yr = r.extend({
        name: 'BCollapse',
        mixins: [Mr, Jr, Te],
        model: { prop: 'visible', event: 'input' },
        props: {
          isNav: { type: Boolean, default: !1 },
          accordion: { type: String, default: null },
          visible: { type: Boolean, default: !1 },
          tag: { type: String, default: 'div' },
        },
        data: function() {
          return { show: this.visible, transitioning: !1 };
        },
        computed: {
          classObject: function() {
            return { 'navbar-collapse': this.isNav, collapse: !this.transitioning, show: this.show && !this.transitioning };
          },
        },
        watch: {
          visible: function(t) {
            t !== this.show && (this.show = t);
          },
          show: function(t, e) {
            t !== e && this.emitState();
          },
        },
        created: function() {
          this.show = this.visible;
        },
        mounted: function() {
          var t = this;
          (this.show = this.visible),
            this.listenOnRoot('bv::toggle::collapse', this.handleToggleEvt),
            this.listenOnRoot('bv::collapse::accordion', this.handleAccordionEvt),
            this.isNav && (this.setWindowEvents(!0), this.handleResize()),
            this.$nextTick(function() {
              t.emitState();
            }),
            this.listenOnRoot('bv::request::collapse::state', function(e) {
              e === t.safeId() && t.$nextTick(t.emitSync);
            });
        },
        updated: function() {
          this.emitSync();
        },
        deactivated: function() {
          this.isNav && this.setWindowEvents(!1);
        },
        activated: function() {
          this.isNav && this.setWindowEvents(!0), this.emitSync();
        },
        beforeDestroy: function() {
          (this.show = !1), this.isNav && i.j && this.setWindowEvents(!1);
        },
        methods: {
          setWindowEvents: function(t) {
            var e = t ? Ht : zt;
            e(window, 'resize', this.handleResize, Xr), e(window, 'orientationchange', this.handleResize, Xr);
          },
          toggle: function() {
            this.show = !this.show;
          },
          onEnter: function(t) {
            (t.style.height = 0), qt(t), (t.style.height = t.scrollHeight + 'px'), (this.transitioning = !0), this.$emit('show');
          },
          onAfterEnter: function(t) {
            (t.style.height = null), (this.transitioning = !1), this.$emit('shown');
          },
          onLeave: function(t) {
            (t.style.height = 'auto'),
              (t.style.display = 'block'),
              (t.style.height = se(t).height + 'px'),
              qt(t),
              (this.transitioning = !0),
              (t.style.height = 0),
              this.$emit('hide');
          },
          onAfterLeave: function(t) {
            (t.style.height = null), (this.transitioning = !1), this.$emit('hidden');
          },
          emitState: function() {
            this.$emit('input', this.show),
              this.$root.$emit('bv::collapse::state', this.safeId(), this.show),
              this.accordion && this.show && this.$root.$emit('bv::collapse::accordion', this.safeId(), this.accordion);
          },
          emitSync: function() {
            this.$root.$emit('bv::collapse::sync::state', this.safeId(), this.show);
          },
          checkDisplayBlock: function() {
            var t = ne(this.$el, 'show');
            ee(this.$el, 'show');
            var e = 'block' === le(this.$el).display;
            return t && te(this.$el, 'show'), e;
          },
          clickHandler: function(t) {
            var e = t.target;
            this.isNav &&
              e &&
              'block' === le(this.$el).display &&
              (Xt(e, '.nav-link,.dropdown-item') || Yt('.nav-link,.dropdown-item', e)) &&
              (this.checkDisplayBlock() || (this.show = !1));
          },
          handleToggleEvt: function(t) {
            t === this.safeId() && this.toggle();
          },
          handleAccordionEvt: function(t, e) {
            this.accordion && e === this.accordion && (t === this.safeId() ? this.show || this.toggle() : this.show && this.toggle());
          },
          handleResize: function() {
            this.show = 'block' === le(this.$el).display;
          },
        },
        render: function(t) {
          var e = t(this.tag, { class: this.classObject, directives: [{ name: 'show', value: this.show }], attrs: { id: this.safeId() }, on: { click: this.clickHandler } }, [
            this.normalizeSlot('default'),
          ]);
          return t(
            'transition',
            {
              props: { enterClass: '', enterActiveClass: 'collapsing', enterToClass: '', leaveClass: '', leaveActiveClass: 'collapsing', leaveToClass: '' },
              on: { enter: this.onEnter, afterEnter: this.onAfterEnter, leave: this.onLeave, afterLeave: this.onAfterLeave },
            },
            [e]
          );
        },
      }),
      Zr = { hover: !0, click: !0, focus: !0 },
      Qr = '__BV_boundEventListeners__',
      ti = function(t) {
        var e = y(t.modifiers || {}).filter(function(t) {
          return !Zr[t];
        });
        return t.value && e.push(t.value), e;
      },
      ei = function(t, e, n, r) {
        var i = ti(e),
          o = function() {
            r({ targets: i, vnode: t });
          };
        return (
          y(Zr).forEach(function(r) {
            if (n[r] || e.modifiers[r]) {
              Ht(t.elm, r, o);
              var i = t.elm[Qr] || {};
              (i[r] = i[r] || []), i[r].push(o), (t.elm[Qr] = i);
            }
          }),
          i
        );
      },
      ni = function(t, e, n) {
        y(Zr).forEach(function(r) {
          if (n[r] || e.modifiers[r]) {
            var i = t.elm[Qr] && t.elm[Qr][r];
            i &&
              (i.forEach(function(e) {
                return zt(t.elm, r, e);
              }),
              delete t.elm[Qr][r]);
          }
        });
      },
      ri = { click: !0 },
      ii = '__BV_toggle__',
      oi = function(t, e) {
        (t[e] = null), delete t[e];
      },
      ai = function(t) {
        var e = t.targets,
          n = t.vnode;
        e.forEach(function(t) {
          n.context.$root.$emit('bv::toggle::collapse', t);
        });
      },
      si = function(t, e, n) {
        if (i.j) {
          if (!vr(ti(e), t.__BV_toggle_TARGETS__)) {
            ni(n, e, ri);
            var r = ei(n, e, ri, ai);
            (t.__BV_toggle_TARGETS__ = r),
              (t.__BV_toggle_CONTROLS__ = r.join(' ')),
              re(t, 'aria-controls', t.__BV_toggle_CONTROLS__),
              r.forEach(function(t) {
                n.context.$root.$emit('bv::request::collapse::state', t);
              });
          }
          !0 === t.__BV_toggle_STATE__
            ? (te(t, 'collapsed'), re(t, 'aria-expanded', 'true'))
            : !1 === t.__BV_toggle_STATE__ && (ee(t, 'collapsed'), re(t, 'aria-expanded', 'false')),
            re(t, 'aria-controls', t.__BV_toggle_CONTROLS__);
        }
      },
      li = {
        bind: function(t, e, n) {
          var r = ei(n, e, ri, ai);
          if (i.j && n.context && r.length > 0) {
            (t.__BV_toggle_TARGETS__ = r),
              (t.__BV_toggle_CONTROLS__ = r.join(' ')),
              (t.__BV_toggle_STATE__ = !1),
              re(t, 'aria-controls', t.__BV_toggle_CONTROLS__),
              re(t, 'aria-expanded', 'false'),
              'BUTTON' === t.tagName || ae(t, 'role') || re(t, 'role', 'button');
            (t[ii] = function(e, n) {
              -1 !== (t.__BV_toggle_TARGETS__ || []).indexOf(e) &&
                (re(t, 'aria-expanded', n ? 'true' : 'false'), (t.__BV_toggle_STATE__ = n), n ? ee(t, 'collapsed') : te(t, 'collapsed'));
            }),
              n.context.$root.$on('bv::collapse::state', t[ii]),
              n.context.$root.$on('bv::collapse::sync::state', t[ii]);
          }
        },
        componentUpdated: si,
        updated: si,
        unbind: function(t, e, n) {
          ni(n, e, ri),
            t[ii] && (n.context.$root.$off('bv::collapse::state', t[ii]), n.context.$root.$off('bv::collapse::sync::state', t[ii])),
            oi(t, ii),
            oi(t, '__BV_toggle_STATE__'),
            oi(t, '__BV_toggle_CONTROLS__'),
            oi(t, '__BV_toggle_TARGETS__'),
            ee(t, 'collapsed'),
            ie(t, 'aria-expanded'),
            ie(t, 'aria-controls'),
            ie(t, 'role');
        },
      },
      ui = wt({ components: { BCollapse: Yr }, directives: { VBToggle: li } }),
      ci = n(114);
    function fi(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }
    var di = (function() {
        function t(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (
            ((function(t, e) {
              if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
            })(this, t),
            !e)
          )
            throw new TypeError("Failed to construct '".concat(this.constructor.name, "'. 1 argument required, ").concat(arguments.length, ' given.'));
          g(this, t.Defaults, this.constructor.Defaults, n, { type: e }),
            w(this, { type: C(), cancelable: C(), nativeEvent: C(), target: C(), relatedTarget: C(), vueTarget: C(), componentId: C() });
          var r = !1;
          (this.preventDefault = function() {
            this.cancelable && (r = !0);
          }),
            O(this, 'defaultPrevented', {
              enumerable: !0,
              get: function() {
                return r;
              },
            });
        }
        var e, n, r;
        return (
          (e = t),
          (r = [
            {
              key: 'Defaults',
              get: function() {
                return { type: '', cancelable: !0, nativeEvent: null, target: null, relatedTarget: null, vueTarget: null, componentId: null };
              },
            },
          ]),
          (n = null) && fi(e.prototype, n),
          r && fi(e, r),
          t
        );
      })(),
      hi = { passive: !0, capture: !1 },
      pi = {
        data: function() {
          return { listenForClickOut: !1 };
        },
        watch: {
          listenForClickOut: function(t, e) {
            t !== e &&
              (zt(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, hi), t && Ht(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, hi));
          },
        },
        beforeCreate: function() {
          (this.clickOutElement = null), (this.clickOutEventName = null);
        },
        mounted: function() {
          this.clickOutElement || (this.clickOutElement = document),
            this.clickOutEventName || (this.clickOutEventName = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click'),
            this.listenForClickOut && Ht(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, hi);
        },
        beforeDestroy: function() {
          zt(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, hi);
        },
        methods: {
          isClickOut: function(t) {
            return !Zt(this.$el, t.target);
          },
          _clickOutHandler: function(t) {
            this.clickOutHandler && this.isClickOut(t) && this.clickOutHandler(t);
          },
        },
      },
      mi = { passive: !0, capture: !1 },
      vi = {
        data: function() {
          return { listenForFocusIn: !1 };
        },
        watch: {
          listenForFocusIn: function(t, e) {
            t !== e && (zt(this.focusInElement, 'focusin', this._focusInHandler, mi), t && Ht(this.focusInElement, 'focusin', this._focusInHandler, mi));
          },
        },
        beforeCreate: function() {
          this.focusInElement = null;
        },
        mounted: function() {
          this.focusInElement || (this.focusInElement = document), this.listenForFocusIn && Ht(this.focusInElement, 'focusin', this._focusInHandler, mi);
        },
        beforeDestroy: function() {
          zt(this.focusInElement, 'focusin', this._focusInHandler, mi);
        },
        methods: {
          _focusInHandler: function(t) {
            this.focusInHandler && this.focusInHandler(t);
          },
        },
      };
    function gi(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function bi(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var yi = ''.concat('bv::dropdown::', 'shown'),
      wi = ''.concat('bv::dropdown::', 'hidden'),
      Oi = i.h ? 450 : 150,
      Si = {
        FORM_CHILD: '.dropdown form',
        ITEM_SELECTOR: ['.dropdown-item', '.b-dropdown-form']
          .map(function(t) {
            return ''.concat(t, ':not(.disabled):not([disabled])');
          })
          .join(', '),
      },
      _i = 'top-start',
      ki = 'top-end',
      xi = 'bottom-start',
      Ti = 'bottom-end',
      Pi = 'right-start',
      ji = 'left-start',
      Ci = {
        mixins: [Mr, pi, vi],
        provide: function() {
          return { bvDropdown: this };
        },
        props: {
          disabled: { type: Boolean, default: !1 },
          text: { type: String, default: '' },
          html: { type: String },
          dropup: { type: Boolean, default: !1 },
          dropright: { type: Boolean, default: !1 },
          dropleft: { type: Boolean, default: !1 },
          right: { type: Boolean, default: !1 },
          offset: { type: [Number, String], default: 0 },
          noFlip: { type: Boolean, default: !1 },
          lazy: { type: Boolean, default: !1 },
          popperOpts: { default: function() {} },
        },
        data: function() {
          return { visible: !1, inNavbar: null, visibleChangePrevented: !1 };
        },
        computed: {
          toggler: function() {
            var t = this.$refs.toggle;
            return t ? t.$el || t : null;
          },
          directionClass: function() {
            return this.dropup ? 'dropup' : this.dropright ? 'dropright' : this.dropleft ? 'dropleft' : '';
          },
        },
        watch: {
          visible: function(t, e) {
            if (this.visibleChangePrevented) this.visibleChangePrevented = !1;
            else if (t !== e) {
              var n = t ? 'show' : 'hide',
                r = new di(n, { cancelable: !0, vueTarget: this, target: this.$refs.menu, relatedTarget: null, componentId: this.safeId ? this.safeId() : this.id || null });
              if ((this.emitEvent(r), r.defaultPrevented)) return (this.visibleChangePrevented = !0), (this.visible = e), void this.$off('hidden', this.focusToggler);
              'show' === n ? this.showMenu() : this.hideMenu();
            }
          },
          disabled: function(t, e) {
            t !== e && t && this.visible && (this.visible = !1);
          },
        },
        created: function() {
          (this.$_popper = null), (this.$_hideTimeout = null), (this.$_noop = function() {});
        },
        deactivated: function() {
          (this.visible = !1), this.whileOpenListen(!1), this.destroyPopper();
        },
        beforeDestroy: function() {
          (this.visible = !1), this.whileOpenListen(!1), this.destroyPopper(), this.clearHideTimeout();
        },
        methods: {
          emitEvent: function(t) {
            var e = t.type;
            this.$emit(e, t), this.$root.$emit(''.concat('bv::dropdown::').concat(e), t);
          },
          showMenu: function() {
            var t = this;
            if (!this.disabled) {
              if ((Q(this.inNavbar) && this.isNav && (this.inNavbar = Boolean(Yt('.navbar', this.$el))), !this.inNavbar))
                if (void 0 === ci.a) l('b-dropdown: Popper.js not found. Falling back to CSS positioning.');
                else {
                  var e = (this.dropup && this.right) || this.split ? this.$el : this.$refs.toggle;
                  (e = e.$el || e), this.createPopper(e);
                }
              this.$root.$emit(yi, this),
                this.whileOpenListen(!0),
                this.$nextTick(function() {
                  t.focusMenu(), t.$emit('shown');
                });
            }
          },
          hideMenu: function() {
            this.whileOpenListen(!1), this.$root.$emit(wi, this), this.$emit('hidden'), this.destroyPopper();
          },
          createPopper: function(t) {
            this.destroyPopper(), (this.$_popper = new ci.a(t, this.$refs.menu, this.getPopperConfig()));
          },
          destroyPopper: function() {
            this.$_popper && this.$_popper.destroy(), (this.$_popper = null);
          },
          clearHideTimeout: function() {
            this.$_hideTimeout && (clearTimeout(this.$_hideTimeout), (this.$_hideTimeout = null));
          },
          getPopperConfig: function() {
            var t = xi;
            this.dropup ? (t = this.right ? ki : _i) : this.dropright ? (t = Pi) : this.dropleft ? (t = ji) : this.right && (t = Ti);
            var e = { placement: t, modifiers: { offset: { offset: this.offset || 0 }, flip: { enabled: !this.noFlip } } };
            return (
              this.boundary && (e.modifiers.preventOverflow = { boundariesElement: this.boundary }),
              (function(t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = null != arguments[e] ? arguments[e] : {};
                  e % 2
                    ? gi(n, !0).forEach(function(e) {
                        bi(t, e, n[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : gi(n).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      });
                }
                return t;
              })({}, e, {}, this.popperOpts || {})
            );
          },
          whileOpenListen: function(t) {
            (this.listenForClickOut = t), (this.listenForFocusIn = t);
            var e = t ? '$on' : '$off';
            this.$root[e](yi, this.rootCloseListener);
          },
          rootCloseListener: function(t) {
            t !== this && (this.visible = !1);
          },
          show: function() {
            var t = this;
            this.disabled ||
              Lt(function() {
                t.visible = !0;
              });
          },
          hide: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this.disabled || ((this.visible = !1), t && this.$once('hidden', this.focusToggler));
          },
          toggle: function(t) {
            var e = (t = t || {}).type,
              n = t.keyCode;
            ('click' !== e && ('keydown' !== e || (n !== In.ENTER && n !== In.SPACE && n !== In.DOWN))) ||
              (this.disabled ? (this.visible = !1) : (this.$emit('toggle', t), t.preventDefault(), t.stopPropagation(), this.visible ? this.hide(!0) : this.show()));
          },
          click: function(t) {
            this.disabled ? (this.visible = !1) : this.$emit('click', t);
          },
          onKeydown: function(t) {
            var e = t.keyCode;
            e === In.ESC ? this.onEsc(t) : e === In.DOWN ? this.focusNext(t, !1) : e === In.UP && this.focusNext(t, !0);
          },
          onEsc: function(t) {
            this.visible && ((this.visible = !1), t.preventDefault(), t.stopPropagation(), this.$once('hidden', this.focusToggler));
          },
          clickOutHandler: function(t) {
            var e = this,
              n = t.target;
            if (this.visible && !Zt(this.$refs.menu, n) && !Zt(this.toggler, n)) {
              var r = function() {
                return (e.visible = !1), null;
              };
              this.clearHideTimeout(), (this.$_hideTimeout = this.inNavbar ? setTimeout(r, Oi) : r());
            }
          },
          focusInHandler: function(t) {
            this.clickOutHandler(t);
          },
          focusNext: function(t, e) {
            var n = this;
            !this.visible ||
              (t && Yt(Si.FORM_CHILD, t.target)) ||
              (t.preventDefault(),
              t.stopPropagation(),
              this.$nextTick(function() {
                var r = n.getItems();
                if (!(r.length < 1)) {
                  var i = r.indexOf(t.target);
                  e && i > 0 ? i-- : !e && i < r.length - 1 && i++, i < 0 && (i = 0), n.focusItem(i, r);
                }
              }));
          },
          focusItem: function(t, e) {
            var n = e.find(function(e, n) {
              return n === t;
            });
            n && n.focus && n.focus();
          },
          getItems: function() {
            return (Kt(Si.ITEM_SELECTOR, this.$refs.menu) || []).filter(Ut);
          },
          focusMenu: function() {
            this.$refs.menu.focus && this.$refs.menu.focus();
          },
          focusToggler: function() {
            var t = this;
            this.$nextTick(function() {
              var e = t.toggler;
              e && e.focus && e.focus();
            });
          },
        },
      },
      Bi = {
        toggleText: {
          type: String,
          default: function() {
            return Ct('BDropdown', 'toggleText');
          },
        },
        size: {
          type: String,
          default: function() {
            return Ct('BDropdown', 'size');
          },
        },
        variant: {
          type: String,
          default: function() {
            return Ct('BDropdown', 'variant');
          },
        },
        block: { type: Boolean, default: !1 },
        menuClass: { type: [String, Array], default: null },
        toggleTag: { type: String, default: 'button' },
        toggleClass: { type: [String, Array], default: null },
        noCaret: { type: Boolean, default: !1 },
        split: { type: Boolean, default: !1 },
        splitHref: { type: String },
        splitTo: { type: [String, Object] },
        splitVariant: {
          type: String,
          default: function() {
            return Ct('BDropdown', 'splitVariant');
          },
        },
        splitButtonType: {
          type: String,
          default: 'button',
          validator: function(t) {
            return f(['button', 'submit', 'reset'], t);
          },
        },
        role: { type: String, default: 'menu' },
        boundary: { type: [String, W], default: 'scrollParent' },
      },
      $i = r.extend({
        name: 'BDropdown',
        mixins: [Mr, Ci, Te],
        props: Bi,
        computed: {
          dropdownClasses: function() {
            return [
              this.directionClass,
              {
                show: this.visible,
                'btn-group': this.split || !this.block,
                'd-flex': this.block && this.split,
                'position-static': 'scrollParent' !== this.boundary || !this.boundary,
              },
            ];
          },
          menuClasses: function() {
            return [this.menuClass, { 'dropdown-menu-right': this.right, show: this.visible }];
          },
          toggleClasses: function() {
            return [this.toggleClass, { 'dropdown-toggle-split': this.split, 'dropdown-toggle-no-caret': this.noCaret && !this.split }];
          },
        },
        render: function(t) {
          var e = t(),
            n = this.normalizeSlot('button-content') || this.html || rn(this.text);
          if (this.split) {
            var r = { variant: this.splitVariant || this.variant, size: this.size, block: this.block, disabled: this.disabled };
            this.splitTo ? (r.to = this.splitTo) : this.splitHref ? (r.href = this.splitHref) : this.splitButtonType && (r.type = this.splitButtonType),
              (e = t(Cn, { ref: 'button', props: r, attrs: { id: this.safeId('_BV_button_') }, on: { click: this.click } }, [n]));
          }
          var i = t(
              Cn,
              {
                ref: 'toggle',
                staticClass: 'dropdown-toggle',
                class: this.toggleClasses,
                props: { tag: this.toggleTag, variant: this.variant, size: this.size, block: this.block && !this.split, disabled: this.disabled },
                attrs: { id: this.safeId('_BV_toggle_'), 'aria-haspopup': 'true', 'aria-expanded': this.visible ? 'true' : 'false' },
                on: { click: this.toggle, keydown: this.toggle },
              },
              [this.split ? t('span', { class: ['sr-only'] }, [this.toggleText]) : n]
            ),
            o = t(
              'ul',
              {
                ref: 'menu',
                staticClass: 'dropdown-menu',
                class: this.menuClasses,
                attrs: { role: this.role, tabindex: '-1', 'aria-labelledby': this.safeId(this.split ? '_BV_button_' : '_BV_toggle_') },
                on: { keydown: this.onKeydown },
              },
              !this.lazy || this.visible ? this.normalizeSlot('default', { hide: this.hide }) : [t()]
            );
          return t('div', { staticClass: 'dropdown b-dropdown', class: this.dropdownClasses, attrs: { id: this.safeId() } }, [e, i, o]);
        },
      });
    function Ai(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Ei(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Ai(n, !0).forEach(function(e) {
              Ii(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Ai(n).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return t;
    }
    function Ii(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var Di = Je(),
      Ni = r.extend({
        name: 'BDropdownItem',
        mixins: [Te],
        inheritAttrs: !1,
        inject: { bvDropdown: { default: null } },
        props: Ei({}, Di, { variant: { type: String, default: null } }),
        methods: {
          closeDropdown: function() {
            var t = this;
            Lt(function() {
              t.bvDropdown && t.bvDropdown.hide(!0);
            });
          },
          onClick: function(t) {
            this.$emit('click', t), this.closeDropdown();
          },
        },
        render: function(t) {
          return t('li', { attrs: { role: 'presentation' } }, [
            t(
              Xe,
              {
                props: this.$props,
                staticClass: 'dropdown-item',
                class: Ii({}, 'text-'.concat(this.variant), this.variant && !(this.active || this.disabled)),
                attrs: Ei({}, this.$attrs, { role: 'menuitem' }),
                on: { click: this.onClick },
                ref: 'item',
              },
              this.normalizeSlot('default')
            ),
          ]);
        },
      });
    function Fi(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Ri(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Fi(n, !0).forEach(function(e) {
              Li(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Fi(n).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return t;
    }
    function Li(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var Vi = {
        active: { type: Boolean, default: !1 },
        activeClass: { type: String, default: 'active' },
        disabled: { type: Boolean, default: !1 },
        variant: { type: String, default: null },
      },
      Mi = r.extend({
        name: 'BDropdownItemButton',
        mixins: [Te],
        inheritAttrs: !1,
        inject: { bvDropdown: { default: null } },
        props: Vi,
        methods: {
          closeDropdown: function() {
            this.bvDropdown && this.bvDropdown.hide(!0);
          },
          onClick: function(t) {
            this.$emit('click', t), this.closeDropdown();
          },
        },
        render: function(t) {
          var e;
          return t('li', { attrs: { role: 'presentation' } }, [
            t(
              'button',
              {
                staticClass: 'dropdown-item',
                class: ((e = {}), Li(e, this.activeClass, this.active), Li(e, 'text-'.concat(this.variant), this.variant && !(this.active || this.disabled)), e),
                attrs: Ri({}, this.$attrs, { role: 'menuitem', type: 'button', disabled: this.disabled }),
                on: { click: this.onClick },
                ref: 'button',
              },
              this.normalizeSlot('default')
            ),
          ]);
        },
      });
    function Hi(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function zi(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Hi(n, !0).forEach(function(e) {
              Gi(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Hi(n).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return t;
    }
    function Gi(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var Ui = { id: { type: String, default: null }, tag: { type: String, default: 'header' }, variant: { type: String, default: null } },
      Wi = r.extend({
        name: 'BDropdownHeader',
        functional: !0,
        props: Ui,
        render: function(t, e) {
          var n = e.props,
            r = e.data,
            i = e.children,
            o = r.attrs || {};
          return (
            (r.attrs = {}),
            t('li', ve(r, { attrs: { role: 'presentation' } }), [
              t(
                n.tag,
                { staticClass: 'dropdown-header', class: Gi({}, 'text-'.concat(n.variant), n.variant), attrs: zi({}, o, { id: n.id || null, role: 'heading' }), ref: 'header' },
                i
              ),
            ])
          );
        },
      });
    function qi(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Ki(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? qi(n, !0).forEach(function(e) {
              Ji(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : qi(n).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return t;
    }
    function Ji(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var Xi = { tag: { type: String, default: 'hr' } },
      Yi = r.extend({
        name: 'BDropdownDivider',
        functional: !0,
        props: Xi,
        render: function(t, e) {
          var n = e.props,
            r = e.data,
            i = r.attrs || {};
          return (
            (r.attrs = {}),
            t('li', ve(r, { attrs: { role: 'presentation' } }), [
              t(n.tag, { staticClass: 'dropdown-divider', attrs: Ki({}, i, { role: 'separator', 'aria-orientation': 'horizontal' }), ref: 'divider' }),
            ])
          );
        },
      }),
      Zi = { id: { type: String, default: null }, inline: { type: Boolean, default: !1 }, novalidate: { type: Boolean, default: !1 }, validated: { type: Boolean, default: !1 } },
      Qi = r.extend({
        name: 'BForm',
        functional: !0,
        props: Zi,
        render: function(t, e) {
          var n = e.props,
            r = e.data,
            i = e.children;
          return t('form', ve(r, { class: { 'form-inline': n.inline, 'was-validated': n.validated }, attrs: { id: n.id, novalidate: n.novalidate } }), i);
        },
      });
    function to(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function eo(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? to(n, !0).forEach(function(e) {
              no(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : to(n).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return t;
    }
    function no(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var ro = r.extend({
      name: 'BDropdownForm',
      functional: !0,
      props: eo({}, Zi, { disabled: { type: Boolean, default: !1 } }),
      render: function(t, e) {
        var n = e.props,
          r = e.data,
          i = e.children,
          o = r.attrs || {},
          a = r.on || {};
        return (
          (r.attrs = {}),
          (r.on = {}),
          t('li', ve(r, { attrs: { role: 'presentation' } }), [
            t(
              Qi,
              {
                ref: 'form',
                staticClass: 'b-dropdown-form',
                class: { disabled: n.disabled },
                props: n,
                attrs: eo({}, o, { disabled: n.disabled, tabindex: n.disabled ? null : '-1' }),
                on: a,
              },
              i
            ),
          ])
        );
      },
    });
    var io = r.extend({
      name: 'BDropdownText',
      functional: !0,
      props: { tag: { type: String, default: 'p' }, variant: { type: String, default: null } },
      render: function(t, e) {
        var n,
          r,
          i,
          o = e.props,
          a = e.data,
          s = e.children,
          l = a.attrs || {};
        return (
          (a.attrs = {}),
          t('li', ve(a, { attrs: { role: 'presentation' } }), [
            t(
              o.tag,
              {
                staticClass: 'b-dropdown-text',
                class:
                  ((n = {}),
                  (r = 'text-'.concat(o.variant)),
                  (i = o.variant),
                  r in n ? Object.defineProperty(n, r, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (n[r] = i),
                  n),
                props: o,
                attrs: l,
                ref: 'text',
              },
              s
            ),
          ])
        );
      },
    });
    function oo(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function ao(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? oo(n, !0).forEach(function(e) {
              so(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : oo(n).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return t;
    }
    function so(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var lo = {
        id: { type: String, default: null },
        header: { type: String, default: null },
        headerTag: { type: String, default: 'header' },
        headerVariant: { type: String, default: null },
        headerClasses: { type: [String, Array, Object], default: null },
        ariaDescribedby: { type: String, default: null },
      },
      uo = r.extend({
        name: 'BDropdownGroup',
        functional: !0,
        props: lo,
        render: function(t, e) {
          var n,
            r = e.props,
            i = e.data,
            o = e.slots,
            a = e.scopedSlots,
            s = o(),
            l = a || {},
            u = i.attrs || {};
          i.attrs = {};
          var c = null;
          (ke('header', l, s) || r.header) &&
            ((c = r.id ? '_bv_'.concat(r.id, '_group_dd_header') : null),
            (n = t(
              r.headerTag,
              { staticClass: 'dropdown-header', class: [r.headerClasses, so({}, 'text-'.concat(r.variant), r.variant)], attrs: { id: c, role: 'heading' } },
              xe('header', {}, l, s) || r.header
            )));
          var f = [c, r.ariaDescribedBy]
            .filter(Boolean)
            .join(' ')
            .trim();
          return t('li', ve(i, { attrs: { role: 'presentation' } }), [
            n || t(),
            t('ul', { staticClass: 'list-unstyled', attrs: ao({}, u, { id: r.id || null, role: 'group', 'aria-describedby': f || null }) }, xe('default', {}, l, s)),
          ]);
        },
      }),
      co = wt({
        components: {
          BDropdown: $i,
          BDd: $i,
          BDropdownItem: Ni,
          BDdItem: Ni,
          BDropdownItemButton: Mi,
          BDropdownItemBtn: Mi,
          BDdItemButton: Mi,
          BDdItemBtn: Mi,
          BDropdownHeader: Wi,
          BDdHeader: Wi,
          BDropdownDivider: Yi,
          BDdDivider: Yi,
          BDropdownForm: ro,
          BDdForm: ro,
          BDropdownText: io,
          BDdText: io,
          BDropdownGroup: uo,
          BDdGroup: uo,
        },
      });
    var fo = {
        type: {
          type: String,
          default: 'iframe',
          validator: function(t) {
            return f(['iframe', 'embed', 'video', 'object', 'img', 'b-img', 'b-img-lazy'], t);
          },
        },
        tag: { type: String, default: 'div' },
        aspect: { type: String, default: '16by9' },
      },
      ho = wt({
        components: {
          BEmbed: r.extend({
            name: 'BEmbed',
            functional: !0,
            props: fo,
            render: function(t, e) {
              var n,
                r,
                i,
                o = e.props,
                a = e.data,
                s = e.children;
              return t(
                o.tag,
                {
                  ref: a.ref,
                  staticClass: 'embed-responsive',
                  class:
                    ((n = {}),
                    (r = 'embed-responsive-'.concat(o.aspect)),
                    (i = Boolean(o.aspect)),
                    r in n ? Object.defineProperty(n, r, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (n[r] = i),
                    n),
                },
                [t(o.type, ve(a, { ref: '', staticClass: 'embed-responsive-item' }), s)]
              );
            },
          }),
        },
      }),
      po = {
        props: {
          options: {
            type: [Array, Object],
            default: function() {
              return [];
            },
          },
          valueField: { type: String, default: 'value' },
          textField: { type: String, default: 'text' },
          htmlField: { type: String, default: 'html' },
          disabledField: { type: String, default: 'disabled' },
        },
        computed: {
          formOptions: function() {
            var t = this.options,
              e = this.valueField,
              n = this.textField,
              r = this.htmlField,
              i = this.disabledField;
            return c(t)
              ? t.map(function(t) {
                  if (T(t)) {
                    var o = t[e],
                      a = String(t[n]);
                    return { value: Z(o) ? a : o, text: rn(a), html: t[r], disabled: Boolean(t[i]) };
                  }
                  return { value: t, text: rn(String(t)), disabled: !1 };
                })
              : y(t).map(function(o) {
                  var a = t[o] || {};
                  if (T(a)) {
                    var s = a[e],
                      l = a[n];
                    return { value: Z(s) ? o : s, text: Z(l) ? rn(String(o)) : rn(String(l)), html: a[r], disabled: Boolean(a[i]) };
                  }
                  return { value: o, text: rn(String(a)), disabled: !1 };
                });
          },
        },
      };
    function mo(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function vo(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? mo(n, !0).forEach(function(e) {
              go(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : mo(n).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return t;
    }
    function go(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var bo = r.extend({
      name: 'BFormDatalist',
      mixins: [po, Te],
      props: { id: { type: String, default: null, required: !0 } },
      render: function(t) {
        var e = this.formOptions.map(function(e, n) {
          return t('option', { key: 'option_'.concat(n, '_opt'), attrs: { disabled: e.disabled }, domProps: vo({}, on(e.html, e.text), { value: e.value }) });
        });
        return t('datalist', { attrs: { id: this.id } }, [e, this.normalizeSlot('default')]);
      },
    });
    var yo = {
        id: { type: String, default: null },
        tag: { type: String, default: 'small' },
        textVariant: {
          type: String,
          default: function() {
            return Ct('BFormText', 'textVariant');
          },
        },
        inline: { type: Boolean, default: !1 },
      },
      wo = r.extend({
        name: 'BFormText',
        functional: !0,
        props: yo,
        render: function(t, e) {
          var n,
            r,
            i,
            o = e.props,
            a = e.data,
            s = e.children;
          return t(
            o.tag,
            ve(a, {
              class:
                ((n = { 'form-text': !o.inline }),
                (r = 'text-'.concat(o.textVariant)),
                (i = Boolean(o.textVariant)),
                r in n ? Object.defineProperty(n, r, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (n[r] = i),
                n),
              attrs: { id: o.id },
            }),
            s
          );
        },
      }),
      Oo = {
        id: { type: String, default: null },
        tag: { type: String, default: 'div' },
        tooltip: { type: Boolean, default: !1 },
        forceShow: { type: Boolean, default: !1 },
        state: { type: Boolean, default: null },
        ariaLive: { type: String, default: null },
        role: { type: String, default: null },
      },
      So = r.extend({
        name: 'BFormInvalidFeedback',
        functional: !0,
        props: Oo,
        render: function(t, e) {
          var n = e.props,
            r = e.data,
            i = e.children,
            o = !0 === n.forceShow || !1 === n.state;
          return t(
            n.tag,
            ve(r, {
              class: { 'invalid-feedback': !n.tooltip, 'invalid-tooltip': n.tooltip, 'd-block': o },
              attrs: { id: n.id, role: n.role, 'aria-live': n.ariaLive, 'aria-atomic': n.ariaLive ? 'true' : null },
            }),
            i
          );
        },
      }),
      _o = {
        id: { type: String, default: null },
        tag: { type: String, default: 'div' },
        tooltip: { type: Boolean, default: !1 },
        forceShow: { type: Boolean, default: !1 },
        state: { type: Boolean, default: null },
        ariaLive: { type: String, default: null },
        role: { type: String, default: null },
      },
      ko = r.extend({
        name: 'BFormValidFeedback',
        functional: !0,
        props: _o,
        render: function(t, e) {
          var n = e.props,
            r = e.data,
            i = e.children,
            o = !0 === n.forceShow || !0 === n.state;
          return t(
            n.tag,
            ve(r, {
              class: { 'valid-feedback': !n.tooltip, 'valid-tooltip': n.tooltip, 'd-block': o },
              attrs: { id: n.id, role: n.role, 'aria-live': n.ariaLive, 'aria-atomic': n.ariaLive ? 'true' : null },
            }),
            i
          );
        },
      }),
      xo = { tag: { type: String, default: 'div' } },
      To = r.extend({
        name: 'BFormRow',
        functional: !0,
        props: xo,
        render: function(t, e) {
          var n = e.props,
            r = e.data,
            i = e.children;
          return t(n.tag, ve(r, { staticClass: 'form-row' }), i);
        },
      }),
      Po = wt({ components: { BForm: Qi, BFormDatalist: bo, BDatalist: bo, BFormText: wo, BFormInvalidFeedback: So, BFormFeedback: So, BFormValidFeedback: ko, BFormRow: To } }),
      jo = {
        props: { state: { type: Boolean, default: null } },
        computed: {
          computedState: function() {
            return nt(this.state) ? this.state : null;
          },
          stateClass: function() {
            var t = this.computedState;
            return !0 === t ? 'is-valid' : !1 === t ? 'is-invalid' : null;
          },
        },
      },
      Co = function(t, e) {
        return e + (t ? Rn(t) : '');
      };
    function Bo(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function $o(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var Ao = function() {
        return { type: [String, Number], default: null };
      },
      Eo = Tt(function(t, e, n) {
        var r = t;
        if (!Z(n) && !Q(n) && !1 !== n) return e && (r += '-'.concat(e)), 'col' !== t || ('' !== n && !0 !== n) ? (r += '-'.concat(n)).toLowerCase() : r.toLowerCase();
      }),
      Io = _(null),
      Do = function() {
        var t = Et().filter(Boolean),
          e = t.reduce(function(t, e) {
            return e && (t[e] = { type: [Boolean, String, Number], default: !1 }), t;
          }, _(null)),
          n = t.reduce(function(t, e) {
            return (t[Co(e, 'offset')] = Ao()), t;
          }, _(null)),
          r = t.reduce(function(t, e) {
            return (t[Co(e, 'order')] = Ao()), t;
          }, _(null));
        return (
          (Io = g(_(null), { col: y(e), offset: y(n), order: y(r) })),
          (function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? Bo(n, !0).forEach(function(e) {
                    $o(t, e, n[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : Bo(n).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  });
            }
            return t;
          })({ col: { type: Boolean, default: !1 }, cols: Ao() }, e, { offset: Ao() }, n, { order: Ao() }, r, {
            alignSelf: {
              type: String,
              default: null,
              validator: function(t) {
                return f(['auto', 'start', 'end', 'center', 'baseline', 'stretch'], t);
              },
            },
            tag: { type: String, default: 'div' },
          })
        );
      },
      No = {
        name: 'BCol',
        functional: !0,
        get props() {
          return delete this.props, (this.props = Do());
        },
        render: function(t, e) {
          var n,
            r = e.props,
            i = e.data,
            o = e.children,
            a = [];
          for (var s in Io)
            for (var l = Io[s], u = 0; u < l.length; u++) {
              var c = Eo(s, l[u].replace(s, ''), r[l[u]]);
              c && a.push(c);
            }
          var f = a.some(function(t) {
            return /^col-/.test(t);
          });
          return (
            a.push(
              ($o((n = { col: r.col || (!f && !r.cols) }), 'col-'.concat(r.cols), r.cols),
              $o(n, 'offset-'.concat(r.offset), r.offset),
              $o(n, 'order-'.concat(r.order), r.order),
              $o(n, 'align-self-'.concat(r.alignSelf), r.alignSelf),
              n)
            ),
            t(r.tag, ve(i, { class: a }), o)
          );
        },
      };
    function Fo(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Ro(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Fo(n, !0).forEach(function(e) {
              Lo(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Fo(n).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return t;
    }
    function Lo(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var Vo = function(t, e) {
        var n = e.normalizeSlot('invalid-feedback') || e.invalidFeedback,
          r = t();
        return (
          n &&
            (r = t(
              So,
              {
                props: { id: e.invalidFeedbackId, state: e.computedState, tooltip: e.tooltip, ariaLive: e.feedbackAriaLive, role: e.feedbackAriaLive ? 'alert' : null },
                attrs: { tabindex: n ? '-1' : null },
              },
              [n]
            )),
          r
        );
      },
      Mo = function(t, e) {
        var n = e.normalizeSlot('valid-feedback') || e.validFeedback,
          r = t();
        return (
          n &&
            (r = t(
              ko,
              {
                props: { id: e.validFeedbackId, state: e.computedState, tooltip: e.tooltip, ariaLive: e.feedbackAriaLive, role: e.feedbackAriaLive ? 'alert' : null },
                attrs: { tabindex: n ? '-1' : null },
              },
              [n]
            )),
          r
        );
      },
      Ho = function(t, e) {
        var n = e.normalizeSlot('description') || e.description,
          r = t();
        return n && (r = t(wo, { attrs: { id: e.descriptionId, tabindex: n ? '-1' : null } }, [n])), r;
      },
      zo = Tt(function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
          e = arguments.length > 1 ? arguments[1] : void 0;
        return ''.concat(e).concat(Rn(t));
      }),
      Go = {
        name: 'BFormGroup',
        mixins: [Mr, jo, Te],
        get props() {
          return (
            delete this.props,
            (this.props =
              ((t = Et()),
              (e = t.reduce(function(t, e) {
                return (t[zo(e, 'labelCols')] = { type: [Number, String, Boolean], default: !e && null }), t;
              }, _(null))),
              (n = t.reduce(function(t, e) {
                return (t[zo(e, 'labelAlign')] = { type: String, default: null }), t;
              }, _(null))),
              Ro(
                {
                  label: { type: String, default: null },
                  labelFor: { type: String, default: null },
                  labelSize: { type: String, default: null },
                  labelSrOnly: { type: Boolean, default: !1 },
                },
                e,
                {},
                n,
                {
                  labelClass: { type: [String, Array, Object], default: null },
                  description: { type: String, default: null },
                  invalidFeedback: { type: String, default: null },
                  validFeedback: { type: String, default: null },
                  tooltip: { type: Boolean, default: !1 },
                  feedbackAriaLive: { type: String, default: 'assertive' },
                  validated: { type: Boolean, default: !1 },
                  disabled: { type: Boolean, default: !1 },
                }
              )))
          );
          var t, e, n;
        },
        computed: {
          labelColProps: function() {
            var t = this,
              e = {};
            return (
              Et().forEach(function(n) {
                var r = t[zo(n, 'labelCols')];
                if ((nt((r = '' === r || r || !1)) || 'auto' === r || (r = (r = parseInt(r, 10) || 0) > 0 && r), r)) {
                  var i = n || (nt(r) ? 'col' : 'cols');
                  e[i] = r;
                }
              }),
              e
            );
          },
          labelAlignClasses: function() {
            var t = this,
              e = [];
            return (
              Et().forEach(function(n) {
                var r = t[zo(n, 'labelAlign')] || null;
                if (r) {
                  var i = n ? 'text-'.concat(n, '-').concat(r) : 'text-'.concat(r);
                  e.push(i);
                }
              }),
              e
            );
          },
          isHorizontal: function() {
            return y(this.labelColProps).length > 0;
          },
          labelId: function() {
            return this.hasNormalizedSlot('label') || this.label ? this.safeId('_BV_label_') : null;
          },
          descriptionId: function() {
            return this.hasNormalizedSlot('description') || this.description ? this.safeId('_BV_description_') : null;
          },
          hasInvalidFeedback: function() {
            return !1 === this.computedState && (this.hasNormalizedSlot('invalid-feedback') || this.invalidFeedback);
          },
          invalidFeedbackId: function() {
            return this.hasInvalidFeedback ? this.safeId('_BV_feedback_invalid_') : null;
          },
          hasValidFeedback: function() {
            return !0 === this.computedState && (this.hasNormalizedSlot('valid-feedback') || this.validFeedback);
          },
          validFeedbackId: function() {
            return this.hasValidFeedback ? this.safeId('_BV_feedback_valid_') : null;
          },
          describedByIds: function() {
            return [this.descriptionId, this.invalidFeedbackId, this.validFeedbackId].filter(Boolean).join(' ') || null;
          },
        },
        watch: {
          describedByIds: function(t, e) {
            t !== e && this.setInputDescribedBy(t, e);
          },
        },
        mounted: function() {
          var t = this;
          this.$nextTick(function() {
            t.setInputDescribedBy(t.describedByIds);
          });
        },
        methods: {
          legendClick: function(t) {
            if (!this.labelFor) {
              var e = t.target ? t.target.tagName : '';
              if (!/^(input|select|textarea|label|button|a)$/i.test(e)) {
                var n = Kt('input:not([disabled]),textarea:not([disabled]),select:not([disabled])', this.$refs.content).filter(Ut);
                n && 1 === n.length && n[0].focus && n[0].focus();
              }
            }
          },
          setInputDescribedBy: function(t, e) {
            if (this.labelFor && i.j) {
              var n = Jt('#'.concat(this.labelFor), this.$refs.content);
              if (n) {
                var r = 'aria-describedby',
                  o = (oe(n, r) || '').split(/\s+/);
                (t = (t || '').split(/\s+/)),
                  (e = (e || '').split(/\s+/)),
                  (o = o
                    .filter(function(t) {
                      return !f(e, t);
                    })
                    .concat(t)
                    .filter(Boolean)),
                  (o = y(
                    o.reduce(function(t, e) {
                      return Ro({}, t, Lo({}, e, !0));
                    }, {})
                  )
                    .join(' ')
                    .trim())
                    ? re(n, r, o)
                    : ie(n, r);
              }
            }
          },
        },
        render: function(t) {
          var e = !this.labelFor,
            n = this.isHorizontal,
            r = (function(t, e) {
              var n = e.normalizeSlot('label') || e.label,
                r = e.labelFor,
                i = !r,
                o = e.isHorizontal,
                a = i ? 'legend' : 'label';
              if (n || o) {
                if (e.labelSrOnly) {
                  var s = t();
                  return n && (s = t(a, { class: 'sr-only', attrs: { id: e.labelId, for: r || null } }, [n])), t(o ? No : 'div', { props: o ? e.labelColProps : {} }, [s]);
                }
                return t(
                  o ? No : a,
                  {
                    on: i ? { click: e.legendClick } : {},
                    props: o ? Ro({ tag: a }, e.labelColProps) : {},
                    attrs: { id: e.labelId, for: r || null, tabindex: i ? '-1' : null },
                    class: [
                      o || i ? 'col-form-label' : '',
                      !o && i ? 'pt-0' : '',
                      o || i ? '' : 'd-block',
                      e.labelSize ? 'col-form-label-'.concat(e.labelSize) : '',
                      e.labelAlignClasses,
                      e.labelClass,
                    ],
                  },
                  [n]
                );
              }
              return t();
            })(t, this),
            i = t(n ? No : 'div', { ref: 'content', attrs: { tabindex: e ? '-1' : null, role: e ? 'group' : null } }, [
              this.normalizeSlot('default') || t(),
              Vo(t, this),
              Mo(t, this),
              Ho(t, this),
            ]),
            o = {
              staticClass: 'form-group',
              class: [this.validated ? 'was-validated' : null, this.stateClass],
              attrs: {
                id: this.safeId(),
                disabled: e ? this.disabled : null,
                role: e ? null : 'group',
                'aria-invalid': !1 === this.computedState ? 'true' : null,
                'aria-labelledby': e && n ? this.labelId : null,
                'aria-describedby': e ? this.describedByIds : null,
              },
            };
          return t(e ? 'fieldset' : n ? To : 'div', o, n && e ? [t(To, {}, [r, i])] : [r, i]);
        },
      },
      Uo = wt({ components: { BFormGroup: Go, BFormFieldset: Go } }),
      Wo = function(t, e) {
        for (var n = 0; n < t.length; n++) if (vr(t[n], e)) return n;
        return -1;
      },
      qo = {
        props: {
          name: { type: String },
          id: { type: String },
          disabled: { type: Boolean },
          required: { type: Boolean, default: !1 },
          form: { type: String, default: null },
          autofocus: { type: Boolean, default: !1 },
        },
        mounted: function() {
          this.handleAutofocus();
        },
        activated: function() {
          this.handleAutofocus();
        },
        methods: {
          handleAutofocus: function() {
            var t = this;
            this.$nextTick(function() {
              Lt(function() {
                var e = t.$el;
                t.autofocus && Ut(e) && (Xt(e, 'input, textarea, select') || (e = Jt('input, textarea, select', e)), e && e.focus && e.focus());
              });
            });
          },
        },
      };
    function Ko(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Jo(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Ko(n, !0).forEach(function(e) {
              Xo(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Ko(n).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return t;
    }
    function Xo(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var Yo = {
        mixins: [Te],
        inheritAttrs: !1,
        model: { prop: 'checked', event: 'input' },
        props: {
          value: {},
          checked: {},
          inline: { type: Boolean, default: !1 },
          plain: { type: Boolean, default: !1 },
          button: { type: Boolean, default: !1 },
          buttonVariant: { type: String, default: null },
          ariaLabel: { type: String, default: null },
          ariaLabelledby: { type: String, default: null },
        },
        data: function() {
          return { localChecked: this.isGroup ? this.bvGroup.checked : this.checked, hasFocus: !1 };
        },
        computed: {
          computedLocalChecked: {
            get: function() {
              return this.isGroup ? this.bvGroup.localChecked : this.localChecked;
            },
            set: function(t) {
              this.isGroup ? (this.bvGroup.localChecked = t) : (this.localChecked = t);
            },
          },
          isGroup: function() {
            return Boolean(this.bvGroup);
          },
          isBtnMode: function() {
            return this.isGroup ? this.bvGroup.buttons : this.button;
          },
          isPlain: function() {
            return !this.isBtnMode && (this.isGroup ? this.bvGroup.plain : this.plain);
          },
          isCustom: function() {
            return !this.isBtnMode && !this.isPlain;
          },
          isSwitch: function() {
            return !(this.isBtnMode || this.isRadio || this.isPlain) && (this.isGroup ? this.bvGroup.switches : this.switch);
          },
          isInline: function() {
            return this.isGroup ? this.bvGroup.inline : this.inline;
          },
          isDisabled: function() {
            return (this.isGroup && this.bvGroup.disabled) || this.disabled;
          },
          isRequired: function() {
            return Boolean(this.getName && (this.isGroup ? this.bvGroup.required : this.required));
          },
          getName: function() {
            return (this.isGroup ? this.bvGroup.groupName : this.name) || null;
          },
          getForm: function() {
            return (this.isGroup ? this.bvGroup.form : this.form) || null;
          },
          getSize: function() {
            return (this.isGroup ? this.bvGroup.size : this.size) || '';
          },
          getState: function() {
            return this.isGroup ? this.bvGroup.computedState : this.computedState;
          },
          getButtonVariant: function() {
            return this.buttonVariant ? this.buttonVariant : this.isGroup && this.bvGroup.buttonVariant ? this.bvGroup.buttonVariant : 'secondary';
          },
          buttonClasses: function() {
            var t;
            return [
              'btn',
              'btn-'.concat(this.getButtonVariant),
              ((t = {}), Xo(t, 'btn-'.concat(this.getSize), this.getSize), Xo(t, 'disabled', this.isDisabled), Xo(t, 'active', this.isChecked), Xo(t, 'focus', this.hasFocus), t),
            ];
          },
        },
        watch: {
          checked: function(t, e) {
            this.computedLocalChecked = t;
          },
        },
        methods: {
          handleFocus: function(t) {
            t.target && ('focus' === t.type ? (this.hasFocus = !0) : 'blur' === t.type && (this.hasFocus = !1));
          },
          focus: function() {
            !this.isDisabled && this.$refs.input && this.$refs.input.focus && this.$refs.input.focus();
          },
          blur: function() {
            !this.isDisabled && this.$refs.input && this.$refs.input.blur && this.$refs.input.blur();
          },
        },
        render: function(t) {
          var e = this.normalizeSlot('default'),
            n = { change: this.handleChange };
          this.isBtnMode && (n.focus = n.blur = this.handleFocus);
          var r = t('input', {
            ref: 'input',
            key: 'input',
            on: n,
            class: {
              'form-check-input': this.isPlain,
              'custom-control-input': this.isCustom,
              'is-valid': !0 === this.getState && !this.isBtnMode,
              'is-invalid': !1 === this.getState && !this.isBtnMode,
              'position-static': this.isPlain && !e,
            },
            directives: [{ name: 'model', rawName: 'v-model', value: this.computedLocalChecked, expression: 'computedLocalChecked' }],
            attrs: Jo({}, this.$attrs, {
              id: this.safeId(),
              type: this.isRadio ? 'radio' : 'checkbox',
              name: this.getName,
              form: this.getForm,
              disabled: this.isDisabled,
              required: this.isRequired,
              autocomplete: 'off',
              'aria-required': this.isRequired || null,
              'aria-label': this.ariaLabel || null,
              'aria-labelledby': this.ariaLabelledby || null,
            }),
            domProps: { value: this.value, checked: this.isChecked },
          });
          if (this.isBtnMode) {
            var i = t('label', { class: this.buttonClasses }, [r, e]);
            return this.isGroup || (i = t('div', { class: ['btn-group-toggle', 'd-inline-block'] }, [i])), i;
          }
          var o = t();
          return (
            (this.isPlain && !e) || (o = t('label', { class: { 'form-check-label': this.isPlain, 'custom-control-label': this.isCustom }, attrs: { for: this.safeId() } }, e)),
            t(
              'div',
              {
                class: Xo(
                  {
                    'form-check': this.isPlain,
                    'form-check-inline': this.isPlain && this.isInline,
                    'custom-control': this.isCustom,
                    'custom-control-inline': this.isCustom && this.isInline,
                    'custom-checkbox': this.isCustom && this.isCheck && !this.isSwitch,
                    'custom-switch': this.isSwitch,
                    'custom-radio': this.isCustom && this.isRadio,
                  },
                  'b-custom-control-'.concat(this.getSize),
                  Boolean(this.getSize && !this.isBtnMode)
                ),
              },
              [r, o]
            )
          );
        },
      },
      Zo = {
        props: {
          size: {
            type: String,
            default: function() {
              return Ct('formControls', 'size');
            },
          },
        },
        computed: {
          sizeFormClass: function() {
            return [this.size ? 'form-control-'.concat(this.size) : null];
          },
          sizeBtnClass: function() {
            return [this.size ? 'btn-'.concat(this.size) : null];
          },
        },
      },
      Qo = r.extend({
        name: 'BFormCheckbox',
        mixins: [Yo, Mr, qo, Zo, jo],
        inject: { bvGroup: { from: 'bvCheckGroup', default: !1 } },
        props: {
          value: { default: !0 },
          uncheckedValue: { default: !1 },
          indeterminate: { type: Boolean, default: !1 },
          switch: { type: Boolean, default: !1 },
          checked: { default: null },
        },
        computed: {
          isChecked: function() {
            var t = this.computedLocalChecked,
              e = this.value;
            return c(t) ? Wo(t, e) > -1 : vr(t, e);
          },
          isRadio: function() {
            return !1;
          },
          isCheck: function() {
            return !0;
          },
        },
        watch: {
          computedLocalChecked: function(t, e) {
            this.$emit('input', t), this.$refs && this.$refs.input && this.$emit('update:indeterminate', this.$refs.input.indeterminate);
          },
          indeterminate: function(t, e) {
            this.setIndeterminate(t);
          },
        },
        mounted: function() {
          this.setIndeterminate(this.indeterminate);
        },
        methods: {
          handleChange: function(t) {
            var e = t.target,
              n = e.checked,
              r = e.indeterminate,
              i = this.computedLocalChecked,
              o = this.value,
              a = c(i),
              s = a ? null : this.uncheckedValue;
            if (a) {
              var l = Wo(i, o);
              n && l < 0 ? (i = i.concat(o)) : !n && l > -1 && (i = i.slice(0, l).concat(i.slice(l + 1)));
            } else i = n ? o : s;
            (this.computedLocalChecked = i), this.$emit('change', n ? o : s), this.isGroup && this.bvGroup.$emit('change', i), this.$emit('update:indeterminate', r);
          },
          setIndeterminate: function(t) {
            c(this.computedLocalChecked) && (t = !1), this.$refs && this.$refs.input && ((this.$refs.input.indeterminate = t), this.$emit('update:indeterminate', t));
          },
        },
      }),
      ta = r.extend({
        name: 'BFormRadio',
        mixins: [Mr, Yo, qo, Zo, jo],
        inject: { bvGroup: { from: 'bvRadioGroup', default: !1 } },
        props: { checked: { default: null } },
        computed: {
          isChecked: function() {
            return vr(this.value, this.computedLocalChecked);
          },
          isRadio: function() {
            return !0;
          },
          isCheck: function() {
            return !1;
          },
        },
        watch: {
          computedLocalChecked: function(t, e) {
            this.$emit('input', this.computedLocalChecked);
          },
        },
        methods: {
          handleChange: function(t) {
            var e = t.target.checked,
              n = this.value;
            (this.computedLocalChecked = n), this.$emit('change', e ? n : null), this.isGroup && this.bvGroup.$emit('change', e ? n : null);
          },
        },
      }),
      ea = {
        mixins: [Te],
        model: { prop: 'checked', event: 'input' },
        props: {
          validated: { type: Boolean, default: !1 },
          ariaInvalid: { type: [Boolean, String], default: !1 },
          stacked: { type: Boolean, default: !1 },
          plain: { type: Boolean, default: !1 },
          buttons: { type: Boolean, default: !1 },
          buttonVariant: { type: String, default: 'secondary' },
        },
        computed: {
          inline: function() {
            return !this.stacked;
          },
          groupName: function() {
            return this.name || this.safeId();
          },
          groupClasses: function() {
            return this.buttons
              ? ['btn-group-toggle', this.inline ? 'btn-group' : 'btn-group-vertical', this.size ? 'btn-group-'.concat(this.size) : '', this.validated ? 'was-validated' : '']
              : [this.validated ? 'was-validated' : ''];
          },
          computedAriaInvalid: function() {
            var t = this.ariaInvalid;
            return !0 === t || 'true' === t || '' === t ? 'true' : !1 === this.computedState ? 'true' : null;
          },
        },
        watch: {
          checked: function(t, e) {
            this.localChecked = t;
          },
          localChecked: function(t, e) {
            this.$emit('input', t);
          },
        },
        render: function(t) {
          var e = this,
            n = this.formOptions.map(function(n, r) {
              var i = '_BV_option_'.concat(r, '_');
              return t(e.isRadioGroup ? ta : Qo, { key: i, props: { id: e.safeId(i), value: n.value, disabled: n.disabled || !1 } }, [t('span', { domProps: on(n.html, n.text) })]);
            });
          return t(
            'div',
            {
              class: this.groupClasses,
              attrs: {
                id: this.safeId(),
                role: this.isRadioGroup ? 'radiogroup' : 'group',
                tabindex: '-1',
                'aria-required': this.required ? 'true' : null,
                'aria-invalid': this.computedAriaInvalid,
              },
            },
            [this.normalizeSlot('first'), n, this.normalizeSlot('default')]
          );
        },
      },
      na = { switches: { type: Boolean, default: !1 }, checked: { type: Array, default: null } },
      ra = r.extend({
        name: 'BFormCheckboxGroup',
        mixins: [Mr, qo, ea, po, Zo, jo],
        provide: function() {
          return { bvCheckGroup: this };
        },
        props: na,
        data: function() {
          return { localChecked: this.checked || [] };
        },
        computed: {
          isRadioGroup: function() {
            return !1;
          },
        },
      }),
      ia = wt({ components: { BFormCheckbox: Qo, BCheckbox: Qo, BCheck: Qo, BFormCheckboxGroup: ra, BCheckboxGroup: ra, BCheckGroup: ra } }),
      oa = r.extend({
        name: 'BFormRadioGroup',
        mixins: [Mr, qo, ea, po, Zo, jo],
        provide: function() {
          return { bvRadioGroup: this };
        },
        props: { checked: { default: null } },
        data: function() {
          return { localChecked: this.checked };
        },
        computed: {
          isRadioGroup: function() {
            return !0;
          },
        },
      }),
      aa = wt({ components: { BFormRadio: ta, BRadio: ta, BFormRadioGroup: oa, BRadioGroup: oa } }),
      sa = {
        model: { prop: 'value', event: 'update' },
        props: {
          value: { type: [String, Number], default: '' },
          ariaInvalid: { type: [Boolean, String], default: !1 },
          readonly: { type: Boolean, default: !1 },
          plaintext: { type: Boolean, default: !1 },
          autocomplete: { type: String, default: null },
          placeholder: { type: String, default: null },
          formatter: { type: Function, default: null },
          lazyFormatter: { type: Boolean, default: !1 },
          trim: { type: Boolean, default: !1 },
          number: { type: Boolean, default: !1 },
          lazy: { type: Boolean, default: !1 },
          debounce: { type: [Number, String], default: 0 },
        },
        data: function() {
          return { localValue: this.stringifyValue(this.value), vModelValue: this.value };
        },
        computed: {
          computedDebounce: function() {
            return Math.max(parseInt(this.debounce, 10) || 0, 0);
          },
          computedClass: function() {
            return [
              {
                'custom-range': 'range' === this.type,
                'form-control-plaintext': this.plaintext && 'range' !== this.type && 'color' !== this.type,
                'form-control': (!this.plaintext && 'range' !== this.type) || 'color' === this.type,
              },
              this.sizeFormClass,
              this.stateClass,
            ];
          },
          computedAriaInvalid: function() {
            return this.ariaInvalid && 'false' !== this.ariaInvalid ? (!0 === this.ariaInvalid ? 'true' : this.ariaInvalid) : !1 === this.computedState ? 'true' : null;
          },
        },
        watch: {
          value: function(t) {
            var e = this.stringifyValue(t);
            e !== this.localValue && t !== this.vModelValue && (this.clearDebounce(), (this.localValue = e), (this.vModelValue = t));
          },
        },
        mounted: function() {
          (this.$_inputDebounceTimer = null), this.$on('hook:beforeDestroy', this.clearDebounce);
          var t = this.value,
            e = this.stringifyValue(t);
          e !== this.localValue && t !== this.vModelValue && ((this.localValue = e), (this.vModelValue = t));
        },
        methods: {
          clearDebounce: function() {
            clearTimeout(this.$_inputDebounceTimer), (this.$_inputDebounceTimer = null);
          },
          stringifyValue: function(t) {
            return tt(t) ? '' : String(t);
          },
          formatValue: function(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return (t = this.stringifyValue(t)), (this.lazyFormatter && !n) || !et(this.formatter) || (t = this.formatter(t, e)), t;
          },
          modifyValue: function(t) {
            if ((this.trim && (t = t.trim()), this.number)) {
              var e = parseFloat(t);
              t = isNaN(e) ? t : e;
            }
            return t;
          },
          updateValue: function(t) {
            var e = this,
              n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              r = this.lazy,
              i = this.computedDebounce;
            if ((!r || n) && (t = this.modifyValue(t)) !== this.vModelValue) {
              this.clearDebounce();
              var o = function() {
                (e.vModelValue = t), e.$emit('update', t);
              };
              i > 0 && !r && !n ? (this.$_inputDebounceTimer = setTimeout(o, i)) : o();
            }
          },
          onInput: function(t) {
            if (!t.target.composing) {
              var e = t.target.value,
                n = this.formatValue(e, t);
              !1 === n || t.defaultPrevented ? t.preventDefault() : ((this.localValue = n), this.updateValue(n), this.$emit('input', n));
            }
          },
          onChange: function(t) {
            if (!t.target.composing) {
              var e = t.target.value,
                n = this.formatValue(e, t);
              !1 === n || t.defaultPrevented ? t.preventDefault() : ((this.localValue = n), this.updateValue(n, !0), this.$emit('change', n));
            }
          },
          onBlur: function(t) {
            var e = t.target.value,
              n = this.formatValue(e, t, !0);
            !1 !== n && ((this.localValue = this.stringifyValue(this.modifyValue(n))), this.updateValue(n, !0)), this.$emit('blur', t);
          },
          focus: function() {
            this.disabled || this.$el.focus();
          },
          blur: function() {
            this.disabled || this.$el.blur();
          },
        },
      },
      la = {
        computed: {
          selectionStart: {
            cache: !1,
            get: function() {
              return this.$refs.input.selectionStart;
            },
            set: function(t) {
              this.$refs.input.selectionStart = t;
            },
          },
          selectionEnd: {
            cache: !1,
            get: function() {
              return this.$refs.input.selectionEnd;
            },
            set: function(t) {
              this.$refs.input.selectionEnd = t;
            },
          },
          selectionDirection: {
            cache: !1,
            get: function() {
              return this.$refs.input.selectionDirection;
            },
            set: function(t) {
              this.$refs.input.selectionDirection = t;
            },
          },
        },
        methods: {
          select: function() {
            var t;
            (t = this.$refs.input).select.apply(t, arguments);
          },
          setSelectionRange: function() {
            var t;
            (t = this.$refs.input).setSelectionRange.apply(t, arguments);
          },
          setRangeText: function() {
            var t;
            (t = this.$refs.input).setRangeText.apply(t, arguments);
          },
        },
      },
      ua = {
        computed: {
          validity: {
            cache: !1,
            get: function() {
              return this.$refs.input.validity;
            },
          },
          validationMessage: {
            cache: !1,
            get: function() {
              return this.$refs.input.validationMessage;
            },
          },
          willValidate: {
            cache: !1,
            get: function() {
              return this.$refs.input.willValidate;
            },
          },
        },
        methods: {
          setCustomValidity: function() {
            var t;
            return (t = this.$refs.input).setCustomValidity.apply(t, arguments);
          },
          checkValidity: function() {
            var t;
            return (t = this.$refs.input).checkValidity.apply(t, arguments);
          },
          reportValidity: function() {
            var t;
            return (t = this.$refs.input).reportValidity.apply(t, arguments);
          },
        },
      };
    function ca(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function fa(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ca(n, !0).forEach(function(e) {
              da(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : ca(n).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return t;
    }
    function da(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var ha = ['text', 'password', 'email', 'number', 'url', 'tel', 'search', 'range', 'color', 'date', 'time', 'datetime', 'datetime-local', 'month', 'week'],
      pa = r.extend({
        name: 'BFormInput',
        mixins: [Mr, qo, Zo, jo, sa, la, ua],
        props: {
          type: {
            type: String,
            default: 'text',
            validator: function(t) {
              return f(ha, t);
            },
          },
          noWheel: { type: Boolean, default: !1 },
          min: { type: [String, Number], default: null },
          max: { type: [String, Number], default: null },
          step: { type: [String, Number], default: null },
          list: { type: String, default: null },
        },
        computed: {
          localType: function() {
            return f(ha, this.type) ? this.type : 'text';
          },
        },
        watch: {
          noWheel: function(t) {
            this.setWheelStopper(t);
          },
        },
        mounted: function() {
          this.setWheelStopper(this.noWheel);
        },
        deactivated: function() {
          this.setWheelStopper(!1);
        },
        activated: function() {
          this.setWheelStopper(this.noWheel);
        },
        beforeDestroy: function() {
          this.setWheelStopper(!1);
        },
        methods: {
          setWheelStopper: function(t) {
            var e = this.$el;
            t
              ? (Ht(e, 'focus', this.onWheelFocus), Ht(e, 'blur', this.onWheelBlur))
              : (zt(e, 'focus', this.onWheelFocus), zt(e, 'blur', this.onWheelBlur), zt(document, 'wheel', this.stopWheel));
          },
          onWheelFocus: function(t) {
            Ht(document, 'wheel', this.stopWheel);
          },
          onWheelBlur: function(t) {
            zt(document, 'wheel', this.stopWheel);
          },
          stopWheel: function(t) {
            t.preventDefault(), this.$el.blur();
          },
        },
        render: function(t) {
          return t('input', {
            ref: 'input',
            class: this.computedClass,
            directives: [{ name: 'model', rawName: 'v-model', value: this.localValue, expression: 'localValue' }],
            attrs: {
              id: this.safeId(),
              name: this.name,
              form: this.form || null,
              type: this.localType,
              disabled: this.disabled,
              placeholder: this.placeholder,
              required: this.required,
              autocomplete: this.autocomplete || null,
              readonly: this.readonly || this.plaintext,
              min: this.min,
              max: this.max,
              step: this.step,
              list: 'password' !== this.localType ? this.list : null,
              'aria-required': this.required ? 'true' : null,
              'aria-invalid': this.computedAriaInvalid,
            },
            domProps: { value: this.localValue },
            on: fa({}, this.$listeners, { input: this.onInput, change: this.onChange, blur: this.onBlur }),
          });
        },
      }),
      ma = wt({ components: { BFormInput: pa, BInput: pa } });
    function va(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function ga(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? va(n, !0).forEach(function(e) {
              ba(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : va(n).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return t;
    }
    function ba(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var ya = r.extend({
        name: 'BFormTextarea',
        directives: { 'b-visible': Sr },
        mixins: [Mr, Jr, qo, Zo, jo, sa, la, ua],
        props: {
          rows: { type: [Number, String], default: 2 },
          maxRows: { type: [Number, String], default: null },
          wrap: { type: String, default: 'soft' },
          noResize: { type: Boolean, default: !1 },
          noAutoShrink: { type: Boolean, default: !1 },
        },
        data: function() {
          return { heightInPx: null };
        },
        computed: {
          computedStyle: function() {
            var t = { resize: !this.computedRows || this.noResize ? 'none' : null };
            return this.computedRows || ((t.height = this.heightInPx), (t.overflowY = 'scroll')), t;
          },
          computedMinRows: function() {
            return Math.max(parseInt(this.rows, 10) || 2, 2);
          },
          computedMaxRows: function() {
            return Math.max(this.computedMinRows, parseInt(this.maxRows, 10) || 0);
          },
          computedRows: function() {
            return this.computedMinRows === this.computedMaxRows ? this.computedMinRows : null;
          },
        },
        watch: {
          localValue: function(t, e) {
            this.setHeight();
          },
        },
        mounted: function() {
          this.setHeight();
        },
        methods: {
          visibleCallback: function(t) {
            t && this.$nextTick(this.setHeight);
          },
          setHeight: function() {
            var t = this;
            this.$nextTick(function() {
              Lt(function() {
                t.heightInPx = t.computeHeight();
              });
            });
          },
          computeHeight: function() {
            if (this.$isServer || !Q(this.computedRows)) return null;
            var t = this.$el;
            if (!Ut(t)) return null;
            var e = le(t),
              n = parseFloat(e.lineHeight),
              r = (parseFloat(e.borderTopWidth) || 0) + (parseFloat(e.borderBottomWidth) || 0),
              i = (parseFloat(e.paddingTop) || 0) + (parseFloat(e.paddingBottom) || 0),
              o = r + i,
              a = n * this.computedMinRows + o,
              s = t.style.height || e.height;
            t.style.height = 'auto';
            var l = t.scrollHeight;
            t.style.height = s;
            var u = Math.max((l - i) / n, 2),
              c = Math.min(Math.max(u, this.computedMinRows), this.computedMaxRows),
              f = Math.max(Math.ceil(c * n + o), a);
            return this.noAutoShrink && (parseFloat(s) || 0) > f ? s : ''.concat(f, 'px');
          },
        },
        render: function(t) {
          return t('textarea', {
            ref: 'input',
            class: this.computedClass,
            style: this.computedStyle,
            directives: [
              { name: 'model', value: this.localValue },
              { name: 'b-visible', value: this.visibleCallback, modifiers: { 640: !0 } },
            ],
            attrs: {
              id: this.safeId(),
              name: this.name,
              form: this.form || null,
              disabled: this.disabled,
              placeholder: this.placeholder,
              required: this.required,
              autocomplete: this.autocomplete || null,
              readonly: this.readonly || this.plaintext,
              rows: this.computedRows,
              wrap: this.wrap || null,
              'aria-required': this.required ? 'true' : null,
              'aria-invalid': this.computedAriaInvalid,
            },
            domProps: { value: this.localValue },
            on: ga({}, this.$listeners, { input: this.onInput, change: this.onChange, blur: this.onBlur }),
          });
        },
      }),
      wa = wt({ components: { BFormTextarea: ya, BTextarea: ya } }),
      Oa = {
        props: { plain: { type: Boolean, default: !1 } },
        computed: {
          custom: function() {
            return !this.plain;
          },
        },
      };
    function Sa(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function _a(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Sa(n, !0).forEach(function(e) {
              ka(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Sa(n).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return t;
    }
    function ka(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var xa = r.extend({
        name: 'BFormFile',
        mixins: [Mr, qo, jo, Oa, Te],
        inheritAttrs: !1,
        model: { prop: 'value', event: 'input' },
        props: {
          size: {
            type: String,
            default: function() {
              return Ct('BFormControl', 'size');
            },
          },
          value: {
            type: [K, Array],
            default: null,
            validator: function(t) {
              return '' === t
                ? (o(''.concat('BFormFile', " - setting value/v-model to an empty string for reset is deprecated. Set to 'null' instead")), !0)
                : tt(t) || st(t) || (c(t) && (0 === t.length || t.every(st)));
            },
          },
          accept: { type: String, default: '' },
          capture: { type: Boolean, default: !1 },
          placeholder: {
            type: String,
            default: function() {
              return Ct('BFormFile', 'placeholder');
            },
          },
          browseText: {
            type: String,
            default: function() {
              return Ct('BFormFile', 'browseText');
            },
          },
          dropPlaceholder: {
            type: String,
            default: function() {
              return Ct('BFormFile', 'dropPlaceholder');
            },
          },
          multiple: { type: Boolean, default: !1 },
          directory: { type: Boolean, default: !1 },
          noTraverse: { type: Boolean, default: !1 },
          noDrop: { type: Boolean, default: !1 },
          fileNameFormatter: { type: Function, default: null },
        },
        data: function() {
          return { selectedFile: null, dragging: !1, hasFocus: !1 };
        },
        computed: {
          selectLabel: function() {
            if (this.dragging && this.dropPlaceholder) return this.dropPlaceholder;
            if (!this.selectedFile || 0 === this.selectedFile.length) return this.placeholder;
            var t = d(this.selectedFile).filter(Boolean);
            return this.hasNormalizedSlot('file-name')
              ? [
                  this.normalizeSlot('file-name', {
                    files: t,
                    names: t.map(function(t) {
                      return t.name;
                    }),
                  }),
                ]
              : et(this.fileNameFormatter)
              ? String(this.fileNameFormatter(t))
              : t
                  .map(function(t) {
                    return t.name;
                  })
                  .join(', ');
          },
        },
        watch: {
          selectedFile: function(t, e) {
            t === e ||
              (c(t) &&
                c(e) &&
                t.length === e.length &&
                t.every(function(t, n) {
                  return t === e[n];
                })) ||
              (!t && this.multiple ? this.$emit('input', []) : this.$emit('input', t));
          },
          value: function(t) {
            (!t || (c(t) && 0 === t.length)) && this.reset();
          },
        },
        methods: {
          focusHandler: function(t) {
            this.plain || 'focusout' === t.type ? (this.hasFocus = !1) : (this.hasFocus = !0);
          },
          reset: function() {
            try {
              this.$refs.input.value = '';
            } catch (t) {}
            (this.$refs.input.type = ''), (this.$refs.input.type = 'file'), (this.selectedFile = this.multiple ? [] : null);
          },
          onFileChange: function(t) {
            var e = this;
            this.$emit('change', t);
            var n = t.dataTransfer && t.dataTransfer.items;
            if (!n || this.noTraverse) this.setFiles(t.target.files || t.dataTransfer.files);
            else {
              for (var r = [], i = 0; i < n.length; i++) {
                var o = n[i].webkitGetAsEntry();
                o && r.push(this.traverseFileTree(o));
              }
              Promise.all(r).then(function(t) {
                e.setFiles(u(t));
              });
            }
          },
          setFiles: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            if (t)
              if (this.multiple) {
                for (var e = [], n = 0; n < t.length; n++) e.push(t[n]);
                this.selectedFile = e;
              } else this.selectedFile = t[0] || null;
            else this.selectedFile = null;
          },
          onReset: function() {
            this.selectedFile = this.multiple ? [] : null;
          },
          onDragover: function(t) {
            t.preventDefault(), t.stopPropagation(), !this.noDrop && this.custom && ((this.dragging = !0), (t.dataTransfer.dropEffect = 'copy'));
          },
          onDragleave: function(t) {
            t.preventDefault(), t.stopPropagation(), (this.dragging = !1);
          },
          onDrop: function(t) {
            t.preventDefault(), t.stopPropagation(), this.noDrop || ((this.dragging = !1), t.dataTransfer.files && t.dataTransfer.files.length > 0 && this.onFileChange(t));
          },
          traverseFileTree: function(t, e) {
            var n = this;
            return new Promise(function(r) {
              (e = e || ''),
                t.isFile
                  ? t.file(function(t) {
                      (t.$path = e), r(t);
                    })
                  : t.isDirectory &&
                    t.createReader().readEntries(function(i) {
                      for (var o = [], a = 0; a < i.length; a++) o.push(n.traverseFileTree(i[a], e + t.name + '/'));
                      Promise.all(o).then(function(t) {
                        r(u(t));
                      });
                    });
            });
          },
        },
        render: function(t) {
          var e = t('input', {
            ref: 'input',
            class: [{ 'form-control-file': this.plain, 'custom-file-input': this.custom, focus: this.custom && this.hasFocus }, this.stateClass],
            attrs: _a({}, this.$attrs, {
              type: 'file',
              id: this.safeId(),
              name: this.name,
              disabled: this.disabled,
              required: this.required,
              form: this.form || null,
              capture: this.capture || null,
              accept: this.accept || null,
              multiple: this.multiple,
              webkitdirectory: this.directory,
              'aria-required': this.required ? 'true' : null,
            }),
            on: { change: this.onFileChange, focusin: this.focusHandler, focusout: this.focusHandler, reset: this.onReset },
          });
          if (this.plain) return e;
          var n = t(
            'label',
            { staticClass: 'custom-file-label', class: [this.dragging ? 'dragging' : null], attrs: { for: this.safeId(), 'data-browse': this.browseText || null } },
            this.selectLabel
          );
          return t(
            'div',
            {
              staticClass: 'custom-file b-form-file',
              class: [this.stateClass, ka({}, 'b-custom-control-'.concat(this.size), Boolean(this.size))],
              attrs: { id: this.safeId('_BV_file_outer_') },
              on: { dragover: this.onDragover, dragleave: this.onDragleave, drop: this.onDrop },
            },
            [e, n]
          );
        },
      }),
      Ta = wt({ components: { BFormFile: xa, BFile: xa } });
    function Pa(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function ja(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Pa(n, !0).forEach(function(e) {
              Ca(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Pa(n).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return t;
    }
    function Ca(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var Ba = r.extend({
        name: 'BFormSelect',
        mixins: [Mr, Te, qo, Zo, jo, Oa, po],
        model: { prop: 'value', event: 'input' },
        props: { value: {}, multiple: { type: Boolean, default: !1 }, selectSize: { type: Number, default: 0 }, ariaInvalid: { type: [Boolean, String], default: !1 } },
        data: function() {
          return { localValue: this.value };
        },
        computed: {
          computedSelectSize: function() {
            return this.plain || 0 !== this.selectSize ? this.selectSize : null;
          },
          inputClass: function() {
            return [
              this.plain ? 'form-control' : 'custom-select',
              this.size && this.plain ? 'form-control-'.concat(this.size) : null,
              this.size && !this.plain ? 'custom-select-'.concat(this.size) : null,
              this.stateClass,
            ];
          },
          computedAriaInvalid: function() {
            return !0 === this.ariaInvalid || 'true' === this.ariaInvalid ? 'true' : 'is-invalid' === this.stateClass ? 'true' : null;
          },
        },
        watch: {
          value: function(t, e) {
            this.localValue = t;
          },
          localValue: function(t, e) {
            this.$emit('input', this.localValue);
          },
        },
        methods: {
          focus: function() {
            this.$refs.input.focus();
          },
          blur: function() {
            this.$refs.input.blur();
          },
        },
        render: function(t) {
          var e = this,
            n = this.formOptions.map(function(e, n) {
              return t('option', { key: 'option_'.concat(n, '_opt'), attrs: { disabled: Boolean(e.disabled) }, domProps: ja({}, on(e.html, e.text), { value: e.value }) });
            });
          return t(
            'select',
            {
              ref: 'input',
              class: this.inputClass,
              directives: [{ name: 'model', rawName: 'v-model', value: this.localValue, expression: 'localValue' }],
              attrs: {
                id: this.safeId(),
                name: this.name,
                form: this.form || null,
                multiple: this.multiple || null,
                size: this.computedSelectSize,
                disabled: this.disabled,
                required: this.required,
                'aria-required': this.required ? 'true' : null,
                'aria-invalid': this.computedAriaInvalid,
              },
              on: {
                change: function(t) {
                  var n = t.target,
                    r = u(n.options)
                      .filter(function(t) {
                        return t.selected;
                      })
                      .map(function(t) {
                        return '_value' in t ? t._value : t.value;
                      });
                  (e.localValue = n.multiple ? r : r[0]),
                    e.$nextTick(function() {
                      e.$emit('change', e.localValue);
                    });
                },
              },
            },
            [this.normalizeSlot('first'), n, this.normalizeSlot('default')]
          );
        },
      }),
      $a = wt({ components: { BFormSelect: Ba, BSelect: Ba } }),
      Aa = wt({ components: { BImg: Tr, BImgLazy: Cr } }),
      Ea = { tag: { type: String, default: 'div' } },
      Ia = r.extend({
        name: 'BInputGroupText',
        functional: !0,
        props: Ea,
        render: function(t, e) {
          var n = e.props,
            r = e.data,
            i = e.children;
          return t(n.tag, ve(r, { staticClass: 'input-group-text' }), i);
        },
      });
    function Da(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Na(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var Fa = { id: { type: String, default: null }, tag: { type: String, default: 'div' }, isText: { type: Boolean, default: !1 } },
      Ra = r.extend({
        name: 'BInputGroupAddon',
        functional: !0,
        props: (function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? Da(n, !0).forEach(function(e) {
                  Na(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : Da(n).forEach(function(e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
          }
          return t;
        })({}, Fa, { append: { type: Boolean, default: !1 } }),
        render: function(t, e) {
          var n = e.props,
            r = e.data,
            i = e.children;
          return t(n.tag, ve(r, { class: { 'input-group-append': n.append, 'input-group-prepend': !n.append }, attrs: { id: n.id } }), n.isText ? [t(Ia, i)] : i);
        },
      });
    function La(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Va(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? La(n, !0).forEach(function(e) {
              Ma(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : La(n).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return t;
    }
    function Ma(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var Ha = r.extend({
      name: 'BInputGroupPrepend',
      functional: !0,
      props: Fa,
      render: function(t, e) {
        var n = e.props,
          r = e.data,
          i = e.children;
        return t(Ra, ve(r, { props: Va({}, n, { append: !1 }) }), i);
      },
    });
    function za(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Ga(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? za(n, !0).forEach(function(e) {
              Ua(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : za(n).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return t;
    }
    function Ua(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var Wa = r.extend({
      name: 'BInputGroupAppend',
      functional: !0,
      props: Fa,
      render: function(t, e) {
        var n = e.props,
          r = e.data,
          i = e.children;
        return t(Ra, ve(r, { props: Ga({}, n, { append: !0 }) }), i);
      },
    });
    function qa(t) {
      return (
        (function(t) {
          if (Array.isArray(t)) {
            for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
            return n;
          }
        })(t) ||
        (function(t) {
          if (Symbol.iterator in Object(t) || '[object Arguments]' === Object.prototype.toString.call(t)) return Array.from(t);
        })(t) ||
        (function() {
          throw new TypeError('Invalid attempt to spread non-iterable instance');
        })()
      );
    }
    var Ka = {
        id: { type: String },
        size: {
          type: String,
          default: function() {
            return Ct('BInputGroup', 'size');
          },
        },
        prepend: { type: String },
        prependHtml: { type: String },
        append: { type: String },
        appendHtml: { type: String },
        tag: { type: String, default: 'div' },
      },
      Ja = wt({
        components: {
          BInputGroup: r.extend({
            name: 'BInputGroup',
            functional: !0,
            props: Ka,
            render: function(t, e) {
              var n,
                r,
                i,
                o = e.props,
                a = e.data,
                s = e.slots,
                l = e.scopedSlots,
                u = s(),
                c = l || {},
                f = [];
              return (
                o.prepend || o.prependHtml || ke('prepend', c, u)
                  ? f.push(t(Ha, [o.prepend || o.prependHtml ? t(Ia, { domProps: on(o.prependHtml, o.prepend) }) : t(), xe('prepend', {}, c, u) || t()]))
                  : f.push(t()),
                ke('default', c, u) ? f.push.apply(f, qa(xe('default', {}, c, u))) : f.push(t()),
                o.append || o.appendHtml || ke('append', c, u)
                  ? f.push(t(Wa, [o.append || o.appendHtml ? t(Ia, { domProps: on(o.appendHtml, o.append) }) : t(), xe('append', {}, c, u) || t()]))
                  : f.push(t()),
                t(
                  o.tag,
                  ve(a, {
                    staticClass: 'input-group',
                    class:
                      ((n = {}),
                      (r = 'input-group-'.concat(o.size)),
                      (i = Boolean(o.size)),
                      r in n ? Object.defineProperty(n, r, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (n[r] = i),
                      n),
                    attrs: { id: o.id || null, role: 'group' },
                  }),
                  f
                )
              );
            },
          }),
          BInputGroupAddon: Ra,
          BInputGroupPrepend: Ha,
          BInputGroupAppend: Wa,
          BInputGroupText: Ia,
        },
      }),
      Xa = { tag: { type: String, default: 'div' }, fluid: { type: Boolean, default: !1 } },
      Ya = r.extend({
        name: 'BContainer',
        functional: !0,
        props: Xa,
        render: function(t, e) {
          var n = e.props,
            r = e.data,
            i = e.children;
          return t(n.tag, ve(r, { class: { container: !n.fluid, 'container-fluid': n.fluid } }), i);
        },
      });
    function Za(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var Qa = {
        fluid: { type: Boolean, default: !1 },
        containerFluid: { type: Boolean, default: !1 },
        header: { type: String, default: null },
        headerHtml: { type: String, default: null },
        headerTag: { type: String, default: 'h1' },
        headerLevel: { type: [Number, String], default: '3' },
        lead: { type: String, default: null },
        leadHtml: { type: String, default: null },
        leadTag: { type: String, default: 'p' },
        tag: { type: String, default: 'div' },
        bgVariant: {
          type: String,
          default: function() {
            return Ct('BJumbotron', 'bgVariant');
          },
        },
        borderVariant: {
          type: String,
          default: function() {
            return Ct('BJumbotron', 'borderVariant');
          },
        },
        textVariant: {
          type: String,
          default: function() {
            return Ct('BJumbotron', 'textVariant');
          },
        },
      },
      ts = wt({
        components: {
          BJumbotron: r.extend({
            name: 'BJumbotron',
            functional: !0,
            props: Qa,
            render: function(t, e) {
              var n,
                r = e.props,
                i = e.data,
                o = e.slots,
                a = e.scopedSlots,
                s = [],
                l = o(),
                u = a || {};
              return (
                (r.header || ke('header', u, l) || r.headerHtml) &&
                  s.push(t(r.headerTag, { class: Za({}, 'display-'.concat(r.headerLevel), Boolean(r.headerLevel)) }, xe('header', {}, u, l) || r.headerHtml || rn(r.header))),
                (r.lead || ke('lead', u, l) || r.leadHtml) && s.push(t(r.leadTag, { staticClass: 'lead' }, xe('lead', {}, u, l) || r.leadHtml || rn(r.lead))),
                ke('default', u, l) && s.push(xe('default', {}, u, l)),
                r.fluid && (s = [t(Ya, { props: { fluid: r.containerFluid } }, s)]),
                t(
                  r.tag,
                  ve(i, {
                    staticClass: 'jumbotron',
                    class:
                      ((n = { 'jumbotron-fluid': r.fluid }),
                      Za(n, 'text-'.concat(r.textVariant), Boolean(r.textVariant)),
                      Za(n, 'bg-'.concat(r.bgVariant), Boolean(r.bgVariant)),
                      Za(n, 'border-'.concat(r.borderVariant), Boolean(r.borderVariant)),
                      Za(n, 'border', Boolean(r.borderVariant)),
                      n),
                  }),
                  s
                )
              );
            },
          }),
        },
      });
    function es(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var ns = ['start', 'end', 'center'],
      rs = {
        tag: { type: String, default: 'div' },
        noGutters: { type: Boolean, default: !1 },
        alignV: {
          type: String,
          default: null,
          validator: function(t) {
            return f(ns.concat(['baseline', 'stretch']), t);
          },
        },
        alignH: {
          type: String,
          default: null,
          validator: function(t) {
            return f(ns.concat(['between', 'around']), t);
          },
        },
        alignContent: {
          type: String,
          default: null,
          validator: function(t) {
            return f(ns.concat(['between', 'around', 'stretch']), t);
          },
        },
      },
      is = wt({
        components: {
          BContainer: Ya,
          BRow: r.extend({
            name: 'BRow',
            functional: !0,
            props: rs,
            render: function(t, e) {
              var n,
                r = e.props,
                i = e.data,
                o = e.children;
              return t(
                r.tag,
                ve(i, {
                  staticClass: 'row',
                  class:
                    ((n = { 'no-gutters': r.noGutters }),
                    es(n, 'align-items-'.concat(r.alignV), r.alignV),
                    es(n, 'justify-content-'.concat(r.alignH), r.alignH),
                    es(n, 'align-content-'.concat(r.alignContent), r.alignContent),
                    n),
                }),
                o
              );
            },
          }),
          BCol: No,
          BFormRow: To,
        },
      }),
      os = wt({ components: { BLink: Xe } });
    var as = { tag: { type: String, default: 'div' }, flush: { type: Boolean, default: !1 }, horizontal: { type: [Boolean, String], default: !1 } },
      ss = r.extend({
        name: 'BListGroup',
        functional: !0,
        props: as,
        render: function(t, e) {
          var n = e.props,
            r = e.data,
            i = e.children,
            o = '' === n.horizontal || n.horizontal;
          o = !n.flush && o;
          var a,
            s,
            l,
            u = {
              staticClass: 'list-group',
              class:
                ((a = { 'list-group-flush': n.flush, 'list-group-horizontal': !0 === o }),
                (s = 'list-group-horizontal-'.concat(o)),
                (l = rt(o)),
                s in a ? Object.defineProperty(a, s, { value: l, enumerable: !0, configurable: !0, writable: !0 }) : (a[s] = l),
                a),
            };
          return t(n.tag, ve(r, u), i);
        },
      });
    function ls(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function us(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var cs = ['a', 'router-link', 'button', 'b-link'],
      fs = Je();
    delete fs.href.default, delete fs.to.default;
    var ds = (function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ls(n, !0).forEach(function(e) {
                us(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : ls(n).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      })(
        {
          tag: { type: String, default: 'div' },
          action: { type: Boolean, default: null },
          button: { type: Boolean, default: null },
          variant: {
            type: String,
            default: function() {
              return Ct('BListGroupItem', 'variant');
            },
          },
        },
        fs
      ),
      hs = wt({
        components: {
          BListGroup: ss,
          BListGroupItem: r.extend({
            name: 'BListGroupItem',
            functional: !0,
            props: ds,
            render: function(t, e) {
              var n,
                r = e.props,
                i = e.data,
                o = e.children,
                a = r.button ? 'button' : r.href || r.to ? Xe : r.tag,
                s = Boolean(r.href || r.to || r.action || r.button || f(cs, r.tag)),
                l = {},
                u = {};
              return (
                'button' === a ? ((i.attrs && i.attrs.type) || (l.type = 'button'), r.disabled && (l.disabled = !0)) : (u = Ie(fs, r)),
                t(
                  a,
                  ve(i, {
                    attrs: l,
                    props: u,
                    staticClass: 'list-group-item',
                    class:
                      ((n = {}),
                      us(n, 'list-group-item-'.concat(r.variant), Boolean(r.variant)),
                      us(n, 'list-group-item-action', s),
                      us(n, 'active', r.active),
                      us(n, 'disabled', r.disabled),
                      n),
                  }),
                  o
                )
              );
            },
          }),
        },
      }),
      ps = { tag: { type: String, default: 'div' } },
      ms = r.extend({
        name: 'BMediaBody',
        functional: !0,
        props: ps,
        render: function(t, e) {
          var n = e.props,
            r = e.data,
            i = e.children;
          return t(n.tag, ve(r, { staticClass: 'media-body' }), i);
        },
      });
    var vs = { tag: { type: String, default: 'div' }, verticalAlign: { type: String, default: 'top' } },
      gs = r.extend({
        name: 'BMediaAside',
        functional: !0,
        props: vs,
        render: function(t, e) {
          var n,
            r,
            i,
            o = e.props,
            a = e.data,
            s = e.children,
            l = 'top' === o.verticalAlign ? 'start' : 'bottom' === o.verticalAlign ? 'end' : o.verticalAlign;
          return t(
            o.tag,
            ve(a, {
              staticClass: 'd-flex',
              class:
                ((n = {}),
                (r = 'align-self-'.concat(l)),
                (i = l),
                r in n ? Object.defineProperty(n, r, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (n[r] = i),
                n),
            }),
            s
          );
        },
      }),
      bs = {
        tag: { type: String, default: 'div' },
        rightAlign: { type: Boolean, default: !1 },
        verticalAlign: { type: String, default: 'top' },
        noBody: { type: Boolean, default: !1 },
      },
      ys = wt({
        components: {
          BMedia: r.extend({
            name: 'BMedia',
            functional: !0,
            props: bs,
            render: function(t, e) {
              var n = e.props,
                r = e.data,
                i = e.slots,
                o = e.scopedSlots,
                a = e.children,
                s = n.noBody ? a : [];
              if (!n.noBody) {
                var l = i(),
                  u = o || {},
                  c = xe('aside', {}, u, l),
                  f = xe('default', {}, u, l);
                c && !n.rightAlign && s.push(t(gs, { staticClass: 'mr-3', props: { verticalAlign: n.verticalAlign } }, c)),
                  s.push(t(ms, {}, f)),
                  c && n.rightAlign && s.push(t(gs, { staticClass: 'ml-3', props: { verticalAlign: n.verticalAlign } }, c));
              }
              return t(n.tag, ve(r, { staticClass: 'media' }), s);
            },
          }),
          BMediaAside: gs,
          BMediaBody: ms,
        },
      }),
      ws = r.extend({
        abstract: !0,
        name: 'BTransporterTargetSingle',
        props: { nodes: { type: [Array, Function] } },
        data: function(t) {
          return { updatedNodes: t.nodes };
        },
        destroyed: function() {
          var t = this.$el;
          t && t.parentNode && t.parentNode.removeChild(t);
        },
        render: function(t) {
          var e = et(this.updatedNodes) ? this.updatedNodes({}) : this.updatedNodes;
          return (e = d(e).filter(Boolean)) && e.length > 0 && !e[0].text ? e[0] : t();
        },
      }),
      Os = r.extend({
        name: 'BTransporterSingle',
        mixins: [Te],
        props: { disabled: { type: Boolean, default: !1 }, container: { type: [String, W], default: 'body' }, tag: { type: String, default: 'div' } },
        watch: {
          disabled: {
            immediate: !0,
            handler: function(t) {
              t ? this.unmountTarget() : this.$nextTick(this.mountTarget);
            },
          },
        },
        created: function() {
          (this._bv_defaultFn = null), (this._bv_target = null);
        },
        beforeMount: function() {
          this.mountTarget();
        },
        updated: function() {
          var t = this;
          this.$nextTick(function() {
            t.updateTarget();
          });
        },
        beforeDestroy: function() {
          this.unmountTarget(), (this._bv_defaultFn = null);
        },
        methods: {
          getContainer: function() {
            if (i.j) {
              var t = this.container;
              return rt(t) ? Jt(t) : t;
            }
            return null;
          },
          mountTarget: function() {
            if (!this._bv_target) {
              var t = this.getContainer();
              if (t) {
                var e = document.createElement('div');
                t.appendChild(e), (this._bv_target = new ws({ el: e, parent: this, propsData: { nodes: d(this.normalizeSlot('default')) } }));
              }
            }
          },
          updateTarget: function() {
            if (i.j && this._bv_target) {
              var t = this.$scopedSlots.default;
              this.disabled || (t && this._bv_defaultFn !== t ? (this._bv_target.updatedNodes = t) : t || (this._bv_target.updatedNodes = this.$slots.default)),
                (this._bv_defaultFn = t);
            }
          },
          unmountTarget: function() {
            this._bv_target && (this._bv_target.$destroy(), (this._bv_target = null));
          },
        },
        render: function(t) {
          if (this.disabled) {
            var e = d(this.normalizeSlot('default')).filter(Boolean);
            if (e.length > 0 && !e[0].text) return e[0];
          }
          return t();
        },
      }),
      Ss = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (t && t.$options._scopeId) || e;
      };
    var _s = {
        computed: {
          scopedStyleAttrs: function() {
            var t,
              e,
              n,
              r = Ss(this.$parent);
            return r ? ((n = ''), (e = r) in (t = {}) ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t) : {};
          },
        },
      },
      ks = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
      xs = '.sticky-top',
      Ts = '.navbar-toggler',
      Ps = new (r.extend({
        data: function() {
          return { modals: [], baseZIndex: null, scrollbarWidth: null, isBodyOverflowing: !1 };
        },
        computed: {
          modalCount: function() {
            return this.modals.length;
          },
          modalsAreOpen: function() {
            return this.modalCount > 0;
          },
        },
        watch: {
          modalCount: function(t, e) {
            i.j &&
              (this.getScrollbarWidth(),
              t > 0 && 0 === e
                ? (this.checkScrollbar(), this.setScrollbar(), te(document.body, 'modal-open'))
                : 0 === t && e > 0 && (this.resetScrollbar(), ee(document.body, 'modal-open')),
              re(document.body, 'data-modal-open-count', String(t)));
          },
          modals: function(t, e) {
            var n = this;
            this.checkScrollbar(),
              Lt(function() {
                n.updateModals(t || []);
              });
          },
        },
        methods: {
          registerModal: function(t) {
            var e = this;
            t &&
              -1 === this.modals.indexOf(t) &&
              (this.modals.push(t),
              t.$once('hook:beforeDestroy', function() {
                e.unregisterModal(t);
              }));
          },
          unregisterModal: function(t) {
            var e = this.modals.indexOf(t);
            e > -1 && (this.modals.splice(e, 1), t._isBeingDestroyed || t._isDestroyed || this.resetModal(t));
          },
          getBaseZIndex: function() {
            if (Q(this.baseZIndex) && i.j) {
              var t = document.createElement('div');
              (t.className = 'modal-backdrop d-none'),
                (t.style.display = 'none'),
                document.body.appendChild(t),
                (this.baseZIndex = parseInt(le(t).zIndex || 1040, 10)),
                document.body.removeChild(t);
            }
            return this.baseZIndex || 1040;
          },
          getScrollbarWidth: function() {
            if (Q(this.scrollbarWidth) && i.j) {
              var t = document.createElement('div');
              (t.className = 'modal-scrollbar-measure'), document.body.appendChild(t), (this.scrollbarWidth = se(t).width - t.clientWidth), document.body.removeChild(t);
            }
            return this.scrollbarWidth || 0;
          },
          updateModals: function(t) {
            var e = this,
              n = this.getBaseZIndex(),
              r = this.getScrollbarWidth();
            t.forEach(function(t, i) {
              (t.zIndex = n + i), (t.scrollbarWidth = r), (t.isTop = i === e.modals.length - 1), (t.isBodyOverflowing = e.isBodyOverflowing);
            });
          },
          resetModal: function(t) {
            t && ((t.zIndex = this.getBaseZIndex()), (t.isTop = !0), (t.isBodyOverflowing = !1));
          },
          checkScrollbar: function() {
            var t = se(document.body),
              e = t.left,
              n = t.right;
            this.isBodyOverflowing = e + n < window.innerWidth;
          },
          setScrollbar: function() {
            var t = document.body;
            if (((t._paddingChangedForModal = t._paddingChangedForModal || []), (t._marginChangedForModal = t._marginChangedForModal || []), this.isBodyOverflowing)) {
              var e = this.scrollbarWidth;
              Kt(ks).forEach(function(n) {
                var r = n.style.paddingRight,
                  i = le(n).paddingRight || 0;
                re(n, 'data-padding-right', r), (n.style.paddingRight = ''.concat(parseFloat(i) + e, 'px')), t._paddingChangedForModal.push(n);
              }),
                Kt(xs).forEach(function(n) {
                  var r = n.style.marginRight,
                    i = le(n).marginRight || 0;
                  re(n, 'data-margin-right', r), (n.style.marginRight = ''.concat(parseFloat(i) - e, 'px')), t._marginChangedForModal.push(n);
                }),
                Kt(Ts).forEach(function(n) {
                  var r = n.style.marginRight,
                    i = le(n).marginRight || 0;
                  re(n, 'data-margin-right', r), (n.style.marginRight = ''.concat(parseFloat(i) + e, 'px')), t._marginChangedForModal.push(n);
                });
              var n = t.style.paddingRight,
                r = le(t).paddingRight;
              re(t, 'data-padding-right', n), (t.style.paddingRight = ''.concat(parseFloat(r) + e, 'px'));
            }
          },
          resetScrollbar: function() {
            var t = document.body;
            t._paddingChangedForModal &&
              t._paddingChangedForModal.forEach(function(t) {
                ae(t, 'data-padding-right') && ((t.style.paddingRight = oe(t, 'data-padding-right') || ''), ie(t, 'data-padding-right'));
              }),
              t._marginChangedForModal &&
                t._marginChangedForModal.forEach(function(t) {
                  ae(t, 'data-margin-right') && ((t.style.marginRight = oe(t, 'data-margin-right') || ''), ie(t, 'data-margin-right'));
                }),
              (t._paddingChangedForModal = null),
              (t._marginChangedForModal = null),
              ae(t, 'data-padding-right') && ((t.style.paddingRight = oe(t, 'data-padding-right') || ''), ie(t, 'data-padding-right'));
          },
        },
      }))();
    function js(t) {
      return (js =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(t) {
              return typeof t;
            }
          : function(t) {
              return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
            })(t);
    }
    function Cs(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Bs(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    function $s(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }
    function As(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }
    function Es(t, e, n) {
      return (Es =
        'undefined' != typeof Reflect && Reflect.get
          ? Reflect.get
          : function(t, e, n) {
              var r = (function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Is(t)); );
                return t;
              })(t, e);
              if (r) {
                var i = Object.getOwnPropertyDescriptor(r, e);
                return i.get ? i.get.call(n) : i.value;
              }
            })(t, e, n || t);
    }
    function Is(t) {
      return (Is = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function Ds(t, e) {
      return (Ds =
        Object.setPrototypeOf ||
        function(t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    var Ns = (function(t) {
      function e(t) {
        var n,
          r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (
          (function(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          })(this, e),
          (n = (function(t, e) {
            return !e || ('object' !== js(e) && 'function' != typeof e) ? As(t) : e;
          })(this, Is(e).call(this, t, r))),
          w(As(n), { trigger: C() }),
          n
        );
      }
      var n, r, i;
      return (
        (function(t, e) {
          if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
          (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Ds(t, e);
        })(e, t),
        (n = e),
        (i = [
          {
            key: 'Defaults',
            get: function() {
              return (function(t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = null != arguments[e] ? arguments[e] : {};
                  e % 2
                    ? Cs(n, !0).forEach(function(e) {
                        Bs(t, e, n[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : Cs(n).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      });
                }
                return t;
              })({}, Es(Is(e), 'Defaults', this), { trigger: null });
            },
          },
        ]),
        (r = null) && $s(n.prototype, r),
        i && $s(n, i),
        e
      );
    })(di);
    function Fs(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Rs(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Fs(n, !0).forEach(function(e) {
              Ls(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Fs(n).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return t;
    }
    function Ls(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var Vs = { subtree: !0, childList: !0, characterData: !0, attributes: !0, attributeFilter: ['style', 'class'] },
      Ms = { passive: !0, capture: !1 },
      Hs = ['button', '[href]:not(.disabled)', 'input', 'select', 'textarea', '[tabindex]', '[contenteditable]']
        .map(function(t) {
          return ''.concat(t, ':not(:disabled):not([disabled])');
        })
        .join(', '),
      zs = function(t) {
        if (t && Ut(t) && t.focus)
          try {
            t.focus();
          } catch (t) {}
        return document.activeElement === t;
      },
      Gs = {
        size: {
          type: String,
          default: function() {
            return Ct('BModal', 'size');
          },
        },
        centered: { type: Boolean, default: !1 },
        scrollable: { type: Boolean, default: !1 },
        buttonSize: { type: String, default: '' },
        noStacking: { type: Boolean, default: !1 },
        noFade: { type: Boolean, default: !1 },
        noCloseOnBackdrop: { type: Boolean, default: !1 },
        noCloseOnEsc: { type: Boolean, default: !1 },
        noEnforceFocus: { type: Boolean, default: !1 },
        title: { type: String, default: '' },
        titleHtml: { type: String },
        titleTag: {
          type: String,
          default: function() {
            return Ct('BModal', 'titleTag');
          },
        },
        titleClass: { type: [String, Array, Object], default: null },
        titleSrOnly: { type: Boolean, default: !1 },
        ariaLabel: { type: String, default: null },
        headerBgVariant: {
          type: String,
          default: function() {
            return Ct('BModal', 'headerBgVariant');
          },
        },
        headerBorderVariant: {
          type: String,
          default: function() {
            return Ct('BModal', 'headerBorderVariant');
          },
        },
        headerTextVariant: {
          type: String,
          default: function() {
            return Ct('BModal', 'headerTextVariant');
          },
        },
        headerCloseVariant: {
          type: String,
          default: function() {
            return Ct('BModal', 'headerCloseVariant');
          },
        },
        headerClass: { type: [String, Array, Object], default: null },
        bodyBgVariant: {
          type: String,
          default: function() {
            return Ct('BModal', 'bodyBgVariant');
          },
        },
        bodyTextVariant: {
          type: String,
          default: function() {
            return Ct('BModal', 'bodyTextVariant');
          },
        },
        modalClass: { type: [String, Array, Object], default: null },
        dialogClass: { type: [String, Array, Object], default: null },
        contentClass: { type: [String, Array, Object], default: null },
        bodyClass: { type: [String, Array, Object], default: null },
        footerBgVariant: {
          type: String,
          default: function() {
            return Ct('BModal', 'footerBgVariant');
          },
        },
        footerBorderVariant: {
          type: String,
          default: function() {
            return Ct('BModal', 'footerBorderVariant');
          },
        },
        footerTextVariant: {
          type: String,
          default: function() {
            return Ct('BModal', 'footerTextVariant');
          },
        },
        footerClass: { type: [String, Array, Object], default: null },
        hideHeader: { type: Boolean, default: !1 },
        hideFooter: { type: Boolean, default: !1 },
        hideHeaderClose: { type: Boolean, default: !1 },
        hideBackdrop: { type: Boolean, default: !1 },
        okOnly: { type: Boolean, default: !1 },
        okDisabled: { type: Boolean, default: !1 },
        cancelDisabled: { type: Boolean, default: !1 },
        visible: { type: Boolean, default: !1 },
        returnFocus: { type: [W, String, Object], default: null },
        headerCloseLabel: {
          type: String,
          default: function() {
            return Ct('BModal', 'headerCloseLabel');
          },
        },
        cancelTitle: {
          type: String,
          default: function() {
            return Ct('BModal', 'cancelTitle');
          },
        },
        cancelTitleHtml: { type: String },
        okTitle: {
          type: String,
          default: function() {
            return Ct('BModal', 'okTitle');
          },
        },
        okTitleHtml: { type: String },
        cancelVariant: {
          type: String,
          default: function() {
            return Ct('BModal', 'cancelVariant');
          },
        },
        okVariant: {
          type: String,
          default: function() {
            return Ct('BModal', 'okVariant');
          },
        },
        lazy: { type: Boolean, default: !1 },
        busy: { type: Boolean, default: !1 },
        static: { type: Boolean, default: !1 },
        autoFocusButton: {
          type: String,
          default: null,
          validator: function(t) {
            return tt(t) || f(['ok', 'cancel', 'close'], t);
          },
        },
      },
      Us = r.extend({
        name: 'BModal',
        mixins: [Mr, Jr, Te, _s],
        inheritAttrs: !1,
        model: { prop: 'visible', event: 'change' },
        props: Gs,
        data: function() {
          return {
            isHidden: !0,
            isVisible: !1,
            isTransitioning: !1,
            isShow: !1,
            isBlock: !1,
            isOpening: !1,
            isClosing: !1,
            ignoreBackdropClick: !1,
            isModalOverflowing: !1,
            return_focus: this.returnFocus || null,
            scrollbarWidth: 0,
            zIndex: Ps.getBaseZIndex(),
            isTop: !0,
            isBodyOverflowing: !1,
          };
        },
        computed: {
          modalClasses: function() {
            return [{ fade: !this.noFade, show: this.isShow }, this.modalClass];
          },
          modalStyles: function() {
            var t = ''.concat(this.scrollbarWidth, 'px');
            return {
              paddingLeft: !this.isBodyOverflowing && this.isModalOverflowing ? t : '',
              paddingRight: this.isBodyOverflowing && !this.isModalOverflowing ? t : '',
              display: this.isBlock ? 'block' : 'none',
            };
          },
          dialogClasses: function() {
            var t;
            return [
              ((t = {}),
              Ls(t, 'modal-'.concat(this.size), Boolean(this.size)),
              Ls(t, 'modal-dialog-centered', this.centered),
              Ls(t, 'modal-dialog-scrollable', this.scrollable),
              t),
              this.dialogClass,
            ];
          },
          headerClasses: function() {
            var t;
            return [
              ((t = {}),
              Ls(t, 'bg-'.concat(this.headerBgVariant), Boolean(this.headerBgVariant)),
              Ls(t, 'text-'.concat(this.headerTextVariant), Boolean(this.headerTextVariant)),
              Ls(t, 'border-'.concat(this.headerBorderVariant), Boolean(this.headerBorderVariant)),
              t),
              this.headerClass,
            ];
          },
          titleClasses: function() {
            return [{ 'sr-only': this.titleSrOnly }, this.titleClass];
          },
          bodyClasses: function() {
            var t;
            return [
              ((t = {}), Ls(t, 'bg-'.concat(this.bodyBgVariant), Boolean(this.bodyBgVariant)), Ls(t, 'text-'.concat(this.bodyTextVariant), Boolean(this.bodyTextVariant)), t),
              this.bodyClass,
            ];
          },
          footerClasses: function() {
            var t;
            return [
              ((t = {}),
              Ls(t, 'bg-'.concat(this.footerBgVariant), Boolean(this.footerBgVariant)),
              Ls(t, 'text-'.concat(this.footerTextVariant), Boolean(this.footerTextVariant)),
              Ls(t, 'border-'.concat(this.footerBorderVariant), Boolean(this.footerBorderVariant)),
              t),
              this.footerClass,
            ];
          },
          modalOuterStyle: function() {
            return { position: 'absolute', zIndex: this.zIndex };
          },
          slotScope: function() {
            return { ok: this.onOk, cancel: this.onCancel, close: this.onClose, hide: this.hide, visible: this.isVisible };
          },
        },
        watch: {
          visible: function(t, e) {
            t !== e && this[t ? 'show' : 'hide']();
          },
        },
        created: function() {
          this._observer = null;
        },
        mounted: function() {
          (this.zIndex = Ps.getBaseZIndex()),
            this.listenOnRoot('bv::show::modal', this.showHandler),
            this.listenOnRoot('bv::hide::modal', this.hideHandler),
            this.listenOnRoot('bv::toggle::modal', this.toggleHandler),
            this.listenOnRoot('bv::modal::show', this.modalListener),
            !0 === this.visible && this.$nextTick(this.show);
        },
        beforeDestroy: function() {
          this._observer && (this._observer.disconnect(), (this._observer = null)),
            this.setEnforceFocus(!1),
            this.setResizeEvent(!1),
            this.isVisible && ((this.isVisible = !1), (this.isShow = !1), (this.isTransitioning = !1));
        },
        methods: {
          updateModel: function(t) {
            t !== this.visible && this.$emit('change', t);
          },
          buildEvent: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return new Ns(
              t,
              Rs({ cancelable: !1, target: this.$refs.modal || this.$el || null, relatedTarget: null, trigger: null }, e, { vueTarget: this, componentId: this.safeId() })
            );
          },
          show: function() {
            if (!this.isVisible && !this.isOpening)
              if (this.isClosing) this.$once('hidden', this.show);
              else {
                (this.isOpening = !0), (this.return_focus = this.return_focus || this.getActiveElement());
                var t = this.buildEvent('show', { cancelable: !0 });
                if ((this.emitEvent(t), t.defaultPrevented || this.isVisible)) return (this.isOpening = !1), void this.updateModel(!1);
                this.doShow();
              }
          },
          hide: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
            if (this.isVisible && !this.isClosing) {
              this.isClosing = !0;
              var e = this.buildEvent('hide', { cancelable: 'FORCE' !== t, trigger: t || null });
              if (
                ('ok' === t ? this.$emit('ok', e) : 'cancel' === t ? this.$emit('cancel', e) : 'headerclose' === t && this.$emit('close', e),
                this.emitEvent(e),
                e.defaultPrevented || !this.isVisible)
              )
                return (this.isClosing = !1), void this.updateModel(!0);
              this._observer && (this._observer.disconnect(), (this._observer = null)), (this.isVisible = !1), this.updateModel(!1);
            }
          },
          toggle: function(t) {
            t && (this.return_focus = t), this.isVisible ? this.hide('toggle') : this.show();
          },
          getActiveElement: function() {
            if (i.j) {
              var t = document.activeElement;
              if (t && t !== document.body && t.focus) return t;
            }
            return null;
          },
          getTabables: function() {
            return Kt(Hs, this.$refs.content)
              .filter(Ut)
              .filter(function(t) {
                return t.tabIndex > -1 && !t.disabled;
              });
          },
          doShow: function() {
            var t = this;
            Ps.modalsAreOpen && this.noStacking
              ? this.listenOnRootOnce('bv::modal::hidden', this.doShow)
              : (Ps.registerModal(this),
                (this.isHidden = !1),
                this.$nextTick(function() {
                  (t.isVisible = !0),
                    (t.isOpening = !1),
                    t.updateModel(!0),
                    t.$nextTick(function() {
                      t._observer = Vr(t.$refs.content, t.checkModalOverflow.bind(t), Vs);
                    });
                }));
          },
          onBeforeEnter: function() {
            (this.isTransitioning = !0), this.setResizeEvent(!0);
          },
          onEnter: function() {
            this.isBlock = !0;
          },
          onAfterEnter: function() {
            var t = this;
            this.checkModalOverflow(),
              (this.isShow = !0),
              (this.isTransitioning = !1),
              Lt(function() {
                t.emitEvent(t.buildEvent('shown')),
                  t.setEnforceFocus(!0),
                  t.$nextTick(function() {
                    t.focusFirst();
                  });
              });
          },
          onBeforeLeave: function() {
            (this.isTransitioning = !0), this.setResizeEvent(!1), this.setEnforceFocus(!1);
          },
          onLeave: function() {
            this.isShow = !1;
          },
          onAfterLeave: function() {
            var t = this;
            (this.isBlock = !1),
              (this.isTransitioning = !1),
              (this.isModalOverflowing = !1),
              (this.isHidden = !0),
              this.$nextTick(function() {
                (t.isClosing = !1), Ps.unregisterModal(t), t.returnFocusTo(), t.emitEvent(t.buildEvent('hidden'));
              });
          },
          emitEvent: function(t) {
            var e = t.type;
            this.emitOnRoot('bv::modal::'.concat(e), t, t.componentId), this.$emit(e, t);
          },
          onDialogMousedown: function() {
            var t = this,
              e = this.$refs.modal;
            Ht(
              e,
              'mouseup',
              function n(r) {
                zt(e, 'mouseup', n, Ms), r.target === e && (t.ignoreBackdropClick = !0);
              },
              Ms
            );
          },
          onClickOut: function(t) {
            this.ignoreBackdropClick
              ? (this.ignoreBackdropClick = !1)
              : this.isVisible && !this.noCloseOnBackdrop && Zt(document.body, t.target) && (Zt(this.$refs.content, t.target) || this.hide('backdrop'));
          },
          onOk: function() {
            this.hide('ok');
          },
          onCancel: function() {
            this.hide('cancel');
          },
          onClose: function() {
            this.hide('headerclose');
          },
          onEsc: function(t) {
            t.keyCode === In.ESC && this.isVisible && !this.noCloseOnEsc && this.hide('esc');
          },
          focusHandler: function(t) {
            var e = this.$refs.content,
              n = t.target;
            if (!this.noEnforceFocus && this.isTop && this.isVisible && e && document !== n && !Zt(e, n)) {
              var r = this.getTabables();
              if (this.$refs.bottomTrap && n === this.$refs.bottomTrap) {
                if (zs(r[0])) return;
              } else if (this.$refs.topTrap && n === this.$refs.topTrap && zs(r[r.length - 1])) return;
              e.focus({ preventScroll: !0 });
            }
          },
          setEnforceFocus: function(t) {
            (t ? Ht : zt)(document, 'focusin', this.focusHandler, Ms);
          },
          setResizeEvent: function(t) {
            var e = t ? Ht : zt;
            e(window, 'resize', this.checkModalOverflow, Ms), e(window, 'orientationchange', this.checkModalOverflow, Ms);
          },
          showHandler: function(t, e) {
            t === this.safeId() && ((this.return_focus = e || this.getActiveElement()), this.show());
          },
          hideHandler: function(t) {
            t === this.safeId() && this.hide('event');
          },
          toggleHandler: function(t, e) {
            t === this.safeId() && this.toggle(e);
          },
          modalListener: function(t) {
            this.noStacking && t.vueTarget !== this && this.hide();
          },
          focusFirst: function() {
            var t = this;
            i.j &&
              Lt(function() {
                var e = t.$refs.modal,
                  n = t.$refs.content,
                  r = t.getActiveElement();
                if (e && n && (!r || !Zt(n, r))) {
                  var i = t.$refs['ok-button'],
                    o = t.$refs['cancel-button'],
                    a = t.$refs['close-button'],
                    s = t.autoFocusButton,
                    l = 'ok' === s && i ? i.$el || i : 'cancel' === s && o ? o.$el || o : 'close' === s && a ? a.$el || a : n;
                  zs(l),
                    l === n &&
                      t.$nextTick(function() {
                        e.scrollTop = 0;
                      });
                }
              });
          },
          returnFocusTo: function() {
            var t = this.returnFocus || this.return_focus || null;
            (this.return_focus = null),
              this.$nextTick(function() {
                (t = rt(t) ? Jt(t) : t) && ((t = t.$el || t), zs(t));
              });
          },
          checkModalOverflow: function() {
            if (this.isVisible) {
              var t = this.$refs.modal;
              this.isModalOverflowing = t.scrollHeight > document.documentElement.clientHeight;
            }
          },
          makeModal: function(t) {
            var e = t();
            if (!this.hideHeader) {
              var n = this.normalizeSlot('modal-header', this.slotScope);
              if (!n) {
                var r = t();
                this.hideHeaderClose ||
                  (r = t(
                    je,
                    {
                      ref: 'close-button',
                      props: { disabled: this.isTransitioning, ariaLabel: this.headerCloseLabel, textVariant: this.headerCloseVariant || this.headerTextVariant },
                      on: { click: this.onClose },
                    },
                    [this.normalizeSlot('modal-header-close')]
                  ));
                var i = !this.hasNormalizedSlot('modal-title') && this.titleHtml ? { innerHTML: this.titleHtml } : {};
                n = [
                  t(this.titleTag, { staticClass: 'modal-title', class: this.titleClasses, attrs: { id: this.safeId('__BV_modal_title_') }, domProps: i }, [
                    this.normalizeSlot('modal-title', this.slotScope) || rn(this.title),
                  ]),
                  r,
                ];
              }
              e = t('header', { ref: 'header', staticClass: 'modal-header', class: this.headerClasses, attrs: { id: this.safeId('__BV_modal_header_') } }, [n]);
            }
            var o = t(
                'div',
                { ref: 'body', staticClass: 'modal-body', class: this.bodyClasses, attrs: { id: this.safeId('__BV_modal_body_') } },
                this.normalizeSlot('default', this.slotScope)
              ),
              a = t();
            if (!this.hideFooter) {
              var s = this.normalizeSlot('modal-footer', this.slotScope);
              if (!s) {
                var l = t();
                if (!this.okOnly) {
                  var u = this.cancelTitleHtml ? { innerHTML: this.cancelTitleHtml } : null;
                  l = t(
                    Cn,
                    {
                      ref: 'cancel-button',
                      props: { variant: this.cancelVariant, size: this.buttonSize, disabled: this.cancelDisabled || this.busy || this.isTransitioning },
                      on: { click: this.onCancel },
                    },
                    [this.normalizeSlot('modal-cancel') || (u ? t('span', { domProps: u }) : rn(this.cancelTitle))]
                  );
                }
                var c = this.okTitleHtml ? { innerHTML: this.okTitleHtml } : null;
                s = [
                  l,
                  t(
                    Cn,
                    {
                      ref: 'ok-button',
                      props: { variant: this.okVariant, size: this.buttonSize, disabled: this.okDisabled || this.busy || this.isTransitioning },
                      on: { click: this.onOk },
                    },
                    [this.normalizeSlot('modal-ok') || (c ? t('span', { domProps: c }) : rn(this.okTitle))]
                  ),
                ];
              }
              a = t('footer', { ref: 'footer', staticClass: 'modal-footer', class: this.footerClasses, attrs: { id: this.safeId('__BV_modal_footer_') } }, [s]);
            }
            var f = t(
                'div',
                { ref: 'content', staticClass: 'modal-content', class: this.contentClass, attrs: { role: 'document', id: this.safeId('__BV_modal_content_'), tabindex: '-1' } },
                [e, o, a]
              ),
              d = t(),
              h = t();
            this.isVisible &&
              !this.noEnforceFocus &&
              ((d = t('span', { ref: 'topTrap', attrs: { tabindex: '0' } })), (h = t('span', { ref: 'bottomTrap', attrs: { tabindex: '0' } })));
            var p = t('div', { ref: 'dialog', staticClass: 'modal-dialog', class: this.dialogClasses, on: { mousedown: this.onDialogMousedown } }, [d, f, h]),
              m = t(
                'div',
                {
                  ref: 'modal',
                  staticClass: 'modal',
                  class: this.modalClasses,
                  style: this.modalStyles,
                  directives: [{ name: 'show', rawName: 'v-show', value: this.isVisible, expression: 'isVisible' }],
                  attrs: {
                    id: this.safeId(),
                    role: 'dialog',
                    'aria-hidden': this.isVisible ? null : 'true',
                    'aria-modal': this.isVisible ? 'true' : null,
                    'aria-label': this.ariaLabel,
                    'aria-labelledby':
                      this.hideHeader || this.ariaLabel || !(this.hasNormalizedSlot('modal-title') || this.titleHtml || this.title) ? null : this.safeId('__BV_modal_title_'),
                    'aria-describedby': this.safeId('__BV_modal_body_'),
                  },
                  on: { keydown: this.onEsc, click: this.onClickOut },
                },
                [p]
              );
            m = t(
              'transition',
              {
                props: { enterClass: '', enterToClass: '', enterActiveClass: '', leaveClass: '', leaveActiveClass: '', leaveToClass: '' },
                on: {
                  beforeEnter: this.onBeforeEnter,
                  enter: this.onEnter,
                  afterEnter: this.onAfterEnter,
                  beforeLeave: this.onBeforeLeave,
                  leave: this.onLeave,
                  afterLeave: this.onAfterLeave,
                },
              },
              [m]
            );
            var v = t();
            !this.hideBackdrop &&
              this.isVisible &&
              (v = t('div', { staticClass: 'modal-backdrop', attrs: { id: this.safeId('__BV_modal_backdrop_') } }, [this.normalizeSlot('modal-backdrop')])),
              (v = t(_e, { props: { noFade: this.noFade } }, [v]));
            var g = this.static ? {} : this.scopedStyleAttrs;
            return t('div', { key: 'modal-outer-'.concat(this._uid), style: this.modalOuterStyle, attrs: Rs({}, g, {}, this.$attrs, { id: this.safeId('__BV_modal_outer_') }) }, [
              m,
              v,
            ]);
          },
        },
        render: function(t) {
          return this.static ? (this.lazy && this.isHidden ? t() : this.makeModal(t)) : this.isHidden ? t() : t(Os, {}, [this.makeModal(t)]);
        },
      }),
      Ws = '__bv_modal_directive__',
      qs = { passive: !0 },
      Ks = function(t) {
        return (t && Xt(t, '.dropdown-menu > li, li.nav-item') && Jt('a, button', t)) || t;
      },
      Js = function(t, e, n) {
        var r,
          i,
          o,
          a,
          s,
          l = ((i = (r = e).modifiers), (o = void 0 === i ? {} : i), (a = r.arg), (s = r.value), rt(s) ? s : rt(a) ? a : y(o).reverse()[0]),
          u = Ks(t);
        if (l && u) {
          var c = function(t) {
            var e = t.currentTarget;
            if (!Wt(e)) {
              var r = t.type,
                i = t.keyCode;
              ('click' !== r && ('keydown' !== r || (i !== In.ENTER && i !== In.SPACE))) || n.context.$root.$emit('bv::show::modal', l, e);
            }
          };
          (t[Ws] = c),
            (function(t) {
              t && 'BUTTON' !== t.tagName && (ae(t, 'role') || re(t, 'role', 'button'), 'A' === t.tagName || ae(t, 'tabindex') || re(t, 'tabindex', '0'));
            })(u),
            Ht(u, 'click', c, qs),
            'BUTTON' !== u.tagName && 'button' === oe(u, 'role') && Ht(u, 'keydown', c, qs);
        }
      },
      Xs = function(t) {
        var e = Ks(t),
          n = t ? t[Ws] : null;
        e && n && (zt(e, 'click', n, qs), zt(e, 'keydown', n, qs)), delete t[Ws];
      },
      Ys = function(t, e, n) {
        Xs(t), Js(t, e, n);
      },
      Zs = { inserted: Ys, updated: function() {}, componentUpdated: Ys, unbind: Xs };
    function Qs(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }
    function tl(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function el(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? tl(n, !0).forEach(function(e) {
              nl(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : tl(n).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return t;
    }
    function nl(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var rl,
      il = ['id'].concat(
        (function(t) {
          if (Array.isArray(t)) {
            for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
            return n;
          }
        })((rl = y(j(Gs, ['busy', 'lazy', 'noStacking', 'static', 'visible'])))) ||
          (function(t) {
            if (Symbol.iterator in Object(t) || '[object Arguments]' === Object.prototype.toString.call(t)) return Array.from(t);
          })(rl) ||
          (function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance');
          })()
      ),
      ol = function(t) {},
      al = { msgBoxContent: 'default', title: 'modal-title', okTitle: 'modal-ok', cancelTitle: 'modal-cancel' },
      sl = function(t) {
        return il.reduce(function(e, n) {
          return Z(t[n]) || (e[n] = t[n]), e;
        }, {});
      },
      ll = wt({
        components: { BModal: Us },
        directives: { VBModal: Zs },
        plugins: {
          BVModalPlugin: wt({
            plugins: {
              plugin: function(t) {
                var e = t.extend({
                    name: 'BMsgBox',
                    extends: Us,
                    destroyed: function() {
                      this.$el && this.$el.parentNode && this.$el.parentNode.removeChild(this.$el);
                    },
                    mounted: function() {
                      var t = this,
                        e = function() {
                          var e = t;
                          t.$nextTick(function() {
                            setTimeout(function() {
                              return e.$destroy();
                            }, 0);
                          });
                        };
                      this.$parent.$once('hook:destroyed', e),
                        this.$once('hidden', e),
                        this.$router && this.$route && this.$once('hook:beforeDestroy', this.$watch('$router', e)),
                        this.show();
                    },
                  }),
                  n = function(t, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ol;
                    if (!a('$bvModal') && !s('$bvModal')) {
                      var i = new e({
                        parent: t,
                        propsData: el({}, sl(Ct('BModal') || {}), { hideHeaderClose: !0, hideHeader: !(n.title || n.titleHtml) }, j(n, y(al)), {
                          lazy: !1,
                          busy: !1,
                          visible: !1,
                          noStacking: !1,
                          noEnforceFocus: !1,
                        }),
                      });
                      return (
                        y(al).forEach(function(t) {
                          Z(n[t]) || (i.$slots[al[t]] = d(n[t]));
                        }),
                        new Promise(function(t, e) {
                          var n = !1;
                          i.$once('hook:destroyed', function() {
                            n || e(new Error('BootstrapVue MsgBox destroyed before resolve'));
                          }),
                            i.$on('hide', function(e) {
                              if (!e.defaultPrevented) {
                                var i = r(e);
                                e.defaultPrevented || ((n = !0), t(i));
                              }
                            });
                          var o = document.createElement('div');
                          document.body.appendChild(o), i.$mount(o);
                        })
                      );
                    }
                  },
                  r = function(t, e) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                      i = arguments.length > 3 ? arguments[3] : void 0;
                    if (e && !s('$bvModal') && !a('$bvModal') && et(i)) return n(t, el({}, sl(r), { msgBoxContent: e }), i);
                  },
                  i = (function() {
                    function t(e) {
                      !(function(t, e) {
                        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
                      })(this, t),
                        g(this, { _vm: e, _root: e.$root }),
                        w(this, { _vm: C(), _root: C() });
                    }
                    var e, n, i;
                    return (
                      (e = t),
                      (n = [
                        {
                          key: 'show',
                          value: function(t) {
                            if (t && this._root) {
                              for (var e, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                              (e = this._root).$emit.apply(e, ['bv::show::modal', t].concat(r));
                            }
                          },
                        },
                        {
                          key: 'hide',
                          value: function(t) {
                            if (t && this._root) {
                              for (var e, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                              (e = this._root).$emit.apply(e, ['bv::hide::modal', t].concat(r));
                            }
                          },
                        },
                        {
                          key: 'msgBoxOk',
                          value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                              n = el({}, e, { okOnly: !0, okDisabled: !1, hideFooter: !1, msgBoxContent: t });
                            return r(this._vm, t, n, function(t) {
                              return !0;
                            });
                          },
                        },
                        {
                          key: 'msgBoxConfirm',
                          value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                              n = el({}, e, { okOnly: !1, okDisabled: !1, cancelDisabled: !1, hideFooter: !1 });
                            return r(this._vm, t, n, function(t) {
                              var e = t.trigger;
                              return 'ok' === e || ('cancel' !== e && null);
                            });
                          },
                        },
                      ]) && Qs(e.prototype, n),
                      i && Qs(e, i),
                      t
                    );
                  })();
                t.mixin({
                  beforeCreate: function() {
                    this._bv__modal = new i(this);
                  },
                }),
                  t.prototype.hasOwnProperty('$bvModal') ||
                    O(t.prototype, '$bvModal', {
                      get: function() {
                        return (this && this._bv__modal) || o("'".concat('$bvModal', "' must be accessed from a Vue instance 'this' context")), this._bv__modal;
                      },
                    });
              },
            },
          }),
        },
      });
    function ul(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var cl = {
        tag: { type: String, default: 'ul' },
        fill: { type: Boolean, default: !1 },
        justified: { type: Boolean, default: !1 },
        align: { type: String, default: null },
        tabs: { type: Boolean, default: !1 },
        pills: { type: Boolean, default: !1 },
        vertical: { type: Boolean, default: !1 },
        small: { type: Boolean, default: !1 },
        cardHeader: { type: Boolean, default: !1 },
      },
      fl = r.extend({
        name: 'BNav',
        functional: !0,
        props: cl,
        render: function(t, e) {
          var n,
            r,
            i = e.props,
            o = e.data,
            a = e.children;
          return t(
            i.tag,
            ve(o, {
              staticClass: 'nav',
              class:
                ((n = {
                  'nav-tabs': i.tabs,
                  'nav-pills': i.pills && !i.tabs,
                  'card-header-tabs': !i.vertical && i.cardHeader && i.tabs,
                  'card-header-pills': !i.vertical && i.cardHeader && i.pills && !i.tabs,
                  'flex-column': i.vertical,
                  'nav-fill': !i.vertical && i.fill,
                  'nav-justified': !i.vertical && i.justified,
                }),
                ul(n, ((r = i.align), 'justify-content-'.concat((r = 'left' === r ? 'start' : 'right' === r ? 'end' : r))), !i.vertical && i.align),
                ul(n, 'small', i.small),
                n),
            }),
            a
          );
        },
      });
    function dl(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function hl(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var pl = Je(),
      ml = r.extend({
        name: 'BNavItem',
        functional: !0,
        props: (function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? dl(n, !0).forEach(function(e) {
                  hl(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : dl(n).forEach(function(e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
          }
          return t;
        })({}, pl, { linkAttrs: { type: Object, default: function() {} }, linkClasses: { type: [String, Object, Array], default: null } }),
        render: function(t, e) {
          var n = e.props,
            r = e.data,
            i = e.listeners,
            o = e.children;
          return delete r.on, t('li', ve(r, { staticClass: 'nav-item' }), [t(Xe, { staticClass: 'nav-link', class: n.linkClasses, attrs: n.linkAttrs, props: n, on: i }, o)]);
        },
      }),
      vl = r.extend({
        name: 'BNavText',
        functional: !0,
        props: {},
        render: function(t, e) {
          e.props;
          var n = e.data,
            r = e.children;
          return t('li', ve(n, { staticClass: 'navbar-text' }), r);
        },
      });
    function gl(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function bl(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? gl(n, !0).forEach(function(e) {
              yl(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : gl(n).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return t;
    }
    function yl(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var wl = bl({}, j(Zi, ['inline']), { formClass: { type: [String, Array, Object], default: null } }),
      Ol = r.extend({
        name: 'BNavForm',
        functional: !0,
        props: wl,
        render: function(t, e) {
          var n = e.props,
            r = e.data,
            i = e.children,
            o = e.listeners,
            a = void 0 === o ? {} : o,
            s = r.attrs;
          (r.attrs = {}), (r.on = {});
          var l = t(Qi, { class: n.formClass, props: bl({}, n, { inline: !0 }), attrs: s, on: a }, i);
          return t('li', ve(r, { staticClass: 'form-inline' }), [l]);
        },
      }),
      Sl = Ie(['menuClass', 'toggleClass', 'noCaret', 'role'], Bi),
      _l = r.extend({
        name: 'BNavItemDropdown',
        mixins: [Mr, Ci, Te],
        props: Sl,
        computed: {
          isNav: function() {
            return !0;
          },
          dropdownClasses: function() {
            return [this.directionClass, { show: this.visible }];
          },
          menuClasses: function() {
            return [this.menuClass, { 'dropdown-menu-right': this.right, show: this.visible }];
          },
          toggleClasses: function() {
            return [this.toggleClass, { 'dropdown-toggle-no-caret': this.noCaret }];
          },
        },
        render: function(t) {
          var e = t(
              Xe,
              {
                ref: 'toggle',
                staticClass: 'nav-link dropdown-toggle',
                class: this.toggleClasses,
                props: { href: '#', disabled: this.disabled },
                attrs: { id: this.safeId('_BV_button_'), 'aria-haspopup': 'true', 'aria-expanded': this.visible ? 'true' : 'false' },
                on: { click: this.toggle, keydown: this.toggle },
              },
              [this.$slots['button-content'] || this.$slots.text || t('span', { domProps: on(this.html, this.text) })]
            ),
            n = t(
              'ul',
              {
                staticClass: 'dropdown-menu',
                class: this.menuClasses,
                ref: 'menu',
                attrs: { tabindex: '-1', 'aria-labelledby': this.safeId('_BV_button_') },
                on: { keydown: this.onKeydown },
              },
              !this.lazy || this.visible ? this.normalizeSlot('default', { hide: this.hide }) : [t()]
            );
          return t('li', { staticClass: 'nav-item b-nav-dropdown dropdown', class: this.dropdownClasses, attrs: { id: this.safeId() } }, [e, n]);
        },
      }),
      kl = wt({
        components: { BNav: fl, BNavItem: ml, BNavText: vl, BNavForm: Ol, BNavItemDropdown: _l, BNavItemDd: _l, BNavDropdown: _l, BNavDd: _l },
        plugins: { DropdownPlugin: co },
      });
    function xl(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var Tl = {
        tag: { type: String, default: 'nav' },
        type: { type: String, default: 'light' },
        variant: {
          type: String,
          default: function() {
            return Ct('BNavbar', 'variant');
          },
        },
        toggleable: { type: [Boolean, String], default: !1 },
        fixed: { type: String },
        sticky: { type: Boolean, default: !1 },
        print: { type: Boolean, default: !1 },
      },
      Pl = r.extend({
        name: 'BNavbar',
        functional: !0,
        props: Tl,
        render: function(t, e) {
          var n,
            r = e.props,
            i = e.data,
            o = e.children,
            a = '',
            s = Bt()[0];
          return (
            r.toggleable && rt(r.toggleable) && r.toggleable !== s ? (a = 'navbar-expand-'.concat(r.toggleable)) : !1 === r.toggleable && (a = 'navbar-expand'),
            t(
              r.tag,
              ve(i, {
                staticClass: 'navbar',
                class:
                  ((n = { 'd-print': r.print, 'sticky-top': r.sticky }),
                  xl(n, 'navbar-'.concat(r.type), Boolean(r.type)),
                  xl(n, 'bg-'.concat(r.variant), Boolean(r.variant)),
                  xl(n, 'fixed-'.concat(r.fixed), Boolean(r.fixed)),
                  xl(n, ''.concat(a), Boolean(a)),
                  n),
                attrs: { role: 'nav' === r.tag ? null : 'navigation' },
              }),
              o
            )
          );
        },
      });
    function jl(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var Cl = Ie(['tag', 'fill', 'justified', 'align', 'small'], cl),
      Bl = r.extend({
        name: 'BNavbarNav',
        functional: !0,
        props: Cl,
        render: function(t, e) {
          var n,
            r,
            i = e.props,
            o = e.data,
            a = e.children;
          return t(
            i.tag,
            ve(o, {
              staticClass: 'navbar-nav',
              class:
                ((n = { 'nav-fill': i.fill, 'nav-justified': i.justified }),
                jl(n, ((r = i.align), 'justify-content-'.concat((r = 'left' === r ? 'start' : 'right' === r ? 'end' : r))), i.align),
                jl(n, 'small', i.small),
                n),
            }),
            a
          );
        },
      });
    function $l(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Al(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var El = Je();
    (El.href.default = void 0), (El.to.default = void 0);
    var Il = (function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? $l(n, !0).forEach(function(e) {
                Al(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : $l(n).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      })({}, El, { tag: { type: String, default: 'div' } }),
      Dl = r.extend({
        name: 'BNavbarBrand',
        functional: !0,
        props: Il,
        render: function(t, e) {
          var n = e.props,
            r = e.data,
            i = e.children,
            o = Boolean(n.to || n.href);
          return t(o ? Xe : n.tag, ve(r, { staticClass: 'navbar-brand', props: o ? Ie(El, n) : {} }), i);
        },
      }),
      Nl = r.extend({
        name: 'BNavbarToggle',
        mixins: [Jr, Te],
        props: {
          label: {
            type: String,
            default: function() {
              return Ct('BNavbarToggle', 'label');
            },
          },
          target: { type: String, required: !0 },
        },
        data: function() {
          return { toggleState: !1 };
        },
        created: function() {
          this.listenOnRoot('bv::collapse::state', this.handleStateEvt), this.listenOnRoot('bv::collapse::sync::state', this.handleStateEvt);
        },
        methods: {
          onClick: function(t) {
            this.$emit('click', t), t.defaultPrevented || this.$root.$emit('bv::toggle::collapse', this.target);
          },
          handleStateEvt: function(t, e) {
            t === this.target && (this.toggleState = e);
          },
        },
        render: function(t) {
          return t(
            'button',
            {
              class: ['navbar-toggler'],
              attrs: { type: 'button', 'aria-label': this.label, 'aria-controls': this.target, 'aria-expanded': this.toggleState ? 'true' : 'false' },
              on: { click: this.onClick },
            },
            [this.normalizeSlot('default') || t('span', { class: ['navbar-toggler-icon'] })]
          );
        },
      }),
      Fl = wt({
        components: { BNavbar: Pl, BNavbarNav: Bl, BNavbarBrand: Dl, BNavbarToggle: Nl, BNavToggle: Nl },
        plugins: { NavPlugin: kl, CollapsePlugin: ui, DropdownPlugin: co },
      }),
      Rl = function(t) {
        return Array.apply(null, { length: t });
      },
      Ll = function(t) {
        var e = parseInt(t, 10) || 1;
        return e < 1 ? 5 : e;
      },
      Vl = function(t, e) {
        var n = parseInt(t, 10) || 1;
        return n > e ? e : n < 1 ? 1 : n;
      },
      Ml = function(t) {
        if (t.keyCode === In.SPACE) return t.preventDefault(), t.stopImmediatePropagation(), t.stopPropagation(), t.currentTarget.click(), !1;
      },
      Hl = {
        mixins: [Te],
        model: { prop: 'value', event: 'input' },
        props: {
          disabled: { type: Boolean, default: !1 },
          value: {
            type: [Number, String],
            default: null,
            validator: function(t) {
              var e = parseInt(t, 10);
              return !(!Q(t) && (isNaN(e) || e < 1)) || (l('pagination: v-model value must be a number greater than 0'), !1);
            },
          },
          limit: {
            type: [Number, String],
            default: 5,
            validator: function(t) {
              var e = parseInt(t, 10);
              return !(isNaN(e) || e < 1) || (l('pagination: prop "limit" must be a number greater than 0'), !1);
            },
          },
          align: { type: String, default: 'left' },
          pills: { type: Boolean, default: !1 },
          hideGotoEndButtons: { type: Boolean, default: !1 },
          ariaLabel: { type: String, default: 'Pagination' },
          labelFirstPage: { type: String, default: 'Go to first page' },
          firstText: { type: String, default: '«' },
          labelPrevPage: { type: String, default: 'Go to previous page' },
          prevText: { type: String, default: '‹' },
          labelNextPage: { type: String, default: 'Go to next page' },
          nextText: { type: String, default: '›' },
          labelLastPage: { type: String, default: 'Go to last page' },
          lastText: { type: String, default: '»' },
          labelPage: { type: [String, Function], default: 'Go to page' },
          hideEllipsis: { type: Boolean, default: !1 },
          ellipsisText: { type: String, default: '…' },
        },
        data: function() {
          var t = parseInt(this.value, 10);
          return { currentPage: t > 0 ? t : -1, localNumberOfPages: 1, localLimit: 5 };
        },
        computed: {
          btnSize: function() {
            return this.size ? 'pagination-'.concat(this.size) : '';
          },
          alignment: function() {
            var t = this.align;
            return 'center' === t ? 'justify-content-center' : 'end' === t || 'right' === t ? 'justify-content-end' : 'fill' === t ? 'text-center' : '';
          },
          styleClass: function() {
            return this.pills ? 'b-pagination-pills' : '';
          },
          computedCurrentPage: function() {
            return Vl(this.currentPage, this.localNumberOfPages);
          },
          paginationParams: function() {
            var t = this.limit,
              e = this.localNumberOfPages,
              n = this.computedCurrentPage,
              r = this.hideEllipsis,
              i = !1,
              o = !1,
              a = t,
              s = 1;
            return (
              e <= t
                ? (a = e)
                : n < t - 1 && t > 3
                ? r || ((o = !0), (a = t - 1))
                : e - n + 2 < t && t > 3
                ? (r || ((a = t - 1), (i = !0)), (s = e - a + 1))
                : (t > 3 && !r && ((a = t - 2), (i = o = !0)), (s = n - Math.floor(a / 2))),
              s < 1 ? (s = 1) : s > e - a && (s = e - a + 1),
              { showFirstDots: i, showLastDots: o, numberOfLinks: a, startNumber: s }
            );
          },
          pageList: function() {
            var t = this.paginationParams,
              e = t.numberOfLinks,
              n = t.startNumber,
              r = this.computedCurrentPage,
              i = (function(t, e) {
                return Rl(e).map(function(e, n) {
                  return { number: t + n, classes: null };
                });
              })(n, e);
            if (i.length > 3) {
              var o = r - n,
                a = 'bv-d-xs-down-none';
              if (0 === o) for (var s = 3; s < i.length; s++) i[s].classes = a;
              else if (o === i.length - 1) for (var l = 0; l < i.length - 3; l++) i[l].classes = a;
              else {
                for (var u = 0; u < o - 1; u++) i[u].classes = a;
                for (var c = i.length - 1; c > o + 1; c--) i[c].classes = a;
              }
            }
            return i;
          },
        },
        watch: {
          value: function(t, e) {
            t !== e && (this.currentPage = Vl(t, this.localNumberOfPages));
          },
          currentPage: function(t, e) {
            t !== e && this.$emit('input', t > 0 ? t : null);
          },
          limit: function(t, e) {
            t !== e && (this.localLimit = Ll(t));
          },
        },
        created: function() {
          var t = this;
          (this.localLimit = Ll(this.limit)),
            this.$nextTick(function() {
              t.currentPage = t.currentPage > t.localNumberOfPages ? t.localNumberOfPages : t.currentPage;
            });
        },
        methods: {
          handleKeyNav: function(t) {
            var e = t.keyCode,
              n = t.shiftKey;
            e === In.LEFT || e === In.UP
              ? (t.preventDefault(), n ? this.focusFirst() : this.focusPrev())
              : (e !== In.RIGHT && e !== In.DOWN) || (t.preventDefault(), n ? this.focusLast() : this.focusNext());
          },
          getButtons: function() {
            return Kt('a.page-link', this.$el).filter(function(t) {
              return Ut(t);
            });
          },
          setBtnFocus: function(t) {
            t.focus();
          },
          focusCurrent: function() {
            var t = this;
            this.$nextTick(function() {
              var e = t.getButtons().find(function(e) {
                return parseInt(oe(e, 'aria-posinset'), 10) === t.computedCurrentPage;
              });
              e && e.focus ? t.setBtnFocus(e) : t.focusFirst();
            });
          },
          focusFirst: function() {
            var t = this;
            this.$nextTick(function() {
              var e = t.getButtons().find(function(t) {
                return !Wt(t);
              });
              e && e.focus && e !== document.activeElement && t.setBtnFocus(e);
            });
          },
          focusLast: function() {
            var t = this;
            this.$nextTick(function() {
              var e = t
                .getButtons()
                .reverse()
                .find(function(t) {
                  return !Wt(t);
                });
              e && e.focus && e !== document.activeElement && t.setBtnFocus(e);
            });
          },
          focusPrev: function() {
            var t = this;
            this.$nextTick(function() {
              var e = t.getButtons(),
                n = e.indexOf(document.activeElement);
              n > 0 && !Wt(e[n - 1]) && e[n - 1].focus && t.setBtnFocus(e[n - 1]);
            });
          },
          focusNext: function() {
            var t = this;
            this.$nextTick(function() {
              var e = t.getButtons(),
                n = e.indexOf(document.activeElement);
              n < e.length - 1 && !Wt(e[n + 1]) && e[n + 1].focus && t.setBtnFocus(e[n + 1]);
            });
          },
        },
        render: function(t) {
          var e = this,
            n = [],
            r = this.localNumberOfPages,
            i = this.disabled,
            o = this.paginationParams,
            a = o.showFirstDots,
            s = o.showLastDots,
            l = this.computedCurrentPage,
            u = 'fill' === this.align,
            c = function(t) {
              return t === l;
            },
            f = this.currentPage < 1,
            d = function(n, o, a, s, l, d) {
              var h = i || c(l) || f || n < 1 || n > r,
                p = n < 1 ? 1 : n > r ? r : n,
                m = { disabled: h, page: p, index: p - 1 },
                v = e.normalizeSlot(a, m) || De(s) || t(),
                g = t(
                  h ? 'span' : Xe,
                  {
                    staticClass: 'page-link',
                    props: h ? {} : e.linkProps(n),
                    attrs: { role: 'menuitem', tabindex: h ? null : '-1', 'aria-label': o, 'aria-controls': e.ariaControls || null, 'aria-disabled': h ? 'true' : null },
                    on: h
                      ? {}
                      : {
                          click: function(t) {
                            e.onClick(n, t);
                          },
                          keydown: Ml,
                        },
                  },
                  [v]
                );
              return t('li', { key: d, staticClass: 'page-item', class: { disabled: h, 'flex-fill': u }, attrs: { role: 'presentation', 'aria-hidden': h ? 'true' : null } }, [g]);
            },
            h = function(n) {
              return t(
                'li',
                {
                  key: 'ellipsis-'.concat(n ? 'last' : 'first'),
                  staticClass: 'page-item',
                  class: ['disabled', 'bv-d-xs-down-none', u ? 'flex-fill' : ''],
                  attrs: { role: 'separator' },
                },
                [t('span', { staticClass: 'page-link' }, [e.normalizeSlot('ellipsis-text') || De(e.ellipsisText) || t()])]
              );
            };
          n.push(this.hideGotoEndButtons ? t() : d(1, this.labelFirstPage, 'first-text', this.firstText, 1, 'bookend-goto-first')),
            n.push(d(l - 1, this.labelPrevPage, 'prev-text', this.prevText, 1, 'bookend-goto-prev')),
            n.push(a ? h(!1) : t()),
            this.pageList.forEach(function(o, a) {
              var s = c(o.number) && !f,
                l = i ? null : s || (f && 0 === a) ? '0' : '-1',
                d = {
                  role: 'menuitemradio',
                  'aria-disabled': i ? 'true' : null,
                  'aria-controls': e.ariaControls || null,
                  'aria-label': et(e.labelPage) ? e.labelPage(o.number) : ''.concat(e.labelPage, ' ').concat(o.number),
                  'aria-checked': s ? 'true' : 'false',
                  'aria-posinset': o.number,
                  'aria-setsize': r,
                  tabindex: l,
                },
                h = De(e.makePage(o.number)),
                p = { page: o.number, index: o.number - 1, content: h, active: s, disabled: i },
                m = t(
                  i ? 'span' : Xe,
                  {
                    props: i ? {} : e.linkProps(o.number),
                    staticClass: 'page-link',
                    attrs: d,
                    on: i
                      ? {}
                      : {
                          click: function(t) {
                            e.onClick(o.number, t);
                          },
                          keydown: Ml,
                        },
                  },
                  [e.normalizeSlot('page', p) || h]
                );
              n.push(
                t(
                  'li',
                  { key: 'page-'.concat(o.number), staticClass: 'page-item', class: [{ disabled: i, active: s, 'flex-fill': u }, o.classes], attrs: { role: 'presentation' } },
                  [m]
                )
              );
            }),
            n.push(s ? h(!0) : t()),
            n.push(d(l + 1, this.labelNextPage, 'next-text', this.nextText, r, 'bookend-goto-next')),
            n.push(this.hideGotoEndButtons ? t() : d(r, this.labelLastPage, 'last-text', this.lastText, r, 'bookend-goto-last'));
          var p = t(
            'ul',
            {
              ref: 'ul',
              staticClass: 'pagination',
              class: ['b-pagination', this.btnSize, this.alignment, this.styleClass],
              attrs: { role: 'menubar', 'aria-disabled': i ? 'true' : 'false', 'aria-label': this.ariaLabel || null },
              on: { keydown: this.handleKeyNav },
            },
            n
          );
          return this.isNav ? t('nav', { attrs: { 'aria-disabled': i ? 'true' : null, 'aria-hidden': i ? 'true' : 'false' } }, [p]) : p;
        },
      },
      zl = {
        size: {
          type: String,
          default: function() {
            return Ct('BPagination', 'size');
          },
        },
        perPage: { type: [Number, String], default: 20 },
        totalRows: { type: [Number, String], default: 0 },
        ariaControls: { type: String, default: null },
      },
      Gl = function(t) {
        var e = parseInt(t, 10) || 20;
        return e < 1 ? 1 : e;
      },
      Ul = function(t) {
        var e = parseInt(t, 10) || 0;
        return e < 0 ? 0 : e;
      },
      Wl = wt({
        components: {
          BPagination: r.extend({
            name: 'BPagination',
            mixins: [Hl],
            props: zl,
            computed: {
              numberOfPages: function() {
                var t = Math.ceil(Ul(this.totalRows) / Gl(this.perPage));
                return t < 1 ? 1 : t;
              },
              pageSizeNumberOfPages: function() {
                return { perPage: Gl(this.perPage), totalRows: Ul(this.totalRows), numberOfPages: this.numberOfPages };
              },
            },
            watch: {
              pageSizeNumberOfPages: function(t, e) {
                tt(e) ||
                  (t.perPage !== e.perPage && t.totalRows === e.totalRows
                    ? (this.currentPage = 1)
                    : t.numberOfPages !== e.numberOfPages && this.currentPage > t.numberOfPages && (this.currentPage = 1)),
                  (this.localNumberOfPages = t.numberOfPages);
              },
            },
            created: function() {
              var t = this;
              this.localNumberOfPages = this.numberOfPages;
              var e = parseInt(this.value, 10) || 0;
              e > 0
                ? (this.currentPage = e)
                : this.$nextTick(function() {
                    t.currentPage = 0;
                  });
            },
            mounted: function() {
              this.localNumberOfPages = this.numberOfPages;
            },
            methods: {
              onClick: function(t, e) {
                var n = this;
                t > this.numberOfPages ? (t = this.numberOfPages) : t < 1 && (t = 1),
                  (this.currentPage = t),
                  this.$emit('change', this.currentPage),
                  this.$nextTick(function() {
                    var t = e.target;
                    Ut(t) && n.$el.contains(t) && t.focus ? t.focus() : n.focusCurrent();
                  });
              },
              makePage: function(t) {
                return t;
              },
              linkProps: function(t) {
                return { href: '#' };
              },
            },
          }),
        },
      }),
      ql = {
        size: {
          type: String,
          default: function() {
            return Ct('BPaginationNav', 'size');
          },
        },
        numberOfPages: {
          type: [Number, String],
          default: 1,
          validator: function(t) {
            var e = parseInt(t, 10);
            return !(isNaN(e) || e < 1) || (l('b-pagination: prop "number-of-pages" must be a number greater than 0'), !1);
          },
        },
        baseUrl: { type: String, default: '/' },
        useRouter: { type: Boolean, default: !1 },
        linkGen: { type: Function, default: null },
        pageGen: { type: Function, default: null },
        pages: { type: Array, default: null },
        noPageDetect: { type: Boolean, default: !1 },
        activeClass: { type: String },
        exact: { type: Boolean, default: !1 },
        exactActiveClass: { type: String },
        noPrefetch: { type: Boolean, default: !1 },
      },
      Kl = wt({
        components: {
          BPaginationNav: r.extend({
            name: 'BPaginationNav',
            mixins: [Hl],
            props: ql,
            computed: {
              isNav: function() {
                return !0;
              },
              computedValue: function() {
                var t = parseInt(this.value, 10);
                return isNaN(t) || t < 1 ? null : t;
              },
            },
            watch: {
              numberOfPages: function(t, e) {
                var n = this;
                this.$nextTick(function() {
                  n.setNumberOfPages();
                });
              },
              pages: function(t, e) {
                var n = this;
                this.$nextTick(function() {
                  n.setNumberOfPages();
                });
              },
            },
            created: function() {
              this.setNumberOfPages();
            },
            mounted: function() {
              var t = this;
              this.$router &&
                this.$watch('$route', function(e, n) {
                  t.$nextTick(function() {
                    Lt(function() {
                      t.guessCurrentPage();
                    });
                  });
                });
            },
            methods: {
              setNumberOfPages: function() {
                var t,
                  e,
                  n = this;
                c(this.pages) && this.pages.length > 0
                  ? (this.localNumberOfPages = this.pages.length)
                  : (this.localNumberOfPages = ((t = this.numberOfPages), (e = parseInt(t, 10) || 1) < 1 ? 1 : e)),
                  this.$nextTick(function() {
                    n.guessCurrentPage();
                  });
              },
              onClick: function(t, e) {
                var n = this;
                t !== this.currentPage &&
                  (Lt(function() {
                    (n.currentPage = t), n.$emit('change', t);
                  }),
                  this.$nextTick(function() {
                    try {
                      (e.currentTarget || e.target).blur();
                    } catch (t) {}
                  }));
              },
              getPageInfo: function(t) {
                if (!c(this.pages) || 0 === this.pages.length || Z(this.pages[t - 1])) {
                  var e = ''.concat(this.baseUrl).concat(t);
                  return { link: this.useRouter ? { path: e } : e, text: De(t) };
                }
                var n = this.pages[t - 1];
                if (x(n)) {
                  var r = n.link;
                  return { link: x(r) ? r : this.useRouter ? { path: r } : r, text: De(n.text || t) };
                }
                return { link: De(n), text: De(t) };
              },
              makePage: function(t) {
                var e = this.getPageInfo(t);
                return this.pageGen && et(this.pageGen) ? this.pageGen(t, e) : e.text;
              },
              makeLink: function(t) {
                var e = this.getPageInfo(t);
                return this.linkGen && et(this.linkGen) ? this.linkGen(t, e) : e.link;
              },
              linkProps: function(t) {
                var e = this.makeLink(t),
                  n = {
                    target: this.target || null,
                    rel: this.rel || null,
                    disabled: this.disabled,
                    exact: this.exact,
                    activeClass: this.activeClass,
                    exactActiveClass: this.exactActiveClass,
                    append: this.append,
                    replace: this.replace,
                    noPrefetch: this.noPrefetch,
                  };
                return this.useRouter || x(e) ? (n.to = e) : (n.href = e), n;
              },
              resolveLink: function() {
                var t,
                  e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                try {
                  ((t = document.createElement('a')).href = Ge({ to: e }, 'a', '/', '/')), document.body.appendChild(t);
                  var n = t,
                    r = n.pathname,
                    i = n.hash,
                    o = n.search;
                  return document.body.removeChild(t), { path: r, hash: i, query: He(o) };
                } catch (e) {
                  try {
                    t && t.parentNode && t.parentNode.removeChild(t);
                  } catch (t) {}
                  return {};
                }
              },
              resolveRoute: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                try {
                  var e = this.$router.resolve(t, this.$route).route;
                  return { path: e.path, hash: e.hash, query: e.query };
                } catch (t) {
                  return {};
                }
              },
              guessCurrentPage: function() {
                var t = this.computedValue,
                  e = this.$router,
                  n = this.$route;
                if (!this.noPageDetect && !t && (i.j || (!i.j && e)))
                  for (
                    var r = e && n ? { path: n.path, hash: n.hash, query: n.query } : {},
                      o = i.j ? window.location || document.location : null,
                      a = o ? { path: o.pathname, hash: o.hash, query: He(o.search) } : {},
                      s = 1;
                    !t && s <= this.localNumberOfPages;
                    s++
                  ) {
                    var l = this.makeLink(s);
                    t = e && (x(l) || this.useRouter) ? (vr(this.resolveRoute(l), r) ? s : null) : i.j ? (vr(this.resolveLink(l), a) ? s : null) : -1;
                  }
                this.currentPage = t > 0 ? t : 0;
              },
            },
          }),
        },
      }),
      Jl = {
        AUTO: 'auto',
        TOP: 'top',
        RIGHT: 'right',
        BOTTOM: 'bottom',
        LEFT: 'left',
        TOPLEFT: 'top',
        TOPRIGHT: 'top',
        RIGHTTOP: 'right',
        RIGHTBOTTOM: 'right',
        BOTTOMLEFT: 'bottom',
        BOTTOMRIGHT: 'bottom',
        LEFTTOP: 'left',
        LEFTBOTTOM: 'left',
      },
      Xl = { AUTO: 0, TOPLEFT: -1, TOP: 0, TOPRIGHT: 1, RIGHTTOP: -1, RIGHT: 0, RIGHTBOTTOM: 1, BOTTOMLEFT: -1, BOTTOM: 0, BOTTOMRIGHT: 1, LEFTTOP: -1, LEFT: 0, LEFTBOTTOM: 1 },
      Yl = r.extend({
        name: 'BVPopper',
        props: {
          target: { type: [W, q], default: null },
          placement: { type: String, default: 'top' },
          fallbackPlacement: { type: [String, Array], default: 'flip' },
          offset: { type: Number, default: 0 },
          boundary: { type: [String, W], default: 'scrollParent' },
          boundaryPadding: { type: Number, default: 5 },
          arrowPadding: { type: Number, default: 6 },
        },
        data: function() {
          return { noFade: !1, localShow: !0, attachment: this.getAttachment(this.placement) };
        },
        computed: {
          templateType: function() {
            return 'unknown';
          },
          popperConfig: function() {
            var t = this,
              e = this.placement;
            return {
              placement: this.getAttachment(e),
              modifiers: {
                offset: { offset: this.getOffset(e) },
                flip: { behavior: this.fallbackPlacement },
                arrow: { element: '.arrow' },
                preventOverflow: { padding: this.boundaryPadding, boundariesElement: this.boundary },
              },
              onCreate: function(e) {
                e.originalPlacement !== e.placement && t.popperPlacementChange(e);
              },
              onUpdate: function(e) {
                t.popperPlacementChange(e);
              },
            };
          },
        },
        created: function() {
          var t = this;
          (this.$_popper = null),
            (this.localShow = !0),
            this.$on('show', function(e) {
              t.popperCreate(e);
            }),
            this.$on('hidden', function() {
              t.$nextTick(t.$destroy);
            }),
            this.$parent.$once('hook:destroyed', this.$destroy);
        },
        beforeMount: function() {
          this.attachment = this.getAttachment(this.placement);
        },
        mounted: function() {},
        updated: function() {
          this.popperUpdate();
        },
        beforeDestroy: function() {
          this.popperDestroy();
        },
        destroyed: function() {
          var t = this.$el;
          t && t.parentNode && t.parentNode.removeChild(t);
        },
        methods: {
          hide: function() {
            this.localShow = !1;
          },
          getAttachment: function(t) {
            return Jl[String(t).toUpperCase()] || 'auto';
          },
          getOffset: function(t) {
            if (!this.offset) {
              var e = this.$refs.arrow || Jt('.arrow', this.$el),
                n = (parseFloat(le(e).width) || 0) + (parseFloat(this.arrowPadding) || 0);
              switch (Xl[String(t).toUpperCase()] || 0) {
                case 1:
                  return '+50%p - '.concat(n, 'px');
                case -1:
                  return '-50%p + '.concat(n, 'px');
                default:
                  return 0;
              }
            }
            return this.offset;
          },
          popperCreate: function(t) {
            this.popperDestroy(), (this.$_popper = new ci.a(this.target, t, this.popperConfig));
          },
          popperDestroy: function() {
            this.$_popper && this.$_popper.destroy(), (this.$_popper = null);
          },
          popperUpdate: function() {
            this.$_popper && this.$_popper.scheduleUpdate();
          },
          popperPlacementChange: function(t) {
            this.attachment = this.getAttachment(t.placement);
          },
          renderTemplate: function(t) {
            return t('div');
          },
        },
        render: function(t) {
          var e = this;
          return t(
            Se,
            {
              props: { appear: !0, noFade: this.noFade },
              on: {
                beforeEnter: function(t) {
                  return e.$emit('show', t);
                },
                afterEnter: function(t) {
                  return e.$emit('shown', t);
                },
                beforeLeave: function(t) {
                  return e.$emit('hide', t);
                },
                afterLeave: function(t) {
                  return e.$emit('hidden', t);
                },
              },
            },
            [this.localShow ? this.renderTemplate(t) : t()]
          );
        },
      });
    function Zl(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Ql(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var tu = r.extend({
      name: 'BVTooltipTemplate',
      extends: Yl,
      mixins: [_s],
      props: { id: { type: String, default: null }, html: { type: Boolean, default: !1 } },
      data: function() {
        return { title: '', content: '', variant: null, customClass: null };
      },
      computed: {
        templateType: function() {
          return 'tooltip';
        },
        templateClasses: function() {
          var t;
          return [
            ((t = {}),
            Ql(t, 'b-'.concat(this.templateType, '-').concat(this.variant), this.variant),
            Ql(t, 'bs-'.concat(this.templateType, '-').concat(this.attachment), this.attachment),
            t),
            this.customClass,
          ];
        },
        templateAttributes: function() {
          return (function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? Zl(n, !0).forEach(function(e) {
                    Ql(t, e, n[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : Zl(n).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  });
            }
            return t;
          })({ id: this.id, role: 'tooltip', tabindex: '-1' }, this.scopedStyleAttrs);
        },
        templateListeners: function() {
          var t = this;
          return {
            mouseenter: function(e) {
              t.$emit('mouseenter', e);
            },
            mouseleave: function(e) {
              t.$emit('mouseleave', e);
            },
            focusin: function(e) {
              t.$emit('focusin', e);
            },
            focusout: function(e) {
              t.$emit('focusout', e);
            },
          };
        },
      },
      methods: {
        renderTemplate: function(t) {
          var e = et(this.title) ? this.title({}) : tt(this.title) ? t() : this.title,
            n = this.html && !et(this.title) ? { innerHTML: this.title } : {};
          return t('div', { staticClass: 'tooltip b-tooltip', class: this.templateClasses, attrs: this.templateAttributes, on: this.templateListeners }, [
            t('div', { ref: 'arrow', staticClass: 'arrow' }),
            t('div', { staticClass: 'tooltip-inner', domProps: n }, [e]),
          ]);
        },
      },
    });
    function eu(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function nu(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? eu(n, !0).forEach(function(e) {
              ru(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : eu(n).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return t;
    }
    function ru(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var iu = { passive: !0, capture: !1 },
      ou = {
        title: '',
        content: '',
        variant: null,
        customClass: null,
        triggers: '',
        placement: 'auto',
        fallbackPlacement: 'flip',
        target: null,
        container: null,
        noFade: !1,
        boundary: 'scrollParent',
        boundaryPadding: 5,
        offset: 0,
        delay: 0,
        arrowPadding: 6,
        disabled: !1,
        id: null,
        html: !1,
      },
      au = r.extend({
        name: 'BVTooltip',
        props: {},
        data: function() {
          return nu({}, ou, { activeTrigger: { hover: !1, click: !1, focus: !1 }, localShow: !1 });
        },
        computed: {
          templateType: function() {
            return 'tooltip';
          },
          computedId: function() {
            return this.id || '__bv_'.concat(this.templateType, '_').concat(this._uid, '__');
          },
          computedDelay: function() {
            var t = { show: 0, hide: 0 };
            return (
              T(this.delay)
                ? ((t.show = Math.max(parseInt(this.delay.show, 10) || 0, 0)), (t.hide = Math.max(parseInt(this.delay.hide, 10) || 0, 0)))
                : (it(this.delay) || rt(this.delay)) && (t.show = t.hide = Math.max(parseInt(this.delay, 10) || 0, 0)),
              t
            );
          },
          computedTriggers: function() {
            return d(this.triggers)
              .filter(Boolean)
              .join(' ')
              .trim()
              .toLowerCase()
              .split(/\s+/)
              .sort();
          },
          isWithActiveTrigger: function() {
            for (var t in this.activeTrigger) if (this.activeTrigger[t]) return !0;
            return !1;
          },
          computedTemplateData: function() {
            return { title: this.title, content: this.content, variant: this.variant, customClass: this.customClass, noFade: this.noFade };
          },
        },
        watch: {
          computedTriggers: function(t, e) {
            var n = this;
            vr(t, e) ||
              this.$nextTick(function() {
                n.unListen(),
                  e.forEach(function(e) {
                    f(t, e) || (n.activeTrigger[e] && (n.activeTrigger[e] = !1));
                  }),
                  n.listen();
              });
          },
          computedTemplateData: function() {
            this.handleTemplateUpdate();
          },
          disabled: function(t) {
            t ? this.disable() : this.enable();
          },
        },
        created: function() {
          var t = this;
          (this.$_tip = null),
            (this.$_hoverTimeout = null),
            (this.$_hoverState = ''),
            (this.$_visibleInterval = null),
            (this.$_enabled = !this.disabled),
            (this.$_noop = function() {}),
            this.$parent && this.$parent.$once('hook:beforeDestroy', this.$destroy),
            this.$nextTick(function() {
              var e = t.getTarget();
              e && Zt(document.body, e) ? ((t.scopeId = Ss(t.$parent)), t.listen()) : o(''.concat(t.templateType, ' unable to find target element in document'));
            });
        },
        updated: function() {
          this.$nextTick(this.handleTemplateUpdate);
        },
        deactivated: function() {
          this.forceHide();
        },
        beforeDestroy: function() {
          this.unListen(), this.setWhileOpenListeners(!1), clearTimeout(this.$_hoverTimeout), (this.$_hoverTimeout = null), this.destroyTemplate(), this.restoreTitle();
        },
        methods: {
          getTemplate: function() {
            return tu;
          },
          updateData: function() {
            var t = this,
              e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              n = !1;
            y(ou).forEach(function(r) {
              Z(e[r]) || t[r] === e[r] || ((t[r] = e[r]), 'title' === r && (n = !0));
            }),
              n && this.localShow && this.fixTitle();
          },
          createTemplateAndShow: function() {
            var t = this.getContainer(),
              e = this.getTemplate(),
              n = (this.$_tip = new e({
                parent: this,
                propsData: {
                  id: this.computedId,
                  html: this.html,
                  placement: this.placement,
                  fallbackPlacement: this.fallbackPlacement,
                  target: this.getPlacementTarget(),
                  boundary: this.getBoundary(),
                  offset: parseInt(this.offset, 10) || 0,
                  arrowPadding: parseInt(this.arrowPadding, 10) || 0,
                  boundaryPadding: parseInt(this.boundaryPadding, 10) || 0,
                },
              }));
            this.handleTemplateUpdate(),
              n.$once('show', this.onTemplateShow),
              n.$once('shown', this.onTemplateShown),
              n.$once('hide', this.onTemplateHide),
              n.$once('hidden', this.onTemplateHidden),
              n.$once('hook:destroyed', this.destroyTemplate),
              n.$on('focusin', this.handleEvent),
              n.$on('focusout', this.handleEvent),
              n.$on('mouseenter', this.handleEvent),
              n.$on('mouseleave', this.handleEvent),
              n.$mount(t.appendChild(document.createElement('div')));
          },
          hideTemplate: function() {
            this.$_tip && this.$_tip.hide();
          },
          destroyTemplate: function() {
            this.setWhileOpenListeners(!1),
              clearTimeout(this.$_hoverTimeout),
              (this.$_hoverTimout = null),
              (this.$_hoverState = ''),
              this.clearActiveTriggers(),
              (this.localPlacementTarget = null);
            try {
              this.$_tip && this.$_tip.$destroy();
            } catch (t) {}
            (this.$_tip = null), (this.localShow = !1);
          },
          getTemplateElement: function() {
            return this.$_tip ? this.$_tip.$el : null;
          },
          handleTemplateUpdate: function() {
            var t = this,
              e = this.$_tip;
            if (e) {
              ['title', 'content', 'variant', 'customClass', 'noFade'].forEach(function(n) {
                e[n] !== t[n] && (e[n] = t[n]);
              });
            }
          },
          show: function() {
            var t = this.getTarget();
            if (
              t &&
              Zt(document.body, t) &&
              Ut(t) &&
              !this.dropdownOpen() &&
              ((!tt(this.title) && '' !== this.title) || (!tt(this.content) && '' !== this.content)) &&
              !this.$_tip &&
              !this.localShow
            ) {
              this.localShow = !0;
              var e = this.buildEvent('show', { cancelable: !0 });
              if ((this.emitEvent(e), e.defaultPrevented)) return this.destroyTemplate(), void (this.localShow = !1);
              this.fixTitle(), this.addAriaDescribedby(), this.createTemplateAndShow();
            }
          },
          hide: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              e = this.getTemplateElement();
            if (e && this.localShow) {
              var n = this.buildEvent('hide', { cancelable: !t });
              this.emitEvent(n), n.defaultPrevented || (this.hideTemplate(), this.clearActiveTriggers(), (this.$_hoverState = ''));
            } else this.restoreTitle();
          },
          forceHide: function() {
            this.getTemplateElement() &&
              this.localShow &&
              (this.setWhileOpenListeners(!1),
              clearTimeout(this.hoverTimeout),
              (this.$_hoverTimeout = null),
              (this.$_hoverState = ''),
              this.clearActiveTriggers(),
              this.$_tip && (this.$_tip.noFade = !0),
              this.hide(!0));
          },
          enable: function() {
            (this.$_enabled = !0), this.emitEvent(this.buildEvent('enabled', {}));
          },
          disable: function() {
            (this.$_enabled = !1), this.emitEvent(this.buildEvent('disabled', {}));
          },
          onTemplateShow: function() {
            this.setWhileOpenListeners(!0);
          },
          onTemplateShown: function() {
            var t = this.$_hoverState;
            (this.$_hoverState = ''), 'out' === t && this.leave(null), this.emitEvent(this.buildEvent('shown', {}));
          },
          onTemplateHide: function() {
            this.setWhileOpenListeners(!1);
          },
          onTemplateHidden: function() {
            this.removeAriaDescribedby(), this.restoreTitle(), this.destroyTemplate(), this.emitEvent(this.buildEvent('hidden', {}));
          },
          getTarget: function() {
            var t = this.target ? this.target.$el || this.target : null;
            return (t = rt(t) ? Qt(t.replace(/^#/, '')) : t), (t = et(t) ? t() : t), Gt(t) ? t : null;
          },
          getPlacementTarget: function() {
            return this.getTarget();
          },
          getTargetId: function() {
            var t = this.getTarget();
            return t && t.id ? t.id : null;
          },
          getContainer: function() {
            var t = !!this.container && (this.container.$el || this.container),
              e = document.body,
              n = this.getTarget();
            return !1 === t ? Yt('.modal-content', n) || e : (rt(t) && Qt(t.replace(/^#/, ''))) || e;
          },
          getBoundary: function() {
            return this.boundary ? this.boundary.$el || this.boundary : 'scrollParent';
          },
          isInModal: function() {
            var t = this.getTarget();
            return t && Yt('.modal-content', t);
          },
          isDropdown: function() {
            var t = this.getTarget();
            return t && ne(t, 'dropdown');
          },
          dropdownOpen: function() {
            var t = this.getTarget();
            return this.isDropdown() && t && Jt('.dropdown-menu.show', t);
          },
          clearActiveTriggers: function() {
            for (var t in this.activeTrigger) this.activeTrigger[t] = !1;
          },
          addAriaDescribedby: function() {
            var t = this.getTarget(),
              e = oe(t, 'aria-describedby') || '';
            (e = e
              .split(/\s+/)
              .concat(this.computedId)
              .join(' ')
              .trim()),
              re(t, 'aria-describedby', e);
          },
          removeAriaDescribedby: function() {
            var t = this,
              e = this.getTarget(),
              n = oe(e, 'aria-describedby') || '';
            (n = n
              .split(/\s+/)
              .filter(function(e) {
                return e !== t.computedId;
              })
              .join(' ')
              .trim())
              ? re(e, 'aria-describedby', n)
              : ie(e, 'aria-describedby');
          },
          fixTitle: function() {
            var t = this.getTarget();
            t && oe(t, 'title') && (re(t, 'data-original-title', oe(t, 'title') || ''), re(t, 'title', ''));
          },
          restoreTitle: function() {
            var t = this.getTarget();
            t && ae(t, 'data-original-title') && (re(t, 'title', oe(t, 'data-original-title') || ''), ie(t, 'data-original-title'));
          },
          buildEvent: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return new di(t, nu({ cancelable: !1, target: this.getTarget(), relatedTarget: this.getTemplateElement() || null, componentId: this.computedId, vueTarget: this }, e));
          },
          emitEvent: function(t) {
            var e = t.type,
              n = this.$root;
            n && n.$emit && n.$emit('bv::'.concat(this.templateType, '::').concat(e), t), this.$emit(e, t);
          },
          listen: function() {
            var t = this,
              e = this.getTarget();
            e &&
              (this.setRootListener(!0),
              this.computedTriggers.forEach(function(n) {
                'click' === n
                  ? Ht(e, 'click', t.handleEvent, iu)
                  : 'focus' === n
                  ? (Ht(e, 'focusin', t.handleEvent, iu), Ht(e, 'focusout', t.handleEvent, iu))
                  : 'blur' === n
                  ? Ht(e, 'focusout', t.handleEvent, iu)
                  : 'hover' === n && (Ht(e, 'mouseenter', t.handleEvent, iu), Ht(e, 'mouseleave', t.handleEvent, iu));
              }, this));
          },
          unListen: function() {
            var t = this,
              e = this.getTarget();
            this.setRootListener(!1),
              ['click', 'focusin', 'focusout', 'mouseenter', 'mouseleave'].forEach(function(n) {
                e && zt(e, n, t.handleEvent, iu);
              }, this);
          },
          setRootListener: function(t) {
            var e = this.$root;
            if (e) {
              var n = t ? '$on' : '$off',
                r = this.templateType;
              e[n]('bv::hide::'.concat(r), this.doHide),
                e[n]('bv::show::'.concat(r), this.doShow),
                e[n]('bv::disable::'.concat(r), this.doDisable),
                e[n]('bv::enable::'.concat(r), this.doEnable);
            }
          },
          setWhileOpenListeners: function(t) {
            this.setModalListener(t), this.setDropdownListener(t), this.visibleCheck(t), this.setOnTouchStartListener(t);
          },
          visibleCheck: function(t) {
            var e = this;
            clearInterval(this.$_visibleInterval), (this.$_visibleInterval = null);
            var n = this.getTarget(),
              r = this.getTemplateElement();
            t &&
              (this.visibleInterval = setInterval(function() {
                !r || !e.localShow || (n.parentNode && Ut(n)) || e.forceHide();
              }, 100));
          },
          setModalListener: function(t) {
            this.isInModal() && this.$root[t ? '$on' : '$off']('bv::modal::hidden', this.forceHide);
          },
          setOnTouchStartListener: function(t) {
            var e = this;
            if ('ontouchstart' in document.documentElement) {
              var n = t ? Ht : zt;
              u(document.body.children).forEach(function(t) {
                n(t, 'mouseover', e.$_noop);
              });
            }
          },
          setDropdownListener: function(t) {
            var e = this.getTarget();
            e && this.$root && this.isDropdown && e.__vue__ && e.__vue__[t ? '$on' : '$off']('shown', this.forceHide);
          },
          handleEvent: function(t) {
            var e = this.getTarget();
            if (e && !Wt(e) && this.$_enabled && !this.dropdownOpen()) {
              var n = t.type,
                r = this.computedTriggers;
              if ('click' === n && f(r, 'click')) this.click(t);
              else if ('mouseenter' === n && f(r, 'hover')) this.enter(t);
              else if ('focusin' === n && f(r, 'focus')) this.enter(t);
              else if (('focusout' === n && (f(r, 'focus') || f(r, 'blur'))) || ('mouseleave' === n && f(r, 'hover'))) {
                var i = this.getTemplateElement(),
                  o = t.target,
                  a = t.relatedTarget;
                if ((i && Zt(i, o) && Zt(e, a)) || (i && Zt(e, o) && Zt(i, a)) || (i && Zt(i, o) && Zt(i, a)) || (Zt(e, o) && Zt(e, a))) return;
                this.leave(t);
              }
            }
          },
          doHide: function(t) {
            (t && this.getTargetId() !== t && this.computedId !== t) || this.forceHide();
          },
          doShow: function(t) {
            (t && this.getTargetId() !== t && this.computedId !== t) || this.show();
          },
          doDisable: function(t) {
            (t && this.getTargetId() !== t && this.computedId !== t) || this.disable();
          },
          doEnable: function(t) {
            (t && this.getTargetId() !== t && this.computedId !== t) || this.enable();
          },
          click: function(t) {
            this.$_enabled && !this.dropdownOpen() && ((this.activeTrigger.click = !this.activeTrigger.click), this.isWithActiveTrigger ? this.enter(null) : this.leave(null));
          },
          toggle: function() {
            this.$_enabled && !this.dropdownOpen() && (this.localShow ? this.leave(null) : this.enter(null));
          },
          enter: function() {
            var t = this,
              e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            e && (this.activeTrigger['focusin' === e.type ? 'focus' : 'hover'] = !0),
              this.localShow || 'in' === this.$_hoverState
                ? (this.$_hoverState = 'in')
                : (clearTimeout(this.hoverTimeout),
                  (this.$_hoverState = 'in'),
                  this.computedDelay.show
                    ? (this.fixTitle(),
                      (this.hoverTimeout = setTimeout(function() {
                        'in' === t.$_hoverState ? t.show() : t.localShow || t.restoreTitle();
                      }, this.computedDelay.show)))
                    : this.show());
          },
          leave: function() {
            var t = this,
              e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            e &&
              ((this.activeTrigger['focusout' === e.type ? 'focus' : 'hover'] = !1),
              'focusout' === e.type && f(this.computedTriggers, 'blur') && ((this.activeTrigger.click = !1), (this.activeTrigger.hover = !1))),
              this.isWithActiveTrigger ||
                (clearTimeout(this.hoverTimeout),
                (this.$_hoverState = 'out'),
                this.computedDelay.hide
                  ? (this.$hoverTimeout = setTimeout(function() {
                      'out' === t.$_hoverState && t.hide();
                    }, this.computedDelay.hide))
                  : this.hide());
          },
        },
      }),
      su = r.extend({
        name: 'BTooltip',
        props: {
          title: { type: String },
          target: { type: [String, W, q, Function, Object], required: !0 },
          triggers: { type: [String, Array], default: 'hover focus' },
          placement: { type: String, default: 'top' },
          fallbackPlacement: {
            type: [String, Array],
            default: 'flip',
            validator: function(t) {
              return (
                (c(t) &&
                  t.every(function(t) {
                    return rt(t);
                  })) ||
                f(['flip', 'clockwise', 'counterclockwise'], t)
              );
            },
          },
          variant: {
            type: String,
            default: function() {
              return Ct('BTooltip', 'variant');
            },
          },
          customClass: {
            type: String,
            default: function() {
              return Ct('BTooltip', 'customClass');
            },
          },
          delay: {
            type: [Number, Object, String],
            default: function() {
              return Ct('BTooltip', 'delay');
            },
          },
          boundary: {
            type: [String, W, Object],
            default: function() {
              return Ct('BTooltip', 'boundary');
            },
          },
          boundaryPadding: {
            type: [Number, String],
            default: function() {
              return Ct('BTooltip', 'boundaryPadding');
            },
          },
          offset: { type: [Number, String], default: 0 },
          noFade: { type: Boolean, default: !1 },
          container: { type: [String, W, Object] },
          show: { type: Boolean, default: !1 },
          disabled: { type: Boolean, default: !1 },
          id: { type: String, default: null },
        },
        data: function() {
          return { localShow: this.show, localTitle: '', localContent: '' };
        },
        computed: {
          templateData: function() {
            return {
              title: this.localTitle,
              content: this.localContent,
              target: this.target,
              triggers: this.triggers,
              placement: this.placement,
              fallbackPlacement: this.fallbackPlacement,
              variant: this.variant,
              customClass: this.customClass,
              container: this.container,
              boundary: this.boundary,
              boundaryPadding: this.boundaryPadding,
              delay: this.delay,
              offset: this.offset,
              noFade: this.noFade,
              disabled: this.disabled,
              id: this.id,
            };
          },
          templateTitleContent: function() {
            return { title: this.title, content: this.content };
          },
        },
        watch: {
          show: function(t, e) {
            t !== e && t !== this.localShow && this.$_bv_toolpop && (t ? this.$_bv_toolpop.show() : this.$_bv_toolpop.forceHide());
          },
          disabled: function(t, e) {
            t ? this.doDisable() : this.doEnable();
          },
          localShow: function(t, e) {
            this.$emit('update:show', t);
          },
          templateData: function(t, e) {
            var n = this;
            this.$nextTick(function() {
              n.$_bv_toolpop && n.$_bv_toolpop.updateData(n.templateData);
            });
          },
          templateTitleContent: function(t, e) {
            this.$nextTick(this.updateContent);
          },
        },
        created: function() {
          this.$_bv_toolpop = null;
        },
        updated: function() {
          this.$nextTick(this.updateContent);
        },
        beforeDestroy: function() {
          this.$off('open', this.doOpen),
            this.$off('close', this.doClose),
            this.$off('disable', this.doDisable),
            this.$off('enable', this.doEnable),
            this.$_bv_toolpop && this.$_bv_toolpop.$destroy(),
            (this.$_bv_toolpop = null);
        },
        mounted: function() {
          var t = this;
          this.$nextTick(function() {
            var e = t.getComponent();
            t.updateContent();
            var n = Ss(t) || Ss(t.$parent),
              r = (t.$_bv_toolpop = new e({ parent: t, _scopeId: n || void 0 }));
            r.updateData(t.templateData),
              r.$on('show', t.onShow),
              r.$on('shown', t.onShown),
              r.$on('hide', t.onHide),
              r.$on('hidden', t.onHidden),
              r.$on('disabled', t.onDisabled),
              r.$on('enabled', t.onEnabled),
              t.disabled && t.doDisable(),
              t.$on('open', t.doOpen),
              t.$on('close', t.doClose),
              t.$on('disable', t.doDisable),
              t.$on('enable', t.doEnable),
              t.localShow && t.$_bv_toolpop && t.$_bv_toolpop.show();
          });
        },
        methods: {
          getComponent: function() {
            return au;
          },
          updateContent: function() {
            this.setTitle(this.$scopedSlots.default || this.title);
          },
          setTitle: function(t) {
            (t = tt(t) ? '' : t), this.localTitle !== t && (this.localTitle = t);
          },
          setContent: function(t) {
            (t = tt(t) ? '' : t), this.localContent !== t && (this.localContent = t);
          },
          onShow: function(t) {
            this.$emit('show', t), t && (this.localShow = !t.defaultPrevented);
          },
          onShown: function(t) {
            (this.localShow = !0), this.$emit('shown', t);
          },
          onHide: function(t) {
            this.$emit('hide', t);
          },
          onHidden: function(t) {
            this.$emit('hidden', t), (this.localShow = !1);
          },
          onDisabled: function(t) {
            t && 'disabled' === t.type && (this.$emit('update:disabled', !0), this.$emit('disabled', t));
          },
          onEnabled: function(t) {
            t && 'enabled' === t.type && (this.$emit('update:disabled', !1), this.$emit('enabled', t));
          },
          doOpen: function() {
            !this.localShow && this.$_bv_toolpop && this.$_bv_toolpop.show();
          },
          doClose: function() {
            this.localShow && this.$_bv_toolpop && this.$_bv_toolpop.hide();
          },
          doDisable: function(t) {
            this.$_bv_toolpop && this.$_bv_toolpop.disable();
          },
          doEnable: function() {
            this.$_bv_toolpop && this.$_bv_toolpop.enable();
          },
        },
        render: function(t) {
          return t();
        },
      }),
      lu = r.extend({
        name: 'BVPopoverTemplate',
        extends: tu,
        computed: {
          templateType: function() {
            return 'popover';
          },
        },
        methods: {
          renderTemplate: function(t) {
            var e = et(this.title) ? this.title({}) : this.title,
              n = et(this.content) ? this.content({}) : this.content,
              r = this.html && !et(this.title) ? { innerHTML: this.title } : {},
              i = this.html && !et(this.content) ? { innerHTML: this.content } : {};
            return t('div', { staticClass: 'popover b-popover', class: this.templateClasses, attrs: this.templateAttributes, on: this.templateListeners }, [
              t('div', { ref: 'arrow', staticClass: 'arrow' }),
              tt(e) || '' === e ? t() : t('h3', { staticClass: 'popover-header', domProps: r }, [e]),
              tt(n) || '' === n ? t() : t('div', { staticClass: 'popover-body', domProps: i }, [n]),
            ]);
          },
        },
      }),
      uu = r.extend({
        name: 'BVPopover',
        extends: au,
        computed: {
          templateType: function() {
            return 'popover';
          },
        },
        methods: {
          getTemplate: function() {
            return lu;
          },
        },
      }),
      cu = r.extend({
        name: 'BPopover',
        extends: su,
        inheritAttrs: !1,
        props: {
          title: { type: String },
          content: { type: String },
          triggers: { type: [String, Array], default: 'click' },
          placement: { type: String, default: 'right' },
          variant: {
            type: String,
            default: function() {
              return Ct('BPopover', 'variant');
            },
          },
          customClass: {
            type: String,
            default: function() {
              return Ct('BPopover', 'customClass');
            },
          },
          delay: {
            type: [Number, Object, String],
            default: function() {
              return Ct('BPopover', 'delay');
            },
          },
          boundary: {
            type: [String, W, Object],
            default: function() {
              return Ct('BPopover', 'boundary');
            },
          },
          boundaryPadding: {
            type: [Number, String],
            default: function() {
              return Ct('BPopover', 'boundaryPadding');
            },
          },
        },
        methods: {
          getComponent: function() {
            return uu;
          },
          updateContent: function() {
            this.setContent(this.$scopedSlots.default || this.content), this.setTitle(this.$scopedSlots.title || this.title);
          },
        },
      });
    function fu(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function du(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var hu = '__BV_Popover__',
      pu = { focus: !0, hover: !0, click: !0, blur: !0, manual: !0 },
      mu = /^html$/i,
      vu = /^nofade$/i,
      gu = /^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i,
      bu = /^(window|viewport|scrollParent)$/i,
      yu = /^d\d+$/i,
      wu = /^ds\d+$/i,
      Ou = /^dh\d+$/i,
      Su = /^o-?\d+$/i,
      _u = /^v-.+$/i,
      ku = function(t, e) {
        var n = 'BPopover',
          r = {
            title: void 0,
            content: void 0,
            trigger: '',
            placement: 'right',
            fallbackPlacement: 'flip',
            container: !1,
            animation: !0,
            offset: 0,
            disabled: !1,
            id: null,
            html: !1,
            delay: Ct(n, 'delay'),
            boundary: String(Ct(n, 'boundary')),
            boundaryPadding: parseInt(Ct(n, 'boundaryPadding'), 10) || 0,
            variant: Ct(n, 'variant'),
            customClass: Ct(n, 'customClass'),
          };
        if (
          (rt(t.value) || it(t.value)
            ? (r.content = t.value)
            : et(t.value)
            ? (r.content = t.value)
            : T(t.value) &&
              (r = (function(t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = null != arguments[e] ? arguments[e] : {};
                  e % 2
                    ? fu(n, !0).forEach(function(e) {
                        du(t, e, n[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : fu(n).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      });
                }
                return t;
              })({}, r, {}, t.value)),
          t.arg && (r.container = '#'.concat(t.arg)),
          Z(r.title))
        ) {
          var i = e.data || {};
          r.title = i.attrs && !tt(i.attrs.title) ? i.attrs.title : void 0;
        }
        T(r.delay) || (r.delay = { show: parseInt(r.delay, 10) || 0, hide: parseInt(r.delay, 10) || 0 }),
          y(t.modifiers).forEach(function(t) {
            if (mu.test(t)) r.html = !0;
            else if (vu.test(t)) r.animation = !1;
            else if (gu.test(t)) r.placement = t;
            else if (bu.test(t)) (t = 'scrollparent' === t ? 'scrollParent' : t), (r.boundary = t);
            else if (yu.test(t)) {
              var e = parseInt(t.slice(1), 10) || 0;
              (r.delay.show = e), (r.delay.hide = e);
            } else
              wu.test(t)
                ? (r.delay.show = parseInt(t.slice(2), 10) || 0)
                : Ou.test(t)
                ? (r.delay.hide = parseInt(t.slice(2), 10) || 0)
                : Su.test(t)
                ? (r.offset = parseInt(t.slice(1), 10) || 0)
                : _u.test(t) && (r.variant = t.slice(2) || null);
          });
        var o = {};
        return (
          d(r.trigger || '')
            .filter(Boolean)
            .join(' ')
            .trim()
            .toLowerCase()
            .split(/\s+/)
            .forEach(function(t) {
              pu[t] && (o[t] = !0);
            }),
          y(t.modifiers).forEach(function(t) {
            (t = t.toLowerCase()), pu[t] && (o[t] = !0);
          }),
          (r.trigger = y(o).join(' ')),
          'blur' === r.trigger && (r.trigger = 'focus'),
          r.trigger || (r.trigger = 'click'),
          r
        );
      },
      xu = function(t, e, n) {
        if (i.j) {
          var r = ku(e, n);
          if (!t[hu]) {
            var o = n.context;
            (t[hu] = new uu({ parent: o, _scopeId: Ss(o, void 0) })),
              (t[hu].__bv_prev_data__ = {}),
              t[hu].$on('show', function() {
                var e = {};
                et(r.title) && (e.title = r.title(t)), et(r.content) && (e.content = r.content(t)), y(e).length > 0 && t[hu].updateData(e);
              });
          }
          var a = {
              title: r.title,
              content: r.content,
              triggers: r.trigger,
              placement: r.placement,
              fallbackPlacement: r.fallbackPlacement,
              variant: r.variant,
              customClass: r.customClass,
              container: r.container,
              boundary: r.boundary,
              delay: r.delay,
              offset: r.offset,
              noFade: !r.animation,
              id: r.id,
              disabled: r.disabled,
              html: r.html,
            },
            s = t[hu].__bv_prev_data__;
          if (((t[hu].__bv_prev_data__ = a), !vr(a, s))) {
            var l = { target: t };
            y(a).forEach(function(e) {
              a[e] !== s[e] && (l[e] = ('title' !== e && 'content' !== e) || !et(a[e]) ? a[e] : a[e](t));
            }),
              t[hu].updateData(l);
          }
        }
      },
      Tu = wt({
        directives: {
          VBPopover: {
            bind: function(t, e, n) {
              xu(t, e, n);
            },
            componentUpdated: function(t, e, n) {
              n.context.$nextTick(function() {
                xu(t, e, n);
              });
            },
            unbind: function(t) {
              !(function(t) {
                t[hu] && (t[hu].$destroy(), (t[hu] = null)), delete t[hu];
              })(t);
            },
          },
        },
      }),
      Pu = wt({ components: { BPopover: cu }, plugins: { VBPopoverPlugin: Tu } }),
      ju = r.extend({
        name: 'BProgressBar',
        mixins: [Te],
        inject: {
          bvProgress: {
            default: function() {
              return {};
            },
          },
        },
        props: {
          value: { type: Number, default: 0 },
          label: { type: String, default: null },
          labelHtml: { type: String },
          max: { type: Number, default: null },
          precision: { type: Number, default: null },
          variant: {
            type: String,
            default: function() {
              return Ct('BProgressBar', 'variant');
            },
          },
          striped: { type: Boolean, default: null },
          animated: { type: Boolean, default: null },
          showProgress: { type: Boolean, default: null },
          showValue: { type: Boolean, default: null },
        },
        computed: {
          progressBarClasses: function() {
            return [
              this.computedVariant ? 'bg-'.concat(this.computedVariant) : '',
              this.computedStriped || this.computedAnimated ? 'progress-bar-striped' : '',
              this.computedAnimated ? 'progress-bar-animated' : '',
            ];
          },
          progressBarStyles: function() {
            return { width: (this.value / this.computedMax) * 100 + '%' };
          },
          computedProgress: function() {
            var t = Math.pow(10, this.computedPrecision);
            return Math.round((100 * t * this.value) / this.computedMax) / t;
          },
          computedMax: function() {
            return it(this.max) ? this.max : this.bvProgress.max || 100;
          },
          computedVariant: function() {
            return this.variant || this.bvProgress.variant;
          },
          computedPrecision: function() {
            return it(this.precision) ? this.precision : this.bvProgress.precision || 0;
          },
          computedStriped: function() {
            return nt(this.striped) ? this.striped : this.bvProgress.striped || !1;
          },
          computedAnimated: function() {
            return nt(this.animated) ? this.animated : this.bvProgress.animated || !1;
          },
          computedShowProgress: function() {
            return nt(this.showProgress) ? this.showProgress : this.bvProgress.showProgress || !1;
          },
          computedShowValue: function() {
            return nt(this.showValue) ? this.showValue : this.bvProgress.showValue || !1;
          },
        },
        render: function(t) {
          var e = t();
          return (
            this.hasNormalizedSlot('default')
              ? (e = this.normalizeSlot('default'))
              : this.label || this.labelHtml
              ? (e = t('span', { domProps: on(this.labelHtml, this.label) }))
              : this.computedShowProgress
              ? (e = this.computedProgress.toFixed(this.computedPrecision))
              : this.computedShowValue && (e = this.value.toFixed(this.computedPrecision)),
            t(
              'div',
              {
                staticClass: 'progress-bar',
                class: this.progressBarClasses,
                style: this.progressBarStyles,
                attrs: { role: 'progressbar', 'aria-valuemin': '0', 'aria-valuemax': this.computedMax.toString(), 'aria-valuenow': this.value.toFixed(this.computedPrecision) },
              },
              [e]
            )
          );
        },
      }),
      Cu = wt({
        components: {
          BProgress: r.extend({
            name: 'BProgress',
            mixins: [Te],
            provide: function() {
              return { bvProgress: this };
            },
            props: {
              variant: {
                type: String,
                default: function() {
                  return Ct('BProgress', 'variant');
                },
              },
              striped: { type: Boolean, default: !1 },
              animated: { type: Boolean, default: !1 },
              height: { type: String, default: null },
              precision: { type: Number, default: 0 },
              showProgress: { type: Boolean, default: !1 },
              showValue: { type: Boolean, default: !1 },
              max: { type: Number, default: 100 },
              value: { type: Number, default: 0 },
            },
            computed: {
              progressHeight: function() {
                return { height: this.height || null };
              },
            },
            render: function(t) {
              var e = this.normalizeSlot('default');
              return (
                e ||
                  (e = t(ju, {
                    props: {
                      value: this.value,
                      max: this.max,
                      precision: this.precision,
                      variant: this.variant,
                      animated: this.animated,
                      striped: this.striped,
                      showProgress: this.showProgress,
                      showValue: this.showValue,
                    },
                  })),
                t('div', { class: ['progress'], style: this.progressHeight }, [e])
              );
            },
          }),
          BProgressBar: ju,
        },
      });
    function Bu(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var $u = wt({
        components: {
          BSpinner: r.extend({
            name: 'BSpinner',
            functional: !0,
            props: {
              type: { type: String, default: 'border' },
              label: { type: String, default: null },
              variant: {
                type: String,
                default: function() {
                  return Ct('BSpinner', 'variant');
                },
              },
              small: { type: Boolean, default: !1 },
              role: { type: String, default: 'status' },
              tag: { type: String, default: 'span' },
            },
            render: function(t, e) {
              var n,
                r = e.props,
                i = e.data,
                o = e.slots,
                a = e.scopedSlots,
                s = o(),
                l = xe('label', {}, a || {}, s) || r.label;
              return (
                l && (l = t('span', { staticClass: 'sr-only' }, l)),
                t(
                  r.tag,
                  ve(i, {
                    attrs: { role: l ? r.role || 'status' : null, 'aria-hidden': l ? null : 'true' },
                    class:
                      ((n = {}),
                      Bu(n, 'spinner-'.concat(r.type), Boolean(r.type)),
                      Bu(n, 'spinner-'.concat(r.type, '-sm'), r.small),
                      Bu(n, 'text-'.concat(r.variant), Boolean(r.variant)),
                      n),
                  }),
                  [l || t()]
                )
              );
            },
          }),
        },
      }),
      Au = function(t) {
        return t
          .replace(/_/g, ' ')
          .replace(/([a-z])([A-Z])/g, function(t, e, n) {
            return e + ' ' + n;
          })
          .replace(/(\s|^)(\w)/g, function(t, e, n) {
            return e + n.toUpperCase();
          });
      },
      Eu = { _rowVariant: !0, _cellVariants: !0, _showDetails: !0 },
      Iu = [
        'a',
        'a *',
        'button',
        'button *',
        'input:not(.disabled):not([disabled])',
        'select:not(.disabled):not([disabled])',
        'textarea:not(.disabled):not([disabled])',
        '[role="link"]',
        '[role="link"] *',
        '[role="button"]',
        '[role="button"] *',
        '[tabindex]:not(.disabled):not([disabled])',
      ].join(','),
      Du = function(t, e) {
        var n = [];
        if (
          (c(t) &&
            t
              .filter(function(t) {
                return t;
              })
              .forEach(function(t) {
                if (rt(t)) n.push({ key: t, label: Au(t) });
                else if (x(t) && t.key && rt(t.key)) n.push(P(t));
                else if (x(t) && 1 === y(t).length) {
                  var e = y(t)[0],
                    r = (function(t, e) {
                      var n = null;
                      return rt(e) ? (n = { key: t, label: e }) : et(e) ? (n = { key: t, formatter: e }) : x(e) ? ((n = P(e)).key = n.key || t) : !1 !== e && (n = { key: t }), n;
                    })(e, t[e]);
                  r && n.push(r);
                }
              }),
          0 === n.length && c(e) && e.length > 0)
        ) {
          var r = e[0];
          y(r).forEach(function(t) {
            Eu[t] || n.push({ key: t, label: Au(t) });
          });
        }
        var i = {};
        return n.filter(function(t) {
          return !i[t.key] && ((i[t.key] = !0), (t.label = rt(t.label) ? t.label : Au(t.key)), !0);
        });
      },
      Nu = {
        props: {
          items: {
            type: Array,
            default: function() {
              return [];
            },
          },
          fields: { type: Array, default: null },
          primaryKey: { type: String, default: null },
          value: {
            type: Array,
            default: function() {
              return [];
            },
          },
        },
        data: function() {
          return { localItems: c(this.items) ? this.items.slice() : [] };
        },
        computed: {
          computedFields: function() {
            return Du(this.fields, this.localItems);
          },
          computedFieldsObj: function() {
            var t = this.$parent;
            return this.computedFields.reduce(function(e, n) {
              if (((e[n.key] = P(n)), n.formatter)) {
                var r = n.formatter;
                rt(r) && et(t[r]) ? (r = t[r]) : et(r) || (r = void 0), (e[n.key].formatter = r);
              }
              return e;
            }, {});
          },
          computedItems: function() {
            return (this.paginatedItems || this.sortedItems || this.filteredItems || this.localItems || []).slice();
          },
          context: function() {
            return {
              filter: this.localFilter,
              sortBy: this.localSortBy,
              sortDesc: this.localSortDesc,
              perPage: parseInt(this.perPage, 10) || 0,
              currentPage: parseInt(this.currentPage, 10) || 1,
              apiUrl: this.apiUrl,
            };
          },
        },
        watch: {
          items: function(t) {
            c(t) ? (this.localItems = t.slice()) : (Z(t) || Q(t)) && (this.localItems = []);
          },
          computedItems: function(t) {
            this.$emit('input', t);
          },
          context: function(t, e) {
            vr(t, e) || this.$emit('context-changed', t);
          },
        },
        mounted: function() {
          this.$emit('input', this.computedItems);
        },
        methods: {
          getFieldFormatter: function(t) {
            var e = this.computedFieldsObj[t];
            return e ? e.formatter : void 0;
          },
        },
      };
    var Fu = {
        props: { stacked: { type: [Boolean, String], default: !1 } },
        computed: {
          isStacked: function() {
            return '' === this.stacked || this.stacked;
          },
          isStackedAlways: function() {
            return !0 === this.isStacked;
          },
          stackedTableClasses: function() {
            return (
              (t = { 'b-table-stacked': this.isStackedAlways }),
              (e = 'b-table-stacked-'.concat(this.stacked)),
              (n = !this.isStackedAlways && this.isStacked),
              e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n),
              t
            );
            var t, e, n;
          },
        },
      },
      Ru = function(t, e, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return y(t).reduce(function(i, o) {
          if (!Eu[o] && !(e && e.length > 0 && f(e, o)) && (!(n && n.length > 0) || f(n, o))) {
            var a = r[o] || {},
              s = t[o],
              l = a.filterByFormatted,
              u = et(l) ? l : l ? a.formatter : null;
            i[o] = et(u) ? u(s, o, t) : s;
          }
          return i;
        }, {});
      },
      Lu = function t(e) {
        return tt(e)
          ? ''
          : x(e) && !ot(e)
          ? y(e)
              .sort()
              .filter(function(t) {
                return !tt(t);
              })
              .map(function(n) {
                return t(e[n]);
              })
              .join(' ')
          : String(e);
      },
      Vu = function(t, e, n, r) {
        return x(t) ? Lu(Ru(t, e, n, r)) : '';
      },
      Mu = 'b-table: Prop "filter-debounce" is deprecated. Use the debounce feature of <b-form-input> instead',
      Hu = {
        props: {
          filter: { type: [String, RegExp, Object, Array], default: null },
          filterFunction: { type: Function, default: null },
          filterIgnoredFields: { type: Array },
          filterIncludedFields: { type: Array },
          filterDebounce: {
            type: [Number, String],
            deprecated: Mu,
            default: 0,
            validator: function(t) {
              return /^\d+/.test(String(t));
            },
          },
        },
        data: function() {
          return { isFiltered: !1, localFilter: this.filterSanitize(this.filter) };
        },
        computed: {
          computedFilterIgnored: function() {
            return this.filterIgnoredFields ? d(this.filterIgnoredFields).filter(Boolean) : null;
          },
          computedFilterIncluded: function() {
            return this.filterIncludedFields ? d(this.filterIncludedFields).filter(Boolean) : null;
          },
          computedFilterDebounce: function() {
            var t = parseInt(this.filterDebounce, 10) || 0;
            return t > 0 && o(Mu), t;
          },
          localFiltering: function() {
            return !this.hasProvider || !!this.noProviderFiltering;
          },
          filteredCheck: function() {
            return { filteredItems: this.filteredItems, localItems: this.localItems, localFilter: this.localFilter };
          },
          localFilterFn: function() {
            return et(this.filterFunction) ? this.filterFunction : null;
          },
          filteredItems: function() {
            var t = this.localItems || [],
              e = this.localFilter,
              n = this.localFiltering ? this.filterFnFactory(this.localFilterFn, e) || this.defaultFilterFnFactory(e) : null;
            return n && t.length > 0 ? t.filter(n) : t;
          },
        },
        watch: {
          computedFilterDebounce: function(t, e) {
            !t && this.$_filterTimer && (clearTimeout(this.$_filterTimer), (this.$_filterTimer = null), (this.localFilter = this.filterSanitize(this.filter)));
          },
          filter: {
            deep: !0,
            handler: function(t, e) {
              var n = this,
                r = this.computedFilterDebounce;
              clearTimeout(this.$_filterTimer),
                (this.$_filterTimer = null),
                r && r > 0
                  ? (this.$_filterTimer = setTimeout(function() {
                      n.localFilter = n.filterSanitize(t);
                    }, r))
                  : (this.localFilter = this.filterSanitize(t));
            },
          },
          filteredCheck: function(t) {
            var e = t.filteredItems,
              n = (t.localItems, t.localFilter),
              r = !1;
            n ? (vr(n, []) || vr(n, {}) ? (r = !1) : n && (r = !0)) : (r = !1), r && this.$emit('filtered', e, e.length), (this.isFiltered = r);
          },
          isFiltered: function(t, e) {
            !1 === t && !0 === e && this.$emit('filtered', this.localItems, this.localItems.length);
          },
        },
        created: function() {
          var t = this;
          (this.$_filterTimer = null),
            this.$nextTick(function() {
              t.isFiltered = Boolean(t.localFilter);
            });
        },
        beforeDestroy: function() {
          clearTimeout(this.$_filterTimer), (this.$_filterTimer = null);
        },
        methods: {
          filterSanitize: function(t) {
            return !this.localFiltering || this.localFilterFn || rt(t) || lt(t) ? I(t) : '';
          },
          filterFnFactory: function(t, e) {
            if (!t || !et(t) || !e || vr(e, []) || vr(e, {})) return null;
            return function(n) {
              return t(n, e);
            };
          },
          defaultFilterFnFactory: function(t) {
            var e = this;
            if (!t || (!rt(t) && !lt(t))) return null;
            var n = t;
            if (rt(n)) {
              var r = t.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&').replace(/[\s\uFEFF\xA0]+/g, '\\s+');
              n = new RegExp('.*'.concat(r, '.*'), 'i');
            }
            return function(t) {
              return (n.lastIndex = 0), n.test(Vu(t, e.computedFilterIgnored, e.computedFilterIncluded, e.computedFieldsObj));
            };
          },
        },
      },
      zu = function(t, e) {
        return t
          .map(function(t, e) {
            return [e, t];
          })
          .sort(
            function(t, e) {
              return this(t[1], e[1]) || t[0] - e[0];
            }.bind(e)
          )
          .map(function(t) {
            return t[1];
          });
      },
      Gu = function(t, e, n, r, i, o, a, s) {
        var l = D(t, n, null),
          u = D(e, n, null);
        return (
          et(i) && ((l = i(l, n, t)), (u = i(u, n, e))),
          (l = tt(l) ? '' : l),
          (u = tt(u) ? '' : u),
          (ot(l) && ot(u)) || (it(l) && it(u)) ? (l < u ? -1 : l > u ? 1 : 0) : s && '' === l && '' !== u ? 1 : s && '' !== l && '' === u ? -1 : Lu(l).localeCompare(Lu(u), a, o)
        );
      };
    function Uu(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Wu(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var qu = {
        props: {
          sortBy: { type: String, default: '' },
          sortDesc: { type: Boolean, default: !1 },
          sortDirection: {
            type: String,
            default: 'asc',
            validator: function(t) {
              return f(['asc', 'desc', 'last'], t);
            },
          },
          sortCompare: { type: Function, default: null },
          sortCompareOptions: {
            type: Object,
            default: function() {
              return { numeric: !0 };
            },
          },
          sortCompareLocale: { type: [String, Array] },
          sortNullLast: { type: Boolean, default: !1 },
          noSortReset: { type: Boolean, default: !1 },
          labelSortAsc: { type: String, default: 'Click to sort Ascending' },
          labelSortDesc: { type: String, default: 'Click to sort Descending' },
          labelSortClear: { type: String, default: 'Click to clear sorting' },
          noLocalSorting: { type: Boolean, default: !1 },
          noFooterSorting: { type: Boolean, default: !1 },
          sortIconLeft: { type: Boolean, default: !1 },
        },
        data: function() {
          return { localSortBy: this.sortBy || '', localSortDesc: this.sortDesc || !1 };
        },
        computed: {
          localSorting: function() {
            return this.hasProvider ? !!this.noProviderSorting : !this.noLocalSorting;
          },
          isSortable: function() {
            return this.computedFields.some(function(t) {
              return t.sortable;
            });
          },
          sortedItems: function() {
            var t = (this.filteredItems || this.localItems || []).slice(),
              e = this.localSortBy,
              n = this.localSortDesc,
              r = this.sortCompare,
              i = this.localSorting,
              o = (function(t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = null != arguments[e] ? arguments[e] : {};
                  e % 2
                    ? Uu(n, !0).forEach(function(e) {
                        Wu(t, e, n[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : Uu(n).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      });
                }
                return t;
              })({}, this.sortCompareOptions, { usage: 'sort' }),
              a = this.sortCompareLocale || void 0,
              s = this.sortNullLast;
            if (e && i) {
              var l = (this.computedFieldsObj[e] || {}).sortByFormatted,
                u = et(l) ? l : l ? this.getFieldFormatter(e) : void 0;
              return zu(t, function(t, i) {
                var l = null;
                return et(r) && (l = r(t, i, e, n, u, o, a)), (tt(l) || !1 === l) && (l = Gu(t, i, e, n, u, o, a, s)), (l || 0) * (n ? -1 : 1);
              });
            }
            return t;
          },
        },
        watch: {
          isSortable: function(t, e) {
            t ? this.isSortable && this.$on('head-clicked', this.handleSort) : this.$off('head-clicked', this.handleSort);
          },
          sortDesc: function(t, e) {
            t !== this.localSortDesc && (this.localSortDesc = t || !1);
          },
          sortBy: function(t, e) {
            t !== this.localSortBy && (this.localSortBy = t || '');
          },
          localSortDesc: function(t, e) {
            t !== e && this.$emit('update:sortDesc', t);
          },
          localSortBy: function(t, e) {
            t !== e && this.$emit('update:sortBy', t);
          },
        },
        created: function() {
          this.isSortable && this.$on('head-clicked', this.handleSort);
        },
        methods: {
          handleSort: function(t, e, n, r) {
            var i = this;
            if (this.isSortable && (!r || !this.noFooterSorting)) {
              var o = !1,
                a = function() {
                  var t = e.sortDirection || i.sortDirection;
                  'asc' === t ? (i.localSortDesc = !1) : 'desc' === t && (i.localSortDesc = !0);
                };
              e.sortable
                ? (t === this.localSortBy ? (this.localSortDesc = !this.localSortDesc) : ((this.localSortBy = t), a()), (o = !0))
                : this.localSortBy && !this.noSortReset && ((this.localSortBy = ''), a(), (o = !0)),
                o && this.$emit('sort-changed', this.context);
            }
          },
          sortTheadThClasses: function(t, e, n) {
            return { 'b-table-sort-icon-left': e.sortable && this.sortIconLeft && !(n && this.noFooterSorting) };
          },
          sortTheadThAttrs: function(t, e, n) {
            if (!this.isSortable || (n && this.noFooterSorting)) return {};
            var r = e.sortable,
              i = '';
            (e.label && e.label.trim()) || e.headerTitle || (i = Au(t));
            var o = '';
            if (r)
              if (this.localSortBy === t) o = this.localSortDesc ? this.labelSortAsc : this.labelSortDesc;
              else {
                o = this.localSortDesc ? this.labelSortDesc : this.labelSortAsc;
                var a = this.sortDirection || e.sortDirection;
                'asc' === a ? (o = this.labelSortAsc) : 'desc' === a && (o = this.labelSortDesc);
              }
            else this.noSortReset || (o = this.localSortBy ? this.labelSortClear : '');
            return {
              'aria-label': (i = [i.trim(), o.trim()].filter(Boolean).join(': ')) || null,
              'aria-sort': r && this.localSortBy === t ? (this.localSortDesc ? 'descending' : 'ascending') : r ? 'none' : null,
            };
          },
        },
      },
      Ku = {
        props: { perPage: { type: [Number, String], default: 0 }, currentPage: { type: [Number, String], default: 1 } },
        computed: {
          localPaging: function() {
            return !this.hasProvider || !!this.noProviderPaging;
          },
          paginatedItems: function() {
            var t = this.sortedItems || this.filteredItems || this.localItems || [],
              e = Math.max(parseInt(this.currentPage, 10) || 1, 1),
              n = Math.max(parseInt(this.perPage, 10) || 0, 0);
            return this.localPaging && n && (t = t.slice((e - 1) * n, e * n)), t;
          },
        },
      },
      Ju = {
        props: { caption: { type: String, default: null }, captionHtml: { type: String } },
        computed: {
          captionId: function() {
            return this.isStacked ? this.safeId('_caption_') : null;
          },
        },
        methods: {
          renderCaption: function() {
            var t = this.$createElement,
              e = this.normalizeSlot('table-caption'),
              n = t();
            if (e || this.caption || this.captionHtml) {
              var r = { key: 'caption', attrs: { id: this.captionId } };
              e || (r.domProps = on(this.captionHtml, this.caption)), (n = t('caption', r, [e]));
            }
            return n;
          },
        },
      },
      Xu = {
        methods: {
          renderColgroup: function() {
            var t = this.$createElement,
              e = this.computedFields,
              n = t();
            return (
              this.hasNormalizedSlot('table-colgroup') && (n = t('colgroup', { key: 'colgroup' }, [this.normalizeSlot('table-colgroup', { columns: e.length, fields: e })])), n
            );
          },
        },
      },
      Yu = ['TD', 'TH', 'TR'],
      Zu = function(t) {
        if (!t || !t.target) return !1;
        var e = t.target;
        if (e.disabled || -1 !== Yu.indexOf(e.tagName)) return !1;
        if (Yt('.dropdown-menu', e)) return !0;
        var n = 'LABEL' === e.tagName ? e : Yt('label', e);
        if (n) {
          var r = oe(n, 'for'),
            i = r ? Qt(r) : Jt('input, select, textarea', n);
          if (i && !i.disabled) return !0;
        }
        return Xt(e, Iu);
      },
      Qu = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
          e = ue();
        return !!(e && '' !== e.toString().trim() && e.containsNode && Gt(t)) && e.containsNode(t, !0);
      };
    function tc(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function ec(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var nc = { headVariant: { type: String, default: null } },
      rc = r.extend({
        name: 'BThead',
        mixins: [Te],
        inheritAttrs: !1,
        provide: function() {
          return { bvTableRowGroup: this };
        },
        inject: {
          bvTable: {
            default: function() {
              return {};
            },
          },
        },
        props: nc,
        computed: {
          isThead: function() {
            return !0;
          },
          isDark: function() {
            return this.bvTable.dark;
          },
          isStacked: function() {
            return this.bvTable.isStacked;
          },
          isResponsive: function() {
            return this.bvTable.isResponsive;
          },
          isStickyHeader: function() {
            return !this.isStacked && this.bvTable.stickyHeader;
          },
          hasStickyHeader: function() {
            return !this.isStacked && this.bvTable.stickyHeader;
          },
          tableVariant: function() {
            return this.bvTable.tableVariant;
          },
          theadClasses: function() {
            return [this.headVariant ? 'thead-'.concat(this.headVariant) : null];
          },
          theadAttrs: function() {
            return (function(t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? tc(n, !0).forEach(function(e) {
                      ec(t, e, n[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                  : tc(n).forEach(function(e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
              }
              return t;
            })({ role: 'rowgroup' }, this.$attrs);
          },
        },
        render: function(t) {
          return t('thead', { class: this.theadClasses, attrs: this.theadAttrs, on: this.$listeners }, this.normalizeSlot('default', {}));
        },
      });
    function ic(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function oc(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var ac = { footVariant: { type: String, default: null } },
      sc = r.extend({
        name: 'BTfoot',
        mixins: [Te],
        inheritAttrs: !1,
        provide: function() {
          return { bvTableRowGroup: this };
        },
        inject: {
          bvTable: {
            default: function() {
              return {};
            },
          },
        },
        props: ac,
        computed: {
          isTfoot: function() {
            return !0;
          },
          isDark: function() {
            return this.bvTable.dark;
          },
          isStacked: function() {
            return this.bvTable.isStacked;
          },
          isResponsive: function() {
            return this.bvTable.isResponsive;
          },
          isStickyHeader: function() {
            return !1;
          },
          hasStickyHeader: function() {
            return !this.isStacked && this.bvTable.stickyHeader;
          },
          tableVariant: function() {
            return this.bvTable.tableVariant;
          },
          tfootClasses: function() {
            return [this.footVariant ? 'thead-'.concat(this.footVariant) : null];
          },
          tfootAttrs: function() {
            return (function(t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? ic(n, !0).forEach(function(e) {
                      oc(t, e, n[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                  : ic(n).forEach(function(e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
              }
              return t;
            })({ role: 'rowgroup' }, this.$attrs);
          },
        },
        render: function(t) {
          return t('tfoot', { class: this.tfootClasses, attrs: this.tfootAttrs, on: this.$listeners }, this.normalizeSlot('default', {}));
        },
      });
    function lc(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function uc(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var cc = { variant: { type: String, default: null } },
      fc = r.extend({
        name: 'BTr',
        mixins: [Te],
        inheritAttrs: !1,
        provide: function() {
          return { bvTableTr: this };
        },
        inject: {
          bvTableRowGroup: {
            defaut: function() {
              return {};
            },
          },
        },
        props: cc,
        computed: {
          inTbody: function() {
            return this.bvTableRowGroup.isTbody;
          },
          inThead: function() {
            return this.bvTableRowGroup.isThead;
          },
          inTfoot: function() {
            return this.bvTableRowGroup.isTfoot;
          },
          isDark: function() {
            return this.bvTableRowGroup.isDark;
          },
          isStacked: function() {
            return this.bvTableRowGroup.isStacked;
          },
          isResponsive: function() {
            return this.bvTableRowGroup.isResponsive;
          },
          isStickyHeader: function() {
            return this.bvTableRowGroup.isStickyHeader;
          },
          hasStickyHeader: function() {
            return !this.isStacked && this.bvTableRowGroup.hasStickyHeader;
          },
          tableVariant: function() {
            return this.bvTableRowGroup.tableVariant;
          },
          headVariant: function() {
            return this.inThead ? this.bvTableRowGroup.headVariant : null;
          },
          footVariant: function() {
            return this.inTfoot ? this.bvTableRowGroup.footVariant : null;
          },
          isRowDark: function() {
            return 'light' !== this.headVariant && 'light' !== this.footVariant && ('dark' === this.headVariant || 'dark' === this.footVariant || this.isDark);
          },
          trClasses: function() {
            return [this.variant ? ''.concat(this.isRowDark ? 'bg' : 'table', '-').concat(this.variant) : null];
          },
          trAttrs: function() {
            return (function(t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? lc(n, !0).forEach(function(e) {
                      uc(t, e, n[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                  : lc(n).forEach(function(e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
              }
              return t;
            })({ role: 'row' }, this.$attrs);
          },
        },
        render: function(t) {
          return t('tr', { class: this.trClasses, attrs: this.trAttrs, on: this.$listeners }, this.normalizeSlot('default', {}));
        },
      });
    function dc(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function hc(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var pc = /^\d+$/,
      mc = function(t) {
        return (t = parseInt(t, 10)), pc.test(String(t)) && t > 0 ? t : null;
      },
      vc = function(t) {
        return tt(t) || mc(t) > 0;
      },
      gc = {
        variant: { type: String, default: null },
        colspan: { type: [Number, String], default: null, validator: vc },
        rowspan: { type: [Number, String], default: null, validator: vc },
        stackedHeading: { type: String, default: null },
        stickyColumn: { type: Boolean, default: !1 },
      },
      bc = r.extend({
        name: 'BTableCell',
        mixins: [Te],
        inheritAttrs: !1,
        inject: {
          bvTableTr: {
            default: function() {
              return {};
            },
          },
        },
        props: gc,
        computed: {
          tag: function() {
            return 'td';
          },
          inTbody: function() {
            return this.bvTableTr.inTbody;
          },
          inThead: function() {
            return this.bvTableTr.inThead;
          },
          inTfoot: function() {
            return this.bvTableTr.inTfoot;
          },
          isDark: function() {
            return this.bvTableTr.isDark;
          },
          isStacked: function() {
            return this.bvTableTr.isStacked;
          },
          isStackedCell: function() {
            return this.inTbody && this.isStacked;
          },
          isResponsive: function() {
            return this.bvTableTr.isResponsive;
          },
          isStickyHeader: function() {
            return this.bvTableTr.isStickyHeader;
          },
          hasStickyHeader: function() {
            return this.bvTableTr.hasStickyHeader;
          },
          isStickyColumn: function() {
            return !this.isStacked && (this.isResponsive || this.hasStickyHeader) && this.stickyColumn;
          },
          rowVariant: function() {
            return this.bvTableTr.variant;
          },
          headVariant: function() {
            return this.bvTableTr.headVariant;
          },
          footVariant: function() {
            return this.bvTableTr.footVariant;
          },
          tableVariant: function() {
            return this.bvTableTr.tableVariant;
          },
          computedColspan: function() {
            return mc(this.colspan);
          },
          computedRowspan: function() {
            return mc(this.rowspan);
          },
          cellClasses: function() {
            var t = this.variant;
            return (
              ((!t && this.isStickyHeader && !this.headVariant) || (!t && this.isStickyColumn)) && (t = this.rowVariant || this.tableVariant || 'b-table-default'),
              [t ? ''.concat(this.isDark ? 'bg' : 'table', '-').concat(t) : null, this.isStickyColumn ? 'b-table-sticky-column' : null]
            );
          },
          cellAttrs: function() {
            var t = this.inThead || this.inTfoot,
              e = this.computedColspan,
              n = this.computedRowspan,
              r = 'cell',
              i = null;
            return (
              t ? ((r = 'columnheader'), (i = e > 0 ? 'colspan' : 'col')) : 'th' === this.tag && ((r = 'rowheader'), (i = n > 0 ? 'rowgroup' : 'row')),
              (function(t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = null != arguments[e] ? arguments[e] : {};
                  e % 2
                    ? dc(n, !0).forEach(function(e) {
                        hc(t, e, n[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : dc(n).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      });
                }
                return t;
              })({ colspan: e, rowspan: n, role: r, scope: i }, this.$attrs, { 'data-label': this.isStackedCell && !tt(this.stackedHeading) ? De(this.stackedHeading) : null })
            );
          },
        },
        render: function(t) {
          var e = [this.normalizeSlot('default')];
          return t(this.tag, { class: this.cellClasses, attrs: this.cellAttrs, on: this.$listeners }, [this.isStackedCell ? t('div', [e]) : e]);
        },
      }),
      yc = r.extend({
        name: 'BTh',
        extends: bc,
        computed: {
          tag: function() {
            return 'th';
          },
        },
      });
    function wc(t) {
      return (
        (function(t) {
          if (Array.isArray(t)) {
            for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
            return n;
          }
        })(t) ||
        (function(t) {
          if (Symbol.iterator in Object(t) || '[object Arguments]' === Object.prototype.toString.call(t)) return Array.from(t);
        })(t) ||
        (function() {
          throw new TypeError('Invalid attempt to spread non-iterable instance');
        })()
      );
    }
    function Oc(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Sc(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Oc(n, !0).forEach(function(e) {
              _c(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Oc(n).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return t;
    }
    function _c(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var kc = {
        props: {
          headVariant: {
            type: String,
            default: function() {
              return Ct('BTable', 'headVariant');
            },
          },
          headRowVariant: { type: String, default: null },
          theadClass: { type: [String, Array, Object] },
          theadTrClass: { type: [String, Array, Object] },
        },
        methods: {
          fieldClasses: function(t) {
            return [t.class ? t.class : '', t.thClass ? t.thClass : ''];
          },
          headClicked: function(t, e, n) {
            (this.stopIfBusy && this.stopIfBusy(t)) || Zu(t) || Qu(this.$el) || (t.stopPropagation(), t.preventDefault(), this.$emit('head-clicked', e.key, e, t, n));
          },
          renderThead: function() {
            var t = this,
              e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              n = this.$createElement,
              r = this.computedFields || [];
            if (this.isStackedAlways || 0 === r.length) return n();
            var i = this.isSelectable ? this.selectAllRows : function() {},
              o = this.isSelectable ? this.clearSelected : function() {},
              a = function(r, a) {
                var s = null;
                r.label.trim() || r.headerTitle || (s = Au(r.key));
                var l = t.$listeners['head-clicked'] || t.isSortable,
                  u = {};
                l &&
                  ((u.click = function(n) {
                    t.headClicked(n, r, e);
                  }),
                  (u.keydown = function(n) {
                    var i = n.keyCode;
                    (i !== In.ENTER && i !== In.SPACE) || t.headClicked(n, r, e);
                  }));
                var c = t.isSortable ? t.sortTheadThAttrs(r.key, r, e) : {},
                  f = t.isSortable ? t.sortTheadThClasses(r.key, r, e) : null,
                  d = {
                    key: r.key,
                    class: [t.fieldClasses(r), f],
                    props: { variant: r.variant, stickyColumn: r.stickyColumn },
                    style: r.thStyle || {},
                    attrs: Sc(
                      { tabindex: l ? '0' : null, abbr: r.headerAbbr || null, title: r.headerTitle || null, 'aria-colindex': String(a + 1), 'aria-label': s },
                      t.getThValues(null, r.key, r.thAttr, e ? 'foot' : 'head', {}),
                      {},
                      c
                    ),
                    on: u,
                  },
                  h = ['head('.concat(r.key, ')'), 'head('.concat(r.key.toLowerCase(), ')'), 'head()'];
                e && (h = ['foot('.concat(r.key, ')'), 'foot('.concat(r.key.toLowerCase(), ')'), 'foot()'].concat(wc(h)));
                var p = t.hasNormalizedSlot(h),
                  m = r.label;
                return (
                  p ? (m = t.normalizeSlot(h, { label: r.label, column: r.key, field: r, isFoot: e, selectAllRows: i, clearSelected: o })) : (d.domProps = on(r.labelHtml)),
                  n(yc, d, m)
                );
              },
              s = r.map(a).filter(function(t) {
                return t;
              }),
              l = [];
            if (e) {
              var u = { variant: tt(this.footRowVariant) ? this.headRowVariant : this.footRowVariant };
              l.push(n(fc, { class: this.tfootTrClass, props: u }, s));
            } else {
              var c = { columns: r.length, fields: r, selectAllRows: i, clearSelected: o };
              l.push(this.normalizeSlot('thead-top', c) || n()), l.push(n(fc, { class: this.theadTrClass, props: { variant: this.headRowVariant } }, s));
            }
            return n(
              e ? sc : rc,
              {
                key: e ? 'bv-tfoot' : 'bv-thead',
                class: (e ? this.tfootClass : this.theadClass) || null,
                props: e ? { footVariant: this.footVariant || this.headVariant || null } : { headVariant: this.headVariant || null },
              },
              l
            );
          },
        },
      },
      xc = {
        props: {
          footClone: { type: Boolean, default: !1 },
          footVariant: {
            type: String,
            default: function() {
              return Ct('BTable', 'footVariant');
            },
          },
          footRowVariant: { type: String, default: null },
          tfootClass: { type: [String, Array, Object], default: null },
          tfootTrClass: { type: [String, Array, Object], default: null },
        },
        methods: {
          renderTFootCustom: function() {
            var t = this.$createElement;
            return this.hasNormalizedSlot('custom-foot')
              ? t(
                  sc,
                  { key: 'bv-tfoot-custom', class: this.tfootClass || null, props: { footVariant: this.footVariant || this.headVariant || null } },
                  this.normalizeSlot('custom-foot', { items: this.computedItems.slice(), fields: this.computedFields.slice(), columns: this.computedFields.length })
                )
              : t();
          },
          renderTfoot: function() {
            return this.footClone ? this.renderThead(!0) : this.renderTFootCustom();
          },
        },
      };
    function Tc(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Pc(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Tc(n, !0).forEach(function(e) {
              jc(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Tc(n).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return t;
    }
    function jc(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var Cc = { tbodyTransitionProps: { type: Object }, tbodyTransitionHandlers: { type: Object } },
      Bc = r.extend({
        name: 'BTbody',
        mixins: [Te],
        inheritAttrs: !1,
        provide: function() {
          return { bvTableRowGroup: this };
        },
        inject: {
          bvTable: {
            default: function() {
              return {};
            },
          },
        },
        props: Cc,
        computed: {
          isTbody: function() {
            return !0;
          },
          isDark: function() {
            return this.bvTable.dark;
          },
          isStacked: function() {
            return this.bvTable.isStacked;
          },
          isResponsive: function() {
            return this.bvTable.isResponsive;
          },
          isStickyHeader: function() {
            return !1;
          },
          hasStickyHeader: function() {
            return !this.isStacked && this.bvTable.stickyHeader;
          },
          tableVariant: function() {
            return this.bvTable.tableVariant;
          },
          isTransitionGroup: function() {
            return this.tbodyTransitionProps || this.tbodyTransitionHandlers;
          },
          tbodyAttrs: function() {
            return Pc({ role: 'rowgroup' }, this.$attrs);
          },
          tbodyProps: function() {
            return this.tbodyTransitionProps ? Pc({}, this.tbodyTransitionProps, { tag: 'tbody' }) : {};
          },
        },
        render: function(t) {
          var e = { props: this.tbodyProps, attrs: this.tbodyAttrs };
          return (
            this.isTransitionGroup ? ((e.on = this.tbodyTransitionHandlers || {}), (e.nativeOn = this.$listeners || {})) : (e.on = this.$listeners || {}),
            t(this.isTransitionGroup ? 'transition-group' : 'tbody', e, this.normalizeSlot('default', {}))
          );
        },
      });
    function $c(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Ac(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? $c(n, !0).forEach(function(e) {
              Ec(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : $c(n).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return t;
    }
    function Ec(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    function Ic(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Dc(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var Nc = {
        mixins: [
          {
            props: { tbodyTrClass: { type: [String, Array, Object, Function], default: null }, detailsTdClass: { type: [String, Array, Object], default: null } },
            methods: {
              getTdValues: function(t, e, n, r) {
                var i = this.$parent;
                if (n) {
                  var o = D(t, e, '');
                  return et(n) ? n(o, e, t) : rt(n) && et(i[n]) ? i[n](o, e, t) : n;
                }
                return r;
              },
              getThValues: function(t, e, n, r, i) {
                var o = this.$parent;
                if (n) {
                  var a = D(t, e, '');
                  return et(n) ? n(a, e, t, r) : rt(n) && et(o[n]) ? o[n](a, e, t, r) : n;
                }
                return i;
              },
              getFormattedValue: function(t, e) {
                var n = e.key,
                  r = this.getFieldFormatter(n),
                  i = D(t, n, null);
                return et(r) && (i = r(i, n, t)), tt(i) ? '' : i;
              },
              toggleDetailsFactory: function(t, e) {
                var n = this;
                return function() {
                  t && n.$set(e, '_showDetails', !e._showDetails);
                };
              },
              rowHovered: function(t) {
                this.tbodyRowEvtStopped(t) || this.emitTbodyRowEvent('row-hovered', t);
              },
              rowUnhovered: function(t) {
                this.tbodyRowEvtStopped(t) || this.emitTbodyRowEvent('row-unhovered', t);
              },
              renderTbodyRowCell: function(t, e, n, r) {
                var i = this,
                  o = this.$createElement,
                  a = this.hasNormalizedSlot('row-details'),
                  s = this.getFormattedValue(n, t),
                  l = t.key,
                  u = !this.isStacked && (this.isResponsive || this.stickyHeader) && t.stickyColumn,
                  c = u ? (t.isRowHeader ? yc : bc) : t.isRowHeader ? 'th' : 'td',
                  f = n._cellVariants && n._cellVariants[l] ? n._cellVariants[l] : t.variant || null,
                  d = {
                    key: 'row-'
                      .concat(r, '-cell-')
                      .concat(e, '-')
                      .concat(l),
                    class: [t.class ? t.class : '', this.getTdValues(n, l, t.tdClass, '')],
                    props: {},
                    attrs: Ac({ 'aria-colindex': String(e + 1) }, t.isRowHeader ? this.getThValues(n, l, t.thAttr, 'row', {}) : this.getTdValues(n, l, t.tdAttr, {})),
                  };
                u
                  ? (d.props = { stackedHeading: this.isStacked ? t.label : null, stickyColumn: !0, variant: f })
                  : ((d.attrs['data-label'] = this.isStacked && !tt(t.label) ? De(t.label) : null),
                    (d.attrs.role = t.isRowHeader ? 'rowheader' : 'cell'),
                    (d.attrs.scope = t.isRowHeader ? 'row' : null),
                    f && d.class.push(''.concat(this.dark ? 'bg' : 'table', '-').concat(f)));
                var h = {
                  item: n,
                  index: r,
                  field: t,
                  unformatted: D(n, l, ''),
                  value: s,
                  toggleDetails: this.toggleDetailsFactory(a, n),
                  detailsShowing: Boolean(n._showDetails),
                };
                this.supportsSelectableRows &&
                  ((h.rowSelected = this.isRowSelected(r)),
                  (h.selectRow = function() {
                    return i.selectRow(r);
                  }),
                  (h.unselectRow = function() {
                    return i.unselectRow(r);
                  }));
                var p = this.$_bodyFieldSlotNameCache[l],
                  m = p ? this.normalizeSlot(p, h) : De(s);
                return this.isStacked && (m = [o('div', {}, [m])]), o(c, d, [m]);
              },
              renderTbodyRow: function(t, e) {
                var n = this,
                  r = this.$createElement,
                  i = this.computedFields,
                  o = this.striped,
                  a = this.hasNormalizedSlot('row-details'),
                  s = Boolean(t._showDetails && a),
                  l = this.$listeners['row-clicked'] || this.hasSelectableRowClick,
                  u = [],
                  c = s ? this.safeId('_details_'.concat(e, '_')) : null,
                  f = i.map(function(r, i) {
                    return n.renderTbodyRowCell(r, i, t, e);
                  }),
                  d = null;
                this.currentPage && this.perPage && this.perPage > 0 && (d = String((this.currentPage - 1) * this.perPage + e + 1));
                var h = this.primaryKey,
                  p = De(D(t, h)) || null,
                  m = p || String(e),
                  v = p ? this.safeId('_row_'.concat(p)) : null,
                  g = this.selectableRowClasses ? this.selectableRowClasses(e) : {},
                  b = this.selectableRowAttrs ? this.selectableRowAttrs(e) : {};
                if (
                  (u.push(
                    r(
                      fc,
                      {
                        key: '__b-table-row-'.concat(m, '__'),
                        ref: 'itemRows',
                        refInFor: !0,
                        class: [et(this.tbodyTrClass) ? this.tbodyTrClass(t, 'row') : this.tbodyTrClass, g, s ? 'b-table-has-details' : ''],
                        props: { variant: t._rowVariant || null },
                        attrs: Ac({ id: v, tabindex: l ? '0' : null, 'data-pk': p || null, 'aria-details': c, 'aria-owns': c, 'aria-rowindex': d }, b),
                        on: { mouseenter: this.rowHovered, mouseleave: this.rowUnhovered },
                      },
                      f
                    )
                  ),
                  s)
                ) {
                  var y = { item: t, index: e, fields: i, toggleDetails: this.toggleDetailsFactory(a, t) };
                  this.supportsSelectableRows &&
                    ((y.rowSelected = this.isRowSelected(e)),
                    (y.selectRow = function() {
                      return n.selectRow(e);
                    }),
                    (y.unselectRow = function() {
                      return n.unselectRow(e);
                    }));
                  var w = r(bc, { props: { colspan: i.length }, class: this.detailsTdClass }, [this.normalizeSlot('row-details', y)]);
                  o && u.push(r('tr', { key: '__b-table-details-stripe__'.concat(m), staticClass: 'd-none', attrs: { 'aria-hidden': 'true', role: 'presentation' } })),
                    u.push(
                      r(
                        fc,
                        {
                          key: '__b-table-details__'.concat(m),
                          staticClass: 'b-table-details',
                          class: [et(this.tbodyTrClass) ? this.tbodyTrClass(t, 'row-details') : this.tbodyTrClass],
                          props: { variant: t._rowVariant || null },
                          attrs: { id: c, tabindex: '-1' },
                        },
                        [w]
                      )
                    );
                } else a && (u.push(r()), o && u.push(r()));
                return u;
              },
            },
          },
        ],
        props: (function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? Ic(n, !0).forEach(function(e) {
                  Dc(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : Ic(n).forEach(function(e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
          }
          return t;
        })({}, Cc, { tbodyClass: { type: [String, Array, Object] } }),
        methods: {
          getTbodyTrs: function() {
            var t = this.$refs.tbody.$el || this.$refs.tbody,
              e = (this.$refs.itemRows || []).map(function(t) {
                return t.$el || t;
              });
            return u(t.children).filter(function(t) {
              return f(e, t);
            });
          },
          getTbodyTrIndex: function(t) {
            if (!Gt(t)) return -1;
            var e = 'TR' === t.tagName ? t : Yt('tr', t, !0);
            return e ? this.getTbodyTrs().indexOf(e) : -1;
          },
          emitTbodyRowEvent: function(t, e) {
            if (t && e && e.target) {
              var n = this.getTbodyTrIndex(e.target);
              if (n > -1) {
                var r = this.computedItems[n];
                this.$emit(t, r, n, e);
              }
            }
          },
          tbodyRowEvtStopped: function(t) {
            return this.stopIfBusy && this.stopIfBusy(t);
          },
          onTbodyRowKeydown: function(t) {
            var e = t.target;
            if (!this.tbodyRowEvtStopped(t) && 'TR' === e.tagName && e === document.activeElement && 0 === e.tabIndex) {
              var n = t.keyCode;
              if (f([In.ENTER, In.SPACE], n)) t.stopPropagation(), t.preventDefault(), this.onTBodyRowClicked(t);
              else if (f([In.UP, In.DOWN, In.HOME, In.END], n)) {
                var r = this.getTbodyTrIndex(e);
                if (r > -1) {
                  t.stopPropagation(), t.preventDefault();
                  var i = this.getTbodyTrs(),
                    o = t.shiftKey;
                  n === In.HOME || (o && n === In.UP)
                    ? i[0].focus()
                    : n === In.END || (o && n === In.DOWN)
                    ? i[i.length - 1].focus()
                    : n === In.UP && r > 0
                    ? i[r - 1].focus()
                    : n === In.DOWN && r < i.length - 1 && i[r + 1].focus();
                }
              }
            }
          },
          onTBodyRowClicked: function(t) {
            this.tbodyRowEvtStopped(t) || Zu(t) || Qu(this.$el) || this.emitTbodyRowEvent('row-clicked', t);
          },
          onTbodyRowMiddleMouseRowClicked: function(t) {
            this.tbodyRowEvtStopped(t) || 2 !== t.which || this.emitTbodyRowEvent('row-middle-clicked', t);
          },
          onTbodyRowContextmenu: function(t) {
            this.tbodyRowEvtStopped(t) || this.emitTbodyRowEvent('row-contextmenu', t);
          },
          onTbodyRowDblClicked: function(t) {
            this.tbodyRowEvtStopped(t) || Zu(t) || this.emitTbodyRowEvent('row-dblclicked', t);
          },
          renderTbody: function() {
            var t = this,
              e = this.computedItems,
              n = this.$createElement,
              r = this.$listeners['row-clicked'] || this.hasSelectableRowClick,
              i = [],
              o = this.renderBusy ? this.renderBusy() : null;
            if (o) i.push(o);
            else {
              var a = {},
                s = this.hasNormalizedSlot('cell()') ? 'cell()' : null;
              this.computedFields.forEach(function(e) {
                var n = e.key,
                  r = 'cell('.concat(n, ')'),
                  i = 'cell('.concat(n.toLowerCase(), ')');
                a[n] = t.hasNormalizedSlot(r) ? r : t.hasNormalizedSlot(i) ? i : s;
              }),
                (this.$_bodyFieldSlotNameCache = a),
                i.push(this.renderTopRow ? this.renderTopRow() : n()),
                e.forEach(function(e, n) {
                  i.push(t.renderTbodyRow(e, n));
                }),
                i.push(this.renderEmpty ? this.renderEmpty() : n()),
                i.push(this.renderBottomRow ? this.renderBottomRow() : n());
            }
            var l = { auxclick: this.onTbodyRowMiddleMouseRowClicked, contextmenu: this.onTbodyRowContextmenu, dblclick: this.onTbodyRowDblClicked };
            return (
              r && ((l.click = this.onTBodyRowClicked), (l.keydown = this.onTbodyRowKeydown)),
              n(
                Bc,
                {
                  ref: 'tbody',
                  class: this.tbodyClass || null,
                  props: { tbodyTransitionProps: this.tbodyTransitionProps, tbodyTransitionHandlers: this.tbodyTransitionHandlers },
                  on: l,
                },
                i
              )
            );
          },
        },
      },
      Fc = {
        props: {
          showEmpty: { type: Boolean, default: !1 },
          emptyText: { type: String, default: 'There are no records to show' },
          emptyHtml: { type: String },
          emptyFilteredText: { type: String, default: 'There are no records matching your request' },
          emptyFilteredHtml: { type: String },
        },
        methods: {
          renderEmpty: function() {
            var t,
              e = this.$createElement,
              n = this.computedItems;
            return (
              !this.showEmpty ||
                (n && 0 !== n.length) ||
                (this.computedBusy && this.hasNormalizedSlot('table-busy')) ||
                ((t = this.normalizeSlot(this.isFiltered ? 'emptyfiltered' : 'empty', {
                  emptyFilteredHtml: this.emptyFilteredHtml,
                  emptyFilteredText: this.emptyFilteredText,
                  emptyHtml: this.emptyHtml,
                  emptyText: this.emptyText,
                  fields: this.computedFields,
                  items: this.computedItems,
                })) ||
                  (t = e('div', {
                    class: ['text-center', 'my-2'],
                    domProps: this.isFiltered ? on(this.emptyFilteredHtml, this.emptyFilteredText) : on(this.emptyHtml, this.emptyText),
                  })),
                (t = e(bc, { props: { colspan: this.computedFields.length || null } }, [e('div', { attrs: { role: 'alert', 'aria-live': 'polite' } }, [t])])),
                (t = e(
                  fc,
                  {
                    key: this.isFiltered ? 'b-empty-filtered-row' : 'b-empty-row',
                    staticClass: 'b-table-empty-row',
                    class: [et(this.tbodyTrClass) ? this.tbodyTrClass(null, 'row-empty') : this.tbodyTrClass],
                  },
                  [t]
                ))),
              t || e()
            );
          },
        },
      },
      Rc = {
        methods: {
          renderTopRow: function() {
            var t = this.$createElement;
            if (!this.hasNormalizedSlot('top-row') || !0 === this.stacked || '' === this.stacked) return t();
            var e = this.computedFields;
            return t(fc, { key: 'b-top-row', staticClass: 'b-table-top-row', class: [et(this.tbodyTrClass) ? this.tbodyTrClass(null, 'row-top') : this.tbodyTrClass] }, [
              this.normalizeSlot('top-row', { columns: e.length, fields: e }),
            ]);
          },
        },
      },
      Lc = {
        methods: {
          renderBottomRow: function() {
            var t = this.$createElement;
            if (!this.hasNormalizedSlot('bottom-row') || !0 === this.stacked || '' === this.stacked) return t();
            var e = this.computedFields;
            return t(
              fc,
              { key: 'b-bottom-row', staticClass: 'b-table-bottom-row', class: [et(this.tbodyTrClass) ? this.tbodyTrClass(null, 'row-bottom') : this.tbodyTrClass] },
              this.normalizeSlot('bottom-row', { columns: e.length, fields: e })
            );
          },
        },
      },
      Vc = {
        props: { busy: { type: Boolean, default: !1 } },
        data: function() {
          return { localBusy: !1 };
        },
        computed: {
          computedBusy: function() {
            return this.busy || this.localBusy;
          },
        },
        watch: {
          localBusy: function(t, e) {
            t !== e && this.$emit('update:busy', t);
          },
        },
        methods: {
          stopIfBusy: function(t) {
            return !!this.computedBusy && (t.preventDefault(), t.stopPropagation(), !0);
          },
          renderBusy: function() {
            var t = this.$createElement;
            return this.computedBusy && this.hasNormalizedSlot('table-busy')
              ? t(fc, { key: 'table-busy-slot', staticClass: 'b-table-busy-slot', class: [et(this.tbodyTrClass) ? this.tbodyTrClass(null, 'table-busy') : this.tbodyTrClass] }, [
                  t(bc, { props: { colspan: this.computedFields.length || null } }, [this.normalizeSlot('table-busy')]),
                ])
              : null;
          },
        },
      };
    function Mc(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var Hc = {
        props: {
          selectable: { type: Boolean, default: !1 },
          selectMode: {
            type: String,
            default: 'multi',
            validator: function(t) {
              return f(['range', 'multi', 'single'], t);
            },
          },
          selectedVariant: {
            type: String,
            default: function() {
              return Ct('BTable', 'selectedVariant');
            },
          },
          noSelectOnClick: { type: Boolean, default: !1 },
        },
        data: function() {
          return { selectedRows: [], selectedLastRow: -1 };
        },
        computed: {
          isSelectable: function() {
            return this.selectable && this.selectMode;
          },
          hasSelectableRowClick: function() {
            return this.isSelectable && !this.noSelectOnClick;
          },
          supportsSelectableRows: function() {
            return !0;
          },
          selectableHasSelection: function() {
            return this.isSelectable && this.selectedRows && this.selectedRows.length > 0 && this.selectedRows.some(Boolean);
          },
          selectableIsMultiSelect: function() {
            return this.isSelectable && f(['range', 'multi'], this.selectMode);
          },
          selectableTableClasses: function() {
            var t;
            return (
              Mc((t = { 'b-table-selectable': this.isSelectable }), 'b-table-select-'.concat(this.selectMode), this.isSelectable),
              Mc(t, 'b-table-selecting', this.selectableHasSelection),
              Mc(t, 'b-table-selectable-no-click', this.isSelectable && !this.hasSelectableRowClick),
              t
            );
          },
          selectableTableAttrs: function() {
            return { 'aria-multiselectable': this.isSelectable ? (this.selectableIsMultiSelect ? 'true' : 'false') : null };
          },
        },
        watch: {
          computedItems: function(t, e) {
            var n = !1;
            if (this.isSelectable && this.selectedRows.length > 0) {
              n = c(t) && c(e) && t.length === e.length;
              for (var r = 0; n && r < t.length; r++) n = vr(Ru(t[r]), Ru(e[r]));
            }
            n || this.clearSelected();
          },
          selectable: function(t, e) {
            this.clearSelected(), this.setSelectionHandlers(t);
          },
          selectMode: function(t, e) {
            this.clearSelected();
          },
          hasSelectableRowClick: function(t, e) {
            this.clearSelected(), this.setSelectionHandlers(!t);
          },
          selectedRows: function(t, e) {
            var n = this;
            if (this.isSelectable && !vr(t, e)) {
              var r = [];
              t.forEach(function(t, e) {
                t && r.push(n.computedItems[e]);
              }),
                this.$emit('row-selected', r);
            }
          },
        },
        beforeMount: function() {
          this.isSelectable && this.setSelectionHandlers(!0);
        },
        methods: {
          selectRow: function(t) {
            if (this.isSelectable && it(t) && t >= 0 && t < this.computedItems.length && !this.isRowSelected(t)) {
              var e = this.selectableIsMultiSelect ? this.selectedRows.slice() : [];
              (e[t] = !0), (this.selectedLastClicked = -1), (this.selectedRows = e);
            }
          },
          unselectRow: function(t) {
            if (this.isSelectable && it(t) && this.isRowSelected(t)) {
              var e = this.selectedRows.slice();
              (e[t] = !1), (this.selectedLastClicked = -1), (this.selectedRows = e);
            }
          },
          selectAllRows: function() {
            var t = this.computedItems.length;
            this.isSelectable &&
              t > 0 &&
              ((this.selectedLastClicked = -1),
              (this.selectedRows = this.selectableIsMultiSelect
                ? Rl(t).map(function(t) {
                    return !0;
                  })
                : [!0]));
          },
          isRowSelected: function(t) {
            return Boolean(it(t) && this.selectedRows[t]);
          },
          clearSelected: function() {
            (this.selectedLastClicked = -1), (this.selectedRows = []);
          },
          selectableRowClasses: function(t) {
            if (this.isSelectable && this.isRowSelected(t)) {
              var e = this.selectedVariant;
              return Mc({ 'b-table-row-selected': !0 }, ''.concat(this.dark ? 'bg' : 'table', '-').concat(e), e);
            }
            return {};
          },
          selectableRowAttrs: function(t) {
            return { 'aria-selected': this.isSelectable ? (this.isRowSelected(t) ? 'true' : 'false') : null };
          },
          setSelectionHandlers: function(t) {
            var e = t && !this.noSelectOnClick ? '$on' : '$off';
            this[e]('row-clicked', this.selectionHandler), this[e]('filtered', this.clearSelected), this[e]('context-changed', this.clearSelected);
          },
          selectionHandler: function(t, e, n) {
            if (this.isSelectable && !this.noSelectOnClick) {
              var r = this.selectMode,
                i = this.selectedRows.slice(),
                o = !i[e];
              if ('single' === r) i = [];
              else if ('range' === r)
                if (this.selectedLastRow > -1 && n.shiftKey) {
                  for (var a = Math.min(this.selectedLastRow, e); a <= Math.max(this.selectedLastRow, e); a++) i[a] = !0;
                  o = !0;
                } else n.ctrlKey || n.metaKey || ((i = []), (o = !0)), (this.selectedLastRow = o ? e : -1);
              (i[e] = o), (this.selectedRows = i);
            } else this.clearSelected();
          },
        },
      },
      zc = {
        mixins: [Jr],
        props: {
          items: {
            type: [Array, Function],
            default: function() {
              return [];
            },
          },
          noProviderPaging: { type: Boolean, default: !1 },
          noProviderSorting: { type: Boolean, default: !1 },
          noProviderFiltering: { type: Boolean, default: !1 },
          apiUrl: { type: String, default: '' },
        },
        computed: {
          hasProvider: function() {
            return et(this.items);
          },
          providerTriggerContext: function() {
            var t = { apiUrl: this.apiUrl, filter: null, sortBy: null, sortDesc: null, perPage: null, currentPage: null };
            return (
              this.noProviderFiltering || (t.filter = this.localFilter),
              this.noProviderSorting || ((t.sortBy = this.localSortBy), (t.sortDesc = this.localSortDesc)),
              this.noProviderPaging || ((t.perPage = this.perPage), (t.currentPage = this.currentPage)),
              P(t)
            );
          },
        },
        watch: {
          items: function(t, e) {
            (this.hasProvider || et(t)) && this.$nextTick(this._providerUpdate);
          },
          providerTriggerContext: function(t, e) {
            vr(t, e) || this.$nextTick(this._providerUpdate);
          },
        },
        mounted: function() {
          var t = this;
          !this.hasProvider || (this.localItems && 0 !== this.localItems.length) || this._providerUpdate(),
            this.listenOnRoot('bv::refresh::table', function(e) {
              (e !== t.id && e !== t) || t.refresh();
            });
        },
        methods: {
          refresh: function() {
            this.$off('refreshed', this.refresh),
              this.computedBusy
                ? this.localBusy && this.hasProvider && this.$on('refreshed', this.refresh)
                : (this.clearSelected(), this.hasProvider ? this.$nextTick(this._providerUpdate) : (this.localItems = c(this.items) ? this.items.slice() : []));
          },
          _providerSetLocal: function(t) {
            (this.localItems = c(t) ? t.slice() : []), (this.localBusy = !1), this.$emit('refreshed'), this.id && this.emitOnRoot('bv::table::refreshed', this.id);
          },
          _providerUpdate: function() {
            var t = this;
            this.hasProvider &&
              (this.computedBusy
                ? this.$nextTick(this.refresh)
                : ((this.localBusy = !0),
                  this.$nextTick(function() {
                    try {
                      var e = t.items(t.context, t._providerSetLocal);
                      !tt((n = e)) && et(n.then) && et(n.catch)
                        ? e.then(function(e) {
                            t._providerSetLocal(e);
                          })
                        : c(e)
                        ? t._providerSetLocal(e)
                        : 2 !== t.items.length && (l("b-table provider function didn't request callback and did not return a promise or data"), (t.localBusy = !1));
                    } catch (e) {
                      l('b-table provider function error ['.concat(e.name, '] ').concat(e.message)), (t.localBusy = !1), t.$off('refreshed', t.refresh);
                    }
                    var n;
                  })));
          },
        },
      };
    function Gc(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Uc(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var Wc = {
        inheritAttrs: !1,
        provide: function() {
          return { bvTable: this };
        },
        props: {
          striped: { type: Boolean, default: !1 },
          bordered: { type: Boolean, default: !1 },
          borderless: { type: Boolean, default: !1 },
          outlined: { type: Boolean, default: !1 },
          dark: { type: Boolean, default: !1 },
          hover: { type: Boolean, default: !1 },
          small: { type: Boolean, default: !1 },
          fixed: { type: Boolean, default: !1 },
          responsive: { type: [Boolean, String], default: !1 },
          stickyHeader: { type: [Boolean, String], default: !1 },
          noBorderCollapse: { type: Boolean, default: !1 },
          captionTop: { type: Boolean, default: !1 },
          tableVariant: { type: String, default: null },
          tableClass: { type: [String, Array, Object], default: null },
        },
        computed: {
          isResponsive: function() {
            var t = '' === this.responsive || this.responsive;
            return !this.isStacked && t;
          },
          isStickyHeader: function() {
            var t = '' === this.stickyHeader || this.stickyHeader;
            return !this.isStacked && t;
          },
          wrapperClasses: function() {
            return [
              this.isStickyHeader ? 'b-table-sticky-header' : '',
              !0 === this.isResponsive ? 'table-responsive' : this.isResponsive ? 'table-responsive-'.concat(this.responsive) : '',
            ].filter(Boolean);
          },
          wrapperStyles: function() {
            return this.isStickyHeader && !nt(this.isStickyHeader) ? { maxHeight: this.isStickyHeader } : {};
          },
          tableClasses: function() {
            var t = this.isTableSimple ? this.hover : this.hover && this.computedItems.length > 0 && !this.computedBusy;
            return [
              this.tableClass,
              {
                'table-striped': this.striped,
                'table-hover': t,
                'table-dark': this.dark,
                'table-bordered': this.bordered,
                'table-borderless': this.borderless,
                'table-sm': this.small,
                border: this.outlined,
                'b-table-fixed': this.fixed,
                'b-table-caption-top': this.captionTop,
                'b-table-no-border-collapse': this.noBorderCollapse,
              },
              this.tableVariant ? ''.concat(this.dark ? 'bg' : 'table', '-').concat(this.tableVariant) : '',
              this.stackedTableClasses,
              this.selectableTableClasses,
            ];
          },
          tableAttrs: function() {
            var t = [(this.$attrs || {})['aria-describedby'], this.captionId].filter(Boolean).join(' ') || null,
              e = this.computedItems,
              n = this.filteredItems,
              r = this.computedFields,
              i = this.selectableTableAttrs || {},
              o = this.isTableSimple ? {} : { 'aria-busy': this.computedBusy ? 'true' : 'false', 'aria-colcount': String(r.length), 'aria-describedby': t };
            return (function(t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? Gc(n, !0).forEach(function(e) {
                      Uc(t, e, n[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                  : Gc(n).forEach(function(e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
              }
              return t;
            })({ 'aria-rowcount': e && n && n.length > e.length ? String(n.length) : null }, this.$attrs, { id: this.safeId(), role: 'table' }, o, {}, i);
          },
        },
        render: function(t) {
          var e = [];
          this.isTableSimple
            ? e.push(this.normalizeSlot('default', {}))
            : (e.push(this.renderCaption ? this.renderCaption() : null),
              e.push(this.renderColgroup ? this.renderColgroup() : null),
              e.push(this.renderThead ? this.renderThead() : null),
              e.push(this.renderTbody ? this.renderTbody() : null),
              e.push(this.renderTfoot ? this.renderTfoot() : null));
          var n = t('table', { key: 'b-table', staticClass: 'table b-table', class: this.tableClasses, attrs: this.tableAttrs }, e.filter(Boolean));
          return this.wrapperClasses.length > 0 ? t('div', { key: 'wrap', class: this.wrapperClasses, style: this.wrapperStyles }, [n]) : n;
        },
      },
      qc = r.extend({ name: 'BTable', mixins: [Mr, Te, Nu, Wc, Fu, kc, xc, Nc, Fu, Hu, qu, Ku, Ju, Xu, Hc, Fc, Rc, Lc, Vc, zc] }),
      Kc = r.extend({ name: 'BTableLite', mixins: [Mr, Te, Nu, Wc, Fu, kc, xc, Nc, Ju, Xu] }),
      Jc = r.extend({
        name: 'BTableSimple',
        mixins: [Mr, Te, Wc, Fu],
        computed: {
          isTableSimple: function() {
            return !0;
          },
        },
      }),
      Xc = wt({
        components: { BTable: qc },
        plugins: {
          TableLitePlugin: wt({ components: { BTableLite: Kc } }),
          TableSimplePlugin: wt({ components: { BTableSimple: Jc, BTbody: Bc, BThead: rc, BTfoot: sc, BTr: fc, BTd: bc, BTh: yc } }),
        },
      });
    function Yc(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Zc(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var Qc = j(cl, ['tabs', 'isNavBar', 'cardHeader']),
      tf = function(t) {
        return !t.disabled;
      },
      ef = r.extend({
        name: 'BTabButtonHelper',
        inject: {
          bvTabs: {
            default: function() {
              return {};
            },
          },
        },
        props: {
          tab: { default: null },
          tabs: {
            type: Array,
            default: function() {
              return [];
            },
          },
          id: { type: String, default: null },
          controls: { type: String, default: null },
          tabIndex: { type: Number, default: null },
          posInSet: { type: Number, default: null },
          setSize: { type: Number, default: null },
          noKeyNav: { type: Boolean, default: !1 },
        },
        methods: {
          focus: function() {
            this.$refs && this.$refs.link && this.$refs.link.focus && this.$refs.link.focus();
          },
          handleEvt: function(t) {
            var e = function() {
              t.preventDefault(), t.stopPropagation();
            };
            if (!this.tab.disabled) {
              var n = t.type,
                r = t.keyCode,
                i = t.shiftKey;
              'click' === n
                ? (e(), this.$emit('click', t))
                : 'keydown' === n && r === In.SPACE
                ? (e(), this.$emit('click', t))
                : 'keydown' !== n ||
                  this.noKeyNav ||
                  (r === In.UP || r === In.LEFT || r === In.HOME
                    ? (e(), i || r === In.HOME ? this.$emit('first', t) : this.$emit('prev', t))
                    : (r !== In.DOWN && r !== In.RIGHT && r !== In.END) || (e(), i || r === In.END ? this.$emit('last', t) : this.$emit('next', t)));
            }
          },
        },
        render: function(t) {
          var e = t(
            Xe,
            {
              ref: 'link',
              staticClass: 'nav-link',
              class: [
                { active: this.tab.localActive && !this.tab.disabled, disabled: this.tab.disabled },
                this.tab.titleLinkClass,
                this.tab.localActive ? this.bvTabs.activeNavItemClass : null,
              ],
              props: { disabled: this.tab.disabled },
              attrs: {
                role: 'tab',
                id: this.id,
                tabindex: this.tabIndex,
                'aria-selected': this.tab.localActive && !this.tab.disabled ? 'true' : 'false',
                'aria-setsize': this.setSize,
                'aria-posinset': this.posInSet,
                'aria-controls': this.controls,
              },
              on: { click: this.handleEvt, keydown: this.handleEvt },
            },
            [this.tab.normalizeSlot('title') || this.tab.title]
          );
          return t('li', { staticClass: 'nav-item', class: [this.tab.titleItemClass], attrs: { role: 'presentation' } }, [e]);
        },
      }),
      nf = wt({
        components: {
          BTabs: r.extend({
            name: 'BTabs',
            mixins: [Mr, Te],
            provide: function() {
              return { bvTabs: this };
            },
            model: { prop: 'value', event: 'input' },
            props: (function(t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? Yc(n, !0).forEach(function(e) {
                      Zc(t, e, n[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                  : Yc(n).forEach(function(e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
              }
              return t;
            })({}, Qc, {
              tag: { type: String, default: 'div' },
              card: { type: Boolean, default: !1 },
              end: { type: Boolean, default: !1 },
              noFade: { type: Boolean, default: !1 },
              noNavStyle: { type: Boolean, default: !1 },
              noKeyNav: { type: Boolean, default: !1 },
              lazy: { type: Boolean, default: !1 },
              contentClass: { type: [String, Array, Object], default: null },
              navClass: { type: [String, Array, Object], default: null },
              navWrapperClass: { type: [String, Array, Object], default: null },
              activeNavItemClass: { type: [String, Array, Object], default: null },
              activeTabClass: { type: [String, Array, Object], default: null },
              value: { type: Number, default: null },
            }),
            data: function() {
              var t = parseInt(this.value, 10);
              return { currentTab: (t = isNaN(t) ? -1 : t), tabs: [], registeredTabs: [], isMounted: !1 };
            },
            computed: {
              fade: function() {
                return !this.noFade;
              },
              localNavClass: function() {
                var t = [];
                return this.card && this.vertical && t.push('card-header', 'h-100', 'border-bottom-0', 'rounded-0'), [].concat(t, [this.navClass]);
              },
            },
            watch: {
              currentTab: function(t, e) {
                var n = -1;
                this.tabs.forEach(function(e, r) {
                  t !== r || e.disabled ? (e.localActive = !1) : ((e.localActive = !0), (n = r));
                }),
                  this.$emit('input', n);
              },
              value: function(t, e) {
                if (t !== e) {
                  (t = parseInt(t, 10)), (t = isNaN(t) ? -1 : t), (e = parseInt(e, 10) || 0);
                  var n = this.tabs;
                  n[t] && !n[t].disabled ? this.activateTab(n[t]) : t < e ? this.previousTab() : this.nextTab();
                }
              },
              registeredTabs: function(t, e) {
                var n = this;
                this.$nextTick(function() {
                  Lt(function() {
                    n.updateTabs();
                  });
                });
              },
              tabs: function(t, e) {
                var n = this;
                vr(
                  t.map(function(t) {
                    return t._uid;
                  }),
                  e.map(function(t) {
                    return t._uid;
                  })
                ) ||
                  this.$nextTick(function() {
                    n.$emit('changed', t.slice(), e.slice());
                  });
              },
              isMounted: function(t, e) {
                var n = this;
                t &&
                  Lt(function() {
                    n.updateTabs();
                  }),
                  this.setObserver(t);
              },
            },
            created: function() {
              var t = this,
                e = parseInt(this.value, 10);
              (this.currentTab = isNaN(e) ? -1 : e),
                (this._bvObserver = null),
                this.$nextTick(function() {
                  t.updateTabs();
                });
            },
            mounted: function() {
              var t = this;
              this.updateTabs(),
                this.$nextTick(function() {
                  t.isMounted = !0;
                });
            },
            deactivated: function() {
              this.isMounted = !1;
            },
            activated: function() {
              var t = this,
                e = parseInt(this.value, 10);
              (this.currentTab = isNaN(e) ? -1 : e),
                this.$nextTick(function() {
                  t.updateTabs(), (t.isMounted = !0);
                });
            },
            beforeDestroy: function() {
              this.isMounted = !1;
            },
            destroyed: function() {
              this.tabs = [];
            },
            methods: {
              registerTab: function(t) {
                var e = this;
                f(this.registeredTabs, t) ||
                  (this.registeredTabs.push(t),
                  t.$once('hook:destroyed', function() {
                    e.unregisterTab(t);
                  }));
              },
              unregisterTab: function(t) {
                this.registeredTabs = this.registeredTabs.slice().filter(function(e) {
                  return e !== t;
                });
              },
              setObserver: function(t) {
                if (t) {
                  this.setObserver(!1);
                  var e = this;
                  this._bvObserver = Vr(
                    this.$refs.tabsContainer,
                    function() {
                      e.$nextTick(function() {
                        Lt(function() {
                          e.updateTabs();
                        });
                      });
                    },
                    { childList: !0, subtree: !1, attributes: !0, attributeFilter: ['id'] }
                  );
                } else this._bvObserver && this._bvObserver.disconnect && this._bvObserver.disconnect(), (this._bvObserver = null);
              },
              getTabs: function() {
                var t = this.registeredTabs.filter(function(t) {
                    return (
                      0 ===
                      t.$children.filter(function(t) {
                        return t._isTab;
                      }).length
                    );
                  }),
                  e = [];
                if (this.isMounted && t.length > 0) {
                  var n = t
                    .map(function(t) {
                      return '#'.concat(t.safeId());
                    })
                    .join(', ');
                  e = Kt(n, this.$el)
                    .map(function(t) {
                      return t.id;
                    })
                    .filter(Boolean);
                }
                return zu(t, function(t, n) {
                  return e.indexOf(t.safeId()) - e.indexOf(n.safeId());
                });
              },
              updateTabs: function() {
                var t = this.getTabs(),
                  e = t.indexOf(
                    t
                      .slice()
                      .reverse()
                      .find(function(t) {
                        return t.localActive && !t.disabled;
                      })
                  );
                if (e < 0) {
                  var n = this.currentTab;
                  n >= t.length
                    ? (e = t.indexOf(
                        t
                          .slice()
                          .reverse()
                          .find(tf)
                      ))
                    : t[n] && !t[n].disabled && (e = n);
                }
                e < 0 && (e = t.indexOf(t.find(tf))),
                  t.forEach(function(t, e) {
                    t.localActive = !1;
                  }),
                  t[e] && (t[e].localActive = !0),
                  (this.tabs = t),
                  (this.currentTab = e);
              },
              getButtonForTab: function(t) {
                return (this.$refs.buttons || []).find(function(e) {
                  return e.tab === t;
                });
              },
              updateButton: function(t) {
                var e = this.getButtonForTab(t);
                e && e.$forceUpdate && e.$forceUpdate();
              },
              activateTab: function(t) {
                var e = !1;
                if (t) {
                  var n = this.tabs.indexOf(t);
                  if (!t.disabled && n > -1 && n !== this.currentTab) {
                    var r = new di('activate-tab', { cancelable: !0, vueTarget: this, componentId: this.safeId() });
                    this.$emit(r.type, n, this.currentTab, r), r.defaultPrevented || ((e = !0), (this.currentTab = n));
                  }
                }
                return e || this.currentTab === this.value || this.$emit('input', this.currentTab), e;
              },
              deactivateTab: function(t) {
                return (
                  !!t &&
                  this.activateTab(
                    this.tabs
                      .filter(function(e) {
                        return e !== t;
                      })
                      .find(tf)
                  )
                );
              },
              focusButton: function(t) {
                var e = this;
                this.$nextTick(function() {
                  var n = e.getButtonForTab(t);
                  n && n.focus && n.focus();
                });
              },
              emitTabClick: function(t, e) {
                at(e) && t && t.$emit && !t.disabled && t.$emit('click', e);
              },
              clickTab: function(t, e) {
                this.activateTab(t), this.emitTabClick(t, e);
              },
              firstTab: function(t) {
                var e = this.tabs.find(tf);
                this.activateTab(e) && t && (this.focusButton(e), this.emitTabClick(e, t));
              },
              previousTab: function(t) {
                var e = Math.max(this.currentTab, 0),
                  n = this.tabs
                    .slice(0, e)
                    .reverse()
                    .find(tf);
                this.activateTab(n) && t && (this.focusButton(n), this.emitTabClick(n, t));
              },
              nextTab: function(t) {
                var e = Math.max(this.currentTab, -1),
                  n = this.tabs.slice(e + 1).find(tf);
                this.activateTab(n) && t && (this.focusButton(n), this.emitTabClick(n, t));
              },
              lastTab: function(t) {
                var e = this.tabs
                  .slice()
                  .reverse()
                  .find(tf);
                this.activateTab(e) && t && (this.focusButton(e), this.emitTabClick(e, t));
              },
            },
            render: function(t) {
              var e = this,
                n = this.tabs,
                r = n.find(function(t) {
                  return t.localActive && !t.disabled;
                }),
                i = n.find(function(t) {
                  return !t.disabled;
                }),
                o = n.map(function(o, a) {
                  var s = null;
                  return (
                    e.noKeyNav || ((s = -1), (r === o || (!r && i === o)) && (s = null)),
                    t(ef, {
                      key: o._uid || a,
                      ref: 'buttons',
                      refInFor: !0,
                      props: {
                        tab: o,
                        tabs: n,
                        id: o.controlledBy || (o.safeId ? o.safeId('_BV_tab_button_') : null),
                        controls: o.safeId ? o.safeId() : null,
                        tabIndex: s,
                        setSize: n.length,
                        posInSet: a + 1,
                        noKeyNav: e.noKeyNav,
                      },
                      on: {
                        click: function(t) {
                          e.clickTab(o, t);
                        },
                        first: e.firstTab,
                        prev: e.previousTab,
                        next: e.nextTab,
                        last: e.lastTab,
                      },
                    })
                  );
                }),
                a = t(
                  fl,
                  {
                    ref: 'nav',
                    class: this.localNavClass,
                    attrs: { role: 'tablist', id: this.safeId('_BV_tab_controls_') },
                    props: {
                      fill: this.fill,
                      justified: this.justified,
                      align: this.align,
                      tabs: !this.noNavStyle && !this.pills,
                      pills: !this.noNavStyle && this.pills,
                      vertical: this.vertical,
                      small: this.small,
                      cardHeader: this.card && !this.vertical,
                    },
                  },
                  [this.normalizeSlot('tabs-start') || t(), o, this.normalizeSlot('tabs-end') || t()]
                );
              a = t(
                'div',
                {
                  key: 'bv-tabs-nav',
                  class: [
                    { 'card-header': this.card && !this.vertical && !this.end, 'card-footer': this.card && !this.vertical && this.end, 'col-auto': this.vertical },
                    this.navWrapperClass,
                  ],
                },
                [a]
              );
              var s = t();
              (n && 0 !== n.length) || (s = t('div', { key: 'bv-empty-tab', class: ['tab-pane', 'active', { 'card-body': this.card }] }, this.normalizeSlot('empty')));
              var l = t(
                'div',
                {
                  ref: 'tabsContainer',
                  key: 'bv-tabs-container',
                  staticClass: 'tab-content',
                  class: [{ col: this.vertical }, this.contentClass],
                  attrs: { id: this.safeId('_BV_tab_container_') },
                },
                d(this.normalizeSlot('default'), s)
              );
              return t(this.tag, { staticClass: 'tabs', class: { row: this.vertical, 'no-gutters': this.vertical && this.card }, attrs: { id: this.safeId() } }, [
                this.end ? l : t(),
                [a],
                this.end ? t() : l,
              ]);
            },
          }),
          BTab: r.extend({
            name: 'BTab',
            mixins: [Mr, Te],
            inject: {
              bvTabs: {
                default: function() {
                  return { noKeyNav: !0 };
                },
              },
            },
            props: {
              active: { type: Boolean, default: !1 },
              tag: { type: String, default: 'div' },
              buttonId: { type: String, default: '' },
              title: { type: String, default: '' },
              titleItemClass: { type: [String, Array, Object], default: null },
              titleLinkClass: { type: [String, Array, Object], default: null },
              disabled: { type: Boolean, default: !1 },
              noBody: { type: Boolean, default: !1 },
              lazy: { type: Boolean, default: !1 },
            },
            data: function() {
              return { localActive: this.active && !this.disabled, show: !1 };
            },
            computed: {
              tabClasses: function() {
                return [{ active: this.localActive, disabled: this.disabled, 'card-body': this.bvTabs.card && !this.noBody }, this.localActive ? this.bvTabs.activeTabClass : null];
              },
              controlledBy: function() {
                return this.buttonId || this.safeId('__BV_tab_button__');
              },
              computedNoFade: function() {
                return !this.bvTabs.fade;
              },
              computedLazy: function() {
                return this.bvTabs.lazy || this.lazy;
              },
              _isTab: function() {
                return !0;
              },
            },
            watch: {
              localActive: function(t, e) {
                this.$emit('update:active', t);
              },
              active: function(t, e) {
                t !== e && (t ? this.activate() : this.deactivate() || this.$emit('update:active', this.localActive));
              },
              disabled: function(t, e) {
                t !== e && t && this.localActive && this.bvTabs.firstTab && ((this.localActive = !1), this.bvTabs.firstTab());
              },
            },
            mounted: function() {
              this.registerTab(), (this.show = this.localActive);
            },
            updated: function() {
              this.hasNormalizedSlot('title') && this.bvTabs.updateButton && this.bvTabs.updateButton(this);
            },
            destroyed: function() {
              this.unregisterTab();
            },
            methods: {
              registerTab: function() {
                this.bvTabs.registerTab && this.bvTabs.registerTab(this);
              },
              unregisterTab: function() {
                this.bvTabs.unregisterTab && this.bvTabs.unregisterTab(this);
              },
              activate: function() {
                return !(!this.bvTabs.activateTab || this.disabled) && this.bvTabs.activateTab(this);
              },
              deactivate: function() {
                return !(!this.bvTabs.deactivateTab || !this.localActive) && this.bvTabs.deactivateTab(this);
              },
            },
            render: function(t) {
              var e = t(
                this.tag,
                {
                  ref: 'panel',
                  staticClass: 'tab-pane',
                  class: this.tabClasses,
                  directives: [{ name: 'show', rawName: 'v-show', value: this.localActive, expression: 'localActive' }],
                  attrs: {
                    role: 'tabpanel',
                    id: this.safeId(),
                    tabindex: this.localActive && !this.bvTabs.noKeyNav ? '-1' : null,
                    'aria-hidden': this.localActive ? 'false' : 'true',
                    'aria-labelledby': this.controlledBy || null,
                  },
                },
                [this.localActive || !this.computedLazy ? this.normalizeSlot('default') : t()]
              );
              return t(_e, { props: { mode: 'out-in', noFade: this.computedNoFade } }, [e]);
            },
          }),
        },
      }),
      rf = n(81),
      of = {
        name: { type: String, required: !0 },
        ariaLive: {
          type: String,
          default: function() {
            return Ct('BToaster', 'ariaLive');
          },
        },
        ariaAtomic: {
          type: String,
          default: function() {
            return Ct('BToaster', 'ariaAtomic');
          },
        },
        role: {
          type: String,
          default: function() {
            return Ct('BToaster', 'role');
          },
        },
      },
      af = r.extend({
        data: function() {
          return { name: 'b-toaster' };
        },
        methods: {
          onAfterEnter: function(t) {
            var e = this;
            Lt(function() {
              ee(t, ''.concat(e.name, '-enter-to'));
            });
          },
        },
        render: function(t) {
          return t('transition-group', { props: { tag: 'div', name: this.name }, on: { afterEnter: this.onAfterEnter } }, this.$slots.default);
        },
      }),
      sf = r.extend({
        name: 'BToaster',
        props: of,
        data: function() {
          return { doRender: !1, dead: !1, staticName: this.name };
        },
        beforeMount: function() {
          var t = this;
          (this.staticName = this.name),
            rf.Wormhole.hasTarget(this.staticName)
              ? (l("b-toaster: A <portal-target> with name '".concat(this.name, "' already exists in the document.")), (this.dead = !0))
              : ((this.doRender = !0),
                this.$once('hook:beforeDestroy', function() {
                  t.$root.$emit('bv::toaster::destroyed', t.staticName);
                }));
        },
        destroyed: function() {
          this.$el && this.$el.parentNode && this.$el.parentNode.removeChild(this.$el);
        },
        render: function(t) {
          var e = t('div', { class: ['d-none', { 'b-dead-toaster': this.dead }] });
          if (this.doRender) {
            var n = t(rf.PortalTarget, { staticClass: 'b-toaster-slot', props: { name: this.staticName, multiple: !0, tag: 'div', slim: !1, transition: af } });
            e = t(
              'div',
              {
                staticClass: 'b-toaster',
                class: [this.staticName],
                attrs: { id: this.staticName, role: this.role || null, 'aria-live': this.ariaLive, 'aria-atomic': this.ariaAtomic },
              },
              [n]
            );
          }
          return e;
        },
      });
    function lf(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function uf(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? lf(n, !0).forEach(function(e) {
              cf(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : lf(n).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return t;
    }
    function cf(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var ff = { passive: !0, capture: !1 },
      df = {
        id: { type: String, default: null },
        title: { type: String, default: null },
        toaster: {
          type: String,
          default: function() {
            return Ct('BToast', 'toaster');
          },
        },
        visible: { type: Boolean, default: !1 },
        variant: {
          type: String,
          default: function() {
            return Ct('BToast', 'variant');
          },
        },
        isStatus: { type: Boolean, default: !1 },
        appendToast: { type: Boolean, default: !1 },
        noAutoHide: { type: Boolean, default: !1 },
        autoHideDelay: {
          type: [Number, String],
          default: function() {
            return Ct('BToast', 'autoHideDelay');
          },
        },
        noCloseButton: { type: Boolean, default: !1 },
        noFade: { type: Boolean, default: !1 },
        noHoverPause: { type: Boolean, default: !1 },
        solid: { type: Boolean, default: !1 },
        toastClass: {
          type: [String, Object, Array],
          default: function() {
            return Ct('BToast', 'toastClass');
          },
        },
        headerClass: {
          type: [String, Object, Array],
          default: function() {
            return Ct('BToast', 'headerClass');
          },
        },
        bodyClass: {
          type: [String, Object, Array],
          default: function() {
            return Ct('BToast', 'bodyClass');
          },
        },
        href: { type: String, default: null },
        to: { type: [String, Object], default: null },
        static: { type: Boolean, default: !1 },
      },
      hf = r.extend({
        name: 'BToast',
        mixins: [Mr, Jr, Te, _s],
        inheritAttrs: !1,
        model: { prop: 'visible', event: 'change' },
        props: df,
        data: function() {
          return { isMounted: !1, doRender: !1, localShow: !1, isTransitioning: !1, isHiding: !1, order: 0, timer: null, dismissStarted: 0, resumeDismiss: 0 };
        },
        computed: {
          bToastClasses: function() {
            return cf({ 'b-toast-solid': this.solid, 'b-toast-append': this.appendToast, 'b-toast-prepend': !this.appendToast }, 'b-toast-'.concat(this.variant), this.variant);
          },
          slotScope: function() {
            return { hide: this.hide };
          },
          computedDuration: function() {
            return Math.max(parseInt(this.autoHideDelay, 10) || 0, 1e3);
          },
          computedToaster: function() {
            return String(this.toaster);
          },
          transitionHandlers: function() {
            return { beforeEnter: this.onBeforeEnter, afterEnter: this.onAfterEnter, beforeLeave: this.onBeforeLeave, afterLeave: this.onAfterLeave };
          },
        },
        watch: {
          visible: function(t) {
            t ? this.show() : this.hide();
          },
          localShow: function(t) {
            t !== this.visible && this.$emit('change', t);
          },
          toaster: function(t) {
            var e = this;
            this.$nextTick(function() {
              return e.ensureToaster;
            });
          },
          static: function(t) {
            t && this.localShow && this.ensureToaster();
          },
        },
        mounted: function() {
          var t = this;
          (this.isMounted = !0),
            this.$nextTick(function() {
              t.visible &&
                Lt(function() {
                  t.show();
                });
            }),
            this.listenOnRoot('bv::show::toast', function(e) {
              e === t.safeId() && t.show();
            }),
            this.listenOnRoot('bv::hide::toast', function(e) {
              (e && e !== t.safeId()) || t.hide();
            }),
            this.listenOnRoot('bv::toaster::destroyed', function(e) {
              e === t.computedToaster && t.hide();
            });
        },
        beforeDestroy: function() {
          this.clearDismissTimer();
        },
        methods: {
          show: function() {
            var t = this;
            if (!this.localShow) {
              this.ensureToaster();
              var e = this.buildEvent('show');
              this.emitEvent(e),
                (this.dismissStarted = this.resumeDismiss = 0),
                (this.order = Date.now() * (this.appendToast ? 1 : -1)),
                (this.isHiding = !1),
                (this.doRender = !0),
                this.$nextTick(function() {
                  Lt(function() {
                    t.localShow = !0;
                  });
                });
            }
          },
          hide: function() {
            var t = this;
            if (this.localShow) {
              var e = this.buildEvent('hide');
              this.emitEvent(e),
                this.setHoverHandler(!1),
                (this.dismissStarted = this.resumeDismiss = 0),
                this.clearDismissTimer(),
                (this.isHiding = !0),
                Lt(function() {
                  t.localShow = !1;
                });
            }
          },
          buildEvent: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return new di(t, uf({ cancelable: !1, target: this.$el || null, relatedTarget: null }, e, { vueTarget: this, componentId: this.safeId() }));
          },
          emitEvent: function(t) {
            var e = t.type;
            this.$root.$emit('bv::toast:'.concat(e), t), this.$emit(e, t);
          },
          ensureToaster: function() {
            if (!this.static && !rf.Wormhole.hasTarget(this.computedToaster)) {
              var t = document.createElement('div');
              document.body.appendChild(t), new sf({ parent: this.$root, propsData: { name: this.computedToaster } }).$mount(t);
            }
          },
          startDismissTimer: function() {
            this.clearDismissTimer(),
              this.noAutoHide || ((this.timer = setTimeout(this.hide, this.resumeDismiss || this.computedDuration)), (this.dismissStarted = Date.now()), (this.resumeDismiss = 0));
          },
          clearDismissTimer: function() {
            clearTimeout(this.timer), (this.timer = null);
          },
          setHoverHandler: function(t) {
            var e = t ? Ht : zt,
              n = this.$refs['b-toast'];
            e(n, 'mouseenter', this.onPause, ff), e(n, 'mouseleave', this.onUnPause, ff);
          },
          onPause: function(t) {
            if (!this.noAutoHide && !this.noHoverPause && this.timer && !this.resumeDismiss) {
              var e = Date.now() - this.dismissStarted;
              e > 0 && (this.clearDismissTimer(), (this.resumeDismiss = Math.max(this.computedDuration - e, 1e3)));
            }
          },
          onUnPause: function(t) {
            this.noAutoHide || this.noHoverPause || !this.resumeDismiss ? (this.resumeDismiss = this.dismissStarted = 0) : this.startDismissTimer();
          },
          onLinkClick: function() {
            var t = this;
            this.$nextTick(function() {
              Lt(function() {
                t.hide();
              });
            });
          },
          onBeforeEnter: function() {
            this.isTransitioning = !0;
          },
          onAfterEnter: function() {
            this.isTransitioning = !1;
            var t = this.buildEvent('shown');
            this.emitEvent(t), this.startDismissTimer(), this.setHoverHandler(!0);
          },
          onBeforeLeave: function() {
            this.isTransitioning = !0;
          },
          onAfterLeave: function() {
            (this.isTransitioning = !1), (this.order = 0), (this.resumeDismiss = this.dismissStarted = 0);
            var t = this.buildEvent('hidden');
            this.emitEvent(t), (this.doRender = !1);
          },
          makeToast: function(t) {
            var e = this,
              n = [],
              r = this.normalizeSlot('toast-title', this.slotScope);
            r ? n.push(r) : this.title && n.push(t('strong', { staticClass: 'mr-2' }, this.title)),
              this.noCloseButton ||
                n.push(
                  t(je, {
                    staticClass: 'ml-auto mb-1',
                    on: {
                      click: function(t) {
                        e.hide();
                      },
                    },
                  })
                );
            var i = t();
            n.length > 0 && (i = t('header', { staticClass: 'toast-header', class: this.headerClass }, n));
            var o = this.href || this.to,
              a = t(
                o ? Xe : 'div',
                { staticClass: 'toast-body', class: this.bodyClass, props: o ? { to: this.to, href: this.href } : {}, on: o ? { click: this.onLinkClick } : {} },
                [this.normalizeSlot('default', this.slotScope) || t()]
              );
            return t(
              'div',
              { key: 'toast-'.concat(this._uid), ref: 'toast', staticClass: 'toast', class: this.toastClass, attrs: uf({}, this.$attrs, { tabindex: '0', id: this.safeId() }) },
              [i, a]
            );
          },
        },
        render: function(t) {
          if (!this.doRender || !this.isMounted) return t();
          var e = 'b-toast-'.concat(this._uid),
            n = this.static ? {} : this.scopedStyleAttrs;
          return t(rf.Portal, { props: { name: e, to: this.computedToaster, order: this.order, slim: !0, disabled: this.static } }, [
            t(
              'div',
              {
                key: e,
                ref: 'b-toast',
                staticClass: 'b-toast',
                class: this.bToastClasses,
                attrs: uf({}, n, {
                  id: this.safeId('_toast_outer'),
                  role: this.isHiding ? null : this.isStatus ? 'status' : 'alert',
                  'aria-live': this.isHiding ? null : this.isStatus ? 'polite' : 'assertive',
                  'aria-atomic': this.isHiding ? null : 'true',
                }),
              },
              [t(_e, { props: { noFade: this.noFade }, on: this.transitionHandlers }, [this.localShow ? this.makeToast(t) : t()])]
            ),
          ]);
        },
      });
    function pf(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }
    function mf(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function vf(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? mf(n, !0).forEach(function(e) {
              gf(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : mf(n).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return t;
    }
    function gf(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var bf = ['id'].concat(
        (function(t) {
          return (
            (function(t) {
              if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n;
              }
            })(t) ||
            (function(t) {
              if (Symbol.iterator in Object(t) || '[object Arguments]' === Object.prototype.toString.call(t)) return Array.from(t);
            })(t) ||
            (function() {
              throw new TypeError('Invalid attempt to spread non-iterable instance');
            })()
          );
        })(y(j(df, ['static', 'visible'])))
      ),
      yf = { toastContent: 'default', title: 'toast-title' },
      wf = function(t) {
        return bf.reduce(function(e, n) {
          return Z(t[n]) || (e[n] = t[n]), e;
        }, {});
      },
      Of = wt({
        components: { BToast: hf, BToaster: sf },
        plugins: {
          BVToastPlugin: wt({
            plugins: {
              plugin: function(t) {
                var e = t.extend({
                    name: 'BToastPop',
                    extends: hf,
                    destroyed: function() {
                      this.$el && this.$el.parentNode && this.$el.parentNode.removeChild(this.$el);
                    },
                    mounted: function() {
                      var t = this,
                        e = function() {
                          (t.localShow = !1),
                            (t.doRender = !1),
                            t.$nextTick(function() {
                              t.$nextTick(function() {
                                Lt(function() {
                                  t.$destroy();
                                });
                              });
                            });
                        };
                      this.$parent.$once('hook:destroyed', e),
                        this.$once('hidden', e),
                        this.listenOnRoot('bv::toaster::destroyed', function(n) {
                          n === t.toaster && e();
                        });
                    },
                  }),
                  n = function(t, n) {
                    if (!a('$bvToast')) {
                      var r = new e({ parent: n, propsData: vf({}, wf(Ct('BToast') || {}), {}, j(t, y(yf)), { static: !1, visible: !0 }) });
                      y(yf).forEach(function(e) {
                        var i = t[e];
                        Z(i) || ('title' === e && rt(i) && (i = [n.$createElement('strong', { class: 'mr-2' }, i)]), (r.$slots[yf[e]] = d(i)));
                      });
                      var i = document.createElement('div');
                      document.body.appendChild(i), r.$mount(i);
                    }
                  },
                  r = (function() {
                    function t(e) {
                      !(function(t, e) {
                        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
                      })(this, t),
                        g(this, { _vm: e, _root: e.$root }),
                        w(this, { _vm: C(), _root: C() });
                    }
                    var e, r, i;
                    return (
                      (e = t),
                      (r = [
                        {
                          key: 'toast',
                          value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            t && !a('$bvToast') && n(vf({}, wf(e), { toastContent: t }), this._vm);
                          },
                        },
                        {
                          key: 'show',
                          value: function(t) {
                            t && this._root.$emit('bv::show::toast', t);
                          },
                        },
                        {
                          key: 'hide',
                          value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            this._root.$emit('bv::hide::toast', t);
                          },
                        },
                      ]) && pf(e.prototype, r),
                      i && pf(e, i),
                      t
                    );
                  })();
                t.mixin({
                  beforeCreate: function() {
                    this._bv__toast = new r(this);
                  },
                }),
                  t.prototype.hasOwnProperty('$bvToast') ||
                    O(t.prototype, '$bvToast', {
                      get: function() {
                        return (this && this._bv__toast) || o("'".concat('$bvToast', "' must be accessed from a Vue instance 'this' context")), this._bv__toast;
                      },
                    });
              },
            },
          }),
        },
      });
    function Sf(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function _f(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    var kf = '__BV_Tooltip__',
      xf = { focus: !0, hover: !0, click: !0, blur: !0, manual: !0 },
      Tf = /^html$/i,
      Pf = /^nofade$/i,
      jf = /^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i,
      Cf = /^(window|viewport|scrollParent)$/i,
      Bf = /^d\d+$/i,
      $f = /^ds\d+$/i,
      Af = /^dh\d+$/i,
      Ef = /^o-?\d+$/i,
      If = /^v-.+$/i,
      Df = function(t, e) {
        var n = 'BTooltip',
          r = {
            title: void 0,
            trigger: '',
            placement: 'top',
            fallbackPlacement: 'flip',
            container: !1,
            animation: !0,
            offset: 0,
            id: null,
            html: !1,
            disabled: !1,
            delay: Ct(n, 'delay'),
            boundary: String(Ct(n, 'boundary')),
            boundaryPadding: parseInt(Ct(n, 'boundaryPadding'), 10) || 0,
            variant: Ct(n, 'variant'),
            customClass: Ct(n, 'customClass'),
          };
        if (
          (rt(t.value) || it(t.value)
            ? (r.title = t.value)
            : et(t.value)
            ? (r.title = t.value)
            : T(t.value) &&
              (r = (function(t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = null != arguments[e] ? arguments[e] : {};
                  e % 2
                    ? Sf(n, !0).forEach(function(e) {
                        _f(t, e, n[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : Sf(n).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      });
                }
                return t;
              })({}, r, {}, t.value)),
          Z(r.title))
        ) {
          var i = e.data || {};
          r.title = i.attrs && !tt(i.attrs.title) ? i.attrs.title : void 0;
        }
        T(r.delay) || (r.delay = { show: parseInt(r.delay, 10) || 0, hide: parseInt(r.delay, 10) || 0 }),
          t.arg && (r.container = '#'.concat(t.arg)),
          y(t.modifiers).forEach(function(t) {
            if (Tf.test(t)) r.html = !0;
            else if (Pf.test(t)) r.animation = !1;
            else if (jf.test(t)) r.placement = t;
            else if (Cf.test(t)) (t = 'scrollparent' === t ? 'scrollParent' : t), (r.boundary = t);
            else if (Bf.test(t)) {
              var e = parseInt(t.slice(1), 10) || 0;
              (r.delay.show = e), (r.delay.hide = e);
            } else
              $f.test(t)
                ? (r.delay.show = parseInt(t.slice(2), 10) || 0)
                : Af.test(t)
                ? (r.delay.hide = parseInt(t.slice(2), 10) || 0)
                : Ef.test(t)
                ? (r.offset = parseInt(t.slice(1), 10) || 0)
                : If.test(t) && (r.variant = t.slice(2) || null);
          });
        var o = {};
        return (
          d(r.trigger || '')
            .filter(Boolean)
            .join(' ')
            .trim()
            .toLowerCase()
            .split(/\s+/)
            .forEach(function(t) {
              xf[t] && (o[t] = !0);
            }),
          y(t.modifiers).forEach(function(t) {
            (t = t.toLowerCase()), xf[t] && (o[t] = !0);
          }),
          (r.trigger = y(o).join(' ')),
          'blur' === r.trigger && (r.trigger = 'focus'),
          r.trigger || (r.trigger = 'hover focus'),
          r
        );
      },
      Nf = function(t, e, n) {
        if (i.j) {
          var r = Df(e, n);
          if (!t[kf]) {
            var o = n.context;
            (t[kf] = new au({ parent: o, _scopeId: Ss(o, void 0) })),
              (t[kf].__bv_prev_data__ = {}),
              t[kf].$on('show', function() {
                et(r.title) && t[kf].updateData({ title: r.title(t) });
              });
          }
          var a = {
              title: r.title,
              triggers: r.trigger,
              placement: r.placement,
              fallbackPlacement: r.fallbackPlacement,
              variant: r.variant,
              customClass: r.customClass,
              container: r.container,
              boundary: r.boundary,
              delay: r.delay,
              offset: r.offset,
              noFade: !r.animation,
              id: r.id,
              disabled: r.disabled,
              html: r.html,
            },
            s = t[kf].__bv_prev_data__;
          if (((t[kf].__bv_prev_data__ = a), !vr(a, s))) {
            var l = { target: t };
            y(a).forEach(function(e) {
              a[e] !== s[e] && (l[e] = 'title' === e && et(a[e]) ? a[e](t) : a[e]);
            }),
              t[kf].updateData(l);
          }
        }
      },
      Ff = wt({
        directives: {
          VBTooltip: {
            bind: function(t, e, n) {
              Nf(t, e, n);
            },
            componentUpdated: function(t, e, n) {
              n.context.$nextTick(function() {
                Nf(t, e, n);
              });
            },
            unbind: function(t) {
              !(function(t) {
                t[kf] && (t[kf].$destroy(), (t[kf] = null)), delete t[kf];
              })(t);
            },
          },
        },
      }),
      Rf = wt({
        plugins: {
          AlertPlugin: Ae,
          BadgePlugin: en,
          BreadcrumbPlugin: mn,
          ButtonPlugin: Bn,
          ButtonGroupPlugin: En,
          ButtonToolbarPlugin: Fn,
          CardPlugin: Nr,
          CarouselPlugin: Kr,
          CollapsePlugin: ui,
          DropdownPlugin: co,
          EmbedPlugin: ho,
          FormPlugin: Po,
          FormGroupPlugin: Uo,
          FormCheckboxPlugin: ia,
          FormRadioPlugin: aa,
          FormInputPlugin: ma,
          FormTextareaPlugin: wa,
          FormFilePlugin: Ta,
          FormSelectPlugin: $a,
          ImagePlugin: Aa,
          InputGroupPlugin: Ja,
          JumbotronPlugin: ts,
          LayoutPlugin: is,
          LinkPlugin: os,
          ListGroupPlugin: hs,
          MediaPlugin: ys,
          ModalPlugin: ll,
          NavPlugin: kl,
          NavbarPlugin: Fl,
          PaginationPlugin: Wl,
          PaginationNavPlugin: Kl,
          PopoverPlugin: Pu,
          ProgressPlugin: Cu,
          SpinnerPlugin: $u,
          TablePlugin: Xc,
          TabsPlugin: nf,
          ToastPlugin: Of,
          TooltipPlugin: wt({ components: { BTooltip: su }, plugins: { VBTooltipPlugin: Ff } }),
        },
      }),
      Lf = wt({ directives: { VBModal: Zs } });
    function Vf(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Mf(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    function Hf(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }
    var zf = { element: 'body', offset: 10, method: 'auto', throttle: 75 },
      Gf = { element: '(string|element|component)', offset: 'number', method: 'string', throttle: 'number' },
      Uf = 'dropdown-item',
      Wf = 'active',
      qf = {
        ACTIVE: '.active',
        NAV_LIST_GROUP: '.nav, .list-group',
        NAV_LINKS: '.nav-link',
        NAV_ITEMS: '.nav-item',
        LIST_ITEMS: '.list-group-item',
        DROPDOWN: '.dropdown, .dropup',
        DROPDOWN_ITEMS: '.dropdown-item',
        DROPDOWN_TOGGLE: '.dropdown-toggle',
      },
      Kf = 'offset',
      Jf = 'position',
      Xf = /^.*(#[^#]+)$/,
      Yf = ['webkitTransitionEnd', 'transitionend', 'otransitionend', 'oTransitionEnd'],
      Zf = { passive: !0, capture: !1 },
      Qf = function(t) {
        return (function(t) {
          return Object.prototype.toString.call(t);
        })(t)
          .match(/\s([a-zA-Z]+)/)[1]
          .toLowerCase();
      },
      td = (function() {
        function t(e, n, r) {
          !(function(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this.$el = e),
            (this.$scroller = null),
            (this.$selector = [qf.NAV_LINKS, qf.LIST_ITEMS, qf.DROPDOWN_ITEMS].join(',')),
            (this.$offsets = []),
            (this.$targets = []),
            (this.$activeTarget = null),
            (this.$scrollHeight = 0),
            (this.$resizeTimeout = null),
            (this.$obs_scroller = null),
            (this.$obs_targets = null),
            (this.$root = r || null),
            (this.$config = null),
            this.updateConfig(n);
        }
        var e, n, r;
        return (
          (e = t),
          (r = [
            {
              key: 'Name',
              get: function() {
                return 'v-b-scrollspy';
              },
            },
            {
              key: 'Default',
              get: function() {
                return zf;
              },
            },
            {
              key: 'DefaultType',
              get: function() {
                return Gf;
              },
            },
          ]),
          (n = [
            {
              key: 'updateConfig',
              value: function(t, e) {
                this.$scroller && (this.unlisten(), (this.$scroller = null));
                var n = (function(t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                      ? Vf(n, !0).forEach(function(e) {
                          Mf(t, e, n[e]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                      : Vf(n).forEach(function(e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                        });
                  }
                  return t;
                })({}, this.constructor.Default, {}, t);
                if (
                  (e && (this.$root = e),
                  (function(t, e, n) {
                    for (var r in n)
                      if (Object.prototype.hasOwnProperty.call(n, r)) {
                        var i = n[r],
                          o = e[r],
                          a = o && Gt(o) ? 'element' : Qf(o);
                        (a = o && o._isVue ? 'component' : a),
                          new RegExp(i).test(a) ||
                            l(
                              ''
                                .concat(t, ': Option "')
                                .concat(r, '" provided type "')
                                .concat(a, '" but expected type "')
                                .concat(i, '"')
                            );
                      }
                  })(this.constructor.Name, n, this.constructor.DefaultType),
                  (this.$config = n),
                  this.$root)
                ) {
                  var r = this;
                  this.$root.$nextTick(function() {
                    r.listen();
                  });
                } else this.listen();
              },
            },
            {
              key: 'dispose',
              value: function() {
                this.unlisten(),
                  clearTimeout(this.$resizeTimeout),
                  (this.$resizeTimeout = null),
                  (this.$el = null),
                  (this.$config = null),
                  (this.$scroller = null),
                  (this.$selector = null),
                  (this.$offsets = null),
                  (this.$targets = null),
                  (this.$activeTarget = null),
                  (this.$scrollHeight = null);
              },
            },
            {
              key: 'listen',
              value: function() {
                var t = this,
                  e = this.getScroller();
                e && 'BODY' !== e.tagName && Ht(e, 'scroll', this, Zf),
                  Ht(window, 'scroll', this, Zf),
                  Ht(window, 'resize', this, Zf),
                  Ht(window, 'orientationchange', this, Zf),
                  Yf.forEach(function(e) {
                    Ht(window, e, t, Zf);
                  }),
                  this.setObservers(!0),
                  this.handleEvent('refresh');
              },
            },
            {
              key: 'unlisten',
              value: function() {
                var t = this,
                  e = this.getScroller();
                this.setObservers(!1),
                  e && 'BODY' !== e.tagName && zt(e, 'scroll', this, Zf),
                  zt(window, 'scroll', this, Zf),
                  zt(window, 'resize', this, Zf),
                  zt(window, 'orientationchange', this, Zf),
                  Yf.forEach(function(e) {
                    zt(window, e, t, Zf);
                  });
              },
            },
            {
              key: 'setObservers',
              value: function(t) {
                var e = this;
                this.$obs_scroller && (this.$obs_scroller.disconnect(), (this.$obs_scroller = null)),
                  this.$obs_targets && (this.$obs_targets.disconnect(), (this.$obs_targets = null)),
                  t &&
                    ((this.$obs_targets = Vr(
                      this.$el,
                      function() {
                        e.handleEvent('mutation');
                      },
                      { subtree: !0, childList: !0, attributes: !0, attributeFilter: ['href'] }
                    )),
                    (this.$obs_scroller = Vr(
                      this.getScroller(),
                      function() {
                        e.handleEvent('mutation');
                      },
                      { subtree: !0, childList: !0, characterData: !0, attributes: !0, attributeFilter: ['id', 'style', 'class'] }
                    )));
              },
            },
            {
              key: 'handleEvent',
              value: function(t) {
                var e = rt(t) ? t : t.type,
                  n = this;
                'scroll' === e
                  ? (this.$obs_scroller || this.listen(), this.process())
                  : /(resize|orientationchange|mutation|refresh)/.test(e) &&
                    (n.$resizeTimeout ||
                      (n.$resizeTimeout = setTimeout(function() {
                        n.refresh(), n.process(), (n.$resizeTimeout = null);
                      }, n.$config.throttle)));
              },
            },
            {
              key: 'refresh',
              value: function() {
                var t = this,
                  e = this.getScroller();
                if (e) {
                  var n = e !== e.window ? Jf : Kf,
                    r = 'auto' === this.$config.method ? n : this.$config.method,
                    i = r === Jf ? fe : ce,
                    o = r === Jf ? this.getScrollTop() : 0;
                  return (
                    (this.$offsets = []),
                    (this.$targets = []),
                    (this.$scrollHeight = this.getScrollHeight()),
                    Kt(this.$selector, this.$el)
                      .map(function(t) {
                        return oe(t, 'href');
                      })
                      .filter(function(t) {
                        return t && Xf.test(t || '');
                      })
                      .map(function(t) {
                        var n = t.replace(Xf, '$1').trim();
                        if (!n) return null;
                        var r = Jt(n, e);
                        return r && Ut(r) ? { offset: parseInt(i(r).top, 10) + o, target: n } : null;
                      })
                      .filter(Boolean)
                      .sort(function(t, e) {
                        return t.offset - e.offset;
                      })
                      .reduce(function(e, n) {
                        return e[n.target] || (t.$offsets.push(n.offset), t.$targets.push(n.target), (e[n.target] = !0)), e;
                      }, {}),
                    this
                  );
                }
              },
            },
            {
              key: 'process',
              value: function() {
                var t = this.getScrollTop() + this.$config.offset,
                  e = this.getScrollHeight(),
                  n = this.$config.offset + e - this.getOffsetHeight();
                if ((this.$scrollHeight !== e && this.refresh(), t >= n)) {
                  var r = this.$targets[this.$targets.length - 1];
                  this.$activeTarget !== r && this.activate(r);
                } else {
                  if (this.$activeTarget && t < this.$offsets[0] && this.$offsets[0] > 0) return (this.$activeTarget = null), void this.clear();
                  for (var i = this.$offsets.length; i--; )
                    this.$activeTarget !== this.$targets[i] && t >= this.$offsets[i] && (Z(this.$offsets[i + 1]) || t < this.$offsets[i + 1]) && this.activate(this.$targets[i]);
                }
              },
            },
            {
              key: 'getScroller',
              value: function() {
                if (this.$scroller) return this.$scroller;
                var t = this.$config.element;
                return t ? (Gt(t.$el) ? (t = t.$el) : rt(t) && (t = Jt(t)), t ? ((this.$scroller = 'BODY' === t.tagName ? window : t), this.$scroller) : null) : null;
              },
            },
            {
              key: 'getScrollTop',
              value: function() {
                var t = this.getScroller();
                return t === window ? t.pageYOffset : t.scrollTop;
              },
            },
            {
              key: 'getScrollHeight',
              value: function() {
                return this.getScroller().scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
              },
            },
            {
              key: 'getOffsetHeight',
              value: function() {
                var t = this.getScroller();
                return t === window ? window.innerHeight : se(t).height;
              },
            },
            {
              key: 'activate',
              value: function(t) {
                var e = this;
                (this.$activeTarget = t), this.clear();
                var n = Kt(
                  this.$selector
                    .split(',')
                    .map(function(e) {
                      return ''.concat(e, '[href$="').concat(t, '"]');
                    })
                    .join(','),
                  this.$el
                );
                n.forEach(function(t) {
                  if (ne(t, Uf)) {
                    var n = Yt(qf.DROPDOWN, t);
                    n && e.setActiveState(Jt(qf.DROPDOWN_TOGGLE, n), !0), e.setActiveState(t, !0);
                  } else {
                    e.setActiveState(t, !0), Xt(t.parentElement, qf.NAV_ITEMS) && e.setActiveState(t.parentElement, !0);
                    for (var r = t; r; ) {
                      var i = (r = Yt(qf.NAV_LIST_GROUP, r)) ? r.previousElementSibling : null;
                      i && Xt(i, ''.concat(qf.NAV_LINKS, ', ').concat(qf.LIST_ITEMS)) && e.setActiveState(i, !0),
                        i && Xt(i, qf.NAV_ITEMS) && (e.setActiveState(Jt(qf.NAV_LINKS, i), !0), e.setActiveState(i, !0));
                    }
                  }
                }),
                  n && n.length > 0 && this.$root && this.$root.$emit('bv::scrollspy::activate', t, n);
              },
            },
            {
              key: 'clear',
              value: function() {
                var t = this;
                Kt(''.concat(this.$selector, ', ').concat(qf.NAV_ITEMS), this.$el)
                  .filter(function(t) {
                    return ne(t, Wf);
                  })
                  .forEach(function(e) {
                    return t.setActiveState(e, !1);
                  });
              },
            },
            {
              key: 'setActiveState',
              value: function(t, e) {
                t && (e ? te(t, Wf) : ee(t, Wf));
              },
            },
          ]) && Hf(e.prototype, n),
          r && Hf(e, r),
          t
        );
      })(),
      ed = '__BV_ScrollSpy__',
      nd = function(t, e, n) {
        if (i.j) {
          var r = (function(t) {
            var e = {};
            return (
              t.arg && (e.element = '#'.concat(t.arg)),
              y(t.modifiers).forEach(function(t) {
                /^\d+$/.test(t) ? (e.offset = parseInt(t, 10)) : /^(auto|position|offset)$/.test(t) && (e.method = t);
              }),
              rt(t.value)
                ? (e.element = t.value)
                : it(t.value)
                ? (e.offset = Math.round(t.value))
                : x(t.value) &&
                  y(t.value)
                    .filter(function(t) {
                      return Boolean(td.DefaultType[t]);
                    })
                    .forEach(function(n) {
                      e[n] = t.value[n];
                    }),
              e
            );
          })(e);
          t[ed] ? t[ed].updateConfig(r, n.context.$root) : (t[ed] = new td(t, r, n.context.$root));
        }
      },
      rd = {
        install: yt({
          plugins: {
            componentsPlugin: Rf,
            directivesPlugin: wt({
              plugins: {
                VBModalPlugin: Lf,
                VBPopoverPlugin: Tu,
                VBScrollspyPlugin: wt({
                  directives: {
                    VBScrollspy: {
                      bind: function(t, e, n) {
                        nd(t, e, n);
                      },
                      inserted: function(t, e, n) {
                        nd(t, e, n);
                      },
                      update: function(t, e, n) {
                        e.value !== e.oldValue && nd(t, e, n);
                      },
                      componentUpdated: function(t, e, n) {
                        e.value !== e.oldValue && nd(t, e, n);
                      },
                      unbind: function(t) {
                        !(function(t) {
                          t[ed] && (t[ed].dispose(), (t[ed] = null), delete t[ed]);
                        })(t);
                      },
                    },
                  },
                }),
                VBTogglePlugin: wt({ directives: { VBToggle: li } }),
                VBTooltipPlugin: Ff,
                VBVisiblePlugin: wt({ directives: { VBVisible: Sr } }),
              },
            }),
          },
        }),
        NAME: 'BootstrapVue',
      };
    e.a = rd;
  },
  function(t, e, n) {
    'use strict';
    var r = n(12),
      i = n(78),
      o = { name: 'Account' },
      a = n(29),
      s = Object(a.a)(
        o,
        function() {
          var t = this.$createElement;
          this._self._c;
          return this._m(0);
        },
        [
          function() {
            var t = this.$createElement,
              e = this._self._c || t;
            return e('div', [e('h2', [this._v('Account')])]);
          },
        ],
        !1,
        null,
        null,
        null
      ).exports,
      l = {
        name: 'Home',
        computed: {
          crumbs: function() {
            return [{ text: 'Home', href: '#/' }];
          },
          numProfiles: function() {
            return this.$store.state.profiles.length;
          },
          numProfilesText: function() {
            return this.numProfiles > 0 ? '(' + this.numProfiles + ')' : '';
          },
        },
        methods: {
          resetDB: function() {
            indexedDB.deleteDatabase('saveorskip');
          },
        },
      },
      u = Object(a.a)(
        l,
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            'div',
            [
              n('b-breadcrumb', { attrs: { items: t.crumbs } }),
              t._v(' '),
              n('ol', [
                n('li', [n('router-link', { attrs: { to: { name: 'profiles' } } }, [t._v('Profiles ' + t._s(t.numProfilesText))])], 1),
                t._v(' '),
                n('li', [n('router-link', { attrs: { to: { name: 'account' } } }, [t._v('Account')])], 1),
                t._v(' '),
                n('li', [n('router-link', { attrs: { to: { name: 'scrapers' } } }, [t._v('Scrapers')])], 1),
              ]),
              t._v(' '),
              n('button', { on: { click: t.resetDB } }, [t._v('Reset DB')]),
            ],
            1
          );
        },
        [],
        !1,
        null,
        null,
        null
      ).exports,
      c = (n(63), n(64), n(51), n(45), n(52), n(53), n(37), n(36), n(54), n(8));
    function f(t) {
      return (f =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(t) {
              return typeof t;
            }
          : function(t) {
              return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
            })(t);
    }
    var d = {
        props: ['object', 'ineditableRowNames', 'ineditableColNames', 'store', 'fetchData'],
        data: function() {
          return { sortDesc: !0, filter: null, deleteItemSelect: null, changesPending: !1 };
        },
        methods: {
          changeFieldName: function(t, e) {
            if ((null != e.target && (e = e.target.value), !this.ineditableRowNames.includes(e))) {
              var n = this.object[t];
              delete this.object[t], (this.changesPending = !0), '' !== e && (this.object[e] = n);
            }
          },
          changeFieldValue: function(t, e) {
            null != e.target && (e = e.target.value), this.ineditableColNames.includes(t) || (r.default.set(this.object, t, e), (this.changesPending = !0));
          },
          valueToString: function(t) {
            return null == t ? '' : 'object' == f(t) ? JSON.stringify(t) : t;
          },
          duplicate: function() {},
          deleteObject: function() {},
          saveObject: function() {
            this.$emit('save'), (this.changesPending = !1);
          },
          reset: function() {
            (this.filter = ''), this.fetchData(), (this.changesPending = !1);
          },
          tryToAddItem: function() {
            this.canAddItem && this.addItem();
          },
          addItem: function() {
            Array.isArray(this.object) ? this.createNewItem(this.filter) : r.default.set(this.object, this.filter, ''), (this.changesPending = !0);
          },
          deleteItem: function() {
            null != this.deleteItemSelect && (r.default.delete(this.object, this.deleteItemSelect), (this.changesPending = !0));
          },
          clickItem: function(t, e, n) {
            this.$emit('click', { item: t, index: e, event: n });
          },
          createNewItem: function(t) {
            this.$emit('create', t);
          },
          canEditCell: function(t, e) {
            return !this.isObjArray && ('name' === t ? !!this.editableFieldNames.includes(e.name) : 'value' === t && !!this.editableFieldValues.includes(e.name));
          },
        },
        computed: {
          editableFieldNames: function() {
            var t = [];
            if (Array.isArray(this.object));
            else
              for (var e in this.items) {
                var n = this.items[e].name;
                t.includes(n) || this.ineditableRowNames.includes(n) || t.push(n);
              }
            return t;
          },
          editableFieldValues: function() {
            var t = [];
            if (Array.isArray(this.object));
            else
              for (var e in this.items) {
                var n = this.items[e].name;
                t.includes(n) || this.ineditableColNames.includes(n) || t.push(n);
              }
            return t;
          },
          canAddItem: function() {
            return null != this.filter && this.filter.length > 0 && (null == this.object || null == this.object[this.filter]);
          },
          sortOptions: function() {
            return this.fields
              .filter(function(t) {
                return t.sortable;
              })
              .map(function(t) {
                return { text: t.label, value: t.key };
              });
          },
          fieldNames: function() {
            var t = [];
            if (Array.isArray(this.object))
              for (var e in this.object) {
                var n = this.object[e];
                for (var r in n) t.includes(r) || t.push({ key: r, label: r, class: 'table-cell', sortable: !0 });
              }
            else t.push({ key: 'name', label: 'Name', class: ['table-cell', 'narrow'], sortable: !0 }), t.push({ key: 'value', label: 'Value', class: 'table-cell', sortable: !0 });
            return t;
          },
          items: function() {
            var t = [];
            if (Array.isArray(this.object)) for (var e in this.object) t.push(this.object[e]);
            else for (var n in this.object) t.push({ name: this.valueToString(n), value: this.valueToString(this.object[n]) });
            return t;
          },
          isObjArray: function() {
            return Array.isArray(this.object);
          },
        },
      },
      h =
        (n(135),
        n(136),
        Object(a.a)(
          d,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              'div',
              [
                n(
                  'div',
                  { staticStyle: { display: 'flex' } },
                  [
                    n('b-input', {
                      staticStyle: { 'max-width': '400px' },
                      attrs: { placeholder: 'Add / filter' },
                      on: {
                        keyup: function(e) {
                          return !e.type.indexOf('key') && t._k(e.keyCode, 'enter', 13, e.key, 'Enter') ? null : t.tryToAddItem(e);
                        },
                      },
                      model: {
                        value: t.filter,
                        callback: function(e) {
                          t.filter = e;
                        },
                        expression: 'filter',
                      },
                    }),
                    t._v(' '),
                    n('button', { attrs: { disabled: !t.canAddItem }, on: { click: t.addItem } }, [t._v('Add')]),
                    t._v(' '),
                    n('div', { staticStyle: { flex: '1 1 auto' } }, [t._v(' ')]),
                    t._v(' '),
                    t._t('subpages'),
                    t._v(' '),
                    n('div', { staticStyle: { flex: '1 1 auto' } }, [t._v(' ')]),
                    t._v(' '),
                    t._t('header'),
                    t._v(' '),
                    t.isObjArray ? t._e() : n('button', { on: { click: t.duplicate } }, [t._v('Duplicate')]),
                    t._v(' '),
                    t.isObjArray ? t._e() : n('button', { on: { click: t.deleteObject } }, [t._v('Delete')]),
                    t._v(' '),
                    t.isObjArray
                      ? t._e()
                      : n('button', { class: { 'btn-primary': t.changesPending }, attrs: { disabled: !t.changesPending }, on: { click: t.saveObject } }, [t._v('Save')]),
                    t._v(' '),
                    t.isObjArray ? t._e() : n('button', { attrs: { disabled: !t.changesPending }, on: { click: t.reset } }, [t._v('Reset')]),
                  ],
                  2
                ),
                t._v(' '),
                n('b-table', {
                  staticClass: 'mt-3',
                  attrs: { hover: '', 'show-empty': '', stacked: 'md', items: t.items, fields: t.fieldNames, filter: t.filter },
                  on: { 'row-clicked': t.clickItem },
                  scopedSlots: t._u([
                    {
                      key: 'cell(name)',
                      fn: function(e) {
                        return [
                          t.canEditCell('name', e.item)
                            ? n('b-input', {
                                staticStyle: { width: '100%' },
                                attrs: { type: 'text', value: e.value },
                                on: {
                                  change: function(n) {
                                    return t.changeFieldName(e.item.name, n);
                                  },
                                  keyup: function(n) {
                                    return t.changeFieldName(e.item.name, n);
                                  },
                                },
                              })
                            : n('div', { attrs: { title: e.value } }, [t._v('\n        ' + t._s(e.value) + '\n      ')]),
                        ];
                      },
                    },
                    {
                      key: 'cell(value)',
                      fn: function(e) {
                        return [
                          t.canEditCell('value', e.item)
                            ? 'boolean' == typeof e.item.value
                              ? n(
                                  'b-select',
                                  {
                                    staticStyle: { width: 'unset' },
                                    on: {
                                      change: function(n) {
                                        return t.changeValue(e.item.name, n);
                                      },
                                      keyup: function(n) {
                                        return t.changeValue(e.item.name, n);
                                      },
                                    },
                                    model: {
                                      value: e.item.value,
                                      callback: function(n) {
                                        t.$set(e.item, 'value', n);
                                      },
                                      expression: 'data.item.value',
                                    },
                                  },
                                  [n('option', { attrs: { value: 'true' } }, [t._v('yes')]), t._v(' '), n('option', { attrs: { value: 'false' } }, [t._v('no')])]
                                )
                              : void 0 === e.value.length || e.value.length < 80
                              ? n('b-input', {
                                  staticClass: 'form-control',
                                  staticStyle: { width: 'unset' },
                                  attrs: { type: 'text', value: e.value },
                                  on: {
                                    keyup: function(n) {
                                      return t.changeFieldValue(e.item.name, n);
                                    },
                                    change: function(n) {
                                      return t.changeFieldValue(e.item.name, n);
                                    },
                                  },
                                })
                              : n('textarea', {
                                  staticClass: 'form-control',
                                  staticStyle: { width: '100%' },
                                  domProps: { value: e.value },
                                  on: {
                                    keyup: function(n) {
                                      return t.changeFieldValue(e.item.name, n);
                                    },
                                    change: function(n) {
                                      return t.changeFieldValue(e.item.name, n);
                                    },
                                  },
                                })
                            : n('div', { attrs: { title: e.value } }, [t._v('\n        ' + t._s(e.value) + '\n      ')]),
                        ];
                      },
                    },
                  ]),
                }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          '45b8d9a0',
          null
        ).exports),
      p = n(1);
    function m(t) {
      return (m =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(t) {
              return typeof t;
            }
          : function(t) {
              return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
            })(t);
    }
    var v = {
        name: 'Profile',
        components: { ObjectsTable: h },
        watch: {
          '$route.params.id': function(t) {
            this.fetchData();
          },
        },
        data: function() {
          return {
            fieldDefns: [
              { key: 'name', label: 'Name', sortable: !0, class: 'col-name' },
              { key: 'value', label: 'Value', sortable: !0, class: 'col-value' },
            ],
            filter: null,
            removePropertySelect: null,
          };
        },
        mounted: function() {
          this.fetchData();
        },
        methods: {
          exportProfile: function() {
            var t, e, n, r, i, o, a, s, l, u, f, d, h, p;
            return regeneratorRuntime.async(
              function(m) {
                for (;;)
                  switch ((m.prev = m.next)) {
                    case 0:
                      (t = 'data:text/csv;charset=utf-8,'), (e = 0);
                    case 2:
                      if (!(e < this.fieldNames.length)) {
                        m.next = 10;
                        break;
                      }
                      if ('profileId' !== (n = this.fieldNames[e])) {
                        m.next = 6;
                        break;
                      }
                      return m.abrupt('continue', 7);
                    case 6:
                      t += n + ': ' + this.profile[n] + '\n';
                    case 7:
                      e++, (m.next = 2);
                      break;
                    case 10:
                      return (m.next = 12), regeneratorRuntime.awrap(c.g({ profileId: this.$route.params.id }));
                    case 12:
                      for (r = this.$store.state.links, i = ['profileId', 'saved', 'url'], o = 0; o < r.length; o++) for (a in r[o]) i.includes(a) || i.push(a);
                      for (t += 'LINKS\n', t += i.join(',') + '\n', s = 0; s < r.length; s++) {
                        for (l = r[s], u = '', f = 0; f < i.length; f++) (d = i[f]), void 0 !== l[d] && (u += l[d]), (u += ',');
                        t += u += '\n';
                      }
                      (h = encodeURI(t)), (p = document.createElement('a')).setAttribute('href', h), p.setAttribute('download', this.profileName + '.csv'), p.click();
                    case 23:
                    case 'end':
                      return m.stop();
                  }
              },
              null,
              this
            );
          },
          addProperty: function(t) {
            r.default.set(this.profile, t, ''), (this.$refs.table.changesPending = !0);
          },
          saveObject: function() {
            c.m(p.c, this.profile), this.fetchData();
          },
          deleteObject: function() {
            c.d({ profileId: this.$route.params.id }), this.$router.push({ name: 'profiles' });
          },
          fetchData: function() {
            c.h({ profileId: this.$route.params.id }), (this.$refs.table.changesPending = !1);
          },
        },
        computed: {
          canAddProperty: function() {
            return null != this.filter && this.filter.length > 0 && (null == this.profile || null == this.profile[this.filter]);
          },
          profileId: function() {
            return this.$route.params.id - 0;
          },
          profile: function() {
            return this.$store.state.profile;
          },
          profileName: function() {
            return null == this.profile ? '' : 'object' == m(this.profile.name) ? JSON.stringify(this.profile.name) : this.profile.name;
          },
          profileStats: function() {
            return this.$store.state.profileStats;
          },
          numProps: function() {
            return null == this.profile ? 0 : Object.keys(this.profile).length;
          },
          numLinks: function() {
            return null == this.profileStats ? 0 : this.profileStats.numLinks;
          },
          numSources: function() {
            return null == this.profileStats ? 0 : this.profileStats.numSources;
          },
          fields: function() {
            for (var t = [], e = 0; e < this.fieldNames.length; e++) {
              var n = this.fieldNames[e];
              t.push({ name: n, value: this.profile[n] });
            }
            return t;
          },
          removableFieldNames: function() {
            var t = [];
            for (var e in this.fieldNames) {
              var n = this.fieldNames[e];
              ['id', 'name'].includes(n) || t.push(n);
            }
            return t;
          },
          fieldNames: function() {
            var t = [];
            for (var e in this.profile) t.push(e);
            return t;
          },
          crumbs: function() {
            return [
              { text: 'Home', href: '#/' },
              { text: 'Profiles', href: '#/profiles' },
              { text: this.profileName, href: '#/profile/' + this.profileId },
            ];
          },
        },
      },
      g = Object(a.a)(
        v,
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            'div',
            [
              n('b-breadcrumb', { attrs: { items: t.crumbs } }),
              t._v(' '),
              n('objects-table', {
                ref: 'table',
                attrs: { object: t.profile, 'ineditable-row-names': ['id', 'name'], 'ineditable-col-names': ['id'], fetchData: t.fetchData },
                on: { create: t.addProperty, save: t.saveObject },
                scopedSlots: t._u([
                  {
                    key: 'header',
                    fn: function() {
                      return [n('button', { on: { click: t.exportProfile } }, [t._v('Export')])];
                    },
                    proxy: !0,
                  },
                  {
                    key: 'subpages',
                    fn: function() {
                      return [
                        n('router-link', { staticStyle: { margin: '4px', padding: '1px' }, attrs: { to: { name: 'profileLinks', params: { id: t.profileId } } } }, [
                          t._v('Links (' + t._s(t.numLinks) + ')'),
                        ]),
                        t._v(' '),
                        n('router-link', { staticStyle: { margin: '4px', padding: '1px' }, attrs: { to: { name: 'profileSources', params: { id: t.profileId } } } }, [
                          t._v('Sources (' + t._s(t.numSources) + ')'),
                        ]),
                      ];
                    },
                    proxy: !0,
                  },
                ]),
              }),
            ],
            1
          );
        },
        [],
        !1,
        null,
        null,
        null
      ).exports,
      b = (n(62), n(0)),
      y = {
        name: 'ProfileLink',
        components: { ObjectsTable: h },
        watch: {
          '$route.params.profileId': function(t) {
            this.fetchData();
          },
          '$route.params.linkId': function(t) {
            this.fetchData();
          },
        },
        mounted: function() {
          this.fetchData();
        },
        methods: {
          scrapeLink: function() {
            return regeneratorRuntime.async(
              function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), regeneratorRuntime.awrap(this.$store.commit(b.C, this.link.url));
                    case 2:
                      this.openLink(), chrome.runtime.sendMessage({ action: 'saveSourcesOfUrl', url: this.link.url });
                    case 4:
                    case 'end':
                      return t.stop();
                  }
              },
              null,
              this
            );
          },
          openLink: function() {
            window.open('http://' + this.link.url, '_blank');
          },
          tryToAddProperty: function() {
            this.canAddProperty && this.addProperty();
          },
          addProperty: function() {
            r.default.set(this.link, this.filter, ''), (this.$refs.table.changesPending = !0);
          },
          removeProperty: function() {
            null != this.removePropertySelect && (r.default.delete(this.link, this.removePropertySelect), (this.changesPending = !0));
          },
          saveLink: function() {
            c.c({ profileId: this.$route.params.profileId, linkId: this.$route.params.linkId }),
              c.l(this.link),
              (this.link.profileId == this.profileId && this.link.url == this.linkId) ||
                this.$router.push({ name: 'link', params: { profileId: this.link.profileId, linkId: this.link.url } }),
              this.fetchData();
          },
          deleteLink: function() {
            c.c({ profileId: this.profileId, linkId: this.linkId }), this.$router.push({ name: 'profileLinks', params: { id: this.profileId } });
          },
          fetchData: function() {
            c.f({ profileId: this.profileId, linkId: this.linkId }), c.h({ profileId: this.$route.params.profileId }), (this.changesPending = !1);
          },
          reset: function() {
            (this.filter = ''), this.fetchData();
          },
        },
        computed: {
          canAddProperty: function() {
            return null != this.filter && this.filter.length > 0 && (null == this.link || null == this.link[this.filter]);
          },
          profiles: function() {
            return this.$store.state.profiles;
          },
          fields: function() {
            for (var t = [], e = 0; e < this.fieldNames.length; e++) {
              var n = this.fieldNames[e];
              t.push({ name: n, value: this.link[n] });
            }
            return t;
          },
          removableFieldNames: function() {
            var t = [];
            for (var e in this.fieldNames) {
              var n = this.fieldNames[e];
              ['saved', 'profileId', 'url'].includes(n) || t.push(n);
            }
            return t;
          },
          fieldNames: function() {
            var t = [];
            for (var e in this.link) t.push(e);
            return t;
          },
          linkId: function() {
            return this.$route.params.linkId;
          },
          link: function() {
            return this.$store.state.link;
          },
          profileId: function() {
            return this.$route.params.profileId;
          },
          profile: function() {
            return this.$store.state.profile;
          },
          profileName: function() {
            return null == this.profile ? '' : this.profile.name;
          },
          crumbs: function() {
            return [
              { text: 'Home', href: '#/' },
              { text: 'Profiles', href: '#/profiles' },
              { text: this.profileName, href: '#/profile/' + this.profileId },
              { text: 'Links', href: '#/profile/' + this.profileId + '/links' },
              { text: this.linkId, href: '#/profile/' + this.profileId + '/sources/' + this.linkId },
            ];
          },
        },
      },
      w =
        (n(137),
        n(138),
        Object(a.a)(
          y,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              'div',
              [
                n('b-breadcrumb', { attrs: { items: t.crumbs } }),
                t._v(' '),
                n('objects-table', {
                  ref: 'table',
                  attrs: { object: t.link, 'ineditable-row-names': ['profileId', 'url'], 'ineditable-col-names': ['profileId'], fetchData: t.fetchData },
                  on: { create: t.addProperty, save: t.saveLink },
                  scopedSlots: t._u([
                    {
                      key: 'header',
                      fn: function() {
                        return [n('button', { on: { click: t.openLink } }, [t._v('Open')]), t._v(' '), n('button', { on: { click: t.scrapeLink } }, [t._v('Scrape')])];
                      },
                      proxy: !0,
                    },
                  ]),
                }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          '3ae87dc8',
          null
        ).exports),
      O = {
        name: 'ProfileLinks',
        components: { ObjectsTable: h },
        watch: {
          '$route.params.id': function() {
            this.fetchData();
          },
        },
        mounted: function() {
          this.fetchData();
        },
        methods: {
          fetchData: function() {
            c.g({ profileId: this.$route.params.id }), c.h({ profileId: this.$route.params.id });
          },
          addLink: function(t) {
            var e;
            return regeneratorRuntime.async(
              function(n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (e = { targetId: this.$route.params.id, action: 'save', link: { url: t } }), (n.next = 3), regeneratorRuntime.awrap(c.n(e));
                    case 3:
                      this.fetchData();
                    case 4:
                    case 'end':
                      return n.stop();
                  }
              },
              null,
              this
            );
          },
          openLink: function(t) {
            var e = t.item;
            t.index, t.event;
            this.$router.push({ name: 'profileLink', params: { profileId: this.profileId, linkId: e.url } });
          },
        },
        computed: {
          links: function() {
            return this.$store.state.links;
          },
          numLinks: function() {
            return Object.keys(this.links).length;
          },
          profileId: function() {
            return this.$route.params.id;
          },
          profile: function() {
            return this.$store.state.profile;
          },
          profileName: function() {
            return null == this.profile ? '' : this.profile.name;
          },
          crumbs: function() {
            return [
              { text: 'Home', href: '#/' },
              { text: 'Profiles', href: '#/profiles' },
              { text: this.profileName, href: '#/profile/' + this.profileId },
              { text: 'Links', to: '{ name: "profileLinks", params: { id: this.$route.params.id }}' },
            ];
          },
        },
      },
      S = Object(a.a)(
        O,
        function() {
          var t = this.$createElement,
            e = this._self._c || t;
          return e(
            'div',
            [
              e('b-breadcrumb', { attrs: { items: this.crumbs } }),
              this._v(' '),
              e('objects-table', { ref: 'table', attrs: { object: this.links, 'show-del': !1, 'ineditable-row-names': [] }, on: { create: this.addLink, click: this.openLink } }),
            ],
            1
          );
        },
        [],
        !1,
        null,
        null,
        null
      ).exports;
    function _(t) {
      return (_ =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(t) {
              return typeof t;
            }
          : function(t) {
              return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
            })(t);
    }
    var k = {
        name: 'Profile',
        components: { ObjectsTable: h },
        watch: {
          '$route.params.id': function(t) {
            this.fetchData();
          },
        },
        mounted: function() {
          this.fetchData();
        },
        methods: {
          scrape: function() {},
          addProperty: function(t) {
            r.default.set(this.source, t, ''), (this.$refs.table.changesPending = !0);
          },
          saveObject: function() {
            c.m(STORE_SOURCES, this.source), this.fetchData();
          },
          deleteObject: function() {
            c.d({ profileId: this.$route.params.profileId }), this.$router.push({ name: 'profiles' });
          },
          fetchData: function() {
            var t = this.$route.params.profileId - 0,
              e = this.$route.params.sourceId;
            c.i([t, e]), c.h({ profileId: t }), (this.$refs.table.changesPending = !1);
          },
        },
        computed: {
          profileId: function() {
            return this.$route.params.profileId - 0;
          },
          profile: function() {
            return this.$store.state.profile;
          },
          profileName: function() {
            return null == this.profile ? '' : 'object' == _(this.profile.name) ? JSON.stringify(this.profile.name) : this.profile.name;
          },
          sourceId: function() {
            return this.$route.params.sourceId;
          },
          source: function() {
            return this.$store.state.source;
          },
          profileStats: function() {
            return this.$store.state.profileStats;
          },
          fields: function() {
            for (var t = [], e = 0; e < this.fieldNames.length; e++) {
              var n = this.fieldNames[e];
              t.push({ name: n, value: this.profile[n] });
            }
            return t;
          },
          removableFieldNames: function() {
            var t = [];
            for (var e in this.fieldNames) {
              var n = this.fieldNames[e];
              ['id', 'name'].includes(n) || t.push(n);
            }
            return t;
          },
          fieldNames: function() {
            var t = [];
            for (var e in this.profile) t.push(e);
            return t;
          },
          crumbs: function() {
            return [
              { text: 'Home', href: '#/' },
              { text: 'Profiles', href: '#/profiles' },
              { text: this.profileName, href: '#/profile/' + this.profileId },
              { text: 'Sources', href: '#/profile/' + this.profileId + '/sources' },
              { text: this.sourceId, href: '#/profile/' + this.profileId + '/sources/' + this.sourceId },
            ];
          },
        },
      },
      x = Object(a.a)(
        k,
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            'div',
            [
              n('b-breadcrumb', { attrs: { items: t.crumbs } }),
              t._v(' '),
              n('objects-table', {
                ref: 'table',
                attrs: {
                  object: t.source,
                  fetchData: t.fetchData,
                  'ineditable-row-names': ['saved', 'skipped', 'profileId', 'url', 'points', 'lastScraped', 'nextScrape'],
                  'ineditable-col-names': ['profileId'],
                },
                on: { create: t.addProperty, save: t.saveObject },
                scopedSlots: t._u([
                  {
                    key: 'header',
                    fn: function() {
                      return [n('button', { on: { click: t.scrape } }, [t._v('Scrape')])];
                    },
                    proxy: !0,
                  },
                  {
                    key: 'subpages',
                    fn: function() {
                      return [
                        n('router-link', { attrs: { to: { name: 'profileSourceLinks', params: { profileId: t.profileId, sourceId: t.sourceId } } } }, [t._v('Scraped links ()')]),
                      ];
                    },
                    proxy: !0,
                  },
                ]),
              }),
            ],
            1
          );
        },
        [],
        !1,
        null,
        null,
        null
      ).exports,
      T = {
        name: 'ProfileLink',
        watch: {
          '$route.params.profileId': function(t) {
            this.fetchData();
          },
          '$route.params.linkId': function(t) {
            this.fetchData();
          },
        },
        data: function() {
          return {
            fieldDefns: [
              { key: 'name', label: 'Name', sortable: !0, class: 'col-name' },
              { key: 'value', label: 'Value', sortable: !0, class: 'col-value' },
            ],
            filter: null,
            removePropertySelect: null,
            changesPending: !1,
          };
        },
        created: function() {
          this.fetchData();
        },
        methods: {
          changeName: function(t, e) {
            var n = this.link[t];
            delete this.link[t], (this.link[e.target.value] = n), (this.changesPending = !0);
          },
          changeValue: function(t, e) {
            (this.link[t] = e.target.value), (this.changesPending = !0);
          },
          tryToAddProperty: function() {
            this.canAddProperty && this.addProperty();
          },
          addProperty: function() {
            r.default.set(this.link, this.filter, ''), (this.changesPending = !0);
          },
          removeProperty: function() {
            null != this.removePropertySelect && (r.default.delete(this.link, this.removePropertySelect), (this.changesPending = !0));
          },
          saveLink: function() {
            c.c({ profileId: this.$route.params.profileId, linkId: this.$route.params.linkId }),
              c.l(this.link),
              (this.link.profileId == this.profileId && this.link.url == this.linkId) ||
                this.$router.push({ name: 'link', params: { profileId: this.link.profileId, linkId: this.link.url } }),
              this.fetchData();
          },
          deleteLink: function() {
            c.c({ profileId: this.profileId, linkId: this.linkId }), this.$router.push({ name: 'profileLinks', params: { id: this.profileId } });
          },
          fetchData: function() {
            c.f({ profileId: this.profileId, linkId: this.linkId }), c.h({ profileId: this.$route.params.profileId }), (this.changesPending = !1);
          },
          reset: function() {
            (this.filter = ''), this.fetchData();
          },
        },
        computed: {
          canAddProperty: function() {
            return null != this.filter && this.filter.length > 0 && (null == this.link || null == this.link[this.filter]);
          },
          profiles: function() {
            return this.$store.state.profiles;
          },
          fields: function() {
            for (var t = [], e = 0; e < this.fieldNames.length; e++) {
              var n = this.fieldNames[e];
              t.push({ name: n, value: this.link[n] });
            }
            return t;
          },
          removableFieldNames: function() {
            var t = [];
            for (var e in this.fieldNames) {
              var n = this.fieldNames[e];
              ['saved', 'profileId', 'url'].includes(n) || t.push(n);
            }
            return t;
          },
          fieldNames: function() {
            var t = [];
            for (var e in this.link) t.push(e);
            return t;
          },
          linkId: function() {
            return this.$route.params.linkId;
          },
          link: function() {
            return this.$store.state.link;
          },
          profileId: function() {
            return this.$route.params.profileId;
          },
          profile: function() {
            return this.$store.state.profile;
          },
          profileName: function() {
            return null == this.profile ? '' : this.profile.name;
          },
          crumbs: function() {
            return [
              { text: 'Home', href: '#/' },
              { text: 'Profiles', href: '#/profiles' },
              { text: this.profileName + ' (' + this.profileId + ')', href: '#/profile/' + this.profileId },
              { text: 'Links', href: '#/profile/' + this.profileId + '/links' },
              { text: this.linkId, href: '#/profile/' + this.profileId + '/sources/' + this.linkId },
            ];
          },
        },
      },
      P =
        (n(139),
        Object(a.a)(
          T,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              'div',
              [
                n('b-breadcrumb', { attrs: { items: t.crumbs } }),
                t._v(' '),
                n('div', [
                  n('button', [t._v('scrape')]),
                  t._v(' '),
                  n('button', { on: { click: t.deleteLink } }, [t._v('delete...')]),
                  t._v(' '),
                  n('button', { class: { 'btn-primary': t.changesPending }, on: { click: t.saveLink } }, [t._v('save')]),
                  t._v(' '),
                  n('button', { class: { 'btn-primary': t.changesPending }, on: { click: t.reset } }, [t._v('reset')]),
                  t._v(' '),
                  n('button', { attrs: { disabled: null == t.removePropertySelect }, on: { click: t.removeProperty } }, [t._v('remove property')]),
                  t._v(' '),
                  n(
                    'select',
                    {
                      directives: [{ name: 'model', rawName: 'v-model', value: t.removePropertySelect, expression: 'removePropertySelect' }],
                      on: {
                        change: function(e) {
                          var n = Array.prototype.filter
                            .call(e.target.options, function(t) {
                              return t.selected;
                            })
                            .map(function(t) {
                              return '_value' in t ? t._value : t.value;
                            });
                          t.removePropertySelect = e.target.multiple ? n : n[0];
                        },
                      },
                    },
                    t._l(t.removableFieldNames, function(e) {
                      return n('option', { key: e, domProps: { value: e } }, [t._v('\n        ' + t._s(e) + '\n      ')]);
                    }),
                    0
                  ),
                ]),
                t._v(' '),
                n(
                  'div',
                  [
                    n(
                      'b-input-group',
                      { staticStyle: { 'align-items': 'center' } },
                      [
                        n('b-form-input', {
                          attrs: { placeholder: 'Add / filter' },
                          on: {
                            keyup: function(e) {
                              return !e.type.indexOf('key') && t._k(e.keyCode, 'enter', 13, e.key, 'Enter') ? null : t.tryToAddProperty(e);
                            },
                          },
                          model: {
                            value: t.filter,
                            callback: function(e) {
                              t.filter = e;
                            },
                            expression: 'filter',
                          },
                        }),
                        t._v(' '),
                        n('b-input-group-append', [n('b-btn', { attrs: { variant: 'primary', disabled: !t.canAddProperty }, on: { click: t.addProperty } }, [t._v('Add')])], 1),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                t._v(' '),
                n('b-table', {
                  attrs: { 'show-empty': '', hover: '', stacked: 'md', items: t.fields, fields: t.fieldDefns, filter: t.filter },
                  scopedSlots: t._u([
                    {
                      key: 'cell(name)',
                      fn: function(e) {
                        return [
                          'profileId' === e.item.name
                            ? n('div', [t._v('profile')])
                            : 'url' === e.item.name
                            ? n('div', [t._v(t._s(e.item.name))])
                            : 'saved' === e.item.name
                            ? n('div', [t._v(t._s(e.item.name))])
                            : n('input', {
                                staticStyle: { width: '100%' },
                                attrs: { type: 'text' },
                                domProps: { value: e.item.name },
                                on: {
                                  change: function(n) {
                                    return t.changeName(e.item.name, n);
                                  },
                                },
                              }),
                        ];
                      },
                    },
                    {
                      key: 'cell(value)',
                      fn: function(e) {
                        return [
                          'profileId' === e.item.name
                            ? n(
                                'select',
                                {
                                  on: {
                                    change: function(n) {
                                      return t.changeValue(e.item.name, n);
                                    },
                                  },
                                },
                                t._l(t.profiles, function(r) {
                                  return n('option', { key: r.id, attrs: { value: 'profile.id' }, domProps: { selected: r.id == e.item.value } }, [
                                    t._v('\n          ' + t._s(r.name) + '\n        '),
                                  ]);
                                }),
                                0
                              )
                            : 'saved' === e.item.name
                            ? n(
                                'select',
                                {
                                  on: {
                                    change: function(n) {
                                      return t.changeValue(e.item.name, n);
                                    },
                                  },
                                },
                                [
                                  n('option', { attrs: { value: 'true' }, domProps: { selected: 'true' == e.item.value } }, [t._v('yes')]),
                                  t._v(' '),
                                  n('option', { attrs: { value: 'false' }, domProps: { selected: 'false' == e.item.value } }, [t._v('no')]),
                                ]
                              )
                            : n('input', {
                                staticStyle: { width: '100%' },
                                attrs: { type: 'text' },
                                domProps: { value: e.item.value },
                                on: {
                                  change: function(n) {
                                    return t.changeValue(e.item.name, n);
                                  },
                                },
                              }),
                        ];
                      },
                    },
                  ]),
                }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        {
          name: 'ProfileSourceLinks',
          components: { ObjectsTable: h },
          watch: {
            '$route.params.id': function() {
              this.fetchData();
            },
          },
          created: function() {
            this.fetchData();
          },
          methods: {
            fetchData: function() {
              c.g({ profileId: this.$route.params.id }), c.h({ profileId: this.$route.params.id });
            },
            addLink: function() {},
            openLink: function() {},
          },
          computed: {
            links: function() {
              return this.$store.state.links;
            },
            numLinks: function() {
              return Object.keys(this.links).length;
            },
            profileId: function() {
              return this.$route.params.id;
            },
            profile: function() {
              return this.$store.state.profile;
            },
            profileName: function() {
              return null == this.profile ? '' : this.profile.name;
            },
            crumbs: function() {
              return [
                { text: 'Home', href: '#/' },
                { text: 'Profiles', href: '#/profiles' },
                { text: this.profileName, href: '#/profile/' + this.profileId },
                { text: 'Links', to: '{ name: "profileLinks", params: { id: this.$route.params.id }}' },
              ];
            },
          },
        }),
      j = Object(a.a)(
        P,
        function() {
          var t = this.$createElement,
            e = this._self._c || t;
          return e(
            'div',
            [
              e('b-breadcrumb', { attrs: { items: this.crumbs } }),
              this._v(' '),
              e('objects-table', { ref: 'table', attrs: { object: this.links, 'ineditable-row-names': [] }, on: { create: this.addLink, click: this.openLink } }),
            ],
            1
          );
        },
        [],
        !1,
        null,
        null,
        null
      ).exports,
      C = n(55),
      B = {
        name: 'ProfilePage',
        components: { ObjectsTable: h },
        watch: {
          '$route.params.id': function() {
            this.fetchData();
          },
        },
        mounted: function() {
          this.fetchData();
        },
        methods: {
          fetchData: function() {
            c.j({ profileId: this.$route.params.id }), c.h({ profileId: this.$route.params.id });
          },
          addSource: function(t) {
            var e;
            return regeneratorRuntime.async(
              function(n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (e = Object(C.a)(t, this.profileId)), (n.next = 3), regeneratorRuntime.awrap(c.b({ sources: [e] }));
                    case 3:
                      this.fetchData();
                    case 4:
                    case 'end':
                      return n.stop();
                  }
              },
              null,
              this
            );
          },
          openSource: function(t) {
            var e = t.item;
            t.index, t.event;
            this.$router.push({ name: 'profileSource', params: { profileId: this.profileId, sourceId: e.url } });
          },
        },
        computed: {
          sources: function() {
            return this.$store.state.sources;
          },
          numSources: function() {
            return Object.keys(this.sources).length;
          },
          profileId: function() {
            return this.$route.params.id;
          },
          profile: function() {
            return this.$store.state.profile;
          },
          profileName: function() {
            return null == this.profile ? '' : this.profile.name;
          },
          crumbs: function() {
            return [
              { text: 'Home', href: '#/' },
              { text: 'Profiles', href: '#/profiles' },
              { text: this.profileName, href: '#/profile/' + this.profileId },
              { text: 'Sources', to: '{ name: "profileSources", params: { id: this.profileId }}' },
            ];
          },
        },
      },
      $ = Object(a.a)(
        B,
        function() {
          var t = this.$createElement,
            e = this._self._c || t;
          return e(
            'div',
            [
              e('b-breadcrumb', { attrs: { items: this.crumbs } }),
              this._v(' '),
              e('objects-table', { ref: 'table', attrs: { object: this.sources }, on: { create: this.addSource, click: this.openSource } }),
            ],
            1
          );
        },
        [],
        !1,
        null,
        null,
        null
      ).exports,
      A = {
        name: 'Profiles',
        components: { ObjectsTable: h },
        computed: {
          profiles: function() {
            return this.$store.state.profiles;
          },
          crumbs: function() {
            return [
              { text: 'Home', href: '#/' },
              { text: 'Profiles', href: '#/profiles' },
            ];
          },
        },
        methods: {
          addProfile: function(t) {
            c.a(t);
          },
          openProfile: function(t) {
            var e = t.item;
            t.index, t.event;
            this.$router.push({ name: 'profile', params: { id: e.id } });
          },
        },
      },
      E = Object(a.a)(
        A,
        function() {
          var t = this.$createElement,
            e = this._self._c || t;
          return e(
            'div',
            [
              e('b-breadcrumb', { attrs: { items: this.crumbs } }),
              this._v(' '),
              e('objects-table', {
                ref: 'table',
                attrs: { object: this.profiles, 'show-del': !1, 'ineditable-row-names': [] },
                on: { create: this.addProfile, click: this.openProfile },
              }),
            ],
            1
          );
        },
        [],
        !1,
        null,
        null,
        null
      ).exports,
      I = {
        name: 'ScrapersPage',
        data: function() {
          return { scrapers: ['reddit', 'hacker news'] };
        },
      },
      D =
        (n(140),
        [
          { path: '/account', component: s, name: 'account' },
          { name: 'home', path: '/', component: u },
          { path: '/profile/:id', component: g, name: 'profile' },
          { path: '/profile/:profileId/link/:linkId', component: w, name: 'profileLink' },
          { path: '/profile/:id/links', component: S, name: 'profileLinks' },
          { path: '/profiles', component: E, name: 'profiles' },
          { path: '/profile/:profileId/sources/:sourceId', component: x, name: 'profileSource' },
          { path: '/profile/:id/sources', component: $, name: 'profileSources' },
          { path: '/profile/:profileId/sources/:sourceId/links', component: j, name: 'profileSourceLinks' },
          {
            path: '/scrapers',
            component: Object(a.a)(
              I,
              function() {
                var t = this,
                  e = t.$createElement,
                  n = t._self._c || e;
                return n(
                  'div',
                  t._l(t.scrapers, function(e) {
                    return n('div', { key: e }, [t._v(t._s(e))]);
                  }),
                  0
                );
              },
              [],
              !1,
              null,
              '427473f8',
              null
            ).exports,
            name: 'scrapers',
          },
        ]);
    r.default.use(i.a);
    e.a = new i.a({ routes: D });
  },
  ,
  ,
  function(t, e, n) {
    'use strict';
    var r = n(2),
      i = {
        name: 'App',
        mounted: function() {
          chrome.tabs.query({ active: !0 }, function(t) {
            r.a.dispatch('setCurUrl', { url: t[0].url });
          });
        },
      },
      o = (n(134), n(29)),
      a = Object(o.a)(
        i,
        function() {
          var t = this.$createElement,
            e = this._self._c || t;
          return e('div', [e('router-view')], 1);
        },
        [],
        !1,
        null,
        null,
        null
      );
    e.a = a.exports;
  },
  ,
  ,
  ,
  function(t, e, n) {
    'use strict';
    n.r(e),
      function(t) {
        var e = n(12),
          r = n(129),
          i = n(8),
          o = n(2),
          a = n(126),
          s = (n(141), n(142), n(125));
        e.default.use(s.a),
          (t.browser = n(113)),
          (window.vue = new e.default({
            el: '#app',
            store: o.a,
            router: a.a,
            render: function(t) {
              return t(r.a);
            },
            mounted: function() {
              i.e();
            },
          }));
      }.call(this, n(41));
  },
  function(t, e, n) {
    'use strict';
    var r = n(116);
    n.n(r).a;
  },
  function(t, e, n) {
    'use strict';
    var r = n(117);
    n.n(r).a;
  },
  function(t, e, n) {
    'use strict';
    var r = n(118);
    n.n(r).a;
  },
  function(t, e, n) {
    'use strict';
    var r = n(119);
    n.n(r).a;
  },
  function(t, e, n) {
    'use strict';
    var r = n(120);
    n.n(r).a;
  },
  function(t, e, n) {
    'use strict';
    var r = n(121);
    n.n(r).a;
  },
  function(t, e, n) {
    'use strict';
    var r = n(122);
    n.n(r).a;
  },
  function(t, e, n) {},
  function(t, e, n) {},
]);
//# sourceMappingURL=options.js.map
