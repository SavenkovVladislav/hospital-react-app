import React, { Component } from "react";

import { map } from 'underscore';

import './Home.scss';

import Header from '../Header/Header';

import { ReactComponent as Star } from '../../images/svg/star.svg';
import { ReactComponent as House } from '../../images/svg/house.svg';
import { ReactComponent as Clients } from '../../images/svg/clients.svg';
import { ReactComponent as Messages } from '../../images/svg/messages.svg';
import { ReactComponent as Broadcast } from '../../images/svg/broadcast.svg';
import { ReactComponent as Employees } from '../../images/svg/employees.svg';
import { ReactComponent as Appoinyment } from '../../images/svg/appointment.svg';

const TITLE = 'Домашняя'

const SECTIONS = [
    { title: 'События', href: '/events', Icon: Star },
    { title: 'Клиенты', href: '/clients', Icon: Clients },
    { title: 'Сообщения', href: '/messages', Icon: Messages },
    { title: 'Оповещения', href: '/broadcast', Icon: Broadcast },
    { title: 'Сотрудники', href: '/employees', Icon: Employees },
    { title: 'Приемы', href: '/appoinyment', Icon: Appoinyment },
]

export default class Home extends Component {
    render() {
        return (
            <div className='Home'>
                <Header
                    title={TITLE}
                    userName='Иванов Иван Иванович'
                    className='Home-Header'
                    renderIcon={() => (
                        <House className='Header-Icon' />
                    )}
                />
                <div className='Home-Body'>
                    <div className='SectionNavigation'>
                        {map(SECTIONS, ({ title, href, Icon }, index) => (
                            <a className='SectionNavigation-Item Section' href={href}>
                                <Icon className='Section-Icon' />
                                <span className='Section-Title'>{title}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

