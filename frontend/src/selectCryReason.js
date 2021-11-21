const SelectCryReason = ({ trainBrain }) => {
    return <div>
        {
            ['Hungry', 'Thirsty'].map(description => {
                <button onClick = {trainBrain(description)}>{description}</button>
            })
        }
    </div>;
}

export default SelectCryReason;