/* eslint-disable require-jsdoc */
// const assert = require('assert');

const cnn = require('../app/common/shared');

const bhttp = require('bhttp');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const should = chai.should();

describe('covid-cnn-bookmarklet', function() {
  describe('getMainUrl', function() {
    it('should get HTTP status 200', function() {
      const url = cnn.getMainUrl(cnn.today());
      return bhttp.head(url).should.eventually.have.property('statusCode').that.equals(200);
    });
  });
  describe('getAMPUrl', function() {
    it('should get HTTP status 200', function() {
      const url = cnn.getAMPUrl(cnn.today());
      return bhttp.head(url).should.eventually.have.property('statusCode').that.equals(200);
    });
  });
});

