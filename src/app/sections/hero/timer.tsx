import React, { Component } from 'react';
import moment from 'moment';

import "./timer.css"

interface CountdownProps {
    timeTillDate: "05 26 2019, 6:00 am";
    timeFormat: "MM DD YYYY, h:mm a";
}

interface CountdownState {
    days: string | undefined;
    hours: string | undefined;
    minutes: string | undefined;
    seconds: string | undefined;
}

export default class Countdown extends Component<CountdownProps, CountdownState> {
    private interval: NodeJS.Timeout | null = null;

    constructor(props: CountdownProps) {
        super(props);
        this.state = {
            days: undefined,
            hours: undefined,
            minutes: undefined,
            seconds: undefined
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const { timeTillDate, timeFormat } = this.props;
            const then = moment(timeTillDate, timeFormat);
            const now = moment();
            const countdown = moment(then.diff(now));
            const days = countdown.format('D');
            const hours = countdown.format('HH');
            const minutes = countdown.format('mm');
            const seconds = countdown.format('ss');

            this.setState({ days, hours, minutes, seconds });
        }, 1000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {
        const { days, hours, minutes, seconds } = this.state;
        const daysRadius = this.mapNumber(Number(days), 30, 0, 0, 360);
        const hoursRadius = this.mapNumber(Number(hours), 24, 0, 0, 360);
        const minutesRadius = this.mapNumber(Number(minutes), 60, 0, 0, 360);
        const secondsRadius = this.mapNumber(Number(seconds), 60, 0, 0, 360);

        if (!seconds) {
            return null;
        }

        return (
            <div>
            
                <div className='countdown-wrapper'>
                    {days && (
                        <div className='countdown-item'>
                            <SVGCircle radius={daysRadius} />
                            {days}
                            <span>days</span>
                        </div>
                    )}
                    {hours && (
                        <div className='countdown-item'>
                            <SVGCircle radius={hoursRadius} />
                            {hours}
                            <span>hours</span>
                        </div>
                    )}
                    {minutes && (
                        <div className='countdown-item'>
                            <SVGCircle radius={minutesRadius} />
                            {minutes}
                            <span>minutes</span>
                        </div>
                    )}
                    {seconds && (
                        <div className='countdown-item'>
                            <SVGCircle radius={secondsRadius} />
                            {seconds}
                            <span>seconds</span>
                        </div>
                    )}
                </div>
                {/* <div className='countdown-item'>
                :
            </div> */}
            </div>
        );
    }

    private mapNumber(number: number, in_min: number, in_max: number, out_min: number, out_max: number): number {
        return ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
    }
}

interface SVGCircleProps {
    radius: number;
}

export const SVGCircle: React.FC<SVGCircleProps> = ({ radius }) => (
    <svg className='countdown-svg'>
        <path fill="none" stroke="#333" strokeWidth="4" d={describeArc(50, 50, 48, 0, radius)} />
    </svg>
);

function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
    };
}

function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number): string {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    const d = [
        'M',
        start.x,
        start.y,
        'A',
        radius,
        radius,
        0,
        largeArcFlag,
        0,
        end.x,
        end.y
    ].join(' ');

    return d;
}
