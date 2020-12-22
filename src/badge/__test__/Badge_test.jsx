import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Badge from '../';
import { Button, Dropdown } from '../../';

describe('Badge Test', () => {
  it('Basic usage', () => {
    const w = mount(
      <Badge value={ 12 }>
        <Button size="small">TEST</Button>
      </Badge>
    );
    expect(w.find('.r-el-badge .r-el-button span').text()).toBe('TEST');
    expect(w.find('.r-el-badge sup.r-el-badge__content').text()).toBe('12');
  });

  it('with Dropdown', () => {
    const w = mount(
      <Dropdown trigger="click" menu={(
        <Dropdown.Menu>
          <Dropdown.Item className="clearfix">
            <span>评论</span><Badge className="mark" value={ 12 } />
          </Dropdown.Item>
          <Dropdown.Item className="clearfix">
            <span>回复</span><Badge className="mark" value={ 3 } />
          </Dropdown.Item>
        </Dropdown.Menu>
        )}
      >
        <span className="r-el-dropdown-link">
          点我查看<i className="r-el-icon-caret-bottom r-el-icon--right"></i>
        </span>
      </Dropdown>
    );
    expect(w.find('.r-el-dropdown-menu').childAt(0).find('div.r-el-badge').hasClass('mark')).toBeTruthy();
    expect(w.find('.r-el-dropdown-menu').childAt(1).find('div.r-el-badge').hasClass('mark')).toBeTruthy();
    expect(w.find('.r-el-dropdown-menu').childAt(0).find('sup.r-el-badge__content').text()).toBe('12');
    expect(w.find('.r-el-dropdown-menu').childAt(1).find('sup.r-el-badge__content').text()).toBe('3');
  });

  it('Max value', () => {
    const w1 = shallow(
      <Badge value={ 200 } max={ 99 }>
        <Button size="small">TEST</Button>
      </Badge>
    );
    const w2 = shallow(
      <Badge value={ 99 } max={ 99 }>
        <Button size="small">TEST</Button>
      </Badge>
    );
    const w3 = shallow(
      <Badge value={ 1 } max={ 99 }>
        <Button size="small">TEST</Button>
      </Badge>
    );
    expect(w1.find('.r-el-badge sup.r-el-badge__content').text()).toBe('99+');
    expect(w2.find('.r-el-badge sup.r-el-badge__content').text()).toBe('99');
    expect(w3.find('.r-el-badge sup.r-el-badge__content').text()).toBe('1');
  });

  it('Custom content', () => {
    const w1 = shallow(
      <Badge value={ 'new' }>
        <Button size="small">TEST</Button>
      </Badge>
    );
    const w2 = shallow(
      <Badge value={ 'hot' }>
        <Button size="small">TEST</Button>
      </Badge>
    );
    expect(w1.find('.r-el-badge sup.r-el-badge__content').text()).toBe('new');
    expect(w2.find('.r-el-badge sup.r-el-badge__content').text()).toBe('hot');
  });

  it('Dot', () => {
    const w1 = shallow(
      <Badge isDot>
        <Button className="share-button" icon="share" type="primary"></Button>
      </Badge>
    );
    expect(w1.find('.r-el-badge sup.r-el-badge__content').hasClass('is-dot')).toBeTruthy();
  });
});
