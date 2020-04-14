/* eslint-disable require-jsdoc */
const cnn = require('../app/common/shared');

const bhttp = require('bhttp');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('covid-cnn-bookmarklet', function() {
  describe('getMainUrl', function() {
    const url = cnn.getMainUrl(cnn.today()).replace('https', 'http');
    it('should get HTTP status 200: ' + url, function() {
      return expect(bhttp.head(url))
          .to.eventually.have.property('statusCode', 200);
    });
  });
  describe('getAMPUrl', function() {
    const url = cnn.getAMPUrl(cnn.today()).replace('https', 'http');
    it('should get HTTP status 200: ' + url, function() {
      return expect(bhttp.head(url))
          .to.eventually.have.property('statusCode', 200);
    });
  });
});

