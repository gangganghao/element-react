/* @flow */
import React from 'react';
import { Component, PropTypes, Transition, View } from '../../libs';
import Progress from '../progress/Progress';

export default class UploadList extends Component {
  constructor(props: Object) {
    super(props);
  }

  uploadList(): ?React.DOM {
    const { onPreview, onRemove } = this.context;
    const { listType, fileList } = this.props;
    const isFinished = status => status === 'success';
    if(listType === 'none') return null;
    return (
      <ul
        className={this.classNames({
          'r-el-upload-list': true,
          [`r-el-upload-list--${listType}`]: true
        })}
      >
        {fileList.map(file => (
          <li
            className={this.classNames({
              'r-el-upload-list__item': true,
              [`is-${file.status}`]: true
            })}
            key={file.uid}
          >
            {['picture-card', 'picture'].includes(listType) &&
            isFinished(file.status) &&
            <img
              className="r-el-upload-list__item-thumbnail"
              src={file.url}
              alt=""
            />}

            <a
              className="r-el-upload-list__item-name"
              onClick={() => onPreview(file)}
            >
              <i className="r-el-icon-document" />{file.name}
            </a>
            <label
              className="r-el-upload-list__item-status-label"
            >
              <i
                className={this.classNames({
                  'r-el-icon-upload-success': true,
                  'r-el-icon-circle-check': listType === 'text',
                  'r-el-icon-check': ['picture-card', 'picture'].includes(
                    listType
                  )
                })}
              />

            </label>
            <i className="r-el-icon-close" onClick={() => onRemove(file)} />
            <View
              className="r-el-upload-list__item-actions"
              show={listType === 'picture-card' && isFinished(file.status)}
            >
                <span>
                  <span
                    onClick={() => onPreview(file)}
                    className="r-el-upload-list__item-preview"
                  >
                    <i className="r-el-icon-view" />
                  </span>
                  <span
                    className="r-el-upload-list__item-delete"
                    onClick={() => onRemove(file)}
                  >
                    <i className="r-el-icon-delete2" />
                  </span>
                </span>
            </View>
            {file.status === 'uploading' &&
            <Progress
              strokeWidth={listType === 'picture-card' ? 6 : 2}
              type={listType === 'picture-card' ? 'circle' : 'line'}
              percentage={parseInt(file.percentage, 10)}
              status={
                isFinished(file.status) && file.showProgress ? 'success' : ''
              }
            />}
          </li>
        ))}
      </ul>
    )
  }

  render(): React.DOM {
    return (
      <Transition name="list">{ this.uploadList() }</Transition>
    )
  }
}

UploadList.contextTypes = {
  onPreview: PropTypes.func,
  onRemove: PropTypes.func
};

UploadList.propTypes = {
  listType: PropTypes.string,
  fileList: PropTypes.array
};
