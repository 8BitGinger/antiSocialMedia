const db = require('../config/connection');
const { Profile, Posts } = require('../models');
const cleanDB = require('./cleanDB');
const profileSeeds = require('./profileSeeds.json');
const postSeeds = require('./postSeeds.json');

db.once('open', async () => {
  try {
    await cleanDB('Profile', 'profiles')
    await Profile.create(profileSeeds);
    await cleanDB('Posts', 'posts')
    await Posts.create(postSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
