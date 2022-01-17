import React, { Component } from 'react';
import './Calculator.css';

import Button from './Button/Button';
import Display from './Display/Display';

export default class Calculator extends Component {
    render() {
        return (
            <div className='calculator'>
                <Display value={0} />
                <Button label='AC'double='double' />
                <Button label='/' operation='operation' />
                <Button label='7' />
                <Button label='8' />
                <Button label='9' />
                <Button label='*' operation='operation' />
                <Button label='4' />
                <Button label='5' />
                <Button label='6' />
                <Button label='-' operation='operation' />
                <Button label='1' />
                <Button label='2' />
                <Button label='3' />
                <Button label='+' operation='operation' />
                <Button label='0' />
                <Button label='.' />
                <Button label='=' operation='operation' triple='triple' />
            </div>
        );
    }
}
