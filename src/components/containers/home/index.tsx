import * as React from 'react';

import './index.scss';
import {Button} from "../../ui/button";
import CircleAnimation from "../circle-animation";

export default class Home extends React.Component {

    render() {
        return (
            <div className={'home-wrapper'}>
                <div className={'container'}>
                    <div className={'main-info'}>
                        <h1 className={'glitch'} data-text="Break Solana">Break Solana</h1>
                        <p>This quick game gives you the chance to break the most performant blockchain in the world.
                            Every click submits a transaction. At the end, we will show you how close you came to
                            overwhelming the system.</p>
                        <div className={'buttons-block'}>
                            <Button linkTo={'/game'} name={'Play the game'}/>
                            <a href="https://solana.com/category/blog/">Read how it works</a>
                        </div>
                    </div>
                </div>
                <CircleAnimation className={'hero'}/>
            </div>
        )
    }
}

