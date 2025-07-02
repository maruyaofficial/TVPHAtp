// Constants used within the channel list
const CONVRG_MANIFEST_BASE = 'https://tvph-atp.vercel.app/api/*/';
//const CONVRG_MANIFEST_SUFFIX = '/api/*.mpd?virtualDomain=001.live_hls.zte.com&IASHttpSessionId=OTT';
const CONVRG_LICENSE_URI = 'https://tvph-atp.vercel.app/api/?*';

// Helper to generate IDs (can be used here or imported if needed elsewhere)
function generateChannelId(name) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '').substring(0, 20) || `ch${Date.now().toString(36)}`;
}
tvph-atp.vercel.app/
// The default list of channels
const defaultChannelList = [// --- Existing Channels ---
{
    name: "Cartoon Network HD",
    manifest: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cartoonnetworkhd.mpd',
    image: 'https://static.wikia.nocookie.net/logopedia/images/d/d9/Cartoon_Network_2010.svg/revision/latest?cb=20200617213702',
    drm: {
        type: 'clearkey',
        keyId: 'a2d1f552ff9541558b3296b5a932136b',
        key: 'cdd48fa884dc0c3a3f85aeebca13d444'
    }
}, // Example Image URL
{
    name: "Cinemo",
    manifest: 'https://qp-pldt-live-grp/api/amagi/linear/amg01006-abs-cbn-cinemo-dash-abscbnono/f1da36ea-047e-4262-9e45-9326d0e2930b/index.mpd',
    drm: {
        type: 'clearkey',
        keyId: 'aa8aebe35ccc4541b7ce6292efcb1bfb',
        key: 'aab1df109d22fc5d7e3ec121ddf24e5f'
    }
}, {
    name: "Cinema One",
    manifest: 'https://qp-pldt-live-grp/api/amagi/linear/amg01006-abs-cbn-cinemaone-dash-abscbnono/index.mpd',
    drm: {
        type: 'clearkey',
        keyId: '58d0e56991194043b8fb82feb4db7276',
        key: 'd68f41b59649676788889e19fb10d22c'
    }
}, {
    name: "GMA 7",
    manifest: 'https://qp-pldt-live-grp/api/manifest/1093.mpd',
    drm: {
        type: 'widevine',
        licenseUri: CONVRG_LICENSE_URI
    },
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/GMA_Network_logo.svg/1200px-GMA_Network_logo.svg.png'
}, // Example Image URL
{
    name: "GTV (CON)",
    manifest: 'https://qp-pldt-live-grp/api/manifest/1164.mpd',
    drm: {
        type: 'widevine',
        licenseUri: CONVRG_LICENSE_URI
    }
}, {
    name: "Jeepney TV (CON)",
    manifest: 'https://qp-pldt-live-grp/api/manifest/1250.mpd',
    drm: {
        type: 'widevine',
        licenseUri: CONVRG_LICENSE_URI
    }
}, {
    name: "Kapamilya HD",
    manifest: `https://qp-pldt-live-grp/api/amagi/linear/amg01006-abs-cbn-kapcha-dash-abscbnono/index.mpd`,
    drm: {
        type: 'clearkey',
        keyId: 'bd17afb5dc9648a39be79ee3634dd4b8',
        key: '3ecf305d54a7729299b93a3d69c02ea5'
    }
}, {
    name: "PBO",
    manifest: 'https://qp-pldt-live-grp/api/manifest/1078.mpd',
    drm: {
        type: 'widevine',
        licenseUri: CONVRG_LICENSE_URI
    }
}, {
    name: "SOLAR SPORTS",
    manifest: 'https://qp-pldt-live-grp/api/manifest/1081.mpd',
    drm: {
        type: 'widevine',
        licenseUri: CONVRG_LICENSE_URI
    }
}, {
    name: "PREMIER FOOTBALL",
    manifest: 'https://qp-pldt-live-grp/api/manifest/1127.mpd',
    drm: {
        type: 'widevine',
        licenseUri: CONVRG_LICENSE_URI
    }
}, {
    name: "USA TODAY",
    manifest: 'https://qp-pldt-live-grp/api/manifest/1199.mpd',
    drm: {
        type: 'widevine',
        licenseUri: CONVRG_LICENSE_URI
    }
}, {
    name: "EUROSPORT (CON)",
    manifest: 'https://qp-pldt-live-grp/api/manifest/1325.mpd',
    drm: {
        type: 'widevine',
        licenseUri: CONVRG_LICENSE_URI
    }
}, {
    name: "Music Asia",
    manifest: 'https://qp-pldt-live-grp/api/manifest/1195.mpd',
    drm: {
        type: 'widevine',
        licenseUri: CONVRG_LICENSE_URI
    }
}, {
    name: "Rock of Manila TV",
    manifest: 'https://qp-pldt-live-grp/api/manifest/1177.mpd',
    drm: {
        type: 'widevine',
        licenseUri: CONVRG_LICENSE_URI
    }

}, {
    name: "KBS2",
    manifest: 'https://qp-pldt-live-grp/api/manifest/1344.mpd',
    drm: {
        type: 'widevine',
        licenseUri: CONVRG_LICENSE_URI
    }

}, {
    name: "HISTORY CHANNEL (CON)",
    manifest: 'https://qp-pldt-live-grp/api/manifest/1074.mpd',
    drm: {
        type: 'widevine',
        licenseUri: CONVRG_LICENSE_URI
    }
}, {
    name: "RPTV (CON)",
    manifest: 'https://qp-pldt-live-grp/api/manifest/1094.mpd',
    drm: {
        type: 'widevine',
        licenseUri: CONVRG_LICENSE_URI
    }
}, {
    name: "TV5 HD",
    manifest: 'https://tvph-atp.vercel.app/api/TV5.mpd',
    drm: {

        type: 'clearkey',
        keyId: '2615129ef2c846a9bbd43a641c7303ef',
        key: '07c7f996b1734ea288641a68e1cfdc4d'
    }
}, {
    name: "RPTV HD",
    manifest: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cnn_rptv_prod_hd.mpd',
    drm: {
        type: 'clearkey',
        keyId: '1917f4caf2364e6d9b1507326a85ead6',
        key: 'a1340a251a5aa63a9b0ea5d9d7f67595'
    }
}, {
    name: "True FM TV",
    manifest: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/truefm_tv.mpd',
    drm: {
        type: 'clearkey',
        keyId: '0559c95496d44fadb94105b9176c3579',
        key: '40d8bb2a46ffd03540e0c6210ece57ce'
    }
}, {
    name: "A2Z",
    manifest: 'https://tvph-atp.vercel.app/api/cg_a2z.mpd',
    drm: {
        type: 'clearkey',
        keyId: 'f703e4c8ec9041eeb5028ab4248fa094',
        key: 'c22f2162e176eee6273a5d0b68d19530'
    }
}, {
    name: "PTV 4",
    manifest: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_ptv4_sd.mpd',
    drm: {
        type: 'clearkey',
        keyId: '71a130a851b9484bb47141c8966fb4a3',
        key: 'ad1f003b4f0b31b75ea4593844435600'
    }
}, {
    name: "IBC 13",
    manifest: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/ibc13_sd_new.mpd',
    drm: {
        type: 'clearkey',
        keyId: '16ecd238c0394592b8d3559c06b1faf5',
        key: '05b47ae3be1368912ebe28f87480fc84'
    }
}, {
    name: "Buko",
    manifest: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_buko_sd.mpd',
    drm: {
        type: 'clearkey',
        keyId: 'd273c085f2ab4a248e7bfc375229007d',
        key: '7932354c3a84f7fc1b80efa6bcea0615'
    }
}, {
    name: "Sari-Sari",
    manifest: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_sari_sari_sd.mpd',
    drm: {
        type: 'clearkey',
        keyId: '0a7ab3612f434335aa6e895016d8cd2d',
        key: 'b21654621230ae21714a5cab52daeb9d'
    }
}, {
    name: "tvN Movies Pinoy",
    manifest: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tvnmovie.mpd',
    drm: {
        type: 'clearkey',
        keyId: '2e53f8d8a5e94bca8f9a1e16ce67df33',
        key: '3471b2464b5c7b033a03bb8307d9fa35'
    }
}, {
    name: "NBA TV Philippines",
    manifest: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cgnl_nba.mpd',
    drm: {
        type: 'clearkey',
        keyId: 'c5e51f41ceac48709d0bdcd9c13a4d88',
        key: '20b91609967e472c27040716ef6a8b9a'
    }
}, {
    name: "Premier Sports HD",
    manifest: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_ps_hd1.mpd',
    drm: {
        type: 'clearkey',
        keyId: 'b8b595299fdf41c1a3481fddeb0b55e4',
        key: 'cd2b4ad0eb286239a4a022e6ca5fd007'
    }
}, {
    name: "One Sports HD",
    manifest: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_onesports_hd.mpd',
    drm: {
        type: 'clearkey',
        keyId: '53c3bf2eba574f639aa21f2d4409ff11',
        key: '3de28411cf08a64ea935b9578f6d0edd'
    }
}, {
    name: "PBA Rush",
    manifest: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_pbarush_hd1.mpd',
    drm: {
        type: 'clearkey',
        keyId: '76dc29dd87a244aeab9e8b7c5da1e5f3',
        key: '95b2f2ffd4e14073620506213b62ac82'
    }
}, {
    name: "UAAP Varsity Channel",
    manifest: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/cg_uaap_cplay_sd.mpd',
    drm: {
        type: 'clearkey',
        keyId: '95588338ee37423e99358a6d431324b9',
        key: '6e0f50a12f36599a55073868f814e81e'
    }
}, {
    name: "One Sports+",
    manifest: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_onesportsplus_hd1.mpd',
    drm: {
        type: 'clearkey',
        keyId: '322d06e9326f4753a7ec0908030c13d8',
        key: '1e3e0ca32d421fbfec86feced0efefda'
    }
}, {
    name: "Tap Sports",
    manifest: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tapsports.mpd',
    drm: {
        type: 'clearkey',
        keyId: 'eabd2d95c89e42f2b0b0b40ce4179ea0',
        key: '0e7e35a07e2c12822316c0dc4873903f'
    }
}, {
    name: "MPTV",
    manifest: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_mptv.mpd',
    drm: {
        type: 'clearkey',
        keyId: '6aab8f40536f4ea98e7c97b8f3aa7d4e',
        key: '139aa5a55ade471faaddacc4f4de8807'
    }
}, {
    name: "Rock Entertainment",
    manifest: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_rockentertainment.mpd',
    drm: {
        type: 'clearkey',
        keyId: 'e4ee0cf8ca9746f99af402ca6eed8dc7',
        key: 'be2a096403346bc1d0bb0f812822bb62'
    }
}, {
    name: "Hits Now",
    manifest: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hitsnow.mpd',
    drm: {
        type: 'clearkey',
        keyId: '14439a1b7afc4527bb0ebc51cf11cbc1',
        key: '92b0287c7042f271b266cc11ab7541f1'
    }
}, {
    name: "Tap TV",
    manifest: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_taptv_sd.mpd',
    drm: {
        type: 'clearkey',
        keyId: 'f6804251e90b4966889b7df94fdc621e',
        key: '55c3c014f2bd12d6bd62349658f24566'
    }
}, {
    name: "Global Trekker",
    manifest: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/globaltrekker.mpd',
    drm: {
        type: 'clearkey',
        keyId: '5c26c24bce2942078cf6e35216632c2d',
        key: '445887a1c0832ff457263d8bcadc993f'
    }
}, {
    name: "Warner TV HD",
    manifest: 'https://tvph-atp.vercel.app/api/warnerHD.mpd',
    drm: {
        type: 'clearkey',
        keyId: '4503cf86bca3494ab95a77ed913619a0',
        key: 'afc9c8f627fb3fb255dee8e3b0fe1d71'
    }
}, {
    name: "HGTV HD",
    manifest: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/hgtv_hd1.mpd',
    drm: {
        type: 'clearkey',
        keyId: 'f0e3ab943318471abc8b47027f384f5a',
        key: '13802a79b19cc3485d2257165a7ef62a'
    }
}, {
    name: "Food Network HD",
    manifest: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_foodnetwork_hd1.mpd',
    drm: {
        type: 'clearkey',
        keyId: 'b7299ea0af8945479cd2f287ee7d530e',
        key: 'b8ae7679cf18e7261303313b18ba7a14'
    }
}, {
    name: "Fashion TV HD",
    manifest: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_fashiontvhd.mpd',
    drm: {
        type: 'clearkey',
        keyId: '971ebbe2d887476398e97c37e0c5c591',
        key: '472aa631b1e671070a4bf198f43da0c7'
    }
}, {
    name: "Lifetime SD",
    manifest: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_lifetime.mpd',
    drm: {
        type: 'clearkey',
        keyId: 'cf861d26e7834166807c324d57df5119',
        key: '64a81e30f6e5b7547e3516bbf8c647d0'
    }
}, {
    name: "Hits HD",
    manifest: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/hits_hd1.mpd',
    drm: {
        type: 'clearkey',
        keyId: 'dac605bc197e442c93f4f08595a95100',
        key: '975e27ffc1b7949721ee3ccb4b7fd3e5'
    }
}, {
    name: "HBO Family HD",
    manifest: 'https://tvph-atp.vercel.app/api/cg_hbofam.mpd',
    drm: {
        type: 'clearkey',
        keyId: '872910c843294319800d85f9a0940607',
        key: 'f79fd895b79c590708cf5e8b5c6263be'
    }
}, {
    name: "HBO HD",
    manifest: 'https://tvph-atp.vercel.app/api/cg_hbohd.mpd',
    drm: {
        type: 'clearkey',
        keyId: 'd47ebabf7a21430b83a8c4b82d9ef6b1',
        key: '54c213b2b5f885f1e0290ee4131d425b'
    }
}, {
    name: "Hits Movies",
    manifest: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_hitsmovies.mpd',
    drm: {
        type: 'clearkey',
        keyId: 'f56b57b32d7e4b2cb21748c0b56761a7',
        key: '3df06a89aa01b32655a77d93e09e266f'
    }
}, {
    name: "TAP Movies HD",
    manifest: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapmovies_hd1.mpd',
    drm: {
        type: 'clearkey',
        keyId: '71cbdf02b595468bb77398222e1ade09',
        key: 'c3f2aa420b8908ab8761571c01899460'
    }
}, {
    name: "Rock Action",
    manifest: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_rockextreme.mpd',
    drm: {
        type: 'clearkey',
        keyId: '0f852fb8412b11edb8780242ac120002',
        key: '4cbc004d8c444f9f996db42059ce8178'
    }
}, {
    name: "Tap Action Flix HD",
    manifest: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapactionflix_hd1.mpd',
    drm: {
        type: 'clearkey',
        keyId: 'bee1066160c0424696d9bf99ca0645e3',
        key: 'f5b72bf3b89b9848de5616f37de040b7'
    }
}, {
    name: "Cinemax HD",
    manifest: 'https://tvph-atp.vercel.app/api/cg_cinemax.mpd',
    drm: {
        type: 'clearkey',
        keyId: 'b207c44332844523a3a3b0469e5652d7',
        key: 'fe71aea346db08f8c6fbf0592209f955'
    }
}, {
    name: "HBO Signature HD",
    manifest: 'https://tvph-atp.vercel.app/api/cg_hbosign.mpd',
    drm: {
        type: 'clearkey',
        keyId: 'a06ca6c275744151895762e0346380f5',
        key: '559da1b63eec77b5a942018f14d3f56f'
    }
}, {
    name: "HBO Hits HD",
    manifest: 'https://tvph-atp.vercel.app/api/cg_hbohits.mpd',
    drm: {
        type: 'clearkey',
        keyId: 'b04ae8017b5b4601a5a0c9060f6d5b7d',
        key: 'a8795f3bdb8a4778b7e888ee484cc7a1'
    }
}, {
    name: "CNN HD",
    manifest: 'https://tvph-atp.vercel.app/api/cg_cnnhd.mpd',
    drm: {
        type: 'clearkey',
        keyId: '900c43f0e02742dd854148b7a75abbec',
        key: 'da315cca7f2902b4de23199718ed7e90'
    }
}, {
    name: "One PH",
    manifest: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/oneph_sd.mpd',
    drm: {
        type: 'clearkey',
        keyId: '92834ab4a7e1499b90886c5d49220e46',
        key: 'a7108d9a6cfcc1b7939eb111daf09ab3'
    }
}, {
    name: "One News",
    manifest: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/onenews_hd1.mpd',
    drm: {
        type: 'clearkey',
        keyId: 'd39eb201ae494a0b98583df4d110e8dd',
        key: '6797066880d344422abd3f5eda41f45f'
    }
}, {
    name: "Nick JR",
    manifest: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/9982/default_ott.mpd',
    drm: {
        type: 'clearkey',
        keyId: 'fa65220c9f76e424173899df533a6d10',
        key: 'b4abbee95b69b3e80a0d141272c870db'
    }
}, {
    name: "Nickelodeon HD",
    manifest: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2511/default_ott.mpd',
    drm: {
        type: 'clearkey',
        keyId: 'd8520e96a1283ab6e5be538474bfa810',
        key: 'bda5f7bbc1e44096f779a0619fe9881f'
    }
}, {
    name: "Kix HD",
    manifest: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/kix_hd1.mpd',
    drm: {
        type: 'clearkey',
        keyId: 'a8d5712967cd495ca80fdc425bc61d6b',
        key: 'f248c29525ed4c40cc39baeee9634735'
    }
}, {
    name: "Thrill SD",
    manifest: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_thrill_sd.mpd',
    drm: {
        type: 'clearkey',
        keyId: '928114ffb2394d14b5585258f70ed183',
        key: 'a82edc340bc73447bac16cdfed0a4c62'
    }
}, {
    name: "Pinoy Box Office (PBO)",
    manifest: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/pbo_sd.mpd',
    drm: {
        type: 'clearkey',
        keyId: 'dcbdaaa6662d4188bdf97f9f0ca5e830',
        key: '31e752b441bd2972f2b98a4b1bc1c7a1'
    }
}, {
    name: "Viva Cinema",
    manifest: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/viva_sd.mpd',
    drm: {
        type: 'clearkey',
        keyId: '07aa813bf2c147748046edd930f7736e',
        key: '3bd6688b8b44e96201e753224adfc8fb'
    }
}, {
    name: "Tagalog Movie Channel (TMC)",
    manifest: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tagalogmovie.mpd',
    drm: {
        type: 'clearkey',
        keyId: '96701d297d1241e492d41c397631d857',
        key: 'ca2931211c1a261f082a3a2c4fd9f91b'
    }
}, {
    name: "SPOTV HD",
    manifest: 'https://qp-pldt-live-grp-05-prod.akamaized.net/out/u/cg_spotvhd.mpd',
    drm: {
        type: 'clearkey',
        keyId: 'ec7ee27d83764e4b845c48cca31c8eef',
        key: '9c0e4191203fccb0fde34ee29999129e'
    }
}, {
    name: "SPOTV 2 HD",
    manifest: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_spotv2hd.mpd',
    drm: {
        type: 'clearkey',
        keyId: '7eea72d6075245a99ee3255603d58853',
        key: '6848ef60575579bf4d415db1032153ed'
    }
}, {
    name: "TV Maria",
    manifest: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/tvmaria_prd.mpd',
    drm: {
        type: 'clearkey',
        keyId: 'fa3998b9a4de40659725ebc5151250d6',
        key: '998f1294b122bbf1a96c1ddc0cbb229f'
    }
}, {
    name: "Lotus Macau",
    manifest: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/lotusmacau_prd.mpd',
    drm: {
        type: 'clearkey',
        keyId: '60dc692e64ea443a8fb5ac186c865a9b',
        key: '01bdbe22d59b2a4504b53adc2f606cc1'
    }
}, {
    name: "TVUP",
    manifest: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/tvup_prd.mpd',
    drm: {
        type: 'clearkey',
        keyId: '83e813ccd4ca4837afd611037af02f63',
        key: 'a97c515dbcb5dcbc432bbd09d15afd41'
    }
}, {
    name: "Premier Sports 2",
    manifest: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_premiertennishd.mpd',
    drm: {
        type: 'clearkey',
        keyId: '59454adb530b4e0784eae62735f9d850',
        key: '61100d0b8c4dd13e4eb8b4851ba192cc'
    }
}, {
    name: "Cinema World (CON)",
    manifest: 'https://qp-pldt-live-grp/api/manifest/1158.mpd',
    drm: {
        type: 'widevine',
        licenseUri: CONVRG_LICENSE_URI
    }
}, {
    name: "Animax",
    manifest: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_animax_sd_new.mpd',
    drm: {
        type: 'clearkey',
        keyId: '92032b0e41a543fb9830751273b8debd',
        key: '03f8b65e2af785b10d6634735dbe6c11'
    }
}, {
    name: "ANC",
    manifest: 'https://qp-pldt-live-grp/api/amagi/linear/amg01006-abs-cbn-anc-global-dash-abscbnono/index.mpd',
    drm: {
        type: 'clearkey',
        keyId: '4bbdc78024a54662854b412d01fafa16',
        key: '6039ec9b213aca913821677a28bd78ae'
    }
}, {
    name: "GMA Pinoy TV",
    manifest: 'https://qp-pldt-live-grp/api/amagi/linear/amg01006-abs-cbn-abscbn-gma-x7-dash-abscbnono/index.mpd',
    drm: {
        type: 'clearkey',
        keyId: 'c95ed4c44b0b4f7fa1c6ebbbbaab21a1',
        key: '47635b8e885e19f2ccbdff078c207058'
    }
}, {
    name: "Myx",
    manifest: 'https://qp-pldt-live-grp/api/amagi/linear/amg01006-abs-cbn-myxnola-dash-abscbnono/index.mpd',
    drm: {
        type: 'clearkey',
        keyId: 'f40a52a3ac9b4702bdd5b735d910fd2f',
        key: '5ce1bc7f06b494c276252b4d13c90e51'
    }
}, {
    name: "Teleradyo Serbisyo",
    manifest: 'https://qp-pldt-live-grp/api/amagi/linear/amg01006-abs-cbn-teleradyo-dash-abscbnono/index.mpd',
    drm: {
        type: 'clearkey',
        keyId: '47c093e0c9fd4f80839a0337da3dd876',
        key: '50547394045b3d047dc7d92f57b5fb33'
    }
}, {
    name: "TFC",
    manifest: 'https://qp-pldt-live-grp/api/amagi/linear/amg01006-abs-cbn-tfcasia-dash-abscbnono/index.mpd',
    drm: {
        type: 'clearkey',
        keyId: '9568cc84e1d944f38eac304517eab6fd',
        key: 'f12142af8f39b3bab79d3679d3665ebe'
    }
}, {
    name: "Eurosport 1",
    manifest: 'https://qp-pldt-live-grp/api/channel/eurosport1/manifest.mpd',
    drm: {
        type: 'widevine',
        licenseUri: 'https://qp-pldt-live-grp/api/widevine/special/key'
    }
}, {
    name: "Eurosport 2", 
    manifest: 'https://qp-pldt-live-grp/api/channel/eurosport2/manifest.mpd',
    drm: {
        type: 'widevine',
        licenseUri: 'https://qp-pldt-live-grp/api/widevine/special/key'
    }
}, {
    name: "Aniplus",
    manifest: 'https://qp-pldt-live-grp/api/stream/aniplus/manifest.mpd',
    drm: {
        type: 'clearkey',
        keyId: 'f2c313fce55344e5a52389741d1f53f8',
        key: 'bae1e47db562b66895beb8fccdf2ad8a'
    }
}, {
    name: "Arirang",
    manifest: 'https://cdn3.skygo.mn/live/disk1/Arirang/HLSv3-FTA/Arirang.m3u8',
    drm: null
}, {
    name: "BBC Earth",
    manifest: 'https://cdn3.skygo.mn/live/disk1/BBC_earth/HLSv3-FTA/BBC_earth.m3u8',
    drm: null
}, {
    name: "BBC Lifestyle",
    manifest: 'https://cdn3.skygo.mn/live/disk1/BBC_lifestyle/HLSv3-FTA/BBC_lifestyle.m3u8',
    drm: null
}, {
    name: "BBC News",
    manifest: 'https://cdn3.skygo.mn/live/disk1/BBC_News/HLSv3-FTA/BBC_News.m3u8',
    drm: null
}, {
    name: "Boomerang",
    manifest: 'https://cdn3.skygo.mn/live/disk1/Boomerang/HLSv3-FTA/Boomerang.m3u8',
    drm: null
}, {
    name: "Bloomberg",
    manifest: 'https://cdn3.skygo.mn/live/disk1/Bloomberg/HLSv3-FTA/Bloomberg.m3u8',
    drm: null
}, {
    name: "C1",
    manifest: 'https://cdn3.skygo.mn/live/disk1/C1/HLSv3-FTA/C1.m3u8',
    drm: null
}, {
    name: "CBeebies",
    manifest: 'https://cdn3.skygo.mn/live/disk1/Cbeebies/HLSv3-FTA/Cbeebies.m3u8',
    drm: null
}, {
    name: "Channel 11",
    manifest: 'https://cdn3.skygo.mn/live/disk1/Channel11/HLSv3-FTA/Channel11.m3u8',
    drm: null
}, {
    name: "Che",
    manifest: 'https://cdn3.skygo.mn/live/disk1/Che/HLSv3-FTA/Che.m3u8',
    drm: null
}, {
    name: "Discovery Asia",
    manifest: 'https://cdn3.skygo.mn/live/disk1/Discovery_Asia/HLSv3-FTA/Discovery_Asia.m3u8',
    drm: null
}, {
    name: "Dreambox",
    manifest: 'https://cdn2.skygo.mn/live/disk1/Dreambox/HLSv3-FTA/Dreambox.m3u8',
    drm: null
}, {
    name: "Eagle",
    manifest: 'https://cdn3.skygo.mn/live/disk1/Eagle/HLSv3-FTA/Eagle.m3u8',
    drm: null
}, {
    name: "Education",
    manifest: 'https://cdn2.skygo.mn/live/disk1/Education/HLSv3-FTA/Education.m3u8',
    drm: null
}, {
    name: "ETV",
    manifest: 'https://cdn3.skygo.mn/live/disk1/ETV/HLSv3-FTA/ETV.m3u8',
    drm: null
}, {
    name: "Friday",
    manifest: 'https://cdn2.skygo.mn/live/disk1/Friday/HLSv3-FTA/Friday.m3u8',
    drm: null
}, {
    name: "Khugjim",
    manifest: 'https://cdn3.skygo.mn/live/disk1/Khugjim/HLSv3-FTA/Khugjim.m3u8',
    drm: null
}, {
    name: "Lotus",
    manifest: 'https://cdn2.skygo.mn/live/disk1/Lotus/HLSv3-FTA/Lotus.m3u8',
    drm: null
}, {
    name: "Malchin",
    manifest: 'https://cdn3.skygo.mn/live/disk1/Malchin/HLSv3-FTA/Malchin.m3u8',
    drm: null
}, {
    name: "Match Planeta",
    manifest: 'https://cdn2.skygo.mn/live/disk1/Match_Planeta/HLSv3-FTA/Match_Planeta.m3u8',
    drm: null
}, {
    name: "MIR",
    manifest: 'https://cdn3.skygo.mn/live/disk1/MIR/HLSv3-FTA/MIR.m3u8',
    drm: null
}, {
    name: "MN25",
    manifest: 'https://cdn2.skygo.mn/live/disk1/MN25/HLSv3-FTA/MN25.m3u8',
    drm: null
}, {
    name: "MNB",
    manifest: 'https://cdn3.skygo.mn/live/disk1/MNB/HLSv3-FTA/MNB.m3u8',
    drm: null
}, {
    name: "MNB World",
    manifest: 'https://cdn2.skygo.mn/live/disk1/MNB_World/HLSv3-FTA/MNB_World.m3u8',
    drm: null
}, {
    name: "MNCTV",
    manifest: 'https://cdn3.skygo.mn/live/disk1/MNCTV/HLSv3-FTA/MNCTV.m3u8',
    drm: null
}, {
    name: "Moviebox",
    manifest: 'https://cdn3.skygo.mn/live/disk1/Moviebox/HLSv3-FTA/Moviebox.m3u8',
    drm: null
}, {
    name: "NHK World",
    manifest: 'https://cdn3.skygo.mn/live/disk1/NHK_World/HLSv3-FTA/NHK_World.m3u8',
    drm: null
}, {
    name: "NHK World Premium",
    manifest: 'https://cdn3.skygo.mn/live/disk1/NHK_World_Premium/HLSv3-FTA/NHK_World_Premium.m3u8',
    drm: null
}, {
    name: "ONTV",
    manifest: 'https://cdn3.skygo.mn/live/disk1/ONTV/HLSv3-FTA/ONTV.m3u8',
    drm: null
}, {
    name: "Parlament",
    manifest: 'https://cdn3.skygo.mn/live/disk1/Parlament/HLSv3-FTA/Parlament.m3u8',
    drm: null
}, {
    name: "Pobeda",
    manifest: 'https://cdn3.skygo.mn/live/disk1/Pobeda/HLSv3-FTA/Pobeda.m3u8',
    drm: null
}, {
    name: "Popcorn",
    manifest: 'https://cdn2.skygo.mn/live/disk1/Popcorn/HLSv3-FTA/Popcorn.m3u8',
    drm: null
}, {
    name: "RenTV",
    manifest: 'https://cdn3.skygo.mn/live/disk1/RenTV/HLSv3-FTA/RenTV.m3u8',
    drm: null
}, {
    name: "SBN",
    manifest: 'https://cdn3.skygo.mn/live/disk1/SBN/HLSv3-FTA/SBN.m3u8',
    drm: null
}, {
    name: "THT",
    manifest: 'https://cdn3.skygo.mn/live/disk1/THT/HLSv3-FTA/THT.m3u8',
    drm: null
}, {
    name: "TV Center",
    manifest: 'https://cdn3.skygo.mn/live/disk1/TV_center/HLSv3-FTA/TV_center.m3u8',
    drm: null
}, {
    name: "TV4",
    manifest: 'https://cdn2.skygo.mn/live/disk1/TV4/HLSv3-FTA/TV4.m3u8',
    drm: null
}, {
    name: "TV7",
    manifest: 'https://cdn3.skygo.mn/live/disk1/TV7/HLSv3-FTA/TV7.m3u8',
    drm: null
}, {
    name: "Vremya",
    manifest: 'https://cdn3.skygo.mn/live/disk1/Vremya/HLSv3-FTA/Vremya.m3u8',
    drm: null
}, {
    name: "Zoomoo",
    manifest: 'https://cdn3.skygo.mn/live/disk1/Zoomoo/HLSv3-FTA/Zoomoo.m3u8',
    drm: null
}, {
    name: "Comedy Central",
    manifest: 'https://qp-pldt-live-grp/api/channel/comedy-central/manifest.m3u8',
    drm: null
}, {
    name: "Animal Planet",
    manifest: 'https://qp-pldt-live-grp/api/channel/animal-planet/manifest.m3u8',
    drm: null
}, {
    name: "Discovery Channel",
    manifest: 'https://qp-pldt-live-grp/api/channel/discovery-channel/manifest.m3u8',
    drm: null
}, {
    name: "HBO Comedy",
    manifest: 'https://qp-pldt-live-grp/api/channel/hbo-comedy/manifest.m3u8',
    drm: null
}, {
    name: "NBA TV OTHER FEED",
    manifest: 'https://qp-pldt-live-grp/api/channel/nba-tv/manifest.m3u8',
    drm: null
}, {
    name: "Fox Sports 1",
    manifest: 'https://qp-pldt-live-grp/api/channel/fox-sports-1/manifest.m3u8',
    drm: null
}, {
    name: "Fox Sports 2",
    manifest: 'https://qp-pldt-live-grp/api/channel/fox-sports-2/manifest.m3u8',
    drm: null
}, {
    name: "National Geographic",
    manifest: 'https://qp-pldt-live-grp/api/channel/national-geographic/manifest.m3u8',
    drm: null
}, {
    name: "Nat Geo Wild",
    manifest: 'https://qp-pldt-live-grp/api/channel/national-geographic-wild/manifest.m3u8',
    drm: null
}, {
    name: "TNT",
    manifest: 'https://qp-pldt-live-grp/api/channel/tnt/manifest.m3u8',
    drm: null
}, {
    name: "HBO Zone",
    manifest: 'https://qp-pldt-live-grp/api/channel/hbo-zone/manifest.m3u8',
    drm: null
}, {
    name: "Disney Junior",
    manifest: 'https://qp-pldt-live-grp/api/channel/disney-junior/manifest.m3u8',
    drm: null
}, {
    name: "Nick Teen",
    manifest: 'https://qp-pldt-live-grp/api/channel/teennick/manifest.m3u8',
    drm: null
}, {
    name: "Star Movies",
    manifest: 'https://qp-pldt-live-grp/api/stream/intigral/manifest.mpd',
    drm: {
        type: 'clearkey',
        keyId: '4b7a662d7132679630f3a3f1862a859c',
        key: '0651bc37e705349a2848278ae3ad7bf4'
    }
}, {
    name: "Nickelodeon USA",
    manifest: 'https://qp-pldt-live-grp/api/channel/nickelodeon/manifest.m3u8',
    drm: null
}, {
    name: "The Cowboy Channel",
    manifest: 'https://qp-pldt-live-grp/api/stream/cowboy/manifest.m3u8',
    drm: null
}, {
    name: "Disney Channel USA",
    manifest: 'https://qp-pldt-live-grp/api/channel/disney/manifest.m3u8',
    drm: null
}, {
    name: "Disney XD",
    manifest: 'https://qp-pldt-live-grp/api/channel/disney-xd/manifest.m3u8',
    drm: null
}, // --- End of Existing Channels ---
].map(channel => {
    // Ensure all channels have an ID
    if (!channel.id) {
        channel.id = generateChannelId(channel.name);
    }
    
    // Proxify PLDT manifest URLs
// Proxify PLDT manifest URLs to use your Nginx server
if (channel.manifest && channel.manifest.includes('api/*')) {
    try {
        const url = new URL(channel.manifest);
        // Use a regular expression to reliably find the group name (e.g., "grp-08")
        const match = url.hostname.match(/api\d+/);

        if (match) {
            const groupName = match[0]; // This will correctly get '*.mpd', '.mpd', etc.
            const manifestName = url.pathname.split('/').pop();

            // Construct the correct URL for your Nginx proxy
            channel.manifest = `tvph-atp.vercel.app/${groupName}/${manifestName}`;
        }
    } catch (e) {
        console.error("Failed to parse PLDT manifest URL:", channel.manifest, e);
        // Keep original URL if parsing fails
    }
}
    
    // Optional: Ensure basic structure for consistency if needed later
    if (!channel.drm)
        channel.drm = null;
    if (!channel.image)
        channel.image = null;
    // Default image handled in UI
    return channel;
}
);

// Export the processed list
export {defaultChannelList, generateChannelId};
