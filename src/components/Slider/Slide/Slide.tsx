import React from "react";
import './Slide.scss'

interface IProps {
    title: { value: string, color?: string },
    description?: string,
    src: string,
    imgHeight: number,
    dopSrc?: string
}

const Slide: React.FC<IProps> = ({ title, description, src, imgHeight, dopSrc }) => {
    return (
        <div className={'slide'} style={{ backgroundImage: `url(${src})`, height: imgHeight + 'px' }}>
            <h4 className={'slide__title'} style={{ color: title.color ? title.color : '#FFFFFF' }}>{title.value}</h4>
            {
                description
                    ? (<p className={'slide__description'}>{description}</p>)
                    : null
            }
            {
                dopSrc
                    ? <img className={'slide__dop-icon'} src={dopSrc} alt="Dop Icon" />
                    : null
            }
        </div>
    )
}

export default Slide;