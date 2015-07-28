App.info({
  name: 'teamjukka',
  description: 'Mud run teams social collaboration app.',
  author: 'jucca',
  website: 'http://teamjukka.no-ip.org',
  version: '0.0.1'
});

App.icons({
  'iphone': 'resources/icons/icon-60x60.png',
  'iphone_2x': 'resources/icons/icon-60x60@2x.png'
});

App.launchScreens({
  'iphone': 'resources/splash/splash-320x480.png',
  'iphone5': 'resources/splash/splash-320x568@2x.png'
});

App.setPreference('StatusBarOverlaysWebView', false);
App.setPreference('StatusBarBackgroundColor', '#151515');
