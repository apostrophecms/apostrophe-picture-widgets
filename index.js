module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Picture',
  beforeConstruct: (self, options) => {
    options.addFields = [
      {
        name: 'hasArtDirection',
        label: 'Enable multiple images for art direction.',
        type: 'select',
        def: 'no',
        choices: [
          {
            label: 'No',
            value: 'no',
            showFields: ['masterImage']
          },
          {
            label: 'Yes',
            value: 'yes'
          }
        ],
        help: 'Only enable if you want the image to visually change with viewport width. Leave disabled for basic responsive image support.'
      },
      {
        name: 'masterImage',
        label: 'Image',
        type: 'singleton',
        widgetType: 'apostrophe-images',
        required: true,
        options: {
          limit: 1
        }
      }
    ];
  }
};
