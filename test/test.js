/* eslint-disable require-jsdoc */
const cnn = require('../app/common/shared');

const bhttp = require('bhttp');
const chai = require('chai');
const expect = chai.expect;

describe('covid-cnn-bookmarklet', function() {
  describe('getMainUrl', function() {
    it('should get HTTP status 200', function() {
      const url = cnn.getMainUrl(cnn.today());
      return bhttp.head(url).then(function(resp) {
        expect(resp.statusCode).to.equal(200);
      });
    });
  });
  describe('getAMPUrl', function() {
    it('should get HTTP status 200', function() {
      const url = cnn.getAMPUrl(cnn.today());
      return bhttp.head(url).then(function(resp) {
        expect(resp.statusCode).to.equal(200);
      });
    });
  });
});

