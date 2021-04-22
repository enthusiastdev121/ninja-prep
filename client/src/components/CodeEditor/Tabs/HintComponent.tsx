import React, { Fragment } from 'react'
import { Accordion, Card } from 'react-bootstrap'
import _ from 'lodash'

interface Props {
    hints: Array<string>
}

const HintCard = ({ index, hint }: { index: number; hint: string }) => {
    return (
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey={index.toString()} className="text-dark bg-light">
                Hint {index}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={index.toString()}>
                <p className="p-3 text-dark">{hint}</p>
            </Accordion.Collapse>
        </Card>
    )
}

const HintComponent = (props: Props) => {
    if (_.isNull(props.hints)) {
        return <Fragment />
    }
    return (
        <div className="text-dark pb-4">
            <p className="font-weight-bold lead">Hints</p>
            <Accordion>
                {props.hints.map((hint, index) => {
                    return <HintCard index={index + 1} hint={hint} />
                })}
            </Accordion>
        </div>
    )
}

export default HintComponent
