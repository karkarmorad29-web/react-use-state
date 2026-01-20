export default function LanguageButton({
    title, isActive, onClick
}) {
    return (
        <button className={`bnt ${isActive ? 'active' : ''}`} onClick={onClick}>
            {title}
        </button>
    )
}