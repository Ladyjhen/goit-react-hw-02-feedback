import css from './FeedbackOptions.module.css';
export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div>
            {options.map(option => (
                <button className={css.feedbackButton} key={option} onClick={() => onLeaveFeedback(option)}>
                    {option}
                </button>
            ))}
        </div>
    );
};