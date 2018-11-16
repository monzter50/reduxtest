import React from 'react';

const CardContainer = (props) => {
    return(
        <div className="card card--dark">
            <div className="card__avatar">
                <img src="https://dubsism.files.wordpress.com/2017/12/image-not-found.png?w=547" alt=""/>
            </div>
            <div className="card__body">
                <div className="card__description">
                    {props.children}
                    {/*<h1>Tour 1</h1>*/}
                    {/*<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel modi praesentium nisi eius veniam*/}
                        {/*dolores quia numquam cumque! Voluptatem quasi quaerat itaque quae ipsum obcaecati iure, in ut*/}
                        {/*officia amet.</p>*/}
                    {/*<a className="button--dark" href="">Add Cart</a>*/}
                    {/*<a className="button--dark" href="">Learn More</a>*/}
                </div>
            </div>
        </div>
    );
};

export default CardContainer;