
export default  function Message({ message }) {
    return (
        <blockquote>
            { message.body }
            <span>{ message.username }</span>
        </blockquote>
    )
}