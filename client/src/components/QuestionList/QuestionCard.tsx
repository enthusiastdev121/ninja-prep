import React from 'react'
import './QuestionList.css'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import LockIcon from '@material-ui/icons/Lock'
import { QuestionStatus } from './QuestionListStringIds'
import { Link } from 'react-router-dom'

interface Props {
    status: String
    questionTitle: String
    path: String
}

const QuestionCard = (props: Props) => {
    let icon = null
    if (props.status === QuestionStatus.COMPLETED) {
        icon = <CheckCircleIcon className="check-circle-icon" />
    } else if (props.status === QuestionStatus.PENDING) {
        icon = <MoreHorizIcon className="pending-icon" />
    } else if (props.status === QuestionStatus.LOCKED) {
        icon = <LockIcon className="lock-icon" />
    }

    return (
        <div className="card flex-row flex-wrap mb-3 p-0">
            <div className="img-square-wrapper p-2">{icon}</div>
            <div className="card-block px-2">
                <Link to={'/problem/' + props.path}>
                    <blockquote className="mb-0 lead card-body flex-fill problem-text-color">{props.questionTitle}</blockquote>
                </Link>
            </div>
        </div>
    )
}

export default QuestionCard