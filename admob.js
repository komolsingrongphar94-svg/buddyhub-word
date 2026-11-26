import { AdMob, BannerAdPosition, BannerAdSize } from '@capacitor-community/admob';
import { Capacitor } from '@capacitor/core';

const TEST_ADS = {
  banner: 'ca-app-pub-3940256099942544/9214589741',
  interstitial: 'ca-app-pub-3940256099942544/1033173712',
  rewarded: 'ca-app-pub-3940256099942544/5224354917'
};

let initialized = false;
let interstitialReady = false;
let rewardedReady = false;

const isNative = () => Capacitor.isNativePlatform();

export async function initializeAds() {
  if (!isNative() || initialized) return;

  await AdMob.initialize({
    initializeForTesting: true
  });

  initialized = true;
}

export async function showBanner() {
  if (!isNative()) return;

  await initializeAds();

  await AdMob.showBanner({
    adId: TEST_ADS.banner,
    adSize: BannerAdSize.ADAPTIVE_BANNER,
    position: BannerAdPosition.BOTTOM_CENTER,
    isTesting: true
  });
}

export async function removeBanner() {
  if (!isNative()) return;
  await AdMob.removeBanner();
}

export async function prepareInterstitial() {
  if (!isNative()) return;

  await initializeAds();

  await AdMob.prepareInterstitial({
    adId: TEST_ADS.interstitial,
    isTesting: true
  });

  interstitialReady = true;
}

export async function showInterstitial() {
  if (!isNative() || !interstitialReady) return;

  await AdMob.showInterstitial();
  interstitialReady = false;
}

export async function prepareRewarded() {
  if (!isNative()) return;

  await initializeAds();

  await AdMob.prepareRewardVideoAd({
    adId: TEST_ADS.rewarded,
    isTesting: true
  });

  rewardedReady = true;
}

export async function showRewarded() {
  if (!isNative() || !rewardedReady) return null;

  const reward = await AdMob.showRewardVideoAd();
  rewardedReady = false;

  return reward;
}
