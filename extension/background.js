let db;

// # bottom of https://thepiratebay.org/
// thepiratebay.am    uj3wazyk5u4hnvtk.onion
// thepiratebay.com   uj3wazyk5u4hnvtk.onion
// thepiratebay.gd    uj3wazyk5u4hnvtk.onion
// thepiratebay.gl    uj3wazyk5u4hnvtk.onion
// thepiratebay.gs    uj3wazyk5u4hnvtk.onion
// thepiratebay.gy    uj3wazyk5u4hnvtk.onion
// thepiratebay.la    uj3wazyk5u4hnvtk.onion
// thepiratebay.mn    uj3wazyk5u4hnvtk.onion
// thepiratebay.ms    uj3wazyk5u4hnvtk.onion
// thepiratebay.net   uj3wazyk5u4hnvtk.onion
// thepiratebay.org   uj3wazyk5u4hnvtk.onion
// thepiratebay.pe    uj3wazyk5u4hnvtk.onion
// thepiratebay.se    uj3wazyk5u4hnvtk.onion
// thepiratebay.sx    uj3wazyk5u4hnvtk.onion
// thepiratebay.vg    uj3wazyk5u4hnvtk.onion
// piratebay.am       uj3wazyk5u4hnvtk.onion
// piratebay.net      uj3wazyk5u4hnvtk.onion
// piratebay.no       uj3wazyk5u4hnvtk.onion
// piratebay.se       uj3wazyk5u4hnvtk.onion
// themusicbay.com    uj3wazyk5u4hnvtk.onion
// themusicbay.net    uj3wazyk5u4hnvtk.onion
// themusicbay.org    uj3wazyk5u4hnvtk.onion



function load_options() {
  db = {};
  chrome.storage.local.get("database", function(items) {
    if (!items.database || items.database == "") {
      items.database = 
`
# Contribute to the database by filing an issue at:
# https://github.com/stefansundin/the-onion-notifier

# https://www.facebook.com/notes/protect-the-graph/making-connections-to-facebook-more-secure/1526085754298237
www.facebook.com          www.facebookwkhpilnemxj7asaniu7vnjjbiltxjqhye3mhbshg7kx5tfyd.onion   


# https://protonmail.com/tor
protonmail.com            protonmailrmez3lotccipshtkleegetolb73fuirgj7r4o4vfu7ozyd.onion       


# https://keybase.io/docs/command_line/tor
keybase.io                keybase5wmilwokqirssclfnsqrjdsi7jdir5wy7y7iu3tanwmtp6oid.onion       


# https://www.propublica.org/nerds/item/a-more-secure-and-anonymous-propublica-using-tor-hidden-services
www.propublica.org        p53lf57qovyuvwsc6xnrppyply3vtqm7l6pcobkmyqsiofyeznfu5uqd.onion       



duckduckgo.com            duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion       


# https://riseup.net/en/tor#riseups-tor-hidden-services
# https://riseup.net/security/network-security/tor/hs-addresses-signed.txt
riseup.net                vww6ybal4bd7szmgncyruucpgfkqahzddi37ktceo3ah7ngmcopnpyyd.onion
www.riseup.net            vww6ybal4bd7szmgncyruucpgfkqahzddi37ktceo3ah7ngmcopnpyyd.onion
help.riseup.net           vww6ybal4bd7szmgncyruucpgfkqahzddi37ktceo3ah7ngmcopnpyyd.onion
lists.riseup.net          7sbw6jufrirhyltzkslhcmkik4z7yrsmbpnptyritvz5nhbk35hncsqd.onion
mail.riseup.net           5gdvpfoh6kb2iqbizb37lzk2ddzrwa47m6rpdueg2m656fovmbhoptqd.onion
pad.riseup.net            kfahv6wfkbezjyg4r6mlhpmieydbebr5vkok5r34ya464gqz6c44bnyd.onion
share.riseup.net          aco6injncogk3siaubyh5sterx7w5pocqdrm7mna7u4wuukscgnqpeid.onion
account.riseup.net        3xeiol2bnhrsqhcsaifwtnlqkylrerdspzua7bcjrh26qlrrrctfobid.onion
we.riseup.net             zkdppoahhqu5ihjqd4qqvyfd2bm4wejrhjosim67t6yopl77jitg2nad.onion
imap.riseup.net           5gdvpfoh6kb2iqbizb37lzk2ddzrwa47m6rpdueg2m656fovmbhoptqd.onion
pop.riseup.net            5gdvpfoh6kb2iqbizb37lzk2ddzrwa47m6rpdueg2m656fovmbhoptqd.onion
smtp.riseup.net           5gdvpfoh6kb2iqbizb37lzk2ddzrwa47m6rpdueg2m656fovmbhoptqd.onion
mx1.riseup.net            aj3nsqqcksrrc5cye5etjsoewz6jrygpekzwoko3q6wyxjlb3dgasfid.onion
0xacab.org                wmj5kiic7b6kjplpbvwadnht2nh2qnkbnqtcv3dyvpqtz7ssbssftxid.onion

# Another useful services
mullvad.net               o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion      # bottom of mullvad.net
twitter.com               twitter3e4tixl4xyajtrzo62zg5vztmjuricljdp2c5kshju4avyoid.onion      # Wikipedia
rutracker.org             torrentsru5dbmqszbdinnz7cjiubxsjngq52qij6ih3fmp3gn7hwqqd.onion      # Wikipedia
rutracker.net             torrentsru5dbmqszbdinnz7cjiubxsjngq52qij6ih3fmp3gn7hwqqd.onion      # Wikipedia
rutracker.nl              torrentsru5dbmqszbdinnz7cjiubxsjngq52qij6ih3fmp3gn7hwqqd.onion      # Wikipedia
flibusta.is               flibustaongezhld6dibs2dps6vm4nvqg2kp7vgowbu76tzopgnhazqd.onion      # Wikipedia
flibusta.net              flibustaongezhld6dibs2dps6vm4nvqg2kp7vgowbu76tzopgnhazqd.onion      # Wikipedia
flisland.net              flibustaongezhld6dibs2dps6vm4nvqg2kp7vgowbu76tzopgnhazqd.onion      # Wikipedia
blog.torproject.org       pzhdfe7jraknpj2qgu5cz2u3i4deuyfwmonvzu5i3nyw4t4bmg7o5pad.onion      # Torproject Onion Redirect 
torproject.org            2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion      # Torproject Onion Redirect
`;
      chrome.storage.local.set(items);
    }
    items.database.split("\n").forEach(function(line) {
      let hash_index = line.indexOf("#");
      if (hash_index != -1) {
        line = line.substr(0, hash_index);
      }
      line = line.trim();
      if (line == "") return;
      let space_index = line.indexOf(" ");
      let domain = line.substr(0, space_index);
      let onion_domain = line.substr(space_index).trim();
      db[domain] = onion_domain;
    });
  });
}

load_options();

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action == "load-options") {
    load_options();
  }
});

function extract_domain(url) {
  let prot_index = url.indexOf("://");
  if (prot_index == -1) return;
  let path_index = url.indexOf("/", prot_index + 3);
  if (path_index == -1) return;
  return url.substring(prot_index+3, path_index);
}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.url) {
    let domain = extract_domain(changeInfo.url);
    let onion_domain = db[domain];
    if (onion_domain) {
      chrome.notifications.create(`${tabId}`, {
        type: "basic",
        iconUrl: "img/icon48.png",
        title: `Onion domain available for ${domain}`,
        message: `Click to open 
                  ${onion_domain}.`,
      });
    }
    else {
      chrome.notifications.clear(`${tabId}`);
    }
  }
});

chrome.notifications.onClicked.addListener(function(id) {
  let tabId = parseInt(id, 10);
  chrome.tabs.get(tabId, function(tab) {
    let domain = extract_domain(tab.url);
    let onion_domain = db[domain];
    let onion_url = tab.url.replace(domain, onion_domain).replace(/^https/, "http");
    chrome.tabs.update(tabId, {
      active: true,
      url: onion_url,
    });
  });
});
