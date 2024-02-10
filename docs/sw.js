// Change this to your repository name
var GHPATH = '/Home-MS6271/locked';
 
// Choose a different app prefix name
var APP_PREFIX = 'gppwa_';
 
// The version of the cache. Every time you change any of the files
// you need to change this version (version_01, version_02…). 
// If you don't change the version, the service worker will give your
// users the old files!
var VERSION = 'version_00';
 
// The files to make available for offline use. make sure to add 
// others to this list
var URLS = [    
  `${GHPATH}/`,
  `${GHPATH}/index.html`,

  `${GHPATH}/ff360b79ed14b1f35bcbf21ef854b650cf7660adfeba8176cbb817fea20e782b/`,
  `${GHPATH}/ff360b79ed14b1f35bcbf21ef854b650cf7660adfeba8176cbb817fea20e782b/index.html`
  `${GHPATH}/ff360b79ed14b1f35bcbf21ef854b650cf7660adfeba8176cbb817fea20e782b/login.html`
  
  `/Home-MS6271/nothtml/style.css`,
  `/Home-MS6271/favicon.png`
]