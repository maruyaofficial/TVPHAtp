const CONVRG_MANIFEST_SUFFIX = '/api/*.mpd?virtualDomain=001.live_hls.zte.com&IASHttpSessionId=OTT';
const CONVRG_LICENSE_URI = 'https://api.tambayan-chat.site/api/?*';

// Generate safe channel IDs
function generateChannelId(name) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '').substring(0, 20) || `ch${Date.now().toString(36)}`;
}

// Default channel list
const defaultChannelList = [
  {
    name: "Cartoon Network HD",
    manifest: "https://api.tambayan-chat.site/api/cg_cartoonnetworkhd.mpd",
    image: "https://static.wikia.nocookie.net/logopedia/images/d/d9/Cartoon_Network_2010.svg/revision/latest?cb=20200617213702",
    drm: {
      type: "clearkey",
      keyId: "a2d1f552ff9541558b3296b5a932136b",
      key: "cdd48fa884dc0c3a3f85aeebca13d444"
    }
  },
  {
    name: "Cinemo",
    manifest: "https://api.tambayan-chat.site/api/cg_cinemo.mpd",
    image: null,
    drm: {
      type: "clearkey",
      keyId: "aa8aebe35ccc4541b7ce6292efcb1bfb",
      key: "aab1df109d22fc5d7e3ec121ddf24e5f"
    }
  },
  // Add more channels as needed...
];
