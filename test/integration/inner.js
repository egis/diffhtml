describe('diff.innerHTML', function() {
  beforeEach(function() {
    this.fixture = document.createElement('div');
    this.fixture.innerHTML = '<div></div>';
  });

  it('can replace an element with a parent', function() {
    diff.innerHTML(this.fixture, '<p></p>');

    assert.equal(this.fixture.firstChild.tagName, 'P');
  });

  describe('Comments', function() {
    it('ignores comments', function() {
      diff.innerHTML(this.fixture, '<div><p><!-- test --></p></div>');

      assert.equal(this.fixture.firstChild.innerHTML, '<p></p>');
    });
  });

  describe('Text', function() {
    it('can be override existing content', function() {
      diff.innerHTML(this.fixture, 'test');

      assert.equal(this.fixture.firstChild.textContent, 'test');
    });

    it('can be updated by directly setting', function() {
      diff.innerHTML(this.fixture, '<div>test</div>');

      assert.equal(this.fixture.firstChild.textContent, 'test');

      diff.innerHTML(this.fixture, '<div>this</div>');

      assert.equal(this.fixture.firstChild.textContent, 'this');
    });

    it('can replace over markup', function() {
      diff.innerHTML(this.fixture, '<div><div>test div</div></div>');
      diff.innerHTML(this.fixture, '<div>this</div>');

      assert.equal(this.fixture.firstChild.innerHTML, 'this');
    });

    it('will not replace a previous span', function() {
      diff.innerHTML(this.fixture, '<div><span class="test"></span></div>');
      var span = this.fixture.querySelector('.test');
      diff.innerHTML(this.fixture, '<div><span>whatever</span></div>');

      assert.equal(this.fixture.firstChild.innerHTML, '<span>whatever</span>');
      assert.equal(this.fixture.firstChild.firstChild, span, 'are the same element');
    });

    it('supports html5 entities', function() {
      diff.innerHTML(this.fixture, '<div>&gla;</div>');

      assert.equal(this.fixture.firstChild.innerHTML, '⪥');
    });
  });

  describe('Attributes', function() {
    it('can change attributes', function() {
      diff.innerHTML(this.fixture, '<div class="hello"></div>');

      assert.equal(this.fixture.firstChild.className, 'hello');
    });

    it('can change attributes more than once', function() {
      diff.innerHTML(this.fixture, '<div class="hello"></div>');
      diff.innerHTML(this.fixture, '<div class="hello to you"></div>');

      assert.equal(this.fixture.firstChild.className, 'hello to you');
    });

    it('supports inline styles', function() {
      diff.innerHTML(this.fixture,
        '<div><p style="font-size: 11px"></p></div>');

      assert.equal(this.fixture.firstChild.innerHTML, '<p style="font-size: 11px"></p>');
    });

    describe('Data', function() {
      it('has basic support', function() {
        diff.innerHTML(this.fixture, '<div><p data-test="test2"></p></div>');

        assert.equal(this.fixture.firstChild.innerHTML, '<p data-test="test2"></p>');
      });

      it('can handle dash separated properties', function() {
        diff.innerHTML(this.fixture,
          '<div><p data-test-two="test2"></p></div>');

        assert.equal(this.fixture.firstChild.innerHTML, '<p data-test-two="test2"></p>');
      });
    });
  });
});
