// import React from 'react'
interface Props {
    inverted?: boolean;
    content?: string;
}

export default function LoadingComponent({inverted = true, content = 'Loading...' }: Props) {
    return (
        <div className={`dimmer d-flex justify-content-center align-items-center ${inverted ? 'inverted' : ''}`}>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <span className="ms-2">{content}</span>
        </div>

    )
}
