import { Link } from "@inertiajs/react";

export default function Pagination({ links, currentPage }) {
    return (
        <div className="flex justify-center mt-6 mb-6 space-x-2">
            {links.filter((link, index) => {
                const isPrevious = link.label === "&laquo; Anterior";
                const isNext = link.label === "Próximo &raquo;";
                const isCurrent = link.active;

                const isPageBeforeORAfter = index === currentPage || index === currentPage - 1 || index === currentPage + 1;

                return isPrevious || isNext || isCurrent || isPageBeforeORAfter;

            }).map((link, index) => (
                <Link
                    key={index}
                    href={link.url ? link.url : '#'}
                    as="button"
                    className={
                        `px-4 py-1 border rounded-md transition-colors duration-300 ${link.active
                            ? 'bg-blue-600 text-white border-blue-600 cursor-default' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:text-blue-600'
                        } ${!link.url ? 'cursor-not-allowed opacity-50' : ''}`}
                    onClick={e => !link.url && e.preventDefault()}
                >
                    {

                        link.label === "&laquo; Anterior" ? ("<") : link.label === "Próximo &raquo;" ? (">") : (link.label)
                    }
                </Link>
            ))

            }
        </div>
    )
}