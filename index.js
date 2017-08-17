var geocode        = require('./lib/ags/geocode'),
    featureservice = require('./lib/ags/featureservice'),
    authentication = require('./lib/ags/authentication');

function Geoservices (options) {
  this.options = options;

  this.geocode = geocode.geocode;
  this.featureservice = featureservice.FeatureService;
  this.authenticate   = authentication.authenticate;

  var self = this;

  this.geocode.Batch = function (optionalToken) {
    optionalToken = optionalToken || self.token;

    var batch = new geocode.Batch(optionalToken);

    return batch;
  };
}

module.exports = exports = Geoservices;
