/* eslint-disable require-jsdoc */
const cnn = require('../app/common/shared');

const bhttp = require('bhttp');
const fetch = require('node-fetch');
const chai = require('chai');
const expect = chai.expect;

describe('covid-cnn-bookmarklet', function() {
  this.timeout(15000);
  describe('getMainUrl', function() {
    const url = cnn.getMainUrl(cnn.today()).replace('https', 'http');
    it('should get HTTP status 200: ' + url, function() {
      return fetch(url).then((resp) => {
        expect(resp.ok);
      });
  });
  describe('getAMPUrl', function() {
    const url = cnn.getAMPUrl(cnn.today()).replace('https', 'http');
    it('should get HTTP status 200: ' + url, function() {
      return fetch(url).then((resp) => {
        expect(resp.ok);
      });
    });
  });
});

