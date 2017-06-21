const nightmare = require('nightmare');
const { expect } = require('chai');

describe('test duckduckgo search results', () => {
  it('should find the nightmare github link first', () => {
    // return nightmare()
    //   .goto('https://duckduckgo.com')
    //   .type('#search_form_input_homepage', 'github nightmare')
    //   .click('#search_button_homepage')
    //   .wait('#zero_click_wrapper .c-info__title a')
    //   .evaluate(() => {
    //     return document.querySelector('#zero_click_wrapper .c-info__title a').href;
    //   })
    //   .end()
    //   .then(link => {
    //     expect(link).to.equal('https://github.com/segmentio/nightmare');
    //     done();
    //   });
    console.log('waaaat');
    return nightmare({ show: true })
      .goto('https://github.com/segmentio/nightmare')
      // .wait('.repository-meta-content')
      .evaluate(() => {
        console.log('2222222222');
      })
      .screenshot('.')
      .evaluate(() => {
        console.log('333333333333');
        return document.querySelector('.repository-meta-content');
      })
      .end()
      .then(wat => {
        expect(wat).to.equal('something');
      });
  });
});
