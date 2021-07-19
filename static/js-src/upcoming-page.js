// Start fetching right away.
const FEATURES_API_URL = '/api/v0/features';
const CHANNELS_API_URL = '/api/v0/channels';
const channelsArray = ['stable', 'beta', 'dev'];

const channelsPromise = fetch(CHANNELS_API_URL)
  .then((res) => res.text())
  .then((res) => JSON.parse(res.substring(5)));

document.querySelector('.show-blink-checkbox').addEventListener('change', e => {
  e.stopPropagation();
  document.querySelector('chromedash-schedule').showBlink = e.target.checked;
});

const header = document.querySelector('app-header-layout app-header');
if (header) {
  header.fixed = false;
}

async function init() {
  // Prepare data for chromedash-schedule
  const channels = await channelsPromise;
  let featuresPromise = {};

  channelsArray.forEach((channel) => {
    let queryStringUrl = `${FEATURES_API_URL}?milestone=${channels[channel].version}`;
    featuresPromise[channel] = fetch(queryStringUrl)
      .then((res) => res.text())
      .then((res) => JSON.parse(res.substring(5))); // Ignore XSSI prefix
  });

  const features = {};

  for (let channel of channelsArray) {
    features[channel] = await featuresPromise[channel];
  }

  // Remove the loading sign once the data has been fetched from the APIs
  document.body.classList.remove('loading');

  channelsArray.forEach((channel) => {
    channels[channel].components = mapFeaturesToComponents(features[channel].filter(f =>
      f.browsers.chrome.status.milestone_str === channels[channel].version));
  });

  const scheduleEl = document.querySelector('chromedash-schedule');
  scheduleEl.channels = channels;

  window.csClient.getStars().then((starredFeatureIds) => {
    scheduleEl.starredFeatures = new Set(starredFeatureIds);
  });
}

function mapFeaturesToComponents(features) {
  let set = new Set();
  features.forEach(f => set.add(...f.browsers.chrome.blink_components));

  const featuresMappedToComponents = {};
  features.forEach(f => {
    const components = f.browsers.chrome.blink_components;
    components.forEach(component => {
      if (!featuresMappedToComponents[component]) {
        featuresMappedToComponents[component] = [];
      }
      featuresMappedToComponents[component].push(f);
    });
  });

  for (let [, feautreList] of Object.entries(featuresMappedToComponents)) {
    sortFeaturesByName(feautreList);
  }

  return featuresMappedToComponents;
}


/**
 *  @param {!Array<!Object>} features
 */
function sortFeaturesByName(features) {
  features.sort((a, b) => {
    a = a.name.toLowerCase();
    b = b.name.toLowerCase();
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
}

init();
