import React from 'react'

import { snsLink } from '../data/header'

const Sns = () => {
    return (
        <div className="header_sns">
            {snsLink.map((sns, key) => (
                <li key={key}>
                    {/* 우리 사이트가 아니라 다른 외부 사이트라 a 링크로 연결함 */}
                    <a href={sns.url}
                        target='_black'
                        rel='noopener noreferrer'
                        aria-label={sns.title}>
                        <span>{sns.icon}</span>
                    </a>
                </li>
            ))}
            <ul>

            </ul>
        </div>
    )
}

export default Sns