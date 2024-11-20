export default function Spinner({ size = 'md', className }) {
    return <span className={`loading loading-dots ${size === 'md' ? 'loading-md' : 'loading-sm'} ${className ?? ''}`}></span>
}