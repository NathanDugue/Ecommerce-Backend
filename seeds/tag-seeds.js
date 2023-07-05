const { Tag } = require('../models');

const tagData = [

    {
        tag_name: 'Rock Music',
    },
    {
        tag_name: 'Pop Music',
    },
    {
        tag_name: 'blue',
    },
    {
        tag_name: 'red',
    },
    {
        tag_name: 'green',
    },
    {
        tag_name: 'white',
    },
    {
        tag_name: 'gold',
    },
    {
        tag_name: 'Pop Culture',
    },


];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;