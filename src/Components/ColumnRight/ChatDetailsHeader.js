/*
 *  Copyright (c) 2018-present, Evgeny Nadymov
 *
 * This source code is licensed under the GPL v.3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { withTranslation } from 'react-i18next';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '../../Assets/Icons/Back';
import CloseIcon from '../../Assets/Icons/Close';
import { isChannelChat, isPrivateChat } from '../../Utils/Chat';
import './ChatDetailsHeader.css';
import { Tab, Tabs, withStyles } from '@material-ui/core';

const HEADER_TABS = ['info', 'tasks', 'webs', 'files']

const HeadTabs = withStyles({ indicator: { display: 'none' } })(Tabs)
const HeadTab = withStyles({ root: { minWidth: 0, color: 'grey' }, selected: { color: 'black'} })(Tab);

class ChatDetailsHeader extends React.Component {
    render() {
        const { chatId, t, backButton, onBackClick, onClose, onTabChange } = this.props;

        let info = t('ChatInfo');
        if (isPrivateChat(chatId)) {
            info = t('Info');
        } else if (isChannelChat(chatId)) {
            info = t('ChannelInfo');
        }

        return (
            <div className='header-master'>
                {backButton && (
                    <IconButton className='header-left-button' onClick={onClose}>
                        <ArrowBackIcon />
                    </IconButton>
                )}
                <div className='header-status grow cursor-pointer' onClick={onBackClick}>
                    <span className='header-status-content' style={{ overflow: 'visible' }}>
                        <HeadTabs
                            style={{ marginLeft: -12 }}
                            value={ HEADER_TABS.findIndex(t => t === this.props.tab) }
                            onChange={ (_, value) => onTabChange(HEADER_TABS[value]) }
                        >
                            <HeadTab label="info" className="chat-header-text">{info}</HeadTab>
                            <HeadTab label="tasks">Tasks</HeadTab>
                            <HeadTab label="webs" disabled>Webs</HeadTab>
                            <HeadTab label="files" disabled>Files</HeadTab>
                        </HeadTabs>
                    </span>
                </div>
                {!backButton && (
                    <IconButton className='header-right-button' onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                )}
            </div>
        );
    }
}

export default withTranslation()(ChatDetailsHeader);
