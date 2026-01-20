export default function LanguageCard({ languages }) {
    return (
        <div className="card">

            {languages ? (
                <>
                    <h2>{languages.title}</h2>
                    <p>{languages.description}</p>
                </>
            ) : (
                <p className="no-selection">
                    Nesssun linguaggio selesionato
                </p>
            )}
        </div>
    );
}