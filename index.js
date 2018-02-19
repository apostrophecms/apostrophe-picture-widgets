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
    ].concat(options.addFields || []);
  },
  construct: (self, options) => {
    var getUrl = self.apos.attachments.url;

    self.addHelpers({
      getSize: function (image, size) {
        return getUrl(image, { size: size });
      },
      getLargest: function (image) {
        if (getUrl(image, { size: 'max' })) {
          return 'max';
        } else if (getUrl(image, { size: 'full' })) {
          return 'full';
        } else if (getUrl(image, { size: 'two-thirds' })) {
          return 'two-thirds';
        } else if (getUrl(image, { size: 'one-half' })) {
          return 'one-half';
        } else if (getUrl(image, { size: 'one-third' })) {
          return 'one-third';
        } else if (getUrl(image, { size: 'one-sixth' })) {
          return 'one-sixth';
        } else {
          return false;
        }
      }
    });
  }
};
